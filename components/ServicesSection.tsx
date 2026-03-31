import Link from 'next/link'
import { services } from '@/lib/services'

const serviceImages: Record<number, string> = {
  1: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&q=80&auto=format&fit=crop',
  2: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80&auto=format&fit=crop',
  3: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format&fit=crop',
  4: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80&auto=format&fit=crop',
  5: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=800&q=80&auto=format&fit=crop',
  6: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80&auto=format&fit=crop',
  7: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=80&auto=format&fit=crop',
}

interface ServicesSectionProps {
  limit?: number
}

export default function ServicesSection({ limit = 6 }: ServicesSectionProps) {
  const displayed = services.slice(0, limit)

  return (
    <section className="py-20 md:py-28 bg-white dark:bg-slate-950" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-500 mb-4">
              What We Build
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Every digital product<br className="hidden md:block" /> your business needs.
            </h2>
          </div>
          <Link
            href="/services"
            className="shrink-0 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
          >
            View all services
            <i className="fi fi-rr-arrow-right text-xs" aria-hidden="true" />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-800">
          {displayed.map((service) => (
            <div
              key={service.id}
              className="group relative bg-white dark:bg-slate-950 p-8 flex flex-col gap-4 hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors duration-200"
            >
              {/* Icon */}
              <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center shrink-0" aria-hidden="true">
                <i className={`fi ${service.icon} text-xl text-blue-600 dark:text-blue-400`} />
              </div>

              {/* Text */}
              <div className="flex-1">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-3">
                  {service.description}
                </p>
              </div>

              {/* Bottom row */}
              <div className="flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800">
                <span className="text-xs font-semibold text-slate-400 dark:text-slate-500">
                  {service.price}
                </span>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                >
                  Enquire
                  <i className="fi fi-rr-arrow-right text-[10px]" aria-hidden="true" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 text-center">
          <p className="text-slate-400 dark:text-slate-500 text-sm mb-4">
            Not sure which is right for you?{' '}
            <Link href="/contact" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline underline-offset-2">
              Talk to us — it&apos;s free.
            </Link>
          </p>
        </div>

      </div>
    </section>
  )
}
