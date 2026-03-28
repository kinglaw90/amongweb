interface TestimonialCardProps {
  name: string
  role: string
  company: string
  content: string
  rating?: number
  avatar?: string
}

export default function TestimonialCard({
  name,
  role,
  company,
  content,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow duration-200 p-7 flex flex-col gap-5">
      {/* Stars */}
      <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
        {Array.from({ length: rating }).map((_, i) => (
          <svg key={i} className="w-4 h-4 text-amber-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed flex-1">
        &ldquo;{content}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-bold text-sm shrink-0">
          {name.charAt(0).toUpperCase()}
        </div>
        <div>
          <div className="font-semibold text-slate-900 dark:text-white text-sm">{name}</div>
          <div className="text-xs text-slate-500 dark:text-slate-400">
            {role}, {company}
          </div>
        </div>
      </div>
    </div>
  )
}
