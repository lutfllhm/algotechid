'use client'

import { motion } from 'framer-motion'
import { Shield, Award, Truck, CreditCard } from 'lucide-react'

export default function TrustSection() {
  const trustBadges = [
    {
      icon: Shield,
      title: 'Garansi Resmi',
      description: 'Produk original dengan garansi resmi dari distributor'
    },
    {
      icon: Award,
      title: 'Bersertifikat',
      description: 'Terdaftar dan bersertifikat resmi'
    },
    {
      icon: Truck,
      title: 'Pengiriman Aman',
      description: 'Packing aman dengan asuransi pengiriman'
    },
    {
      icon: CreditCard,
      title: 'Pembayaran Aman',
      description: 'Berbagai metode pembayaran yang aman'
    }
  ]

  return (
    <section className="py-12 md:py-16 bg-white border-y border-gray-100">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Kenapa Memilih Kami?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Komitmen kami untuk memberikan layanan terbaik
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {trustBadges.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 text-primary-600 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <badge.icon size={28} />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{badge.title}</h3>
              <p className="text-sm text-gray-600">{badge.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500 mb-4">Metode Pembayaran yang Kami Terima:</p>
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {['BCA', 'Mandiri', 'BNI', 'BRI', 'Transfer Bank', 'COD'].map((method, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:border-primary-300 hover:shadow-md transition-all duration-300"
              >
                {method}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
