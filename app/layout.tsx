import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ThemeProvider from '@/components/ThemeProvider'
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, OG_IMAGE } from '@/lib/constants'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} – Affordable Website Design in Malaysia`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'web design malaysia',
    'web designer malaysia',
    'freelance web designer malaysia',
    'website design malaysia',
    'web designer kuala lumpur',
    'affordable web design malaysia',
    'landing page malaysia',
    'company website malaysia',
    'ecommerce website malaysia',
    'wordpress website malaysia',
    'seo website malaysia',
    'website design kl',
    'web design selangor',
    'web design penang',
    'web design johor',
  ],
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_MY',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} – Affordable Website Design in Malaysia`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} – Affordable Website Design in Malaysia`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: `${SITE_NAME} – Affordable Website Design in Malaysia`,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-MY" className={inter.variable} suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-slate-950 transition-colors duration-200`}>
        <ThemeProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  )
}
