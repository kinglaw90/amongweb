import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import StatsSection from '@/components/StatsSection'
import ServicesSection from '@/components/ServicesSection'
import PortfolioSection from '@/components/PortfolioSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import PricingSection from '@/components/PricingSection'
import ContactCTA from '@/components/ContactCTA'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, OG_IMAGE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Affordable Website Design in Malaysia – Starting from RM99',
  description:
    'Professional freelance web designer in Malaysia. Fast, modern, SEO-optimized websites starting from RM99. Landing pages, company websites & e-commerce for Malaysian businesses.',
  openGraph: {
    title: `${SITE_NAME} – Affordable Website Design in Malaysia Starting from RM99`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
}

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    areaServed: 'MY',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'MY',
      addressLocality: 'Kuala Lumpur',
    },
    priceRange: 'RM99 – RM5000+',
    serviceType: 'Web Design',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <StatsSection />
      <ServicesSection />
      <PortfolioSection limit={6} showHeading />
      <TestimonialsSection />
      <PricingSection />
      <ContactCTA />
    </>
  )
}
