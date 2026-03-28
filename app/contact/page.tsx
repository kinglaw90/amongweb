import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'
import { SITE_URL, WHATSAPP_URL, COMPANY_EMAIL, COMPANY_LOCATION } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact Us – Get a Free Web Design Quote in Malaysia',
  description:
    'Get in touch with Among Web for a free web design consultation and quote. Based in Malaysia, serving businesses across KL, Selangor, Penang, Johor and nationwide.',
  openGraph: {
    title: 'Contact Among Web – Free Web Design Quote Malaysia',
    description:
      'Contact us for a free web design consultation. WhatsApp or email us to discuss your project and get a quote within 24 hours.',
    url: `${SITE_URL}/contact`,
  },
}

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag">Contact Us</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-5">
            Let's Build Something Great Together
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Tell us about your project. We'll get back to you within 24 hours with a free quote and consultation.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-4">
                  Get in Touch
                </h2>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  The fastest way to reach us is via WhatsApp. We typically respond within 1 hour during business hours (9am – 6pm, Mon–Sat).
                </p>
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-900 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-500 rounded-xl flex items-center justify-center shrink-0">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 dark:text-white text-sm">Fastest Response</div>
                    <div className="text-xs text-slate-500 dark:text-slate-400">Usually within 1 hour</div>
                  </div>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl transition-colors text-sm"
                >
                  Chat on WhatsApp Now
                </a>
              </div>

              {/* Other contacts */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                    <i className="fi fi-rr-envelope text-[16px] text-slate-500 dark:text-slate-400" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 dark:text-slate-500 mb-0.5">Email</div>
                    <a href={`mailto:${COMPANY_EMAIL}`} className="hover:text-blue-600 transition-colors font-medium">
                      {COMPANY_EMAIL}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                    <i className="fi fi-rr-marker text-[16px] text-slate-500 dark:text-slate-400" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 dark:text-slate-500 mb-0.5">Location</div>
                    <span className="font-medium">{COMPANY_LOCATION}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                  <div className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                    <i className="fi fi-rr-clock text-[16px] text-slate-500 dark:text-slate-400" aria-hidden="true" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 dark:text-slate-500 mb-0.5">Business Hours</div>
                    <span className="font-medium">Mon – Sat, 9am – 6pm</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3 bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm p-8">
              <h2 className="text-xl font-extrabold text-slate-900 dark:text-white mb-6">Send an Enquiry</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
