import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'FrameFlow Privacy Policy — how we collect, use, share, and protect your personal data.',
  keywords: ['FrameFlow privacy policy', 'data privacy', 'GDPR', 'video platform privacy'],
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

        <div className="space-y-10 text-white/60 text-sm leading-relaxed">

          <section>
            <p>FrameFlow (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your personal information. This Privacy Policy explains what data we collect, how we use it, with whom we share it, and the rights available to you. By using the FrameFlow platform (&quot;Service&quot;), you agree to the practices described here.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">1. Information we collect</h2>
            <p className="mb-3">We collect information you provide directly to us, including:</p>
            <ul className="list-disc list-inside space-y-2 mb-4 pl-2">
              <li><strong className="text-white/80">Account information</strong> — your name, email address, and password when you register.</li>
              <li><strong className="text-white/80">Billing information</strong> — billing address and payment details, processed securely by Stripe. We never store full card numbers on our servers.</li>
              <li><strong className="text-white/80">Video content</strong> — video files you upload to be reframed or processed by the Service.</li>
              <li><strong className="text-white/80">Communications</strong> — messages, support requests, or feedback you send to us.</li>
              <li><strong className="text-white/80">Profile preferences</strong> — settings, export preferences, and workspace configuration you save within the platform.</li>
            </ul>
            <p className="mb-3">We also collect data automatically when you use the Service:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Log and usage data — IP address, browser type, pages visited, feature interactions, and timestamps.</li>
              <li>Device information — device type, operating system, and unique identifiers.</li>
              <li>Cookies and similar tracking technologies (see our <a href="/cookies" className="text-violet-400 hover:text-violet-300">Cookie Policy</a>).</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">2. How we use your information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Provide, operate, and maintain the Service.</li>
              <li>Process transactions and send related confirmations, invoices, and receipts.</li>
              <li>Deliver AI-powered video reframing and related features you request.</li>
              <li>Communicate with you about product updates, security alerts, and support responses.</li>
              <li>Monitor and analyze usage patterns to improve existing features and develop new ones.</li>
              <li>Detect, investigate, and prevent fraudulent, abusive, or unauthorized activity.</li>
              <li>Comply with applicable legal obligations and enforce our agreements.</li>
            </ul>
            <p className="mt-4">We do not sell your personal data to third parties for marketing purposes.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">3. How we share your information</h2>
            <p className="mb-3">We do not sell your personal information. We may share your data with:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><strong className="text-white/80">Service providers</strong> — third parties who perform services on our behalf, including payment processing (Stripe), cloud infrastructure and storage, and analytics. These providers are bound by data processing agreements and may not use your data for their own purposes.</li>
              <li><strong className="text-white/80">Team members</strong> — if you invite collaborators to your FrameFlow workspace, they will have access to shared projects as you configure.</li>
              <li><strong className="text-white/80">Legal authorities</strong> — law enforcement agencies or regulators where required by applicable law, legal process, or to protect the rights and safety of FrameFlow, our users, or the public.</li>
              <li><strong className="text-white/80">Business transfers</strong> — a successor entity in the event of a merger, acquisition, bankruptcy, or sale of assets, subject to the same privacy commitments described here.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">4. Video data</h2>
            <p className="mb-3">Videos you upload are stored temporarily to perform reframing and processing operations. Processed outputs remain available for download for 30 days, after which they are permanently deleted. You may delete your videos at any time from your account dashboard.</p>
            <p>We do not use the content of your uploaded videos to train AI models without your explicit written consent. Your creative work remains yours.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">5. Data retention</h2>
            <p>We retain your account data for as long as your account is active or as needed to provide the Service, comply with our legal obligations, resolve disputes, and enforce our agreements. When you delete your account, we will delete or anonymize your personal data within 30 days, except where retention is required by law.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">6. Data security</h2>
            <p>We implement administrative, technical, and physical safeguards to protect your information, including encryption in transit (TLS 1.3), encryption at rest (AES-256), access controls, and regular security reviews. No method of transmission or storage is completely secure, and we cannot guarantee absolute security. Please see our <a href="/security" className="text-violet-400 hover:text-violet-300">Security page</a> for more detail.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">7. International data transfers</h2>
            <p>FrameFlow operates globally. Your information may be transferred to and processed in countries other than the one in which you reside. These countries may have different data protection laws. Where required, we rely on appropriate safeguards such as Standard Contractual Clauses to ensure that transfers outside the EEA comply with applicable data protection regulation.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">8. Cookies</h2>
            <p>We use essential cookies to keep you signed in and remember your preferences. We use analytics cookies to understand product usage and improve the Service. You can manage non-essential cookies through your browser settings. See our <a href="/cookies" className="text-violet-400 hover:text-violet-300">Cookie Policy</a> for full details.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">9. Children&apos;s privacy</h2>
            <p>The Service is not directed to individuals under the age of 16, and we do not knowingly collect personal information from children. If we become aware that a child under 16 has provided us with personal data without parental consent, we will delete that information promptly. If you believe we may have collected such data, contact us at <a href="mailto:privacy@frameflow.ai" className="text-violet-400 hover:text-violet-300">privacy@frameflow.ai</a>.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">10. Your rights and choices</h2>
            <p className="mb-3">Depending on your location, you may have the right to:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Access the personal data we hold about you.</li>
              <li>Correct inaccurate or incomplete information.</li>
              <li>Request deletion of your personal data.</li>
              <li>Export your data in a portable format.</li>
              <li>Object to or restrict certain types of processing.</li>
              <li>Withdraw consent where processing is based on consent.</li>
            </ul>
            <p className="mt-4">To exercise any of these rights, contact us at <a href="mailto:privacy@frameflow.ai" className="text-violet-400 hover:text-violet-300">privacy@frameflow.ai</a>. We will respond within 30 days.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">11. Changes to this policy</h2>
            <p>We may update this Privacy Policy from time to time. When we make material changes, we will notify you by email or by displaying a notice in the Service before the change takes effect, and update the &quot;Last updated&quot; date above. Continued use of the Service after the effective date constitutes acceptance of the revised policy.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">12. Contact us</h2>
            <p>If you have questions or concerns about this Privacy Policy or our data practices, please contact us:</p>
            <div className="mt-3 space-y-1">
              <p>Email: <a href="mailto:privacy@frameflow.ai" className="text-violet-400 hover:text-violet-300">privacy@frameflow.ai</a></p>
              <p>Or use our <a href="/contact" className="text-violet-400 hover:text-violet-300">contact page</a>.</p>
            </div>
          </section>

        </div>
      </div>
    </main>
  )
}
