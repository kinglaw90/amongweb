import Link from 'next/link'
import PortfolioCard from '@/components/PortfolioCard'
import { portfolioItems } from '@/lib/portfolio'

interface PortfolioSectionProps {
  limit?: number
  showHeading?: boolean
}

export default function PortfolioSection({ limit = 6, showHeading = true }: PortfolioSectionProps) {
  const featured = portfolioItems.slice(0, limit)

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-slate-950" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {showHeading && (
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-tag">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              Websites We've Built for Malaysian Businesses
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Real projects, real results. Every website we build is custom-designed for maximum impact.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((item, index) => (
            <PortfolioCard key={item.id} item={item} priority={index < 3} />
          ))}
        </div>

        {limit < portfolioItems.length && (
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white font-semibold px-8 py-4 rounded-full transition-colors duration-200"
            >
              View All Projects
              <i className="fi fi-rr-arrow-right text-base" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  )
}
