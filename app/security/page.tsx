import { Metadata } from 'next'
import { Shield, Lock, Eye, Server, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Security',
  description:
    'FrameFlow security practices — encryption, data handling, SOC 2 compliance, and responsible disclosure.',
  keywords: ['FrameFlow security', 'video platform security', 'SOC 2 compliance', 'data encryption'],
  alternates: { canonical: 'https://frameflow.io/security' },
  openGraph: {
    title: 'FrameFlow Security',
    description: 'How FrameFlow protects your videos and data — encryption, compliance, and responsible disclosure.',
    url: 'https://frameflow.io/security',
  },
  twitter: {
    title: 'FrameFlow Security',
    description: 'How FrameFlow protects your videos and data — encryption, compliance, and responsible disclosure.',
  },
}

const PRACTICES = [
  {
    icon: Lock,
    title: 'Encryption in transit',
    desc: 'All data transferred between your browser and our servers is encrypted using TLS 1.3.',
  },
  {
    icon: Server,
    title: 'Encryption at rest',
    desc: 'Videos and account data are encrypted at rest using AES-256 on SOC 2-compliant infrastructure.',
  },
  {
    icon: Eye,
    title: 'Access control',
    desc: 'Customer data is accessed by employees only when necessary to resolve support issues, with full audit logging.',
  },
  {
    icon: Shield,
    title: 'Vulnerability management',
    desc: 'We conduct regular security reviews and dependency audits. Critical patches are deployed within 24 hours.',
  },
]

export default function SecurityPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-5 tracking-wide uppercase">
            Security
          </span>
          <h1 className="font-display text-4xl sm:text-5xl text-white mb-5 leading-tight">
            Your data,{' '}
            <span className="gradient-text">protected</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed">
            Security is built into every layer of FrameFlow. Here is how we keep your videos and account safe.
          </p>
        </div>

        {/* Practices */}
        <div className="grid sm:grid-cols-2 gap-5 mb-14">
          {PRACTICES.map((p) => {
            const Icon = p.icon
            return (
              <div key={p.title} className="p-6 rounded-2xl bg-[#111118] border border-white/[0.07]">
                <div className="w-10 h-10 rounded-lg bg-violet-600/10 border border-violet-500/20 flex items-center justify-center mb-4">
                  <Icon className="w-4 h-4 text-violet-400" />
                </div>
                <h3 className="font-display text-white font-semibold mb-2">{p.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">{p.desc}</p>
              </div>
            )
          })}
        </div>

        {/* Responsible disclosure */}
        <div className="p-7 rounded-2xl bg-[#111118] border border-white/[0.07] flex gap-5">
          <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
          </div>
          <div>
            <h3 className="font-display text-white font-semibold mb-2">Responsible disclosure</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-3">
              If you discover a security vulnerability in FrameFlow, please report it responsibly. We review all reports and respond within 72 hours.
            </p>
            <a
              href="mailto:security@frameflow.ai"
              className="text-violet-400 hover:text-violet-300 text-sm font-medium transition-colors"
            >
              security@frameflow.ai
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
