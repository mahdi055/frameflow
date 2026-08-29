import { Metadata } from 'next'
import { Shield, Lock, Eye, Server, AlertTriangle, RefreshCw, Users, Activity } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Security',
  description:
    'FrameFlow security practices — encryption, access controls, infrastructure security, and responsible disclosure.',
  keywords: ['FrameFlow security', 'video platform security', 'data encryption', 'responsible disclosure'],
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
    desc: 'All data transmitted between your browser and our servers is encrypted using TLS 1.3. We enforce HTTPS across all endpoints and reject insecure connections.',
  },
  {
    icon: Server,
    title: 'Encryption at rest',
    desc: 'Videos, account data, and backups are encrypted at rest using AES-256 on SOC 2-compliant cloud infrastructure. Encryption keys are managed with strict access controls.',
  },
  {
    icon: Eye,
    title: 'Access controls',
    desc: 'Internal access to production systems is restricted to authorized personnel only, logged in full, and reviewed regularly. Customer data is accessed only when necessary to resolve support issues.',
  },
  {
    icon: Shield,
    title: 'Secure infrastructure',
    desc: 'FrameFlow runs on cloud providers that maintain industry-standard physical and network security controls, including redundant data centers and DDoS mitigation.',
  },
  {
    icon: Activity,
    title: 'Monitoring and logging',
    desc: 'We monitor our systems 24/7 for anomalous activity and maintain detailed audit logs to detect and respond to potential security incidents rapidly.',
  },
  {
    icon: RefreshCw,
    title: 'Regular security reviews',
    desc: 'We conduct periodic security assessments and dependency audits. Critical patches are deployed within 24 hours of disclosure. Dependencies are reviewed and updated on a regular cadence.',
  },
  {
    icon: Users,
    title: 'Vendor due diligence',
    desc: 'Payment processing is handled by Stripe, which is PCI DSS Level 1 certified — the highest level of certification available. We do not store full card numbers on our servers.',
  },
  {
    icon: Shield,
    title: 'Data isolation',
    desc: 'Each user account\'s data is logically isolated. Video files and project data cannot be accessed by other users. Access permissions are enforced at every layer of the stack.',
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

        {/* Practices grid */}
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

        {/* Your responsibilities */}
        <div className="p-7 rounded-2xl bg-[#111118] border border-white/[0.07] mb-5">
          <h3 className="font-display text-white font-semibold mb-3">Your responsibilities</h3>
          <p className="text-white/50 text-sm leading-relaxed mb-4">
            Security is a shared responsibility. To keep your account secure, we recommend:
          </p>
          <ul className="space-y-2 text-white/50 text-sm">
            <li className="flex items-start gap-2"><span className="text-violet-400 mt-0.5">→</span> Use a strong, unique password for your FrameFlow account.</li>
            <li className="flex items-start gap-2"><span className="text-violet-400 mt-0.5">→</span> Enable two-factor authentication when available.</li>
            <li className="flex items-start gap-2"><span className="text-violet-400 mt-0.5">→</span> Do not share your account credentials with others.</li>
            <li className="flex items-start gap-2"><span className="text-violet-400 mt-0.5">→</span> Log out of shared or public devices after use.</li>
            <li className="flex items-start gap-2"><span className="text-violet-400 mt-0.5">→</span> Contact us immediately if you notice any suspicious activity on your account.</li>
          </ul>
        </div>

        {/* Responsible disclosure */}
        <div className="p-7 rounded-2xl bg-[#111118] border border-white/[0.07] flex gap-5">
          <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center flex-shrink-0">
            <AlertTriangle className="w-4 h-4 text-amber-400" />
          </div>
          <div>
            <h3 className="font-display text-white font-semibold mb-2">Responsible disclosure</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-3">
              If you discover a security vulnerability in FrameFlow, please report it to us before making it public. We review all reports and respond within 72 hours. We are committed to working with security researchers to understand and resolve valid reports quickly.
            </p>
            <p className="text-white/50 text-sm leading-relaxed mb-3">
              When reporting, please include: a description of the vulnerability, steps to reproduce it, and the potential impact. We ask that you do not access, modify, or delete data that is not yours, and that you avoid disrupting production systems during your research.
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
