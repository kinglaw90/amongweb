import type { Metadata } from 'next'
import Image from 'next/image'
import PricingSection from '@/components/PricingSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import ContactCTA from '@/components/ContactCTA'
import { SITE_URL, WHATSAPP_URL } from '@/lib/constants'
import { PRICE } from '@/lib/pricing'

const pricingFaqs = [
  {
    q: 'How much does a website cost in Malaysia?',
    a: 'Our pricing starts from RM 599 for a landing page, RM 1,499 for a company website, and RM 2,999 for an e-commerce store. All prices include mobile-responsive design, SEO setup, and WhatsApp integration.',
  },
  {
    q: 'How long does it take to build a website?',
    a: 'Landing pages take 3 days, company websites take 7 days, and e-commerce stores take around 14 days from the time we receive all your content and requirements.',
  },
  {
    q: 'Are there any hidden fees?',
    a: 'No. Our pricing is fully transparent. The only additional costs are domain registration (around RM 50/year) and web hosting (around RM 150–300/year), which we will guide you through.',
  },
  {
    q: 'Do you offer custom packages?',
    a: 'Yes. If you need a custom solution such as a web application, booking system, or CRM, contact us on WhatsApp for a tailored quote.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept bank transfers (FPX), DuitNow, and e-wallet payments. A 50% deposit is required before work begins.',
  },
]

export const metadata: Metadata = {
  title: 'Web Design Pricing in Malaysia – From RM 599 | Among Web',
  description:
    'Transparent web design pricing for Malaysian businesses. Landing page from RM 599, company website from RM 1,499, e-commerce from RM 2,999. No hidden fees.',
  alternates: { canonical: `${SITE_URL}/pricing` },
  openGraph: {
    title: 'Web Design Pricing in Malaysia – Among Web',
    description:
      'Transparent pricing for landing pages, company websites, and e-commerce stores in Malaysia.',
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
  { feature: 'Starting Price', landing: PRICE.landingPage.label, company: PRICE.companyWebsite.label, ecommerce: PRICE.ecommerce.label },
]

const CheckIcon = () => (
  <i className="fi fi-rr-check text-xl text-green-500 mx-auto block" aria-label="Included" role="img" />
)

const CrossIcon = () => (
  <i className="fi fi-rr-cross text-base text-slate-300 mx-auto block" aria-label="Not included" role="img" />
)

export default function PricingPage() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: pricingFaqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {/* Hero */}
      <div className="relative overflow-hidden bg-slate-950 pt-32 pb-24">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=1600&q=80&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-400 mb-5">
            Pricing
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Web Design Pricing in Malaysia
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Simple, transparent pricing — no hidden fees, no surprise charges. Premium quality at fair Malaysian market rates.
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
                    <span className="text-slate-900 dark:text-white">{PRICE.landingPage.label}</span>
                  </th>
                  <th className="text-center p-5 font-bold text-slate-900 dark:text-white">
                    Company Website<br />
                    <span>{PRICE.companyWebsite.label}+</span>
                  </th>
                  <th className="text-center p-5 font-bold text-slate-900 dark:text-white">
                    E-Commerce<br />
                    <span>{PRICE.ecommerce.label}+</span>
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
