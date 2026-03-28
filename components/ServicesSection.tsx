import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import { services } from '@/lib/services'

interface ServicesSectionProps {
  limit?: number
}

export default function ServicesSection({ limit = 4 }: ServicesSectionProps) {
  const displayed = services.slice(0, limit)

  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-tag">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Web Design Services for Malaysian Businesses
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            From a simple RM99 landing page to a full e-commerce store — we have solutions for every stage and budget.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {displayed.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-500 dark:text-slate-400 mb-4">Not sure which package is right for you?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold underline underline-offset-2"
          >
            Talk to us — it's free
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
