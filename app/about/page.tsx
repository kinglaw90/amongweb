import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ContactCTA from '@/components/ContactCTA'
import { COMPANY_EMAIL, COMPANY_LOCATION, SITE_NAME, SITE_URL, SOCIAL_LINKS, WHATSAPP_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Us – Freelance Web Designer in Malaysia',
  description:
    'Learn about Among Web – a Malaysian freelance web design studio helping businesses grow online with affordable, results-driven websites. Based in Kuala Lumpur.',
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: `About Among Web – Freelance Web Designer in Malaysia`,
    description:
      'Malaysian freelance web designer helping SMEs and startups get professional, affordable websites that rank on Google and generate leads.',
    url: `${SITE_URL}/about`,
  },
}

const stats = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '3 Days', label: 'Fastest Delivery' },
  { value: 'RM 599', label: 'Starting Price' },
  { value: '5★', label: 'Client Rating' },
]

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
  {
    icon: 'fi-rr-mobile',
    title: 'Mobile-First Always',
    description:
      'Over 70% of Malaysian web traffic is mobile. Every pixel we build is designed for phones first, then scaled up.',
  },
  {
    icon: 'fi-rr-lock',
    title: 'Secure by Default',
    description:
      'SSL, HTTPS, clean code, and no bloated plugins. Security is baked in — not bolted on as an afterthought.',
  },
]

const process = [
  {
    step: '01',
    title: 'Discovery Call',
    description:
      'We start with a free WhatsApp chat to understand your business, goals, and what you want visitors to do.',
  },
  {
    step: '02',
    title: 'Design & Build',
    description:
      'We design and develop your website to spec — keeping you updated with previews throughout the process.',
  },
  {
    step: '03',
    title: 'Review & Refine',
    description:
      'You review the work, request changes, and we iterate until you are 100% satisfied with the result.',
  },
  {
    step: '04',
    title: 'Launch & Support',
    description:
      'We go live, hand over all credentials, and provide post-launch support so you are never left alone.',
  },
]

export default function AboutPage() {
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    email: COMPANY_EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kuala Lumpur',
      addressCountry: 'MY',
    },
    areaServed: { '@type': 'Country', name: 'Malaysia' },
    sameAs: [SOCIAL_LINKS.facebook, SOCIAL_LINKS.instagram, SOCIAL_LINKS.linkedin],
    description:
      'Among Web is a Malaysian freelance web design studio building fast, affordable, and SEO-optimised websites for businesses across Malaysia.',
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />

      {/* ─── HERO ─────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden bg-slate-950 pt-32 pb-24">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full opacity-5 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-600 rounded-full opacity-5 blur-3xl pointer-events-none" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-400 mb-5">
            About Among Web
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            We Build Websites That<br className="hidden md:block" /> Work as Hard as You Do
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A Malaysian web design studio focused on one thing — turning great businesses into great websites that generate real leads.
          </p>
        </div>
      </div>

      {/* ─── STORY + STATS ────────────────────────────────────────────── */}
      <section className="py-20 bg-white dark:bg-slate-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top row — headline + intro */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mb-16">
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-500 mb-4">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
                Built for<br />Malaysian Businesses.
              </h2>
            </div>
            <div className="flex flex-col justify-end">
              <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed">
                Among Web was founded with a simple mission — to make professional web design accessible to every Malaysian business, regardless of size or budget. No corporate bloat, no agency markup. Just honest work at honest prices.
              </p>
            </div>
          </div>

          {/* Main image + side content */}
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 items-stretch">

            {/* Large image */}
            <div className="relative rounded-2xl overflow-hidden min-h-[420px]">
              <Image
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=85&auto=format&fit=crop"
                alt="Modern professional office workspace at Among Web"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
              {/* Caption on image */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-white/50 text-xs font-medium tracking-widest uppercase mb-1">Since 2022</p>
                <p className="text-white text-lg font-bold leading-snug">Helping Malaysian businesses win online</p>
              </div>
            </div>

            {/* Right column — three stacked cards */}
            <div className="flex flex-col gap-6">

              {/* Stats strip */}
              <div className="grid grid-cols-2 gap-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 px-5 py-5 text-center hover:border-blue-200 dark:hover:border-blue-800 transition-colors duration-200">
                    <p className="text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-none mb-1">{stat.value}</p>
                    <p className="text-xs text-slate-400 dark:text-slate-500 font-medium leading-snug">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Problem card */}
              <div className="flex-1 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-7 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-600/10 flex items-center justify-center mb-4" aria-hidden="true">
                    <i className="fi fi-rr-triangle-warning text-lg text-blue-500" />
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base mb-3 leading-snug">
                    The problem we saw
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                    Too many Malaysian SMEs were missing out online — professional web design felt out of reach. Too expensive, too complicated, or took months to deliver.
                  </p>
                </div>
              </div>

              {/* Solution card — dark */}
              <div className="rounded-2xl bg-blue-600 p-7 flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-4" aria-hidden="true">
                    <i className="fi fi-rr-rocket text-lg text-white" />
                  </div>
                  <h3 className="font-bold text-white text-base mb-3 leading-snug">
                    What we did differently
                  </h3>
                  <p className="text-sm text-blue-100 leading-relaxed">
                    High-quality, SEO-optimized websites from RM 599, delivered in as little as 3 days. Fast, transparent, and built to convert — not just to impress.
                  </p>
                </div>
                <div className="mt-6">
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold text-sm px-5 py-2.5 rounded-full hover:bg-blue-50 transition-colors duration-200 shadow-sm">
                    Start a Project
                    <i className="fi fi-rr-arrow-right text-xs" aria-hidden="true" />
                  </Link>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ─── MISSION QUOTE ────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&q=80&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-slate-950/80" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-transparent to-slate-950/60" />
          {/* Ambient orbs */}
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl" />
          <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-violet-600 rounded-full opacity-10 blur-3xl" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-400 mb-6">
            What We Believe
          </span>
          <blockquote className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            &ldquo;A great website isn&apos;t a cost. It&apos;s the best salesperson you&apos;ll ever hire — working 24/7 without a salary.&rdquo;
          </blockquote>
          <p className="text-slate-400 text-base leading-relaxed max-w-xl mx-auto">
            Every Malaysian business deserves a fast, beautiful, and conversion-ready website. We&apos;re here to make that possible — without the agency markup.
          </p>
        </div>
      </section>

      {/* ─── VALUES ───────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-600 rounded-full opacity-5 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-400 mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 leading-tight">
              Why clients keep coming back.
            </h2>
            <p className="text-slate-400 text-base leading-relaxed">
              These aren&apos;t just words on a page. They&apos;re the principles behind every project we take on.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
            {values.map((v) => (
              <div key={v.title} className="bg-slate-950 p-7 hover:bg-slate-900 transition-colors duration-200 flex gap-4 items-start group">
                <div className="w-10 h-10 rounded-xl bg-blue-600/15 flex items-center justify-center shrink-0 group-hover:bg-blue-600/25 transition-colors duration-200" aria-hidden="true">
                  <i className={`fi ${v.icon} text-lg text-blue-400`} />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-1.5 text-sm">{v.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PROCESS ──────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-xl mx-auto mb-16">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-500 mb-4">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 leading-tight">
              From brief to live in 4 steps.
            </h2>
            <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed">
              No complicated project management. No endless meetings. Just a clear, fast process built for busy business owners.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={step.step} className="relative">
                {index < process.length - 1 && (
                  <div
                    className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] right-0 h-px"
                    style={{ background: 'linear-gradient(90deg, #2563eb40 0%, transparent 100%)' }}
                    aria-hidden="true"
                  />
                )}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                  <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center mb-5 text-lg font-extrabold shadow-sm shrink-0 mx-auto lg:mx-0">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-2 text-base">{step.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LOCATION STRIP ───────────────────────────────────────────── */}
      <section className="py-12 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400 text-sm">
              <span className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center shrink-0" aria-hidden="true">
                <i className="fi fi-rr-marker text-sm text-blue-500" />
              </span>
              <span>Based in <strong className="text-slate-700 dark:text-slate-300">Kuala Lumpur, Malaysia</strong> — serving businesses nationwide via WhatsApp</span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-700 transition-colors duration-200"
              >
                <i className="fi fi-brands-instagram text-sm" aria-hidden="true" />
              </a>
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-700 transition-colors duration-200"
              >
                <i className="fi fi-brands-facebook text-sm" aria-hidden="true" />
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-300 dark:hover:border-blue-700 transition-colors duration-200"
              >
                <i className="fi fi-brands-linkedin text-sm" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${COMPANY_EMAIL}`}
                className="text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ml-1"
              >
                {COMPANY_EMAIL}
              </a>
            </div>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
