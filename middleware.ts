import { NextRequest, NextResponse } from 'next/server'

const WP_ORIGIN = 'https://cms.thevoiceclone.com'
const WP_HOST = 'cms.thevoiceclone.com'

export async function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const upstreamUrl = `${WP_ORIGIN}${pathname}${search}`

  const headers = new Headers(request.headers)
  headers.set('host', WP_HOST)
  headers.set('x-forwarded-host', WP_HOST)

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

  const responseHeaders = new Headers(upstream.headers)

  // Rewrite any absolute redirect Location pointing to the internal IP
  const location = responseHeaders.get('location')
  if (location) {
    responseHeaders.set(
      'location',
      location.replace(`http://${WP_ORIGIN}`, `https://${WP_HOST}`)
                .replace(`http://cms.thevoiceclone.com`, `https://${WP_HOST}`)
    )
  }

  return new NextResponse(upstream.body, {
    status: upstream.status,
    headers: responseHeaders,
  })
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
