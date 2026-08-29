import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description:
    'FrameFlow Cookie Policy — how we use cookies and similar tracking technologies on our platform.',
  keywords: ['FrameFlow cookie policy', 'cookie consent', 'tracking policy'],
  alternates: { canonical: 'https://frameflow.io/cookies' },
  openGraph: {
    title: 'FrameFlow Cookie Policy',
    description: 'Learn how FrameFlow uses cookies and how to manage your preferences.',
    url: 'https://frameflow.io/cookies',
  },
  twitter: {
    title: 'FrameFlow Cookie Policy',
    description: 'Learn how FrameFlow uses cookies and how to manage your preferences.',
  },
}

const COOKIE_TYPES = [
  {
    name: 'Essential',
    required: true,
    examples: 'Session token, CSRF token, language preference',
    purpose: 'Required to log in and use the product. The site cannot function without these.',
  },
  {
    name: 'Analytics',
    required: false,
    examples: 'PostHog, Plausible',
    purpose: 'Help us understand which features are used and where users get stuck. All data is aggregated and anonymized.',
  },
  {
    name: 'Preferences',
    required: false,
    examples: 'Theme (dark/light), sidebar state',
    purpose: 'Remember your UI preferences across sessions so you do not have to reconfigure them each visit.',
  },
]

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-5 tracking-wide uppercase">
            Legal
          </span>
          <h1 className="font-display text-4xl text-white mb-3">Cookie Policy</h1>
          <p className="text-white/40 text-sm">Last updated: January 1, 2025</p>
        </div>

        <div className="space-y-8 text-white/60 text-sm leading-relaxed">
          <section>
            <h2 className="font-display text-lg text-white mb-3">What are cookies?</h2>
            <p>Cookies are small text files placed on your device by websites you visit. They are widely used to make sites work, improve user experience, and provide reporting information.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-5">Cookies we use</h2>
            <div className="space-y-4">
              {COOKIE_TYPES.map((ct) => (
                <div key={ct.name} className="p-5 rounded-xl bg-[#111118] border border-white/[0.07]">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="font-display text-white font-semibold">{ct.name}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-[11px] font-medium ${ct.required ? 'bg-violet-600/20 text-violet-300' : 'bg-white/[0.06] text-white/40'}`}>
                      {ct.required ? 'Required' : 'Optional'}
                    </span>
                  </div>
                  <p className="text-white/60 mb-2">{ct.purpose}</p>
                  <p className="text-white/35 text-xs">Examples: {ct.examples}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">Managing cookies</h2>
            <p>You can control non-essential cookies via your browser settings. Note that disabling cookies may affect some features of the product. Essential cookies cannot be disabled as they are required for the service to function.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">Contact</h2>
            <p>Questions? Email <a href="mailto:privacy@frameflow.ai" className="text-violet-400 hover:text-violet-300">privacy@frameflow.ai</a>.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
