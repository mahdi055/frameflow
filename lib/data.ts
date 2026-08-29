export const NAV_LINKS = [
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export const TRUSTED_BRANDS = [
  'Creatify Studio',
  'VidAgency Co.',
  'SocialHive',
  'ContentLabs',
  'ReelBrands',
  'ClipForge',
]

export const FEATURES = [
  {
    icon: 'Brain',
    title: 'Smart AI Subject Tracking',
    description:
      'AI detects faces, products, and motion to keep your subject centered during reframing.',
  },
  {
    icon: 'Layers',
    title: 'One-Click Multi-Format Export',
    description:
      'Export 9:16, 1:1, and 4:5 in a single click. All three formats rendered simultaneously.',
  },
  {
    icon: 'Zap',
    title: 'Batch Processing',
    description:
      'Upload up to 50 videos at once. Reframe an entire content library in minutes.',
  },
  {
    icon: 'Sliders',
    title: 'Platform Presets',
    description:
      'Pre-configured presets for TikTok, Instagram Reels, YouTube Shorts, LinkedIn, and Pinterest.',
  },
  {
    icon: 'Move',
    title: 'Custom Crop Override',
    description:
      'Drag to manually adjust the crop window on any frame. Keyframe-level precision when you need it.',
  },
  {
    icon: 'Webhook',
    title: 'API and Workflow Integrations',
    description:
      'Connect to Zapier, Make, or use the REST API to automate reframing inside your production pipeline.',
  },
]

export const HOW_IT_WORKS = [
  {
    step: 1,
    icon: 'Upload',
    title: 'Upload Your Video',
    description: 'Drag and drop MP4, MOV, or WebM files up to 4GB. Any resolution accepted.',
  },
  {
    step: 2,
    icon: 'Cpu',
    title: 'AI Analyzes and Reframes',
    description:
      'Our model detects your subject and intelligently reframes across all target aspect ratios.',
  },
  {
    step: 3,
    icon: 'Download',
    title: 'Download and Publish',
    description:
      'Get all formats as separate files or a ZIP. Ready to post with no editing app required.',
  },
]

export const TESTIMONIALS = [
  {
    quote:
      "We repurpose around 20 videos a week. FrameFlow has meaningfully cut our editing time. It's now a core part of our format conversion workflow.",
    name: 'Layla M.',
    role: 'Head of Content',
    company: 'SocialHive Agency',
    stars: 5,
    avatar: '/assets/avatar-1.webp',
  },
  {
    quote:
      "The AI tracking is impressive. My cooking videos get clean reframes without me touching the crop settings. Really solid tool.",
    name: 'Carlos D.',
    role: 'Food Creator',
    company: '12K followers',
    stars: 5,
    avatar: '/assets/avatar-2.webp',
  },
  {
    quote:
      "We integrated the API into our pipeline and it handles format exports automatically. Saves us a lot of manual work every week.",
    name: 'Riko T.',
    role: 'Tech Lead',
    company: 'ClipForge Studio',
    stars: 5,
    avatar: '/assets/avatar-3.webp',
  },
  {
    quote:
      "Finally a reframing tool that actually works on fast-moving content. We use it for our fitness content and the subject tracking keeps up.",
    name: 'Amara J.',
    role: 'Fitness Creator',
    company: '8.3K followers',
    stars: 5,
    avatar: '/assets/avatar-6.webp',
  },
  {
    quote:
      "Our agency manages social for several brands. Batch processing alone made this worthwhile. Clean output, simple dashboard.",
    name: 'Tom R.',
    role: 'Social Media Manager',
    company: 'ContentLabs',
    stars: 5,
    avatar: '/assets/avatar-4.webp',
  },
  {
    quote:
      "We were spending hours each week manually cropping product videos for different placements. FrameFlow handles it in a fraction of the time.",
    name: 'Mia L.',
    role: 'E-commerce Lead',
    company: 'Oake Goods',
    stars: 5,
    avatar: '/assets/avatar-5.webp',
  },
  {
    quote:
      "The preset system is well thought out. Set it up once for each platform and exports just work. No surprises on aspect ratios or safe zones.",
    name: 'Dev P.',
    role: 'Video Producer',
    company: 'ReelBrands',
    stars: 5,
    avatar: '/assets/avatar-10.webp',
  },
  {
    quote:
      "As a solo creator publishing to four platforms, this is genuinely useful. One upload and everything is handled. Straightforward and fast.",
    name: 'Sara K.',
    role: 'Travel Creator',
    company: '6.1K followers',
    stars: 5,
    avatar: '/assets/avatar-7.webp',
  },
  {
    quote:
      "Good tool for agencies. The white-label export feature is something we specifically needed and it works as expected.",
    name: 'Noah B.',
    role: 'Creative Director',
    company: 'VidAgency Co.',
    stars: 5,
    avatar: '/assets/avatar-8.webp',
  },
  {
    quote:
      "We tested a few reframing tools before settling on FrameFlow. The AI tracking on product-close-up videos is noticeably better than alternatives.",
    name: 'Chloe S.',
    role: 'Brand Video Lead',
    company: 'Marble & Co.',
    stars: 5,
    avatar: '/assets/avatar-9.webp',
  },
]

export interface PricingPlan {
  id: string
  name: string
  monthlyPrice: number
  annualPrice: number
  description: string
  features: string[]
  notIncluded?: string[]
  badge?: string
  cta: string
  stripePriceId: string
  highlighted: boolean
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter',
    monthlyPrice: 19,
    annualPrice: 15,
    description: 'For individual creators getting started.',
    features: [
      '30 videos/month',
      'Up to 500MB per file',
      '3 export formats (9:16, 1:1, 4:5)',
      'Email support',
      'Standard processing speed',
    ],
    notIncluded: ['Batch processing', 'API access', 'Team seats', 'Custom presets'],
    cta: 'Get Started',
    stripePriceId: process.env.STRIPE_STARTER_PRICE_ID || 'price_starter',
    highlighted: false,
  },
  {
    id: 'creator',
    name: 'Creator',
    monthlyPrice: 49,
    annualPrice: 39,
    description: 'For creators publishing across all platforms.',
    features: [
      'Unlimited videos',
      'Up to 4GB per file',
      'All formats and custom presets',
      'Priority support',
      'API access (100 calls/day)',
      'Fast processing speed',
    ],
    badge: 'Most Popular',
    cta: 'Start Creating',
    stripePriceId: process.env.STRIPE_CREATOR_PRICE_ID || 'price_creator',
    highlighted: true,
  },
  {
    id: 'agency',
    name: 'Agency',
    monthlyPrice: 149,
    annualPrice: 119,
    description: 'Built for teams and production houses at scale.',
    features: [
      'Everything in Creator',
      'Batch processing (50 videos)',
      'Team seats (5)',
      'White-label exports',
      'Dedicated Slack support',
      'API (unlimited calls)',
      'SLA guarantee (99.9%)',
    ],
    cta: 'Scale Your Agency',
    stripePriceId: process.env.STRIPE_AGENCY_PRICE_ID || 'price_agency',
    highlighted: false,
  },
]

export const FAQS = [
  {
    question: 'What video formats do you accept?',
    answer:
      'FrameFlow accepts MP4, MOV, and WebM files. We support all major codecs including H.264, H.265, VP8, and VP9. Files can be uploaded in any resolution from 720p up to 4K.',
  },
  {
    question: 'How does the AI know what to keep in frame?',
    answer:
      'Our AI model uses a combination of face detection, object tracking, and motion analysis to identify the primary subject in your video. It continuously tracks the subject across every frame and adjusts the crop window accordingly.',
  },
  {
    question: 'Do you offer a trial period?',
    answer:
      'We offer a 7-day money-back guarantee on all plans. If FrameFlow does not work for your use case within the first 7 days, contact support for a full refund.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer:
      'Yes. There are no long-term contracts. You can cancel your subscription at any time from your account settings. You will continue to have access until the end of your billing period.',
  },
  {
    question: 'Does FrameFlow support vertical-to-horizontal reframing?',
    answer:
      'Currently, FrameFlow specializes in horizontal-to-vertical reframing (16:9 to 9:16, 1:1, 4:5). Vertical-to-horizontal reframing is on our roadmap.',
  },
  {
    question: 'How long does it take to process a video?',
    answer:
      'Processing time depends on video length and resolution. Most videos under 10 minutes process within a few minutes. All three format exports are generated simultaneously.',
  },
  {
    question: 'Do you offer an API for automation?',
    answer:
      'Yes. Creator and Agency plans include API access. The REST API lets you submit videos, track job status, and retrieve outputs programmatically. We also have integrations with Zapier and Make.',
  },
  {
    question: 'Is my video data stored after processing?',
    answer:
      'Processed videos are stored for 30 days in your account, after which they are automatically deleted. You can also manually delete any video from your dashboard. We do not use your video content to train our AI models.',
  },
]

export const TEAM_MEMBERS = [
  {
    name: 'Alex Rivera',
    role: 'Co-Founder and CEO',
    avatar: '/assets/avatar-1.webp',
  },
  {
    name: 'Priya Sharma',
    role: 'Co-Founder and CTO',
    avatar: '/assets/avatar-1.webp',
  },
  {
    name: 'Marcus Webb',
    role: 'Head of AI Research',
    avatar: '/assets/avatar-1.webp',
  },
  {
    name: 'Yuki Tanaka',
    role: 'Lead Designer',
    avatar: '/assets/avatar-1.webp',
  },
  {
    name: 'Sofia Reyes',
    role: 'Head of Growth',
    avatar: '/assets/avatar-1.webp',
  },
  {
    name: "James O'Brien",
    role: 'Head of Engineering',
    avatar: "/assets/avatar-2.webp",
  },
]

export const VALUES = [
  {
    icon: 'Heart',
    title: 'Creator-First',
    description:
      "Every feature we build starts with a creator's pain point. We exist to make their lives easier.",
  },
  {
    icon: 'Zap',
    title: 'Speed Without Compromise',
    description:
      'Fast processing and quality output are not trade-offs. We work to deliver both.',
  },
  {
    icon: 'Shield',
    title: 'Privacy by Default',
    description:
      'Your content is yours. We never store videos longer than needed or use them to train models.',
  },
  {
    icon: 'RefreshCw',
    title: 'Relentlessly Iterating',
    description:
      "We ship regularly. User feedback drives our roadmap. We are always improving.",
  },
]

export const STATS = [
  { value: '1,200+', label: 'Creators' },
  { value: '18K+', label: 'Videos Processed' },
  { value: '3', label: 'Export Formats' },
  { value: '99.9%', label: 'Uptime' },
]

export const USE_CASES = [
  {
    icon: 'Users',
    title: 'Social Media Agencies',
    headline: 'Scale Client Content Across Every Platform',
    description1:
      "Managing content for multiple clients means dealing with different format requirements across TikTok, Instagram, YouTube, and LinkedIn. FrameFlow's batch processing lets your team reframe content libraries in a single session, cutting per-video turnaround significantly.",
    description2:
      'With team seats on the Agency plan, everyone on your team works from the same dashboard. White-label exports mean client deliverables look professional with no FrameFlow watermarks.',
    stat: 'Less manual work every week',
    cta: 'Get Started',
  },
  {
    icon: 'User',
    title: 'Individual Creators',
    headline: 'Publish to Every Platform From One Upload',
    description1:
      'You shoot one video. Now you need a TikTok cut, an Instagram Reel, a Story, and a YouTube Short, all with different aspect ratios. FrameFlow handles the format conversion so you can focus on content.',
    description2:
      'Our AI subject tracking works well on talking-head content, cooking videos, and fitness tutorials. The model keeps your subject centered automatically.',
    stat: 'More time for actual content creation',
    cta: 'Get Started',
  },
  {
    icon: 'ShoppingBag',
    title: 'E-commerce Brands',
    headline: 'Reframe Product Videos for Every Ad Format',
    description1:
      'Meta ads perform best at 9:16 for Stories and Reels, and 1:1 for feed placements. FrameFlow takes your existing 16:9 product footage and delivers ad-ready vertical formats without manual editing.',
    description2:
      'Our AI correctly identifies products as the primary subject, even in complex scenes. The result: product-centered reframes that preserve the key visual.',
    stat: 'Faster ad creative production',
    cta: 'Get Started',
  },
  {
    icon: 'Film',
    title: 'Media and Production Houses',
    headline: 'API-Driven Automation for Post-Production',
    description1:
      "For studios processing many videos per month, manual format conversion is a bottleneck. FrameFlow's REST API integrates directly into your post-production workflow. Submit jobs programmatically, receive webhook notifications on completion, and pull formatted outputs automatically.",
    description2:
      'The Agency plan includes unlimited API calls and a dedicated Slack support channel. Contact our team to discuss volume needs.',
    stat: 'Automated format exports at scale',
    cta: 'View API Docs',
  },
]

export const BLOG_POSTS = [
  {
    slug: 'how-ai-video-reframing-works',
    title: 'How AI Video Reframing Works: Subject Tracking Explained',
    excerpt:
      "A look at the computer vision model behind FrameFlow's subject tracking and how we detect faces, objects, and motion to keep your subject centered in any aspect ratio.",
    author: 'Marcus Webb',
    authorRole: 'Head of AI Research',
    authorAvatar: '/assets/avatar-1.webp',
    authorBio:
      'Marcus leads AI research at FrameFlow, with a background in computer vision and video processing.',
    date: 'March 12, 2025',
    readTime: '8 min read',
    category: 'Technology',
    image: 'https://picsum.photos/seed/ai-video/1200/600',
  },
  {
    slug: 'best-aspect-ratios-social-media-2025',
    title: 'Video Aspect Ratios for Social Media in 2025',
    excerpt:
      "Every platform has different video format requirements. Here is a practical guide to optimal aspect ratios for TikTok, Instagram, YouTube Shorts, LinkedIn, and Pinterest.",
    author: 'Sofia Reyes',
    authorRole: 'Head of Growth',
    authorAvatar: '/assets/avatar-1.webp',
    authorBio:
      'Sofia heads growth at FrameFlow and writes about social video trends and platform changes.',
    date: 'February 28, 2025',
    readTime: '10 min read',
    category: 'Creator Tips',
    image: 'https://picsum.photos/seed/social-video/1200/600',
  },
  {
    slug: 'frameflow-api-automation-guide',
    title: 'Automating Video Format Exports with the FrameFlow API',
    excerpt:
      "A step-by-step guide to integrating FrameFlow's REST API into your production pipeline, from authentication and job submission to webhook callbacks and output retrieval.",
    author: "James O'Brien",
    authorRole: 'Head of Engineering',
    authorAvatar: "/assets/avatar-2.webp",
    authorBio:
      "James leads engineering at FrameFlow. He writes about video processing infrastructure and developer tooling.",
    date: 'February 14, 2025',
    readTime: '12 min read',
    category: 'Developer',
    image: 'https://picsum.photos/seed/api-guide/1200/600',
  },
]

export const DASHBOARD_VIDEOS = [
  {
    id: '1',
    name: 'product-launch-video.mp4',
    formats: ['9:16', '1:1', '4:5'],
    status: 'completed',
    size: '284MB',
    duration: '2:34',
    date: 'Today, 2:14pm',
  },
  {
    id: '2',
    name: 'summer-collection-reel.mov',
    formats: ['9:16', '4:5'],
    status: 'completed',
    size: '512MB',
    duration: '1:02',
    date: 'Today, 11:30am',
  },
  {
    id: '3',
    name: 'founder-story-interview.mp4',
    formats: ['9:16', '1:1', '4:5'],
    status: 'processing',
    size: '1.2GB',
    duration: '8:45',
    date: 'Today, 9:00am',
  },
  {
    id: '4',
    name: 'tutorial-series-ep3.mp4',
    formats: ['9:16'],
    status: 'completed',
    size: '890MB',
    duration: '12:20',
    date: 'Yesterday, 4:55pm',
  },
  {
    id: '5',
    name: 'brand-ad-v2-final.mp4',
    formats: ['9:16', '1:1'],
    status: 'failed',
    size: '67MB',
    duration: '0:30',
    date: 'Yesterday, 1:10pm',
  },
  {
    id: '6',
    name: 'cooking-demo-episode7.mov',
    formats: ['9:16', '4:5'],
    status: 'completed',
    size: '3.1GB',
    duration: '18:00',
    date: 'Mar 14, 10:20am',
  },
  {
    id: '7',
    name: 'gym-workout-highlights.mp4',
    formats: ['9:16', '1:1', '4:5'],
    status: 'completed',
    size: '445MB',
    duration: '4:15',
    date: 'Mar 13, 3:00pm',
  },
  {
    id: '8',
    name: 'testimonial-batch-Q1.mp4',
    formats: ['9:16'],
    status: 'completed',
    size: '220MB',
    duration: '1:48',
    date: 'Mar 12, 8:45am',
  },
]

export const DASHBOARD_CHART_DATA = [
  { day: 'Mon', videos: 4 },
  { day: 'Tue', videos: 9 },
  { day: 'Wed', videos: 6 },
  { day: 'Thu', videos: 12 },
  { day: 'Fri', videos: 17 },
  { day: 'Sat', videos: 14 },
  { day: 'Sun', videos: 8 },
]

export const COMPARISON_TABLE = [
  { feature: 'Videos/month', starter: '30', creator: 'Unlimited', agency: 'Unlimited' },
  { feature: 'Max file size', starter: '500MB', creator: '4GB', agency: '4GB' },
  { feature: 'Export formats', starter: '3', creator: 'All + custom', agency: 'All + custom' },
  { feature: 'Batch upload', starter: false, creator: false, agency: true },
  { feature: 'API access', starter: false, creator: '100 calls/day', agency: 'Unlimited' },
  { feature: 'Team seats', starter: '1', creator: '1', agency: '5' },
  { feature: 'Custom presets', starter: false, creator: true, agency: true },
  { feature: 'Priority support', starter: false, creator: true, agency: true },
  { feature: 'SLA', starter: false, creator: false, agency: '99.9%' },
  { feature: 'White-label', starter: false, creator: false, agency: true },
]
