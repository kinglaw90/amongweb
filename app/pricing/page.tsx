import type { Metadata } from 'next'
import PricingSection from '@/components/PricingSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactCTA from '@/components/ContactCTA'
import { SITE_URL, WHATSAPP_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Web Design Pricing in Malaysia – From RM99 | Among Web',
  description:
    'Transparent web design pricing for Malaysian businesses. Landing page from RM99, company website from RM499, e-commerce from RM999. No hidden fees.',
  openGraph: {
    title: 'Affordable Web Design Pricing in Malaysia – Among Web',
    description:
      'Transparent, affordable pricing for landing pages, company websites, and e-commerce stores in Malaysia. Starting from RM99.',
    url: `${SITE_URL}/pricing`,
  },
}

const comparison = [
  { feature: 'Mobile Responsive Design', landing: true, company: true, ecommerce: true },
  { feature: 'WhatsApp Integration', landing: true, company: true, ecommerce: true },
  { feature: 'Contact Form', landing: true, company: true, ecommerce: true },
  { feature: 'SEO Optimization', landing: true, company: true, ecommerce: true },
  { feature: 'Google Analytics Setup', landing: true, company: true, ecommerce: true },
  { feature: 'Multiple Pages', landing: false, company: true, ecommerce: true },
  { feature: 'Blog / News Section', landing: false, company: true, ecommerce: true },
  { feature: 'Product Catalogue', landing: false, company: false, ecommerce: true },
  { feature: 'Online Payment Gateway', landing: false, company: false, ecommerce: true },
  { feature: 'Order Management', landing: false, company: false, ecommerce: true },
  { feature: 'Stock Management', landing: false, company: false, ecommerce: true },
  { feature: 'Delivery Time', landing: '3 days', company: '7 days', ecommerce: '14 days' },
  { feature: 'Starting Price', landing: 'RM99', company: 'RM499', ecommerce: 'RM999' },
]

const CheckIcon = () => (
  <i className="fi fi-rr-check text-xl text-green-500 mx-auto block" aria-label="Included" role="img" />
)

const CrossIcon = () => (
  <i className="fi fi-rr-cross text-base text-slate-300 mx-auto block" aria-label="Not included" role="img" />
)

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag">Pricing</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-5">
            Affordable Web Design Prices in Malaysia
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Simple, transparent pricing. No hidden fees. No surprise charges. Just honest value for Malaysian businesses.
          </p>
        </div>
      </div>

      {/* Pricing Cards */}
      <PricingSection />

      {/* Comparison Table */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">Compare Plans</span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white">
              Feature Comparison
            </h2>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <table className="w-full bg-white dark:bg-slate-900" aria-label="Pricing plan comparison">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-700 dark:bg-slate-900">
                  <th className="text-left p-5 font-semibold text-slate-700 dark:text-slate-300 w-2/5">Feature</th>
                  <th className="text-center p-5 font-bold text-blue-600 dark:text-blue-400">
                    Landing Page<br />
                    <span className="text-slate-900 dark:text-white">RM99</span>
                  </th>
                  <th className="text-center p-5 font-bold text-slate-900 dark:text-white">
                    Company Website<br />
                    <span>RM499+</span>
                  </th>
                  <th className="text-center p-5 font-bold text-slate-900 dark:text-white">
                    E-Commerce<br />
                    <span>RM999+</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={row.feature} className={i % 2 === 0 ? 'bg-white dark:bg-slate-900' : 'bg-slate-50 dark:bg-slate-800/50'}>
                    <td className="p-4 pl-5 text-sm text-slate-700 dark:text-slate-300 font-medium">{row.feature}</td>
                    <td className="p-4 text-center text-sm font-semibold text-slate-600 dark:text-slate-400">
                      {typeof row.landing === 'boolean' ? (row.landing ? <CheckIcon /> : <CrossIcon />) : row.landing}
                    </td>
                    <td className="p-4 text-center text-sm font-semibold text-slate-600 dark:text-slate-400">
                      {typeof row.company === 'boolean' ? (row.company ? <CheckIcon /> : <CrossIcon />) : row.company}
                    </td>
                    <td className="p-4 text-center text-sm font-semibold text-slate-600 dark:text-slate-400">
                      {typeof row.ecommerce === 'boolean' ? (row.ecommerce ? <CheckIcon /> : <CrossIcon />) : row.ecommerce}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 text-center">
            <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">Need something custom?</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              Get a Custom Quote
            </a>
          </div>
        </div>
      </section>

      <TestimonialsSection />
      <ContactCTA />
    </>
  )
}
