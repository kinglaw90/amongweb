export interface Service {
  id: number
  icon: string
  title: string
  description: string
  price: string
  priceNote?: string
  features: string[]
  popular?: boolean
  cta: string
  ctaLink: string
}

export const services: Service[] = [
  {
    id: 1,
    icon: 'fi-rr-rocket',
    title: 'Landing Page',
    description:
      'A focused single-page website built to convert visitors into leads. Perfect for promotions, new products, or getting your business online fast with a professional presence.',
    price: 'From RM99',
    priceNote: 'Best value',
    features: [
      '1-page responsive design',
      'WhatsApp & contact integration',
      'Google Maps integration',
      'SEO-optimized structure',
      'Mobile-first layout',
      'Fast 3-day delivery',
    ],
    popular: true,
    cta: 'Get Started',
    ctaLink: '/contact',
  },
  {
    id: 2,
    icon: 'fi-rr-building',
    title: 'Company Website',
    description:
      'A complete multi-page website that tells your brand story, showcases your services, and builds trust with potential customers. Designed to rank on Google and generate leads.',
    price: 'From RM499',
    features: [
      '5–7 fully custom pages',
      'About, Services & Portfolio pages',
      'Blog / news section',
      'Contact form + WhatsApp',
      'Full on-page SEO setup',
      '7-day delivery',
    ],
    cta: 'Get Started',
    ctaLink: '/contact',
  },
  {
    id: 3,
    icon: 'fi-rr-bags-shopping',
    title: 'E-Commerce Store',
    description:
      'A fully functional online store that lets your customers browse, order, and pay — 24/7. Integrated with Malaysian payment gateways and built to scale with your business.',
    price: 'From RM999',
    features: [
      'Unlimited product catalogue',
      'FPX, credit card & e-wallet payments',
      'Order & inventory management',
      'Discount codes & promotions',
      'Full SEO & analytics',
      '14-day delivery',
    ],
    cta: 'Get Started',
    ctaLink: '/contact',
  },
  {
    id: 4,
    icon: 'fi-rr-browser',
    title: 'CMS Website',
    description:
      'A website with a built-in content management system so you can update text, images, blog posts, and pages yourself — no coding knowledge required.',
    price: 'From RM799',
    features: [
      'Easy-to-use admin dashboard',
      'Add & edit pages without coding',
      'Blog & news management',
      'Media library for images',
      'User role management',
      'SEO-friendly structure',
    ],
    cta: 'Get Started',
    ctaLink: '/contact',
  },
  {
    id: 5,
    icon: 'fi-rr-calendar',
    title: 'Booking System',
    description:
      'Let customers book appointments, classes, or services directly from your website. Automated confirmations, reminders, and calendar sync — reduce no-shows and save admin time.',
    price: 'From RM1,299',
    features: [
      'Online appointment scheduling',
      'Automated email & WhatsApp reminders',
      'Google Calendar sync',
      'Staff & resource management',
      'Payment collection at booking',
      'Mobile-friendly booking flow',
    ],
    cta: 'Get Started',
    ctaLink: '/contact',
  },
  {
    id: 6,
    icon: 'fi-rr-users',
    title: 'CRM System',
    description:
      'A custom CRM to manage your leads, customers, and follow-ups in one place. Stop losing prospects in WhatsApp chats and spreadsheets — build a pipeline that works for you.',
    price: 'Custom Quote',
    features: [
      'Lead & contact management',
      'Sales pipeline tracking',
      'WhatsApp & email integration',
      'Follow-up reminders & tasks',
      'Reports & conversion analytics',
      'Role-based access control',
    ],
    cta: 'Contact Us',
    ctaLink: '/contact',
  },
  {
    id: 7,
    icon: 'fi-rr-laptop-code',
    title: 'Web Application',
    description:
      'Fully custom web platforms built to your exact specifications. SaaS products, internal tools, member portals, marketplace platforms — if you can describe it, we can build it.',
    price: 'Custom Quote',
    features: [
      'Fully custom features & workflows',
      'User authentication & roles',
      'Database & API integration',
      'Scalable cloud architecture',
      'Admin dashboard & reporting',
      'Ongoing support & maintenance',
    ],
    cta: 'Contact Us',
    ctaLink: '/contact',
  },
]
