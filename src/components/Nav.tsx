import { useState } from 'react'
import emblemSrc from '@/imports/emblem.png'
import { Page } from '../App'
import { useLang, Lang } from '../i18n'
import { Menu, X, Globe } from 'lucide-react'

export default function Nav({ current, navigate }: { current: Page; navigate: (p: Page) => void }) {
  const { lang, t, setLang } = useLang()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const links: { label: string; page: Page }[] = [
    { label: t.nav_home, page: 'home' },
    { label: t.nav_solutions, page: 'solutions' },
    { label: t.nav_articles, page: 'articles' },
    { label: t.nav_contact, page: 'contact' },
  ]

  const handleNavClick = (page: Page) => {
    navigate(page)
    setMobileMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-[#0F172A] border-b border-slate-800 text-[#F8FAFC] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Emblem & Title */}
        <button
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-3 bg-transparent border-0 cursor-pointer p-0 text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00B4D8] rounded-md"
        >
          <img
            src={emblemSrc}
            alt="Pogot Studio emblem"
            className="w-8 h-8 sm:w-10 sm:h-10 object-contain rounded-md bg-slate-900 border border-slate-700/60 transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="font-['Barlow_Condensed'] font-bold text-xl sm:text-2xl text-[#F8FAFC] tracking-wide leading-none">
              Pogot Studio
            </span>
            <span className="text-[10px] sm:text-xs text-slate-400 font-sans tracking-widest uppercase mt-0.5">
              Embedded Systems
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links & Language Toggle */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-6 items-center">
            {links.map(({ label, page }) => {
              const active = current === page
              return (
                <button
                  key={page}
                  onClick={() => handleNavClick(page)}
                  className={`font-sans text-sm font-semibold transition-all duration-150 bg-transparent border-0 cursor-pointer py-1.5 px-1 relative ${
                    active
                      ? 'text-[#00B4D8]'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#00B4D8] rounded-full" />
                  )}
                </button>
              )
            })}
          </nav>

          {/* Language Toggle */}
          <div className="flex items-center bg-slate-800/90 border border-slate-700/80 rounded-lg p-1 gap-1">
            <Globe className="w-3.5 h-3.5 text-slate-400 ml-1.5 mr-0.5" />
            {(['en', 'id'] as Lang[]).map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`font-sans text-xs font-bold tracking-wider uppercase border-0 rounded-md px-2.5 py-1 cursor-pointer transition-all ${
                  lang === l
                    ? 'bg-[#0284C7] text-white shadow-xs'
                    : 'bg-transparent text-slate-400 hover:text-slate-200'
                }`}
              >
                {l}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Header Controls: Lang Toggle & Hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <div className="flex items-center bg-slate-800 border border-slate-700 rounded-md p-0.5">
            {(['en', 'id'] as Lang[]).map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-[11px] font-bold uppercase border-0 rounded px-2 py-0.5 cursor-pointer ${
                  lang === l
                    ? 'bg-[#0284C7] text-white'
                    : 'bg-transparent text-slate-400'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-slate-200 hover:text-white bg-slate-800/80 hover:bg-slate-800 rounded-lg border border-slate-700 cursor-pointer focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-down Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F172A] border-b border-slate-800 px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {links.map(({ label, page }) => {
              const active = current === page
              return (
                <button
                  key={page}
                  onClick={() => handleNavClick(page)}
                  className={`flex items-center justify-between text-left font-sans text-base font-semibold py-3 px-4 rounded-lg transition-colors border-0 cursor-pointer ${
                    active
                      ? 'bg-[#0284C7]/20 text-[#00B4D8] border-l-4 border-[#0284C7]'
                      : 'text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <span>{label}</span>
                  {active && <span className="w-2 h-2 rounded-full bg-[#00B4D8]" />}
                </button>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
