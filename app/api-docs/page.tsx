import { Metadata } from 'next'
import { Code, Key, Zap, ArrowRight, Copy } from 'lucide-react'

export const metadata: Metadata = {
  title: 'API Docs',
  description:
    'FrameFlow REST API documentation — integrate AI video reframing into your own tools, pipelines, and platforms.',
  keywords: ['FrameFlow API', 'video reframing API', 'REST API docs', 'developer documentation'],
  alternates: { canonical: 'https://frameflow.io/api-docs' },
  openGraph: {
    title: 'FrameFlow API Documentation',
    description: 'Integrate AI video reframing into your own tools with the FrameFlow REST API.',
    url: 'https://frameflow.io/api-docs',
  },
  twitter: {
    title: 'FrameFlow API Documentation',
    description: 'Integrate AI video reframing into your own tools with the FrameFlow REST API.',
  },
}

const ENDPOINTS = [
  { method: 'POST', path: '/v1/jobs', desc: 'Submit a video reframing job' },
  { method: 'GET', path: '/v1/jobs/:id', desc: 'Get job status and results' },
  { method: 'GET', path: '/v1/jobs', desc: 'List all your jobs' },
  { method: 'DELETE', path: '/v1/jobs/:id', desc: 'Cancel a pending job' },
  { method: 'GET', path: '/v1/presets', desc: 'List available format presets' },
]

const METHOD_COLORS: Record<string, string> = {
  GET: 'text-emerald-400 bg-emerald-400/10',
  POST: 'text-blue-400 bg-blue-400/10',
  DELETE: 'text-red-400 bg-red-400/10',
}

const EXAMPLE = `curl -X POST https://api.frameflow.ai/v1/jobs \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "video_url": "https://example.com/video.mp4",
    "formats": ["9:16", "1:1", "4:5"],
    "track_subject": true
  }'`

export default function ApiDocsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14">
          <span className="inline-block px-3 py-1 rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-5 tracking-wide uppercase">
            API Docs
          </span>
          <h1 className="font-display text-4xl sm:text-5xl text-white mb-5 leading-tight">
            Build with <span className="gradient-text">FrameFlow</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl leading-relaxed">
            A simple REST API to reframe videos programmatically. Available on Creator and Agency plans.
          </p>
        </div>

        {/* Quick start */}
        <div className="mb-12">
          <h2 className="font-display text-xl text-white mb-5">Quick start</h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-7">
            {[
              { icon: Key, step: '1', title: 'Get your API key', desc: 'Find it in Settings under API.' },
              { icon: Code, step: '2', title: 'Submit a job', desc: 'POST a video URL and target formats.' },
              { icon: Zap, step: '3', title: 'Fetch results', desc: 'Poll or use webhooks when done.' },
            ].map((s) => {
              const Icon = s.icon
              return (
                <div key={s.step} className="p-5 rounded-xl bg-[#111118] border border-white/[0.07]">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-violet-600/10 border border-violet-500/20 flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5 text-violet-400" />
                    </div>
                    <span className="text-violet-400 text-xs font-bold">STEP {s.step}</span>
                  </div>
                  <p className="text-white font-medium text-sm mb-1">{s.title}</p>
                  <p className="text-white/40 text-xs leading-relaxed">{s.desc}</p>
                </div>
              )
            })}
          </div>

          {/* Code example */}
          <div className="rounded-xl bg-[#111118] border border-white/[0.07] overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-white/[0.07]">
              <span className="text-white/40 text-xs font-mono">Example request</span>
              <button className="flex items-center gap-1.5 text-white/30 hover:text-white/60 text-xs transition-colors">
                <Copy className="w-3 h-3" /> Copy
              </button>
            </div>
            <pre className="p-5 text-xs text-white/70 font-mono leading-relaxed overflow-x-auto">
              <code>{EXAMPLE}</code>
            </pre>
          </div>
        </div>

        {/* Endpoints */}
        <h2 className="font-display text-xl text-white mb-5">Endpoints</h2>
        <div className="space-y-2 mb-14">
          {ENDPOINTS.map((ep) => (
            <div key={ep.path} className="flex items-center gap-4 p-4 rounded-xl bg-[#111118] border border-white/[0.07] hover:border-violet-500/20 transition-all">
              <span className={`px-2 py-0.5 rounded text-xs font-bold font-mono flex-shrink-0 ${METHOD_COLORS[ep.method]}`}>
                {ep.method}
              </span>
              <code className="text-white/80 text-sm font-mono flex-1">{ep.path}</code>
              <span className="text-white/40 text-xs hidden sm:block">{ep.desc}</span>
              <ArrowRight className="w-3.5 h-3.5 text-white/20 flex-shrink-0" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="p-6 rounded-2xl bg-violet-600/10 border border-violet-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-medium">Need a full reference?</p>
            <p className="text-white/40 text-sm">Full OpenAPI spec, SDKs, and webhook docs are in progress.</p>
          </div>
          <a href="/contact" className="flex-shrink-0 px-5 py-2.5 text-sm font-medium bg-violet-600 hover:bg-violet-500 text-white rounded-lg transition-colors">
            Join the waitlist
          </a>
        </div>
      </div>
    </main>
  )
}
