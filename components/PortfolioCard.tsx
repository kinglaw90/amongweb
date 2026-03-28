import Image from 'next/image'
import Link from 'next/link'
import { PortfolioItem } from '@/lib/portfolio'

interface PortfolioCardProps {
  item: PortfolioItem
  priority?: boolean
}

export default function PortfolioCard({ item, priority = false }: PortfolioCardProps) {
  return (
    <div className="group relative bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative aspect-video overflow-hidden bg-slate-100">
        <Image
          src={item.image}
          alt={`${item.title} website design`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={priority}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* View project button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-white text-slate-900 font-semibold text-sm px-5 py-2.5 rounded-full shadow-lg">
            View Project
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug">{item.title}</h3>
          <span className="shrink-0 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium px-2.5 py-1 rounded-full">
            {item.category}
          </span>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 line-clamp-2">
          {item.description}
        </p>
        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5">
          {item.technologies.map((tech) => (
            <span
              key={tech}
              className="bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-400 text-xs font-medium px-2 py-0.5 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
