/**
 * Script to revert product images back to local paths
 * This will make images load from /public/products/ folder
 */

const fs = require('fs')
const path = require('path')

// Vercel Blob Storage base URL to remove
const BLOB_BASE_URL = 'https://algooweb.public.blob.vercel-storage.com/'

// Read the products file
const productsPath = path.join(__dirname, '../data/products.ts')
let productsContent = fs.readFileSync(productsPath, 'utf8')

// Replace Vercel Blob URLs with local paths
productsContent = productsContent.replace(
  new RegExp(BLOB_BASE_URL.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'),
  ''
)

// Write back to file
fs.writeFileSync(productsPath, productsContent, 'utf8')

console.log('✅ Successfully reverted product images to local paths!')
console.log('📁 Images will now load from: /public/products/')
console.log('\n💡 Next steps:')
console.log('1. Test locally: npm run dev')
console.log('2. Commit and push: git add . && git commit -m "fix: Revert to local images" && git push')
console.log('\n📝 Note: You can switch back to Vercel Blob later by:')
console.log('   - Uploading images to Vercel Blob Storage')
console.log('   - Running: node scripts/update-images-to-vercel-blob.js')
