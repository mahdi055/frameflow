import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, X, Mail } from 'lucide-react'
import Pricing from '@/components/sections/Pricing'
import { COMPARISON_TABLE } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Pricing',
  description:
    'Simple, transparent pricing for solo creators, brand teams, and agencies. Start free with 5 reframes — no credit card required.',
  keywords: ['FrameFlow pricing', 'video reframing cost', 'AI video tool plans', 'creator subscription'],
  alternates: { canonical: 'https://frameflow.io/pricing' },
  openGraph: {
    title: 'FrameFlow Pricing — Plans for Every Creator',
    description: 'Free starter plan, creator and agency tiers. Reframe up to 50 videos at once. Cancel anytime.',
    url: 'https://frameflow.io/pricing',
  },
  twitter: {
    title: 'FrameFlow Pricing — Plans for Every Creator',
    description: 'Free starter plan, creator and agency tiers. Reframe up to 50 videos at once. Cancel anytime.',
  },
}

const BILLING_FAQS = [
  {
    q: 'What happens if I exceed my video limit?',
    a: "On the Starter plan, you'll be notified when you're approaching your 30-video limit. You can upgrade to Creator at any time for unlimited videos, or purchase add-on packs of 10 videos each.",
  },
  {
    q: 'Can I switch between plans?',
    a: 'Yes, you can upgrade or downgrade at any time. Upgrades take effect immediately. Downgrades take effect at the start of your next billing cycle.',
  },
  {
    q: 'Do you offer refunds?',
    a: "All plans include a 14-day money-back guarantee. If you're not satisfied, contact us within 14 days of purchase for a full refund no questions asked.",
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major credit cards (Visa, Mastercard, American Express, Discover) through our secure Stripe payment processor. We also accept PayPal on annual plans.',
  },
  {
    q: 'Is annual billing charged upfront?',
    a: "Yes, annual plans are charged in full at the start of the billing period. You'll see the total annual charge on your receipt, along with the effective monthly rate.",
  },
  {
    q: 'How do I cancel my subscription?',
    a: "You can cancel from your account Settings → Billing page at any time. Your access continues until the end of your current billing period. We don't charge cancellation fees.",
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-[#0f0f14] pt-16">
      {/* Pricing Section */}
      <Pricing />

      {/* Comparison Table */}
      <section className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          Compare All Plans
        </h2>
        <div className="rounded-xl border border-white/10 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/10 bg-white/5">
                <th className="text-left py-4 px-5 text-gray-400 font-medium">Feature</th>
                <th className="text-center py-4 px-4 text-white font-semibold">Starter</th>
                <th className="text-center py-4 px-4 text-violet-300 font-semibold">Creator</th>
                <th className="text-center py-4 px-4 text-white font-semibold">Agency</th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON_TABLE.map((row, index) => (
                <tr
                  key={row.feature}
                  className={`border-b border-white/5 ${index % 2 === 0 ? 'bg-white/[0.01]' : ''}`}
                >
                  <td className="py-3.5 px-5 text-gray-300">{row.feature}</td>
                  {[row.starter, row.creator, row.agency].map((val, i) => (
                    <td key={i} className="py-3.5 px-4 text-center">
                      {typeof val === 'boolean' ? (
                        val ? (
                          <Check className="w-4 h-4 text-green-400 mx-auto" />
                        ) : (
                          <X className="w-4 h-4 text-gray-700 mx-auto" />
                        )
                      ) : (
                        <span className={i === 1 ? 'text-violet-300 font-medium' : 'text-gray-300'}>
                          {val}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Billing FAQ */}
      <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Billing FAQ</h2>
        <div className="space-y-4">
          {BILLING_FAQS.map((faq) => (
            <div
              key={faq.q}
              className="p-5 rounded-xl border border-white/10 bg-white/5"
            >
              <h3 className="font-semibold text-white mb-2">{faq.q}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Enterprise CTA */}
      <section className="pb-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-2xl border border-violet-500/20 bg-violet-600/5 text-center">
          <div className="w-12 h-12 rounded-full bg-violet-600/20 border border-violet-500/20 flex items-center justify-center mx-auto mb-4">
            <Mail className="w-5 h-5 text-violet-400" />
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">
            Processing 500+ videos a month? Let&apos;s talk.
          </h2>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Enterprise customers get custom SLAs, volume pricing, dedicated onboarding, and a private Slack channel with your account team.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 hover:bg-violet-500 text-white font-semibold rounded-lg transition-colors"
          >
            Contact Sales
          </Link>
        </div>
      </section>
    </div>
  )
}
