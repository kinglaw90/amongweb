import Image from 'next/image'
import Link from 'next/link'
import { BlogPost } from '@/lib/blog'

interface BlogCardProps {
  post: BlogPost
  priority?: boolean
}

export default function BlogCard({ post, priority = false }: BlogCardProps) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-MY', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })

  return (
    <article className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-lg transition-all duration-200 overflow-hidden hover:-translate-y-1">
      {/* Image placeholder — TODO: replace with <Image src={post.image} ... /> when images are ready */}
      <div className="relative aspect-[16/9] overflow-hidden bg-gradient-to-br from-blue-50 via-blue-100 to-violet-100 dark:from-slate-800 dark:via-slate-800 dark:to-slate-700">
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: 'linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(to right, rgba(99,102,241,0.06) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        {/* Center icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-14 h-14 rounded-2xl bg-white/60 dark:bg-white/10 flex items-center justify-center shadow-sm">
            <i
              className={`text-2xl text-blue-500 dark:text-blue-400 ${
                post.category === 'Web Design' ? 'fi fi-rr-palette' :
                post.category === 'Business'   ? 'fi fi-rr-briefcase' :
                post.category === 'Tips'       ? 'fi fi-rr-bulb' :
                'fi fi-rr-document'
              }`}
              aria-hidden="true"
            />
          </div>
        </div>
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            {post.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-3 text-xs text-slate-400 dark:text-slate-500 mb-3">
          <time dateTime={post.date}>{formattedDate}</time>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>

        <h2 className="font-bold text-slate-900 dark:text-white text-base leading-snug mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
          <Link href={`/blog/${post.slug}`} className="hover:underline underline-offset-2">
            {post.title}
          </Link>
        </h2>

        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-5 line-clamp-3">
          {post.excerpt}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-1.5 text-blue-600 hover:text-blue-700 text-sm font-semibold transition-colors"
        >
          Read Article
          <i className="fi fi-rr-arrow-right text-base" aria-hidden="true" />
        </Link>
      </div>
    </article>
  )
}
