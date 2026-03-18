import type { NextApiRequest, NextApiResponse } from 'next'

const WP_HOST = 'cms.thevoiceclone.com'
const WP_ORIGIN = `https://${WP_HOST}`
const PUBLIC_HOST = 'thevoiceclone.com'
const PUBLIC_ORIGIN = `https://${PUBLIC_HOST}`

const SKIP_RESPONSE_HEADERS = new Set([
  'content-encoding',
  'content-length',
  'transfer-encoding',
  'connection',
  'keep-alive',
])

/** Rewrite public-facing URLs in a header value to the upstream WP host */
function rewriteToWp(value: string): string {
  return value
    .replace(PUBLIC_ORIGIN, WP_ORIGIN)
    .replace(PUBLIC_HOST, WP_HOST)
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Read the full query string directly from req.url (the rewritten URL) so that
  // all original query params are preserved even if Next.js's rewrite merging drops them.
  // req.url = "/api/wp-proxy?wpPath=wp-admin/edit.php&post_type=page&..."
  const rawQs = req.url?.includes('?') ? req.url.split('?')[1] : ''
  const params = new URLSearchParams(rawQs)
  const pathSegment = params.get('wpPath') ?? ''
  params.delete('wpPath')
  const qs = params.toString()
  const upstreamUrl = `${WP_ORIGIN}/${pathSegment}${qs ? '?' + qs : ''}`

  // Build request headers
  const reqHeaders: Record<string, string> = {}
  for (const [key, value] of Object.entries(req.headers)) {
    const k = key.toLowerCase()
    if (k === 'host' || k === 'connection') continue
    const v = Array.isArray(value) ? value.join(', ') : (value ?? '')

    // Rewrite Referer and Origin so WordPress nonce/capability checks pass —
    // WordPress validates these against its own siteurl (cms.thevoiceclone.com).
    if (k === 'referer' || k === 'origin') {
      reqHeaders[key] = rewriteToWp(v)
      continue
    }

    reqHeaders[key] = v
  }

  reqHeaders['host'] = WP_HOST
  reqHeaders['x-forwarded-host'] = WP_HOST
  reqHeaders['x-forwarded-proto'] = 'https'

  // Preserve the real client IP for WordPress audit logs / security plugins
  const clientIp =
    (req.headers['x-real-ip'] as string) ||
    (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim()
  if (clientIp) {
    reqHeaders['x-forwarded-for'] = clientIp
    reqHeaders['x-real-ip'] = clientIp
  }

  // Read request body for non-GET methods (bodyParser is disabled)
  let body: Buffer | undefined
  if (req.method && !['GET', 'HEAD'].includes(req.method)) {
    body = await new Promise<Buffer>((resolve, reject) => {
      const chunks: Buffer[] = []
      req.on('data', (chunk: Buffer) => chunks.push(chunk))
      req.on('end', () => resolve(Buffer.concat(chunks)))
      req.on('error', reject)
    })
  }

  const upstream = await fetch(upstreamUrl, {
    method: req.method,
    headers: reqHeaders,
    redirect: 'manual',
    body: body,
  })

  // Forward status
  res.status(upstream.status)

  // Forward safe response headers
  upstream.headers.forEach((value, key) => {
    const k = key.toLowerCase()
    if (SKIP_RESPONSE_HEADERS.has(k) || k === 'set-cookie' || k === 'location') return
    res.setHeader(key, value)
  })

  // Rewrite Location so redirects stay within the proxy
  const location = upstream.headers.get('location')
  if (location) {
    const rewritten = location
      .replace(WP_ORIGIN, '')
      .replace(`http://${WP_HOST}`, '')
    res.setHeader('location', rewritten || '/')
  }

  // Forward Set-Cookie headers individually with domain rewrite
  // Node.js res.setHeader with an array correctly sets multiple Set-Cookie headers
  let cookies: string[] = []
  try {
    const h = upstream.headers as Headers & { getSetCookie?: () => string[] }
    if (typeof h.getSetCookie === 'function') {
      cookies = h.getSetCookie()
    }
  } catch { /* fall through */ }

  if (cookies.length === 0) {
    const combined = upstream.headers.get('set-cookie')
    if (combined) {
      cookies = combined.split(/,\s*(?=[^\s,;=]+=)/)
    }
  }

  if (cookies.length > 0) {
    res.setHeader(
      'set-cookie',
      cookies.map((c) =>
        c.replace(/([Dd]omain=)cms\.thevoiceclone\.com/g, `$1${PUBLIC_HOST}`)
      )
    )
  }

  // Send response body
  const buffer = await upstream.arrayBuffer()
  res.end(Buffer.from(buffer))
}

export const config = {
  api: {
    bodyParser: false,   // we read the stream manually
    responseLimit: false, // allow large wp-content files
  },
}
