'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'
import { TESTIMONIALS } from '@/lib/data'

function TestimonialCard({ testimonial }: { testimonial: typeof TESTIMONIALS[0] }) {
  return (
    <div className="flex-shrink-0 w-[320px] mx-3 p-5 rounded-2xl bg-[#111118] border border-white/[0.07] hover:border-white/[0.12] transition-colors duration-200">
      {/* Stars */}
      <div className="flex gap-0.5 mb-3">
        {Array.from({ length: testimonial.stars }).map((_, i) => (
          <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
        ))}
      </div>
      {/* Quote */}
      <p className="text-white/70 text-[14px] leading-relaxed mb-4">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      {/* Author */}
      <div className="flex items-center gap-3 pt-3.5 border-t border-white/[0.06]">
        <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-white/10">
          <Image
            src={testimonial.avatar}
            alt={testimonial.name}
            fill
            className="object-cover"
          />
        </div>
        <div>
          <p className="font-semibold text-white text-[13px] leading-snug">{testimonial.name}</p>
          <p className="text-white/35 text-[12px]">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  // Split into two rows
  const mid = Math.ceil(TESTIMONIALS.length / 2)
  const row1 = TESTIMONIALS.slice(0, mid)
  const row2 = TESTIMONIALS.slice(mid)

  return (
    <section className="py-16 sm:py-24 lg:py-28 overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <span className="inline-block px-3 py-1 rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-4 tracking-wide uppercase">
          Testimonials
        </span>
        <h2 className="font-display text-4xl sm:text-[2.75rem] text-white leading-tight">
          What creators{' '}
          <span className="gradient-text">are saying</span>
        </h2>
      </div>

      {/* Row 1 scrolls left */}
      <div className="relative mb-4">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #0a0a0f, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #0a0a0f, transparent)' }} />
        <div className="flex animate-marquee-left">
          {/* Duplicate for seamless loop */}
          {[...row1, ...row1].map((t, i) => (
            <TestimonialCard key={`r1-${i}`} testimonial={t} />
          ))}
        </div>
      </div>

      {/* Row 2 scrolls right */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #0a0a0f, transparent)' }} />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #0a0a0f, transparent)' }} />
        <div className="flex animate-marquee-right">
          {[...row2, ...row2].map((t, i) => (
            <TestimonialCard key={`r2-${i}`} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
