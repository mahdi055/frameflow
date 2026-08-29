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
    examples: 'Session token, CSRF token, authentication state',
    purpose:
      'Required to log you in, keep you authenticated, and protect against cross-site request forgery. The Service cannot function without these cookies. They expire when you close your browser or after a fixed session period.',
  },
  {
    name: 'Analytics',
    required: false,
    examples: 'PostHog, Plausible',
    purpose:
      'Help us understand how users interact with the Service — which features are used, where users get stuck, and how to improve the product. All analytics data is aggregated and anonymized. No personally identifiable information is shared with analytics providers.',
  },
  {
    name: 'Preferences',
    required: false,
    examples: 'Theme (dark/light), export settings, sidebar state',
    purpose:
      'Remember your UI preferences and configuration across sessions so you do not need to reconfigure them each time you visit. These improve your experience but are not required for core functionality.',
  },
  {
    name: 'Third-party',
    required: false,
    examples: 'Stripe (payment), Intercom (support chat)',
    purpose:
      'Certain third-party services we integrate with — such as our payment processor and support tools — may set their own cookies. These are governed by the respective provider\'s privacy policy and are used only for the purpose of delivering that service.',
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

        <div className="space-y-10 text-white/60 text-sm leading-relaxed">

          <section>
            <p>This Cookie Policy explains how FrameFlow (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar tracking technologies when you visit or use our platform. By using the Service, you consent to our use of cookies as described in this policy.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">1. What are cookies?</h2>
            <p className="mb-3">Cookies are small text files placed on your device by websites you visit. They are widely used to make websites work, improve user experience, and provide information to site owners. Cookies can be:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><strong className="text-white/80">Session cookies</strong> — temporary cookies that expire when you close your browser.</li>
              <li><strong className="text-white/80">Persistent cookies</strong> — cookies that remain on your device for a set period or until you delete them.</li>
              <li><strong className="text-white/80">First-party cookies</strong> — set directly by FrameFlow.</li>
              <li><strong className="text-white/80">Third-party cookies</strong> — set by external services we use, such as payment processors or analytics providers.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-5">2. Cookies we use</h2>
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
            <h2 className="font-display text-lg text-white mb-3">3. Third-party services</h2>
            <p className="mb-3">Certain third-party services integrated into FrameFlow may set their own cookies independently. These services include:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><strong className="text-white/80">Stripe</strong> — payment processing. Stripe may set cookies related to fraud prevention and session state. See <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-300">Stripe&apos;s Privacy Policy</a>.</li>
              <li><strong className="text-white/80">Analytics providers</strong> — we use privacy-first analytics tools that anonymize data and do not share personally identifiable information with third parties.</li>
            </ul>
            <p className="mt-3">Third-party cookies are governed by the respective provider&apos;s policies. We encourage you to review their privacy notices.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">4. Managing cookies</h2>
            <p className="mb-3">You can control and manage cookies in several ways:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><strong className="text-white/80">Browser settings</strong> — most browsers allow you to view, block, or delete cookies through their settings menus. Refer to your browser&apos;s help documentation for instructions.</li>
              <li><strong className="text-white/80">Opt-out tools</strong> — you may opt out of analytics tracking through your browser&apos;s Do Not Track setting or by using browser extensions designed for this purpose.</li>
            </ul>
            <p className="mt-3">Please note that disabling essential cookies will prevent you from logging in and using the Service. Disabling optional cookies may affect certain features and your experience but will not prevent access to core functionality.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">5. Changes to this policy</h2>
            <p>We may update this Cookie Policy from time to time. When we make material changes, we will post the updated policy on this page and update the &quot;Last updated&quot; date above. We encourage you to review this policy periodically.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">6. Contact us</h2>
            <p>Questions about our use of cookies? Email us at <a href="mailto:privacy@frameflow.ai" className="text-violet-400 hover:text-violet-300">privacy@frameflow.ai</a> or visit our <a href="/contact" className="text-violet-400 hover:text-violet-300">contact page</a>.</p>
          </section>

        </div>
      </div>
    </main>
  )
}
