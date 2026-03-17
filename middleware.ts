import { NextRequest, NextResponse } from 'next/server'

const WP_ORIGIN = 'https://cms.thevoiceclone.com'
const WP_HOST = 'cms.thevoiceclone.com'
const PUBLIC_HOST = 'thevoiceclone.com'

// Headers unsafe to forward as-is (fetch auto-decodes body; proxying these breaks clients)
const SKIP_HEADERS = new Set([
  'set-cookie',
  'location',
  'content-encoding',
  'content-length',
  'transfer-encoding',
  'connection',
  'keep-alive',
])

const WP_PATHS = ['/wp-admin', '/wp-login.php', '/wp-content', '/wp-json', '/graphql']

async function proxyToWordPress(request: NextRequest): Promise<NextResponse> {
  const { pathname, search } = request.nextUrl
  const upstreamUrl = `${WP_ORIGIN}${pathname}${search}`

  const reqHeaders = new Headers(request.headers)
  reqHeaders.set('host', WP_HOST)
  reqHeaders.set('x-forwarded-host', WP_HOST)
  reqHeaders.set('x-forwarded-proto', 'https')

  const init: RequestInit & { duplex?: string } = {
    method: request.method,
    headers: reqHeaders,
    redirect: 'manual',
  }

  if (!['GET', 'HEAD'].includes(request.method)) {
    init.body = request.body
    init.duplex = 'half'
  }

  let upstream: Response
  try {
    upstream = await fetch(upstreamUrl, init)
  } catch {
    return new NextResponse('Bad Gateway', { status: 502 })
  }

  const response = new NextResponse(upstream.body, { status: upstream.status })

  // Copy safe response headers
  upstream.headers.forEach((value, key) => {
    if (!SKIP_HEADERS.has(key.toLowerCase())) {
      try { response.headers.set(key, value) } catch { /* immutable — skip */ }
    }
  })

  // Rewrite Location so post-login redirects go through the proxy
  const location = upstream.headers.get('location')
  if (location) {
    const rewritten = location
      .replace(`https://${WP_HOST}`, '')
      .replace(`http://${WP_HOST}`, '')
    response.headers.set('location', rewritten || '/')
  }

  // Forward Set-Cookie headers with domain rewrite.
  // getSetCookie() keeps each Set-Cookie separate; the standard Headers API
  // merges them which breaks WordPress session cookies.
  // We wrap in try/catch as a safety net for edge runtimes that lack the method.
  let cookies: string[] = []
  try {
    const h = upstream.headers as Headers & { getSetCookie?: () => string[] }
    if (typeof h.getSetCookie === 'function') {
      cookies = h.getSetCookie()
    }
  } catch { /* getSetCookie not available — fall through to combined fallback */ }

  // Fallback: if getSetCookie() unavailable, parse the combined value.
  // Split on ", " only where the next token looks like name=value (not a cookie attribute).
  if (cookies.length === 0) {
    const combined = upstream.headers.get('set-cookie')
    if (combined) {
      // Cookies are separated by ", " but attributes also use ", " in Expires dates.
      // Split conservatively on ", " followed by a word-char and "=".
      cookies = combined.split(/,\s*(?=[^\s,;=]+=)/)
    }
  }

  for (const cookie of cookies) {
    const rewritten = cookie.replace(
      /([Dd]omain=)cms\.thevoiceclone\.com/g,
      `$1${PUBLIC_HOST}`
    )
    response.headers.append('set-cookie', rewritten)
  }

  return response
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Guard: only proxy explicit WP paths — pass everything else through
  const isWpPath = WP_PATHS.some(
    (p) => pathname === p || pathname.startsWith(p + '/')
  )
  if (!isWpPath) return NextResponse.next()

  try {
    return await proxyToWordPress(request)
  } catch {
    // On any unexpected error let the request pass rather than returning 500
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    '/wp-login.php',
    '/wp-admin/:path*',
    '/wp-content/:path*',
    '/wp-json/:path*',
    '/graphql',
  ],
}
