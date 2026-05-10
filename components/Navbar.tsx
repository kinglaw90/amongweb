'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import { WHATSAPP_URL } from '@/lib/constants'
import ThemeToggle from '@/components/ThemeToggle'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

const serviceLinks = [
  { label: 'Landing Page', href: '/services/landing-page', icon: 'fi-rr-rocket', desc: 'Convert visitors into leads, fast.' },
  { label: 'Company Website', href: '/services/company-website', icon: 'fi-rr-building', desc: 'Your full brand story, online.' },
  { label: 'E-Commerce Store', href: '/services/ecommerce-store', icon: 'fi-rr-bags-shopping', desc: 'Sell 24/7 with zero friction.' },
  { label: 'CMS Website', href: '/services/cms-website', icon: 'fi-rr-browser', desc: 'Manage your content yourself.' },
  { label: 'Booking System', href: '/services/booking-system', icon: 'fi-rr-calendar', desc: 'Let customers schedule themselves.' },
  { label: 'CRM System', href: '/services/crm-system', icon: 'fi-rr-users', desc: 'Never lose a lead again.' },
  { label: 'Web Application', href: '/services/web-application', icon: 'fi-rr-laptop-code', desc: 'Custom-built to your exact specs.' },
]

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
)

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  const pathname = usePathname()
  const isHome = pathname === '/'
  const isTransparent = isHome && !isScrolled
  const isServicesActive = pathname.startsWith('/services')

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setIsServicesOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false)
    setIsMobileServicesOpen(false)
  }, [pathname])

  return (
    <>
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? 'bg-transparent border-b border-transparent'
          : 'bg-white/95 dark:bg-[#03020f]/95 backdrop-blur-md shadow-sm border-b border-slate-100 dark:border-white/[0.06]'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <Image
              src={isTransparent ? '/logo.svg' : '/logo-light.svg'}
              alt="Among Web logo"
              width={120}
              height={36}
              className="h-8 w-auto object-contain dark:hidden"
              priority
            />
            <Image
              src="/logo.svg"
              alt="Among Web logo"
              width={120}
              height={36}
              className="h-8 w-auto object-contain hidden dark:block"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {/* Home */}
            <Link
              href="/"
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                isTransparent
                  ? 'text-white/70 hover:text-white hover:bg-white/10'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              Home
            </Link>

            {/* Services dropdown */}
            <div ref={servicesRef} className="relative">
              <button
                onClick={() => setIsServicesOpen((v) => !v)}
                className={`inline-flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isTransparent
                    ? isServicesActive
                      ? 'text-white bg-white/10'
                      : 'text-white/70 hover:text-white hover:bg-white/10'
                    : isServicesActive
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
                aria-expanded={isServicesOpen}
                aria-haspopup="true"
              >
                Services
                <i
                  className={`fi fi-rr-angle-small-down text-xs transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>

              {isServicesOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[560px] bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800 p-4 z-50">
                  {/* Header row */}
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                    <p className="text-xs font-semibold tracking-widest uppercase text-slate-400 dark:text-slate-500">
                      Our Services
                    </p>
                    <Link
                      href="/services"
                      onClick={() => setIsServicesOpen(false)}
                      className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline underline-offset-2 inline-flex items-center gap-1"
                    >
                      View all
                      <i className="fi fi-rr-arrow-right text-xs" aria-hidden="true" />
                    </Link>
                  </div>
                  <div className="grid grid-cols-2 gap-1">
                    {serviceLinks.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        onClick={() => setIsServicesOpen(false)}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group"
                      >
                        <span className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 dark:group-hover:bg-blue-950 transition-colors" aria-hidden="true">
                          <i className={`fi ${s.icon} text-sm text-blue-600 dark:text-blue-400`} />
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-slate-800 dark:text-slate-200 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                            {s.label}
                          </p>
                          <p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5 leading-snug">
                            {s.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Remaining links */}
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                  isTransparent
                    ? 'text-white/70 hover:text-white hover:bg-white/10'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <WhatsAppIcon />
              Get Free Quote
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-1">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isTransparent
                  ? 'text-white/60 hover:bg-white/10'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? (
                <i className="fi fi-rr-cross text-2xl" aria-hidden="true" />
              ) : (
                <i className="fi fi-rr-menu-burger text-2xl" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

      </nav>
    </header>

    {/* Backdrop */}
    <div
      className={`fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
        isMobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      onClick={() => setIsMobileOpen(false)}
      aria-hidden="true"
    />

    {/* Mobile Drawer */}
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className={`fixed inset-y-0 right-0 z-50 w-72 sm:w-80 bg-white dark:bg-[#03020f] flex flex-col shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${
        isMobileOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      {/* Drawer header */}
      <div className="flex items-center justify-between px-5 h-16 border-b border-slate-100 dark:border-slate-800 shrink-0">
        <span className="text-sm font-semibold text-slate-900 dark:text-white tracking-wide">Menu</span>
        <button
          onClick={() => setIsMobileOpen(false)}
          className="p-2 rounded-lg text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close menu"
        >
          <i className="fi fi-rr-cross text-base" aria-hidden="true" />
        </button>
      </div>

      {/* Scrollable nav links */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-1">
        <Link
          href="/"
          className="block px-4 py-2.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 rounded-lg font-medium transition-colors"
        >
          Home
        </Link>

        {/* Services accordion */}
        <div>
          <button
            onClick={() => setIsMobileServicesOpen((v) => !v)}
            className="w-full flex items-center justify-between px-4 py-2.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 rounded-lg font-medium transition-colors"
            aria-expanded={isMobileServicesOpen}
          >
            Services
            <i
              className={`fi fi-rr-angle-small-down text-sm transition-transform duration-200 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
              aria-hidden="true"
            />
          </button>
          {isMobileServicesOpen && (
            <div className="mt-1 ml-4 pl-3 border-l-2 border-blue-100 dark:border-blue-900 space-y-1">
              <Link
                href="/services"
                className="block px-3 py-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline underline-offset-2"
              >
                View all services →
              </Link>
              {serviceLinks.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="flex items-center gap-2.5 px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 rounded-lg transition-colors"
                >
                  <i className={`fi ${s.icon} text-sm text-blue-500`} aria-hidden="true" />
                  {s.label}
                </Link>
              ))}
            </div>
          )}
        </div>

        {navLinks.slice(1).map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block px-4 py-2.5 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950 rounded-lg font-medium transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* WhatsApp CTA pinned to bottom */}
      <div className="px-5 py-5 border-t border-slate-100 dark:border-slate-800 shrink-0">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-3 rounded-full transition-colors w-full"
        >
          <WhatsAppIcon />
          Get Free Quote on WhatsApp
        </a>
      </div>
    </div>
    </>
  )
}
