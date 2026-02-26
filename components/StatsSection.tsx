'use client'

import { motion } from 'framer-motion'
import { Users, Package, Award, TrendingUp } from 'lucide-react'
import { useEffect, useState } from 'react'

interface StatProps {
  icon: any
  value: number
  label: string
  suffix?: string
  index: number
}

function StatCard({ icon: Icon, value, label, suffix = '', index }: StatProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [value])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="text-center p-6 md:p-8"
    >
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
        className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-2xl mb-4 shadow-lg"
      >
        <Icon size={32} className="md:w-10 md:h-10" />
      </motion.div>
      <motion.div
        className="text-4xl md:text-5xl font-bold text-gray-900 mb-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {count}{suffix}
      </motion.div>
      <div className="text-base md:text-lg text-gray-600 font-medium">{label}</div>
    </motion.div>
  )
}

export default function StatsSection() {
  const stats = [
    { icon: Users, value: 500, label: 'Pelanggan Puas', suffix: '+' },
    { icon: Package, value: 1000, label: 'Produk Terjual', suffix: '+' },
    { icon: Award, value: 5, label: 'Tahun Pengalaman', suffix: '+' },
    { icon: TrendingUp, value: 98, label: 'Kepuasan Pelanggan', suffix: '%' },
  ]

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Dipercaya oleh Ribuan Bisnis
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Kami bangga melayani pelanggan dengan produk berkualitas dan layanan terbaik
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
