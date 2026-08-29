import { TRUSTED_BRANDS } from '@/lib/data'

export default function SocialProof() {
  return (
    <section className="py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8">
          <p className="text-gray-500 text-sm font-medium tracking-wide uppercase">
            Trusted by creators and agencies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 w-full">
            {/* Left separator */}
            <div className="hidden sm:block flex-1 h-px bg-gradient-to-r from-transparent to-white/10" />

            {TRUSTED_BRANDS.map((brand) => (
              <div
                key={brand}
                className="px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] text-gray-500 text-sm font-medium hover:text-gray-300 hover:border-white/20 transition-all cursor-default"
              >
                {brand}
              </div>
            ))}

            {/* Right separator */}
            <div className="hidden sm:block flex-1 h-px bg-gradient-to-l from-transparent to-white/10" />
          </div>
        </div>
      </div>
    </section>
  )
}
