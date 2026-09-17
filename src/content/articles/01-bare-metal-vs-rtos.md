---
title_en: "Choosing between bare-metal and an RTOS for your next project"
title_id: "Memilih antara bare-metal dan RTOS untuk proyek Anda berikutnya"
date: "2025-11-14"
tag_en: "Firmware"
tag_id: "Firmware"
readTime: 7
summary_en: "Most embedded projects do not need a real-time OS. Here is how to decide whether one would actually help yours — and what you give up if you add one."
summary_id: "Sebagian besar proyek tertanam tidak membutuhkan OS real-time. Begini cara memutuskan apakah RTOS benar-benar membantu proyek Anda."
image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop&auto=format"
author: "Pogot Studio Engineering"
slug: "bare-metal-vs-rtos"
---

<!-- en -->
# Choosing between bare-metal and an RTOS for your next project

When starting a new microcontroller project, one of the first architectural decisions is whether to write **bare-metal code** (a main loop with interrupts) or use a **Real-Time Operating System (RTOS)** like FreeRTOS, Zephyr, or ThreadX.

## 1. The Bare-Metal Approach

Bare-metal programming means running directly on hardware without an OS abstraction layer. Everything happens in `main()` or interrupt service routines (ISRs).

### Advantages
- **Determinism and simplicity:** You know exactly what code executes at any microsecond.
- **Minimal RAM/Flash footprint:** No task stacks or RTOS kernel overhead (saving 5KB–20KB RAM).
- **Easier debugging:** No task switching state to inspect in GDB or J-Link.

### When bare-metal shines
When your MCU handles single-purpose control loops (e.g. power converters, motor drives, basic UART/SPI bridges) or battery-powered sensor nodes that spend 99% of time in deep sleep.

---

## 2. When to transition to an RTOS

As embedded applications grow, managing state machines in a single main loop becomes messy. An RTOS provides preemptive multitasking, queues, semaphores, and timers.

### Key triggers for an RTOS
1. **Multiple communication stacks:** E.g., running BLE + Wi-Fi + USB concurrently while reading sensors.
2. **Strict multi-rate timing:** Tasks requiring independent 1ms, 10ms, and 100ms periodic execution.
3. **Complex blocking I/O:** Reading flash storage or waiting for network responses without stalling control loops.

## Summary Checklist

| Criteria | Bare-metal | RTOS |
| :--- | :--- | :--- |
| **RAM available** | < 16 KB | > 32 KB |
| **Concurrency** | Sequential / ISRs | Multi-threaded |
| **Development Speed** | Fast initially | Scales better on large teams |
| **Power Management** | Manual sleep enter | Built-in tickless idle |

---

<!-- id -->
# Memilih antara bare-metal dan RTOS untuk proyek Anda berikutnya

Saat memulai proyek mikrokontroler baru, salah satu keputusan arsitektur pertama adalah apakah menggunakan **kode bare-metal** (loop utama dengan interupsi) atau **Real-Time Operating System (RTOS)** seperti FreeRTOS, Zephyr, atau ThreadX.

## 1. Pendekatan Bare-Metal

Pemrograman bare-metal berarti berjalan langsung di hardware tanpa lapisan abstraksi OS. Semua hal terjadi di `main()` atau rutinitas layanan interupsi (ISR).

### Keuntungan
- **Deterministik dan sederhana:** Anda tahu persis kode mana yang dieksekusi setiap mikrodetik.
- **Jejak RAM/Flash minimal:** Tanpa tumpukan tugas (task stack) atau kernel RTOS.
- **Pengujian lebih mudah:** Tanpa status pergantian tugas yang rumit di GDB.

---

## 2. Kapan beralih ke RTOS

1. **Beberapa tumpukan komunikasi:** Misal, menjalankan BLE + Wi-Fi + USB secara bersamaan.
2. **Pewaktuan multi-rate yang ketat:** Tugas yang membutuhkan eksekusi periodik 1ms, 10ms, dan 100ms secara independen.
3. **I/O pemblokiran kompleks:** Membaca penyimpanan flash atau menunggu respons jaringan.
