import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'FrameFlow Terms of Service — the rules that govern your use of the FrameFlow platform.',
  keywords: ['FrameFlow terms of service', 'terms and conditions', 'user agreement'],
  alternates: { canonical: 'https://frameflow.io/terms' },
  openGraph: {
    title: 'FrameFlow Terms of Service',
    description: 'Read the terms that govern your use of the FrameFlow platform.',
    url: 'https://frameflow.io/terms',
  },
  twitter: {
    title: 'FrameFlow Terms of Service',
    description: 'Read the terms that govern your use of the FrameFlow platform.',
  },
}

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-5 tracking-wide uppercase">
            Legal
          </span>
          <h1 className="font-display text-4xl text-white mb-3">Terms of Service</h1>
          <p className="text-white/40 text-sm">Last updated: January 1, 2025</p>
        </div>

        <div className="space-y-8 text-white/60 leading-relaxed text-sm">
          <section>
            <h2 className="font-display text-lg text-white mb-3">1. Acceptance of terms</h2>
            <p>By accessing or using FrameFlow (&quot;Service&quot;), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">2. Use of the service</h2>
            <p>You may use FrameFlow only for lawful purposes and in accordance with these Terms. You must not upload content that infringes third-party intellectual property rights, violates any law, or contains malicious code.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">3. Account</h2>
            <p>You are responsible for maintaining the confidentiality of your account credentials. You are responsible for all activity that occurs under your account. Notify us immediately at support@frameflow.ai if you suspect unauthorized access.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">4. Content ownership</h2>
            <p>You retain all rights to the videos you upload. By uploading, you grant FrameFlow a limited, non-exclusive license to process your videos solely to provide the Service. We will not distribute or use your content for any other purpose.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">5. Payments and billing</h2>
            <p>Subscription fees are charged in advance on a monthly or annual basis. All payments are processed securely by Stripe. See our <a href="/refund" className="text-violet-400 hover:text-violet-300">Refund Policy</a> for cancellation and refund terms.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">6. Limitation of liability</h2>
            <p>FrameFlow is provided &quot;as is&quot; without warranties of any kind. In no event shall FrameFlow be liable for indirect, incidental, or consequential damages arising from your use of the Service, even if we have been advised of the possibility of such damages.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">7. Changes to terms</h2>
            <p>We may modify these Terms at any time. We will notify you of material changes by email or in-app notice. Continued use after changes constitutes acceptance.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">8. Contact</h2>
            <p>Questions? Email <a href="mailto:legal@frameflow.ai" className="text-violet-400 hover:text-violet-300">legal@frameflow.ai</a>.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
