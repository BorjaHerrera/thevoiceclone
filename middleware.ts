import { NextRequest, NextResponse } from 'next/server'

const WP_ORIGIN = 'https://cms.thevoiceclone.com'
const WP_HOST = 'cms.thevoiceclone.com'
const PUBLIC_HOST = 'thevoiceclone.com'

export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const upstreamUrl = `${WP_ORIGIN}${pathname}${search}`

  const headers = new Headers(request.headers)
  headers.set('host', WP_HOST)
  headers.set('x-forwarded-host', WP_HOST)
  headers.set('x-forwarded-proto', 'https')

  const init: RequestInit & { duplex?: string } = {
    method: request.method,
    headers,
    redirect: 'manual',
  }

  if (!['GET', 'HEAD'].includes(request.method)) {
    init.body = request.body
    init.duplex = 'half'
  }

  const upstream = await fetch(upstreamUrl, init)

  const response = new NextResponse(upstream.body, { status: upstream.status })

  // Copy all response headers except set-cookie and location (handled below)
  upstream.headers.forEach((value, key) => {
    const k = key.toLowerCase()
    if (k !== 'set-cookie' && k !== 'location') {
      try { response.headers.set(key, value) } catch { /* skip immutable headers */ }
    }
  })

  // Rewrite Location: strip WP origin so the browser follows through the proxy
  const location = upstream.headers.get('location')
  if (location) {
    const rewritten = location
      .replace(`https://${WP_HOST}`, '')
      .replace(`http://${WP_HOST}`, '')
    response.headers.set('location', rewritten || '/')
  }

  // Forward each Set-Cookie header individually (Headers API merges them otherwise)
  // and rewrite Domain so cookies are valid on the public host
  const setCookies: string[] =
    typeof (upstream.headers as any).getSetCookie === 'function'
      ? (upstream.headers as any).getSetCookie()
      : []

  for (const cookie of setCookies) {
    const rewritten = cookie
      .replace(new RegExp(`[Dd]omain=${WP_HOST}`, 'g'), `Domain=${PUBLIC_HOST}`)
      // Remove Secure flag is NOT needed — thevoiceclone.com is HTTPS
    response.headers.append('set-cookie', rewritten)
  }

  return response
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
