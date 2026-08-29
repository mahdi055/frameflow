import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from 'next-themes'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://frameflow.io'),
  title: {
    default: 'FrameFlow — AI Video Reframing for Every Platform',
    template: '%s | FrameFlow',
  },
  description:
    'Reframe any horizontal video to 9:16, 1:1, and 4:5 instantly with AI subject tracking. One upload, platform-ready exports for TikTok, Instagram Reels, YouTube Shorts, LinkedIn, and more.',
  keywords: [
    'AI video reframing',
    'video aspect ratio converter',
    'TikTok video editor',
    'Instagram Reels converter',
    'YouTube Shorts tool',
    'video cropping AI',
    'content repurposing tool',
    'social media video tool',
    'FrameFlow',
  ],
  authors: [{ name: 'FrameFlow', url: 'https://frameflow.io' }],
  creator: 'FrameFlow',
  publisher: 'FrameFlow',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://frameflow.io',
    siteName: 'FrameFlow',
    title: 'FrameFlow — AI Video Reframing for Every Platform',
    description: 'One upload. Platform-ready exports for TikTok, Reels, Shorts, LinkedIn, and more. AI keeps your subject perfectly framed.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'FrameFlow — AI Video Reframing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@FrameFlowApp',
    creator: '@FrameFlowApp',
    title: 'FrameFlow — AI Video Reframing for Every Platform',
    description: 'One upload. Platform-ready exports for TikTok, Reels, Shorts, LinkedIn, and more.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://frameflow.io',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '48x48' },
      { url: '/icon.svg', type: 'image/svg+xml', sizes: 'any' },
      { url: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icon-512.png', type: 'image/png', sizes: '512x512' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180' }],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
