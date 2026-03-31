import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BlogCard from '@/components/BlogCard'
import ContactCTA from '@/components/ContactCTA'
import { blogPosts } from '@/lib/blog'
import { SITE_URL, WHATSAPP_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Blog – Web Design Tips & Insights for Malaysian Businesses',
  description:
    'Web design tips, SEO guides, and business insights for Malaysian entrepreneurs and SME owners. Learn how to grow your online presence affordably.',
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: 'Blog – Among Web | Web Design Tips for Malaysian Businesses',
    description:
      'Free web design guides, SEO tips, and digital marketing insights for Malaysian business owners.',
    url: `${SITE_URL}/blog`,
  },
}

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  )
  const [featured, ...rest] = sorted

  const blogJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Among Web Blog',
    description: 'Web design tips, SEO guides, and business insights for Malaysian entrepreneurs.',
    url: `${SITE_URL}/blog`,
    publisher: {
      '@type': 'Organization',
      name: 'Among Web',
      url: SITE_URL,
    },
    blogPost: sorted.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.date,
      description: post.excerpt,
    })),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogJsonLd) }} />
      {/* Hero */}
      <div className="relative overflow-hidden bg-slate-950 pt-32 pb-24">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&q=80&auto=format&fit=crop"
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-400 mb-5">
            Blog
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 tracking-tight">
            Web Design Tips for Malaysian Businesses
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Free guides, SEO tips, and insights to help your Malaysian business grow online.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Featured post */}
          {featured && (
            <div className="mb-14">
              <Link
                href={`/blog/${featured.slug}`}
                className="group relative block rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300"
              >
                {/* Background image */}
                <div className="relative aspect-[21/9] md:aspect-[3/1]">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="100vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
                </div>

                {/* Text overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 max-w-3xl">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Latest Article
                    </span>
                    <span className="text-white/60 text-sm">
                      {featured.readTime} ·{' '}
                      {new Date(featured.date).toLocaleDateString('en-MY', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-tight mb-3 group-hover:text-blue-300 transition-colors">
                    {featured.title}
                  </h2>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed line-clamp-2 mb-5">
                    {featured.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-white font-semibold text-sm">
                    Read Article
                    <i className="fi fi-rr-arrow-right text-sm group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </div>
          )}

          {/* Grid of remaining posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post, i) => (
              <BlogCard key={post.id} post={post} priority={i < 3} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900">
        <div className="max-w-xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-3">
            Need a Website for Your Business?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Skip the reading — chat with us directly and get a free quote in minutes.
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            Get a Free Quote on WhatsApp
          </a>
        </div>
      </section>

      <ContactCTA />
    </>
  )
}
