import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ServiceCard from '@/components/ServiceCard'
import ContactCTA from '@/components/ContactCTA'
import { services } from '@/lib/services'
import { SITE_URL, WHATSAPP_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Web Design & Digital Services in Malaysia – Among Web',
  description:
    'Professional web design, CMS, booking systems, CRM, and e-commerce solutions for Malaysian businesses. Fast delivery, SEO-optimized, and built to convert.',
  openGraph: {
    title: 'Web Design & Digital Services in Malaysia – Among Web',
    description:
      'Landing pages, company websites, e-commerce, CMS, booking systems, and CRM solutions for Malaysian businesses.',
    url: `${SITE_URL}/services`,
  },
}

const faqs = [
  {
    q: 'How long does it take to build a website?',
    a: 'Landing pages are delivered in 3 days, company websites in 7 days, and e-commerce stores in 14 days. CMS websites take 7–10 days. Booking systems and CRM solutions have custom timelines depending on complexity.',
  },
  {
    q: 'What do I need to provide before starting?',
    a: 'Your business name, logo, preferred color scheme, and content (text and images). We can also help with content writing for an additional fee.',
  },
  {
    q: 'Do you provide hosting and domain?',
    a: 'We recommend hosting providers and can help you set up hosting, but hosting and domain fees are separate and billed directly to you.',
  },
  {
    q: 'Will my website appear on Google?',
    a: 'Yes. Every website we build follows on-page SEO best practices. We set up Google Search Console and submit your sitemap so Google can find and index your site quickly.',
  },
  {
    q: 'Can I manage my own website content?',
    a: 'Yes — with our CMS website package, you get a full admin dashboard to update text, images, and blog posts without any coding. Training is included.',
  },
  {
    q: 'What is a booking system and who needs one?',
    a: 'A booking system lets your customers schedule appointments or services directly on your website. It\'s ideal for clinics, salons, tutors, fitness studios, consultants, and anyone who takes appointments. It reduces no-shows with automated reminders and saves you admin time.',
  },
  {
    q: 'What is a CRM system and do I need one?',
    a: 'A CRM (Customer Relationship Management) system helps you track leads, follow-ups, and customers in one place. If you\'re currently managing leads in WhatsApp, spreadsheets, or sticky notes — a CRM will help you close more deals and never miss a follow-up.',
  },
  {
    q: 'Can I make changes to my website after launch?',
    a: 'Yes. We provide a 30-day warranty covering any bug fixes. For ongoing changes or maintenance, we offer monthly support packages.',
  },
  {
    q: 'Do you work with clients outside Kuala Lumpur?',
    a: 'Absolutely. We work with clients across Malaysia — KL, Penang, Johor, Selangor, Sabah, Sarawak and more. Everything is handled remotely via WhatsApp.',
  },
]

const serviceDetails = [
  {
    id: 'cms',
    icon: 'fi-rr-browser',
    title: 'CMS Website',
    subtitle: 'Take control of your own content',
    body: [
      'A CMS (Content Management System) website gives you the power to update your own website without needing a developer. Change your service descriptions, upload new photos, publish blog articles, and manage your pages — all from a simple admin panel.',
      'This is ideal for businesses that regularly publish new content: property agencies updating listings, restaurants changing menus, schools posting news and events, or any business that doesn\'t want to pay for every small text change.',
      'We build CMS websites on WordPress or a headless CMS depending on your needs, all fully optimized for speed and SEO.',
    ],
    useCases: ['Property agencies', 'Restaurants & F&B', 'Schools & training centres', 'News & media portals', 'Any business updating content regularly'],
  },
  {
    id: 'booking',
    icon: 'fi-rr-calendar',
    title: 'Booking System',
    subtitle: 'Let customers book 24/7 — even while you sleep',
    body: [
      'An online booking system eliminates the back-and-forth of scheduling via WhatsApp or phone calls. Your customers pick a date, time, and service — the system handles the rest.',
      'Automated confirmation emails and WhatsApp reminders significantly reduce no-shows. Staff calendars are synced so you never double-book. You can set buffer times, maximum daily slots, and even collect payment at the point of booking.',
      'We build booking systems for clinics, salons, tuition centres, fitness studios, service workshops, photographers, consultants, and any business that books appointments.',
    ],
    useCases: ['Clinics & wellness centres', 'Beauty salons & spas', 'Tuition & coaching centres', 'Fitness studios & gyms', 'Photographers & videographers', 'Service workshops & mechanics'],
  },
  {
    id: 'crm',
    icon: 'fi-rr-users',
    title: 'CRM System',
    subtitle: 'Stop losing leads in WhatsApp chats',
    body: [
      'Most Malaysian SMEs manage their customers through a mix of WhatsApp threads, spreadsheets, and memory. This works when you\'re small, but as your business grows, leads fall through the cracks.',
      'A CRM centralises all your customer interactions. You can see every lead, where they are in your sales pipeline, when to follow up, and what your conversion rate looks like. Set automated reminders so you never forget to call a prospect back.',
      'We build custom CRM solutions tailored to your business process — not a generic off-the-shelf tool that doesn\'t fit how you work. Integrations with WhatsApp, email, and your existing website are all possible.',
    ],
    useCases: ['Property agents & agencies', 'Insurance & financial services', 'Car dealerships', 'B2B sales teams', 'Education & recruitment agencies', 'Any business with a sales pipeline'],
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag">Our Services</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-5">
            Everything Your Business Needs Online
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            From a simple landing page to a full booking system or CRM — we build digital solutions that make your Malaysian business run better.
          </p>
        </div>
      </div>

      {/* All Services Grid */}
      <section className="py-20 bg-white dark:bg-slate-950" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-tag">What We Build</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              7 Services, One Team
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg">
              Whether you&apos;re just getting online or scaling your operations — we have the right solution.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
          <p className="text-center text-slate-500 dark:text-slate-400 text-sm mt-10">
            Not sure what you need?{' '}
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 font-semibold underline underline-offset-2">
              Chat with us on WhatsApp
            </a>{' '}
            — free consultation, no pressure.
          </p>
        </div>
      </section>

      {/* Service Deep Dives: CMS, Booking, CRM */}
      {serviceDetails.map((s, i) => (
        <section
          key={s.id}
          id={s.id}
          className={`py-20 ${i % 2 === 0 ? 'bg-slate-50 dark:bg-slate-900' : 'bg-white dark:bg-slate-950'}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
                <div className="mb-5 w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center" aria-hidden="true">
                  <i className={`fi ${s.icon} text-3xl text-blue-600 dark:text-blue-400`} />
                </div>
                <span className="section-tag mb-3">{s.title}</span>
                <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-3">
                  {s.subtitle}
                </h2>
                <div className="space-y-4">
                  {s.body.map((para, pi) => (
                    <p key={pi} className="text-slate-600 dark:text-slate-400 leading-relaxed">{para}</p>
                  ))}
                </div>
                <div className="mt-8">
                  <Link href="/contact" className="btn-primary">
                    Discuss Your Project
                    <i className="fi fi-rr-arrow-right text-sm" aria-hidden="true" />
                  </Link>
                </div>
              </div>
              <div className={`${i % 2 !== 0 ? 'lg:order-1' : ''} flex flex-col gap-5`}>
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                  <Image
                    src={i === 0 ? '/services.jpg' : i === 1 ? '/services-2.jpg' : '/services-3.jpg'}
                    alt={s.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Who is this for */}
                <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 p-8 shadow-sm">
                  <h3 className="font-bold text-slate-900 dark:text-white mb-5 text-lg">Who is this for?</h3>
                  <ul className="space-y-3">
                    {s.useCases.map((uc) => (
                      <li key={uc} className="flex items-center gap-3 text-slate-700 dark:text-slate-300 text-sm">
                        <div className="w-7 h-7 rounded-lg bg-blue-50 dark:bg-blue-950 flex items-center justify-center shrink-0">
                          <i className="fi fi-rr-check text-sm text-blue-600 dark:text-blue-400" aria-hidden="true" />
                        </div>
                        {uc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* What's Always Included */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-tag">Always Included</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
              Every Website We Build Includes These
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'fi-rr-mobile', title: 'Mobile Responsive', desc: 'Perfect on every device — phones, tablets, and desktops.' },
              { icon: 'fi-rr-bolt', title: 'Fast Loading Speed', desc: 'Optimized for speed with Lighthouse scores 90+.' },
              { icon: 'fi-rr-search', title: 'SEO Optimized', desc: 'Proper meta tags, headings, and structure for Google ranking.' },
              { icon: 'fi-rr-comment-dots', title: 'WhatsApp Integration', desc: 'One-tap WhatsApp button to generate leads instantly.' },
              { icon: 'fi-rr-lock', title: 'SSL Certificate', desc: 'HTTPS secured — trusted by users and ranked better by Google.' },
              { icon: 'fi-rr-chart-mixed', title: 'Google Analytics', desc: 'Track visitors and understand your audience from day one.' },
            ].map((item) => (
              <div key={item.title} className="card flex gap-4 items-start">
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center shrink-0" aria-hidden="true">
                  <i className={`fi ${item.icon} text-xl text-blue-600 dark:text-blue-400`} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="section-tag">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-slate-200 dark:border-slate-700 rounded-2xl p-6 dark:bg-slate-900">
                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{faq.q}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-slate-500 dark:text-slate-400 mb-4">Still have questions?</p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              Ask Us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
