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
    primary: 'from-blue-500 via-blue-600 to-blue-700',
    blue: 'from-blue-500 via-blue-600 to-blue-700',
    purple: 'from-purple-500 via-purple-600 to-purple-700',
    green: 'from-green-500 via-green-600 to-green-700',
    orange: 'from-orange-500 via-orange-600 to-orange-700',
    pink: 'from-pink-500 via-pink-600 to-pink-700',
  }

  const iconBgClasses = {
    primary: 'bg-blue-100',
    blue: 'bg-blue-100',
    purple: 'bg-purple-100',
    green: 'bg-green-100',
    orange: 'bg-orange-100',
    pink: 'bg-pink-100',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link
        href={href}
        className="block bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-transparent h-full"
      >
        {/* Header dengan Gradient */}
        <div className={`bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses] || colorClasses.primary} p-8 md:p-10 text-white relative overflow-hidden`}>
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 group-hover:scale-150 transition-transform duration-700"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16 group-hover:scale-150 transition-transform duration-700"></div>
          <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-white/5 rounded-full group-hover:scale-125 transition-transform duration-700"></div>
          
          {/* Content */}
          <div className="relative z-10">
            <div className={`inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 ${iconBgClasses[color as keyof typeof iconBgClasses] || iconBgClasses.primary} rounded-2xl mb-4 md:mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}>
              <Icon size={36} className="text-current md:w-10 md:h-10" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:translate-x-1 transition-transform duration-300">{name}</h3>
            <p className="text-white/90 text-base md:text-lg font-medium">{count} produk tersedia</p>
          </div>
        </div>

        {/* Footer */}
        <div className="p-5 md:p-6 bg-gradient-to-br from-gray-50 to-white group-hover:from-white group-hover:to-gray-50 transition-all duration-300">
          <div className="flex items-center justify-between">
            <span className="text-gray-700 font-semibold text-sm md:text-base group-hover:text-gray-900 transition-colors">Lihat Produk</span>
            <span className="text-2xl md:text-3xl text-gray-400 group-hover:text-gray-700 group-hover:translate-x-2 transition-all duration-300">→</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
