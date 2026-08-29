'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const STATS = [
  { prefix: '', value: 18, suffix: 'K+', decimals: 0, label: 'Videos Reframed', sub: 'since early access launch' },
  { prefix: '', value: 1.4, suffix: 'K+', decimals: 1, label: 'Active Creators', sub: 'in our beta community' },
  { prefix: '', value: 94, suffix: '%', decimals: 0, label: 'AI Accuracy', sub: 'on subject detection' },
  { prefix: '<', value: 3, suffix: 'min', decimals: 0, label: 'Processing Time', sub: 'average per video' },
]

function CountUp({ target, decimals, duration = 2.2 }: { target: number; decimals: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    const tick = (now: number) => {
      const elapsed = (now - start) / 1000
      const progress = Math.min(elapsed / duration, 1)
      const ease = 1 - Math.pow(1 - progress, 3)
      setCount(target * ease)
      if (progress < 1) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [inView, target, duration])

  return <span ref={ref}>{count.toFixed(decimals)}</span>
}

export default function Stats() {
  return (
    <section className="relative py-16 overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/25 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-500/25 to-transparent" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #7c3aed 0%, transparent 65%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-white/[0.06]">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col items-center text-center px-6 py-2"
            >
              <div className="font-display text-5xl lg:text-[3.5rem] font-bold mb-2 leading-none gradient-text">
                {stat.prefix}
                <CountUp target={stat.value} decimals={stat.decimals} />
                {stat.suffix}
              </div>
              <p className="text-white font-semibold text-[15px] mb-1">{stat.label}</p>
              <p className="text-white/35 text-sm">{stat.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
