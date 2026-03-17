import type { NextApiRequest, NextApiResponse } from 'next'

const WP_HOST = 'cms.thevoiceclone.com'
const PUBLIC_HOST = 'thevoiceclone.com'

const SKIP_RESPONSE_HEADERS = new Set([
  'content-encoding',
  'content-length',
  'transfer-encoding',
  'connection',
  'keep-alive',
])

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Reconstruct upstream path from wpPath + remaining query params
  const { wpPath, ...rest } = req.query
  const pathSegment = Array.isArray(wpPath) ? wpPath[0] : wpPath ?? ''
  const qs = new URLSearchParams(
    Object.entries(rest).flatMap(([k, v]) =>
      Array.isArray(v) ? v.map((val) => [k, val]) : [[k, v ?? '']]
    )
  ).toString()
  const upstreamUrl = `https://${WP_HOST}/${pathSegment}${qs ? '?' + qs : ''}`

  // Build request headers, replacing Host
  const reqHeaders: Record<string, string> = {}
  for (const [key, value] of Object.entries(req.headers)) {
    const k = key.toLowerCase()
    if (k === 'host' || k === 'connection') continue
    reqHeaders[key] = Array.isArray(value) ? value.join(', ') : (value ?? '')
  }
  reqHeaders['host'] = WP_HOST
  reqHeaders['x-forwarded-host'] = WP_HOST
  reqHeaders['x-forwarded-proto'] = 'https'

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
      .replace(`https://${WP_HOST}`, '')
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
