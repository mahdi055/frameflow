'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Camera,
  Home,
  Video,
  Upload,
  Sliders,
  Code,
  Users,
  CreditCard,
  Settings,
  Zap,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const NAV_ITEMS = [
  { label: 'Dashboard', href: '/dashboard', icon: Home },
  { label: 'Videos', href: '/dashboard/videos', icon: Video },
  { label: 'Upload', href: '/dashboard/upload', icon: Upload },
  { label: 'Presets', href: '/dashboard/presets', icon: Sliders },
  { label: 'API', href: '/dashboard/api', icon: Code },
  { label: 'Team', href: '/dashboard/team', icon: Users },
  { label: 'Billing', href: '/dashboard/billing', icon: CreditCard },
  { label: 'Settings', href: '/dashboard/settings', icon: Settings },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex flex-col w-60 min-h-screen bg-[#16161f] border-r border-white/10">
        {/* Logo */}
        <div className="flex items-center gap-2.5 px-5 h-16 border-b border-white/10">
          <div className="w-7 h-7 bg-violet-600 rounded-lg flex items-center justify-center">
            <Camera className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="font-bold text-white">FrameFlow</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 px-3">
          <div className="space-y-0.5">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all',
                    isActive
                      ? 'bg-violet-600/20 text-violet-300 border border-violet-500/20'
                      : 'text-gray-400 hover:text-white hover:bg-white/5'
                  )}
                >
                  <Icon className={cn('w-4 h-4', isActive ? 'text-violet-400' : 'text-gray-500')} />
                  {item.label}
                </Link>
              )
            })}
          </div>
        </nav>

        {/* Upgrade CTA */}
        <div className="p-4 border-t border-white/10">
          <div className="p-4 rounded-xl bg-violet-600/10 border border-violet-500/20">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-violet-400" />
              <span className="text-white text-sm font-semibold">Starter Plan</span>
            </div>
            <p className="text-gray-400 text-xs mb-3">8 of 30 videos used this month</p>
            <div className="w-full bg-white/10 rounded-full h-1.5 mb-3">
              <div className="bg-violet-500 h-1.5 rounded-full" style={{ width: '27%' }} />
            </div>
            <Link
              href="/pricing"
              className="block w-full text-center text-xs font-medium bg-violet-600 hover:bg-violet-500 text-white py-2 rounded-lg transition-colors"
            >
              Upgrade to Creator
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile bottom tab bar */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 bg-[#16161f] border-t border-white/10 z-50">
        <div className="flex items-center justify-around h-14">
          {NAV_ITEMS.slice(0, 5).map((item) => {
            const Icon = item.icon
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex flex-col items-center gap-1 px-3 py-2 text-xs',
                  isActive ? 'text-violet-400' : 'text-gray-500'
                )}
              >
                <Icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}
