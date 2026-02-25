'use client'

import { motion } from 'framer-motion'

interface ImagePlaceholderProps {
  text: string
  gradient?: string
  className?: string
}

export default function ImagePlaceholder({ 
  text, 
  gradient = 'from-primary-400 to-primary-600',
  className = 'h-64'
}: ImagePlaceholderProps) {
  return (
    <div className={`relative bg-gradient-to-br ${gradient} overflow-hidden ${className}`}>
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-white text-6xl font-bold"
        >
          {text}
        </motion.div>
      </div>
      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-10 rounded-full -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-white opacity-10 rounded-full -ml-12 -mb-12"></div>
    </div>
  )
}
