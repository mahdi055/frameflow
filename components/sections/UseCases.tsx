'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { User, Building2, Briefcase, CheckCircle2, Clock, TrendingUp, DollarSign, Zap, Film } from 'lucide-react'

const CASES = [
  {
    id: 'creator',
    label: 'Solo Creator',
    Icon: User,
    color: '#7c3aed',
    headline: 'Post everywhere without editing twice',
    description:
      'Film once. FrameFlow handles TikTok, Reels, Shorts, Stories — all at once. More time creating, zero time exporting.',
    benefits: [
      'Save 4+ hours per video on manual cropping',
      'AI keeps your subject perfectly centered',
      'Consistent quality on every platform',
      'One upload, seven platform-ready exports',
    ],
    stat: { Icon: Clock, value: '4.2h', label: 'saved per video on average' },
    tags: ['TikTok', 'Reels', 'Shorts', 'Stories'],
    queue: [
      { name: 'vlog_hawaii_ep3.mp4', status: 'done' },
      { name: 'tutorial_lighting.mp4', status: 'processing', pct: 74 },
      { name: 'bts_shoot_day.mp4', status: 'queued' },
    ],
  },
  {
    id: 'brand',
    label: 'Brand Team',
    Icon: Building2,
    color: '#4f46e5',
    headline: 'Repurpose every campaign in minutes',
    description:
      'Shoot one hero video, auto-generate exports for all channels. Consistent framing, on-brand, no agency overhead.',
    benefits: [
      'Batch entire campaign libraries overnight',
      'Consistent brand framing across all channels',
      'Team review & approval workflow built in',
      'Export with branded overlays and captions',
    ],
    stat: { Icon: TrendingUp, value: '10×', label: 'faster cross-platform repurposing' },
    tags: ['LinkedIn', 'Instagram', 'Facebook', 'YouTube'],
    queue: [
      { name: 'campaign_hero_v2.mp4', status: 'done' },
      { name: 'product_launch_final.mp4', status: 'processing', pct: 52 },
      { name: 'brand_story_cut.mp4', status: 'queued' },
    ],
  },
  {
    id: 'agency',
    label: 'Agency',
    Icon: Briefcase,
    color: '#0ea5e9',
    headline: 'Deliver more without adding headcount',
    description:
      'Add a FrameFlow step to every production workflow. Batch across clients, white-label exports, and ship 3× more deliverables.',
    benefits: [
      'Multi-client project management dashboard',
      'Priority processing queues for deadlines',
      'White-label export packages for clients',
      'API access to plug into your own pipeline',
    ],
    stat: { Icon: DollarSign, value: '3×', label: 'more deliverables per editor' },
    tags: ['Multi-client', 'API Access', 'White Label', 'Batch'],
    queue: [
      { name: 'client_nike_q4_hero.mp4', status: 'done' },
      { name: 'client_zara_lookbook.mp4', status: 'processing', pct: 38 },
      { name: 'client_asos_reel_v3.mp4', status: 'queued' },
    ],
  },
]

export default function UseCases() {
  const [active, setActive] = useState('creator')
  const current = CASES.find(c => c.id === active)!

  return (
    <section className="py-28 bg-[#0d0d14] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-40 right-0 w-[600px] h-[600px] opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 70%)' }}
        />
        <div
          className="absolute bottom-0 left-0 w-[400px] h-[400px] opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #4f46e5 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-4 tracking-wide uppercase">
            Who It&apos;s For
          </span>
          <h2 className="font-display text-4xl sm:text-[2.75rem] text-white mb-4 leading-tight">
            Built for every type of{' '}
            <span className="gradient-text">creator</span>
          </h2>
          <p className="text-white/45 text-base max-w-lg mx-auto">
            Whether you post solo or manage campaigns at scale, FrameFlow fits your workflow.
          </p>
        </motion.div>

        {/* Tab pill selector */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 rounded-2xl bg-[#111118] border border-white/[0.07] gap-1">
            {CASES.map(c => (
              <button
                key={c.id}
                onClick={() => setActive(c.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 cursor-pointer ${
                  active === c.id
                    ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/25'
                    : 'text-white/40 hover:text-white/70'
                }`}
              >
                <c.Icon className="w-4 h-4" />
                {c.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            {/* Left: text */}
            <div>
              <div
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full mb-6 border"
                style={{
                  background: `${current.color}12`,
                  borderColor: `${current.color}30`,
                }}
              >
                <current.Icon className="w-4 h-4" style={{ color: current.color }} />
                <span className="text-sm font-medium" style={{ color: current.color }}>
                  {current.label}
                </span>
              </div>

              <h3 className="font-display text-3xl sm:text-[2rem] text-white leading-tight mb-4">
                {current.headline}
              </h3>
              <p className="text-white/50 text-base leading-relaxed mb-8">
                {current.description}
              </p>

              <ul className="space-y-3 mb-10">
                {current.benefits.map((b, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.3 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: current.color }} />
                    <span className="text-white/70 text-[15px]">{b}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Stat badge */}
              <div
                className="inline-flex items-center gap-4 px-5 py-4 rounded-2xl border"
                style={{ background: `${current.color}0d`, borderColor: `${current.color}25` }}
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `${current.color}18`, border: `1px solid ${current.color}30` }}
                >
                  <current.stat.Icon className="w-5 h-5" style={{ color: current.color }} />
                </div>
                <div>
                  <p className="text-2xl font-bold" style={{ color: current.color }}>
                    {current.stat.value}
                  </p>
                  <p className="text-white/40 text-xs">{current.stat.label}</p>
                </div>
              </div>
            </div>

            {/* Right: Dashboard mock */}
            <div className="relative">
              <div
                className="absolute inset-0 rounded-3xl blur-3xl opacity-[0.12]"
                style={{ background: current.color }}
              />

              <div className="relative rounded-2xl bg-[#111118] border border-white/[0.07] overflow-hidden shadow-2xl shadow-black/50">
                {/* Toolbar */}
                <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.06]">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                  </div>
                  <span className="text-white/20 text-[11px] font-medium tracking-widest uppercase">
                    FrameFlow · {current.label}
                  </span>
                  <div
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-medium"
                    style={{ background: `${current.color}12`, borderColor: `${current.color}30`, color: current.color }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                    Live
                  </div>
                </div>

                {/* Queue */}
                <div className="p-5 space-y-3">
                  {current.queue.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.04]"
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: `${current.color}15`, border: `1px solid ${current.color}25` }}
                      >
                        <Film className="w-3.5 h-3.5" style={{ color: current.color }} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-white/60 text-[13px] truncate mb-1">{item.name}</p>
                        {item.status === 'processing' && (
                          <div className="h-1 rounded-full bg-white/[0.07] overflow-hidden">
                            <motion.div
                              className="h-full rounded-full"
                              style={{ background: `linear-gradient(to right, ${current.color}80, ${current.color})` }}
                              initial={{ width: '0%' }}
                              animate={{ width: `${'pct' in item ? item.pct : 0}%` }}
                              transition={{ duration: 1.2, ease: 'easeOut' }}
                            />
                          </div>
                        )}
                      </div>
                      <div className="flex-shrink-0">
                        {item.status === 'done' && (
                          <span className="px-2.5 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-semibold">
                            Done
                          </span>
                        )}
                        {item.status === 'processing' && (
                          <span
                            className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold border"
                            style={{ background: `${current.color}15`, borderColor: `${current.color}30`, color: current.color }}
                          >
                            {'pct' in item ? item.pct : 0}%
                          </span>
                        )}
                        {item.status === 'queued' && (
                          <span className="px-2.5 py-0.5 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/30 text-[10px] font-semibold">
                            Queued
                          </span>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Platform tags row */}
                  <div className="flex items-center gap-2 pt-3 border-t border-white/[0.04]">
                    <span className="text-white/25 text-[11px] mr-1 flex-shrink-0">Exporting for:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {current.tags.map(t => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded-full text-[10px] font-medium"
                          style={{ background: `${current.color}12`, color: current.color, border: `1px solid ${current.color}22` }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Formats output row */}
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    {['9:16', '1:1', '4:5'].map(fmt => (
                      <div
                        key={fmt}
                        className="flex flex-col items-center gap-1.5 p-3 rounded-xl border"
                        style={{ background: `${current.color}06`, borderColor: `${current.color}15` }}
                      >
                        <Zap className="w-3.5 h-3.5" style={{ color: current.color, opacity: 0.7 }} />
                        <span className="text-white/50 text-[11px] font-semibold">{fmt}</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
