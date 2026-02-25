'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Search, Filter, Grid, List, SlidersHorizontal, ChevronRight, Home } from 'lucide-react'
import Link from 'next/link'
import ProductCard from '../../components/ProductCard'
import { products } from '../../data/products'

export default function ProdukPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Semua')
  const [sortBy, setSortBy] = useState('name-asc')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  // Get category from URL params
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const category = params.get('category')
    if (category) {
      setSelectedCategory(decodeURIComponent(category))
    }
  }, [])

  const categories = ['Semua', ...Array.from(new Set(products.map(p => p.category)))]

  let filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'Semua' || product.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Sorting
  filteredProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'name-asc':
        return a.name.localeCompare(b.name)
      case 'name-desc':
        return b.name.localeCompare(a.name)
      case 'category':
        return a.category.localeCompare(b.category)
      default:
        return 0
    }
  })

  return (
    <div className="pt-20 pb-20">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-primary-600 transition-colors flex items-center">
              <Home size={16} className="mr-1" />
              Beranda
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-gray-900 font-semibold">Produk</span>
            {selectedCategory !== 'Semua' && (
              <>
                <ChevronRight size={16} className="text-gray-400" />
                <span className="text-primary-600 font-semibold">{selectedCategory}</span>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)]"></div>
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-64 h-64 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '1s' }}></div>
        </div>
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Katalog Produk Kami</h1>
            <p className="text-lg md:text-xl text-primary-50 leading-relaxed">
              Temukan berbagai peralatan teknologi berkualitas tinggi untuk meningkatkan efisiensi bisnis Anda
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-5 bg-white/95 backdrop-blur-md border-b border-gray-200 sticky top-[60px] z-40 shadow-sm">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Cari produk berdasarkan nama atau deskripsi..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all outline-none bg-white text-sm font-medium"
              />
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
              {/* Category Filter */}
              <div className="flex items-center gap-2 flex-1 lg:flex-initial">
                <Filter size={18} className="text-gray-600 flex-shrink-0" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="flex-1 lg:w-56 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all outline-none bg-white text-sm font-semibold text-gray-700 cursor-pointer"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === 'Semua' ? '📦 Semua Kategori' : category}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort */}
              <div className="flex items-center gap-2 flex-1 lg:flex-initial">
                <SlidersHorizontal size={18} className="text-gray-600 flex-shrink-0" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="flex-1 lg:w-48 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all outline-none bg-white text-sm font-semibold text-gray-700 cursor-pointer"
                >
                  <option value="name-asc">Nama: A-Z</option>
                  <option value="name-desc">Nama: Z-A</option>
                  <option value="category">Kategori</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-1 bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
                  title="Grid View"
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-primary-600' : 'text-gray-500 hover:text-gray-700'}`}
                  title="List View"
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container-custom">
          {/* Results Info */}
          <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
            <div>
              <p className="text-lg text-gray-600">
                Menampilkan <span className="font-bold text-primary-600 text-2xl">{filteredProducts.length}</span> dari <span className="font-semibold">{products.length}</span> produk
              </p>
              {selectedCategory !== 'Semua' && (
                <p className="text-sm text-gray-500 mt-1">
                  Kategori: <span className="font-semibold text-primary-600">{selectedCategory}</span>
                </p>
              )}
            </div>
            
            {/* Category Quick Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 5).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    selectedCategory === cat
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-200 hover:border-primary-300 hover:bg-primary-50'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className={viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
              : 'space-y-4'
            }>
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20 bg-white rounded-2xl shadow-lg"
            >
              <div className="text-7xl mb-6">🔍</div>
              <h3 className="text-3xl font-bold text-gray-900 mb-3">Produk Tidak Ditemukan</h3>
              <p className="text-xl text-gray-600 mb-6">Coba kata kunci atau kategori lain</p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('Semua')
                }}
                className="px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-all"
              >
                Reset Filter
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-900 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.1),transparent)]"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-400 rounded-full filter blur-3xl opacity-20"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-300 rounded-full filter blur-3xl opacity-20"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Tidak Menemukan yang Anda Cari?
              </h2>
              <p className="text-xl md:text-2xl text-primary-50 mb-8 max-w-2xl mx-auto leading-relaxed">
                Tim kami siap membantu Anda menemukan produk yang sesuai dengan kebutuhan bisnis Anda
              </p>
              <a href="/kontak" className="inline-flex items-center space-x-2 px-8 py-4 bg-white text-primary-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
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
