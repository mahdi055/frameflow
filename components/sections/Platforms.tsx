'use client'

import { motion } from 'framer-motion'
import { CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const PLATFORMS = [
  {
    name: 'TikTok',
    formats: ['9:16'],
    color: '#69C9D0',
    note: 'For You Page optimized',
  },
  {
    name: 'Instagram',
    formats: ['9:16', '1:1', '4:5'],
    color: '#F77737',
    note: 'Reels, Feed & Stories',
  },
  {
    name: 'YouTube Shorts',
    formats: ['9:16'],
    color: '#FF4E45',
    note: 'Shorts algorithm ready',
  },
  {
    name: 'LinkedIn',
    formats: ['1:1', '4:5'],
    color: '#5899E2',
    note: 'Professional feed formats',
  },
  {
    name: 'Pinterest',
    formats: ['4:5', '9:16'],
    color: '#E76D77',
    note: 'High-save ratio sizes',
  },
  {
    name: 'X / Twitter',
    formats: ['16:9', '1:1'],
    color: '#8BB8E8',
    note: 'Feed-native aspect ratios',
  },
  {
    name: 'Facebook',
    formats: ['16:9', '1:1', '4:5'],
    color: '#6696E8',
    note: 'Reels, Feed & Stories',
  },
  {
    name: 'Snapchat',
    formats: ['9:16'],
    color: '#F0C93A',
    note: 'Story & Spotlight ready',
  },
]

export default function Platforms() {
  return (
    <section className="py-16 sm:py-24 lg:py-28 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 right-0 w-[600px] h-[600px] -translate-y-1/2 opacity-[0.05]"
          style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">

          {/* Left sticky header */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:w-[320px] flex-shrink-0 lg:sticky lg:top-32"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-5 tracking-wide uppercase">
              Platform Coverage
            </span>
            <h2 className="font-display text-4xl sm:text-[2.5rem] text-white mb-5 leading-tight">
              Your content,{' '}
              <span className="gradient-text">everywhere it needs to be</span>
            </h2>
            <p className="text-white/45 text-base leading-relaxed mb-8">
              One upload auto-generates perfectly formatted video for every major social platform. No manual settings, no extra steps.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <CheckCircle2 className="w-4 h-4 text-violet-400 flex-shrink-0" />
                All formats rendered simultaneously
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <CheckCircle2 className="w-4 h-4 text-violet-400 flex-shrink-0" />
                Platform-spec metadata included
              </div>
              <div className="flex items-center gap-2 text-white/50 text-sm">
                <CheckCircle2 className="w-4 h-4 text-violet-400 flex-shrink-0" />
                New platforms added automatically
              </div>
            </div>
            <Link href="/features" className="inline-flex items-center gap-2 mt-8 text-violet-400 text-sm font-medium hover:text-violet-300 transition-colors group">
              See all supported formats
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {PLATFORMS.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="relative p-5 rounded-2xl border transition-all duration-300 group hover:scale-[1.02]"
                style={{
                  background: `${p.color}08`,
                  borderColor: `${p.color}20`,
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-white font-semibold text-[15px] mb-1">{p.name}</p>
                    <p className="text-white/35 text-[12px]">{p.note}</p>
                  </div>
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: `${p.color}15`, border: `1px solid ${p.color}25` }}
                  >
                    <CheckCircle2 className="w-4 h-4" style={{ color: p.color }} />
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {p.formats.map(f => (
                    <span
                      key={f}
                      className="px-2.5 py-0.5 rounded-full text-[11px] font-bold tracking-wide"
                      style={{
                        background: `${p.color}15`,
                        color: p.color,
                        border: `1px solid ${p.color}28`,
                      }}
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Bottom shimmer on hover */}
                <div
                  className="absolute bottom-0 left-6 right-6 h-px opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to right, transparent, ${p.color}, transparent)` }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
