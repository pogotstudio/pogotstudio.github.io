import { useEffect, useState } from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import Articles from './pages/Articles'
import Contact from './pages/Contact'

export type Page = 'home' | 'solutions' | 'articles' | 'contact'

function pathToPage(pathname: string): Page {
  if (pathname === '/') {
    return 'home'
  }

  if (pathname === '/solutions') {
    return 'solutions'
  }

  // This also matches:
  // /articles
  // /articles/bare-metal-vs-rtos
  if (pathname === '/articles' || pathname.startsWith('/articles/')) {
    return 'articles'
  }

  if (pathname === '/contact') {
    return 'contact'
  }

  // Unknown path
  return 'home'
}

function pageToPath(page: Page): string {
  switch (page) {
    case 'home':
      return '/'

    case 'solutions':
      return '/solutions'

    case 'articles':
      return '/articles'

    case 'contact':
      return '/contact'
  }
}

export default function App() {
  const [page, setPage] = useState<Page>(() =>
    pathToPage(window.location.pathname),
  )

  useEffect(() => {
    const handlePopState = () => {
      setPage(pathToPage(window.location.pathname))
    }

    window.addEventListener('popstate', handlePopState)

    return () => {
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  const navigate = (nextPage: Page) => {
    const path = pageToPath(nextPage)

    // Don't create duplicate history entries
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path)
    }

    setPage(nextPage)
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans flex flex-col selection:bg-[#0284C7] selection:text-white">
      <Nav current={page} navigate={navigate} />

      <div className="flex-1">
        {page === 'home' && <Home navigate={navigate} />}
        {page === 'solutions' && <Solutions navigate={navigate} />}
        {page === 'articles' && <Articles navigate={navigate} />}
        {page === 'contact' && <Contact />}
      </div>
    </div>
  )
}