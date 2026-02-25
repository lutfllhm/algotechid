'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Phone, Mail, Package, Printer, Calculator, Wallet, Radio, Barcode, Monitor } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showProductMenu, setShowProductMenu] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Beranda' },
    { href: '/layanan', label: 'Layanan' },
    { href: '/artikel', label: 'Artikel' },
    { href: '/profil', label: 'Profil' },
    { href: '/testimoni', label: 'Testimoni' },
    { href: '/galeri', label: 'Galeri' },
    { href: '/faq', label: 'FAQ' },
  ]

  const productCategories = [
    { name: 'Printer Thermal', icon: Printer, href: '/produk?category=Printer+Thermal', count: 20 },
    { name: 'Mesin Hitung Uang', icon: Calculator, href: '/produk?category=Mesin+Hitung+Uang', count: 2 },
    { name: 'Cash Drawer', icon: Wallet, href: '/produk?category=Cash+Drawer', count: 3 },
    { name: 'Walkie Talkie', icon: Radio, href: '/produk?category=Walkie+Talkie', count: 4 },
    { name: 'Barcode Scanner', icon: Barcode, href: '/produk?category=Barcode+Scanner', count: 2 },
    { name: 'Mini PC', icon: Monitor, href: '/produk?category=Mini+PC', count: 1 },
  ]

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white shadow-lg py-2' 
        : 'bg-white/95 backdrop-blur-md shadow-md py-3'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative w-10 h-10 flex-shrink-0"
            >
              <Image
                src="/logo.png"
                alt="algootechindonesia"
                fill
                className="object-contain"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex flex-col"
            >
              <span className="text-lg font-bold text-primary-600 leading-tight">
                algootechindonesia
              </span>
              <span className="text-xs text-gray-500 leading-tight hidden sm:block">
                Solusi Teknologi Terpercaya
              </span>
            </motion.div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <motion.div
                key={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={link.href}
                  className="px-3 py-2 font-medium transition-colors duration-300 hover:text-primary-600 text-sm text-gray-700 rounded-lg hover:bg-primary-50"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            
            {/* Produk Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setShowProductMenu(true)}
              onMouseLeave={() => setShowProductMenu(false)}
            >
              <button className="px-3 py-2 font-medium transition-colors duration-300 hover:text-primary-600 text-sm text-gray-700 rounded-lg hover:bg-primary-50 flex items-center space-x-1">
                <span>Produk</span>
                <ChevronDown size={16} className={`transition-transform duration-300 ${showProductMenu ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {showProductMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden"
                  >
                    <div className="p-4 bg-gradient-to-br from-primary-50 to-white border-b border-gray-100">
                      <h3 className="font-bold text-gray-900 mb-1">Kategori Produk</h3>
                      <p className="text-xs text-gray-600">Pilih kategori untuk melihat produk</p>
                    </div>
                    <div className="p-2">
                      {productCategories.map((category) => (
                        <Link
                          key={category.name}
                          href={category.href}
                          className="flex items-center space-x-3 px-3 py-2.5 rounded-lg hover:bg-primary-50 transition-colors group"
                        >
                          <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                            <category.icon size={20} className="text-primary-600" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-sm text-gray-900 group-hover:text-primary-600 transition-colors">
                              {category.name}
                            </div>
                            <div className="text-xs text-gray-500">{category.count} produk</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                    <div className="p-3 bg-gray-50 border-t border-gray-100">
                      <Link
                        href="/produk"
                        className="block text-center text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors"
                      >
                        Lihat Semua Produk →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <Link
              href="/kontak"
              className="ml-4 px-5 py-2 bg-gradient-to-r from-primary-600 to-primary-700 text-white font-semibold rounded-lg hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-md hover:shadow-lg text-sm flex items-center space-x-2"
            >
              <Phone size={16} />
              <span>Kontak</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg transition-colors text-gray-700 hover:bg-gray-100"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="py-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="px-4 py-2 text-xs font-bold text-gray-500 uppercase tracking-wider mt-2">
                  Kategori Produk
                </div>
                {productCategories.map((category) => (
                  <Link
                    key={category.name}
                    href={category.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  >
                    <category.icon size={18} />
                    <span>{category.name}</span>
                    <span className="text-xs text-gray-400">({category.count})</span>
                  </Link>
                ))}
                <Link
                  href="/kontak"
                  onClick={() => setIsOpen(false)}
                  className="block mx-4 mt-3 px-4 py-2.5 text-sm text-center bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Hubungi Kami
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}
