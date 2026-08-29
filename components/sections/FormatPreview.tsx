'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Search, Grid } from 'lucide-react'

const FORMATS = [
  {
    id: '916',
    label: '9:16 · TikTok / Reels',
    platform: 'TikTok & Instagram Reels',
    aspectClass: 'aspect-[9/16]',
    maxW: 'max-w-[210px]',
    objectPosition: 'center center',
    scale: 'scale-[1.65]',
    accentColor: '#7c3aed',
    borderColor: 'border-violet-500/50',
    description: 'Auto-cropped to 9:16 with subject centered. TikTok and Reels ready.',
  },
  {
    id: '11',
    label: '1:1 · Instagram Feed',
    platform: 'Instagram & LinkedIn Feed',
    aspectClass: 'aspect-square',
    maxW: 'max-w-[300px]',
    objectPosition: 'center 35%',
    scale: 'scale-[1.25]',
    accentColor: '#4f46e5',
    borderColor: 'border-indigo-500/50',
    description: 'Square crop for Instagram grid and LinkedIn posts.',
  },
  {
    id: '45',
    label: '4:5 · Portrait Feed',
    platform: 'Pinterest & Facebook Feed',
    aspectClass: 'aspect-[4/5]',
    maxW: 'max-w-[240px]',
    objectPosition: 'center 30%',
    scale: 'scale-[1.4]',
    accentColor: '#7c3aed',
    borderColor: 'border-violet-500/40',
    description: 'Portrait format that dominates feeds on Pinterest and Facebook.',
  },
]

function TikTokOverlay() {
  return (
    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pt-12 pb-3 px-3">
      <div className="flex items-end justify-between">
        <div className="flex-1 pr-10">
          <p className="text-white text-[11px] font-semibold mb-0.5">@frameflow</p>
          <p className="text-white/70 text-[10px] leading-tight">Behind the lens ✨ #creator #filmmaking</p>
          {/* Music bar */}
          <div className="flex items-center gap-1.5 mt-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-white/20 border border-white/30" />
            <p className="text-white/50 text-[9px] truncate">Original Sound - FrameFlow</p>
          </div>
        </div>
        {/* Side actions */}
        <div className="flex flex-col items-center gap-3">
          <div className="flex flex-col items-center gap-0.5">
            <Heart className="w-5 h-5 text-white fill-white" />
            <span className="text-white text-[9px]">24.2K</span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <MessageCircle className="w-4 h-4 text-white fill-white" />
            <span className="text-white text-[9px]">482</span>
          </div>
          <div className="flex flex-col items-center gap-0.5">
            <Share2 className="w-4 h-4 text-white" />
            <span className="text-white text-[9px]">Share</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function InstagramOverlay() {
  return (
    <>
      {/* Top bar */}
      <div className="absolute top-0 inset-x-0 bg-gradient-to-b from-black/50 to-transparent py-2.5 px-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-500 to-pink-500 p-0.5">
            <div className="w-full h-full rounded-full bg-white/20" />
          </div>
          <span className="text-white text-[10px] font-semibold">frameflow</span>
        </div>
        <MoreHorizontal className="w-4 h-4 text-white" />
      </div>
      {/* Bottom actions */}
      <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent py-2.5 px-3">
        <div className="flex items-center justify-between mb-1.5">
          <div className="flex items-center gap-3">
            <Heart className="w-4.5 h-4.5 text-white" />
            <MessageCircle className="w-4.5 h-4.5 text-white" />
            <Share2 className="w-4.5 h-4.5 text-white" />
          </div>
          <Bookmark className="w-4.5 h-4.5 text-white" />
        </div>
        <p className="text-white text-[9px] font-semibold">2,481 likes</p>
      </div>
    </>
  )
}

function PinterestOverlay() {
  return (
    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent pt-8 pb-3 px-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-white text-[10px] font-semibold">Behind the Shot</p>
          <p className="text-white/60 text-[9px]">by frameflow.ai</p>
        </div>
        <button className="px-2 py-0.5 bg-red-500 rounded-full text-white text-[9px] font-semibold">
          Save
        </button>
      </div>
    </div>
  )
}

const OVERLAYS: Record<string, React.ReactNode> = {
  '916': <TikTokOverlay />,
  '11': <InstagramOverlay />,
  '45': <PinterestOverlay />,
}

export default function FormatPreview() {
  const [active, setActive] = useState('916')
  const format = FORMATS.find(f => f.id === active)!

  return (
    <section className="py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="ambient-blob w-96 h-96 bottom-0 left-1/2 -translate-x-1/2 opacity-[0.08]"
          style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-4 tracking-wide uppercase">
            Output Formats
          </span>
          <h2 className="font-display text-4xl sm:text-[2.75rem] text-white mb-4 leading-tight">
            Every Format,{' '}
            <span className="gradient-text">Perfectly Framed</span>
          </h2>
          <p className="text-white/45 text-base max-w-lg mx-auto leading-relaxed">
            See exactly how FrameFlow outputs your content for each major platform.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left: Tab selector + description */}
          <div className="w-full lg:w-[340px] flex-shrink-0">
            <div className="space-y-2.5 mb-8">
              {FORMATS.map((f) => (
                <button
                  key={f.id}
                  onClick={() => setActive(f.id)}
                  className={`w-full text-left px-5 py-4 rounded-xl border transition-all duration-200 cursor-pointer ${
                    active === f.id
                      ? 'bg-violet-600/10 border-violet-500/40 shadow-lg shadow-violet-600/5'
                      : 'bg-[#111118] border-white/[0.07] hover:border-white/[0.12]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[13px] font-semibold ${active === f.id ? 'text-violet-300' : 'text-white/70'}`}>
                      {f.label}
                    </span>
                    {active === f.id && (
                      <span className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                    )}
                  </div>
                  <p className="text-white/35 text-[12px]">{f.description}</p>
                </button>
              ))}
            </div>

            {/* Output info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="p-5 rounded-xl bg-[#111118] border border-white/[0.07]"
              >
                <p className="text-white/40 text-xs mb-3 uppercase tracking-widest font-medium">Optimized for</p>
                <p className="text-white font-semibold text-sm">{format.platform}</p>
                <div className="mt-3 pt-3 border-t border-white/[0.06] flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-green-400 text-xs font-medium">Ready to export</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right: Live preview */}
          <div className="flex-1 flex items-center justify-center">
            {/* Phone-style frame */}
            <div className="relative w-[300px]">
              {/* Glow behind */}
              <div
                className="absolute inset-0 rounded-3xl blur-2xl opacity-20 scale-110"
                style={{ background: `radial-gradient(circle, ${format.accentColor} 0%, transparent 70%)` }}
              />

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 0.95, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -8 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className={`${format.maxW} w-full mx-auto relative`}
                >
                  {/* Phone/device shell */}
                  <div className={`${format.aspectClass} relative rounded-[22px] overflow-hidden border-2 ${format.borderColor} shadow-2xl shadow-black/60`}>
                    {/* Real photo, cropped to the format */}
                    <Image
                      src="/assets/format-preview.webp"
                      alt={`${format.platform} format preview`}
                      fill
                      className={`object-cover ${format.scale} transition-transform duration-500`}
                      style={{ objectPosition: format.objectPosition }}
                    />
                    {/* Subtle color overlay */}
                    <div
                      className="absolute inset-0"
                      style={{ background: `linear-gradient(180deg, ${format.accentColor}10 0%, transparent 40%)` }}
                    />

                    {/* AI tracking indicator — pulsing box */}
                    <motion.div
                      className="absolute border border-white/30 rounded-sm"
                      style={{
                        top: '15%', left: '20%', right: '20%', bottom: '30%',
                        borderStyle: 'dashed',
                      }}
                      animate={{ opacity: [0.4, 0.8, 0.4] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    />

                    {/* Platform-specific UI overlay */}
                    {OVERLAYS[active]}

                    {/* Format badge top-center */}
                    <div
                      className="absolute top-3 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full text-[10px] font-bold text-white backdrop-blur-sm"
                      style={{ background: `${format.accentColor}cc` }}
                    >
                      {active === '916' ? '9:16' : active === '11' ? '1:1' : '4:5'}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
