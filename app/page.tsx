'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ShoppingCart, TrendingUp, Shield, Headphones, Printer, Calculator, Wallet, Radio, Barcode, Monitor } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import CategoryCard from '../components/CategoryCard'
import { products } from '../data/products'

export default function Home() {
  const featuredProducts = products.slice(0, 6)
  const bannerImages = [
    '/banner/banner.webp',
    '/banner/bn1.webp',
    '/banner/bn2.webp',
    '/banner/bn3.webp',
    '/banner/bn4.webp',
    '/banner/bn5.webp',
    '/banner/bn6.webp',
    '/banner/bn7.webp',
    '/banner/bn8.webp',
    '/banner/bn9.webp',
  ]
  const [currentBanner, setCurrentBanner] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerImages.length)
    }, 5000) // Ganti banner setiap 5 detik

    return () => clearInterval(interval)
  }, [bannerImages.length])

  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white overflow-hidden pt-16 md:pt-20">
        <div className="relative w-full min-h-[50vh] md:min-h-[70vh]">
          {bannerImages.map((banner, index) => (
            <div
              key={banner}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentBanner ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={banner}
                alt={`Banner ${index + 1}`}
                fill
                className="object-cover object-top"
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: ShoppingCart, title: 'Produk Berkualitas', desc: 'Produk original dengan garansi resmi' },
              { icon: TrendingUp, title: 'Harga Kompetitif', desc: 'Harga terbaik di kelasnya' },
              { icon: Shield, title: 'Terpercaya', desc: 'Dipercaya ribuan pelanggan' },
              { icon: Headphones, title: 'Support 24/7', desc: 'Tim teknisi siap membantu' },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-5 md:p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-2xl mb-3 md:mb-4 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <feature.icon size={24} className="md:w-7 md:h-7" />
                </div>
                <h3 className="text-base md:text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12 px-4"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-primary-600">
              Produk Unggulan Kami
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Pilihan terbaik peralatan teknologi untuk kebutuhan bisnis Anda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProducts.map((product: any, index: number) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-8 md:mt-12"
          >
            <Link href="/produk" className="inline-flex items-center space-x-2 px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              <span>Lihat Semua Produk</span>
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8 md:mb-12 px-4"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4 text-gray-900">
              Jelajahi Kategori Produk
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
              Temukan produk berdasarkan kategori yang Anda butuhkan
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <CategoryCard
              name="Printer Thermal"
              icon={Printer}
              count={20}
              href="/produk?category=Printer+Thermal"
              index={0}
              color="primary"
            />
            <CategoryCard
              name="Mesin Hitung Uang"
              icon={Calculator}
              count={2}
              href="/produk?category=Mesin+Hitung+Uang"
              index={1}
              color="green"
            />
            <CategoryCard
              name="Cash Drawer"
              icon={Wallet}
              count={3}
              href="/produk?category=Cash+Drawer"
              index={2}
              color="blue"
            />
            <CategoryCard
              name="Walkie Talkie"
              icon={Radio}
              count={4}
              href="/produk?category=Walkie+Talkie"
              index={3}
              color="purple"
            />
            <CategoryCard
              name="Barcode Scanner"
              icon={Barcode}
              count={2}
              href="/produk?category=Barcode+Scanner"
              index={4}
              color="orange"
            />
            <CategoryCard
              name="Mini PC"
              icon={Monitor}
              count={1}
              href="/produk?category=Mini+PC"
              index={5}
              color="pink"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-900 via-primary-900 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary-400 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-primary-600 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-48 md:w-80 h-48 md:h-80 bg-white rounded-full filter blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05),transparent)]"></div>
        
        <div className="container-custom relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              Siap Meningkatkan Bisnis Anda?
            </h2>
            <p className="text-base md:text-lg lg:text-xl mb-6 md:mb-8 text-primary-50 leading-relaxed">
              Hubungi tim kami untuk konsultasi gratis dan temukan solusi terbaik untuk kebutuhan bisnis Anda
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 justify-center">
              <Link href="/kontak" className="px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 inline-flex items-center justify-center space-x-2">
                <span>Hubungi Sekarang</span>
                <span>→</span>
              </Link>
              <Link href="/produk" className="px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105">
                Lihat Semua Produk
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
