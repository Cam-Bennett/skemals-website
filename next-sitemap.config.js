/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://pallume.com',
  generateRobotsTxt: false,
  outDir: './public',
  exclude: [
    '/icon',
    '/opengraph-image',
    '/api/*',
    '/privacy',
  ],
}
