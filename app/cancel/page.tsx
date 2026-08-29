import type { Metadata } from 'next'
import Link from 'next/link'
import { XCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Payment Cancelled FrameFlow',
  description: 'Your payment was cancelled.',
}

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-[#0f0f14] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Icon */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center">
            <XCircle className="w-10 h-10 text-red-400" />
          </div>
        </div>

        {/* Content */}
        <h1 className="text-4xl font-bold text-white mb-3">Payment Cancelled</h1>
        <p className="text-gray-400 leading-relaxed mb-8">
          No worries your plan wasn&apos;t changed and you haven&apos;t been charged. You can try again whenever you&apos;re ready.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/pricing" className="flex-1">
            <Button className="w-full bg-violet-600 hover:bg-violet-500 text-white" size="lg">
              Back to Pricing
            </Button>
          </Link>
          <Link href="/dashboard" className="flex-1">
            <Button variant="outline" className="w-full" size="lg">
              Go to Dashboard
            </Button>
          </Link>
        </div>

        <p className="text-gray-600 text-xs mt-6">
          Need help choosing a plan?{' '}
          <a href="/contact" className="text-violet-400 hover:text-violet-300">
            Contact us
          </a>
        </p>
      </div>
    </div>
  )
}
