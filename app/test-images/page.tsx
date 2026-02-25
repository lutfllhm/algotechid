'use client'

import Image from 'next/image'
import { products } from '../../data/products'

export default function TestImagesPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Test Product Images</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {products.slice(0, 12).map((product) => {
            const imagePath = `/products/${product.image}`
            
            return (
              <div key={product.id} className="bg-white p-4 rounded-lg shadow">
                <div className="relative w-full h-32 bg-gray-100 rounded mb-2">
                  <Image
                    src={imagePath}
                    alt={product.name}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>
                <p className="text-xs font-semibold truncate">{product.name}</p>
                <p className="text-xs text-gray-500 truncate">{product.image}</p>
                <a 
                  href={imagePath} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-xs text-blue-600 hover:underline"
                >
                  Test Link
                </a>
              </div>
            )
          })}
        </div>

        <div className="mt-8 bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Direct Image Test</h2>
          <div className="space-y-4">
            <div>
              <p className="font-semibold mb-2">Using img tag:</p>
              <img 
                src="/products/xp-420b-hitam.jpg" 
                alt="Test" 
                className="w-32 h-32 object-contain bg-gray-100 rounded"
              />
            </div>
            <div>
              <p className="font-semibold mb-2">Using Next Image (unoptimized):</p>
              <div className="relative w-32 h-32 bg-gray-100 rounded">
                <Image
                  src="/products/xp-420b-hitam.jpg"
                  alt="Test"
                  fill
                  className="object-contain"
                  unoptimized
                />
              </div>
            </div>
            <div>
              <p className="font-semibold mb-2">Direct link test:</p>
              <a 
                href="/products/xp-420b-hitam.jpg" 
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Open /products/xp-420b-hitam.jpg
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
