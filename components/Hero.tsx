'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { WHATSAPP_URL } from '@/lib/constants'

export default function Hero() {
  const [mouse, setMouse] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const handle = (e: MouseEvent) => {
      setMouse({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    }
    window.addEventListener('mousemove', handle, { passive: true })
    return () => window.removeEventListener('mousemove', handle)
  }, [])

  const px = mouse.x - 0.5
  const py = mouse.y - 0.5

  const glass: React.CSSProperties = {
    background: 'rgba(255,255,255,0.04)',
    backdropFilter: 'blur(18px)',
    WebkitBackdropFilter: 'blur(18px)',
    border: '1px solid rgba(255,255,255,0.08)',
    boxShadow: '0 24px 64px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.07)',
  }

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#03020f' }}
    >
      {/*  BACKGROUND  */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Blue orb & top left */}
        <div
          className="absolute rounded-full"
          style={{
            width: '60vw', height: '60vw', maxWidth: 800, maxHeight: 800,
            top: '-10%', left: '-10%',
            background: 'radial-gradient(circle at 40% 40%, rgba(59,130,246,0.2) 0%, transparent 65%)',
            transform: `translate(${px * -30}px, ${py * -20}px)`,
            transition: 'transform 1s cubic-bezier(0.25,0.46,0.45,0.94)',
          }}
        />
        {/* Violet orb & bottom right */}
        <div
          className="absolute rounded-full"
          style={{
            width: '55vw', height: '55vw', maxWidth: 750, maxHeight: 750,
            bottom: '-15%', right: '-5%',
            background: 'radial-gradient(circle at 60% 60%, rgba(139,92,246,0.18) 0%, transparent 65%)',
            transform: `translate(${px * 28}px, ${py * 18}px)`,
            transition: 'transform 1.2s cubic-bezier(0.25,0.46,0.45,0.94)',
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.022) 1px, transparent 1px)',
            backgroundSize: '72px 72px',
          }}
        />
        {/* Edge fades */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#03020f] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#03020f] to-transparent" />
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#03020f] to-transparent" />
        <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#03020f] to-transparent" />
      </div>

      {/*  SPLIT LAYOUT  */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-28 pb-20 lg:pt-0 lg:pb-0 lg:min-h-screen lg:flex lg:items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center w-full">

          {/*  LEFT: COPY  */}
          <div>
            {/* Eyebrow */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full mb-8"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.09)',
                animation: 'fadeUp 0.7s ease forwards',
                animationDelay: '0s',
                opacity: 0,
              }}
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
              </span>
              <span className="text-xs font-medium tracking-wide" style={{ color: 'rgba(255,255,255,0.45)' }}>
                50+ websites delivered across Malaysia
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-black text-white leading-[1.04] tracking-tight mb-6"
              style={{
                fontSize: 'clamp(2.75rem, 5.5vw, 4.25rem)',
                animation: 'fadeUp 0.85s ease forwards',
                animationDelay: '0.12s',
                opacity: 0,
              }}
            >
              Websites That{' '}
              <span
                style={{
                  background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 50%, #c084fc 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Win Customers
              </span>
              <br />
              From Day One.
            </h1>

            {/* Subtext */}
            <p
              className="text-base md:text-lg leading-relaxed mb-10 max-w-md"
              style={{
                color: 'rgba(255,255,255,0.42)',
                animation: 'fadeUp 0.85s ease forwards',
                animationDelay: '0.24s',
                opacity: 0,
              }}
            >
              We design and build fast, SEO-optimized websites for Malaysian businesses & starting from{' '}
              <span className="text-white/70 font-semibold">RM 599</span>, delivered in as little as{' '}
              <span className="text-white/70 font-semibold">3 days</span>.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-3 mb-10"
              style={{
                animation: 'fadeUp 0.85s ease forwards',
                animationDelay: '0.36s',
                opacity: 0,
              }}
            >
              {/* WhatsApp & primary */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 font-bold text-sm text-white px-6 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.04] hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                  boxShadow: '0 0 0 1px rgba(34,197,94,0.3), 0 0 24px rgba(34,197,94,0.3), inset 0 1px 0 rgba(255,255,255,0.15)',
                }}
              >
                {/* WhatsApp icon */}
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white shrink-0" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Chat on WhatsApp
              </a>

              {/* Services & secondary ghost */}
              <Link
                href="/services"
                className="inline-flex items-center gap-2 font-semibold text-sm px-6 py-3.5 rounded-full transition-all duration-200 hover:bg-white/[0.06]"
                style={{
                  color: 'rgba(255,255,255,0.5)',
                  border: '1px solid rgba(255,255,255,0.1)',
                }}
              >
                View Services
                <i className="fi fi-rr-arrow-right text-xs" aria-hidden="true" />
              </Link>
            </div>

            {/* Trust row */}
            <div
              className="flex flex-wrap items-center gap-x-7 gap-y-3"
              style={{
                animation: 'fadeUp 0.85s ease forwards',
                animationDelay: '0.48s',
                opacity: 0,
              }}
            >
              {[
                { icon: 'fi-rr-bolt', label: '3-Day Delivery' },
                { icon: 'fi-rr-star', label: '5.0 Rating' },
                { icon: 'fi-rr-search', label: 'SEO on Every Build' },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-1.5">
                  <i className={`fi ${item.icon} text-xs`} style={{ color: 'rgba(255,255,255,0.2)' }} aria-hidden="true" />
                  <span className="text-xs font-medium" style={{ color: 'rgba(255,255,255,0.28)' }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/*  RIGHT: VISUAL  */}
          <div
            className="relative hidden lg:flex items-center justify-center"
            style={{
              animation: 'fadeUp 1s ease forwards',
              animationDelay: '0.3s',
              opacity: 0,
            }}
            aria-hidden="true"
          >
            {/* Glow blob */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                width: '75%',
                aspectRatio: '1',
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) translate(${px * 22}px, ${py * 16}px)`,
                background: 'radial-gradient(circle, rgba(99,102,241,0.38) 0%, rgba(59,130,246,0.22) 40%, transparent 70%)',
                filter: 'blur(48px)',
                transition: 'transform 1.2s cubic-bezier(0.25,0.46,0.45,0.94)',
              }}
            />

            {/* Browser card */}
            <div
              className="relative w-full max-w-[500px]"
              style={{
                transform: `translate(${px * -10}px, ${py * -7}px)`,
                transition: 'transform 1s cubic-bezier(0.25,0.46,0.45,0.94)',
              }}
            >
              <div
                className="rounded-2xl overflow-hidden"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 40px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
              >
                {/* Browser chrome */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.07] bg-white/[0.02]">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <div className="flex-1 mx-3">
                    <div className="bg-white/[0.06] rounded-md h-5 flex items-center justify-center px-3">
                      <span className="text-[10px] text-white/25 font-mono">your-business.com</span>
                    </div>
                  </div>
                </div>

                {/* Mockup content */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1000&q=85&auto=format&fit=crop"
                    alt="Professional web design workspace with laptop and code"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 500px"
                    priority
                  />
                  {/* Subtle dark overlay so chrome elements stay readable */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-black/20 pointer-events-none" />
                  {/* Stats overlay at bottom */}
                  <div className="absolute bottom-4 inset-x-4 grid grid-cols-3 gap-2">
                    {[['98/100', 'Perf. Score'], ['50+', 'Sites Built'], ['RM 599', 'Starting']].map(([val, label]) => (
                      <div key={val} className="rounded-lg px-2 py-1.5 text-center" style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.1)' }}>
                        <div className="text-[11px] font-bold text-white">{val}</div>
                        <div className="text-[9px]" style={{ color: 'rgba(255,255,255,0.4)' }}>{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating: 3-Day Delivery badge (bottom-left) */}
              <div
                className="absolute -bottom-5 -left-8 flex items-center gap-3 px-4 py-3 rounded-2xl"
                style={{
                  ...glass,
                  transform: `translate(${px * 16}px, ${py * 10}px)`,
                  transition: 'transform 1.1s cubic-bezier(0.25,0.46,0.45,0.94)',
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)' }}
                >
                  <i className="fi fi-rr-bolt text-sm text-white" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white">3-Day Delivery</div>
                  <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.3)' }}>Fastest in Malaysia</div>
                </div>
              </div>

              {/* Floating: Rating badge (top-right) */}
              <div
                className="absolute -top-5 -right-6 px-4 py-3 rounded-2xl"
                style={{
                  ...glass,
                  transform: `translate(${px * -13}px, ${py * -9}px)`,
                  transition: 'transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94)',
                }}
              >
                <div className="flex items-center gap-1.5 mb-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} viewBox="0 0 16 16" className="w-3 h-3 fill-amber-400" aria-hidden="true">
                      <path d="M8 1l1.854 3.756L14 5.528l-3 2.922.708 4.132L8 10.414l-3.708 2.168L5 8.45 2 5.528l4.146-.772z" />
                    </svg>
                  ))}
                  <span className="text-xs font-bold text-white ml-0.5">5.0</span>
                </div>
                <div className="text-[11px]" style={{ color: 'rgba(255,255,255,0.3)' }}>From real clients</div>
              </div>

              {/* Floating: Live indicator (mid-right) */}
              <div
                className="absolute top-1/2 -right-10 -translate-y-1/2 flex items-center gap-2 px-3 py-2 rounded-full"
                style={{
                  ...glass,
                  transform: `translateY(-50%) translate(${px * -10}px, ${py * -6}px)`,
                  transition: 'transform 1.3s cubic-bezier(0.25,0.46,0.45,0.94)',
                }}
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-400" />
                </span>
                <span className="text-[11px] font-medium" style={{ color: 'rgba(255,255,255,0.4)' }}>Live</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
