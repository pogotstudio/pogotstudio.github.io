import { useEffect, useState } from 'react'
import { setSeo } from '@/lib/seo'
import { Page } from '../App'
import { useLang } from '../i18n'
import {
  getAllArticles,
  formatArticleDate,
  ArticleMeta,
} from '../lib/articles'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import {
  BookOpen,
  Clock,
  ArrowLeft,
  ArrowRight,
  User,
  Calendar,
  Tag,
} from 'lucide-react'

function getArticleSlugFromPath(): string | null {
  const match = window.location.pathname.match(/^\/articles\/(.+)$/)

  if (!match) {
    return null
  }

  try {
    return decodeURIComponent(match[1])
  } catch {
    return match[1]
  }
}

export default function Articles({
  navigate,
}: {
  navigate: (p: Page) => void
}) {
  const { lang } = useLang()
  const articles = getAllArticles()

  const [selectedSlug, setSelectedSlug] = useState<string | null>(
    getArticleSlugFromPath(),
  )

  const [activeIdx, setActiveIdx] = useState(0)

  // Keep the selected article synchronized with browser
  // Back / Forward navigation.
  useEffect(() => {
    const handlePopState = () => {
      setSelectedSlug(getArticleSlugFromPath())
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  // Open an article while keeping it inside the SPA.
  const openArticle = (slug: string) => {
    const path = `/articles/${encodeURIComponent(slug)}`

    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path)
    }

    setSelectedSlug(slug)
  }

  const closeArticle = () => {
    window.history.pushState({}, '', '/')
    setSelectedSlug(null)
  }

  // Derive unique tags from loaded markdown articles.
  const tagsEn = [
    'All',
    ...Array.from(new Set(articles.map((a) => a.tag.en))),
  ]

  const tagsId = [
    'Semua',
    ...Array.from(new Set(articles.map((a) => a.tag.id))),
  ]

  const tags = lang === 'en' ? tagsEn : tagsId

  const selectedTagEn = tagsEn[activeIdx] || 'All'

  const filteredArticles =
    activeIdx === 0
      ? articles
      : articles.filter(
        (a) =>
          a.tag.en === selectedTagEn ||
          a.tag.id === tagsId[activeIdx],
      )

  const selectedArticle = articles.find(
    (a) => a.slug === selectedSlug,
  )

  /*
   * ============================================================
   * ARTICLE DETAIL
   * ============================================================
   */

useEffect(() => {
  if (!selectedArticle) {
    setSeo({
      title: 'Engineering Articles | Pogot Studio',
      description:
        'Technical articles about embedded systems, firmware, IoT, hardware, and engineering.',
      canonical: `${window.location.origin}/articles`,
    })

    return
  }

  const title =
    lang === 'en'
      ? selectedArticle.title.en
      : selectedArticle.title.id

  const description =
    lang === 'en'
      ? selectedArticle.summary.en
      : selectedArticle.summary.id

  setSeo({
    title: `${title} | Pogot Studio`,
    description,
    canonical: `${window.location.origin}/articles/${selectedArticle.slug}`,
    image: selectedArticle.image,
    type: 'article',
  })
}, [selectedArticle, lang])

  if (selectedArticle) {
    const title =
      lang === 'en'
        ? selectedArticle.title.en
        : selectedArticle.title.id

    const tag =
      lang === 'en'
        ? selectedArticle.tag.en
        : selectedArticle.tag.id

    const summary =
      lang === 'en'
        ? selectedArticle.summary.en
        : selectedArticle.summary.id

    const content =
      lang === 'en'
        ? selectedArticle.contentEn
        : selectedArticle.contentId

    return (
      <main className="w-full bg-[#F8FAFC] py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <button
            type="button"
            onClick={closeArticle}
            className="inline-flex items-center gap-2 text-slate-600 hover:text-[#0284C7] font-semibold text-sm mb-8 px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-2xs hover:border-slate-300 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />

            <span>
              {lang === 'en'
                ? 'Back to all articles'
                : 'Kembali ke semua artikel'}
            </span>
          </button>

          {/* Article Header Card */}
          <article className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden mb-12">
            <div className="p-6 sm:p-10 border-b border-slate-100">
              <div className="flex flex-wrap items-center gap-3 text-xs font-semibold text-slate-500 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#0284C7]/10 text-[#0284C7] font-bold uppercase tracking-wider">
                  <Tag className="w-3 h-3" />
                  {tag}
                </span>

                <span>•</span>

                <span className="inline-flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-slate-400" />
                  {formatArticleDate(selectedArticle.date, lang)}
                </span>

                <span>•</span>

                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  {selectedArticle.readTime}{' '}
                  {lang === 'en' ? 'min read' : 'menit baca'}
                </span>

                <span>•</span>

                <span className="inline-flex items-center gap-1 text-slate-600">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  {selectedArticle.author}
                </span>
              </div>

              <h1 className="font-['Barlow_Condensed'] font-bold text-3xl sm:text-5xl text-[#0F172A] leading-tight mb-4">
                {title}
              </h1>

              <p className="text-slate-600 text-base sm:text-lg leading-relaxed italic border-l-4 border-[#0284C7] pl-4 py-1">
                {summary}
              </p>
            </div>

            {/* Cover Image */}
            {selectedArticle.image && (
              <div className="w-full h-64 sm:h-96 bg-slate-900 overflow-hidden relative">
                <img
                  src={selectedArticle.image}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Rendered Markdown Body */}
            <div
              className="
                p-6 sm:p-12
                prose prose-slate max-w-none

                prose-headings:font-['Barlow_Condensed']
                prose-headings:font-bold
                prose-headings:text-[#0F172A]

                prose-h1:text-3xl
                prose-h1:sm:text-4xl
                prose-h1:mb-6

                prose-h2:text-2xl
                prose-h2:sm:text-3xl
                prose-h2:mt-10
                prose-h2:border-b
                prose-h2:border-slate-200
                prose-h2:pb-2

                prose-h3:text-xl
                prose-h3:sm:text-2xl

                prose-p:text-slate-700
                prose-p:leading-8

                prose-strong:text-[#0F172A]

                prose-a:text-[#0284C7]
                prose-a:no-underline
                hover:prose-a:underline

                prose-ul:list-disc
                prose-ol:list-decimal

                prose-code:text-[#0284C7]
                prose-code:bg-slate-100
                prose-code:px-1.5
                prose-code:py-0.5
                prose-code:rounded

                prose-pre:bg-slate-900
                prose-pre:text-slate-100

                prose-table:w-full
                prose-table:text-sm

                prose-th:bg-slate-100
                prose-th:text-[#0F172A]
                prose-th:p-3

                prose-td:p-3

                prose-hr:border-slate-300
              "
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
              </ReactMarkdown>
            </div>
          </article>

          {/* Bottom CTA */}
          <div className="bg-[#0F172A] text-white p-8 sm:p-10 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="font-['Barlow_Condensed'] font-bold text-2xl sm:text-3xl mb-2">
                {lang === 'en'
                  ? 'Need embedded systems support?'
                  : 'Butuh dukungan sistem tertanam?'}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base">
                {lang === 'en'
                  ? 'We design, prototype, and optimize hardware & firmware.'
                  : 'Kami merancang, memvalidasi prototipe, dan mengoptimalkan hardware & firmware.'}
              </p>
            </div>

            <button
              type="button"
              onClick={() => navigate('contact')}
              className="shrink-0 bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold px-6 py-3 rounded-lg flex items-center gap-2 cursor-pointer transition-all"
            >
              <span>
                {lang === 'en'
                  ? 'Talk to an Engineer'
                  : 'Hubungi Insinyur'}
              </span>

              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </main>
    )
  }

  /*
   * ============================================================
   * ARTICLE LIST
   * ============================================================
   */

  const [featured, ...rest] = filteredArticles

  return (
    <main className="w-full">
      {/* Header & Category Filters */}
      <section className="bg-[#EAF2F8] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between lg:items-end gap-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0284C7]/10 text-[#0284C7] font-semibold text-xs tracking-wider uppercase mb-3">
              <BookOpen className="w-3.5 h-3.5" />

              <span>
                {lang === 'en'
                  ? 'Engineering Articles'
                  : 'Artikel Rekayasa'}
              </span>
            </div>

            <h1 className="font-['Barlow_Condensed'] font-bold text-4xl sm:text-6xl text-[#0F172A] leading-none">
              {lang === 'en'
                ? 'Technical writing without the fluff.'
                : 'Tulisan teknis tanpa basa-basi.'}
            </h1>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, i) => {
              const active = activeIdx === i

              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setActiveIdx(i)}
                  className={`px-4 py-2 rounded-lg font-sans font-semibold text-xs sm:text-sm cursor-pointer transition-all border ${active
                    ? 'bg-[#0F172A] text-white border-[#0F172A] shadow-xs'
                    : 'bg-white text-slate-700 border-slate-300 hover:border-slate-400 hover:bg-slate-50'
                    }`}
                >
                  {tag}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Featured Article Card */}
      {featured && (
        <section className="bg-[#F8FAFC] py-10 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
          <div className="max-w-7xl mx-auto">
            <a
              href={`/articles/${encodeURIComponent(featured.slug)}`}
              onClick={(event) => {
                event.preventDefault()
                openArticle(featured.slug)
              }}
              className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-2xl border border-slate-200 shadow-md overflow-hidden hover:shadow-lg transition-all cursor-pointer group"
            >
              <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs font-semibold text-slate-500 mb-4 flex-wrap">
                    <span className="px-2.5 py-1 rounded-md bg-[#0284C7]/10 text-[#0284C7] font-bold uppercase tracking-wider">
                      {lang === 'en'
                        ? featured.tag.en
                        : featured.tag.id}
                    </span>

                    <span>•</span>

                    <span className="inline-flex items-center gap-1.5 text-slate-600">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {formatArticleDate(featured.date, lang)}
                    </span>

                    <span>•</span>

                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      {featured.readTime}{' '}
                      {lang === 'en' ? 'min read' : 'menit baca'}
                    </span>
                  </div>

                  <h2 className="font-['Barlow_Condensed'] font-bold text-2xl sm:text-4xl text-[#0F172A] mb-4 leading-snug group-hover:text-[#0284C7] transition-colors">
                    {lang === 'en'
                      ? featured.title.en
                      : featured.title.id}
                  </h2>

                  <p className="text-slate-600 text-base leading-relaxed mb-8">
                    {lang === 'en'
                      ? featured.summary.en
                      : featured.summary.id}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 text-[#0284C7] font-semibold text-sm group-hover:text-[#0369A1] transition-colors">
                  <span>
                    {lang === 'en'
                      ? 'Read full article'
                      : 'Baca artikel lengkap'}
                  </span>

                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              <div className="lg:col-span-5 bg-[#0F172A] relative min-h-[240px] sm:min-h-[320px] lg:min-h-full overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title.en}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </a>
          </div>
        </section>
      )}

      {/* Article Grid */}
      <section className="bg-[#F8FAFC] py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {rest.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {rest.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onSelect={() => openArticle(article.slug)}
                />
              ))}
            </div>
          )}

          {filteredArticles.length === 0 && (
            <div className="text-center py-20 text-slate-500">
              <p className="text-lg">
                {lang === 'en'
                  ? 'No articles found.'
                  : 'Tidak ada artikel ditemukan.'}
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

function ArticleCard({
  article,
  onSelect,
}: {
  article: ArticleMeta
  onSelect: () => void
}) {
  const { lang } = useLang()

  const title =
    lang === 'en' ? article.title.en : article.title.id

  const tag =
    lang === 'en' ? article.tag.en : article.tag.id

  const summary =
    lang === 'en' ? article.summary.en : article.summary.id

  const articleUrl = `/articles/${encodeURIComponent(article.slug)}`

  return (
    <a
      href={articleUrl}
      onClick={(event) => {
        event.preventDefault()
        onSelect()
      }}
      className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
    >
      <div>
        <div className="h-48 sm:h-52 overflow-hidden bg-[#0F172A] relative">
          <img
            src={article.image}
            alt={title}
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="p-6">
          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 mb-3 flex-wrap">
            <span className="text-[#0284C7] font-bold uppercase tracking-wider">
              {tag}
            </span>

            <span>•</span>

            <span className="inline-flex items-center gap-1 text-slate-500">
              <Calendar className="w-3 h-3 text-slate-400" />
              {formatArticleDate(article.date, lang)}
            </span>

            <span>•</span>

            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-slate-400" />
              {article.readTime}{' '}
              {lang === 'en' ? 'min read' : 'menit baca'}
            </span>
          </div>

          <h3 className="font-['Barlow_Condensed'] font-bold text-xl sm:text-2xl text-[#0F172A] mb-3 leading-snug group-hover:text-[#0284C7] transition-colors">
            {title}
          </h3>

          <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
            {summary}
          </p>
        </div>
      </div>

      <div className="px-6 pb-6 pt-0">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284C7] uppercase tracking-wider group-hover:gap-2 transition-all">
          <span>
            {lang === 'en'
              ? 'Read article →'
              : 'Baca artikel →'}
          </span>
        </span>
      </div>
    </a>
  )
}

export function setArticleStructuredData(article: {
  title: string
  description: string
  slug: string
  date: string
  image: string
  author: string
}) {
  const id = 'article-structured-data'

  document.getElementById(id)?.remove()

  const script = document.createElement('script')

  script.id = id
  script.type = 'application/ld+json'

  script.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image ? [article.image] : undefined,
    datePublished: article.date,
    dateModified: article.date,
    author: {
      '@type': 'Organization',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Pogot Studio',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${window.location.origin}/articles/${article.slug}`,
    },
  })

  document.head.appendChild(script)
}