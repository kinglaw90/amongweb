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
      <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/9] overflow-hidden" tabIndex={-1} aria-hidden="true">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
            {post.category}
          </span>
        </div>
      </Link>

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
