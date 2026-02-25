'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useParams } from 'next/navigation'
import { Home, ChevronRight, Phone, Mail, CheckCircle, Package, Shield, Truck, Award, Share2, Heart } from 'lucide-react'
import { products } from '../../../data/products'
import ProductCard from '../../../components/ProductCard'
import ImagePlaceholder from '../../../components/ImagePlaceholder'
import { getImageUrl } from '../../../lib/image-utils'

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params.id as string
  const product = products.find(p => p.id === productId)
  const [imageError, setImageError] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  if (!product) {
    return (
      <div className="pt-20 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-7xl mb-6">📦</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Produk Tidak Ditemukan</h1>
          <Link href="/produk" className="text-primary-600 hover:text-primary-700 font-semibold">
            ← Kembali ke Katalog Produk
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const imagePath = getImageUrl(product.image)

  const features = product.features || [
    'Kualitas terjamin dan original',
    'Garansi resmi dari distributor',
    'Support teknis profesional',
    'Harga kompetitif'
  ]

  return (
    <div className="pt-20 pb-20">
      {/* Breadcrumb */}
      <section className="bg-gray-50 py-4 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-sm flex-wrap">
            <Link href="/" className="text-gray-500 hover:text-primary-600 transition-colors flex items-center">
              <Home size={16} className="mr-1" />
              Beranda
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <Link href="/produk" className="text-gray-500 hover:text-primary-600 transition-colors">
              Produk
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <Link href={`/produk?category=${encodeURIComponent(product.category)}`} className="text-gray-500 hover:text-primary-600 transition-colors">
              {product.category}
            </Link>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-gray-900 font-semibold line-clamp-1">{product.name}</span>
          </div>
        </div>
      </section>

      {/* Product Detail */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-4"
            >
              {!imageError ? (
                <div className="relative h-[500px] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden border-2 border-gray-200 group">
                  <Image
                    src={imagePath}
                    alt={product.name}
                    fill
                    className="object-contain p-8 group-hover:scale-105 transition-transform duration-500"
                    onError={() => setImageError(true)}
                    priority
                  />
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors">
                      <Heart size={20} className="text-gray-600" />
                    </button>
                    <button className="p-3 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors">
                      <Share2 size={20} className="text-gray-600" />
                    </button>
                  </div>
                </div>
              ) : (
                <ImagePlaceholder text={product.name.substring(0, 2)} className="h-[500px] rounded-2xl" />
              )}
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              {/* Category Badge */}
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-50 text-primary-600 rounded-full border border-primary-200">
                <Package size={16} />
                <span className="text-sm font-bold">{product.category}</span>
              </div>

              {/* Product Name */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                {product.name}
              </h1>

              {/* Stock Status */}
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-2 px-4 py-2 bg-green-50 text-green-700 rounded-lg border border-green-200">
                  <CheckCircle size={18} />
                  <span className="font-semibold">Stok Tersedia</span>
                </div>
              </div>

              {/* Description */}
              <div className="prose prose-lg">
                <p className="text-gray-700 leading-relaxed text-lg">
                  {product.description}
                </p>
              </div>

              {/* Features */}
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <Award className="mr-2 text-primary-600" size={24} />
                  Keunggulan Produk
                </h3>
                <div className="space-y-3">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 bg-blue-50 rounded-xl border border-blue-100">
                  <Shield className="mx-auto mb-2 text-blue-600" size={28} />
                  <p className="text-sm font-semibold text-gray-900">Garansi Resmi</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-xl border border-purple-100">
                  <Truck className="mx-auto mb-2 text-purple-600" size={28} />
                  <p className="text-sm font-semibold text-gray-900">Pengiriman Cepat</p>
                </div>
                <div className="text-center p-4 bg-orange-50 rounded-xl border border-orange-100">
                  <Award className="mx-auto mb-2 text-orange-600" size={28} />
                  <p className="text-sm font-semibold text-gray-900">Kualitas Terbaik</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3 pt-4">
                <Link
                  href="/kontak"
                  className="w-full flex items-center justify-center space-x-3 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-bold py-4 px-8 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                >
                  <Phone size={22} />
                  <span>Hubungi Kami untuk Pemesanan</span>
                </Link>
                <a
                  href="mailto:info@algootechindonesia.com"
                  className="w-full flex items-center justify-center space-x-3 bg-white border-2 border-primary-600 text-primary-600 font-bold py-4 px-8 rounded-xl hover:bg-primary-50 transition-all duration-300 text-lg"
                >
                  <Mail size={22} />
                  <span>Email Kami</span>
                </a>
              </div>

              {/* Additional Info */}
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
                <p className="text-sm text-amber-900">
                  <strong>💡 Butuh bantuan?</strong> Tim kami siap membantu Anda memilih produk yang tepat untuk kebutuhan bisnis Anda.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
                Produk Terkait
              </h2>
              <p className="text-lg text-gray-600">
                Produk lain dalam kategori {product.category}
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct, index) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} index={index} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href={`/produk?category=${encodeURIComponent(product.category)}`}
                className="inline-flex items-center space-x-2 px-8 py-3 bg-white border-2 border-primary-600 text-primary-600 font-bold rounded-xl hover:bg-primary-50 transition-all duration-300"
              >
                <span>Lihat Semua {product.category}</span>
                <ChevronRight size={20} />
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  )
}
