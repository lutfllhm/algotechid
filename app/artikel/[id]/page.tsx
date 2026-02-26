'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, User, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'
import { articles } from '../../../data/articles'
import { notFound } from 'next/navigation'

export default function ArtikelDetailPage({ params }: { params: { id: string } }) {
  const article = articles.find(a => a.id === parseInt(params.id))

  if (!article) {
    notFound()
  }

  return (
    <div className="pt-20 pb-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link href="/artikel" className="inline-flex items-center space-x-2 text-primary-100 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={20} />
              <span>Kembali ke Artikel</span>
            </Link>
            <div className="inline-block bg-white bg-opacity-20 px-4 py-1 rounded-full text-sm font-semibold mb-4">
              {article.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{article.title}</h1>
            <div className="flex items-center space-x-6 text-primary-100">
              <div className="flex items-center space-x-2">
                <Calendar size={18} />
                <span>{article.date}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User size={18} />
                <span>{article.author}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Article Image */}
            <div className="relative h-96 bg-gray-200 rounded-2xl mb-12 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              {article.content.map((section, index) => (
                <div key={index} className="mb-8">
                  {section.type === 'heading' && (
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{section.text}</h2>
                  )}
                  {section.type === 'paragraph' && (
                    <p className="text-gray-700 leading-relaxed mb-4">{section.text}</p>
                  )}
                  {section.type === 'list' && (
                    <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                      {section.items?.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900">Bagikan Artikel</h3>
                <div className="flex space-x-4">
                  <button className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                    <Facebook size={20} />
                  </button>
                  <button className="p-3 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors">
                    <Twitter size={20} />
                  </button>
                  <button className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors">
                    <Linkedin size={20} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-gray-900">Artikel Terkait</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {articles.filter(a => a.id !== article.id).slice(0, 3).map((relatedArticle, index) => (
              <motion.div
                key={relatedArticle.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="card overflow-hidden group"
              >
                <div className="relative h-48 bg-gray-200">
                  <img
                    src={relatedArticle.image}
                    alt={relatedArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-2 text-gray-900 line-clamp-2 group-hover:text-primary-600 transition-colors">
                    {relatedArticle.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{relatedArticle.excerpt}</p>
                  <Link href={`/artikel/${relatedArticle.id}`} className="text-primary-600 font-semibold hover:text-primary-700">
                    Baca Selengkapnya →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
