import { NextRequest, NextResponse } from 'next/server'

const WP_ORIGIN = 'https://cms.thevoiceclone.com'
const WP_HOST = 'cms.thevoiceclone.com'
const PUBLIC_HOST = 'thevoiceclone.com'

const WP_PATHS = ['/wp-admin', '/wp-login.php', '/wp-content', '/wp-json', '/graphql']

// Headers that must not be forwarded as-is to the client
const SKIP_RESPONSE_HEADERS = new Set([
  'set-cookie',
  'location',
  'content-encoding',
  'content-length',
  'transfer-encoding',
  'connection',
  'keep-alive',
])

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only proxy explicit WP paths
  const isWpPath = WP_PATHS.some(
    (p) => pathname === p || pathname.startsWith(p + '/')
  )
  if (!isWpPath) return NextResponse.next()

  try {
    const { search } = request.nextUrl
    const upstreamUrl = `${WP_ORIGIN}${pathname}${search}`

    const reqHeaders = new Headers(request.headers)
    reqHeaders.set('host', WP_HOST)
    reqHeaders.set('x-forwarded-host', WP_HOST)
    reqHeaders.set('x-forwarded-proto', 'https')

    // Buffer request body (avoids ReadableStream/duplex issues in Edge Runtime)
    let body: ArrayBuffer | undefined
    if (!['GET', 'HEAD'].includes(request.method)) {
      body = await request.arrayBuffer()
    }

    const upstream = await fetch(upstreamUrl, {
      method: request.method,
      headers: reqHeaders,
      redirect: 'manual',
      body: body,
    })

    // Buffer response body (avoids external ReadableStream issues in Edge Runtime)
    const responseBody = await upstream.arrayBuffer()

    const response = new NextResponse(responseBody, { status: upstream.status })

    // Forward safe response headers
    upstream.headers.forEach((value, key) => {
      if (!SKIP_RESPONSE_HEADERS.has(key.toLowerCase())) {
        try { response.headers.set(key, value) } catch { /* skip immutable */ }
      }
    })

    // Rewrite Location so post-login redirects pass through the proxy
    const location = upstream.headers.get('location')
    if (location) {
      const rewritten = location
        .replace(`https://${WP_HOST}`, '')
        .replace(`http://${WP_HOST}`, '')
      response.headers.set('location', rewritten || '/')
    }

    // Forward Set-Cookie headers individually with domain rewrite
    let cookies: string[] = []
    try {
      const h = upstream.headers as Headers & { getSetCookie?: () => string[] }
      if (typeof h.getSetCookie === 'function') {
        cookies = h.getSetCookie()
      }
    } catch { /* fall through to combined fallback */ }

    if (cookies.length === 0) {
      const combined = upstream.headers.get('set-cookie')
      if (combined) {
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
  } catch {
    // On any unexpected error, let the request pass through
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
