---
title_en: "How to estimate battery life before you build anything"
title_id: "Cara memperkirakan masa pakai baterai sebelum Anda membangun apapun"
date: "2025-10-10"
tag_en: "Power"
tag_id: "Daya"
readTime: 6
summary_en: "A simple current-budget model you can build in a spreadsheet. Includes worked examples for a BLE sensor node and a display-driven consumer device."
summary_id: "Model anggaran arus sederhana yang bisa dibuat di spreadsheet. Termasuk contoh untuk node sensor BLE dan perangkat berbasis layar."
image: "https://images.unsplash.com/photo-1592659762303-90081d34b277?w=800&h=500&fit=crop&auto=format"
author: "Pogot Studio Engineering"
slug: "battery-life-estimation"
---

<!-- en -->
# How to estimate battery life before you build anything

Battery-powered IoT sensors and wearables must balance active current draw with deep sleep strategy.

## Creating a Current Budget Model

1. **Active State:** Measure or locate the MCU active current + radio TX/RX power draw.
2. **Sleep State:** Calculate leakage current from MCU sleep modes, LDO quiescent current, and sensor standby.
3. **Duty Cycle:** Determine how many milliseconds per hour the device spends transmitting vs sleeping.

---

<!-- id -->
# Cara memperkirakan masa pakai baterai sebelum Anda membangun apapun

Sensor IoT dan perangkat yang bertenaga baterai harus menyeimbangkan konsumsi arus aktif dengan strategi tidur pulas (deep sleep).

## Membuat Model Anggaran Arus
1. **Status Aktif:** Ukur atau cari konsumsi arus aktif MCU + transmisi radio TX/RX.
2. **Status Tidur:** Hitung arus bocor dari mode tidur MCU dan LDO quiescent current.
