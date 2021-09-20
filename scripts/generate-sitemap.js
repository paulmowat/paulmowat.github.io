const fs = require('fs')
const globby = require('globby')
const siteMetadata = require('../config/siteMetadata')

;(async () => {
  const pages = await globby([
    'pages/*.js',
    'data/**/*.mdx',
    'data/**/*.md',
    'public/blog/tags/**/*.xml',
    '!pages/_*.js',
    '!pages/api'
  ])

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace('pages/', '/')
                  .replace('data/blog', '/blog')
                  .replace('public/', '/')
                  .replace('.js', '')
                  .replace('.mdx', '')
                  .replace('.md', '')
                  .replace('/index.xml', '')
                const route = path === '/index' ? '' : path
                return `
                        <url>
                            <loc>${`${siteMetadata.siteUrl}${route}`}</loc>
                        </url>
                    `
              })
              .join('')}
        </urlset>
    `

  // eslint-disable-next-line no-sync
  fs.writeFileSync('public/sitemap.xml', sitemap)
})()
