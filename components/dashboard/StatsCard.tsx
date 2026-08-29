import { TrendingUp, TrendingDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StatsCardProps {
  title: string
  value: string
  change: string
  icon: React.ComponentType<{ className?: string }>
  iconColor?: string
  positive?: boolean
}

export default function StatsCard({
  title,
  value,
  change,
  icon: Icon,
  iconColor = 'text-violet-400',
  positive = true,
}: StatsCardProps) {
  return (
    <div className="p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
      <div className="flex items-center justify-between mb-3">
        <span className="text-gray-400 text-sm font-medium">{title}</span>
        <div className={cn('p-2 rounded-lg bg-white/5', iconColor.replace('text-', 'bg-').replace('400', '600/10'))}>
          <Icon className={cn('w-4 h-4', iconColor)} />
        </div>
      </div>

      <div className="flex items-end justify-between">
        <span className="text-2xl font-bold text-white">{value}</span>
        <div
          className={cn(
            'flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full',
            positive
              ? 'text-green-400 bg-green-400/10'
              : 'text-red-400 bg-red-400/10'
          )}
        >
          {positive ? (
            <TrendingUp className="w-3 h-3" />
          ) : (
            <TrendingDown className="w-3 h-3" />
          )}
          {change}
        </div>
      </div>
    </div>
  )
}
