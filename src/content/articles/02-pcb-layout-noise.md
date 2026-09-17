---
title_en: "PCB layout mistakes that cause noise problems in analog circuits"
title_id: "Kesalahan tata letak PCB yang menyebabkan masalah noise pada sirkuit analog"
date: "2025-10-28"
tag_en: "Hardware"
tag_id: "Hardware"
readTime: 9
summary_en: "Electromagnetic interference in mixed-signal designs usually traces back to a handful of layout decisions made early. We walk through the most common ones."
summary_id: "Interferensi elektromagnetik dalam desain sinyal campuran biasanya berakar dari beberapa keputusan tata letak yang dibuat lebih awal."
image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=500&fit=crop&auto=format"
author: "Pogot Studio Engineering"
slug: "pcb-layout-noise"
---

<!-- en -->
# PCB layout mistakes that cause noise problems in analog circuits

Mixed-signal printed circuit boards—where sensitive analog sensors coexist with high-speed digital processors—frequently suffer from unexpected noise problems during prototype bring-up.

## Common Layout Pitfalls

### 1. Splitting Ground Planes Improperly
A common myth in hardware design is that splitting analog ground (AGND) and digital ground (DGND) always reduces noise. In modern high-speed designs, split planes often create large return loop inductances when signals cross the gap.

### 2. Poor Decoupling Capacitor Placement
Decoupling capacitors must be placed as close as physically possible to the IC power pins, with short, wide traces to minimize parasitic inductance.

### 3. Routing High-Speed Digital Traces Near Sensitive Analog Inputs
SPI clocks and switching regulators generate high dv/dt noise. Keep these at least 3x trace-width away from analog traces or isolate them with ground shielding.

---

<!-- id -->
# Kesalahan tata letak PCB yang menyebabkan masalah noise pada sirkuit analog

Papan sirkuit terpadu sinyal campuran (mixed-signal PCB) sering mengalami masalah noise yang tidak terduga selama pengujian prototipe awal.

## Jebakan Tata Letak yang Umum

### 1. Memisah Plane Ground Secara Tidak Tepat
Mitos umum adalah bahwa memisah ground analog (AGND) dan digital (DGND) selalu mengurangi noise. Sebaliknya, celah pada plane ground dapat menciptakan loop induktansi besar.

### 2. Penempatan Kapasitor Decoupling yang Buruk
Kapasitor decoupling harus ditempatkan sedekat mungkin ke pin daya IC dengan jalur pendek dan lebar.
