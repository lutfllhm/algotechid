/**
 * Script untuk cek status gambar produk
 * Jalankan: node scripts/check-images.js
 */

const fs = require('fs');
const path = require('path');

const productsFile = path.join(__dirname, '..', 'data', 'products.ts');
const imagesDir = path.join(__dirname, '..', 'public', 'products');

console.log('🔍 Mengecek status gambar produk...\n');

// Cek apakah folder public/products ada
if (!fs.existsSync(imagesDir)) {
  console.log('❌ Folder public/products/ TIDAK DITEMUKAN!');
  console.log('📁 Silakan buat folder: public/products/\n');
  console.log('💡 Atau jalankan: npm run rename-images\n');
  process.exit(1);
}

// Baca file products.ts
const productsContent = fs.readFileSync(productsFile, 'utf8');

// Extract image filenames dari products.ts
const imageMatches = productsContent.match(/image:\s*['"]([^'"]+)['"]/g);
if (!imageMatches) {
  console.log('❌ Tidak bisa membaca data produk!');
  process.exit(1);
}

const requiredImages = imageMatches.map(match => {
  const filename = match.match(/['"]([^'"]+)['"]/)[1];
  return filename;
});

console.log(`📦 Total produk: ${requiredImages.length}`);

// Cek gambar yang ada
const existingImages = fs.readdirSync(imagesDir)
  .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file));

console.log(`🖼️  Gambar yang ada: ${existingImages.length}\n`);

// Cek setiap gambar
let foundCount = 0;
let missingCount = 0;
const missingImages = [];

console.log('📋 Status per produk:\n');

requiredImages.forEach((imageName, index) => {
  const exists = existingImages.includes(imageName);
  if (exists) {
    console.log(`✅ ${index + 1}. ${imageName}`);
    foundCount++;
  } else {
    console.log(`❌ ${index + 1}. ${imageName} - TIDAK ADA`);
    missingImages.push(imageName);
    missingCount++;
  }
});

// Summary
console.log('\n' + '='.repeat(50));
console.log('📊 RINGKASAN:\n');
console.log(`✅ Gambar ditemukan: ${foundCount}/${requiredImages.length}`);
console.log(`❌ Gambar hilang: ${missingCount}/${requiredImages.length}`);

if (missingCount > 0) {
  console.log('\n⚠️  GAMBAR YANG HILANG:');
  missingImages.forEach(img => console.log(`   - ${img}`));
  console.log('\n💡 SOLUSI:');
  console.log('   1. Download gambar dari Google Drive');
  console.log('   2. Taruh di folder temp-images/');
  console.log('   3. Jalankan: npm run rename-images');
  console.log('\n📖 Lihat SETUP_IMAGES.md untuk panduan lengkap');
} else {
  console.log('\n🎉 SEMPURNA! Semua gambar sudah ada!');
  console.log('✨ Website siap digunakan dengan gambar lengkap.');
}

console.log('='.repeat(50) + '\n');

// Exit code
process.exit(missingCount > 0 ? 1 : 0);
