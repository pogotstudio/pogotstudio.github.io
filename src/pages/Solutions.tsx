import { Page } from '../App'
import { useLang } from '../i18n'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

function ServiceGroup({
  label,
  items,
  dark = false,
}: {
  label: string
  items: { title: string; body: string }[]
  dark?: boolean
}) {
  return (
    <div
      className={`py-12 sm:py-20 px-4 sm:px-6 lg:px-8 border-b ${
        dark
          ? 'bg-[#0F172A] text-white border-slate-800'
          : 'bg-[#F8FAFC] text-[#0F172A] border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Title Column */}
          <div className="lg:col-span-4">
            <div className="w-10 h-1 bg-[#0284C7] rounded-full mb-4" />
            <h2
              className={`font-['Barlow_Condensed'] font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight ${
                dark ? 'text-white' : 'text-[#0F172A]'
              }`}
            >
              {label}
            </h2>
          </div>

          {/* Right Service List Column */}
          <div className="lg:col-span-8 space-y-6">
            {items.map(({ title, body }, i) => (
              <div
                key={title}
                className={`pt-6 ${
                  i === 0
                    ? ''
                    : dark
                    ? 'border-t border-slate-800'
                    : 'border-t border-slate-200'
                } grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 items-start`}
              >
                <div className="md:col-span-5 flex items-start gap-2.5">
                  <CheckCircle2
                    className={`w-5 h-5 shrink-0 mt-1 ${
                      dark ? 'text-[#00B4D8]' : 'text-[#0284C7]'
                    }`}
                  />
                  <h3
                    className={`font-['Barlow_Condensed'] font-bold text-xl sm:text-2xl ${
                      dark ? 'text-slate-100' : 'text-[#0F172A]'
                    }`}
                  >
                    {title}
                  </h3>
                </div>
                <p
                  className={`md:col-span-7 text-sm sm:text-base leading-relaxed ${
                    dark ? 'text-slate-300' : 'text-slate-600'
                  }`}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Solutions({ navigate }: { navigate: (p: Page) => void }) {
  const { t } = useLang()

  const consultItems = [
    { title: t.sc_1_title, body: t.sc_1_body },
    { title: t.sc_2_title, body: t.sc_2_body },
    { title: t.sc_3_title, body: t.sc_3_body },
    { title: t.sc_4_title, body: t.sc_4_body },
    { title: t.sc_5_title, body: t.sc_5_body },
  ]

  const devItems = [
    { title: t.sd_1_title, body: t.sd_1_body },
    { title: t.sd_2_title, body: t.sd_2_body },
    { title: t.sd_3_title, body: t.sd_3_body },
    { title: t.sd_4_title, body: t.sd_4_body },
    { title: t.sd_5_title, body: t.sd_5_body },
  ]

  return (
    <main className="w-full">
      {/* Solutions Header */}
      <section className="bg-[#EAF2F8] py-14 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="text-[#0284C7] font-semibold text-xs tracking-widest uppercase block mb-3">
              {t.sol_label}
            </span>
            <h1 className="font-['Barlow_Condensed'] font-bold text-4xl sm:text-6xl text-[#0F172A] leading-[0.98]">
              {t.sol_h1}
            </h1>
          </div>
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end">
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-6">
              {t.sol_sub}
            </p>
            <button
              onClick={() => navigate('contact')}
              className="inline-flex items-center gap-2 bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold text-base px-6 py-3 rounded-lg shadow-sm transition-all cursor-pointer"
            >
              <span>{t.sol_cta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Consultation Services */}
      <ServiceGroup label={t.sol_consult_label} items={consultItems} />

      {/* Product Development Services */}
      <ServiceGroup label={t.sol_dev_label} items={devItems} dark />

      {/* Engagement Models */}
      <section className="bg-[#EAF2F8] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <span className="text-[#0284C7] font-semibold text-xs tracking-widest uppercase block mb-2">
              Flexible Scope
            </span>
            <h2 className="font-['Barlow_Condensed'] font-bold text-3xl sm:text-5xl text-[#0F172A]">
              {t.sol_engage_title}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: t.engage_1_name, desc: t.engage_1_desc, price: t.engage_1_price, featured: false },
              { name: t.engage_2_name, desc: t.engage_2_desc, price: t.engage_2_price, featured: true },
              { name: t.engage_3_name, desc: t.engage_3_desc, price: t.engage_3_price, featured: false },
            ].map(({ name, desc, price, featured }) => (
              <div
                key={name}
                className={`p-8 rounded-2xl flex flex-col justify-between transition-all ${
                  featured
                    ? 'bg-[#0F172A] text-white border-2 border-[#0284C7] shadow-xl relative'
                    : 'bg-white text-[#0F172A] border border-slate-200 shadow-xs hover:border-slate-300'
                }`}
              >
                <div>
                  <span
                    className={`inline-block text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-4 ${
                      featured
                        ? 'bg-[#0284C7] text-white'
                        : 'bg-[#EAF2F8] text-[#0284C7]'
                    }`}
                  >
                    {price}
                  </span>
                  <h3
                    className={`font-['Barlow_Condensed'] font-bold text-2xl sm:text-3xl mb-4 ${
                      featured ? 'text-white' : 'text-[#0F172A]'
                    }`}
                  >
                    {name}
                  </h3>
                  <p
                    className={`text-sm sm:text-base leading-relaxed ${
                      featured ? 'text-slate-300' : 'text-slate-600'
                    }`}
                  >
                    {desc}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-200/20">
                  <button
                    onClick={() => navigate('contact')}
                    className={`w-full py-2.5 px-4 rounded-lg font-semibold text-sm transition-colors border-0 cursor-pointer ${
                      featured
                        ? 'bg-[#0284C7] hover:bg-[#0369A1] text-white'
                        : 'bg-slate-100 hover:bg-slate-200 text-[#0F172A]'
                    }`}
                  >
                    {t.sol_cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
