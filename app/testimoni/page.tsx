'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Budi Santoso',
    company: 'Toko Elektronik Jaya',
    role: 'Pemilik',
    rating: 5,
    text: 'Printer thermal dari algootechindonesia sangat membantu operasional toko kami. Kualitas cetakan bagus dan awet. Tim support juga sangat responsif!',
    image: 'BS'
  },
  {
    id: 2,
    name: 'Siti Nurhaliza',
    company: 'Cafe Kopi Nusantara',
    role: 'Manager',
    rating: 5,
    text: 'Walkie talkie yang kami beli sangat membantu koordinasi antara dapur dan pelayan. Suara jernih dan baterai tahan lama. Recommended!',
    image: 'SN'
  },
  {
    id: 3,
    name: 'Ahmad Wijaya',
    company: 'Minimarket Berkah',
    role: 'Owner',
    rating: 5,
    text: 'Mesin hitung uang MC-02 sangat akurat dan cepat. Fitur deteksi uang palsu memberikan keamanan ekstra untuk bisnis kami.',
    image: 'AW'
  },
  {
    id: 4,
    name: 'Linda Kusuma',
    company: 'Restoran Padang Sederhana',
    role: 'Pemilik',
    rating: 5,
    text: 'Pelayanan algootechindonesia sangat memuaskan. Dari konsultasi, instalasi, hingga after sales support semuanya profesional. Terima kasih!',
    image: 'LK'
  },
  {
    id: 5,
    name: 'Rudi Hartono',
    company: 'Hotel Bintang Lima',
    role: 'IT Manager',
    rating: 5,
    text: 'Kami order 20 unit walkie talkie untuk staff hotel. Kualitas bagus, harga kompetitif, dan pengiriman tepat waktu. Sangat puas!',
    image: 'RH'
  },
  {
    id: 6,
    name: 'Dewi Lestari',
    company: 'Butik Fashion Modern',
    role: 'Owner',
    rating: 5,
    text: 'Cash drawer dan printer thermal yang kami beli sangat berkualitas. Sudah 2 tahun pakai masih awet dan tidak ada masalah.',
    image: 'DL'
  },
]

export default function TestimoniPage() {
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Testimoni Pelanggan</h1>
            <p className="text-xl text-primary-100">
              Kepercayaan dan kepuasan pelanggan adalah prioritas utama kami
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '1000+', label: 'Pelanggan Puas' },
              { number: '4.9/5', label: 'Rating Rata-rata' },
              { number: '98%', label: 'Repeat Customer' },
              { number: '24/7', label: 'Customer Support' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Apa Kata Mereka</h2>
            <p className="text-xl text-gray-600">
              Pengalaman nyata dari pelanggan yang telah mempercayai algootechindonesia
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-8 relative"
              >
                <div className="absolute top-6 right-6 text-primary-200">
                  <Quote size={48} />
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonial.image}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-primary-600 font-semibold">{testimonial.company}</p>
                  </div>
                </div>

                <div className="flex space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 leading-relaxed relative z-10">
                  "{testimonial.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Bergabunglah dengan Ribuan Pelanggan Puas Kami
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Dapatkan produk berkualitas dan layanan terbaik untuk bisnis Anda
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
