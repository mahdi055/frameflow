import type { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Payment Successful FrameFlow',
  description: 'Your FrameFlow subscription is now active.',
}

export default function SuccessPage() {
  return (
    <div className="min-h-screen bg-[#0f0f14] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Icon */}
        <div className="flex items-center justify-center mb-6">
          <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center">
            <CheckCircle className="w-10 h-10 text-green-400" />
          </div>
        </div>

        {/* Content */}
        <h1 className="text-4xl font-bold text-white mb-3">Payment Successful!</h1>
        <p className="text-gray-400 leading-relaxed mb-8">
          Welcome to FrameFlow! Your subscription is now active. You can start reframing videos immediately from your dashboard.
        </p>

        {/* Benefits list */}
        <div className="p-5 rounded-xl border border-white/10 bg-white/5 mb-8 text-left space-y-2">
          {[
            'Your account has been upgraded',
            'All plan features are now unlocked',
            'Receipt sent to your email',
          ].map((item) => (
            <div key={item} className="flex items-center gap-2.5 text-sm text-gray-300">
              <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>

        <Link href="/dashboard">
          <Button className="w-full bg-violet-600 hover:bg-violet-500 text-white" size="lg">
            Go to Dashboard
          </Button>
        </Link>

        <p className="text-gray-600 text-xs mt-4">
          Having trouble? Contact{' '}
          <a href="mailto:hello@frameflow.io" className="text-violet-400 hover:text-violet-300">
            hello@frameflow.io
          </a>
        </p>
      </div>
    </div>
  )
}
