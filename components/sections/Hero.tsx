'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Ambient background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0a0a0f]" />
        <div
          className="ambient-blob w-[600px] h-[600px] -top-32 -left-32 opacity-[0.18]"
          style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
        />
        <div
          className="ambient-blob w-[500px] h-[500px] top-1/4 -right-48 opacity-[0.12]"
          style={{ background: 'radial-gradient(circle, #4f46e5 0%, transparent 70%)' }}
        />
        <div
          className="ambient-blob w-[300px] h-[300px] bottom-0 left-1/3 opacity-[0.1]"
          style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
        />
        <div className="absolute inset-0 dot-grid opacity-30" />
        <div className="noise-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">

          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-8 tracking-wide uppercase"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              AI-Powered Video Reframing
            </motion.div>

            <h1 className="font-display text-[3.25rem] sm:text-[4rem] lg:text-[4.5rem] text-white leading-[1.06] tracking-tight mb-6">
              Reframe Any Video{' '}
              <span className="gradient-text">in Seconds</span>
            </h1>

            <p className="text-lg text-white/50 leading-relaxed mb-9 max-w-[460px]" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Upload once. Export for TikTok, Reels, Stories, Shorts, and LinkedIn all at once.
              AI tracks your subject so nothing important gets cropped.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Link href="/signup">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold rounded-xl transition-colors shadow-xl shadow-violet-600/25 cursor-pointer w-full sm:w-auto"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
              <Link href="/features">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] text-white/70 hover:text-white text-sm font-medium transition-all cursor-pointer w-full sm:w-auto"
                >
                  Explore Features
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </Link>
            </div>

            {/* Social proof */}
            <div className="flex items-center gap-4 pt-8 border-t border-white/[0.06]">
              <div className="flex -space-x-2.5">
                {['L', 'C', 'R', 'A'].map((letter, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-[#0a0a0f] flex items-center justify-center text-white text-[11px] font-bold"
                    style={{ background: i % 2 === 0 ? '#7c3aed' : '#4f46e5', zIndex: 4 - i }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <p className="text-sm text-white/40">
                Joined by <span className="text-white/80 font-medium">1,200+ creators</span> since launch
              </p>
            </div>
          </motion.div>

          {/* Right: Video Format Mockup with real photo */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Source video card */}
              <div className="surface-raised rounded-2xl overflow-hidden border border-white/[0.08] shadow-2xl">
                {/* Card header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/[0.06]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-500/60" />
                    <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                    <div className="w-2 h-2 rounded-full bg-green-500/60" />
                  </div>
                  <span className="text-[11px] text-white/30 font-medium tracking-wide">SOURCE VIDEO</span>
                  <div className="w-12" />
                </div>

                {/* 16:9 preview — real photo */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src="/assets/hero-panel.webp"
                    alt="Content creator — source video"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                  {/* Dark overlay for contrast */}
                  <div className="absolute inset-0 bg-[#0a0a0f]/30" />

                  {/* AI crop indicator (dashed box) */}
                  <div
                    className="absolute border border-violet-400/80 rounded-sm"
                    style={{ top: '10%', left: '33%', right: '33%', bottom: '8%', borderStyle: 'dashed' }}
                  />
                  {/* Corner handles */}
                  <div className="absolute top-[10%] left-[33%] w-2.5 h-2.5 border-l-2 border-t-2 border-violet-400 rounded-tl" />
                  <div className="absolute top-[10%] right-[33%] w-2.5 h-2.5 border-r-2 border-t-2 border-violet-400 rounded-tr" />
                  <div className="absolute bottom-[8%] left-[33%] w-2.5 h-2.5 border-l-2 border-b-2 border-violet-400 rounded-bl" />
                  <div className="absolute bottom-[8%] right-[33%] w-2.5 h-2.5 border-r-2 border-b-2 border-violet-400 rounded-br" />
                  {/* Scan line */}
                  <div
                    className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-violet-400/80 to-transparent animate-scan-line"
                    style={{ top: '35%' }}
                  />
                  {/* AI label */}
                  <div className="absolute top-3 left-3 px-2 py-1 rounded-md bg-violet-600/30 border border-violet-500/40 backdrop-blur-sm">
                    <span className="text-[10px] text-violet-200 font-medium tracking-wide">AI TRACKING</span>
                  </div>
                  {/* Resolution badge */}
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-sm">
                    <span className="text-[10px] text-white/50">1920 × 1080</span>
                  </div>
                </div>
              </div>

              {/* Arrow and output label */}
              <div className="flex items-center justify-center my-4 gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-violet-500/30" />
                <div className="px-3 py-1 rounded-full bg-violet-600/10 border border-violet-500/20">
                  <span className="text-[11px] text-violet-400 font-medium tracking-wide">AI REFRAMING</span>
                </div>
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-violet-500/30" />
              </div>

              {/* Output formats row — real photo, different crops */}
              <div className="grid grid-cols-3 gap-3">
                {/* 9:16 */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-full aspect-[9/16] surface rounded-xl border border-violet-500/40 overflow-hidden relative">
                    <Image
                      src="/assets/hero-panel.webp"
                      alt="9:16 reframed"
                      fill
                      className="object-cover object-center scale-[1.6]"
                    />
                    <div className="absolute inset-0 bg-[#0a0a0f]/20" />
                    {/* TikTok-style bottom bar */}
                    <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-black/70 to-transparent flex items-end pb-1.5 px-1.5">
                      <div className="flex gap-1">
                        <div className="w-4 h-0.5 rounded bg-white/25" />
                        <div className="w-6 h-0.5 rounded bg-white/15" />
                      </div>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-violet-600/15 border border-violet-500/25 text-violet-300 text-[11px] font-medium">
                    9:16
                  </span>
                </div>

                {/* 1:1 */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-full aspect-square surface rounded-xl border border-white/[0.08] overflow-hidden relative">
                    <Image
                      src="/assets/hero-panel.webp"
                      alt="1:1 reframed"
                      fill
                      className="object-cover object-center scale-[1.25]"
                    />
                    <div className="absolute inset-0 bg-[#0a0a0f]/20" />
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-indigo-600/15 border border-indigo-500/25 text-indigo-300 text-[11px] font-medium">
                    1:1
                  </span>
                </div>

                {/* 4:5 */}
                <div className="flex flex-col items-center gap-2">
                  <div className="w-full aspect-[4/5] surface rounded-xl border border-white/[0.08] overflow-hidden relative">
                    <Image
                      src="/assets/hero-panel.webp"
                      alt="4:5 reframed"
                      fill
                      className="object-cover object-center scale-[1.4]"
                    />
                    <div className="absolute inset-0 bg-[#0a0a0f]/20" />
                  </div>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/40 text-[11px] font-medium">
                    4:5
                  </span>
                </div>
              </div>

              {/* Processing indicator */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                className="absolute -top-3 -right-3 flex items-center gap-2 px-3 py-2 rounded-xl bg-[#111118] border border-green-500/20 shadow-lg shadow-black/50"
              >
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-[11px] text-green-400 font-medium">Processing</span>
              </motion.div>

              {/* Time indicator */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.4 }}
                className="absolute -bottom-3 -left-3 flex items-center gap-2 px-3 py-2 rounded-xl bg-[#111118] border border-white/[0.08] shadow-lg shadow-black/50"
              >
                <span className="text-[11px] text-white/40">Done in</span>
                <span className="text-[11px] text-white font-semibold">42s</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
