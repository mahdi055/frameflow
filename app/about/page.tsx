'use client'

import { motion } from 'framer-motion'
import { Heart, Zap, Shield, RefreshCw } from 'lucide-react'
import { VALUES, STATS } from '@/lib/data'

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Heart, Zap, Shield, RefreshCw,
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-16">

      {/* Mission Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="ambient-blob w-[700px] h-[400px] -top-16 left-1/2 -translate-x-1/2 opacity-[0.13]"
            style={{ background: 'radial-gradient(ellipse, #7c3aed 0%, transparent 70%)' }} />
          <div className="absolute inset-0 dot-grid opacity-15" />
          <div className="noise-overlay" />
          <div className="absolute bottom-0 inset-x-0 h-40"
            style={{ background: 'linear-gradient(to bottom, transparent, #0a0a0f)' }} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-8 tracking-wide uppercase">
              Our Mission
            </span>
            <h1 className="font-display text-[3.5rem] sm:text-[4.5rem] text-white mb-8 leading-tight">
              We believe every frame{' '}
              <span className="gradient-text">tells a story</span>
            </h1>
            <div className="space-y-5 text-white/50 text-lg leading-relaxed max-w-2xl mx-auto">
              <p>
                FrameFlow was started by two video editors who got tired of manually cropping the same footage into different aspect ratios for every platform. We built the tool we wished existed.
              </p>
              <p>
                The existing tools were built for editors with time. We built FrameFlow for creators who need to move fast. Upload once, get every format automatically, and focus on what actually matters: the content.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats row */}
      <section className="py-16 border-y border-white/[0.05] bg-[#0d0d12]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="text-center"
              >
                <p className="font-display text-[2.5rem] font-bold gradient-text mb-1">{stat.value}</p>
                <p className="text-white/40 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <span className="inline-block px-3 py-1 rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-4 tracking-wide uppercase">
              What We Stand For
            </span>
            <h2 className="font-display text-4xl text-white">
              Principles that guide{' '}
              <span className="gradient-text">every decision</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4">
            {VALUES.map((value, index) => {
              const Icon = ICON_MAP[value.icon]
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group p-7 rounded-2xl bg-[#111118] border border-white/[0.07] hover:border-white/[0.11] transition-all duration-200"
                >
                  {Icon && (
                    <div className="w-10 h-10 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center mb-5 group-hover:bg-violet-600/15 transition-colors">
                      <Icon className="w-4.5 h-4.5 text-violet-400" />
                    </div>
                  )}
                  <h3 className="font-display text-[17px] font-semibold text-white mb-2.5">{value.title}</h3>
                  <p className="text-white/45 text-[14px] leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Simple closing CTA */}
      <section className="pb-24 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <div className="p-10 rounded-2xl bg-[#111118] border border-white/[0.07]">
            <h3 className="font-display text-2xl text-white mb-3">We are just getting started</h3>
            <p className="text-white/45 text-[15px] leading-relaxed mb-6">
              FrameFlow launched recently and we are actively building. If you have feedback or questions, we would love to hear from you.
            </p>
            <a href="/contact">
              <button className="px-6 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-xl transition-colors cursor-pointer">
                Get in Touch
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
