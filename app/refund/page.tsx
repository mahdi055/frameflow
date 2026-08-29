import { Metadata } from 'next'
import Link from 'next/link'
import { RefreshCw, CheckCircle, XCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Refund Policy',
  description:
    'FrameFlow refund policy — eligibility criteria, how to request a refund, and what to expect.',
  keywords: ['FrameFlow refund policy', 'money back guarantee', 'subscription refund', 'cancellation'],
  alternates: { canonical: 'https://frameflow.io/refund' },
  openGraph: {
    title: 'FrameFlow Refund Policy',
    description: 'Learn how to request a refund and what our eligibility criteria are.',
    url: 'https://frameflow.io/refund',
  },
  twitter: {
    title: 'FrameFlow Refund Policy',
    description: 'Learn how to request a refund and what our eligibility criteria are.',
  },
}

const ELIGIBLE = [
  'You request a refund within 7 days of your initial signup and have not made substantial use of the Service.',
  'A technical error on our part caused a duplicate or erroneous charge to your account.',
  'Applicable consumer protection law in your jurisdiction entitles you to a refund.',
]

const NOT_ELIGIBLE = [
  'Refund requests made more than 7 days after the initial purchase or renewal date.',
  'Accounts with significant video processing usage during the billing period.',
  'Accounts that have previously received a courtesy refund.',
  'Partial periods after cancelling a subscription mid-cycle — you retain access until the billing period ends.',
  'Charges for add-ons or one-time purchases unless a technical error occurred.',
]

export default function RefundPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] pt-24 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-5 tracking-wide uppercase">
            Legal
          </span>
          <h1 className="font-display text-4xl text-white mb-3">Refund Policy</h1>
          <p className="text-white/40 text-sm">Last updated: January 1, 2025</p>
        </div>

        {/* Summary card */}
        <div className="p-6 rounded-2xl bg-violet-600/10 border border-violet-500/20 flex gap-4 mb-10">
          <RefreshCw className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-white font-semibold mb-1">Our commitment to you</p>
            <p className="text-white/60 text-sm leading-relaxed">
              We want you to be genuinely happy with FrameFlow. If something went wrong on our end or you signed up and realized it is not the right fit, contact us promptly and we will do our best to make it right.
            </p>
          </div>
        </div>

        <div className="space-y-10 text-white/60 text-sm leading-relaxed">

          <section>
            <h2 className="font-display text-lg text-white mb-3">1. Subscription charges</h2>
            <p>FrameFlow subscriptions are billed in advance on a recurring monthly or annual basis. Your subscription automatically renews at the end of each billing period using the payment method on file, until you cancel. By subscribing, you authorize these recurring charges through Stripe.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">2. Cancellations</h2>
            <p className="mb-3">You may cancel your subscription at any time through your account billing settings or by contacting our support team. When you cancel:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Your subscription remains active until the end of the current billing period.</li>
              <li>You will not be charged again after that date.</li>
              <li>You retain full access to all features until the period expires.</li>
              <li>No partial refunds are issued for unused time remaining in a billing period.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-4">3. When you are eligible for a refund</h2>
            <ul className="space-y-3">
              {ELIGIBLE.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-4">4. When you are not eligible</h2>
            <ul className="space-y-3">
              {NOT_ELIGIBLE.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <XCircle className="w-4 h-4 text-red-500/60 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">5. How to request a refund</h2>
            <p className="mb-3">To request a refund, contact us at <a href="mailto:billing@frameflow.ai" className="text-violet-400 hover:text-violet-300">billing@frameflow.ai</a> and include:</p>
            <ul className="list-disc list-inside space-y-2 pl-2 mb-4">
              <li>The email address associated with your FrameFlow account.</li>
              <li>The date of the charge and the amount.</li>
              <li>A brief description of your reason for requesting a refund.</li>
            </ul>
            <p>We aim to respond to all refund requests within 5 business days. We may ask follow-up questions to verify eligibility.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">6. Approved refunds</h2>
            <p>Approved refunds are issued to the original payment method used at the time of purchase, processed via Stripe. Depending on your bank or card issuer, refunds typically appear on your statement within 5–10 business days after approval. We do not issue refunds in the form of credit or alternative payment methods unless specifically agreed upon.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">7. Chargebacks</h2>
            <p>We encourage you to contact us before initiating a chargeback with your bank or card issuer. We can often resolve issues more quickly and with less friction through direct communication. Chargebacks initiated without first contacting us may result in account suspension while the dispute is under review.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">8. Changes to this policy</h2>
            <p>We may update this Refund Policy from time to time. Material changes will be communicated via email or in-app notice. The &quot;Last updated&quot; date at the top of this page reflects the most recent revision.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">9. Contact us</h2>
            <p className="mb-3">For billing and refund inquiries, contact us at <a href="mailto:billing@frameflow.ai" className="text-violet-400 hover:text-violet-300">billing@frameflow.ai</a> or use our support page.</p>
            <Link href="/contact" className="inline-flex items-center gap-1.5 text-violet-400 hover:text-violet-300 font-medium transition-colors">
              Contact support →
            </Link>
          </section>

        </div>
      </div>
    </main>
  )
}
