'use client'

import Link from 'next/link'
import { Mail, Phone, MapPin, Instagram, ShoppingBag } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">algootechindonesia</h3>
            <p className="text-gray-400 mb-4">
              Penyedia solusi teknologi terpercaya untuk kebutuhan bisnis modern Anda.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.tiktok.com/@algootech.id" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors"
                aria-label="TikTok"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/algootech.id/" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://shopee.co.id/algootechindonesia" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary-400 transition-colors"
                aria-label="Shopee"
              >
                <ShoppingBag size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Menu</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-primary-400 transition-colors">Beranda</Link></li>
              <li><Link href="/produk" className="hover:text-primary-400 transition-colors">Produk</Link></li>
              <li><Link href="/layanan" className="hover:text-primary-400 transition-colors">Layanan</Link></li>
              <li><Link href="/artikel" className="hover:text-primary-400 transition-colors">Artikel</Link></li>
              <li><Link href="/profil" className="hover:text-primary-400 transition-colors">Profil</Link></li>
              <li><Link href="/faq" className="hover:text-primary-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kategori Produk</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-primary-400 transition-colors">Printer Thermal</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Mesin Hitung Uang</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Cash Drawer</a></li>
              <li><a href="#" className="hover:text-primary-400 transition-colors">Walkie Talkie</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Kontak</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="mt-1 flex-shrink-0" />
                <a href="tel:+62818989799" className="hover:text-primary-400 transition-colors">
                  +62 818-989-799
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="mt-1 flex-shrink-0" />
                <a href="mailto:info@algootech.id" className="hover:text-primary-400 transition-colors">
                  info@algootech.id
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" />
                <span>Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} algootechindonesia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
