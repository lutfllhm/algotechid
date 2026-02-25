'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'
import { useState } from 'react'

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Format WhatsApp message
    const message = `Halo algootechindonesia,%0A%0ANama: ${formData.name}%0AEmail: ${formData.email}%0ATelepon: ${formData.phone}%0ASubjek: ${formData.subject}%0A%0APesan:%0A${formData.message}`
    window.open(`https://wa.me/6289536648096?text=${message}`, '_blank')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telepon / WhatsApp',
      content: '+62 818-989-799',
      link: 'https://wa.me/62818989799'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@algootech.id',
      link: 'mailto:info@algootech.id'
    },
    {
      icon: MapPin,
      title: 'Lokasi',
      content: 'Indonesia',
      link: '#'
    },
    {
      icon: Clock,
      title: 'Jam Operasional',
      content: 'Senin - Sabtu: 09:00 - 18:00',
      link: '#'
    },
  ]

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Hubungi Kami</h1>
            <p className="text-xl text-primary-100">
              Tim teknisi profesional kami siap membantu Anda 24/7. Jangan ragu untuk menghubungi kami!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target={info.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card p-6 text-center hover:shadow-2xl transition-all duration-300 cursor-pointer"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4">
                  <info.icon size={28} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-gray-600">{info.content}</p>
              </motion.a>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                Kirim Pesan
              </h2>
              <p className="text-gray-600 mb-8">
                Isi formulir di bawah ini dan kami akan menghubungi Anda sesegera mungkin. Atau hubungi langsung melalui WhatsApp untuk respon lebih cepat.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                    placeholder="Masukkan nama lengkap"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                      placeholder="email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Nomor Telepon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                      placeholder="08xx-xxxx-xxxx"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                    Subjek *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none"
                  >
                    <option value="">Pilih subjek</option>
                    <option value="Informasi Produk">Informasi Produk</option>
                    <option value="Pemesanan">Pemesanan</option>
                    <option value="Garansi & Service">Garansi & Service</option>
                    <option value="Konsultasi">Konsultasi</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Pesan *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none resize-none"
                    placeholder="Tulis pesan Anda di sini..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center space-x-2"
                >
                  <Send size={20} />
                  <span>Kirim via WhatsApp</span>
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:pl-8"
            >
              <div className="card p-8 bg-gradient-to-br from-primary-50 to-primary-100 border-2 border-primary-200">
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Kenapa Memilih algootechindonesia?
                </h3>
                <ul className="space-y-4">
                  {[
                    'Produk 100% Original & Bergaransi',
                    'Harga Kompetitif & Terjangkau',
                    'Tim Teknisi Profesional 24/7',
                    'Pengiriman Cepat & Aman',
                    'Layanan Purna Jual Terpercaya',
                    'Konsultasi Gratis',
                  ].map((item, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="flex-shrink-0 w-6 h-6 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                        ✓
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-8 card p-8"
              >
                <h3 className="text-xl font-bold mb-4 text-gray-900">
                  Hubungi Teknisi Kami
                </h3>
                <p className="text-gray-600 mb-6">
                  Untuk bantuan teknis dan konsultasi produk, hubungi teknisi profesional kami:
                </p>
                <a
                  href="https://wa.me/6289536648096"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full flex items-center justify-center space-x-2"
                >
                  <Phone size={20} />
                  <span>WhatsApp: +62 818-989-799</span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
