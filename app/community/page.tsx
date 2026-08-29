import { Metadata } from 'next'
import { Users, MessageSquare, Star, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Community',
  description:
    'Join the FrameFlow creator community on Discord — share tips, get feedback, and connect with 20K+ creators.',
  keywords: ['FrameFlow community', 'creator Discord', 'video creator forum', 'content creator community'],
  alternates: { canonical: 'https://frameflow.io/community' },
  openGraph: {
    title: 'FrameFlow Community',
    description: '20K+ creators sharing tips, workflows, and feedback. Join us on Discord.',
    url: 'https://frameflow.io/community',
  },
  twitter: {
    title: 'FrameFlow Community',
    description: '20K+ creators sharing tips, workflows, and feedback. Join us on Discord.',
  },
}

const CHANNELS = [
  { icon: MessageSquare, title: '#general', desc: 'Introductions and general chat', members: '840+' },
  { icon: Star, title: '#showcase', desc: 'Share your reframed videos', members: '620+' },
  { icon: MessageSquare, title: '#tips-and-tricks', desc: 'Workflow tips from power users', members: '530+' },
  { icon: MessageSquare, title: '#feature-requests', desc: 'Suggest what we should build next', members: '490+' },
]

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-5 tracking-wide uppercase">
            Community
          </span>
          <h1 className="font-display text-4xl sm:text-5xl text-white mb-5 leading-tight">
            Meet the{' '}
            <span className="gradient-text">creators</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed">
            Join 1,200+ creators sharing workflows, tips, and feedback. Our Discord is where the product gets built alongside users.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-14">
          {[
            { value: '1,200+', label: 'Members' },
            { value: '4.8k', label: 'Messages/month' },
            { value: '98%', label: 'Questions answered' },
          ].map((stat) => (
            <div key={stat.label} className="p-5 rounded-xl bg-[#111118] border border-white/[0.07] text-center">
              <p className="font-display text-2xl text-white font-bold mb-1">{stat.value}</p>
              <p className="text-white/40 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Channels */}
        <h2 className="font-display text-xl text-white mb-5">What&apos;s inside</h2>
        <div className="space-y-3 mb-12">
          {CHANNELS.map((ch) => {
            const Icon = ch.icon
            return (
              <div key={ch.title} className="flex items-center gap-4 p-5 rounded-xl bg-[#111118] border border-white/[0.07]">
                <div className="w-10 h-10 rounded-lg bg-violet-600/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-violet-400" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-medium text-sm">{ch.title}</p>
                  <p className="text-white/40 text-xs">{ch.desc}</p>
                </div>
                <div className="flex items-center gap-1 text-white/30 text-xs">
                  <Users className="w-3 h-3" /> {ch.members}
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-violet-600/10 border border-violet-500/20 text-center">
          <h3 className="font-display text-xl text-white mb-2">Join the Discord</h3>
          <p className="text-white/50 text-sm mb-6">Free to join. Ask questions, share your work, vote on features.</p>
          <a
            href="https://discord.gg/frameflow"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition-colors"
          >
            Join the community <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </main>
  )
}
