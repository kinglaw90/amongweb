import type { Metadata } from 'next'
import BlogCard from '@/components/BlogCard'
import ContactCTA from '@/components/ContactCTA'
import { blogPosts } from '@/lib/blog'
import { SITE_URL, WHATSAPP_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Blog – Web Design Tips & Insights for Malaysian Businesses',
  description:
    'Web design tips, SEO guides, and business insights for Malaysian entrepreneurs and SME owners. Learn how to grow your online presence affordably.',
  openGraph: {
    title: 'Blog – Among Web | Web Design Tips for Malaysian Businesses',
    description:
      'Free web design guides, SEO tips, and digital marketing insights for Malaysian business owners.',
    url: `${SITE_URL}/blog`,
  },
}

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <div className="page-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="section-tag">Blog</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-5">
            Web Design Tips for Malaysian Businesses
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Free guides, SEO tips, and insights to help your Malaysian business grow online.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Featured post (first item) */}
          {blogPosts.length > 0 && (
            <div className="mb-12">
              <div className="bg-gradient-to-br from-blue-600 to-violet-600 rounded-2xl p-8 md:p-12 text-white">
                <span className="inline-block bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  Featured Article
                </span>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-4 leading-tight max-w-2xl">
                  {blogPosts[0].title}
                </h2>
                <p className="text-blue-100 mb-6 max-w-xl leading-relaxed">
                  {blogPosts[0].excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={`/blog/${blogPosts[0].slug}`}
                    className="inline-flex items-center gap-2 bg-white text-blue-600 font-bold px-6 py-3 rounded-full hover:bg-blue-50 transition-colors text-sm"
                  >
                    Read Article
                    <i className="fi fi-rr-arrow-right text-base" aria-hidden="true" />
                  </a>
                  <span className="text-blue-200 text-sm">
                    {blogPosts[0].readTime} ·{' '}
                    {new Date(blogPosts[0].date).toLocaleDateString('en-MY', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Grid of remaining posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post, i) => (
              <BlogCard key={post.id} post={post} priority={i < 3} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter / CTA */}
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
