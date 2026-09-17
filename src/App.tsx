import { useState } from 'react'
import Nav from './components/Nav'
import Home from './pages/Home'
import Solutions from './pages/Solutions'
import Articles from './pages/Articles'
import Contact from './pages/Contact'

export type Page = 'home' | 'solutions' | 'articles' | 'contact'

export default function App() {
  const [page, setPage] = useState<Page>('home')

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans flex flex-col selection:bg-[#0284C7] selection:text-white">
      <Nav current={page} navigate={setPage} />
      <div className="flex-1">
        {page === 'home' && <Home navigate={setPage} />}
        {page === 'solutions' && <Solutions navigate={setPage} />}
        {page === 'articles' && <Articles navigate={setPage} />}
        {page === 'contact' && <Contact />}
      </div>
    </div>
  )
}
