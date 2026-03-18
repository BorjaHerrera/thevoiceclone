/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://thevoiceclone.com',
  generateRobotsTxt: false,
  // next-sitemap auto-generates from pages/ — we exclude and override manually
  exclude: [
    '/aviso-legal',
    '/politica-cookies',
    '/en/legal-notice',
    '/en/cookie-policy',
    // exclude Next.js i18n alternate paths that next-sitemap might generate
    '/es/*',
  ],
  additionalPaths: async () => [
    // Spanish routes
    { loc: '/',                            lastmod: new Date().toISOString(), changefreq: 'weekly',  priority: 1.0 },
    { loc: '/voces-ia',                    lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
    { loc: '/video-para-empresas',         lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
    { loc: '/localizacion-de-video',       lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
    { loc: '/produccion-video-con-ia',     lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
    { loc: '/localizacion-audiovisual',    lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
    { loc: '/subtitulado-video',           lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
    { loc: '/traduccion-profesional',      lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
    { loc: '/preguntas-frecuentes',        lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.6 },
    { loc: '/contacto',                    lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.7 },
    { loc: '/blog',                        lastmod: new Date().toISOString(), changefreq: 'weekly',  priority: 0.7 },
    // English routes
    { loc: '/en',                          lastmod: new Date().toISOString(), changefreq: 'weekly',  priority: 1.0 },
    { loc: '/en/ai-voices',                lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
    { loc: '/en/video-for-business',       lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
    { loc: '/en/video-localization',       lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
    { loc: '/en/ai-video-production',      lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
    { loc: '/en/audiovisual-localization', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
    { loc: '/en/video-subtitling',         lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
    { loc: '/en/professional-translation', lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.8 },
    { loc: '/en/faq',                      lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.6 },
    { loc: '/en/contact',                  lastmod: new Date().toISOString(), changefreq: 'monthly', priority: 0.7 },
    { loc: '/en/blog',                     lastmod: new Date().toISOString(), changefreq: 'weekly',  priority: 0.7 },
  ],
}
