/**
 * Script to update product images to use Vercel Blob Storage URLs
 * 
 * Usage:
 * 1. Make sure all images are uploaded to Vercel Blob Storage
 * 2. Update BLOB_BASE_URL with your actual Vercel Blob URL
 * 3. Run: node scripts/update-images-to-vercel-blob.js
 */

const fs = require('fs')
const path = require('path')

// Your Vercel Blob Storage base URL
const BLOB_BASE_URL = 'https://algooweb.public.blob.vercel-storage.com'

// Read the products file
const productsPath = path.join(__dirname, '../data/products.ts')
let productsContent = fs.readFileSync(productsPath, 'utf8')

// List of all product images
const productImages = [
  'xp-420b-hitam.jpg',
  'xp-420b-putih.jpg',
  'xp-422b.jpg',
  'xp-4601-putih.jpg',
  'xp-4601b-hitam.jpg',
  'money-counter-mc-02.png',
  'money-counter-v-30.jpg',
  'lk-400.jpg',
  'lk-330b.jpg',
  'lk-339.jpg',
  'iw-t17.jpg',
  'iw-t20.jpg',
  'iw-uv5r.jpg',
  'iw-uv82.jpg',
  'at-58m.png',
  'at-58x.jpg',
  'at-58xbt.jpg',
  'at-80-ep.png',
  'at-8011.jpg',
  'at-5801.jpg',
  'at-5802.jpg',
  'at-5803.jpg',
  'at-5821.jpg',
  'at-8008.jpg',
  'at-x583.jpg',
  'at-x5882.jpg',
  'at-x5883.jpg',
  'al-80-mlp.jpg',
  'al-100-blp.jpg',
  'as-1102-b.jpg',
  'bs-1206.jpg',
  'bmax-b1-pro.jpg',
  'lm-22.jpg',
  'lm-156.png',
  'pager-rp21m.jpg',
  'paper-shredder.jpg',
  'x-583.jpg',
]

// Replace each image path with Vercel Blob URL
productImages.forEach(imageName => {
  const localPath = `image: '${imageName}'`
  const blobPath = `image: '${BLOB_BASE_URL}/${imageName}'`
  productsContent = productsContent.replace(localPath, blobPath)
})

// Write back to file
fs.writeFileSync(productsPath, productsContent, 'utf8')

console.log('✅ Successfully updated product images to use Vercel Blob Storage!')
console.log(`📦 Base URL: ${BLOB_BASE_URL}`)
console.log(`🖼️  Updated ${productImages.length} product images`)
console.log('\n💡 Next steps:')
console.log('1. Review the changes in data/products.ts')
console.log('2. Test locally: npm run dev')
console.log('3. Commit and push: git add . && git commit -m "feat: Use Vercel Blob Storage for images" && git push')
