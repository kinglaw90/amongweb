import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ContactCTA from '@/components/ContactCTA'
import { SITE_URL, WHATSAPP_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Web Design & Digital Services in Malaysia â“ Among Web',
  description:
    'Professional web design, CMS, booking systems, CRM, and e-commerce solutions for Malaysian businesses. Fast delivery, SEO-optimized, and built to convert.',
  openGraph: {
    title: 'Web Design & Digital Services in Malaysia â“ Among Web',
    description:
      'Landing pages, company websites, e-commerce, CMS, booking systems, and CRM solutions for Malaysian businesses.',
    url: `${SITE_URL}/services`,
  },
}

const serviceGrid = [
  {
    id: 'landing',
    title: 'Landing Page',
    tagline: 'Convert visitors into leads, fast.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1200&q=85&auto=format&fit=crop',
    span: 'lg:col-span-2',
  },
  {
    id: 'company',
    title: 'Company Website',
    tagline: 'Your full brand story, online.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=85&auto=format&fit=crop',
    span: 'lg:col-span-1',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Store',
    tagline: 'Sell 24/7 with zero friction.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=85&auto=format&fit=crop',
    span: 'lg:col-span-1',
  },
  {
    id: 'cms',
    title: 'CMS Website',
    tagline: 'Manage your content yourself.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=85&auto=format&fit=crop',
    span: 'lg:col-span-1',
  },
  {
    id: 'booking',
    title: 'Booking System',
    tagline: 'Let customers schedule themselves.',
    image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=800&q=85&auto=format&fit=crop',
    span: 'lg:col-span-1',
  },
  {
    id: 'crm',
    title: 'CRM System',
    tagline: 'Never lose a lead again.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=85&auto=format&fit=crop',
    span: 'lg:col-span-1',
  },
  {
    id: 'webapp',
    title: 'Web Application',
    tagline: 'Custom-built to your exact specs.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&q=85&auto=format&fit=crop',
    span: 'lg:col-span-2',
  },
]

const deepDives = [
  {
    id: 'cms',
    title: 'CMS Website',
    headline: 'Your website. Your control.',
    body: 'Stop paying developers for every small change. A CMS gives you a clean admin panel to update text, images, blog posts, and pages & no code, no friction. We build on WordPress or headless CMS depending on your scale, all optimized for speed and SEO.',
    points: ['Property agencies', 'Restaurants & F&B', 'Schools & training centres', 'News & media portals'],
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=85&auto=format&fit=crop',
  },
  {
    id: 'booking',
    title: 'Booking System',
    headline: 'Appointments booked. No-shows reduced.',
    body: 'Eliminate scheduling back-and-forth on WhatsApp. Customers pick a slot, get an automated confirmation, and receive reminders before their appointment. Staff calendars stay synced. Payment can be collected at booking.',
    points: ['Clinics & wellness centres', 'Beauty salons & spas', 'Tuition & coaching centres', 'Fitness studios & gyms'],
    image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=1200&q=85&auto=format&fit=crop',
  },
  {
    id: 'crm',
    title: 'CRM System',
    headline: 'Your pipeline, not a WhatsApp thread.',
    body: 'Most Malaysian SMEs manage leads in a mix of WhatsApp, spreadsheets, and memory. A CRM puts every lead, follow-up, and customer interaction in one place & so you close more deals and nothing falls through the cracks.',
    points: ['Property agents & agencies', 'Insurance & financial services', 'B2B sales teams', 'Education & recruitment'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=85&auto=format&fit=crop',
  },
]

const included = [
  { icon: 'fi-rr-mobile', title: 'Mobile Responsive', desc: 'Flawless on every screen & phone, tablet, desktop.' },
  { icon: 'fi-rr-bolt', title: 'Fast Loading', desc: 'Lighthouse 90+ scores. Optimized from the ground up.' },
  { icon: 'fi-rr-search', title: 'SEO Ready', desc: 'Proper structure, meta tags, and schema for Google.' },
  { icon: 'fi-rr-comment-dots', title: 'WhatsApp Integration', desc: 'One-tap button to turn visitors into conversations.' },
  { icon: 'fi-rr-lock', title: 'SSL / HTTPS', desc: 'Secure by default. Trusted by browsers and Google.' },
  { icon: 'fi-rr-chart-mixed', title: 'Analytics Setup', desc: 'Google Analytics wired up on day one.' },
]

const faqs = [
  { q: 'How long does it take to build a website?', a: 'Landing pages are delivered in 3 days, company websites in 7 days, and e-commerce stores in 14 days. CMS websites take 7â“10 days. Booking systems and CRM solutions have custom timelines depending on complexity.' },
  { q: 'What do I need to provide before starting?', a: 'Your business name, logo, preferred colour scheme, and content (text and images). We can also help with content writing for an additional fee.' },
  { q: 'Do you provide hosting and domain?', a: 'We recommend hosting providers and can help you set up hosting, but hosting and domain fees are separate and billed directly to you.' },
  { q: 'Will my website appear on Google?', a: 'Yes. Every site we build follows on-page SEO best practices. We set up Google Search Console and submit your sitemap so Google can find and index you quickly.' },
  { q: 'Can I make changes to my website after launch?', a: 'Yes. We provide a 30-day warranty covering any bug fixes. For ongoing changes or maintenance, we offer monthly support packages.' },
  { q: 'Do you work with clients outside Kuala Lumpur?', a: 'Absolutely & KL, Penang, Johor, Selangor, Sabah, Sarawak and more. Everything is handled remotely via WhatsApp.' },
]

export default function ServicesPage() {
  const servicesJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Web Design Services in Malaysia',
    url: `${SITE_URL}/services`,
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Landing Page Design', url: `${SITE_URL}/services#landing` },
      { '@type': 'ListItem', position: 2, name: 'Company Website', url: `${SITE_URL}/services#company` },
      { '@type': 'ListItem', position: 3, name: 'E-Commerce Store', url: `${SITE_URL}/services#ecommerce` },
      { '@type': 'ListItem', position: 4, name: 'CMS Website', url: `${SITE_URL}/services#cms` },
      { '@type': 'ListItem', position: 5, name: 'Booking System', url: `${SITE_URL}/services#booking` },
      { '@type': 'ListItem', position: 6, name: 'CRM System', url: `${SITE_URL}/services#crm` },
      { '@type': 'ListItem', position: 7, name: 'Web Application', url: `${SITE_URL}/services#webapp` },
    ],
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      {/*  HERO  */}
      <div className="relative overflow-hidden bg-slate-950 pt-32 pb-24">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80&auto=format&fit=crop"
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
            Our Services
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Everything Your Business<br className="hidden md:block" /> Needs Online
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From a focused landing page to a full CRM & we build digital products that work for your business.
          </p>
        </div>
      </div>

      {/*  SERVICE GRID  */}
      <section className="py-20 bg-white dark:bg-slate-950" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" style={{gridAutoRows: '220px'}}>
            {serviceGrid.map((s) => (
              <div
                key={s.id}
                className={`relative rounded-2xl overflow-hidden ${s.span}`}
              >
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="text-white/50 text-xs font-medium tracking-widest uppercase mb-1">
                    {s.tagline}
                  </p>
                  <h3 className="text-white text-lg md:text-xl font-bold leading-snug">
                    {s.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-400 dark:text-slate-500 text-sm mt-10">
            Not sure what fits your business?{' '}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold underline underline-offset-2">
              Chat with us & free consultation.
            </a>
          </p>
        </div>
      </section>

      {/*  DEEP DIVES  */}
      {deepDives.map((s, i) => (
        <section key={s.id} id={s.id} className="py-0 overflow-hidden">
          <div className={`grid grid-cols-1 lg:grid-cols-2 ${i % 2 !== 0 ? '' : ''}`}>
            {/* Image */}
            <div className={`relative min-h-[380px] lg:min-h-[520px] ${i % 2 !== 0 ? 'lg:order-2' : ''}`}>
              <Image
                src={s.image}
                alt={s.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
            </div>

            {/* Text */}
            <div className={`flex flex-col justify-center px-8 py-16 lg:px-16 xl:px-20 bg-white dark:bg-slate-950 ${i % 2 !== 0 ? 'lg:order-1' : ''}`}>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-500 mb-4">
                {s.title}
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-5 leading-tight">
                {s.headline}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed mb-8 text-base">
                {s.body}
              </p>
              <ul className="grid grid-cols-2 gap-2 mb-10">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
              <div>
                <Link href="/contact" className="btn-primary">
                  Discuss Your Project
                  <i className="fi fi-rr-arrow-right text-sm" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/*  ALWAYS INCLUDED  */}
      <section className="py-24 bg-slate-950 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full opacity-5 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600 rounded-full opacity-5 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-400 mb-4">
              Always Included
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              Every build comes standard with these.
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              No add-ons, no upsells. These are the baseline for every project we ship.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
            {included.map((item) => (
              <div key={item.title} className="flex gap-4 items-start bg-slate-950 p-7 hover:bg-slate-900 transition-colors duration-200">
                <div className="w-10 h-10 rounded-xl bg-blue-600/15 flex items-center justify-center shrink-0" aria-hidden="true">
                  <i className={`fi ${item.icon} text-lg text-blue-400`} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1 text-sm">{item.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  FAQ  */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-500 mb-4">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              Common questions.
            </h2>
          </div>
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {faqs.map((faq) => (
              <div key={faq.q} className="py-6">
                <h3 className="font-semibold text-slate-900 dark:text-white mb-2 leading-snug">{faq.q}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 pt-6 border-t border-slate-100 dark:border-slate-800">
            <p className="text-slate-400 text-sm mb-4">Have a question we didn&apos;t cover?</p>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
              Ask Us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}

