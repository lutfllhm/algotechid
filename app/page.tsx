'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ShoppingCart, TrendingUp, Shield, Headphones, Printer, Calculator, Wallet, Radio, Barcode, Monitor } from 'lucide-react'
import ProductCard from '../components/ProductCard'
import CategoryCard from '../components/CategoryCard'
import { products } from '../data/products'

export default function Home() {
  const featuredProducts = products.slice(0, 6)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-80 h-80 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container-custom relative z-10 py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <motion.div
              className="mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="relative w-full max-w-3xl h-32 md:h-40">
                <Image
                  src="/tagline.png"
                  alt="Solusi Teknologi untuk Bisnis Modern"
                  fill
                  className="object-contain object-left"
                  priority
                />
              </div>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 text-primary-50 leading-relaxed"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              algootechindonesia menyediakan peralatan teknologi berkualitas tinggi untuk meningkatkan efisiensi bisnis Anda
            </motion.p>
            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="#products" className="px-8 py-3 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 inline-flex items-center space-x-2">
                <span>Lihat Produk</span>
                <span>→</span>
              </Link>
              <Link href="/kontak" className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
                Hubungi Kami
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                whileHover={{ y: -8, scale: 1.02 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-primary-200 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-2xl mb-4 shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-300">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-lg font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-primary-600">
              Produk Unggulan Kami
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Pilihan terbaik peralatan teknologi untuk kebutuhan bisnis Anda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product: any, index: number) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link href="/produk" className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
              <span>Lihat Semua Produk</span>
              <span>→</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
              Jelajahi Kategori Produk
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Temukan produk berdasarkan kategori yang Anda butuhkan
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
      <section className="py-20 bg-gradient-to-br from-gray-900 via-primary-900 to-primary-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary-400 rounded-full filter blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-primary-600 rounded-full filter blur-3xl animate-float" style={{ animationDelay: '1.5s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-white rounded-full filter blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,255,255,0.05),transparent)]"></div>
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Siap Meningkatkan Bisnis Anda?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-primary-50 leading-relaxed">
              Hubungi tim kami untuk konsultasi gratis dan temukan solusi terbaik untuk kebutuhan bisnis Anda
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/kontak" className="px-8 py-3 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 inline-flex items-center space-x-2">
                <span>Hubungi Sekarang</span>
                <span>→</span>
              </Link>
              <Link href="/produk" className="px-8 py-3 bg-transparent border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105">
                Lihat Semua Produk
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
