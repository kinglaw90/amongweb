import Link from 'next/link'
import { Service } from '@/lib/services'
import { WHATSAPP_URL } from '@/lib/constants'

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div
      className={`relative flex flex-col rounded-2xl border transition-all duration-200 hover:shadow-lg p-7 ${
        service.popular
          ? 'bg-gradient-to-b from-blue-600 to-blue-700 border-blue-500 text-white shadow-blue-200 shadow-lg'
          : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-700'
      }`}
    >
      {/* Popular badge */}
      {service.popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
          <span className="bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1.5 rounded-full shadow-sm whitespace-nowrap">
            ⭐ Most Popular
          </span>
        </div>
      )}

      {/* Icon + title */}
      <div className="mb-4">
        <div
          className={`mb-3 w-12 h-12 rounded-xl flex items-center justify-center ${
            service.popular ? 'bg-white/20' : 'bg-blue-50 dark:bg-blue-950'
          }`}
          aria-hidden="true"
        >
          <i className={`fi ${service.icon} text-2xl ${service.popular ? 'text-white' : 'text-blue-600 dark:text-blue-400'}`} />
        </div>
        <h3
          className={`text-xl font-bold mb-1 ${
            service.popular ? 'text-white' : 'text-slate-900 dark:text-white'
          }`}
        >
          {service.title}
        </h3>
        {service.priceNote && (
          <span
            className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
              service.popular
                ? 'bg-white/20 text-white/90'
                : 'bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-400'
            }`}
          >
            {service.priceNote}
          </span>
        )}
      </div>

      {/* Description */}
      <p
        className={`text-sm leading-relaxed mb-5 ${
          service.popular ? 'text-blue-100' : 'text-slate-600 dark:text-slate-400'
        }`}
      >
        {service.description}
      </p>

      {/* Price */}
      {/* Features */}
      <ul className="space-y-2.5 mb-7 flex-1">
        {service.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2.5 text-sm">
            <i
              className={`fi fi-rr-check text-[16px] shrink-0 ${
                service.popular ? 'text-blue-200' : 'text-blue-600'
              }`}
              aria-hidden="true"
            />
            <span className={service.popular ? 'text-blue-50' : 'text-slate-700 dark:text-slate-300'}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      {service.id === 4 ? (
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`block w-full text-center font-semibold py-3.5 rounded-xl transition-all duration-200 ${
            service.popular
              ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-sm'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {service.cta}
        </a>
      ) : (
        <Link
          href={service.ctaLink}
          className={`block w-full text-center font-semibold py-3.5 rounded-xl transition-all duration-200 ${
            service.popular
              ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-sm'
              : 'bg-blue-600 hover:bg-blue-700 text-white'
          }`}
        >
          {service.cta}
        </Link>
      )}
    </div>
  )
}
