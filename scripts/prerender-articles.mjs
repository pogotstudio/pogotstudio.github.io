import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import React from 'react'
import { renderToStaticMarkup } from 'react-dom/server'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const ROOT = process.cwd()
const CONTENT_DIR = path.join(ROOT, 'src', 'content', 'articles')
const DIST_DIR = path.join(ROOT, 'dist')

const SITE_URL = 'https://pogotstudio.my.id'

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function parseArticle(filePath) {
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)

  let contentEn = content
  let contentId = content

  if (
    content.includes('<!-- en -->') &&
    content.includes('<!-- id -->')
  ) {
    const parts = content.split('<!-- id -->')

    contentEn = parts[0]
      .replace('<!-- en -->', '')
      .trim()

    contentId = parts[1]
      ? parts[1].trim()
      : contentEn
  }

  const filename = path.basename(filePath, '.md')

  return {
    id: filename,
    slug: data.slug || filename,

    title: {
      en: data.title_en || 'Untitled',
      id: data.title_id || data.title_en || 'Tanpa Judul',
    },

    date: data.date || '',

    tag: {
      en: data.tag_en || 'General',
      id: data.tag_id || data.tag_en || 'Umum',
    },

    readTime: Number(data.readTime) || 5,

    summary: {
      en: data.summary_en || '',
      id: data.summary_id || data.summary_en || '',
    },

    image: data.image || '',
    author: data.author || 'Pogot Studio',

    contentEn,
    contentId,
  }
}

function renderMarkdown(markdown) {
  return renderToStaticMarkup(
    React.createElement(
      'article',
      { className: 'article-content' },
      React.createElement(
        ReactMarkdown,
        {
          remarkPlugins: [remarkGfm],
        },
        markdown,
      ),
    ),
  )
}

function replaceMeta(html, selector, replacement) {
  const regex = new RegExp(selector, 'i')

  if (regex.test(html)) {
    return html.replace(regex, replacement)
  }

  return html.replace(
    '</head>',
    `${replacement}\n</head>`,
  )
}

function buildArticleHtml(template, article) {
  const title = article.title.en
  const description = article.summary.en
  const canonical =
    `${SITE_URL}/articles/${encodeURIComponent(article.slug)}`

  const articleHtml = renderMarkdown(article.contentEn)

  let html = template

  /*
   * Language
   */
  html = html.replace(
    /<html([^>]*)>/i,
    '<html lang="en">',
  )

  /*
   * Root content
   *
   * React will later mount normally into #root.
   * For crawlers and users before JS executes,
   * the actual article is already present here.
   */
  html = html.replace(
    /<div id="root"><\/div>/i,
    `<div id="root">
      <main>
        <header>
          <p>${escapeHtml(article.tag.en)}</p>
          <h1>${escapeHtml(title)}</h1>
          <p>${escapeHtml(description)}</p>
          <p>
            ${escapeHtml(article.author)}
            ·
            ${escapeHtml(article.date)}
            ·
            ${article.readTime} min read
          </p>
        </header>

        ${articleHtml}
      </main>
    </div>`,
  )

  /*
   * Title
   */
  html = html.replace(
    /<title>[\s\S]*?<\/title>/i,
    `<title>${escapeHtml(title)} | Pogot Studio</title>`,
  )

  /*
   * Description
   */
  html = replaceMeta(
    html,
    /<meta\s+name="description"[^>]*>/i,
    `<meta name="description" content="${escapeHtml(description)}" />`,
  )

  /*
   * Canonical
   */
  html = replaceMeta(
    html,
    /<link\s+rel="canonical"[^>]*>/i,
    `<link rel="canonical" href="${canonical}" />`,
  )

  /*
   * OpenGraph title
   */
  html = replaceMeta(
    html,
    /<meta\s+property="og:title"[^>]*>/i,
    `<meta property="og:title" content="${escapeHtml(title)} | Pogot Studio" />`,
  )

  /*
   * OpenGraph description
   */
  html = replaceMeta(
    html,
    /<meta\s+property="og:description"[^>]*>/i,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
  )

  /*
   * OpenGraph URL
   */
  html = replaceMeta(
    html,
    /<meta\s+property="og:url"[^>]*>/i,
    `<meta property="og:url" content="${canonical}" />`,
  )

  /*
   * OpenGraph type
   */
  html = replaceMeta(
    html,
    /<meta\s+property="og:type"[^>]*>/i,
    `<meta property="og:type" content="article" />`,
  )

  /*
   * OpenGraph image
   */
  if (article.image) {
    html = replaceMeta(
      html,
      /<meta\s+property="og:image"[^>]*>/i,
      `<meta property="og:image" content="${escapeHtml(article.image)}" />`,
    )
  }

  /*
   * JSON-LD
   */
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    image: article.image ? [article.image] : undefined,
    author: {
      '@type': 'Organization',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Pogot Studio',
      url: SITE_URL,
    },
    datePublished: article.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonical,
    },
  }

  const jsonLdHtml = `
<script type="application/ld+json" id="article-structured-data">
${JSON.stringify(jsonLd, null, 2).replace(/</g, '\\u003c')}
</script>
`

  /*
   * Remove previous generated JSON-LD if this script
   * is ever run against an already generated file.
   */
  html = html.replace(
    /<script type="application\/ld\+json" id="article-structured-data">[\s\S]*?<\/script>/i,
    '',
  )

  html = html.replace(
    '</head>',
    `${jsonLdHtml}</head>`,
  )

  return html
}

function main() {
  if (!fs.existsSync(DIST_DIR)) {
    throw new Error(
      'dist/ does not exist. Run vite build before prerendering.',
    )
  }

  const templatePath = path.join(DIST_DIR, 'index.html')

  if (!fs.existsSync(templatePath)) {
    throw new Error('dist/index.html not found.')
  }

  const template = fs.readFileSync(templatePath, 'utf8')

  const files = fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith('.md'))
    .sort()

  console.log(`Found ${files.length} articles.`)

  for (const file of files) {
    const filePath = path.join(CONTENT_DIR, file)
    const article = parseArticle(filePath)

    const articleDir = path.join(
      DIST_DIR,
      'articles',
      article.slug,
    )

    fs.mkdirSync(articleDir, {
      recursive: true,
    })

    const outputPath = path.join(
      articleDir,
      'index.html',
    )

    const html = buildArticleHtml(
      template,
      article,
    )

    fs.writeFileSync(
      outputPath,
      html,
      'utf8',
    )

    console.log(
      `  ✓ /articles/${article.slug}/index.html`,
    )
  }

  console.log('Article prerendering complete.')
}

main()