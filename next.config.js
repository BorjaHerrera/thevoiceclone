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
    return []
  },
}

module.exports = nextConfig
