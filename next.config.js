/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['thevoiceclone.com'],
  },
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
  },
  async rewrites() {
    return {
      // beforeFiles runs before filesystem/i18n routing
      beforeFiles: [
        { source: '/wp-login.php',         destination: '/api/wp-proxy?wpPath=wp-login.php' },
        // /wp-admin without slash and with trailing slash must be explicit —
        // :path* requires at least one segment, so bare /wp-admin and /wp-admin/
        // would fall through to Next.js 404 without these two rules.
        { source: '/wp-admin',             destination: '/api/wp-proxy?wpPath=wp-admin/' },
        { source: '/wp-admin/',            destination: '/api/wp-proxy?wpPath=wp-admin/' },
        { source: '/wp-admin/:path*',       destination: '/api/wp-proxy?wpPath=wp-admin/:path*' },
        { source: '/wp-content/:path*',     destination: '/api/wp-proxy?wpPath=wp-content/:path*' },
        { source: '/wp-json/:path*',        destination: '/api/wp-proxy?wpPath=wp-json/:path*' },
        { source: '/graphql',               destination: '/api/wp-proxy?wpPath=graphql' },
      ],
      afterFiles: [],
      fallback: [],
    }
  },
}

module.exports = nextConfig
