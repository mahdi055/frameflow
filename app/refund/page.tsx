import { Metadata } from 'next'
import Link from 'next/link'
import { RefreshCw, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Refund Policy',
  description:
    'FrameFlow 14-day refund policy — eligibility criteria, how to request a refund, and what to expect.',
  keywords: ['FrameFlow refund policy', 'money back guarantee', 'subscription refund'],
  alternates: { canonical: 'https://frameflow.io/refund' },
  openGraph: {
    title: 'FrameFlow Refund Policy',
    description: '14-day no-questions-asked refund guarantee. Learn how to request yours.',
    url: 'https://frameflow.io/refund',
  },
  twitter: {
    title: 'FrameFlow Refund Policy',
    description: '14-day no-questions-asked refund guarantee. Learn how to request yours.',
  },
}

const ELIGIBLE = [
  'You request a refund within 14 days of your initial purchase or renewal',
  'You have not processed more than 10 videos during the billing period',
  'This is your first refund request for this account',
]

const NOT_ELIGIBLE = [
  'Refund requests made after 14 days from the billing date',
  'Accounts with significant usage during the billing period',
  'Accounts that have previously received a refund',
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
            <p className="text-white font-semibold mb-1">14-day money-back guarantee</p>
            <p className="text-white/60 text-sm leading-relaxed">
              If you are not satisfied with FrameFlow, contact us within 14 days of your purchase and we will issue a full refund, no questions asked.
            </p>
          </div>
        </div>

        <div className="space-y-8 text-white/60 text-sm leading-relaxed">
          <section>
            <h2 className="font-display text-lg text-white mb-4">When you are eligible</h2>
            <ul className="space-y-2.5">
              {ELIGIBLE.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-4">When you are not eligible</h2>
            <ul className="space-y-2.5">
              {NOT_ELIGIBLE.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-4 h-4 flex items-center justify-center flex-shrink-0 mt-0.5 text-white/30 text-xs">✕</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">Cancellations</h2>
            <p>You may cancel your subscription at any time from your billing settings. Cancellation takes effect at the end of the current billing period. You will retain access until then and will not be charged again.</p>
          </section>

          <section>
            <h2 className="font-display text-lg text-white mb-3">How to request a refund</h2>
            <p className="mb-3">Contact us at <a href="mailto:billing@frameflow.ai" className="text-violet-400 hover:text-violet-300">billing@frameflow.ai</a> with your account email and order details. We process refunds within 5 business days. Funds typically appear in your account within 5-10 business days depending on your bank.</p>
            <Link href="/contact" className="inline-flex items-center gap-1.5 text-violet-400 hover:text-violet-300 font-medium transition-colors">
              Contact support
            </Link>
          </section>
        </div>
      </div>
    </main>
  )
}
