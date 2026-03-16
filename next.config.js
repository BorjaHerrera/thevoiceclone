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
    return [
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
    ]
  },
}

module.exports = nextConfig
