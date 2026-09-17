import fs from 'node:fs'
import path from 'node:path'

const baseUrl = 'https://pogotstudio.my.id'

const contentDir = path.resolve('src/content/articles')
const files = fs
  .readdirSync(contentDir)
  .filter((file) => file.endsWith('.md'))

const routes = [
  '/',
  '/solutions',
  '/articles',
  '/contact',
]

for (const file of files) {
  const raw = fs.readFileSync(path.join(contentDir, file), 'utf8')

  const slugMatch = raw.match(/^slug:\s*["']?([^"'\r\n]+)["']?\s*$/m)

  if (slugMatch) {
    routes.push(`/articles/${slugMatch[1]}`)
  }
}

const urls = routes
  .map(
    (route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
  </url>`,
  )
  .join('')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
>
${urls}
</urlset>
`

fs.mkdirSync('public', { recursive: true })
fs.writeFileSync('public/sitemap.xml', sitemap.trim() + '\n')

console.log(`Generated sitemap with ${routes.length} URLs`)