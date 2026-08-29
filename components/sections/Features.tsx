'use client'

import { motion } from 'framer-motion'
import { Brain, Layers, Zap, Sliders, Move, Webhook } from 'lucide-react'
import { FEATURES } from '@/lib/data'
import { cn } from '@/lib/utils'

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Brain, Layers, Zap, Sliders, Move, Webhook,
}

const ACCENT_COLORS = [
  { bg: 'bg-violet-600/10', border: 'border-violet-500/20', icon: 'text-violet-400', hoverBorder: 'hover:border-violet-500/40' },
  { bg: 'bg-indigo-600/10', border: 'border-indigo-500/20', icon: 'text-indigo-400', hoverBorder: 'hover:border-indigo-500/40' },
  { bg: 'bg-violet-600/10', border: 'border-violet-500/20', icon: 'text-violet-400', hoverBorder: 'hover:border-violet-500/40' },
  { bg: 'bg-indigo-600/10', border: 'border-indigo-500/20', icon: 'text-indigo-400', hoverBorder: 'hover:border-indigo-500/40' },
  { bg: 'bg-violet-600/10', border: 'border-violet-500/20', icon: 'text-violet-400', hoverBorder: 'hover:border-violet-500/40' },
  { bg: 'bg-indigo-600/10', border: 'border-indigo-500/20', icon: 'text-indigo-400', hoverBorder: 'hover:border-indigo-500/40' },
]

export default function Features() {
  return (
    <section className="py-16 sm:py-24 lg:py-28 relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="ambient-blob w-96 h-96 top-0 right-1/4 opacity-[0.07]"
          style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 sm:mb-16"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-4 tracking-wide uppercase">
            Features
          </span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="font-display text-4xl sm:text-[2.75rem] text-white leading-tight max-w-xl">
              Built for the{' '}
              <span className="gradient-text">Multi-Platform Creator</span>
            </h2>
            <p className="text-white/45 text-base leading-relaxed max-w-xs md:text-right">
              Everything you need to go from one horizontal video to a full library of platform-ready content.
            </p>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/[0.05] rounded-2xl overflow-hidden border border-white/[0.06]">
          {FEATURES.map((feature, index) => {
            const Icon = ICON_MAP[feature.icon]
            const accent = ACCENT_COLORS[index]
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                  'group relative p-7 bg-[#0a0a0f]',
                  'hover:bg-[#0f0f17] transition-all duration-200 cursor-default'
                )}
              >
                {/* Number */}
                <div className="absolute top-6 right-6 font-display text-5xl font-bold leading-none select-none"
                  style={{
                    color: 'rgba(255,255,255,0.04)',
                    fontFamily: 'Space Grotesk, sans-serif',
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Icon */}
                <div className={cn(
                  'w-10 h-10 rounded-xl flex items-center justify-center mb-5 border transition-colors',
                  accent.bg, accent.border,
                  'group-hover:' + accent.bg.replace('/10', '/15')
                )}>
                  {Icon && <Icon className={cn('w-4.5 h-4.5', accent.icon)} />}
                </div>

                <h3 className="font-display text-[17px] font-semibold text-white mb-2.5 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-white/45 text-[14px] leading-relaxed">
                  {feature.description}
                </p>

                {/* Bottom line indicator on hover */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/0 to-transparent group-hover:via-violet-500/30 transition-all duration-300" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
