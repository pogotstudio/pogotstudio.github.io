export type SeoData = {
  title: string
  description: string
  canonical?: string
  image?: string
  type?: 'website' | 'article'
}

const SITE_NAME = 'Pogot Studio'
const SITE_URL = 'https://pogotstudio.my.id'

export function setSeo({
  title,
  description,
  canonical,
  image,
  type = 'website',
}: SeoData) {
  document.title = title

  setMeta('description', description)
  setMeta('robots', 'index, follow')

  const canonicalUrl = canonical || window.location.href
  setCanonical(canonicalUrl)

  setProperty('og:title', title)
  setProperty('og:description', description)
  setProperty('og:type', type)
  setProperty('og:url', canonicalUrl)
  setProperty('og:site_name', SITE_NAME)

  if (image) {
    setProperty('og:image', image)
  }

  setProperty(
    'twitter:card',
    image ? 'summary_large_image' : 'summary',
  )

  setProperty('twitter:title', title)
  setProperty('twitter:description', description)

  if (image) {
    setProperty('twitter:image', image)
  }
}

function setMeta(name: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[name="${name}"]`,
  )

  if (!element) {
    element = document.createElement('meta')
    element.name = name
    document.head.appendChild(element)
  }

  element.content = content
}

function setProperty(property: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[property="${property}"]`,
  )

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute('property', property)
    document.head.appendChild(element)
  }

  element.content = content
}

function setCanonical(url: string) {
  let element = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  )

  if (!element) {
    element = document.createElement('link')
    element.rel = 'canonical'
    document.head.appendChild(element)
  }

  element.href = url
}