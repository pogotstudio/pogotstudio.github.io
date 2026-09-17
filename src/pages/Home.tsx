import emblemSrc from '@/imports/emblem.png'
import { Page } from '../App'
import { useLang } from '../i18n'
import { getAllArticles, formatArticleDate } from '../lib/articles'
import {
  ArrowRight,
  CheckCircle2,
  Cpu,
  Wrench,
  Zap,
  ShieldCheck,
  Clock,
  MessageSquare,
  Sparkles,
  Calendar,
  Layers,
  Activity,
  Terminal,
  Compass,
} from 'lucide-react'

const WA_NUMBER = '6281234567890' // TODO: replace with real WhatsApp business number

export default function Home({ navigate }: { navigate: (p: Page) => void }) {
  const { lang, t } = useLang()
  const recentArticles = getAllArticles().slice(0, 3)

  const techStack = [
    'STM32',
    'ESP32',
    'Nordic nRF52/53',
    'Raspberry Pi CM4',
    'C / C++ Bare-Metal',
    'FreeRTOS',
    'Zephyr RTOS',
    'Embedded Linux',
    'MQTT & TLS',
    'LoRaWAN',
    'BLE 5.3',
    'Cellular IoT',
    'TinyML',
  ]

  const gigs = [
    {
      badge: t.gig_1_badge,
      title: t.gig_1_title,
      desc: t.gig_1_desc,
      feats: [t.gig_1_feat1, t.gig_1_feat2, t.gig_1_feat3],
      icon: Compass,
      tag: 'Architecture',
      waMessage:
        lang === 'en'
          ? "Hi Pogot Studio, I would like to discuss the Feasibility & Architecture package for my project."
          : 'Halo Pogot Studio, saya ingin mendiskusikan paket Studi Kelayakan & Arsitektur.',
    },
    {
      badge: t.gig_2_badge,
      title: t.gig_2_title,
      desc: t.gig_2_desc,
      feats: [t.gig_2_feat1, t.gig_2_feat2, t.gig_2_feat3],
      icon: Terminal,
      tag: 'Firmware',
      waMessage:
        lang === 'en'
          ? "Hi Pogot Studio, I would like to discuss the Firmware & Driver Bring-Up package for our board."
          : 'Halo Pogot Studio, saya ingin mendiskusikan paket Bring-Up Firmware & Driver untuk board kami.',
    },
    {
      badge: t.gig_3_badge,
      title: t.gig_3_title,
      desc: t.gig_3_desc,
      feats: [t.gig_3_feat1, t.gig_3_feat2, t.gig_3_feat3],
      icon: Activity,
      tag: 'IoT / Edge',
      waMessage:
        lang === 'en'
          ? "Hi Pogot Studio, I would like to discuss the IoT Gateway & Telemetry Systems package."
          : 'Halo Pogot Studio, saya ingin mendiskusikan paket Gateway IoT & Sistem Telemetri.',
    },
    {
      badge: t.gig_4_badge,
      title: t.gig_4_title,
      desc: t.gig_4_desc,
      feats: [t.gig_4_feat1, t.gig_4_feat2, t.gig_4_feat3],
      icon: ShieldCheck,
      tag: 'Production',
      waMessage:
        lang === 'en'
          ? "Hi Pogot Studio, I have a prototype that needs Production Hardening & DFM Optimization."
          : 'Halo Pogot Studio, kami memiliki prototipe yang membutuhkan penyempurnaan & kesiapan produksi.',
    },
  ]

  return (
    <main className="w-full">
      {/* 1. Hero Section - Asymmetric Field Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-12 min-h-[calc(100vh-80px)] border-b border-slate-200">
        {/* Hero Left Content */}
        <div className="lg:col-span-7 bg-[#EAF2F8] p-6 sm:p-10 md:p-14 lg:p-18 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-slate-200/80">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0284C7]/10 text-[#0284C7] font-semibold text-xs tracking-wider uppercase mb-6 w-fit border border-[#0284C7]/20 shadow-2xs">
            <Cpu className="w-3.5 h-3.5 text-[#0284C7]" />
            <span>{t.home_label}</span>
          </div>

          <h1 className="font-['Barlow_Condensed'] font-bold text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tight text-[#0F172A] leading-[0.96] mb-6">
            {t.home_h1a}
            <br />
            <span className="text-[#0284C7]">{t.home_h1b}</span>
          </h1>

          <p className="text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mb-8 font-sans">
            {t.home_sub}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:items-center mb-10">
            <button
              onClick={() => navigate('solutions')}
              className="inline-flex items-center justify-center gap-2 bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold text-base px-7 py-3.5 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer group"
            >
              <span>{t.home_cta_services}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                lang === 'en'
                  ? 'Hi Pogot Studio, I have an embedded/IoT project I would like to discuss.'
                  : 'Halo Pogot Studio, saya ingin mendiskusikan proyek embedded/IoT.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-slate-50 text-[#0F172A] font-semibold text-base px-7 py-3.5 rounded-lg border border-slate-300 transition-all cursor-pointer shadow-xs hover:border-slate-400"
            >
              <MessageSquare className="w-4 h-4 text-[#0284C7]" />
              <span>{t.home_cta_talk}</span>
            </a>
          </div>

          {/* Quick Trust Highlights Strip */}
          <div className="pt-6 border-t border-slate-300/70 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs sm:text-sm font-medium text-slate-700">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#0284C7] shrink-0" />
              <span>{t.home_badge_ip}</span>
            </div>
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-[#0284C7] shrink-0" />
              <span>{t.home_badge_scope}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
              <span>{t.home_badge_lab}</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageSquare className="w-4 h-4 text-[#0284C7] shrink-0" />
              <span>{t.home_badge_wa}</span>
            </div>
          </div>
        </div>

        {/* Hero Right Visual Column */}
        <div className="lg:col-span-5 relative bg-[#0F172A] min-h-[360px] sm:min-h-[460px] lg:min-h-full overflow-hidden flex flex-col justify-end">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1000&h=900&fit=crop&auto=format"
            alt="Circuit board hardware close-up"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-75 mix-blend-luminosity hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-[#0F172A]/50 to-transparent" />

          <div className="relative z-10 p-6 sm:p-10 space-y-4">
            {/* Studio Capabilities Overview Box */}
            <div className="bg-slate-900/90 backdrop-blur-md p-5 rounded-xl border border-slate-700/80 shadow-2xl max-w-md">
              <div className="flex items-center gap-2 text-[#00B4D8] text-xs font-bold tracking-widest uppercase mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00B4D8]" />
                <span>Embedded · IoT · AIoT</span>
              </div>
              <p className="font-['Barlow_Condensed'] font-semibold text-xl text-slate-100 mb-1 leading-snug">
                {t.home_image_caption}
              </p>
              <p className="text-slate-300 text-xs leading-relaxed">
                {lang === 'en'
                  ? 'We design custom hardware, write testable embedded firmware, and connect physical devices to reliable cloud systems.'
                  : 'Kami merancang sirkuit hardware, menulis firmware embedded yang teruji, serta mengintegrasikan perangkat fisik ke sistem cloud yang andal.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Silicon & Tech Ribbon */}
      <section className="bg-white border-b border-slate-200 py-5 px-4 sm:px-6 lg:px-8 overflow-x-auto">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-6 min-w-max text-xs font-semibold text-slate-600">
          <span className="uppercase tracking-widest text-[#0284C7] font-bold shrink-0">
            {lang === 'en' ? 'Core Capabilities' : 'Kapabilitas Utama'}:
          </span>
          <div className="flex items-center gap-5 sm:gap-8 flex-wrap">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200/80 tracking-wide font-mono text-[11px]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Popular Engineering Gigs & Sprints (The Gigs Feel) */}
      <section className="bg-[#F8FAFC] py-16 sm:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0284C7]/10 text-[#0284C7] font-semibold text-xs tracking-wider uppercase mb-3">
                <Zap className="w-3.5 h-3.5" />
                <span>{t.home_gigs_label}</span>
              </div>
              <h2 className="font-['Barlow_Condensed'] font-bold text-3xl sm:text-5xl text-[#0F172A] leading-tight mb-3">
                {t.home_gigs_title}
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">
                {t.home_gigs_sub}
              </p>
            </div>

            <button
              onClick={() => navigate('solutions')}
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0284C7] hover:text-[#0369A1] transition-colors cursor-pointer group shrink-0"
            >
              <span>{lang === 'en' ? 'See all engagement packages' : 'Lihat semua paket kerjasama'}</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gigs.map((gig, idx) => {
              const IconComp = gig.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-xs hover:shadow-lg hover:border-[#0284C7]/50 transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wider uppercase bg-[#EAF2F8] text-[#0284C7] border border-[#0284C7]/20">
                        {gig.badge}
                      </span>
                      <div className="w-9 h-9 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-700 group-hover:text-[#0284C7] group-hover:bg-[#0284C7]/10 transition-colors">
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>

                    <h3 className="font-['Barlow_Condensed'] font-bold text-2xl text-[#0F172A] mb-3 group-hover:text-[#0284C7] transition-colors leading-tight">
                      {gig.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {gig.desc}
                    </p>

                    <div className="space-y-2.5 mb-6 pt-4 border-t border-slate-100">
                      {gig.feats.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7] shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(gig.waMessage)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs font-bold text-white bg-[#0F172A] hover:bg-[#0284C7] transition-colors shadow-xs group/btn"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>{t.gig_book_cta}</span>
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 4. Strategic Offerings: Consultation vs Turnkey Development */}
      <section className="bg-[#EAF2F8] py-16 sm:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 max-w-2xl">
            <span className="text-[#0284C7] font-semibold text-xs tracking-widest uppercase block mb-2">
              Full Spectrum Services
            </span>
            <h2 className="font-['Barlow_Condensed'] font-bold text-3xl sm:text-5xl text-[#0F172A] leading-tight mb-4">
              {t.home_wwd_title}
            </h2>
            <p className="text-slate-700 text-base sm:text-lg">
              {t.home_wwd_sub}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Consultation Card */}
            <div className="bg-white p-6 sm:p-10 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between hover:border-[#0284C7]/40 transition-colors">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#0284C7]/15 text-[#0284C7] flex items-center justify-center mb-6">
                  <Wrench className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold tracking-widest uppercase text-[#0284C7] block mb-1">
                  Strategy & Architecture
                </span>
                <h3 className="font-['Barlow_Condensed'] font-bold text-2xl sm:text-4xl text-[#0F172A] mb-4">
                  {t.home_consult_title}
                </h3>
                <p className="text-slate-600 text-base leading-relaxed mb-8">
                  {t.home_consult_body}
                </p>
              </div>

              <div>
                <ul className="space-y-3 pt-6 border-t border-slate-200 mb-8">
                  {[t.consult_1, t.consult_2, t.consult_3, t.consult_4, t.consult_5].map(
                    (item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-slate-800 text-sm sm:text-base font-medium"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#0284C7] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    )
                  )}
                </ul>

                <button
                  onClick={() => navigate('contact')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-[#0284C7] hover:text-white text-[#0F172A] font-semibold text-sm px-6 py-3 rounded-lg border border-slate-300 transition-all cursor-pointer"
                >
                  <span>{lang === 'en' ? 'Book a Consultation Session' : 'Jadwalkan Sesi Konsultasi'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Product Development Card */}
            <div className="bg-[#0F172A] text-white p-6 sm:p-10 rounded-2xl border border-slate-800 shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#00B4D8]/20 text-[#00B4D8] flex items-center justify-center mb-6">
                  <Cpu className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold tracking-widest uppercase text-[#00B4D8] block mb-1">
                  Turnkey Engineering
                </span>
                <h3 className="font-['Barlow_Condensed'] font-bold text-2xl sm:text-4xl text-white mb-4">
                  {t.home_dev_title}
                </h3>
                <p className="text-slate-300 text-base leading-relaxed mb-8">
                  {t.home_dev_body}
                </p>
              </div>

              <div>
                <ul className="space-y-3 pt-6 border-t border-slate-800 mb-8">
                  {[t.dev_1, t.dev_2, t.dev_3, t.dev_4, t.dev_5].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-slate-200 text-sm sm:text-base font-medium"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#00B4D8] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => navigate('contact')}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold text-sm px-6 py-3 rounded-lg transition-all cursor-pointer shadow-md"
                >
                  <span>{lang === 'en' ? 'Start Product Development' : 'Mulai Pengembangan Produk'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The Pogot Advantage (Why Choose Us) */}
      <section className="bg-white py-16 sm:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-[#0284C7] font-semibold text-xs tracking-widest uppercase block mb-2">
              {t.diff_label}
            </span>
            <h2 className="font-['Barlow_Condensed'] font-bold text-3xl sm:text-5xl text-[#0F172A] mb-4">
              {t.diff_title}
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              {t.diff_sub}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 shadow-2xs hover:border-[#0284C7]/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#0284C7]/10 text-[#0284C7] flex items-center justify-center mb-6 font-bold text-xl">
                01
              </div>
              <h3 className="font-['Barlow_Condensed'] font-bold text-2xl text-[#0F172A] mb-3">
                {t.diff_1_title}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {t.diff_1_desc}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 shadow-2xs hover:border-[#0284C7]/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#0284C7]/10 text-[#0284C7] flex items-center justify-center mb-6 font-bold text-xl">
                02
              </div>
              <h3 className="font-['Barlow_Condensed'] font-bold text-2xl text-[#0F172A] mb-3">
                {t.diff_2_title}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {t.diff_2_desc}
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 shadow-2xs hover:border-[#0284C7]/40 transition-all">
              <div className="w-12 h-12 rounded-xl bg-[#0284C7]/10 text-[#0284C7] flex items-center justify-center mb-6 font-bold text-xl">
                03
              </div>
              <h3 className="font-['Barlow_Condensed'] font-bold text-2xl text-[#0F172A] mb-3">
                {t.diff_3_title}
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {t.diff_3_desc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Engineering Workflow (01 to 04) */}
      <section className="bg-[#EAF2F8] py-16 sm:py-24 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-[#0284C7] font-semibold text-xs tracking-widest uppercase block mb-2">
              Execution Process
            </span>
            <h2 className="font-['Barlow_Condensed'] font-bold text-3xl sm:text-5xl text-[#0F172A]">
              {t.home_process_title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { n: '01', title: t.step_01_title, body: t.step_01_body },
              { n: '02', title: t.step_02_title, body: t.step_02_body },
              { n: '03', title: t.step_03_title, body: t.step_03_body },
              { n: '04', title: t.step_04_title, body: t.step_04_body },
            ].map(({ n, title, body }) => (
              <div
                key={n}
                className="bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <span className="font-['Barlow_Condensed'] font-bold text-4xl sm:text-5xl text-[#0284C7] block mb-3">
                    {n}
                  </span>
                  <h3 className="font-['Barlow_Condensed'] font-bold text-xl sm:text-2xl text-[#0F172A] mb-3">
                    {title}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Engineering Insights (Latest Articles Preview) */}
      {recentArticles.length > 0 && (
        <section className="bg-[#F8FAFC] py-16 sm:py-24 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
              <div>
                <span className="text-[#0284C7] font-semibold text-xs tracking-widest uppercase block mb-2">
                  {t.home_articles_label}
                </span>
                <h2 className="font-['Barlow_Condensed'] font-bold text-3xl sm:text-5xl text-[#0F172A] leading-tight">
                  {t.home_articles_title}
                </h2>
                <p className="text-slate-600 text-base sm:text-lg mt-2 max-w-xl">
                  {t.home_articles_sub}
                </p>
              </div>

              <button
                onClick={() => navigate('articles')}
                className="inline-flex items-center gap-2 text-sm font-bold text-[#0284C7] hover:text-[#0369A1] transition-colors cursor-pointer group shrink-0"
              >
                <span>{t.home_articles_all}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {recentArticles.map((article) => {
                const title = lang === 'en' ? article.title.en : article.title.id
                const tag = lang === 'en' ? article.tag.en : article.tag.id
                const summary = lang === 'en' ? article.summary.en : article.summary.id

                return (
                  <article
                    key={article.id}
                    onClick={() => navigate('articles')}
                    className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
                  >
                    <div>
                      <div className="h-44 sm:h-48 overflow-hidden bg-[#0F172A] relative">
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
                            {article.readTime} {lang === 'en' ? 'min' : 'menit'}
                          </span>
                        </div>

                        <h3 className="font-['Barlow_Condensed'] font-bold text-xl sm:text-2xl text-[#0F172A] mb-3 leading-snug group-hover:text-[#0284C7] transition-colors">
                          {title}
                        </h3>

                        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                          {summary}
                        </p>
                      </div>
                    </div>

                    <div className="px-6 pb-6 pt-0">
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0284C7] uppercase tracking-wider group-hover:gap-2 transition-all">
                        <span>{lang === 'en' ? 'Read article →' : 'Baca artikel →'}</span>
                      </span>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* 8. Call To Action Banner */}
      <section className="bg-[#0F172A] text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#00B4D8_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00B4D8]/10 text-[#00B4D8] font-semibold text-xs tracking-wider uppercase mb-6 border border-[#00B4D8]/20">
            <Compass className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Direct Technical Consultation' : 'Konsultasi Teknis Langsung'}</span>
          </div>

          <h2 className="font-['Barlow_Condensed'] font-bold text-3xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
            {t.home_cta_title}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
            {t.home_cta_sub}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                lang === 'en'
                  ? 'Hi Pogot Studio, I would like to chat with an engineer about my project.'
                  : 'Halo Pogot Studio, saya ingin berdiskusi dengan tim rekayasa mengenai proyek saya.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold text-base sm:text-lg px-8 py-4 rounded-lg shadow-lg cursor-pointer transition-all hover:scale-105"
            >
              <MessageSquare className="w-5 h-5" />
              <span>{t.home_cta_btn}</span>
            </a>

            <button
              onClick={() => navigate('contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-base sm:text-lg px-8 py-4 rounded-lg border border-slate-700 transition-all cursor-pointer"
            >
              <span>{lang === 'en' ? 'Send Project Note' : 'Kirim Catatan Proyek'}</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* 9. Footer */}
      <footer className="bg-slate-950 text-slate-400 py-10 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <img
              src={emblemSrc}
              alt="Pogot emblem"
              className="w-7 h-7 object-contain rounded bg-slate-900 p-0.5 border border-slate-700"
            />
            <span className="font-['Barlow_Condensed'] font-bold text-xl text-white">
              Pogot Studio
            </span>
            <span className="text-slate-600">|</span>
            <span className="text-xs text-slate-400">Embedded · IoT · AIoT Studio</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-500">
            {t.footer_copy}
          </p>
        </div>
      </footer>
    </main>
  )
}
