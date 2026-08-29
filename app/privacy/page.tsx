import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'FrameFlow Privacy Policy — how we collect, use, and protect your personal data.',
  keywords: ['FrameFlow privacy policy', 'data privacy', 'GDPR'],
  alternates: { canonical: 'https://frameflow.io/privacy' },
  openGraph: {
    title: 'FrameFlow Privacy Policy',
    description: 'Read our privacy policy to understand how FrameFlow handles your data.',
    url: 'https://frameflow.io/privacy',
  },
  twitter: {
    title: 'FrameFlow Privacy Policy',
    description: 'Read our privacy policy to understand how FrameFlow handles your data.',
  },
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-5 tracking-wide uppercase">
            Legal
          </span>
          <h1 className="font-display text-4xl text-white mb-3">Privacy Policy</h1>
          <p className="text-white/40 text-sm">Last updated: January 1, 2025</p>
        </div>

        <div className="prose prose-sm max-w-none space-y-8 text-white/60 leading-relaxed">
          <section>
            <h2 className="font-display text-lg text-white mb-3">1. Information we collect</h2>
            <p>We collect information you provide directly to us, such as when you create an account, upload a video, or contact support. This includes: name, email address, payment information (processed by Stripe, we never store full card numbers), and uploaded video files.</p>
            <p className="mt-3">We also collect usage data automatically, including IP address, browser type, pages visited, and feature usage, to improve the product.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">2. How we use your information</h2>
            <p>We use the information we collect to provide and improve FrameFlow, process payments, send transactional emails, and respond to support requests. We do not sell your personal data to third parties.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">3. Video data</h2>
            <p>Videos you upload are stored temporarily to perform reframing operations. Processed outputs are available for download for 30 days. You may delete your videos at any time from your account. We do not use your video content to train AI models without explicit consent.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">4. Data retention</h2>
            <p>We retain your account data for as long as your account is active. You may request deletion of your account and all associated data at any time by contacting support.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">5. Cookies</h2>
            <p>We use essential cookies to keep you logged in and remember your preferences. We use analytics cookies to understand product usage. See our <a href="/cookies" className="text-violet-400 hover:text-violet-300">Cookie Policy</a> for details.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">6. Your rights</h2>
            <p>Depending on your location, you may have the right to access, correct, or delete your personal data, and to object to or restrict certain processing. Contact us at privacy@frameflow.ai to exercise these rights.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">7. Contact</h2>
            <p>Questions about this policy? Email us at <a href="mailto:privacy@frameflow.ai" className="text-violet-400 hover:text-violet-300">privacy@frameflow.ai</a> or visit our <a href="/contact" className="text-violet-400 hover:text-violet-300">contact page</a>.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
