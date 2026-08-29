import { Metadata } from 'next'
import Link from 'next/link'
import { Search, BookOpen, Video, CreditCard, Zap, Code, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Help Center',
  description:
    'Find answers to your FrameFlow questions — getting started guides, format specs, billing help, and troubleshooting.',
  keywords: ['FrameFlow help', 'video reframing guide', 'FrameFlow support docs', 'how to use FrameFlow'],
  alternates: { canonical: 'https://frameflow.io/help-center' },
  openGraph: {
    title: 'FrameFlow Help Center',
    description: 'Guides, tutorials, and answers to your most common FrameFlow questions.',
    url: 'https://frameflow.io/help-center',
  },
  twitter: {
    title: 'FrameFlow Help Center',
    description: 'Guides, tutorials, and answers to your most common FrameFlow questions.',
  },
}

const CATEGORIES = [
  { icon: Video, title: 'Getting Started', count: 8, href: '#getting-started' },
  { icon: Zap, title: 'AI Reframing', count: 12, href: '#reframing' },
  { icon: CreditCard, title: 'Billing & Plans', count: 6, href: '#billing' },
  { icon: Code, title: 'API & Integrations', count: 10, href: '#api' },
  { icon: BookOpen, title: 'Tutorials', count: 15, href: '#tutorials' },
]

const POPULAR = [
  'How does AI subject tracking work?',
  'What video formats are supported?',
  'How do I cancel or change my plan?',
  'Can I export to custom aspect ratios?',
  'How do I use the API?',
]

export default function HelpCenterPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="font-display text-4xl sm:text-5xl text-white mb-4 leading-tight">
            How can we <span className="gradient-text">help?</span>
          </h1>
          <p className="text-white/50 text-base mb-8">Search our documentation or browse by category.</p>
          {/* Search */}
          <div className="relative max-w-xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-11 pr-4 py-3.5 bg-[#111118] border border-white/[0.08] rounded-xl text-white placeholder-white/30 text-sm focus:outline-none focus:border-violet-500/50 transition-colors"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-14">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon
            return (
              <a
                key={cat.title}
                href={cat.href}
                className="flex items-center gap-4 p-5 rounded-xl bg-[#111118] border border-white/[0.07] hover:border-violet-500/30 transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-violet-600/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-violet-400" />
                </div>
                <div>
                  <p className="text-white font-medium text-sm">{cat.title}</p>
                  <p className="text-white/35 text-xs">{cat.count} articles</p>
                </div>
                <ArrowRight className="w-4 h-4 text-white/20 group-hover:text-violet-400 ml-auto transition-colors" />
              </a>
            )
          })}
        </div>

        {/* Popular */}
        <h2 className="font-display text-xl text-white mb-5">Popular articles</h2>
        <div className="space-y-2 mb-14">
          {POPULAR.map((q) => (
            <a
              key={q}
              href="#"
              className="flex items-center justify-between p-4 rounded-xl bg-[#111118] border border-white/[0.07] hover:border-violet-500/30 transition-all group"
            >
              <span className="text-white/70 text-sm group-hover:text-white transition-colors">{q}</span>
              <ArrowRight className="w-3.5 h-3.5 text-white/20 group-hover:text-violet-400 transition-colors flex-shrink-0" />
            </a>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="p-6 rounded-2xl bg-[#111118] border border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-medium">Still need help?</p>
            <p className="text-white/40 text-sm">Our team usually responds within a few hours.</p>
          </div>
          <Link href="/contact" className="flex-shrink-0 px-5 py-2.5 text-sm font-medium bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition-colors">
            Contact support
          </Link>
        </div>
      </div>
    </main>
  )
}
