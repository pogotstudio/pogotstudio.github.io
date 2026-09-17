export type ArticleMeta = {
  id: string
  slug: string
  title: { en: string; id: string }
  date: string
  tag: { en: string; id: string }
  readTime: number
  summary: { en: string; id: string }
  image: string
  author: string
  contentEn: string
  contentId: string
}

function parseFrontmatter(raw: string): { data: Record<string, string>; content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }

  const yamlLines = match[1].split('\n')
  const content = match[2]
  const data: Record<string, string> = {}

  for (const line of yamlLines) {
    const colonIdx = line.indexOf(':')
    if (colonIdx !== -1) {
      const key = line.slice(0, colonIdx).trim()
      let val = line.slice(colonIdx + 1).trim()
      // Strip outer quotes if present
      if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
        val = val.slice(1, -1)
      }
      data[key] = val
    }
  }

  return { data, content }
}

// Dynamically import all markdown files in src/content/articles
const articleFiles = import.meta.glob('/src/content/articles/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

export function parseDateToTimestamp(dateStr: string): number {
  if (!dateStr) return 0
  const clean = dateStr.trim().replace(/\//g, '-')
  const parts = clean.split('-')
  if (parts.length === 3 && parts[0].length === 4) {
    const [y, m, d] = parts
    const parsed = new Date(Number(y), Number(m) - 1, Number(d)).getTime()
    if (!Number.isNaN(parsed)) return parsed
  }
  const timestamp = Date.parse(clean)
  return Number.isNaN(timestamp) ? 0 : timestamp
}

export function formatArticleDate(dateStr: string, lang: 'en' | 'id'): string {
  if (!dateStr) return ''
  const parts = dateStr.trim().replace(/\//g, '-').split('-')
  if (parts.length === 3 && parts[0].length === 4) {
    const [year, month, day] = parts
    const d = new Date(Number(year), Number(month) - 1, Number(day))
    if (!Number.isNaN(d.getTime())) {
      return d.toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      })
    }
  }
  return dateStr
}

export function getAllArticles(): ArticleMeta[] {
  const articles: ArticleMeta[] = []

  for (const path in articleFiles) {
    const raw = articleFiles[path]
    const { data, content } = parseFrontmatter(raw)

    let contentEn = content
    let contentId = content

    if (content.includes('<!-- en -->') && content.includes('<!-- id -->')) {
      const parts = content.split('<!-- id -->')
      contentEn = parts[0].replace('<!-- en -->', '').trim()
      contentId = parts[1] ? parts[1].trim() : contentEn
    }

    const filename = path.split('/').pop()?.replace('.md', '') || 'article'

    articles.push({
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
    })
  }

  // Sort by latest date descending (newest first, fallback to slug)
  return articles.sort((a, b) => {
    const diff = parseDateToTimestamp(b.date) - parseDateToTimestamp(a.date)
    if (diff !== 0) return diff
    return b.id.localeCompare(a.id)
  })
}
