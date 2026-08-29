import { Metadata } from 'next'
import Link from 'next/link'
import { Briefcase, MapPin, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join the FrameFlow team and help build the future of AI-powered video tools. Remote-first, mission-driven.',
  keywords: ['FrameFlow careers', 'AI startup jobs', 'remote video tech jobs'],
  alternates: { canonical: 'https://frameflow.io/careers' },
  openGraph: {
    title: 'Careers at FrameFlow',
    description: 'Build the future of AI video. Remote-first, mission-driven roles across engineering, design, and growth.',
    url: 'https://frameflow.io/careers',
  },
  twitter: {
    title: 'Careers at FrameFlow',
    description: 'Build the future of AI video. Remote-first, mission-driven roles across engineering, design, and growth.',
  },
}

const OPENINGS = [
  { title: 'Senior Full-Stack Engineer', team: 'Engineering', location: 'Remote', type: 'Full-time' },
  { title: 'AI/ML Engineer', team: 'Engineering', location: 'Remote', type: 'Full-time' },
  { title: 'Product Designer', team: 'Design', location: 'Remote', type: 'Full-time' },
  { title: 'Growth Marketing Manager', team: 'Marketing', location: 'Remote', type: 'Full-time' },
]

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-5 tracking-wide uppercase">
            Careers
          </span>
          <h1 className="font-display text-4xl sm:text-5xl text-white mb-5 leading-tight">
            Build the future of{' '}
            <span className="gradient-text">video creation</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed">
            We are a small, ambitious team building AI tools that save creators hours every week. We move fast and care deeply about craft.
          </p>
        </div>

        {/* Open Roles */}
        <h2 className="font-display text-xl text-white mb-6">Open roles</h2>
        <div className="space-y-3 mb-16">
          {OPENINGS.map((role) => (
            <div
              key={role.title}
              className="flex items-center justify-between p-5 rounded-xl bg-[#111118] border border-white/[0.07] hover:border-violet-500/30 transition-all group"
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-violet-600/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="w-4 h-4 text-violet-400" />
                </div>
                <div>
                  <p className="text-white font-medium text-[15px]">{role.title}</p>
                  <div className="flex items-center gap-3 mt-1">
                    <span className="text-white/40 text-xs">{role.team}</span>
                    <span className="text-white/20 text-xs">·</span>
                    <span className="flex items-center gap-1 text-white/40 text-xs">
                      <MapPin className="w-3 h-3" /> {role.location}
                    </span>
                    <span className="text-white/20 text-xs">·</span>
                    <span className="text-white/40 text-xs">{role.type}</span>
                  </div>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-violet-400 group-hover:translate-x-1 transition-all" />
            </div>
          ))}
        </div>

        {/* No role? */}
        <div className="p-8 rounded-2xl bg-violet-600/10 border border-violet-500/20 text-center">
          <h3 className="font-display text-xl text-white mb-2">Don&apos;t see a fit?</h3>
          <p className="text-white/50 text-sm mb-5">Send us a note anyway. We hire for talent, not just open headcount.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition-colors">
            Get in touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  )
}
