import TestimonialCard from '@/components/TestimonialCard'

const testimonials = [
  {
    name: 'Ahmad Fauzi',
    role: 'Owner',
    company: 'Alfa Hydraulic Sdn Bhd',
    content:
      'Among Web delivered our company website in just 5 days. The design is clean, professional, and exactly what we needed. Our website now appears on the first page of Google for our main keywords. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Sarah Lim',
    role: 'Director',
    company: 'Lim Wong & Co',
    content:
      'We needed a professional accounting firm website that builds trust with clients. Among Web nailed it. Responsive, fast, and SEO-ready. Our enquiries through the website have doubled since launch.',
    rating: 5,
  },
  {
    name: 'Raj Kumar',
    role: 'Founder',
    company: 'MyDMA Marketing',
    content:
      'The landing page they built for RM99 was better than what we paid RM2,000 for before. Fast delivery, good communication via WhatsApp, and the design is conversion-focused. Will definitely come back for more projects.',
    rating: 5,
  },
  {
    name: 'Nurul Hidayah',
    role: 'CEO',
    company: 'Vendfun Sdn Bhd',
    content:
      'Among Web built our entire marketplace platform. Technically solid, clean UI, and they guided us through every step. They understood our vision and executed it perfectly. A pleasure to work with.',
    rating: 5,
  },
  {
    name: 'Michael Tan',
    role: 'Manager',
    company: 'Uptown Kiosk',
    content:
      'Our e-commerce site went live in 2 weeks. The checkout process works smoothly and our sales have increased 40% since the new website launched. The team is responsive and professional.',
    rating: 5,
  },
  {
    name: 'Adibah Yusof',
    role: 'Business Owner',
    company: 'Home Bakery KL',
    content:
      'Got my RM99 landing page in 3 days! Now I get WhatsApp enquiries through my website every day. Best investment I made for my home bakery business. Simple, affordable, and effective.',
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="section-tag">
            Client Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mb-4">
            What Malaysian Business Owners Say
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Don&apos;t take our word for it — here&apos;s what our clients across Malaysia have to say.
          </p>
        </div>

        {/* Rating summary */}
        <div className="flex flex-col items-center mb-12">
          <div className="flex gap-1 mb-2" aria-label="5 out of 5 stars">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-6 h-6 text-amber-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
          </div>
          <p className="text-slate-600 dark:text-slate-400 font-medium text-sm">
            <span className="text-slate-900 dark:text-white font-bold">5.0 / 5.0</span> — Based on 50+ client reviews
          </p>
        </div>

        {/* Testimonial grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}
