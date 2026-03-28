import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 – Page Not Found',
  description: 'The page you are looking for could not be found.',
  robots: { index: false },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 pt-16">
      <div className="text-center px-4">
        <div className="text-8xl font-extrabold text-blue-100 mb-4 select-none" aria-hidden="true">
          404
        </div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white mb-3">Page Not Found</h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-sm mx-auto">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-primary">
            Go Back Home
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}
