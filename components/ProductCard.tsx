'use client'

import { motion } from 'framer-motion'
import { ShoppingCart, Info, CheckCircle, Phone } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import ImagePlaceholder from './ImagePlaceholder'
import { getImageUrl } from '../lib/image-utils'

interface Product {
  id: string
  name: string
  category: string
  description: string
  image: string
  features?: string[]
  inStock?: boolean
}

interface ProductCardProps {
  product: Product
  index: number
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const [imageError, setImageError] = useState(false)
  const [showDetails, setShowDetails] = useState(false)
  const imagePath = getImageUrl(product.image)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 flex flex-col h-full"
    >
      {/* Image Section */}
      <div className="relative">
        {!imageError ? (
          <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
            <Image
              src={imagePath}
              alt={product.name}
              fill
              className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
              onError={() => setImageError(true)}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ) : (
          <ImagePlaceholder 
            text={product.name.substring(0, 2)}
            className="h-64"
          />
        )}
        
        {/* Stock Badge */}
        <div className="absolute top-3 right-3">
          <div className="px-3 py-1 bg-green-500 text-white text-xs font-bold rounded-full shadow-lg flex items-center space-x-1">
            <CheckCircle size={12} />
            <span>Tersedia</span>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <div className="px-3 py-1 bg-white/95 backdrop-blur-sm text-primary-600 text-xs font-bold rounded-full shadow-lg border border-primary-100">
            {product.category}
          </div>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-primary-600 transition-colors line-clamp-2 min-h-[3.5rem]">
          {product.name}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed text-sm flex-1">
          {product.description}
        </p>

        {/* Features Preview */}
        {product.features && product.features.length > 0 && (
          <div className="mb-4 space-y-1">
            {product.features.slice(0, 2).map((feature, idx) => (
              <div key={idx} className="flex items-start space-x-2 text-xs text-gray-600">
                <CheckCircle size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                <span className="line-clamp-1">{feature}</span>
              </div>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2 mt-auto">
          <Link 
            href={`/produk/${product.id}`}
            className="flex-1 inline-flex items-center justify-center space-x-2 bg-white border-2 border-primary-600 text-primary-600 font-semibold py-2.5 px-4 rounded-xl hover:bg-primary-50 transition-all duration-300 text-sm"
          >
            <Info size={16} />
            <span>Detail</span>
          </Link>
          <Link 
            href="/kontak"
            className="flex-1 inline-flex items-center justify-center space-x-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold py-2.5 px-4 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-md hover:shadow-lg text-sm"
          >
            <Phone size={16} />
            <span>Pesan</span>
          </Link>
        </div>
      </div>

      {/* Quick View Overlay */}
      <motion.div
        initial={false}
        animate={{ opacity: showDetails ? 1 : 0 }}
        className={`absolute inset-0 bg-white/95 backdrop-blur-sm p-6 ${showDetails ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <button
          onClick={() => setShowDetails(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          ✕
        </button>
        <h4 className="font-bold text-lg mb-3">{product.name}</h4>
        <p className="text-sm text-gray-600 mb-4">{product.description}</p>
        {product.features && (
          <div className="space-y-2">
            <p className="font-semibold text-sm">Fitur Utama:</p>
            {product.features.map((feature, idx) => (
              <div key={idx} className="flex items-start space-x-2 text-xs">
                <CheckCircle size={14} className="text-green-500 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  )
}
