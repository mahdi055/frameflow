'use client'

import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
import { ChevronsLeftRight } from 'lucide-react'

export default function BeforeAfter() {
  const [sliderX, setSliderX] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((clientX - rect.left) / rect.width) * 100
    setSliderX(Math.max(5, Math.min(95, x)))
  }, [])

  const handleMouseDown = () => { isDragging.current = true }
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    handleMove(e.clientX)
  }
  const handleMouseUp = () => { isDragging.current = false }
  const handleTouchMove = (e: React.TouchEvent) => { handleMove(e.touches[0].clientX) }

  return (
    <section className="py-24 bg-[#16161f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-4">
            Before / After
          </span>
          <h2 className="font-display text-4xl sm:text-5xl text-white mb-4">
            See the Difference{' '}
            <span className="gradient-text">Side by Side</span>
          </h2>
          <p className="text-white/45 text-lg max-w-xl mx-auto">
            Drag the slider to compare the original 16:9 footage with the AI-reframed 9:16 output.
          </p>
        </div>

        {/* Slider */}
        <div
          ref={containerRef}
          className="relative rounded-2xl overflow-hidden cursor-col-resize select-none border border-white/10 shadow-2xl aspect-[4/3] sm:aspect-video"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchMove={handleTouchMove}
        >
          {/* BEFORE: Original 16:9 — full landscape photo */}
          <div className="absolute inset-0">
            <Image
              src="/assets/beforeafter-source.webp"
              alt="Original 16:9 source footage"
              fill
              className="object-cover object-center"
            />
            {/* Subtle dark overlay */}
            <div className="absolute inset-0 bg-black/15" />

            {/* Labels */}
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/60 backdrop-blur-sm rounded-lg border border-white/10">
              <p className="text-white text-xs font-semibold">Original 16:9</p>
            </div>
            <div className="absolute bottom-4 left-4 px-2 py-0.5 bg-white/10 border border-white/10 backdrop-blur-sm rounded-full text-xs text-white/60">
              1920 × 1080
            </div>

            {/* Wasted space indicators — faded edge zones showing what gets cropped */}
            <div className="absolute inset-y-0 left-0 w-[18%] bg-black/35 backdrop-blur-[1px]" />
            <div className="absolute inset-y-0 right-0 w-[18%] bg-black/35 backdrop-blur-[1px]" />
            <div className="absolute inset-y-0 left-[18%] w-px bg-white/10" />
            <div className="absolute inset-y-0 right-[18%] w-px bg-white/10" />
          </div>

          {/* AFTER: AI-reframed 9:16 — same photo, center-zoomed */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ clipPath: `inset(0 ${100 - sliderX}% 0 0)` }}
          >
            <Image
              src="/assets/beforeafter-source.webp"
              alt="AI-reframed 9:16 output"
              fill
              className="object-cover object-center"
              style={{ transform: 'scale(1.78)', transformOrigin: 'center center' }}
            />
            {/* Slight violet tint on the "after" side */}
            <div className="absolute inset-0 bg-violet-900/10" />

            {/* Violet crop frame */}
            <div
              className="absolute border-2 border-violet-400/70 rounded-sm"
              style={{ inset: '0 0 0 0', boxShadow: 'inset 0 0 30px rgba(124, 58, 237, 0.08)' }}
            />

            {/* Corner handles */}
            <div className="absolute top-0 left-0 w-5 h-5 border-l-2 border-t-2 border-violet-400" />
            <div className="absolute top-0 right-0 w-5 h-5 border-r-2 border-t-2 border-violet-400" />
            <div className="absolute bottom-0 left-0 w-5 h-5 border-l-2 border-b-2 border-violet-400" />
            <div className="absolute bottom-0 right-0 w-5 h-5 border-r-2 border-b-2 border-violet-400" />

            {/* Labels */}
            <div className="absolute top-4 right-4 px-3 py-1.5 bg-violet-600/80 backdrop-blur-sm rounded-lg shadow-lg shadow-violet-600/20">
              <p className="text-white text-xs font-semibold">FrameFlow Output</p>
            </div>
            <div className="absolute bottom-4 right-4 px-2 py-0.5 bg-violet-600/40 border border-violet-500/40 backdrop-blur-sm rounded-full text-xs text-violet-200">
              9:16 · AI Reframed
            </div>

            {/* AI tracking badge */}
            <div className="absolute top-4 left-4 px-2 py-1 rounded-md bg-black/60 border border-violet-500/30 backdrop-blur-sm">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                <span className="text-[10px] text-violet-300 font-medium tracking-wide">AI TRACKING</span>
              </div>
            </div>
          </div>

          {/* Slider handle */}
          <div
            className="absolute top-0 bottom-0 flex items-center justify-center cursor-col-resize"
            style={{ left: `${sliderX}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-0 bottom-0 w-0.5 bg-white/80 shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
            <div className="relative z-10 w-10 h-10 rounded-full bg-white shadow-xl shadow-black/50 flex items-center justify-center border-2 border-violet-400/30">
              <ChevronsLeftRight className="w-5 h-5 text-violet-700" />
            </div>
          </div>
        </div>

        <p className="text-center text-white/35 text-sm mt-6">
          Zero manual cropping. AI kept the subject in frame automatically.
        </p>
      </div>
    </section>
  )
}
