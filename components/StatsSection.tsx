const stats = [
  { value: '50+', label: 'Projects Delivered', icon: 'fi-rr-rocket' },
  { value: '100%', label: 'Client Satisfaction', icon: 'fi-rr-star' },
  { value: 'RM99', label: 'Starting Price', icon: 'fi-rr-coins' },
  { value: '3 Days', label: 'Avg. Delivery', icon: 'fi-rr-bolt' },
]

export default function StatsSection() {
  return (
    <section className="bg-white dark:bg-slate-950 border-b border-slate-100 dark:border-slate-800" aria-label="Statistics">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-100 dark:divide-slate-800">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center justify-center py-8 px-6 text-center"
            >
              <div className="mb-2 w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950 flex items-center justify-center" aria-hidden="true">
                <i className={`fi ${stat.icon} text-xl text-blue-600 dark:text-blue-400`} />
              </div>
              <div className="text-3xl font-extrabold text-slate-900 dark:text-white mb-1">{stat.value}</div>
              <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
