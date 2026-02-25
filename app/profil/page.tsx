'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Award, Users, TrendingUp, Shield } from 'lucide-react'

export default function ProfilPage() {
  const values = [
    {
      icon: Shield,
      title: 'Integritas',
      description: 'Kami berkomitmen untuk selalu jujur dan transparan dalam setiap transaksi bisnis'
    },
    {
      icon: Award,
      title: 'Kualitas',
      description: 'Menyediakan produk berkualitas tinggi yang telah teruji dan bersertifikat'
    },
    {
      icon: Users,
      title: 'Kepuasan Pelanggan',
      description: 'Mengutamakan kepuasan pelanggan dengan layanan terbaik dan responsif'
    },
    {
      icon: TrendingUp,
      title: 'Inovasi',
      description: 'Terus berinovasi untuk memberikan solusi teknologi terdepan'
    },
  ]

  const stats = [
    { number: '1000+', label: 'Pelanggan Puas' },
    { number: '50+', label: 'Produk Berkualitas' },
    { number: '5+', label: 'Tahun Pengalaman' },
    { number: '24/7', label: 'Customer Support' },
  ]

  return (
    <div className="pt-20 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Tentang Kami</h1>
            <p className="text-xl text-primary-100">
              algootechindonesia adalah mitra terpercaya Anda dalam menyediakan solusi teknologi untuk bisnis modern
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Siapa Kami
              </h2>
              <div className="space-y-4 text-gray-600 text-lg">
                <p>
                  algootechindonesia adalah perusahaan penyedia solusi teknologi yang berfokus pada peralatan bisnis berkualitas tinggi. Kami memahami bahwa teknologi yang tepat dapat meningkatkan efisiensi dan produktivitas bisnis Anda.
                </p>
                <p>
                  Dengan pengalaman bertahun-tahun di industri teknologi, kami telah melayani ribuan pelanggan dari berbagai sektor bisnis, mulai dari retail, F&B, hingga korporat. Komitmen kami adalah menyediakan produk original dengan harga kompetitif dan layanan purna jual yang memuaskan.
                </p>
                <p>
                  Tim teknisi profesional kami siap membantu Anda 24/7 untuk memastikan operasional bisnis Anda berjalan lancar tanpa hambatan.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl p-12 text-white">
                <div className="grid grid-cols-2 gap-8">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center"
                    >
                      <div className="text-4xl font-bold mb-2">{stat.number}</div>
                      <div className="text-primary-100">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <Eye size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Visi Kami</h3>
              <p className="text-gray-600 text-lg">
                Menjadi penyedia solusi teknologi bisnis terdepan di Indonesia yang dipercaya oleh ribuan pelanggan untuk meningkatkan efisiensi dan produktivitas operasional mereka.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="card p-8"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                <Target size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900">Misi Kami</h3>
              <ul className="text-gray-600 text-lg space-y-2">
                <li>• Menyediakan produk teknologi berkualitas tinggi</li>
                <li>• Memberikan layanan pelanggan yang responsif</li>
                <li>• Menawarkan harga yang kompetitif</li>
                <li>• Membangun kepercayaan jangka panjang</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Nilai-Nilai Kami</h2>
            <p className="text-xl text-gray-600">
              Prinsip yang menjadi fondasi dalam setiap langkah kami
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-xl hover:bg-primary-50 transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Mari Berkembang Bersama
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Bergabunglah dengan ribuan pelanggan yang telah mempercayai algootechindonesia sebagai mitra teknologi mereka
            </p>
            <a href="/kontak" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Hubungi Kami Sekarang
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
