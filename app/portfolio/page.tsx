import type { Metadata } from 'next'
import PortfolioCard from '@/components/PortfolioCard'
import ContactCTA from '@/components/ContactCTA'
import { portfolioItems } from '@/lib/portfolio'
import { SITE_URL, WHATSAPP_URL } from '@/lib/constants'

export const metadata: Metadata = {

  title: 'Portfolio – Web Design Projects for Malaysian Businesses',
  description:
    "Browse Among Web's portfolio of websites built for Malaysian businesses. Landing pages, company websites, e-commerce stores, and web applications across Malaysia.",
  openGraph: {
    title: 'Portfolio – Among Web | Malaysian Web Design Projects',
    description:
      'See real websites we built for Malaysian businesses. 50+ projects delivered across Kuala Lumpur, Selangor, Penang, and across Malaysia.',
    url: `${SITE_URL}/portfolio`,
  },
}

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag">Our Portfolio</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-5">
            Websites Built for Malaysian Businesses
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Real projects, real results. Every website below is live and generating business for our Malaysian clients.
          </p>
        </div>
      </div>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-14 text-center">
            {[
              { value: '7+', label: 'Industries Served' },
              { value: '50+', label: 'Projects Completed' },
              { value: '100%', label: 'Client Satisfaction' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-extrabold text-blue-600 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolioItems.map((item, index) => (
              <PortfolioCard key={item.id} item={item} priority={index < 3} />
            ))}
          </div>

          {/* CTA below grid */}
          <div className="mt-16 text-center bg-blue-50 dark:bg-blue-950 border border-blue-100 dark:border-blue-900 rounded-2xl p-10">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-3">
              Want a Website Like These?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-xl mx-auto">
              We'd love to create something amazing for your business too. Get in touch for a free consultation.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Start Your Project Today
            </a>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
