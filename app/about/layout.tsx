import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Meet the team behind FrameFlow — building AI-powered video tools that let creators post everywhere without editing twice.',
  keywords: ['FrameFlow team', 'about FrameFlow', 'AI video startup', 'video reframing company'],
  alternates: { canonical: 'https://frameflow.io/about' },
  openGraph: {
    title: 'About FrameFlow',
    description: 'Meet the team behind FrameFlow — building the future of AI video reframing.',
    url: 'https://frameflow.io/about',
  },
  twitter: {
    title: 'About FrameFlow',
    description: 'Meet the team behind FrameFlow — building the future of AI video reframing.',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
