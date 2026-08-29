import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import SocialProof from '@/components/sections/SocialProof'
import Stats from '@/components/sections/Stats'
import Features from '@/components/sections/Features'
import HowItWorks from '@/components/sections/HowItWorks'
import Platforms from '@/components/sections/Platforms'
import FormatPreview from '@/components/sections/FormatPreview'
import BeforeAfter from '@/components/sections/BeforeAfter'
import UseCases from '@/components/sections/UseCases'
import Testimonials from '@/components/sections/Testimonials'
import Pricing from '@/components/sections/Pricing'
import FAQ from '@/components/sections/FAQ'
import CTABanner from '@/components/sections/CTABanner'

export const metadata: Metadata = {
  title: 'FrameFlow AI Video Reframing for Every Platform',
  description:
    'Reframe horizontal videos to 9:16, 1:1, 4:5 instantly with AI. Perfect for TikTok, Instagram Reels, Stories, YouTube Shorts.',
}

export default function HomePage() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Stats />
      <Features />
      <HowItWorks />
      <Platforms />
      <FormatPreview />
      <BeforeAfter />
      <UseCases />
      <Testimonials />
      <Pricing />
      <FAQ />
      <CTABanner />
    </>
  )
}
