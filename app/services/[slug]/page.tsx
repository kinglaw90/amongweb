import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import ContactCTA from '@/components/ContactCTA'
import { services } from '@/lib/services'
import { SITE_URL, WHATSAPP_URL } from '@/lib/constants'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) return {}
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `${SITE_URL}/services/${service.slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `${SITE_URL}/services/${service.slug}`,
      images: [{ url: service.image, width: 1200, height: 630, alt: service.title }],
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params
  const service = services.find((s) => s.slug === slug)
  if (!service) notFound()

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.longDescription,
    url: `${SITE_URL}/services/${service.slug}`,
    provider: {
      '@type': 'Organization',
      name: 'Among Web',
      url: SITE_URL,
    },
    areaServed: 'Malaysia',
    offers: {
      '@type': 'Offer',
      price: service.price === 'Custom Quote' ? undefined : service.price.replace(/[^0-9.]/g, ''),
      priceCurrency: 'MYR',
      description: service.price === 'Custom Quote' ? 'Custom Quote' : `From ${service.price}`,
    },
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* HERO */}
      <div className="relative overflow-hidden bg-slate-950 pt-32 pb-24">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src={service.image}
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase text-blue-400 mb-5 hover:text-blue-300 transition-colors"
          >
            <i className="fi fi-rr-arrow-left text-xs" aria-hidden="true" />
            All Services
          </Link>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            {service.heroHeadline}
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10">
            {service.heroSubheadline}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              {service.cta}
              <i className="fi fi-rr-arrow-right text-sm" aria-hidden="true" />
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <i className="fi fi-brands-whatsapp text-base" aria-hidden="true" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      {/* OVERVIEW */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Description + Ideal For */}
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-500 mb-4">
              {service.title}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              What's included and who it's for
            </h2>
            <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-base mb-8">
              {service.longDescription}
            </p>
            <div>
              <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-4">
                Ideal for
              </p>
              <ul className="space-y-2">
                {service.idealFor.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Features card */}
          <div className="rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-600/15 flex items-center justify-center" aria-hidden="true">
                <i className={`fi ${service.icon} text-lg text-blue-500`} />
              </div>
              <div>
                <p className="font-bold text-slate-900 dark:text-white text-sm">{service.title}</p>
                <p className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
                  {service.price === 'Custom Quote' ? 'Custom Quote' : `From ${service.price}`}
                </p>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              {service.features.map((f) => (
                <li key={f} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-green-500/15 flex items-center justify-center shrink-0">
                    <i className="fi fi-rr-check text-xs text-green-500" aria-hidden="true" />
                  </span>
                  {f}
                </li>
              ))}
            </ul>
            <Link href="/contact" className="btn-primary w-full justify-center">
              {service.cta}
              <i className="fi fi-rr-arrow-right text-sm" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-500 mb-4">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              Common questions about {service.title}.
            </h2>
          </div>
          <div className="divide-y divide-slate-200 dark:divide-slate-800">
            {service.faqs.map((faq) => (
              <details key={faq.q} className="group py-5">
                <summary className="flex items-center justify-between cursor-pointer list-none gap-4">
                  <span className="font-semibold text-slate-900 dark:text-white text-sm md:text-base">
                    {faq.q}
                  </span>
                  <span className="shrink-0 w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center group-open:rotate-45 transition-transform duration-200">
                    <i className="fi fi-rr-plus text-xs text-blue-500" aria-hidden="true" />
                  </span>
                </summary>
                <p className="mt-4 text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-500 mb-4">
              Explore More
            </span>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
              Other services you might need
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="group rounded-2xl border border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 p-6 hover:border-blue-500/40 hover:bg-blue-50/50 dark:hover:bg-blue-950/20 transition-all duration-200"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center mb-4" aria-hidden="true">
                  <i className={`fi ${s.icon} text-lg text-blue-500`} />
                </div>
                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {s.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">
                  {s.description}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/services" className="btn-secondary inline-flex">
              View All Services
              <i className="fi fi-rr-arrow-right text-sm" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
