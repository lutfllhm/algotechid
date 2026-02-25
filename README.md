# algootechindonesia Website

Website profesional untuk algootechindonesia - Penyedia solusi teknologi bisnis terpercaya.

> ⚠️ **PENTING**: Gambar produk belum ada! Lihat [START_HERE.md](START_HERE.md) untuk setup gambar
> 
> 🚀 **Quick Start**: Lihat [QUICKSTART.md](QUICKSTART.md) untuk panduan cepat 5 menit
> 
> 📸 **Setup Gambar**: Lihat [SETUP_IMAGES.md](SETUP_IMAGES.md) untuk menambahkan gambar
>
> 📋 **Quick Reference**: Lihat [QUICK_REFERENCE.md](QUICK_REFERENCE.md) untuk referensi cepat

## ✨ Fitur Lengkap

- 🏠 **Beranda** - Hero section dengan animasi, showcase produk unggulan, dan fitur perusahaan
- 🛍️ **Produk** - Katalog lengkap dengan filter kategori dan pencarian
- 📝 **Artikel** - Blog dengan 6 artikel lengkap dan halaman detail
- 👥 **Profil** - Informasi perusahaan, visi, misi, dan nilai-nilai
- ⭐ **Testimoni** - Testimoni pelanggan dengan rating
- 🖼️ **Galeri** - Galeri produk dengan filter kategori
- ❓ **FAQ** - Pertanyaan umum dengan accordion interaktif
- 📞 **Kontak** - Form kontak terintegrasi WhatsApp
- 🚫 **404 Page** - Halaman error yang menarik

## 🎨 Desain & Animasi

- Gradient backgrounds yang elegan
- Animasi smooth: fade-in, slide-up, scale, float
- Hover effects di semua card dan button
- Responsive design untuk semua device
- Sticky navigation dengan scroll effect
- Mobile menu dengan animasi
- Image placeholders yang menarik
- Loading states dan transitions

## 📦 Produk (37 Items)

Semua produk dari daftar Anda sudah dimasukkan:
- Printer Thermal (XP-420B, XP-422B, AT series, dll)
- Mesin Hitung Uang (MC-02, V-30)
- Cash Drawer (LK-400, LK-330B, LK-339)
- Walkie Talkie (IW-T17, IW-T20, IW-UV5R, IW-UV82)
- Barcode Scanner, Mini PC, Label Maker, dan lainnya

## Teknologi

- **Next.js 14** - React framework untuk production
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animasi yang smooth dan profesional
- **Lucide React** - Icon library modern

## 🎯 Fitur Unggulan

### Navigasi & Routing
- 7 halaman utama yang fully functional
- Dynamic routing untuk artikel detail
- Custom 404 page
- Smooth page transitions

### Interaktivitas
- Filter produk by kategori
- Search functionality
- Accordion FAQ
- Form kontak ke WhatsApp
- Category filter di galeri

### Animasi & UX
- Framer Motion animations
- Scroll-triggered animations
- Hover effects
- Loading states
- Smooth transitions

### Responsive Design
- Mobile-first approach
- Tablet optimization
- Desktop enhancement
- Touch-friendly interface

## 🚀 Cara Menjalankan

### Prerequisites
- Node.js 18+ 
- npm atau yarn

### Instalasi

1. Clone atau download repository ini

2. Install dependencies:
```bash
npm install
```

3. Copy environment variables (optional):
```bash
cp .env.example .env.local
```

4. Jalankan development server:
```bash
npm run dev
```

5. Buka browser:
```
http://localhost:3000
```

### Build untuk Production

```bash
npm run build
npm start
```

## 📚 Dokumentasi Tambahan

- 🚀 [QUICKSTART.md](QUICKSTART.md) - Panduan cepat 5 menit
- 📸 [IMAGES_GUIDE.md](IMAGES_GUIDE.md) - Cara menambahkan gambar produk
- 📦 [FEATURES.md](FEATURES.md) - Daftar fitur lengkap
- 🎨 [CUSTOMIZATION.md](CUSTOMIZATION.md) - Panduan kustomisasi detail
- 🌐 [DEPLOYMENT.md](DEPLOYMENT.md) - Panduan deployment production

## 🛠️ Kustomisasi Cepat

### Mengubah Kontak

Edit file berikut:
- `app/kontak/page.tsx` - Form kontak
- `components/Footer.tsx` - Footer info

Ganti nomor WhatsApp: `6289536648096` dengan nomor Anda

### Mengubah Produk

Edit `data/products.ts` untuk menambah/edit produk

### Mengubah Artikel

Edit `data/articles.ts` untuk menambah/edit artikel

### Menambahkan Gambar Produk

Lihat [IMAGES_GUIDE.md](IMAGES_GUIDE.md) untuk panduan lengkap.

**Cara Cepat:**
1. Download gambar dari Google Drive
2. Taruh di folder `temp-images`
3. Jalankan: `npm run rename-images`
4. Gambar otomatis ter-copy ke `public/products/`

Website sudah dilengkapi dengan:
- Auto fallback ke placeholder jika gambar tidak ada
- Next.js Image optimization
- Lazy loading
- Responsive images

## 📱 Halaman yang Tersedia

1. **/** - Beranda dengan hero, features, produk unggulan
2. **/produk** - Katalog lengkap dengan filter & search (37 produk)
3. **/layanan** - Layanan profesional yang kami tawarkan
4. **/artikel** - Daftar artikel (6 artikel)
5. **/artikel/[id]** - Detail artikel dengan konten lengkap
6. **/profil** - Tentang perusahaan, visi, misi, nilai
7. **/testimoni** - Testimoni pelanggan dengan rating
8. **/galeri** - Galeri produk dengan filter kategori
9. **/faq** - FAQ dengan accordion interaktif
10. **/kontak** - Form kontak terintegrasi WhatsApp
11. **/404** - Custom error page yang menarik

## 🎨 Komponen Reusable

- **Navbar** - Navigation dengan scroll effect & mobile menu
- **Footer** - Footer dengan links dan info kontak
- **ProductCard** - Card produk dengan hover effect
- **ImagePlaceholder** - Placeholder gambar yang menarik

## 📊 Data Management

- **products.ts** - 37 produk lengkap dengan kategori
- **articles.ts** - 6 artikel dengan konten lengkap

## Struktur Folder

```
├── app/                     # Next.js app directory
│   ├── page.tsx            # ✅ Halaman beranda
│   ├── produk/             # ✅ Halaman produk dengan filter
│   ├── layanan/            # ✅ Halaman layanan
│   ├── artikel/            # ✅ Halaman artikel
│   │   └── [id]/           # ✅ Detail artikel dinamis
│   ├── profil/             # ✅ Halaman profil perusahaan
│   ├── testimoni/          # ✅ Halaman testimoni
│   ├── galeri/             # ✅ Galeri produk
│   ├── faq/                # ✅ Halaman FAQ
│   ├── kontak/             # ✅ Halaman kontak
│   ├── not-found.tsx       # ✅ Custom 404 page
│   ├── layout.tsx          # Root layout
│   └── globals.css         # Global styles
├── components/             # Reusable components
│   ├── Navbar.tsx          # Navigation dengan scroll effect
│   ├── Footer.tsx          # Footer dengan links
│   ├── ProductCard.tsx     # Card produk
│   └── ImagePlaceholder.tsx # Placeholder gambar
├── data/                   # Data files
│   ├── products.ts         # 37 produk lengkap
│   └── articles.ts         # 6 artikel dengan konten lengkap
├── public/                 # Static assets
├── DEPLOYMENT.md           # Panduan deployment
├── CUSTOMIZATION.md        # Panduan kustomisasi
└── .env.example            # Environment variables template

```

## Kontak

- **WhatsApp**: [+62 818-989-799](https://wa.me/62818989799)
- **Email**: info@algootech.id
- **Website**: [algootech.id](https://algootech.id)

## 📄 License

© 2026 algootechindonesia. All rights reserved.

## 🙏 Credits

- **Framework**: [Next.js 14](https://nextjs.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Animations**: [Framer Motion](https://www.framer.com/motion)
- **Icons**: [Lucide React](https://lucide.dev)

---

Dibuat dengan ❤️ untuk algootechindonesia
