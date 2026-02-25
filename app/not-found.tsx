'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Home, ArrowLeft } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-primary-100 px-4">
      <div className="text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-9xl font-bold text-primary-600 mb-4">404</div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Halaman Tidak Ditemukan
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-md mx-auto">
            Maaf, halaman yang Anda cari tidak dapat ditemukan atau telah dipindahkan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="inline-flex items-center space-x-2 btn-primary"
            >
              <Home size={20} />
              <span>Kembali ke Beranda</span>
            </Link>
            <button 
              onClick={() => window.history.back()}
              className="inline-flex items-center space-x-2 btn-secondary"
            >
              <ArrowLeft size={20} />
              <span>Halaman Sebelumnya</span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <p className="text-gray-600 mb-4">Atau kunjungi halaman lain:</p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/produk" className="text-primary-600 hover:text-primary-700 font-semibold">
              Produk
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/artikel" className="text-primary-600 hover:text-primary-700 font-semibold">
              Artikel
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/profil" className="text-primary-600 hover:text-primary-700 font-semibold">
              Profil
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/kontak" className="text-primary-600 hover:text-primary-700 font-semibold">
              Kontak
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
