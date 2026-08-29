'use client'

import { motion } from 'framer-motion'
import { Upload, Cpu, Download } from 'lucide-react'
import { HOW_IT_WORKS } from '@/lib/data'

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Upload, Cpu, Download,
}

export default function HowItWorks() {
  return (
    <section className="py-28 bg-[#0d0d12] border-y border-white/[0.04]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-4 tracking-wide uppercase">
            How It Works
          </span>
          <h2 className="font-display text-4xl sm:text-[2.75rem] text-white mb-3 leading-tight">
            Three steps to{' '}
            <span className="gradient-text">every format</span>
          </h2>
          <p className="text-white/45 text-base max-w-md mx-auto leading-relaxed">
            From upload to download in a few minutes. No editing skills required.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute top-[52px] left-[calc(16.7%+28px)] right-[calc(16.7%+28px)] h-px bg-gradient-to-r from-violet-500/20 via-violet-500/40 to-violet-500/20" />

          <div className="grid md:grid-cols-3 gap-10">
            {HOW_IT_WORKS.map((step, index) => {
              const Icon = ICON_MAP[step.icon]
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Icon circle */}
                  <div className="relative mb-7 z-10">
                    <div className="w-[104px] h-[104px] rounded-2xl bg-[#111118] border border-white/[0.08] flex items-center justify-center shadow-xl relative overflow-hidden">
                      {/* Inner glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-transparent" />
                      {Icon && <Icon className="w-8 h-8 text-violet-400 relative z-10" />}
                    </div>
                    {/* Step badge */}
                    <div className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-violet-600 border-2 border-[#0d0d12] flex items-center justify-center shadow-lg shadow-violet-600/30">
                      <span className="text-[11px] font-bold text-white">{step.step}</span>
                    </div>
                  </div>

                  {/* Mobile vertical connector */}
                  {index < HOW_IT_WORKS.length - 1 && (
                    <div className="md:hidden absolute top-[104px] left-1/2 -translate-x-1/2 w-px h-10 bg-gradient-to-b from-violet-500/30 to-transparent" />
                  )}

                  <h3 className="font-display text-[18px] font-semibold text-white mb-2.5">{step.title}</h3>
                  <p className="text-white/45 text-[14px] leading-relaxed max-w-[220px] mx-auto">{step.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
