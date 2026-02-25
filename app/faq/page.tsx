'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const faqs = [
  {
    category: 'Umum',
    questions: [
      {
        q: 'Apa itu algootechindonesia?',
        a: 'algootechindonesia adalah perusahaan penyedia solusi teknologi bisnis yang menawarkan berbagai peralatan berkualitas tinggi seperti printer thermal, mesin hitung uang, cash drawer, walkie talkie, dan perangkat teknologi lainnya untuk meningkatkan efisiensi operasional bisnis Anda.'
      },
      {
        q: 'Apakah produk yang dijual original?',
        a: 'Ya, semua produk yang kami jual adalah 100% original dan bergaransi resmi. Kami bekerja sama langsung dengan distributor resmi untuk memastikan keaslian dan kualitas produk.'
      },
      {
        q: 'Bagaimana cara memesan produk?',
        a: 'Anda dapat menghubungi kami melalui WhatsApp di +62 818-989-799 atau melalui halaman kontak di website ini. Tim kami akan membantu Anda dalam proses pemesanan dan memberikan informasi detail mengenai produk yang Anda butuhkan.'
      },
    ]
  },
  {
    category: 'Produk & Layanan',
    questions: [
      {
        q: 'Apakah tersedia garansi untuk produk?',
        a: 'Ya, semua produk kami dilengkapi dengan garansi resmi dari distributor. Masa garansi bervariasi tergantung jenis produk, umumnya berkisar antara 6 bulan hingga 2 tahun. Detail garansi akan dijelaskan saat pembelian.'
      },
      {
        q: 'Apakah ada layanan instalasi dan training?',
        a: 'Ya, kami menyediakan layanan instalasi dan training untuk produk-produk tertentu. Tim teknisi profesional kami siap membantu Anda dalam proses instalasi dan memberikan pelatihan penggunaan produk.'
      },
      {
        q: 'Bagaimana jika produk mengalami kerusakan?',
        a: 'Jika produk mengalami kerusakan dalam masa garansi, Anda dapat menghubungi customer service kami. Kami akan membantu proses klaim garansi dan perbaikan. Tim teknisi kami juga tersedia 24/7 untuk support teknis.'
      },
    ]
  },
  {
    category: 'Pembayaran & Pengiriman',
    questions: [
      {
        q: 'Apa saja metode pembayaran yang tersedia?',
        a: 'Kami menerima berbagai metode pembayaran termasuk transfer bank (BCA, Mandiri, BNI, BRI), e-wallet (OVO, GoPay, Dana), dan pembayaran tunai untuk pembelian langsung. Detail rekening akan diberikan saat konfirmasi pemesanan.'
      },
      {
        q: 'Berapa lama waktu pengiriman?',
        a: 'Waktu pengiriman bervariasi tergantung lokasi tujuan. Untuk area Jakarta dan sekitarnya, pengiriman dapat dilakukan dalam 1-2 hari kerja. Untuk luar kota, estimasi pengiriman 3-5 hari kerja melalui jasa ekspedisi terpercaya.'
      },
      {
        q: 'Apakah ada biaya pengiriman?',
        a: 'Biaya pengiriman disesuaikan dengan lokasi tujuan dan berat produk. Untuk pembelian dalam jumlah tertentu, kami menawarkan gratis ongkir. Silakan hubungi tim kami untuk informasi detail mengenai biaya pengiriman.'
      },
    ]
  },
  {
    category: 'Teknis',
    questions: [
      {
        q: 'Bagaimana cara merawat printer thermal?',
        a: 'Untuk merawat printer thermal: 1) Bersihkan head printer secara rutin dengan cleaning pen, 2) Gunakan kertas thermal berkualitas, 3) Hindari debu dan kotoran, 4) Matikan printer saat tidak digunakan dalam waktu lama, 5) Lakukan service rutin setiap 6 bulan.'
      },
      {
        q: 'Apakah printer thermal kompatibel dengan sistem POS saya?',
        a: 'Sebagian besar printer thermal kami kompatibel dengan berbagai sistem POS. Printer kami mendukung koneksi USB, Serial, Ethernet, dan Bluetooth. Untuk memastikan kompatibilitas dengan sistem Anda, silakan konsultasikan dengan tim teknis kami.'
      },
      {
        q: 'Bagaimana cara setting walkie talkie?',
        a: 'Setting walkie talkie meliputi: 1) Charge baterai penuh sebelum penggunaan, 2) Set frekuensi yang sama untuk semua unit, 3) Atur volume dan squelch level, 4) Test komunikasi antar unit. Tim kami dapat membantu konfigurasi awal saat pengiriman produk.'
      },
    ]
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null)

  const toggleFAQ = (index: string) => {
    setOpenIndex(openIndex === index ? null : index)
  }

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
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 rounded-full mb-6">
              <HelpCircle size={40} />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-primary-100">
              Temukan jawaban untuk pertanyaan yang sering diajukan tentang produk dan layanan kami
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom max-w-4xl">
          {faqs.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq, faqIndex) => {
                  const faqId = `${categoryIndex}-${faqIndex}`
                  const isOpen = openIndex === faqId

                  return (
                    <motion.div
                      key={faqIndex}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      className="card overflow-hidden"
                    >
                      <button
                        onClick={() => toggleFAQ(faqId)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                      >
                        <span className="font-semibold text-gray-900 pr-4">
                          {faq.q}
                        </span>
                        <ChevronDown
                          size={24}
                          className={`flex-shrink-0 text-primary-600 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <motion.div
                        initial={false}
                        animate={{
                          height: isOpen ? 'auto' : 0,
                          opacity: isOpen ? 1 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Masih Ada Pertanyaan?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Tim customer service kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami!
            </p>
            <a href="/kontak" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              Hubungi Kami
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
