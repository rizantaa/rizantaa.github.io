# 🖥️ Portofolio — Rizanta Ridho Aprilyan

Website portofolio pribadi **IT Support & Network Engineer** yang statis (HTML/CSS/JS), dark mode, dwibahasa **Indonesia/English**, dan dihosting di GitHub Pages.

🌐 **URL:** `https://rizantaa.github.io`

---

## ✨ Fitur

- 🌙 Dark mode modern dengan aksen gradient (sky → indigo)
- 🇮🇩/🇬🇧 Tombol ganti bahasa tanpa reload (disimpan di `localStorage`)
- 📱 Responsif mobile-first (ramah dibuka dari HP HRD)
- 📄 Tombol **Download CV** — versi Indonesia & English (PDF)
- 🔍 SEO meta + Open Graph (pratinjau rapi saat link ditempel di LinkedIn/Jobstreet)
- 🎞️ Animasi reveal saat scroll, scrollspy navbar, menu hamburger mobile

---

## 📁 Struktur

```
├── index.html              ← halaman utama
├── assets/
│   ├── css/style.css       ← semua gaya (dark theme)
│   ├── js/i18n.js          ← kamus terjemahan ID/EN (mudah diedit)
│   ├── js/main.js          ← interaksi: toggle bahasa, menu, animasi
│   ├── img/
│   │   ├── profile.jpg     ← foto profil teroptimasi (web)
│   │   ├── profile-original.png  ← foto asli (cadangan)
│   │   └── favicon.svg
│   └── cv/
│       ├── CV_Rizanta_ID.pdf
│       ├── CV_Rizanta_EN.pdf
│       └── src/cv-id.html, cv-en.html  ← sumber PDF CV (untuk edit ulang)
├── .nojekyll
└── README.md
```

---

## ✏️ Cara Mengedit Konten

Semua teks website ada di **`assets/js/i18n.js`** dalam dua bagian: `id` dan `en`.

Contoh — ganti teks profil:

```js
id: { about_text: "Masukkan teks Indonesia di sini ..." },
en: { about_text: "Put your English text here ..." }
```

**Edit foto profil:** ganti file `assets/img/profile.jpg` (disarankan rasio 1:1, ukuran ≤ 200 KB).
**Edit proyek / sertifikat / pengalaman:** langsung edit bagian terkait di `index.html`, lalu tambahkan terjemahannya di `i18n.js`.

> 💡 CV PDF dibuat dari `assets/cv/src/cv-*.html`. Setelah mengubah isi CV, jalankan ulang konversi ke PDF (Edge/Chrome headless):
> ```powershell
> & 'C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe' --headless --disable-gpu --print-to-pdf-no-header --print-to-pdf="X:\Open Code\assets\cv\CV_Rizanta_ID.pdf" "file:///X:/Open%20Code/assets/cv/src/cv-id.html"
> ```

---

## 🚀 Publikasi ke GitHub Pages

1. **Buat akun GitHub** (jika belum) di github.com
2. **Buat repository baru** bernama persis: `rizantaa.github.io` (harus sesuai username)
3. **Upload semua file** di folder ini ke repository (bisa via web atau Git):
   ```bash
   git init
   git add .
   git commit -m "Portfolio v1"
   git branch -M main
   git remote add origin https://github.com/rizantaa/rizantaa.github.io.git
   git push -u origin main
   ```
4. Website otomatis aktif di: **https://rizantaa.github.io** (beberapa menit)

> Jika sudah punya repo lain (bukan `<username>.github.io`): buka **Settings → Pages → Source: Deploy from a branch → Branch: main → Save**.

---

## ▶️ Coba Lokal

Buka `index.html` langsung di browser, atau jalankan server lokal:

```powershell
cd X:\Open Code
python -m http.server 8080
# buka http://localhost:8080
```

---

Dibuat dengan ❤️ oleh [Rizanta Ridho Aprilyan](https://www.linkedin.com/in/rizantaridho) — HTML, CSS & JavaScript murni, tanpa framework.