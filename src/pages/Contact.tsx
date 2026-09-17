import { useState } from 'react'
import { useLang } from '../i18n'
import { Mail, MessageSquare, CheckCircle2 } from 'lucide-react'

// TODO: Replace with your real WhatsApp business number
const WA_NUMBER = '6289697172255'

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.107.547 4.088 1.504 5.814L0 24l6.35-1.488A11.96 11.96 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.37l-.357-.214-3.768.884.899-3.684-.236-.378A9.817 9.817 0 012.182 12C2.182 6.574 6.574 2.182 12 2.182S21.818 6.574 21.818 12 17.426 21.818 12 21.818z" />
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    </svg>
  )
}

export default function Contact() {
  const { t } = useLang()
  const [selected, setSelected] = useState(0)
  const [note, setNote] = useState('')

  const interests = [t.con_interest_1, t.con_interest_2, t.con_interest_3]

  const handleWhatsApp = () => {
    const msg = `Hi POGOT Studio,\n\nI'm interested in: ${interests[selected]}.${note ? `\n\nMy project:\n${note}` : ''}`
    window.open(`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <main className="w-full">
      {/* Header */}
      <section className="bg-[#EAF2F8] py-12 sm:py-16 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0284C7]/10 text-[#0284C7] font-semibold text-xs tracking-wider uppercase mb-3">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{t.con_label}</span>
            </div>
            <h1 className="font-['Barlow_Condensed'] font-bold text-4xl sm:text-6xl text-[#0F172A] leading-none">
              {t.con_h1}
            </h1>
          </div>
          <div className="lg:col-span-5">
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed">
              {t.con_sub}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-[#F8FAFC] py-12 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* WhatsApp Contact Panel */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-xs space-y-8">

            {/* Interest selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-4">
                {t.con_interest_title}
              </label>
              <div className="space-y-3">
                {interests.map((label, i) => (
                  <button
                    key={i}
                    id={`interest-option-${i}`}
                    type="button"
                    onClick={() => setSelected(i)}
                    className={`w-full text-left px-5 py-4 rounded-xl border-2 transition-all cursor-pointer flex items-center gap-3 ${
                      selected === i
                        ? 'border-[#0284C7] bg-[#EAF2F8] text-[#0284C7]'
                        : 'border-slate-200 bg-slate-50 text-slate-700 hover:border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${
                        selected === i ? 'border-[#0284C7]' : 'border-slate-300'
                      }`}
                    >
                      {selected === i && (
                        <div className="w-2.5 h-2.5 rounded-full bg-[#0284C7]" />
                      )}
                    </div>
                    <span className="font-semibold text-sm sm:text-base">{label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Note / brief description */}
            <div>
              <label
                htmlFor="contact-note"
                className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2"
              >
                {t.con_note_label}
              </label>
              <textarea
                id="contact-note"
                rows={4}
                placeholder={t.con_note_ph}
                value={note}
                onChange={e => setNote(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg px-4 py-3 text-slate-900 text-sm focus:outline-none focus:border-[#0284C7] focus:bg-white focus:ring-2 focus:ring-[#0284C7]/20 transition-all resize-y min-h-[110px]"
              />
            </div>

            {/* WhatsApp CTA */}
            <div>
              <button
                id="whatsapp-cta-btn"
                type="button"
                onClick={handleWhatsApp}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] active:bg-[#18a852] text-white font-bold text-base px-8 py-4 rounded-xl shadow-md cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span>{t.con_wa_btn}</span>
              </button>
              <p className="text-xs text-slate-500 mt-2.5 ml-1 flex items-center gap-1.5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#25D366]" />
                {t.con_wa_hint}
              </p>
            </div>
          </div>

          {/* Info Side Panel */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">

              {/* What happens next */}
              <div>
                <h3 className="font-['Barlow_Condensed'] font-bold text-2xl text-[#0F172A] mb-4">
                  {t.con_next_title}
                </h3>
                <ol className="space-y-3 list-decimal list-inside text-sm text-slate-700 leading-relaxed pl-1">
                  {[t.con_next_1, t.con_next_2, t.con_next_3].map((step, i) => (
                    <li key={i} className="pl-1">
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <hr className="border-slate-200" />

              {/* Good fit */}
              <div>
                <h3 className="font-['Barlow_Condensed'] font-bold text-2xl text-[#0F172A] mb-4">
                  {t.con_fit_title}
                </h3>
                <ul className="space-y-2.5">
                  {[t.con_fit_1, t.con_fit_2, t.con_fit_3, t.con_fit_4].map(item => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <hr className="border-slate-200" />

              {/* Email fallback */}
              <div className="pt-1">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block mb-2">
                  {t.con_email_label}
                </span>
                <a
                  id="contact-email-link"
                  href="mailto:pogotstudio@gmail.com"
                  className="inline-flex items-center gap-2 text-[#0284C7] font-semibold text-base hover:underline"
                >
                  <Mail className="w-4 h-4" />
                  <span>pogotstudio@gmail.com</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  )
}
