'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

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

  const glass = {
    background: 'rgba(255,255,255,0.04)',
    backdropFilter: 'blur(18px)',
    WebkitBackdropFilter: 'blur(18px)',
    border: '1px solid rgba(255,255,255,0.08)',
    boxShadow: '0 24px 64px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.07)',
  } as React.CSSProperties

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#03020f' }}
    >
      {/* ── BACKGROUND ──────────────────────────────── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Blue orb */}
        <div
          className="absolute rounded-full"
          style={{
            width: '80vw', height: '80vw', maxWidth: 900, maxHeight: 900,
            top: '-20%', left: '-15%',
            background: 'radial-gradient(circle at 40% 40%, rgba(59,130,246,0.22) 0%, transparent 65%)',
            transform: `translate(${px * -45}px, ${py * -30}px)`,
            transition: 'transform 1s cubic-bezier(0.25,0.46,0.45,0.94)',
          }}
        />
        {/* Violet orb */}
        <div
          className="absolute rounded-full"
          style={{
            width: '70vw', height: '70vw', maxWidth: 800, maxHeight: 800,
            bottom: '-20%', right: '-15%',
            background: 'radial-gradient(circle at 60% 60%, rgba(139,92,246,0.2) 0%, transparent 65%)',
            transform: `translate(${px * 38}px, ${py * 25}px)`,
            transition: 'transform 1.2s cubic-bezier(0.25,0.46,0.45,0.94)',
          }}
        />
        {/* Center indigo glow */}
        <div
          className="absolute left-1/2 top-1/2 rounded-full"
          style={{
            width: '50vw', height: '50vw', maxWidth: 700, maxHeight: 700,
            transform: `translate(-50%,-50%) translate(${px * 18}px, ${py * 14}px)`,
            background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)',
            transition: 'transform 1.5s cubic-bezier(0.25,0.46,0.45,0.94)',
          }}
        />
        {/* Grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        {/* Edge fades */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#03020f] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#03020f] to-transparent" />
      </div>

      {/* ── FLOATING GLASS ELEMENTS ─────────────────── */}
      {/* Stats card — top right */}
      <div
        className="absolute hidden lg:block"
        style={{
          top: '18%', right: '6%',
          transform: `translate(${px * 20}px, ${py * 14}px) rotate(2deg)`,
          transition: 'transform 1s cubic-bezier(0.25,0.46,0.45,0.94)',
        }}
        aria-hidden="true"
      >
        <div className="w-48 p-5 rounded-2xl" style={glass}>
          <div className="flex items-center gap-2 mb-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
            </span>
            <span className="text-[10px] text-white/40 font-mono uppercase tracking-wider">Live Projects</span>
          </div>
          <div className="text-3xl font-black text-white mb-0.5">50+</div>
          <div className="text-xs text-white/30 mb-3">Websites delivered</div>
          <div className="h-px bg-gradient-to-r from-blue-500/50 via-violet-500/30 to-transparent mb-3" />
          <div className="flex items-end gap-1 h-8">
            {[40, 65, 45, 85, 55, 75, 90].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm"
                style={{
                  height: `${h}%`,
                  background: 'linear-gradient(to top, rgba(99,102,241,0.7), rgba(59,130,246,0.3))',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Tech stack — bottom left */}
      <div
        className="absolute hidden lg:block"
        style={{
          bottom: '22%', left: '5%',
          transform: `translate(${px * -16}px, ${py * -11}px) rotate(-1.5deg)`,
          transition: 'transform 1.1s cubic-bezier(0.25,0.46,0.45,0.94)',
        }}
        aria-hidden="true"
      >
        <div className="p-4 rounded-2xl" style={glass}>
          <div className="text-[10px] text-white/30 mb-2.5 font-mono uppercase tracking-wider">Stack</div>
          <div className="flex flex-wrap gap-1.5">
            {['Next.js', 'React', 'Tailwind', 'TypeScript'].map((t) => (
              <span
                key={t}
                className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full"
                style={{
                  background: 'rgba(99,102,241,0.15)',
                  border: '1px solid rgba(99,102,241,0.3)',
                  color: 'rgba(167,139,250,0.85)',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Design × Code pill — top left */}
      <div
        className="absolute hidden xl:flex items-center gap-2.5 px-4 py-2 rounded-full"
        style={{
          top: '22%', left: '4%',
          ...glass,
          transform: `translate(${px * -14}px, ${py * -9}px)`,
          transition: 'transform 1.3s cubic-bezier(0.25,0.46,0.45,0.94)',
        }}
        aria-hidden="true"
      >
        <div
          className="w-1.5 h-1.5 rounded-full animate-pulse"
          style={{ background: '#c084fc', boxShadow: '0 0 8px 3px rgba(192,132,252,0.65)' }}
        />
        <span className="text-xs text-white/40 font-mono">Design × Code × Deliver</span>
      </div>

      {/* Speed badge — bottom right */}
      <div
        className="absolute hidden xl:block"
        style={{
          bottom: '25%', right: '5%',
          transform: `translate(${px * 16}px, ${py * 11}px) rotate(1.5deg)`,
          transition: 'transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94)',
        }}
        aria-hidden="true"
      >
        <div className="flex items-center gap-3 px-4 py-3 rounded-2xl" style={glass}>
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: 'linear-gradient(135deg, #3b82f6, #6366f1)' }}
          >
            <i className="fi fi-rr-bolt text-sm text-white" aria-hidden="true" />
          </div>
          <div>
            <div className="text-xs font-bold text-white">3-Day Delivery</div>
            <div className="text-[10px] text-white/30">Lightning fast</div>
          </div>
        </div>
      </div>

      {/* ── MAIN CONTENT ────────────────────────────── */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 pt-6">
        {/* Eyebrow */}
        {/* <div
          className="inline-flex items-center gap-2.5 mb-10 px-4 py-2 rounded-full"
          style={{
            background: 'rgba(255,255,255,0.05)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            border: '1px solid rgba(255,255,255,0.08)',
            animation: 'fadeUp 0.7s ease forwards',
            animationDelay: '0.1s',
            opacity: 0,
          }}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-400" />
          </span>
          <span className="text-xs font-mono tracking-[0.2em] uppercase text-white/40">
            Among Web Studio
          </span>
        </div> */}

        {/* Kinetic headline */}
        <h1
          className="font-black text-white leading-[0.92] tracking-tight my-8 select-none"
          style={{ fontSize: 'clamp(3.5rem, 9vw, 8.5rem)' }}
        >
          <span
            className="block"
            style={{ animation: 'fadeUp 0.85s ease forwards', animationDelay: '0.2s', opacity: 0 }}
          >
            We Build
          </span>
          <span
            className="block"
            style={{
              animation: 'fadeUp 0.85s ease forwards',
              animationDelay: '0.36s',
              opacity: 0,
              background: 'linear-gradient(135deg, #60a5fa 0%, #818cf8 45%, #c084fc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              lineHeight: 1.2,
            }}
          >
            Digital
          </span>
          <span
            className="block"
            style={{ animation: 'fadeUp 0.85s ease forwards', animationDelay: '0.52s', opacity: 0 }}
          >
            Futures.
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="text-lg md:text-xl font-light max-w-md mx-auto mb-14 leading-relaxed"
          style={{
            color: 'rgba(255,255,255,0.36)',
            animation: 'fadeUp 0.85s ease forwards',
            animationDelay: '0.68s',
            opacity: 0,
          }}
        >
          High-performance websites and digital experiences crafted for businesses that demand excellence.
        </p>

        {/* Primary CTA — single, glowing */}
        <div
          style={{
            animation: 'fadeUp 0.85s ease forwards',
            animationDelay: '0.82s',
            opacity: 0,
          }}
        >
          <Link
            href="/contact"
            className="group relative inline-flex items-center gap-3 font-bold text-base text-white px-9 py-4 rounded-full transition-all duration-300 hover:scale-[1.04] hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 55%, #8b5cf6 100%)',
              boxShadow:
                '0 0 0 1px rgba(99,102,241,0.4), 0 0 30px rgba(99,102,241,0.55), 0 0 70px rgba(59,130,246,0.18), inset 0 1px 0 rgba(255,255,255,0.15)',
            }}
          >
            {/* Shimmer sweep */}
            <span
              className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
              style={{ animation: 'shimmer 1.4s infinite', transition: 'opacity 0.3s' }}
              aria-hidden="true"
            />
            <span className="relative">Start Your Project</span>
            <i
              className="fi fi-rr-arrow-right relative text-base transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        {/* Scroll cue */}
        {/* <div
          className="mt-20 flex flex-col items-center gap-2"
          style={{
            animation: 'fadeUp 0.85s ease forwards',
            animationDelay: '1.1s',
            opacity: 0,
          }}
          aria-hidden="true"
        >
          <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/20 to-transparent" />
          <span
            className="text-[10px] font-mono tracking-[0.35em] uppercase"
            style={{ color: 'rgba(255,255,255,0.2)' }}
          >
            Scroll
          </span>
        </div> */}
      </div>

      {/* ── BROWSER MOCKUP SHOWCASE ─────────────────── */}
      <div
        className="absolute z-0 w-full max-w-5xl mx-auto px-6 pb-24 hidden lg:block"
        style={{ animation: 'fadeUp 0.85s ease forwards', animationDelay: '1.3s', opacity: 0 }}
        aria-hidden="true"
      >
        <div className="opacity-30">
        {/* Browser frame */}
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: 'rgba(255,255,255,0.03)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            border: '1px solid rgba(255,255,255,0.07)',
            boxShadow: '0 40px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.04)',
          }}
        >
          {/* Browser chrome */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06] bg-white/[0.02]">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-white/[0.12]" />
              <div className="w-3 h-3 rounded-full bg-white/[0.12]" />
              <div className="w-3 h-3 rounded-full bg-white/[0.12]" />
            </div>
            <div className="flex-1 mx-3">
              <div className="bg-white/[0.06] rounded-md h-6 max-w-xs mx-auto flex items-center justify-center">
                <span className="text-[10px] text-white/25 font-mono">https://amongweb.net</span>
              </div>
            </div>
          </div>

          {/* Website preview — replace with actual screenshot */}
          {/* TODO: Replace this entire block with <Image src="/hero-preview.jpg" ... /> */}
          <div className="aspect-[16/7] relative overflow-hidden bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
            {/* Subtle grid */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage: 'linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.018) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
              }}
            />
            {/* Fake navbar */}
            <div className="absolute top-0 inset-x-0 h-11 bg-white/[0.04] border-b border-white/[0.04] flex items-center px-8 gap-6">
              <div className="w-24 h-4 bg-white/[0.12] rounded" />
              <div className="flex gap-5 ml-auto items-center">
                <div className="w-10 h-2.5 bg-white/[0.08] rounded" />
                <div className="w-10 h-2.5 bg-white/[0.08] rounded" />
                <div className="w-10 h-2.5 bg-white/[0.08] rounded" />
                <div className="w-24 h-7 bg-blue-500/40 rounded-full" />
              </div>
            </div>
            {/* Fake hero text */}
            <div className="absolute top-16 left-10 max-w-xs">
              <div className="w-32 h-3 bg-blue-400/20 rounded-full mb-4" />
              <div className="w-56 h-7 bg-white/[0.14] rounded mb-2" />
              <div className="w-48 h-7 bg-white/[0.14] rounded mb-5" />
              <div className="w-44 h-2.5 bg-white/[0.06] rounded mb-2" />
              <div className="w-36 h-2.5 bg-white/[0.06] rounded mb-6" />
              <div className="flex gap-3">
                <div className="w-28 h-9 bg-blue-500/40 rounded-full" />
                <div className="w-28 h-9 bg-white/[0.06] rounded-full border border-white/[0.08]" />
              </div>
            </div>
            {/* Fake image block top-right */}
            <div className="absolute top-12 right-8 w-72 h-44 bg-white/[0.04] rounded-xl border border-white/[0.06]" />
            {/* Stats row bottom */}
            <div className="absolute bottom-6 left-10 flex gap-4">
              {[1, 2, 3].map((n) => (
                <div key={n} className="bg-white/[0.05] border border-white/[0.06] rounded-xl p-3 w-28">
                  <div className="w-12 h-5 bg-white/[0.14] rounded mb-2" />
                  <div className="w-20 h-2 bg-white/[0.06] rounded" />
                </div>
              ))}
            </div>
            {/* Glow */}
            <div className="absolute top-1/2 left-1/3 w-96 h-64 -translate-y-1/2 bg-blue-500/[0.08] blur-3xl rounded-full pointer-events-none" />
          </div>
        </div>
        </div>{/* closes opacity-30 */}
      </div>{/* closes animation wrapper */}
    </section>
  )
}
