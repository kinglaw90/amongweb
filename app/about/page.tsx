import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ContactCTA from '@/components/ContactCTA'
import { SITE_NAME, SITE_URL, WHATSAPP_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Us – Freelance Web Designer in Malaysia',
  description:
    'Learn about Among Web – a Malaysian freelance web design studio helping businesses grow online with affordable, results-driven websites. Based in Kuala Lumpur.',
  openGraph: {
    title: `About Among Web – Freelance Web Designer in Malaysia`,
    description:
      'Malaysian freelance web designer helping SMEs and startups get professional, affordable websites that rank on Google and generate leads.',
    url: `${SITE_URL}/about`,
  },
}

const values = [
  {
    icon: 'fi-rr-bullseye-arrow',
    title: 'Results-Driven',
    description:
      'Every website we build is designed with one goal: to grow your business. Form follows function — beauty with purpose.',
  },
  {
    icon: 'fi-rr-comment-dots',
    title: 'Transparent Communication',
    description:
      'You always know what stage your project is at. We communicate via WhatsApp so you get fast, direct updates.',
  },
  {
    icon: 'fi-rr-bolt',
    title: 'Speed & Efficiency',
    description:
      'We deliver fast without cutting corners. Most landing pages are ready within 3 days, company websites in 7 days.',
  },
  {
    icon: 'fi-rr-search',
    title: 'SEO Best Practices',
    description:
      "Every website we build follows Google's best practices — so your site gets found by the right people in Malaysia.",
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery Call',
    description: 'We start with a free WhatsApp chat to understand your business, goals, and requirements.',
  },
  {
    step: '02',
    title: 'Design & Development',
    description: 'We design and build your website, keeping you updated throughout the process.',
  },
  {
    step: '03',
    title: 'Review & Revisions',
    description: 'You review the work, request changes, and we refine until you are 100% satisfied.',
  },
  {
    step: '04',
    title: 'Launch & Support',
    description: 'We launch your site, hand over all credentials, and offer post-launch support.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <div className="page-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag">About Among Web</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-5">
            Your Trusted Freelance Web Designer in Malaysia
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            We help Malaysian businesses build a professional online presence without breaking the bank — starting from just RM99.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="section-tag">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6">
                Built for Malaysian Businesses
              </h2>
              <div className="space-y-5 text-slate-600 dark:text-slate-400 leading-relaxed">
                <p>
                  Among Web was founded with a simple mission: to make professional web design accessible to every Malaysian business, regardless of size or budget.
                </p>
                <p>
                  Too many Malaysian SMEs, home-based businesses, and startups are missing out on online opportunities because professional web design felt out of reach — either too expensive, too complicated, or too slow.
                </p>
                <p>
                  We changed that by offering high-quality, SEO-optimized websites starting from just RM99, delivered in as little as 3 days. No corporate bloat, no unnecessary pricing layers — just honest work at honest prices.
                </p>
                <p>
                  Today, we've helped 50+ Malaysian businesses across various industries establish a strong online presence that generates real leads and drives real growth.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Chat With Us
                </a>
                <Link href="/portfolio" className="btn-secondary">
                  View Our Work
                </Link>
              </div>
            </div>

            {/* Stats cards + photo placeholder */}
            <div className="flex flex-col gap-5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <Image
                  src="/aboutus.jpg"
                  alt="Among Web team and workspace"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-5">
                {[
                  { value: '50+', label: 'Projects Delivered', icon: 'fi-rr-rocket' },
                  { value: '5★', label: 'Average Rating', icon: 'fi-rr-star' },
                  { value: 'RM99', label: 'Starting Price', icon: 'fi-rr-coins' },
                  { value: '3 Days', label: 'Fastest Delivery', icon: 'fi-rr-bolt' },
                ].map((stat) => (
                  <div key={stat.label} className="card text-center">
                    <div className="mb-2 w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center mx-auto" aria-hidden="true">
                      <i className={`fi ${stat.icon} text-xl text-blue-600 dark:text-blue-400`} />
                    </div>
                    <div className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1">{stat.value}</div>
                    <div className="text-sm text-slate-500 dark:text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-tag">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              Why Clients Choose Among Web
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="card">
                <div className="mb-4 w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center" aria-hidden="true">
                  <i className={`fi ${v.icon} text-2xl text-blue-600 dark:text-blue-400`} />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{v.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-tag">How It Works</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              Our Simple 4-Step Process
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Getting your website built is easy. Here's exactly what happens from start to launch.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="relative text-center">
                {index < process.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[calc(50%+2rem)] right-0 h-px bg-slate-200" aria-hidden="true" />
                )}
                <div className="w-16 h-16 bg-blue-600 text-white rounded-2xl flex items-center justify-center mx-auto mb-5 text-lg font-extrabold shadow-sm">
                  {step.step}
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
