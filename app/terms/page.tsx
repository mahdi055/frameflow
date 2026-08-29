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

        <div className="space-y-10 text-white/60 text-sm leading-relaxed">

          <section>
            <p>These Terms of Service (&quot;Terms&quot;) govern your access to and use of the FrameFlow platform and services (&quot;Service&quot;), operated by FrameFlow (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). By creating an account or using the Service, you agree to be bound by these Terms. If you do not agree, do not use the Service.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">1. Eligibility</h2>
            <p>You must be at least 18 years old and legally capable of forming a binding contract in your jurisdiction to use FrameFlow. By using the Service, you represent and warrant that you meet these requirements. If you are using the Service on behalf of a company or organization, you represent that you have authority to bind that entity to these Terms.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">2. Account</h2>
            <p className="mb-3">You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. You must:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Provide accurate and complete registration information.</li>
              <li>Keep your password secure and not share it with others.</li>
              <li>Notify us immediately at <a href="mailto:support@frameflow.ai" className="text-violet-400 hover:text-violet-300">support@frameflow.ai</a> if you suspect unauthorized access to your account.</li>
              <li>Not create multiple accounts to circumvent usage limits or after a previous account has been terminated.</li>
            </ul>
            <p className="mt-3">We are not liable for any loss arising from unauthorized use of your account credentials.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">3. Subscriptions and billing</h2>
            <p className="mb-3">FrameFlow is offered on a subscription basis, billed in advance on a recurring monthly or annual basis. By subscribing, you authorize us to charge your payment method through Stripe on the applicable billing cycle.</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Subscriptions renew automatically until cancelled.</li>
              <li>You may cancel at any time through your account settings. Cancellation takes effect at the end of the current billing period.</li>
              <li>Fees are non-refundable except as stated in our <a href="/refund" className="text-violet-400 hover:text-violet-300">Refund Policy</a> or as required by applicable law.</li>
              <li>We reserve the right to change subscription pricing with at least 30 days&apos; advance notice. Continued use after a price change takes effect constitutes acceptance of the new pricing.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">4. Your content</h2>
            <p className="mb-3">You retain all ownership rights to the videos and content you upload to FrameFlow (&quot;Your Content&quot;). By uploading, you grant FrameFlow a limited, non-exclusive, worldwide, royalty-free license to host, store, process, and display Your Content solely for the purpose of providing the Service to you.</p>
            <p>You represent and warrant that you own or have the necessary rights to Your Content and that it does not infringe any third-party intellectual property rights, violate any law, or contain harmful or illegal material. We do not use Your Content to train AI models without your explicit consent.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">5. Acceptable use</h2>
            <p className="mb-3">You agree not to use the Service to:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Upload, transmit, or distribute content that infringes third-party intellectual property rights.</li>
              <li>Upload content that is unlawful, defamatory, obscene, or otherwise objectionable.</li>
              <li>Attempt to gain unauthorized access to our systems or other users&apos; accounts.</li>
              <li>Reverse engineer, decompile, or extract source code from any part of the Service.</li>
              <li>Introduce malware, viruses, or other harmful code.</li>
              <li>Use automated bots or scripts to access the Service in a way that disrupts its operation.</li>
              <li>Resell or sublicense access to the Service without our prior written consent.</li>
              <li>Circumvent any usage limits, access controls, or technical measures we put in place.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">6. Intellectual property</h2>
            <p>The Service, including its software, design, user interface, branding, logos, and documentation, is owned by FrameFlow and protected by copyright, trademark, and other intellectual property laws. Nothing in these Terms transfers ownership of our intellectual property to you. You may not copy, modify, or create derivative works of the Service without our express written permission.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">7. Termination</h2>
            <p className="mb-3">You may cancel your account at any time through your account settings. We may suspend or terminate your access to the Service immediately and without notice if you:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Breach these Terms.</li>
              <li>Fail to pay applicable fees.</li>
              <li>Engage in conduct that we reasonably believe is harmful to us, other users, or third parties.</li>
              <li>Are required to do so by law or a regulatory authority.</li>
            </ul>
            <p className="mt-3">Upon termination, your right to use the Service ceases immediately. Sections that by their nature should survive termination — including intellectual property, limitation of liability, and dispute resolution — will do so.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">8. Disclaimers</h2>
            <p>The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, whether express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We do not warrant that the Service will be uninterrupted, error-free, or free of harmful components. Your use of the Service is at your own risk.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">9. Limitation of liability</h2>
            <p>To the fullest extent permitted by applicable law, FrameFlow shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits, revenue, data, goodwill, or other intangible losses, arising from or related to your use of — or inability to use — the Service, even if we have been advised of the possibility of such damages. Our total aggregate liability to you for any claims arising under these Terms shall not exceed the greater of (a) the amount you paid us in the 12 months prior to the claim, or (b) $100.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">10. Governing law</h2>
            <p>These Terms are governed by and construed in accordance with applicable law, without regard to conflict of law principles. Any disputes shall be resolved in the competent courts of the applicable jurisdiction.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">11. Changes to these terms</h2>
            <p>We may modify these Terms at any time. When we make material changes, we will notify you by email or through an in-app notice at least 14 days before the changes take effect, and update the &quot;Last updated&quot; date above. Continued use of the Service after the effective date constitutes your acceptance of the revised Terms.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">12. Contact us</h2>
            <p>Questions about these Terms? Contact us at <a href="mailto:legal@frameflow.ai" className="text-violet-400 hover:text-violet-300">legal@frameflow.ai</a> or use our <a href="/contact" className="text-violet-400 hover:text-violet-300">contact page</a>.</p>
          </section>

        </div>
      </div>
    </main>
  )
}
