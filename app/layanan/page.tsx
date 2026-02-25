'use client'

import { motion } from 'framer-motion'
import { Wrench, Truck, HeadphonesIcon, GraduationCap, Shield, Clock } from 'lucide-react'

const services = [
  {
    icon: Wrench,
    title: 'Instalasi & Setup',
    description: 'Tim teknisi profesional kami siap membantu instalasi dan konfigurasi perangkat hingga siap digunakan.',
    features: [
      'Instalasi hardware lengkap',
      'Konfigurasi sistem POS',
      'Integrasi dengan sistem existing',
      'Testing dan quality assurance'
    ]
  },
  {
    icon: GraduationCap,
    title: 'Training & Pelatihan',
    description: 'Pelatihan komprehensif untuk memastikan tim Anda dapat mengoperasikan perangkat dengan optimal.',
    features: [
      'Training operasional dasar',
      'Panduan troubleshooting',
      'Best practices penggunaan',
      'Dokumentasi lengkap'
    ]
  },
  {
    icon: HeadphonesIcon,
    title: 'Support 24/7',
    description: 'Tim customer service kami siap membantu Anda kapan saja melalui berbagai channel komunikasi.',
    features: [
      'WhatsApp support',
      'Remote assistance',
      'Email support',
      'Hotline telepon'
    ]
  },
  {
    icon: Shield,
    title: 'Garansi & Maintenance',
    description: 'Garansi resmi dan layanan maintenance berkala untuk menjaga performa optimal perangkat Anda.',
    features: [
      'Garansi resmi 6-24 bulan',
      'Maintenance berkala',
      'Spare part original',
      'Klaim garansi mudah'
    ]
  },
  {
    icon: Truck,
    title: 'Pengiriman Cepat',
    description: 'Pengiriman ke seluruh Indonesia dengan packaging aman dan tracking real-time.',
    features: [
      'Same day delivery (Jakarta)',
      'Ekspedisi terpercaya',
      'Packaging aman',
      'Tracking number'
    ]
  },
  {
    icon: Clock,
    title: 'Konsultasi Gratis',
    description: 'Konsultasi gratis untuk membantu Anda memilih produk yang tepat sesuai kebutuhan bisnis.',
    features: [
      'Analisis kebutuhan',
      'Rekomendasi produk',
      'Estimasi biaya',
      'ROI calculation'
    ]
  },
]

const process = [
  {
    step: '01',
    title: 'Konsultasi',
    description: 'Hubungi kami untuk diskusi kebutuhan bisnis Anda'
  },
  {
    step: '02',
    title: 'Rekomendasi',
    description: 'Tim kami akan merekomendasikan solusi terbaik'
  },
  {
    step: '03',
    title: 'Pemesanan',
    description: 'Proses pemesanan yang mudah dan transparan'
  },
  {
    step: '04',
    title: 'Pengiriman',
    description: 'Pengiriman cepat dengan packaging aman'
  },
  {
    step: '05',
    title: 'Instalasi',
    description: 'Instalasi dan setup oleh teknisi profesional'
  },
  {
    step: '06',
    title: 'Support',
    description: 'Dukungan berkelanjutan untuk kepuasan Anda'
  },
]

export default function LayananPage() {
  return (
    <div className="pt-20 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Layanan Kami</h1>
            <p className="text-xl text-primary-100">
              Layanan lengkap dan profesional untuk mendukung kesuksesan bisnis Anda
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Layanan Profesional</h2>
            <p className="text-xl text-gray-600">
              Kami menyediakan layanan end-to-end untuk memastikan kepuasan Anda
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-8 hover:shadow-2xl transition-all duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-6">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-900">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-2 text-gray-700">
                      <span className="text-primary-600 mt-1">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Proses Kerja Kami</h2>
            <p className="text-xl text-gray-600">
              Langkah demi langkah menuju solusi teknologi yang tepat
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="card p-8 text-center">
                  <div className="text-6xl font-bold text-primary-100 mb-4">{item.step}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-primary-300">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6 text-gray-900">
                Mengapa Memilih algootechindonesia?
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: 'Pengalaman Terpercaya',
                    desc: 'Lebih dari 5 tahun melayani ribuan pelanggan di seluruh Indonesia'
                  },
                  {
                    title: 'Produk Original',
                    desc: '100% produk original dengan garansi resmi dari distributor'
                  },
                  {
                    title: 'Tim Profesional',
                    desc: 'Teknisi bersertifikat dan customer service yang responsif'
                  },
                  {
                    title: 'Harga Kompetitif',
                    desc: 'Harga terbaik dengan kualitas terjamin dan tanpa biaya tersembunyi'
                  },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4"
                  >
                    <div className="flex-shrink-0 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                      ✓
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl p-12 text-white">
                <h3 className="text-3xl font-bold mb-6">Siap Memulai?</h3>
                <p className="text-primary-100 mb-8 text-lg">
                  Hubungi tim kami sekarang untuk konsultasi gratis dan dapatkan solusi terbaik untuk bisnis Anda.
                </p>
                <div className="space-y-4">
                  <a 
                    href="https://wa.me/6289536648096" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-white text-primary-600 px-6 py-4 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
                  >
                    WhatsApp: +62 818-989-799
                  </a>
                  <a 
                    href="/kontak"
                    className="block w-full bg-primary-700 text-white px-6 py-4 rounded-lg font-semibold text-center hover:bg-primary-800 transition-colors"
                  >
                    Form Kontak
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
