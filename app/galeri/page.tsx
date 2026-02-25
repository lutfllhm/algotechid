'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { Filter } from 'lucide-react'
import { products } from '../../data/products'
import ImagePlaceholder from '../../components/ImagePlaceholder'

export default function GaleriPage() {
  const [selectedCategory, setSelectedCategory] = useState('Semua')
  const [imageErrors, setImageErrors] = useState<{[key: string]: boolean}>({})
  
  const categories = ['Semua', ...Array.from(new Set(products.map(p => p.category)))]
  
  const filteredProducts = selectedCategory === 'Semua' 
    ? products 
    : products.filter(p => p.category === selectedCategory)

  const handleImageError = (productId: string) => {
    setImageErrors(prev => ({ ...prev, [productId]: true }))
  }

  return (
    <div className="pt-20 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-3">Galeri Produk</h1>
            <p className="text-base md:text-lg text-primary-50">
              Lihat koleksi lengkap produk teknologi berkualitas dari algootechindonesia
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-4 bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-[60px] z-40 shadow-sm">
        <div className="container-custom">
          <div className="flex items-center justify-center gap-2">
            <Filter size={18} className="text-gray-600 flex-shrink-0" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all outline-none bg-white text-sm font-semibold text-gray-700 cursor-pointer"
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container-custom">
          <div className="mb-8">
            <p className="text-lg text-gray-600">
              Menampilkan <span className="font-bold text-primary-600 text-xl">{filteredProducts.length}</span> produk
              {selectedCategory !== 'Semua' && ` dalam kategori "${selectedCategory}"`}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.03 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer"
              >
                {!imageErrors[product.id] ? (
                  <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                    <Image
                      src={`/products/${product.image}`}
                      alt={product.name}
                      fill
                      className="object-contain p-3 group-hover:scale-110 transition-transform duration-500"
                      onError={() => handleImageError(product.id)}
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    />
                  </div>
                ) : (
                  <ImagePlaceholder 
                    text={product.name.substring(0, 2)}
                    className="h-48"
                  />
                )}
                <div className="p-3">
                  <div className="text-xs text-primary-600 font-semibold mb-1 uppercase tracking-wide">{product.category}</div>
                  <h3 className="font-bold text-sm text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 rounded-3xl p-12 text-center text-white relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent)]"></div>
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary-400 rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-300 rounded-full filter blur-3xl opacity-20"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Tertarik dengan Produk Kami?
              </h2>
              <p className="text-lg text-primary-50 mb-8 max-w-2xl mx-auto">
                Hubungi tim kami untuk informasi lebih detail dan penawaran terbaik
              </p>
              <a href="/kontak" className="inline-flex items-center space-x-2 px-8 py-3 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                <span>Hubungi Kami</span>
                <span>→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
