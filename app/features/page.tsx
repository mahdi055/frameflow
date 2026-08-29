import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Brain, Layers, Zap, Sliders, Move, Webhook, Check, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Explore every FrameFlow feature: AI subject tracking, multi-format export, batch processing, platform presets, and API access.',
  keywords: ['AI subject tracking', 'video reframing features', 'multi-format export', 'batch video processing', 'FrameFlow features'],
  alternates: { canonical: 'https://frameflow.io/features' },
  openGraph: {
    title: 'FrameFlow Features — AI Video Reframing Tools',
    description: 'Smart AI tracking, one-click exports to 9:16 / 1:1 / 4:5, batch processing, and full API access.',
    url: 'https://frameflow.io/features',
  },
  twitter: {
    title: 'FrameFlow Features — AI Video Reframing Tools',
    description: 'Smart AI tracking, one-click exports to 9:16 / 1:1 / 4:5, batch processing, and full API access.',
  },
}

const FEATURE_SECTIONS = [
  {
    icon: Brain,
    headline: 'AI That Tracks Every Subject, Every Frame',
    tag: 'Smart Subject Tracking',
    paragraphs: [
      "FrameFlow's AI model processes video frame-by-frame, identifying primary subjects using face detection, pose estimation, and semantic segmentation. It doesn't just find faces; it identifies what you're filming: a person, a product, a vehicle, or a food dish.",
      'The result is a crop window that moves intelligently with your subject throughout the entire video. Whether your subject walks across the frame, turns to the side, or moves closer to the camera, the AI adjusts the reframe continuously.',
    ],
    subfeatures: [
      'Face and body detection for talking-head content',
      'Object detection for product and e-commerce videos',
      'Motion prediction to anticipate subject movement',
      'Keyframe-level manual override for edge cases',
    ],
    image: '/assets/feature-ai-tracking.webp',
    imageAlt: 'AI subject tracking visualization',
    reversed: false,
  },
  {
    icon: Layers,
    headline: 'One Upload. Three Formats. Simultaneously.',
    tag: 'Multi-Format Export',
    paragraphs: [
      'Most editing tools process formats sequentially: export 9:16, wait, export 1:1, wait, export 4:5, wait. For a 10-minute video at 4K, that is 30+ minutes of rendering time before you can look at the results.',
      'FrameFlow renders all three formats simultaneously using parallel cloud GPU workers. A 10-minute 1080p video is fully processed across all formats in a few minutes. You get a ZIP with all three files, individually named and ready to upload directly to each platform.',
    ],
    subfeatures: [
      '9:16 for TikTok, Instagram Reels, YouTube Shorts',
      '1:1 for Instagram Feed and LinkedIn',
      '4:5 for Pinterest and Facebook Feed',
      'Custom aspect ratios on Creator and Agency plans',
    ],
    image: '/assets/feature-multi-format.webp',
    imageAlt: 'Multi-format export interface',
    reversed: true,
  },
  {
    icon: Zap,
    headline: 'Batch Process Up to 50 Videos at Once',
    tag: 'Batch Processing',
    paragraphs: [
      "For agencies and high-volume creators, single-file processing is a bottleneck. FrameFlow's Agency plan includes batch upload support for up to 50 videos per session. Select your files, choose your target formats and presets, and FrameFlow queues and processes them across a distributed worker pool.",
      'You can monitor batch progress in real time from your dashboard. Each job shows per-video status and you receive an email notification with a download link for the entire batch when it finishes.',
    ],
    subfeatures: [
      'Upload up to 50 videos in a single session',
      'Real-time batch progress monitoring',
      'Email notification on batch completion',
      'Bulk ZIP download for entire batch',
    ],
    image: '/assets/feature-batch.webp',
    imageAlt: 'Batch processing dashboard',
    reversed: false,
  },
  {
    icon: Sliders,
    headline: 'Platform Presets Built Around Real Specs',
    tag: 'Platform Presets',
    paragraphs: [
      'Every platform has its own quirks: TikTok compresses heavily in the center of the frame, Instagram adds a bottom UI bar, YouTube Shorts has a safe zone for subscriber buttons. Our presets are calibrated for each platform, not just the aspect ratio.',
      'Creator and Agency plans include the ability to save custom presets. If your brand always wants a specific safe zone, a particular output bitrate, or a standard caption bar at the bottom of every video, you can encode that into a named preset and apply it to any future upload with one click.',
    ],
    subfeatures: [
      'TikTok: 9:16, 1080x1920, with safe zone offsets',
      'Instagram Reels: 9:16 with bottom UI padding',
      'YouTube Shorts: 9:16 with end-screen safe zone',
      'Custom presets with saved safe zones and padding',
    ],
    image: '/assets/feature-presets.webp',
    imageAlt: 'Platform presets panel',
    reversed: true,
  },
  {
    icon: Move,
    headline: 'Keyframe-Level Manual Control',
    tag: 'Custom Crop Override',
    paragraphs: [
      'The AI is right most of the time. For the rest, you need fine-grained control. FrameFlow includes an in-browser timeline editor where you can scrub through any video and drag the crop window to a new position at any point in time.',
      'Changes create a keyframe at that timestamp. The AI interpolates smoothly between your manual keyframe and the next AI-determined crop point, so corrections blend naturally into the output rather than jumping abruptly.',
    ],
    subfeatures: [
      'Drag-to-reposition crop window on any frame',
      'Smooth interpolation between manual keyframes',
      'Bulk shift all AI crops in a direction',
      'Export only the adjusted version, or re-run AI from scratch',
    ],
    image: '/assets/feature-crop.webp',
    imageAlt: 'Manual crop override timeline',
    reversed: false,
  },
  {
    icon: Webhook,
    headline: 'Automate Everything with the REST API',
    tag: 'API and Integrations',
    paragraphs: [
      "FrameFlow's REST API gives you programmatic access to every feature the product offers. Submit video jobs, poll for status, retrieve signed download URLs, and manage presets from your own application or CI pipeline.",
      'We offer native Zapier and Make integrations for no-code automation. Connect FrameFlow to your Google Drive, Dropbox, Notion database, or Airtable to build automated content workflows.',
    ],
    subfeatures: [
      'REST API with JSON responses and webhook callbacks',
      'Zapier and Make native integrations',
      'SDK clients for Node.js and Python',
      'Postman collection and OpenAPI spec available',
    ],
    image: '/assets/feature-ai-tracking.webp',
    imageAlt: 'API integration diagram',
    reversed: true,
    showCode: true,
  },
]

const CODE_EXAMPLE = `POST /v1/jobs
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "video_url": "https://cdn.example.com/video.mp4",
  "formats": ["9:16", "1:1", "4:5"],
  "preset": "tiktok-standard",
  "webhook_url": "https://yourapp.com/webhooks/frameflow"
}

// Response
{
  "job_id": "job_9f4b2c1a",
  "status": "queued",
  "estimated_seconds": 45,
  "created_at": "2025-03-15T14:32:00Z"
}`

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-16">

      {/* ── HERO ── */}
      <section className="relative overflow-hidden">
        {/* Full-bleed dark background with layered depth */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[#0a0a0f]" />
          {/* Large violet orb centered */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full opacity-[0.14]"
            style={{ background: 'radial-gradient(ellipse, #7c3aed 0%, transparent 65%)', filter: 'blur(1px)' }} />
          {/* Dot grid */}
          <div className="absolute inset-0 dot-grid opacity-20" />
          {/* Noise */}
          <div className="noise-overlay" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 inset-x-0 h-40"
            style={{ background: 'linear-gradient(to bottom, transparent, #0a0a0f)' }} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-center">

            {/* Left: text */}
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-8 tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                Features
              </div>
              <h1 className="font-display text-[3.5rem] sm:text-[4.25rem] text-white leading-[1.05] tracking-tight mb-6">
                The Smartest Way to{' '}
                <span className="gradient-text">Reframe Video</span>
              </h1>
              <p className="text-white/50 text-lg leading-relaxed mb-8 max-w-md">
                Every feature in FrameFlow is built around one goal: getting your video to every platform with zero extra effort.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/signup">
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white text-sm font-semibold rounded-xl transition-colors shadow-lg shadow-violet-600/20 cursor-pointer">
                    Get Started
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
                <Link href="/pricing">
                  <button className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-white/[0.04] hover:bg-white/[0.07] text-white/70 hover:text-white text-sm font-medium transition-all cursor-pointer">
                    View Pricing
                  </button>
                </Link>
              </div>
            </div>

            {/* Right: feature tags / visual */}
            <div className="hidden lg:block">
              <div className="relative">
                {/* Central glowing card */}
                <div className="relative rounded-2xl overflow-hidden bg-[#111118] border border-white/[0.08] p-6 shadow-2xl">
                  {/* Decorative top bar */}
                  <div className="flex items-center gap-1.5 mb-5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                    <div className="ml-auto text-[11px] text-white/25 font-medium tracking-wide">FrameFlow</div>
                  </div>

                  {/* Feature list inside card */}
                  <div className="space-y-3">
                    {[
                      { label: 'AI Subject Tracking', status: 'Active', color: 'text-green-400 bg-green-400/10 border-green-500/20' },
                      { label: 'Multi-Format Export', status: 'Running', color: 'text-violet-400 bg-violet-400/10 border-violet-500/20' },
                      { label: 'Batch Processing', status: 'Queued', color: 'text-amber-400 bg-amber-400/10 border-amber-500/20' },
                      { label: 'Platform Presets', status: 'Ready', color: 'text-blue-400 bg-blue-400/10 border-blue-500/20' },
                      { label: 'REST API', status: 'Connected', color: 'text-emerald-400 bg-emerald-400/10 border-emerald-500/20' },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                        <span className="text-[13px] text-white/70 font-medium">{item.label}</span>
                        <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${item.color}`}>
                          {item.status}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Progress bar */}
                  <div className="mt-5 pt-4 border-t border-white/[0.05]">
                    <div className="flex items-center justify-between text-[11px] mb-2">
                      <span className="text-white/40">Processing batch</span>
                      <span className="text-violet-400 font-medium">3 / 5 done</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                      <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-violet-600 to-indigo-500" />
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 px-3 py-2 rounded-xl bg-[#111118] border border-white/[0.08] shadow-xl">
                  <span className="text-[11px] text-white/50">Formats rendered</span>
                  <div className="flex gap-1.5 mt-1">
                    {['9:16', '1:1', '4:5'].map(f => (
                      <span key={f} className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-violet-600/20 text-violet-300 border border-violet-500/20">{f}</span>
                    ))}
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 flex items-center gap-2 px-3 py-2 rounded-xl bg-[#111118] border border-white/[0.08] shadow-xl">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[11px] text-white/50">All systems</span>
                  <span className="text-[11px] text-green-400 font-medium">operational</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURE SECTIONS ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 space-y-28 pt-8">
        {FEATURE_SECTIONS.map((section, idx) => {
          const Icon = section.icon
          return (
            <div
              key={section.tag}
              className={`flex flex-col ${section.reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-20 items-center`}
            >
              {/* Text */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-violet-400" />
                  </div>
                  <span className="text-violet-300/80 text-xs font-medium uppercase tracking-widest">{section.tag}</span>
                </div>
                <h2 className="font-display text-3xl sm:text-[2.25rem] text-white mb-5 leading-tight">{section.headline}</h2>
                {section.paragraphs.map((p, i) => (
                  <p key={i} className="text-white/50 leading-relaxed mb-4 text-[15px]">
                    {p}
                  </p>
                ))}
                <ul className="space-y-2.5 mt-5">
                  {section.subfeatures.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-[14px] text-white/65">
                      <div className="w-5 h-5 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-400" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/signup"
                  className="inline-flex items-center gap-1.5 text-violet-400 hover:text-violet-300 text-sm font-medium mt-7 transition-colors group"
                >
                  Get started
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>

              {/* Image or Code block */}
              <div className="flex-1 w-full">
                {section.showCode ? (
                  <div className="rounded-2xl bg-[#111118] border border-white/[0.08] overflow-hidden shadow-2xl">
                    <div className="flex items-center gap-1.5 px-4 py-3.5 border-b border-white/[0.06]">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                      <span className="ml-3 text-white/25 text-xs font-medium">API Request</span>
                    </div>
                    <pre className="p-5 text-xs text-white/60 overflow-x-auto leading-relaxed font-mono">
                      {CODE_EXAMPLE.split('\n').map((line, i) => {
                        if (line.startsWith('POST') || line.startsWith('Authorization') || line.startsWith('Content-Type')) {
                          return (
                            <div key={i}>
                              <span className="text-violet-400">{line.split(':')[0]}</span>
                              {line.includes(':') ? <span className="text-white/55">:{line.split(':').slice(1).join(':')}</span> : null}
                            </div>
                          )
                        }
                        if (line.includes('//')) {
                          return <div key={i} className="text-white/25 mt-3">{line}</div>
                        }
                        if (line.includes('"') && line.includes(':')) {
                          const [key, ...rest] = line.split(':')
                          return (
                            <div key={i}>
                              <span className="text-indigo-300/80">{key}</span>
                              <span className="text-white/55">:{rest.join(':')}</span>
                            </div>
                          )
                        }
                        return <div key={i} className="text-white/40">{line}</div>
                      })}
                    </pre>
                  </div>
                ) : (
                  <div className="relative rounded-2xl overflow-hidden border border-white/[0.07] shadow-2xl" style={{ aspectRatio: '4/3' }}>
                    <Image
                      src={section.image}
                      alt={section.imageAlt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                    {/* Tag overlay */}
                    <div className="absolute top-4 left-4 px-2.5 py-1 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10">
                      <span className="text-[11px] text-white/60 font-medium uppercase tracking-wide">{section.tag}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
