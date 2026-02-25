import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackgroundMusic from '@/components/BackgroundMusic'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'algootechindonesia - Solusi Teknologi Terpercaya',
  description: 'Penyedia peralatan teknologi berkualitas tinggi untuk bisnis Anda',
  icons: {
    icon: '/icon.jpeg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <BackgroundMusic />
      </body>
    </html>
  )
}
