/**
 * Script untuk rename gambar produk dari Google Drive
 * 
 * Cara pakai:
 * 1. Download semua gambar dari Google Drive
 * 2. Taruh di folder 'temp-images'
 * 3. Jalankan: node scripts/rename-images.js
 * 4. Gambar akan di-copy ke public/products dengan nama yang benar
 */

const fs = require('fs');
const path = require('path');

// Mapping nama folder Google Drive ke nama file yang diinginkan
const nameMapping = {
  'AL-100 BLP': 'al-100-blp',
  'AL-80 MLP': 'al-80-mlp',
  'AS-1102 B': 'as-1102-b',
  'AT-5801': 'at-5801',
  'AT-5802': 'at-5802',
  'AT-5803': 'at-5803',
  'AT-5821': 'at-5821',
  'AT-58M': 'at-58m',
  'AT-58X': 'at-58x',
  'AT-58XBT': 'at-58xbt',
  'AT-80 EP': 'at-80-ep',
  'AT-8008': 'at-8008',
  'AT-801': 'at-8011',  // AT-801 folder untuk produk AT-8011
  'AT-X583': 'at-x583',
  'AT-X5882': 'at-x5882',
  'AT-X5883': 'at-x5883',
  'BMAX B1 PRO': 'bmax-b1-pro',
  'BS-1206 - AS-1101': 'bs-1206',
  'IW-T17': 'iw-t17',
  'IW-T20': 'iw-t20',
  'IW-UV5R': 'iw-uv5r',
  'IW-UV82': 'iw-uv82',
  'LK-330B': 'lk-330b',
  'LK-339': 'lk-339',
  'LM-22': 'lm-22',
  'LM-156': 'lm-156',
  'Money Counter - MC-02-20250621T024928Z-1-001': 'money-counter-mc-02',
  'Money Counter V-30-20251103T043013Z-1-001': 'money-counter-v-30',
  'PAGER RP21M': 'pager-rp21m',
  'Paper Shredder-20251103T022744Z-1-001': 'paper-shredder',
  'Ultron Cash Drawer LK-400': 'lk-400',
  'X-583': 'x-583',
  'XP-420B Hitam-20250314T015800Z-001': 'xp-420b-hitam',
  'XP-420B Putih': 'xp-420b-putih',
  'XP-422B-20250516T071525Z-1-001': 'xp-422b',
  'XP-4601 PUTIH': 'xp-4601-putih',
  'XP-4601B HITAM': 'xp-4601b-hitam'
};

const sourceDir = path.join(__dirname, '..', 'temp-images');
const targetDir = path.join(__dirname, '..', 'public', 'products');

// Buat folder target jika belum ada
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
  console.log('✅ Folder public/products dibuat');
}

// Cek apakah folder source ada
if (!fs.existsSync(sourceDir)) {
  console.log('❌ Folder temp-images tidak ditemukan!');
  console.log('📁 Silakan buat folder "temp-images" dan taruh gambar di sana');
  process.exit(1);
}

console.log('🚀 Memulai proses rename dan copy gambar...\n');

let successCount = 0;
let errorCount = 0;

// Baca semua folder di source directory
const folders = fs.readdirSync(sourceDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

folders.forEach(folderName => {
  const folderPath = path.join(sourceDir, folderName);
  const newFileName = nameMapping[folderName];

  if (!newFileName) {
    console.log(`⚠️  Tidak ada mapping untuk: ${folderName}`);
    errorCount++;
    return;
  }

  // Cari file gambar di dalam folder (termasuk subfolder)
  let imageFile = null;
  let sourcePath = null;

  // Cek di folder utama
  try {
    const files = fs.readdirSync(folderPath);
    imageFile = files.find(file => 
      /\.(jpg|jpeg|png|webp)$/i.test(file) && !file.startsWith('.')
    );

    if (imageFile) {
      sourcePath = path.join(folderPath, imageFile);
    } else {
      // Cek di subfolder
      const subfolders = files.filter(file => {
        const fullPath = path.join(folderPath, file);
        return fs.statSync(fullPath).isDirectory();
      });

      for (const subfolder of subfolders) {
        const subfolderPath = path.join(folderPath, subfolder);
        const subfiles = fs.readdirSync(subfolderPath);
        imageFile = subfiles.find(file => 
          /\.(jpg|jpeg|png|webp)$/i.test(file) && !file.startsWith('.')
        );
        if (imageFile) {
          sourcePath = path.join(subfolderPath, imageFile);
          break;
        }
      }
    }
  } catch (error) {
    console.log(`❌ Error reading folder ${folderName}: ${error.message}`);
    errorCount++;
    return;
  }

  if (!sourcePath) {
    console.log(`⚠️  Tidak ada gambar di folder: ${folderName}`);
    errorCount++;
    return;
  }

  const ext = path.extname(imageFile);
  const targetPath = path.join(targetDir, `${newFileName}${ext}`);

  try {
    fs.copyFileSync(sourcePath, targetPath);
    console.log(`✅ ${folderName} → ${newFileName}${ext}`);
    successCount++;
  } catch (error) {
    console.log(`❌ Error copying ${folderName}: ${error.message}`);
    errorCount++;
  }
});

console.log('\n📊 Hasil:');
console.log(`✅ Berhasil: ${successCount} gambar`);
console.log(`❌ Gagal: ${errorCount} gambar`);
console.log('\n🎉 Selesai! Gambar sudah siap digunakan.');
console.log('💡 Jalankan "npm run dev" untuk melihat hasilnya.');
