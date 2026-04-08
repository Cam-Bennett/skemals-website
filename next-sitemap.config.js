/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://skemals.com',
  generateRobotsTxt: false,
  outDir: './public',
  exclude: [
    '/icon',
    '/opengraph-image',
    '/api/*',
    '/privacy',
  ],
}
