import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackgroundMusic from '@/components/BackgroundMusic'
import LoadingScreen from '@/components/LoadingScreen'
import ScrollToTop from '@/components/ScrollToTop'
import WhatsAppButton from '@/components/WhatsAppButton'

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
    <html lang="id" className="scroll-smooth">
      <body className={inter.className}>
        <LoadingScreen />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <BackgroundMusic />
        <ScrollToTop />
        <WhatsAppButton />
      </body>
    </html>
  )
}
