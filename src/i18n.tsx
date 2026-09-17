import { createContext, useContext, useState } from 'react'

export type Lang = 'en' | 'id'

type Strings = {
  // Nav
  nav_home: string
  nav_solutions: string
  nav_articles: string
  nav_contact: string

  // Home hero
  home_label: string
  home_h1a: string
  home_h1b: string
  home_sub: string
  home_cta_services: string
  home_cta_talk: string
  home_image_caption: string
  home_badge_ip: string
  home_badge_scope: string
  home_badge_lab: string
  home_badge_wa: string

  // Home gigs & sprints
  home_gigs_label: string
  home_gigs_title: string
  home_gigs_sub: string
  gig_1_badge: string
  gig_1_title: string
  gig_1_desc: string
  gig_1_feat1: string
  gig_1_feat2: string
  gig_1_feat3: string
  gig_2_badge: string
  gig_2_title: string
  gig_2_desc: string
  gig_2_feat1: string
  gig_2_feat2: string
  gig_2_feat3: string
  gig_3_badge: string
  gig_3_title: string
  gig_3_desc: string
  gig_3_feat1: string
  gig_3_feat2: string
  gig_3_feat3: string
  gig_4_badge: string
  gig_4_title: string
  gig_4_desc: string
  gig_4_feat1: string
  gig_4_feat2: string
  gig_4_feat3: string
  gig_book_cta: string

  // Home what we do
  home_wwd_title: string
  home_wwd_sub: string
  home_consult_title: string
  home_consult_body: string
  home_dev_title: string
  home_dev_body: string

  // Consult items
  consult_1: string
  consult_2: string
  consult_3: string
  consult_4: string
  consult_5: string

  // Dev items
  dev_1: string
  dev_2: string
  dev_3: string
  dev_4: string
  dev_5: string

  // Why choose us / differentiation
  diff_label: string
  diff_title: string
  diff_sub: string
  diff_1_title: string
  diff_1_desc: string
  diff_2_title: string
  diff_2_desc: string
  diff_3_title: string
  diff_3_desc: string

  // Home articles preview
  home_articles_label: string
  home_articles_title: string
  home_articles_sub: string
  home_articles_all: string

  // Home process
  home_process_title: string
  step_01_title: string
  step_01_body: string
  step_02_title: string
  step_02_body: string
  step_03_title: string
  step_03_body: string
  step_04_title: string
  step_04_body: string

  // Home CTA
  home_cta_title: string
  home_cta_sub: string
  home_cta_btn: string

  // Footer
  footer_copy: string

  // Solutions
  sol_label: string
  sol_h1: string
  sol_sub: string
  sol_cta: string
  sol_consult_label: string
  sol_dev_label: string
  sol_engage_title: string
  engage_1_name: string
  engage_1_price: string
  engage_1_desc: string
  engage_2_name: string
  engage_2_price: string
  engage_2_desc: string
  engage_3_name: string
  engage_3_price: string
  engage_3_desc: string

  // Consult service items
  sc_1_title: string; sc_1_body: string
  sc_2_title: string; sc_2_body: string
  sc_3_title: string; sc_3_body: string
  sc_4_title: string; sc_4_body: string
  sc_5_title: string; sc_5_body: string

  // Dev service items
  sd_1_title: string; sd_1_body: string
  sd_2_title: string; sd_2_body: string
  sd_3_title: string; sd_3_body: string
  sd_4_title: string; sd_4_body: string
  sd_5_title: string; sd_5_body: string

  // Articles
  art_label: string
  art_h1: string
  art_tag_all: string
  art_read: string
  art_read_min: string

  // Article titles & summaries
  a1_title: string; a1_summary: string
  a2_title: string; a2_summary: string
  a3_title: string; a3_summary: string
  a4_title: string; a4_summary: string
  a5_title: string; a5_summary: string
  a6_title: string; a6_summary: string

  // Contact
  con_label: string
  con_h1: string
  con_sub: string
  con_interest_title: string
  con_interest_1: string
  con_interest_2: string
  con_interest_3: string
  con_note_label: string
  con_note_ph: string
  con_wa_btn: string
  con_wa_hint: string
  con_next_title: string
  con_next_1: string
  con_next_2: string
  con_next_3: string
  con_fit_title: string
  con_fit_1: string
  con_fit_2: string
  con_fit_3: string
  con_fit_4: string
  con_email_label: string
}

const en: Strings = {
  nav_home: 'Home', nav_solutions: 'Solutions', nav_articles: 'Articles', nav_contact: 'Contact',
  home_label: 'EMBEDDED SYSTEMS & IoT ENGINEERING STUDIO',
  home_h1a: 'From Technology Idea',
  home_h1b: 'to Market-Ready Product.',
  home_sub: 'We help companies evaluate, architect, and engineer connected physical products — from specialized feasibility & firmware packages to complete turnkey hardware, edge Linux, and cloud IoT telemetry.',
  home_cta_services: 'Explore Engineering Services',
  home_cta_talk: 'Chat on WhatsApp',
  home_image_caption: 'Hardware · Bare-Metal & RTOS · Embedded Linux · Cloud IoT',
  home_badge_ip: '100% IP & Source Code Ownership',
  home_badge_scope: 'Defined Scope & Deliverables',
  home_badge_lab: 'Bench & Lab Validated Hardware',
  home_badge_wa: 'Direct Engineer Communication',

  // Home gigs & sprints
  home_gigs_label: 'Focused Engineering Sprints',
  home_gigs_title: 'Specialized Engineering Packages',
  home_gigs_sub: 'Modular, milestone-driven engagements designed for specific technical challenges — without the overhead of expanding your internal engineering team.',
  gig_1_badge: 'Architecture & Feasibility',
  gig_1_title: 'Feasibility & Architecture Review',
  gig_1_desc: 'Make informed technical decisions before committing capital. We analyze MCU/SoC selection, power budgets, BOM unit costs, and system architecture.',
  gig_1_feat1: 'Component & MCU/SoC trade-off analysis',
  gig_1_feat2: 'BOM cost modeling & battery life calculation',
  gig_1_feat3: 'Comprehensive architecture blueprint with clear technical direction',
  gig_2_badge: 'Firmware & Bring-Up',
  gig_2_title: 'Firmware & Driver Bring-Up',
  gig_2_desc: 'Have prototype PCBs waiting for software? We write clean, testable C/C++ bare-metal or RTOS drivers and validate hardware peripherals on the bench.',
  gig_2_feat1: 'Board bring-up & hardware register initialization',
  gig_2_feat2: 'I2C, SPI, UART, CAN, ADC sensor & peripheral drivers',
  gig_2_feat3: 'FreeRTOS / Zephyr task architecture & power profiling',
  gig_3_badge: 'IoT & Edge Systems',
  gig_3_title: 'IoT Gateway & Telemetry Systems',
  gig_3_desc: 'Connect physical machines and industrial sensors to cloud backends with secure, reliable data pipelines and over-the-air update capability.',
  gig_3_feat1: 'Embedded Linux / ESP32 cellular, Wi-Fi & LoRaWAN integration',
  gig_3_feat2: 'Secure MQTT/TLS telemetry ingestion & device management',
  gig_3_feat3: 'Fail-safe Over-The-Air (OTA) firmware update pipeline',
  gig_4_badge: 'Production Engineering',
  gig_4_title: 'Prototype Hardening & DFM Optimization',
  gig_4_desc: 'Transition a lab bench prototype into a reliable, production-ready product designed for manufacturability, compliance, and field resilience.',
  gig_4_feat1: 'Multi-layer PCB redesign & Design for Manufacturing (DFM) review',
  gig_4_feat2: 'Watchdog timers, brown-out protection & fault recovery routines',
  gig_4_feat3: 'Noise/EMC mitigation & factory test firmware',
  gig_book_cta: 'Discuss This Package',

  // Home what we do
  home_wwd_title: 'Two Core Service Offerings',
  home_wwd_sub: 'Whether you need structured guidance before committing development capital, or an experienced team to build the entire product.',
  home_consult_title: 'Product & Technology Consultation',
  home_consult_body: 'Know what to build before spending heavily on development. We evaluate product concepts, assess technical feasibility, design system architectures, and model cost projections.',
  home_dev_title: 'Embedded, IoT & AIoT Development',
  home_dev_body: 'Turn an idea or existing prototype into a dependable physical product. We handle custom hardware, firmware, edge systems, and cloud connectivity.',
  consult_1: 'Idea validation & product concept review',
  consult_2: 'Technical feasibility assessment',
  consult_3: 'System & product architecture design',
  consult_4: 'BOM modeling & development planning',
  consult_5: 'Prototype audit & risk analysis',
  dev_1: 'Hardware & embedded firmware (C/C++, RTOS)',
  dev_2: 'Connectivity & IoT systems',
  dev_3: 'Embedded Linux & edge computing',
  dev_4: 'AI / AIoT integration',
  dev_5: 'Production engineering & OTA updates',

  // Why choose us / differentiation
  diff_label: 'Engineering Philosophy',
  diff_title: 'Why Teams Partner With Us',
  diff_sub: 'We connect business strategy, electronic hardware, and cloud software — delivering working products without unnecessary complexity.',
  diff_1_title: 'Problem First, Silicon Second',
  diff_1_desc: 'We do not push technology trends or specify unnecessary expensive parts. We choose the leanest, most reliable architecture that solves the actual business requirement.',
  diff_2_title: 'Full-Stack Hardware to Cloud',
  diff_2_desc: 'Hardware schematics, low-level microcontroller firmware, and cloud API integration are developed by one unified team, eliminating vendor friction.',
  diff_3_title: 'Production-Minded from Day One',
  diff_3_desc: 'We design for real operating conditions — factoring in power fluctuations, thermal behavior, component availability, and factory assembly testing from the start.',

  // Home articles preview
  home_articles_label: 'Technical Insights',
  home_articles_title: 'Engineering Writing Without the Fluff',
  home_articles_sub: 'Practical engineering guides on firmware determinism, low-power design, and hardware bring-up from our active client work.',
  home_articles_all: 'View all engineering articles',
  home_process_title: 'How We Work',
  step_01_title: 'Requirements',
  step_01_body: 'We analyze your business objectives and operational requirements to determine the right technical direction.',
  step_02_title: 'Architecture',
  step_02_body: 'We design the system architecture, evaluate component trade-offs, and establish a clear development scope and budget.',
  step_03_title: 'Engineering',
  step_03_body: 'We engineer hardware, write firmware, and build connectivity pipelines — validated through rigorous bench testing.',
  step_04_title: 'Delivery',
  step_04_body: 'Working, tested hardware and software with complete documentation, source code, and full IP handover.',
  home_cta_title: 'Have a hardware or IoT project to discuss?',
  home_cta_sub: 'Talk directly with our lead embedded systems engineers. We will review your requirements and provide practical technical feedback.',
  home_cta_btn: 'Chat with an Engineer on WhatsApp',
  footer_copy: '© 2026 Pogot Studio. Embedded, IoT & AIoT product engineering.',
  sol_label: 'Services', sol_h1: 'Two services, one engineering team.',
  sol_sub: 'Consultation and product development — designed to reduce uncertainty and deliver working connected physical products.',
  sol_cta: 'Discuss your project',
  sol_consult_label: 'Product & Technology Consultation',
  sol_dev_label: 'Embedded, IoT & AIoT Development',
  sol_engage_title: 'Engagement models',
  engage_1_name: 'Consultation package', engage_1_price: 'Fixed fee',
  engage_1_desc: 'Structured analysis of your idea, prototype, or technology decision — delivered as a documented package with architecture, cost estimate, and risk assessment.',
  engage_2_name: 'Retainer', engage_2_price: 'Monthly',
  engage_2_desc: 'Ongoing embedded, IoT, or AIoT engineering expertise on a regular basis — without a full-time hire.',
  engage_3_name: 'Full project', engage_3_price: 'Project-based',
  engage_3_desc: 'End-to-end product development from concept through production-ready hardware, firmware, and IoT systems. Milestone-based delivery.',
  sc_1_title: 'Idea Validation',
  sc_1_body: 'Evaluate a new product concept — is it technically and commercially viable? We give you a clear go / revise / no-go recommendation before you commit resources.',
  sc_2_title: 'Technical Feasibility',
  sc_2_body: 'Determine whether and how your product can be built — covering hardware, firmware, connectivity, edge, and AI/AIoT where relevant.',
  sc_3_title: 'Product Architecture',
  sc_3_body: 'Design the technical system — hardware, embedded software, IoT connectivity, edge computing, and cloud architecture tailored to your product requirements.',
  sc_4_title: 'Product Planning',
  sc_4_body: 'Estimate scope, budget, and technical execution — so your team can make a confident investment decision with a clear development roadmap.',
  sc_5_title: 'Prototype Assessment',
  sc_5_body: 'Review an existing prototype — identify technical risks, architecture gaps, and recommended next actions before committing to full development.',
  sd_1_title: 'Hardware & Embedded Firmware',
  sd_1_body: 'From embedded hardware architecture and MCU selection to C/C++ firmware, RTOS systems, device drivers, and device lifecycle management.',
  sd_2_title: 'Connectivity & IoT Systems',
  sd_2_body: 'MQTT device communication, device identity and provisioning, telemetry ingestion, backend services, APIs, and device monitoring.',
  sd_3_title: 'Embedded Linux & Edge Computing',
  sd_3_body: 'Linux-based gateways, Buildroot/Yocto systems, hardware bring-up, local processing, and edge connectivity solutions.',
  sd_4_title: 'AI / AIoT Integration',
  sd_4_body: 'Sensor-data intelligence, edge inference, rules and anomaly detection, and AI-enabled product features — when the business case justifies it.',
  sd_5_title: 'Production Engineering',
  sd_5_body: 'Firmware hardening, OTA and rollback, manufacturing test firmware, production configuration, and deployment documentation.',
  art_label: 'Articles', art_h1: 'Technical writing without the fluff.', art_tag_all: 'All',
  art_read: 'Read article →', art_read_min: 'min read',
  a1_title: 'Choosing between bare-metal and an RTOS for your next project',
  a1_summary: 'Most embedded projects do not need a real-time OS. Here is how to decide whether one would actually help yours — and what you give up if you add one.',
  a2_title: 'PCB layout mistakes that cause noise problems in analog circuits',
  a2_summary: 'Electromagnetic interference in mixed-signal designs usually traces back to a handful of layout decisions made early. We walk through the most common ones.',
  a3_title: 'How to estimate battery life before you build anything',
  a3_summary: 'A simple current-budget model you can build in a spreadsheet. Includes worked examples for a BLE sensor node and a display-driven consumer device.',
  a4_title: 'Writing device drivers you can actually test',
  a4_summary: 'Hardware bring-up is slow because drivers are tightly coupled to silicon. Here is an abstraction pattern that lets you write and run driver tests on your laptop.',
  a5_title: 'What to prepare before sending your design to a contract manufacturer',
  a5_summary: 'Most first-time hardware teams under-prepare their manufacturing package. This checklist covers what a CM actually needs to quote and build your board correctly.',
  a6_title: 'Reading a datasheet efficiently: what to look for first',
  a6_summary: 'Datasheets are long. Knowing which sections matter for your use case — and in which order — saves hours of reading and prevents integration mistakes.',
  con_label: 'Contact',
  con_h1: "Let's talk about your project.",
  con_sub: 'Tell us what you are building and we will help you figure out the right next step — consultation, product development, or just a conversation.',
  con_interest_title: 'What are you looking for?',
  con_interest_1: 'Product & Technology Consultation',
  con_interest_2: 'Embedded, IoT & AIoT Development',
  con_interest_3: 'Just exploring options',
  con_note_label: 'Brief description (optional)',
  con_note_ph: "What are you building? Where are you in the process? What's the main challenge?",
  con_wa_btn: 'Chat on WhatsApp',
  con_wa_hint: 'Opens WhatsApp — we reply within one business day',
  con_next_title: 'What happens next',
  con_next_1: 'You send us a WhatsApp message with a brief description of your project.',
  con_next_2: 'We review it and respond — with questions, a direction, or a proposed scope.',
  con_next_3: 'If it looks like a good fit, we schedule a short call.',
  con_fit_title: 'Good fit for us',
  con_fit_1: 'Companies with an embedded, IoT, or AIoT product idea or prototype',
  con_fit_2: 'Teams needing cross-disciplinary hardware and software engineering',
  con_fit_3: 'Businesses evaluating whether a technology investment makes sense',
  con_fit_4: 'Projects that need both technical and product thinking',
  con_email_label: 'Or email us directly',
}

const id: Strings = {
  nav_home: 'Beranda', nav_solutions: 'Solusi', nav_articles: 'Artikel', nav_contact: 'Kontak',
  home_label: 'STUDIO REKAYASA SISTEM EMBEDDED & IoT',
  home_h1a: 'Dari Ide Teknologi',
  home_h1b: 'Menjadi Produk Siap Pasar.',
  home_sub: 'Kami membantu perusahaan mengevaluasi, merancang arsitektur, dan merekayasa produk fisik terhubung — mulai dari modul kelayakan dan firmware terarah hingga pengembangan hardware turnkey, Linux edge, dan telemetri cloud IoT.',
  home_cta_services: 'Jelajahi Layanan Rekayasa',
  home_cta_talk: 'Chat via WhatsApp',
  home_image_caption: 'Hardware · Bare-Metal & RTOS · Embedded Linux · Cloud IoT',
  home_badge_ip: '100% Kepemilikan Source Code & IP',
  home_badge_scope: 'Ruang Lingkup & Deliverable Jelas',
  home_badge_lab: 'Validasi Pengujian Laboratorium',
  home_badge_wa: 'Komunikasi Langsung dengan Engineer',

  // Home gigs & sprints
  home_gigs_label: 'Paket Rekayasa Terfokus',
  home_gigs_title: 'Modul Rekayasa Spesifik',
  home_gigs_sub: 'Layanan terarah dan berbasis milestone untuk menjawab tantangan teknis spesifik Anda — tanpa beban penambahan tim internal yang memakan biaya.',
  gig_1_badge: 'Arsitektur & Kelayakan',
  gig_1_title: 'Studi Kelayakan & Tinjauan Arsitektur',
  gig_1_desc: 'Ambil keputusan teknis yang tepat sebelum mengalokasikan investasi besar. Kami menganalisis pemilihan komponen/MCU, kalkulasi daya baterai, pemodelan biaya BOM, serta arsitektur sistem.',
  gig_1_feat1: 'Analisis perbandingan komponen dan pemilihan MCU/SoC',
  gig_1_feat2: 'Pemodelan biaya unit (BOM) dan kalkulasi konsumsi daya',
  gig_1_feat3: 'Cetak biru arsitektur lengkap beserta rekomendasi teknis terarah',
  gig_2_badge: 'Firmware & Bring-Up',
  gig_2_title: 'Pengembangan Firmware & Driver Bring-Up',
  gig_2_desc: 'Memiliki prototipe PCB yang membutuhkan firmware andal? Kami menulis driver perangkat dalam C/C++ (bare-metal atau RTOS) serta memvalidasi fungsionalitas board di laboratorium.',
  gig_2_feat1: 'Board bring-up dan inisialisasi register perangkat keras',
  gig_2_feat2: 'Pengembangan driver sensor & periferal (I2C, SPI, UART, CAN, ADC)',
  gig_2_feat3: 'Arsitektur task RTOS (FreeRTOS / Zephyr) serta optimasi daya',
  gig_3_badge: 'Sistem IoT & Edge',
  gig_3_title: 'Gateway IoT & Sistem Telemetri',
  gig_3_desc: 'Hubungkan mesin industri dan sensor lapangan ke sistem cloud melalui pipeline data yang aman, terenkripsi, serta dilengkapi sistem pembaruan jarak jauh (OTA).',
  gig_3_feat1: 'Integrasi konektivitas seluler, Wi-Fi, dan LoRaWAN pada Linux/ESP32',
  gig_3_feat2: 'Komunikasi data aman MQTT/TLS serta pengelolaan status perangkat',
  gig_3_feat3: 'Mekanisme pembaruan firmware over-the-air (OTA) yang aman',
  gig_4_badge: 'Kesiapan Manufaktur',
  gig_4_title: 'Penyempurnaan Prototipe & Standar Manufaktur',
  gig_4_desc: 'Tingkatkan prototipe pengujian awal menjadi produk matang yang siap diproduksi massal, dengan keandalan tinggi di lapangan dan kemudahan perakitan pabrik.',
  gig_4_feat1: 'Redesain tata letak PCB multi-layer dan audit DFM/DFA',
  gig_4_feat2: 'Penerapan watchdog, proteksi lonjakan tegangan, dan recovery otomatis',
  gig_4_feat3: 'Mitigasi noise/EMC dan penyusunan firmware untuk uji produksi',
  gig_book_cta: 'Konsultasikan Paket Ini',

  // Home what we do
  home_wwd_title: 'Dua Layanan Utama Kami',
  home_wwd_sub: 'Baik Anda membutuhkan evaluasi terarah sebelum berinvestasi besar, maupun tim teknis berpengalaman untuk membangun produk fisik hingga tuntas.',
  home_consult_title: 'Konsultasi Produk & Teknologi',
  home_consult_body: 'Pahami secara jelas apa yang perlu dibangun sebelum mengalokasikan anggaran riset dan pengembangan. Kami membantu validasi konsep, uji kelayakan teknis, desain arsitektur sistem, serta estimasi biaya produksi.',
  home_dev_title: 'Pengembangan Produk Embedded, IoT & AIoT',
  home_dev_body: 'Wujudkan ide atau prototipe awal menjadi produk fisik yang siap digunakan. Kami menangani perancangan hardware, firmware, sistem edge, hingga konektivitas cloud.',
  consult_1: 'Validasi ide dan konsep produk',
  consult_2: 'Studi kelayakan teknis (feasibility study)',
  consult_3: 'Perancangan arsitektur sistem dan perangkat',
  consult_4: 'Pemodelan biaya BOM dan roadmap pengembangan',
  consult_5: 'Audit dan evaluasi teknis prototipe',
  dev_1: 'Hardware dan firmware embedded (C/C++, RTOS)',
  dev_2: 'Sistem telemetri dan konektivitas IoT',
  dev_3: 'Embedded Linux dan komputasi edge',
  dev_4: 'Penerapan AI / AIoT pada perangkat',
  dev_5: 'Kesiapan manufaktur dan pembaruan OTA',

  // Why choose us / differentiation
  diff_label: 'Filosofi Kerja',
  diff_title: 'Mengapa Memilih Pogot Studio',
  diff_sub: 'Kami menghubungkan strategi bisnis, perangkat keras elektronik, dan sistem perangkat lunak cloud — menghasilkan produk nyata tanpa kompleksitas yang berlebihan.',
  diff_1_title: 'Fokus pada Kebutuhan, Bukan Sekadar Tren',
  diff_1_desc: 'Kami tidak memaksakan komponen mahal atau tren sesaat. Kami memilih arsitektur yang paling efisien, stabil, dan sesuai dengan kebutuhan operasional bisnis Anda.',
  diff_2_title: 'Integrasi Penuh: Dari Hardware ke Cloud',
  diff_2_desc: 'Perancangan skematik PCB, penulisan firmware mikrokontroler, hingga integrasi API cloud ditangani oleh satu tim terpadu tanpa friksi koordinasi antar-vendor.',
  diff_3_title: 'Berorientasi Produksi Sejak Awal',
  diff_3_desc: 'Perangkat dirancang untuk kondisi nyata di lapangan — memperhitungkan fluktuasi daya, ketahanan suhu, ketersediaan pasokan komponen, serta kemudahan pengujian saat produksi massal.',

  // Home articles preview
  home_articles_label: 'Wawasan Teknis',
  home_articles_title: 'Catatan Rekayasa Praktis & Lugas',
  home_articles_sub: 'Panduan teknis langsung mengenai determinisme firmware, desain daya rendah, dan bring-up hardware dari pengalaman proyek nyata kami.',
  home_articles_all: 'Lihat Semua Artikel Teknis',
  home_process_title: 'Tahapan Kerjasama',
  step_01_title: 'Analisis Kebutuhan',
  step_01_body: 'Kami mempelajari tujuan bisnis dan tantangan teknis Anda untuk menentukan arah solusi yang paling tepat.',
  step_02_title: 'Perancangan & Arsitektur',
  step_02_body: 'Kami merumuskan arsitektur sistem, memilih komponen utama, serta menetapkan ruang lingkup dan estimasi biaya yang jelas.',
  step_03_title: 'Pengembangan & Validasi',
  step_03_body: 'Kami merekayasa hardware, menyusun firmware, dan mengintegrasikan sistem konektivitas dengan pengujian ketat di lab.',
  step_04_title: 'Serah Terima & Dokumentasi',
  step_04_body: 'Perangkat teruji, dokumentasi teknis lengkap, serta seluruh kode sumber dan hak kekayaan intelektual (IP) diserahkan kepada Anda.',
  home_cta_title: 'Memiliki Proyek Hardware atau IoT yang Ingin Dibangun?',
  home_cta_sub: 'Diskusikan langsung kebutuhan Anda bersama lead embedded engineer kami untuk mendapatkan masukan teknis yang solutif dan realistis.',
  home_cta_btn: 'Konsultasi via WhatsApp',
  footer_copy: '© 2026 Pogot Studio. Rekayasa produk Embedded, IoT & AIoT.',
  sol_label: 'Solusi & Layanan', sol_h1: 'Dua Layanan Utama, Satu Tim Rekayasa Terpadu',
  sol_sub: 'Konsultasi terarah dan pengembangan produk terpadu — dirancang untuk meminimalkan risiko teknis dan mewujudkan produk fisik yang handal.',
  sol_cta: 'Diskusikan Proyek Anda',
  sol_consult_label: 'Konsultasi Produk & Teknologi',
  sol_dev_label: 'Pengembangan Produk Embedded, IoT & AIoT',
  sol_engage_title: 'Skema Kerjasama',
  engage_1_name: 'Paket Konsultasi Terarah', engage_1_price: 'Biaya Pasti (Fixed Scope)',
  engage_1_desc: 'Analisis terstruktur atas ide, prototipe, atau keputusan arsitektur Anda — menghasilkan dokumen cetak biru lengkap beserta estimasi biaya dan evaluasi risiko.',
  engage_2_name: 'Pendampingan Berkala', engage_2_price: 'Retainer Bulanan',
  engage_2_desc: 'Akses berkelanjutan ke keahlian rekayasa embedded, IoT, dan firmware kami untuk mendukung tim internal Anda tanpa perlu merekrut tenaga penuh waktu.',
  engage_3_name: 'Pengembangan Produk Penuh', engage_3_price: 'Berbasis Milestone Proyek',
  engage_3_desc: 'Pengembangan menyeluruh dari tahap konsep hingga hardware, firmware, dan sistem IoT siap produksi dengan pembagian milestone yang terukur.',
  sc_1_title: 'Validasi Ide & Konsep',
  sc_1_body: 'Evaluasi konsep produk baru secara objektif — apakah layak secara teknis dan komersial sebelum Anda mengalokasikan sumber daya besar.',
  sc_2_title: 'Uji Kelayakan Teknis',
  sc_2_body: 'Pastikan apakah dan bagaimana produk Anda dapat direalisasikan — mencakup aspek hardware, firmware, konektivitas, edge, dan AI/AIoT.',
  sc_3_title: 'Desain Arsitektur Sistem',
  sc_3_body: 'Rancang arsitektur perangkat keras, firmware tingkat rendah, protokol IoT, dan koneksi cloud yang paling efisien sesuai kebutuhan spesifik Anda.',
  sc_4_title: 'Perencanaan & Roadmap Produk',
  sc_4_body: 'Dapatkan estimasi biaya unit (BOM), kebutuhan anggaran riset, serta jadwal implementasi yang realistis untuk pengambilan keputusan bisnis.',
  sc_5_title: 'Audit & Evaluasi Prototipe',
  sc_5_body: 'Tinjau desain prototipe yang sudah ada untuk mengidentifikasi potensi kegagalan, kelemahan sirkuit, dan rekomendasi perbaikan sebelum masuk lini produksi.',
  sd_1_title: 'Hardware & Firmware Embedded',
  sd_1_body: 'Mulai dari perancangan skematik dan pemilihan MCU/SoC hingga penulisan firmware C/C++, sistem RTOS, driver periferal, dan manajemen daya.',
  sd_2_title: 'Konektivitas & Sistem IoT',
  sd_2_body: 'Protokol MQTT/TLS, provisi perangkat, pipeline data telemetri, backend cloud, API integrasi, dan pemantauan status perangkat real-time.',
  sd_3_title: 'Embedded Linux & Komputasi Edge',
  sd_3_body: 'Gateway industri berbasis Linux, sistem kustom Buildroot/Yocto, board bring-up, pemrosesan data lokal, dan konektivitas edge mandiri.',
  sd_4_title: 'Penerapan AI / AIoT',
  sd_4_body: 'Pengolahan sinyal sensor, inferensi edge (TinyML), serta deteksi anomali pada perangkat fisik saat kebutuhan operasional memerlukannya.',
  sd_5_title: 'Kesiapan Manufaktur (DFM)',
  sd_5_body: 'Penyusunan firmware uji produksi, proteksi watchdog & pemulihan otomatis, mekanisme rollback OTA, dan dokumentasi perakitan pabrik.',
  art_label: 'Artikel', art_h1: 'Catatan teknis langsung tanpa basa-basi.', art_tag_all: 'Semua',
  art_read: 'Baca artikel →', art_read_min: 'menit baca',
  a1_title: 'Memilih antara bare-metal dan RTOS untuk proyek Anda berikutnya',
  a1_summary: 'Sebagian besar proyek embedded tidak membutuhkan OS real-time. Begini cara memutuskan apakah RTOS benar-benar membantu proyek Anda.',
  a2_title: 'Kesalahan tata letak PCB yang menyebabkan masalah noise pada sirkuit analog',
  a2_summary: 'Interferensi elektromagnetik dalam desain sinyal campuran biasanya berakar dari beberapa keputusan tata letak yang dibuat lebih awal.',
  a3_title: 'Cara memperkirakan masa pakai baterai sebelum Anda membangun apapun',
  a3_summary: 'Model anggaran arus sederhana yang bisa dibuat di spreadsheet. Termasuk contoh untuk node sensor BLE dan perangkat berbasis layar.',
  a4_title: 'Menulis driver perangkat yang benar-benar bisa diuji',
  a4_summary: 'Bring-up hardware lambat karena driver terlalu terikat dengan silikon. Berikut pola abstraksi yang memungkinkan Anda menulis dan menjalankan uji driver di laptop.',
  a5_title: 'Apa yang perlu disiapkan sebelum mengirim desain ke produsen kontrak',
  a5_summary: 'Sebagian besar tim hardware pertama kali kurang mempersiapkan paket manufaktur mereka. Daftar periksa ini mencakup apa yang sebenarnya dibutuhkan CM.',
  a6_title: 'Membaca datasheet secara efisien: apa yang dicari terlebih dahulu',
  a6_summary: 'Datasheet panjang. Mengetahui bagian mana yang penting untuk kasus penggunaan Anda — dan dalam urutan apa — menghemat waktu membaca dan mencegah kesalahan integrasi.',
  con_label: 'Kontak',
  con_h1: 'Diskusikan Proyek Anda Bersama Kami',
  con_sub: 'Ceritakan kebutuhan teknologi Anda. Kami akan membantu menentukan langkah terbaik — baik sesi konsultasi terarah maupun pengembangan produk langsung.',
  con_interest_title: 'Layanan yang Anda butuhkan:',
  con_interest_1: 'Konsultasi Produk & Teknologi',
  con_interest_2: 'Pengembangan Produk Embedded, IoT & AIoT',
  con_interest_3: 'Eksplorasi opsi & diskusi awal',
  con_note_label: 'Deskripsi singkat proyek (opsional)',
  con_note_ph: 'Apa yang ingin Anda kembangkan? Pada tahap apa proyek Anda saat ini? Apa tantangan utama yang dihadapi?',
  con_wa_btn: 'Konsultasi via WhatsApp',
  con_wa_hint: 'Membuka WhatsApp — tim engineer kami akan merespons pesan Anda.',
  con_next_title: 'Langkah Selanjutnya',
  con_next_1: 'Kirimkan ringkasan kebutuhan atau kendala teknis proyek Anda.',
  con_next_2: 'Kami akan meninjau dan memberikan tanggapan awal serta rekomendasi teknis.',
  con_next_3: 'Jika diperlukan, kami menjadwalkan diskusi teknis lanjutan secara mendalam.',
  con_fit_title: 'Kriteria Proyek yang Tepat',
  con_fit_1: 'Perusahaan yang sedang mengembangkan produk berbasis embedded, IoT, atau AIoT',
  con_fit_2: 'Tim yang memerlukan keahlian rekayasa hardware dan firmware terpadu',
  con_fit_3: 'Organisasi yang ingin memvalidasi kelayakan teknis sebelum investasi modal',
  con_fit_4: 'Proyek yang menuntut keandalan tinggi dan kesiapan skala manufaktur',
  con_email_label: 'Atau kirim email langsung ke kami',
}

const translations = { en, id }

type LangCtx = { lang: Lang; t: Strings; setLang: (l: Lang) => void }
const LangContext = createContext<LangCtx>({ lang: 'en', t: en, setLang: () => {} })

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')
  return (
    <LangContext.Provider value={{ lang, t: translations[lang], setLang }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
