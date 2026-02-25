import Link from 'next/link'
import { Home, ChevronRight } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <section className="bg-gray-50 py-4 border-b border-gray-200">
      <div className="container-custom">
        <nav className="flex items-center space-x-2 text-sm flex-wrap">
          <Link 
            href="/" 
            className="text-gray-500 hover:text-primary-600 transition-colors flex items-center group"
          >
            <Home size={16} className="mr-1 group-hover:scale-110 transition-transform" />
            <span>Beranda</span>
          </Link>
          
          {items.map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <ChevronRight size={16} className="text-gray-400" />
              {item.href ? (
                <Link 
                  href={item.href}
                  className="text-gray-500 hover:text-primary-600 transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900 font-semibold line-clamp-1">
                  {item.label}
                </span>
              )}
            </div>
          ))}
        </nav>
      </div>
    </section>
  )
}
