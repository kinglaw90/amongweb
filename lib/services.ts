import { PRICE } from '@/lib/pricing'

export interface ServiceFaq {
  q: string
  a: string
}

export interface Service {
  id: number
  slug: string
  icon: string
  title: string
  description: string
  price: string
  priceNote?: string
  features: string[]
  popular?: boolean
  cta: string
  ctaLink: string
  // Individual page SEO & content
  metaTitle: string
  metaDescription: string
  heroHeadline: string
  heroSubheadline: string
  longDescription: string
  image: string
  idealFor: string[]
  faqs: ServiceFaq[]
}

export const services: Service[] = [
  {
    id: 1,
    slug: 'landing-page',
    icon: 'fi-rr-rocket',
    title: 'Landing Page',
    description:
      'A focused single-page website built to convert visitors into leads. Perfect for promotions, new products, or getting your business online fast with a professional presence.',
    price: PRICE.landingPage.fromLabel,
    priceNote: 'Most popular',
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
    metaTitle: 'Landing Page Design Malaysia – From RM 599 | Among Web',
    metaDescription:
      'Professional landing page design in Malaysia starting from RM 599. SEO-optimized, mobile-first, and delivered in 3 days. Get more leads for your business now.',
    heroHeadline: 'Landing Page Design That Converts Visitors Into Leads',
    heroSubheadline:
      'A high-performance, single-page website crafted specifically to turn traffic into real enquiries — built and delivered in just 3 days.',
    longDescription:
      'Your landing page is often the first impression a potential customer has of your business. We design focused, conversion-optimized landing pages that load fast, look professional on every device, and are structured to rank on Google. Whether you\'re running ads, promoting a product, or simply need to get your business online quickly, our landing page service gives you everything you need without the long wait.',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=1600&q=85&auto=format&fit=crop',
    idealFor: [
      'New businesses getting online fast',
      'Ad campaigns (Google, Meta, TikTok)',
      'Product or service launches',
      'Event promotions & sign-ups',
      'Local businesses building credibility',
    ],
    faqs: [
      { q: 'How fast is the landing page delivered?', a: 'We deliver landing pages within 3 business days after receiving your content, logo, and brief.' },
      { q: 'What do I need to provide?', a: 'Your business name, logo, preferred colors, and the content (text and images you want). We can assist with copywriting for an additional fee.' },
      { q: 'Is the landing page SEO-optimized?', a: 'Yes. Every landing page we build follows on-page SEO best practices including proper heading structure, meta tags, fast load times, and Google Search Console setup.' },
      { q: 'Can I link a WhatsApp button?', a: 'Absolutely. WhatsApp integration is included by default so visitors can contact you instantly.' },
      { q: 'Can I upgrade to a multi-page site later?', a: 'Yes. We can expand your landing page into a full company website at any time.' },
    ],
  },
  {
    id: 2,
    slug: 'company-website',
    icon: 'fi-rr-building',
    title: 'Company Website',
    description:
      'A complete multi-page website that tells your brand story, showcases your services, and builds trust with potential customers. Designed to rank on Google and generate leads.',
    price: PRICE.companyWebsite.fromLabel,
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
    metaTitle: 'Company Website Design Malaysia – From RM 1,499 | Among Web',
    metaDescription:
      'Get a professional multi-page company website designed in Malaysia from RM 1,499. Includes About, Services, Portfolio & Blog. SEO-ready and delivered in 7 days.',
    heroHeadline: 'A Professional Company Website That Ranks on Google',
    heroSubheadline:
      'Multi-page websites designed to build trust, tell your brand story, and generate a steady stream of leads from search.',
    longDescription:
      'A company website is your most powerful digital asset. It\'s where potential customers assess your credibility, read about your services, and decide to contact you. We build complete, multi-page websites with every element designed to attract Google traffic and convert visitors into paying customers. From a compelling About page to a services section structured for SEO, every page has a clear purpose.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=85&auto=format&fit=crop',
    idealFor: [
      'SMEs needing a professional web presence',
      'Service-based businesses',
      'Agencies and consultancies',
      'Professional service providers (lawyers, doctors, accountants)',
      'Startups establishing credibility',
    ],
    faqs: [
      { q: 'How many pages are included?', a: 'Our company website package includes 5–7 custom pages: Home, About, Services, Portfolio, Blog, Contact, and one additional page of your choice.' },
      { q: 'Can I add a blog?', a: 'Yes. A blog or news section is included. You can publish articles yourself if a CMS is integrated, or we can manage it for you.' },
      { q: 'How long does it take?', a: 'Company websites are typically completed within 7 business days after content is received.' },
      { q: 'Will it rank on Google?', a: 'We set up full on-page SEO: title tags, meta descriptions, heading structure, schema markup, image optimization, and Google Search Console submission.' },
      { q: 'Is it mobile-friendly?', a: 'Yes. Every site is built mobile-first and tested across phones, tablets, and desktops.' },
    ],
  },
  {
    id: 3,
    slug: 'ecommerce-store',
    icon: 'fi-rr-bags-shopping',
    title: 'E-Commerce Store',
    description:
      'A fully functional online store that lets your customers browse, order, and pay — 24/7. Integrated with Malaysian payment gateways and built to scale with your business.',
    price: PRICE.ecommerce.fromLabel,
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
    metaTitle: 'E-Commerce Website Malaysia – Online Store Design | Among Web',
    metaDescription:
      'Launch your online store in Malaysia with FPX, credit card & e-wallet payments. Unlimited products, order management, and full SEO. From RM 2,999.',
    heroHeadline: 'Your Own Online Store — Open 24/7, Ready to Scale',
    heroSubheadline:
      'A fully functional e-commerce website with Malaysian payment gateways, product management, and built-in SEO to drive organic traffic.',
    longDescription:
      'Selling online in Malaysia requires more than just a pretty store. It needs to handle FPX, credit cards, and e-wallets reliably, manage inventory without headaches, and show up on Google when customers search for your products. We build e-commerce stores that are fast, secure, and designed to drive both organic and paid traffic. From a boutique clothing shop to a wholesale supplier, we\'ve got the architecture to support your growth.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1600&q=85&auto=format&fit=crop',
    idealFor: [
      'Retailers moving online',
      'F&B businesses doing delivery',
      'Fashion & apparel brands',
      'Health & beauty product sellers',
      'Wholesale & B2B suppliers',
    ],
    faqs: [
      { q: 'Which payment gateways do you support?', a: 'We integrate with popular Malaysian gateways including Billplz, iPay88, Stripe, and PayHere — supporting FPX, credit/debit cards, Touch \'n Go, GrabPay, and more.' },
      { q: 'How many products can I list?', a: 'Unlimited. There is no cap on the number of products in your catalogue.' },
      { q: 'Can customers apply discount codes?', a: 'Yes. Discount codes, percentage discounts, and promotional pricing are all supported.' },
      { q: 'How long does the build take?', a: 'E-commerce stores are delivered within 14 business days after receiving product details, design preferences, and content.' },
      { q: 'Is the store mobile-friendly?', a: 'Yes. The shopping experience is fully optimized for mobile, which is where the majority of Malaysian shoppers browse and buy.' },
    ],
  },
  {
    id: 4,
    slug: 'cms-website',
    icon: 'fi-rr-browser',
    title: 'CMS Website',
    description:
      'A website with a built-in content management system so you can update text, images, blog posts, and pages yourself — no coding knowledge required.',
    price: PRICE.cmsWebsite.fromLabel,
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
    metaTitle: 'CMS Website Design Malaysia – Manage Your Own Content | Among Web',
    metaDescription:
      'Get a CMS website in Malaysia that lets you update content yourself — no coding needed. WordPress or headless CMS, SEO-optimized. From RM 1,999.',
    heroHeadline: 'A Website You Control — No Developer Needed',
    heroSubheadline:
      'Update pages, publish blog posts, and manage your media yourself through a clean admin dashboard. Built for content-heavy businesses.',
    longDescription:
      'Running a content-heavy website shouldn\'t mean paying a developer for every small update. A CMS website gives you (and your team) a simple dashboard to add blog posts, edit service descriptions, update prices, and upload images — all without touching a single line of code. We build on proven platforms (WordPress or headless CMS) and customize them to match your brand perfectly, while keeping everything SEO-friendly out of the box.',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=1600&q=85&auto=format&fit=crop',
    idealFor: [
      'Property agencies',
      'Restaurants & F&B businesses',
      'Schools & training centres',
      'News & media portals',
      'Any business that updates content frequently',
    ],
    faqs: [
      { q: 'What CMS platforms do you use?', a: 'We primarily use WordPress for most CMS projects. For larger or more complex requirements, we can use headless CMS solutions like Sanity or Contentful.' },
      { q: 'Do I need technical knowledge to use it?', a: 'No. We build intuitive admin panels and can provide a short training walkthrough so you feel confident managing your content from day one.' },
      { q: 'Can multiple staff members access the dashboard?', a: 'Yes. We configure role-based access so different team members (e.g., editors, admins) have the appropriate permissions.' },
      { q: 'Is a CMS website slower than a static site?', a: 'Not with proper optimization. We configure caching, image compression, and CDN delivery to ensure fast load times regardless of CMS.' },
      { q: 'How long does it take to build?', a: 'CMS websites are typically delivered within 7–10 business days.' },
    ],
  },
  {
    id: 5,
    slug: 'booking-system',
    icon: 'fi-rr-calendar',
    title: 'Booking System',
    description:
      'Let customers book appointments, classes, or services directly from your website. Automated confirmations, reminders, and calendar sync — reduce no-shows and save admin time.',
    price: PRICE.bookingSystem.fromLabel,
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
    metaTitle: 'Online Booking System Malaysia – Appointment Scheduling | Among Web',
    metaDescription:
      'Custom online booking system for Malaysian businesses. Automated reminders, Google Calendar sync, and payment at booking. Reduce no-shows from day one.',
    heroHeadline: 'Let Customers Book Themselves — 24/7, No Admin Needed',
    heroSubheadline:
      'An online booking system that eliminates scheduling back-and-forth, sends automatic reminders, and collects payments at the point of booking.',
    longDescription:
      'Every hour your staff spends managing appointments over WhatsApp is an hour not spent serving customers. A custom booking system lets clients choose their slot, receive instant confirmation, and get automatic reminders before their appointment — drastically reducing no-shows. We build mobile-friendly booking flows tailored to your service: clinics, salons, gyms, tuition centres, and more. Payments can be collected upfront, and your team\'s calendar stays synced in real time.',
    image: 'https://images.unsplash.com/photo-1506784365847-bbad939e9335?w=1600&q=85&auto=format&fit=crop',
    idealFor: [
      'Clinics & wellness centres',
      'Beauty salons & spas',
      'Tuition & coaching centres',
      'Fitness studios & gyms',
      'Any appointment-based business',
    ],
    faqs: [
      { q: 'Can customers book via WhatsApp?', a: 'Yes. We can integrate a WhatsApp confirmation flow alongside the online booking system.' },
      { q: 'Will reminders be sent automatically?', a: 'Yes. Automated email and WhatsApp reminders are sent before each appointment to reduce no-shows.' },
      { q: 'Can I manage multiple staff or locations?', a: 'Yes. The system supports multiple staff members, service types, and even multiple branch locations.' },
      { q: 'Can I collect payment when someone books?', a: 'Yes. We integrate with Malaysian payment gateways so you can require a deposit or full payment at the time of booking.' },
      { q: 'Does it sync with Google Calendar?', a: 'Yes. Two-way Google Calendar sync keeps your team\'s schedule up to date automatically.' },
    ],
  },
  {
    id: 6,
    slug: 'crm-system',
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
    metaTitle: 'Custom CRM System Malaysia – Lead & Sales Management | Among Web',
    metaDescription:
      'Build a custom CRM for your Malaysian business. Manage leads, track your sales pipeline, log WhatsApp interactions, and never miss a follow-up.',
    heroHeadline: 'Stop Losing Leads in WhatsApp Chats and Spreadsheets',
    heroSubheadline:
      'A custom CRM built to fit your sales process — pipeline tracking, follow-up reminders, and full visibility over every lead.',
    longDescription:
      'Most Malaysian SMEs manage their leads across a chaotic mix of WhatsApp groups, Excel sheets, and memory. A CRM built for your specific workflow changes that. Every lead gets logged, every follow-up gets scheduled, and every team member knows exactly where each deal stands. We design and build custom CRM systems that match your sales process — not a generic off-the-shelf tool that you have to work around.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=85&auto=format&fit=crop',
    idealFor: [
      'Property agents & agencies',
      'Insurance & financial services',
      'B2B sales teams',
      'Education & recruitment firms',
      'Any business with a sales pipeline',
    ],
    faqs: [
      { q: 'Why not just use an off-the-shelf CRM like HubSpot?', a: 'Off-the-shelf CRMs are generic and can be expensive as you scale. A custom CRM is built exactly for your process, your team\'s language, and your business rules — with no monthly seat fees.' },
      { q: 'Can it integrate with WhatsApp?', a: 'Yes. We can integrate WhatsApp Business API so messages, contact details, and conversation history are captured directly in the CRM.' },
      { q: 'Can I see sales reports and analytics?', a: 'Yes. Dashboard reports covering lead volume, conversion rates, pipeline value, and team performance are built in.' },
      { q: 'How is pricing determined?', a: 'CRM pricing depends on the number of features, integrations, and team size. We provide a custom quote after a free consultation.' },
      { q: 'Can my team access it on mobile?', a: 'Yes. CRM systems we build are fully responsive and work across mobile, tablet, and desktop browsers.' },
    ],
  },
  {
    id: 7,
    slug: 'web-application',
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
    metaTitle: 'Custom Web Application Development Malaysia | Among Web',
    metaDescription:
      'Custom web application development in Malaysia. SaaS platforms, member portals, internal tools, and marketplace builds. Scalable and built to your exact specs.',
    heroHeadline: 'Custom Web Applications Built to Your Exact Specifications',
    heroSubheadline:
      'From SaaS platforms to internal tools and marketplaces — we architect, design, and build scalable web applications that solve real business problems.',
    longDescription:
      'Some business challenges can\'t be solved with a standard website. When you need a member portal, a booking marketplace, a SaaS product, or a custom internal tool — you need a web application. We take your requirements from concept through architecture, design, development, and deployment. Our applications are built with scalable cloud infrastructure, secure authentication, and a clean admin panel your team can actually use.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&q=85&auto=format&fit=crop',
    idealFor: [
      'SaaS startups building their MVP',
      'Companies needing internal tools',
      'Marketplace or directory platforms',
      'Member portal & subscription platforms',
      'Businesses automating complex workflows',
    ],
    faqs: [
      { q: 'What types of web applications do you build?', a: 'SaaS products, internal dashboards, member portals, marketplace platforms, booking systems with complex logic, and custom business automation tools.' },
      { q: 'How do you handle user authentication?', a: 'We implement secure authentication including email/password, OAuth (Google, Facebook), and role-based access control.' },
      { q: 'What tech stack do you use?', a: 'We build with Next.js, React, Node.js, and PostgreSQL/MySQL depending on the requirements. Infrastructure is deployed on scalable cloud providers.' },
      { q: 'How is pricing determined?', a: 'Web application pricing is based on scope, feature complexity, and timeline. We provide a detailed quote following a free discovery call.' },
      { q: 'Do you provide ongoing support after launch?', a: 'Yes. We offer monthly support and maintenance packages to cover updates, bug fixes, and new feature development.' },
    ],
  },
]
