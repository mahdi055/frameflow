import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function CTABanner() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0" style={{
            background: 'linear-gradient(135deg, #4c1d95 0%, #3730a3 50%, #1e1b4b 100%)'
          }} />
          {/* Ambient blobs inside */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full opacity-30"
            style={{ background: 'radial-gradient(circle, rgba(167,139,250,0.4) 0%, transparent 70%)', filter: 'blur(40px)' }} />
          <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full opacity-20"
            style={{ background: 'radial-gradient(circle, rgba(129,140,248,0.5) 0%, transparent 70%)', filter: 'blur(40px)' }} />
          {/* Dot grid overlay */}
          <div className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)',
              backgroundSize: '24px 24px'
            }} />

          {/* Content */}
          <div className="relative z-10 px-8 sm:px-14 py-14 text-center">
            <p className="text-violet-300/80 text-sm font-medium uppercase tracking-widest mb-4">
              Ready to ship?
            </p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] text-white leading-tight mb-4">
              Your videos deserve every format.
            </h2>
            <p className="text-white/60 text-lg mb-8 max-w-md mx-auto leading-relaxed">
              Upload once. Get TikTok, Reels, Stories, and Shorts automatically.
            </p>
            <Link href="/signup">
              <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-white hover:bg-gray-50 text-violet-700 font-semibold text-sm rounded-xl transition-all shadow-xl shadow-black/30 cursor-pointer">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
