/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://pallume.com',
  generateRobotsTxt: false,
  generateIndexSitemap: false,
  autoLastmod: false,
  changefreq: false,
  priority: false,
  outDir: './public',
  exclude: [
    '/icon',
    '/opengraph-image',
    '/api/*',
    '/privacy',
  ],
}
