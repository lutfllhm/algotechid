'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { LucideIcon } from 'lucide-react'

interface CategoryCardProps {
  name: string
  icon: LucideIcon
  count: number
  href: string
  index: number
  color?: string
}

export default function CategoryCard({ name, icon: Icon, count, href, index, color = 'primary' }: CategoryCardProps) {
  const colorClasses = {
    primary: 'from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700',
    blue: 'from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700',
    purple: 'from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700',
    green: 'from-green-500 to-green-600 hover:from-green-600 hover:to-green-700',
    orange: 'from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700',
    pink: 'from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      <Link
        href={href}
        className="block bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 group"
      >
        <div className={`bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses] || colorClasses.primary} p-8 text-white relative overflow-hidden`}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>
          <div className="relative z-10">
            <Icon size={48} className="mb-4 group-hover:scale-110 transition-transform duration-300" />
            <h3 className="text-2xl font-bold mb-2">{name}</h3>
            <p className="text-white/90 text-lg">{count} produk tersedia</p>
          </div>
        </div>
        <div className="p-6 bg-gradient-to-br from-gray-50 to-white">
          <div className="flex items-center justify-between">
            <span className="text-gray-600 font-medium">Lihat Produk</span>
            <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
