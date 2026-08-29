import { Metadata } from 'next'
import Link from 'next/link'
import { Handshake, Zap, Users, BarChart3, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Partners',
  description:
    'Partner with FrameFlow as an affiliate, agency, or integration partner. Earn commission and unlock exclusive benefits.',
  keywords: ['FrameFlow partners', 'affiliate program', 'agency partner', 'video tool integration'],
  alternates: { canonical: 'https://frameflow.io/partners' },
  openGraph: {
    title: 'FrameFlow Partner Program',
    description: 'Affiliate, agency, and integration partnerships. Earn revenue sharing and get co-marketing support.',
    url: 'https://frameflow.io/partners',
  },
  twitter: {
    title: 'FrameFlow Partner Program',
    description: 'Affiliate, agency, and integration partnerships. Earn revenue sharing and get co-marketing support.',
  },
}

const TIERS = [
  {
    icon: Zap,
    title: 'Affiliate',
    desc: 'Earn 30% recurring commission for every customer you refer. Perfect for creators and educators.',
    cta: 'Become an affiliate',
  },
  {
    icon: Users,
    title: 'Agency',
    desc: 'Resell FrameFlow to your clients at a discount and manage everything from one dashboard.',
    cta: 'Apply for agency access',
  },
  {
    icon: BarChart3,
    title: 'Integration',
    desc: 'Build a native integration with FrameFlow via our API and get listed in our ecosystem directory.',
    cta: 'Explore the API',
    href: '/api-docs',
  },
]

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-5 tracking-wide uppercase">
            Partners
          </span>
          <h1 className="font-display text-4xl sm:text-5xl text-white mb-5 leading-tight">
            Grow together with{' '}
            <span className="gradient-text">FrameFlow</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed">
            Whether you are a creator, agency, or software company, we have a partnership that works for you.
          </p>
        </div>

        {/* Tiers */}
        <div className="grid sm:grid-cols-3 gap-5 mb-16">
          {TIERS.map((tier) => {
            const Icon = tier.icon
            return (
              <div key={tier.title} className="p-6 rounded-2xl bg-[#111118] border border-white/[0.07] flex flex-col">
                <div className="w-10 h-10 rounded-lg bg-violet-600/10 border border-violet-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-4 h-4 text-violet-400" />
                </div>
                <h3 className="font-display text-white font-semibold mb-2">{tier.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed flex-1 mb-5">{tier.desc}</p>
                <Link
                  href={tier.href ?? '/contact'}
                  className="flex items-center gap-1 text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors"
                >
                  {tier.cta} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            )
          })}
        </div>

        {/* CTA */}
        <div className="p-8 rounded-2xl bg-[#111118] border border-white/[0.07] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center flex-shrink-0">
              <Handshake className="w-5 h-5 text-violet-400" />
            </div>
            <div>
              <p className="text-white font-medium">Ready to partner?</p>
              <p className="text-white/40 text-sm">Our partnerships team will respond within 2 business days.</p>
            </div>
          </div>
          <Link href="/contact" className="flex-shrink-0 px-5 py-2.5 text-sm font-medium bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition-colors">
            Get in touch
          </Link>
        </div>
      </div>
    </main>
  )
}
