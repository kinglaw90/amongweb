import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import BlogCard from '@/components/BlogCard'
import ContactCTA from '@/components/ContactCTA'
import { blogPosts, getBlogPost, getRelatedPosts } from '@/lib/blog'
import { SITE_URL, WHATSAPP_URL, SITE_NAME } from '@/lib/constants'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.date,
      authors: [SITE_NAME],
      url: `${SITE_URL}/blog/${post.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const related = getRelatedPosts(post.slug, 3)

  const formattedDate = new Date(post.date).toLocaleDateString('en-MY', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
  }

  // Convert markdown-like content to paragraphs / headings
  const renderContent = (content: string) => {
    const lines = content.split('\n')
    return lines.map((line, i) => {
      if (line.startsWith('## ')) {
        return <h2 key={i} className="text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4">{line.replace('## ', '')}</h2>
      }
      if (line.startsWith('### ')) {
        return <h3 key={i} className="text-xl font-semibold text-slate-900 dark:text-white mt-8 mb-3">{line.replace('### ', '')}</h3>
      }
      if (line.startsWith('**') && line.endsWith('**')) {
        return <p key={i} className="font-semibold text-slate-900 dark:text-white mt-4">{line.replace(/\*\*/g, '')}</p>
      }
      if (line.startsWith('- ')) {
        return <li key={i} className="text-slate-700 dark:text-slate-300 ml-4 list-disc">{line.replace('- ', '')}</li>
      }
      if (line.startsWith('✅ ') || line.startsWith('🚩 ')) {
        return <p key={i} className="text-slate-700 dark:text-slate-300 my-1">{line}</p>
      }
      if (line.trim() === '') {
        return <div key={i} className="h-2" />
      }
      if (line.startsWith('| ')) {
        // Skip markdown table rows
        return null
      }
      return (
        <p key={i} className="text-slate-700 dark:text-slate-300 leading-relaxed">
          {line}
        </p>
      )
    })
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Article Hero */}
      <div className="relative overflow-hidden bg-slate-950 pt-32 pb-24">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src={post.image}
            alt=""
            fill
            className="object-cover opacity-20"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/80 to-slate-950" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-slate-400 mb-6">
            <Link href="/" className="hover:text-slate-300 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-slate-300 transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-slate-500 line-clamp-1">{post.title}</span>
          </nav>

          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-blue-400 mb-5">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold text-xs">
                AW
              </div>
              <span>{post.author}</span>
            </div>
            <span>·</span>
            <time dateTime={post.date}>{formattedDate}</time>
            <span>·</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <section className="py-12 bg-white dark:bg-slate-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
            {/* Main content */}
            <article className="prose-content max-w-none">
              {renderContent(post.content)}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-12 pt-8 border-t border-slate-100 dark:border-slate-800">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-blue-600 to-violet-600 rounded-2xl p-6 text-white sticky top-24">
                <h3 className="font-bold text-lg mb-2">Ready to get started?</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">
                  Get a professional website for your Malaysian business starting from RM 599.
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-green-500 hover:bg-green-400 text-white font-bold py-3 rounded-xl transition-colors text-sm mb-3"
                >
                  Chat on WhatsApp
                </a>
                <Link
                  href="/pricing"
                  className="block w-full text-center bg-white/10 hover:bg-white/20 text-white font-semibold py-3 rounded-xl transition-colors text-sm"
                >
                  View Pricing
                </Link>
              </div>

              {/* Related posts */}
              {related.length > 0 && (
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white mb-4">Related Articles</h3>
                  <div className="space-y-3">
                    {related.map((p) => (
                      <Link
                        key={p.slug}
                        href={`/blog/${p.slug}`}
                        className="block group"
                      >
                        <div className="text-sm font-medium text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors leading-snug mb-1">
                          {p.title}
                        </div>
                        <div className="text-xs text-slate-400 dark:text-slate-500">{p.readTime}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </aside>
          </div>
        </div>
      </section>

      {/* Related posts section */}
      {related.length > 0 && (
        <section className="py-16 bg-slate-50 dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white mb-8">More Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((p) => (
                <BlogCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactCTA />
    </>
  )
}
