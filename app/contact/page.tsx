import type { Metadata } from 'next'
import { Mail, MessageSquare, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with the FrameFlow team for support, sales inquiries, or partnership opportunities.',
  keywords: ['contact FrameFlow', 'FrameFlow support', 'video tool support'],
  alternates: { canonical: 'https://frameflow.io/contact' },
  openGraph: {
    title: 'Contact FrameFlow',
    description: 'Reach the FrameFlow team for support, sales, or partnership questions.',
    url: 'https://frameflow.io/contact',
  },
  twitter: {
    title: 'Contact FrameFlow',
    description: 'Reach the FrameFlow team for support, sales, or partnership questions.',
  },
}

const CONTACT_METHODS = [
  {
    icon: Mail,
    title: 'Email',
    value: 'hello@frameflow.io',
    description: 'For general inquiries and support',
    href: 'mailto:hello@frameflow.io',
  },
  {
    icon: MessageSquare,
    title: 'Live Chat',
    value: 'Mon–Fri, 9am–6pm EST',
    description: 'Real-time help from our team',
    href: '#',
  },
  {
    icon: Twitter,
    title: 'Twitter / X',
    value: '@FrameFlowApp',
    description: 'Quick questions and updates',
    href: 'https://twitter.com/FrameFlowApp',
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#0f0f14] pt-16">
      {/* Hero */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <span className="inline-block px-3 py-1 rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-300 text-sm font-medium mb-6">
            Contact
          </span>
          <h1 className="text-5xl font-bold text-white mb-4">
            We&apos;re Here to <span className="gradient-text">Help</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Got a question, partnership idea, or just want to say hello? We read every message.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="p-8 rounded-2xl border border-white/10 bg-white/5">
              <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input id="name" placeholder="Alex Rivera" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="alex@example.com" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="sales">Sales</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="press">Press</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Tell us how we can help..."
                    className="flex w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-gray-500 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 transition-colors hover:border-white/20 resize-none"
                  />
                </div>

                <Button className="w-full bg-violet-600 hover:bg-violet-500 text-white">
                  Send Message
                </Button>
              </form>
            </div>
          </div>

          {/* Contact methods + Map */}
          <div className="lg:col-span-2 space-y-6">
            {/* Contact method cards */}
            {CONTACT_METHODS.map(({ icon: Icon, title, value, description, href }) => (
              <a
                key={title}
                href={href}
                className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-white/5 hover:border-violet-500/30 hover:bg-white/[0.07] transition-all group"
              >
                <div className="w-10 h-10 rounded-lg bg-violet-600/20 border border-violet-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-violet-600/30 transition-colors">
                  <Icon className="w-4 h-4 text-violet-400" />
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{title}</p>
                  <p className="text-violet-300 text-sm">{value}</p>
                  <p className="text-gray-500 text-xs mt-0.5">{description}</p>
                </div>
              </a>
            ))}

            {/* CSS Map */}
            <div
              className="relative w-full h-48 rounded-xl overflow-hidden border border-white/10"
              style={{ background: '#1a1a2e' }}
            >
              {/* Grid lines */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(124, 58, 237, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(124, 58, 237, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: '40px 40px',
                }}
              />
              {/* Map marker */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-violet-500 shadow-lg shadow-violet-500/50" />
                  <div className="absolute inset-0 rounded-full bg-violet-500/30 animate-ping" />
                </div>
              </div>
              {/* Label */}
              <div className="absolute bottom-3 left-3 px-2 py-1 bg-[#0f0f14]/80 rounded text-xs text-gray-400 backdrop-blur-sm">
                San Francisco, CA
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
