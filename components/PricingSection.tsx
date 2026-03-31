import Link from 'next/link'
import { WHATSAPP_URL } from '@/lib/constants'
import { PRICE } from '@/lib/pricing'

const plans = [
  {
    name: 'Landing Page',
    price: PRICE.landingPage.label,
    period: 'one-time',
    description: 'Perfect for getting your business online fast.',
    features: [
      '1-page custom design',
      'Mobile responsive',
      'WhatsApp integration',
      'Contact form',
      'Google Maps',
      'Basic SEO setup',
      'Fast loading',
      '3-day delivery',
    ],
    cta: `Get Started — ${PRICE.landingPage.label}`,
    ctaLink: WHATSAPP_URL,
    isExternal: true,
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Company Website',
    price: PRICE.companyWebsite.label,
    period: 'one-time',
    description: 'A complete multi-page professional website.',
    features: [
      '5–7 custom pages',
      'Blog / news section',
      'WhatsApp + contact form',
      'Google Analytics',
      'Full SEO setup',
      'Social media integration',
      'Speed optimized',
      '7-day delivery',
    ],
    cta: 'Get Started',
    ctaLink: '/contact',
    isExternal: false,
    highlighted: false,
  },
  {
    name: 'E-Commerce',
    price: PRICE.ecommerce.label,
    period: 'one-time',
    description: 'Sell products online 24/7 with a complete store.',
    features: [
      'Full product catalogue',
      'Online payment (FPX/Stripe)',
      'Order management',
      'Stock tracking',
      'Discount codes',
      'Mobile-first design',
      'Full SEO & analytics',
      '14-day delivery',
    ],
    cta: 'Get Started',
    ctaLink: '/contact',
    isExternal: false,
    highlighted: false,
  },
]

export default function PricingSection() {
  return (
    <section className="py-20 md:py-28 bg-white dark:bg-slate-950" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-tag">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            Transparent, Affordable Web Design Pricing
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            No hidden fees. No surprises. Just honest pricing that fits your Malaysian business budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 border transition-all duration-200 ${
                plan.highlighted
                  ? 'bg-blue-600 border-blue-500 text-white shadow-2xl shadow-blue-200 scale-105'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-700 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-lg'
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1.5 rounded-full shadow whitespace-nowrap">
                    ⭐ {plan.badge}
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-lg font-bold mb-1 ${plan.highlighted ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 ${plan.highlighted ? 'text-blue-200' : 'text-slate-500 dark:text-slate-400'}`}>
                  {plan.description}
                </p>
                <div className="flex items-end gap-1">
                  <span className={`text-4xl font-extrabold ${plan.highlighted ? 'text-white' : 'text-slate-900 dark:text-white'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-sm mb-1.5 ${plan.highlighted ? 'text-blue-200' : 'text-slate-500 dark:text-slate-400'}`}>
                    /{plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm">
                    <i
                      className={`fi fi-rr-check text-[16px] shrink-0 ${plan.highlighted ? 'text-blue-200' : 'text-blue-600'}`}
                      aria-hidden="true"
                    />
                    <span className={plan.highlighted ? 'text-blue-50' : 'text-slate-700 dark:text-slate-300'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {plan.isExternal ? (
                <a
                  href={plan.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center font-bold py-3.5 rounded-xl transition-all duration-200 ${
                    plan.highlighted
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {plan.cta}
                </a>
              ) : (
                <Link
                  href={plan.ctaLink}
                  className={`block w-full text-center font-bold py-3.5 rounded-xl transition-all duration-200 ${
                    plan.highlighted
                      ? 'bg-white text-blue-600 hover:bg-blue-50'
                      : 'bg-slate-900 dark:bg-blue-600 hover:bg-slate-800 dark:hover:bg-blue-700 text-white'
                  }`}
                >
                  {plan.cta}
                </Link>
              )}
            </div>
          ))}
        </div>

        {/* Enterprise note */}
        <div className="mt-10 text-center">
          <p className="text-slate-500 dark:text-slate-400 text-sm">
            Need a custom web application?{' '}
            <Link href="/contact" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold underline underline-offset-2">
              Contact us for a custom quote →
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
