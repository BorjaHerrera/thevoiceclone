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
      // beforeFiles runs before Next.js routing and i18n — required for wp-* paths
      beforeFiles: [
        {
          source: '/wp-login.php',
          destination: 'http://185.176.8.9/wp-login.php',
        },
        {
          source: '/wp-admin/:path*',
          destination: 'http://185.176.8.9/wp-admin/:path*',
        },
        {
          source: '/wp-content/:path*',
          destination: 'http://185.176.8.9/wp-content/:path*',
        },
        {
          source: '/wp-json/:path*',
          destination: 'http://185.176.8.9/wp-json/:path*',
        },
        {
          source: '/graphql',
          destination: 'http://185.176.8.9/graphql',
        },
      ],
      afterFiles: [],
      fallback: [],
    }
  },
}

module.exports = nextConfig
