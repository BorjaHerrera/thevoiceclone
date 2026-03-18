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
        // WordPress dashboard pages that redirect without the /wp-admin/ prefix
        { source: '/edit.php',             destination: '/api/wp-proxy?wpPath=edit.php' },
        { source: '/post.php',             destination: '/api/wp-proxy?wpPath=post.php' },
        { source: '/admin.php',            destination: '/api/wp-proxy?wpPath=admin.php' },
        { source: '/admin-ajax.php',       destination: '/api/wp-proxy?wpPath=admin-ajax.php' },
        { source: '/async-upload.php',     destination: '/api/wp-proxy?wpPath=async-upload.php' },
        { source: '/media-upload.php',     destination: '/api/wp-proxy?wpPath=media-upload.php' },
        // Generic catch-all for any other bare .php file WordPress might reference
        { source: '/:file((?!api/)[^/]+\\.php)', destination: '/api/wp-proxy?wpPath=:file' },
      ],
      afterFiles: [],
      fallback: [],
    }
  },
}

module.exports = nextConfig
