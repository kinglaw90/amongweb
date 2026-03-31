import type { Metadata } from 'next'
import Hero from '@/components/Hero'
import StatsSection from '@/components/StatsSection'
import ServicesSection from '@/components/ServicesSection'
import PortfolioSection from '@/components/PortfolioSection'
import TestimonialsSection from '@/components/TestimonialsSection'
import PricingSection from '@/components/PricingSection'
import ContactCTA from '@/components/ContactCTA'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, OG_IMAGE, WHATSAPP_NUMBER, COMPANY_EMAIL, COMPANY_LOCATION, SOCIAL_LINKS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Professional Website Design in Malaysia – From RM 599 | Among Web',
  description:
    'Professional freelance web designer in Malaysia. Fast, modern, SEO-optimized websites from RM 599. Landing pages, company websites & e-commerce for Malaysian businesses.',
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: `${SITE_NAME} – Professional Website Design in Malaysia from RM 599`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    images: [{ url: OG_IMAGE, width: 1200, height: 630 }],
  },
}

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    image: `${SITE_URL}/opengraph-image.png`,
    telephone: `+${WHATSAPP_NUMBER}`,
    email: COMPANY_EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'MY',
      addressLocality: 'Kuala Lumpur',
      addressRegion: 'Kuala Lumpur',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '3.1390',
      longitude: '101.6869',
    },
    areaServed: [
      { '@type': 'Country', name: 'Malaysia' },
      { '@type': 'City', name: 'Kuala Lumpur' },
      { '@type': 'City', name: 'Selangor' },
      { '@type': 'City', name: 'Penang' },
      { '@type': 'City', name: 'Johor Bahru' },
    ],
    priceRange: 'RM 599 – RM 50,000+',
    currenciesAccepted: 'MYR',
    paymentAccepted: 'Bank Transfer, FPX, Online Banking',
    serviceType: [
      'Web Design',
      'Landing Page Design',
      'E-Commerce Development',
      'CMS Website',
      'Booking System',
      'CRM Development',
    ],
    sameAs: [
      SOCIAL_LINKS.facebook,
      SOCIAL_LINKS.instagram,
      SOCIAL_LINKS.linkedin,
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Web Design Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Landing Page Design' },
          price: '599',
          priceCurrency: 'MYR',
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Company Website Design' },
          price: '1499',
          priceCurrency: 'MYR',
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'E-Commerce Website' },
          price: '2999',
          priceCurrency: 'MYR',
        },
      ],
    },
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
