export interface PortfolioItem {
  id: number
  title: string
  slug: string
  category: string
  image: string
  mobileImage?: string
  description: string
  url?: string
  technologies: string[]
  featured?: boolean
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'Alfa Hydraulic',
    slug: 'alfa-hydraulic',
    category: 'Company Website',
    image: '/portfolio/alfa-hydraulic-portfolio.jpg',
    mobileImage: '/portfolio/alfa-hydraulic-mobile.png',
    description:
      'Professional company website for a hydraulic equipment supplier in Malaysia. Clean layout showcasing products and services.',
    url: 'https://new.alfa-hyd.com/',
    technologies: ['WordPress', 'Avada', 'Custom Theme'],
    featured: true,
  },
  {
    id: 2,
    title: 'Amosys',
    slug: 'amosys',
    category: 'Business Website',
    image: '/portfolio/amosys-portfolio.jpg',
    mobileImage: '/portfolio/amosys-mobile.png',
    description:
      'Modern business website for a technology solutions company in Malaysia. Fast, clean and fully responsive.',
    url: 'https://www.amosys.com.my/',
    technologies: ['Custom Design', 'ASP.net', 'Animation'],
    featured: true,
  },
  {
    id: 3,
    title: 'Durera Holdings',
    slug: 'durera-holdings',
    category: 'Corporate Website',
    image: '/portfolio/durera-portfolio.jpg',
    mobileImage: '/portfolio/dureraholding-mobile.png',
    description:
      'Elegant corporate website for a holding company. Designed to communicate professionalism and trust.',
    url: 'https://www.dureraholdings.com/',
    technologies: ['WordPress', 'Avada', 'Elementor Pro'],
    featured: true,
  },
  {
    id: 4,
    title: 'Lim Wong & Co',
    slug: 'lim-wong-co',
    category: 'Professional Services',
    image: '/portfolio/limwongco-portfolio.png',
    mobileImage: '/portfolio/limwongco-mobile.png',
    description:
      'Clean and professional website for a chartered accounting firm in Malaysia. Builds credibility and drives enquiries.',
    url: 'https://limbrother.com/',
    technologies: ['WordPress', 'Custom Theme', 'SEO'],
    featured: true,
  },
  {
    id: 5,
    title: 'MyDMA',
    slug: 'mydma',
    category: 'Digital Marketing',
    image: '/portfolio/mydma-portfolio.jpg',
    mobileImage: '/portfolio/mydma-mobile.png',
    description:
      'Dynamic website for a digital marketing agency. Conversion-focused layout with lead generation forms.',
    url: 'https://my-dma.org.my/',
    technologies: ['WordPress', 'Custom Design', 'Lead Generation'],
    featured: true,
  },
  {
    id: 6,
    title: 'Uptown Kiosk',
    slug: 'uptown-kiosk',
    category: 'E-Commerce',
    image: '/portfolio/uptownkiosk-portfolio.png',
    mobileImage: '/portfolio/uptownkiosk-mobile.png',
    description:
      'E-commerce website for a retail kiosk business in Malaysia. Seamless shopping experience across all devices.',
    url: 'https://web.uptownkiosk.com/',
    technologies: ['WordPress', 'Custom Design'],
  },
  {
    id: 7,
    title: 'Vendfun',
    slug: 'vendfun',
    category: 'Marketplace Platform',
    image: '/portfolio/vendfun-portfolio.jpg',
    mobileImage: '/portfolio/vendfun-mobile.png',
    description:
      'Online marketplace platform for vending machine solutions in Malaysia. Full-stack development with custom features.',
    url: 'https://www.vendfun.com/',
    technologies: ['WordPress', 'Custom Design', 'Marketplace Features'],
  },
]
