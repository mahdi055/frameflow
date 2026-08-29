'use client'

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import { DASHBOARD_CHART_DATA } from '@/lib/data'

interface TooltipProps {
  active?: boolean
  payload?: Array<{ value: number }>
  label?: string
}

function CustomTooltip({ active, payload, label }: TooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#1e1e2d] border border-white/10 rounded-lg px-3 py-2 shadow-xl">
        <p className="text-gray-400 text-xs mb-0.5">{label}</p>
        <p className="text-white font-semibold text-sm">{payload[0].value} videos</p>
      </div>
    )
  }
  return null
}

interface UsageChartProps {
  data?: typeof DASHBOARD_CHART_DATA
}

export default function UsageChart({ data = DASHBOARD_CHART_DATA }: UsageChartProps) {
  return (
    <div className="p-5 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm h-full">
      <div className="mb-4">
        <h3 className="text-white font-semibold">Video Activity</h3>
        <p className="text-gray-400 text-sm">Videos processed this week</p>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={data} margin={{ top: 5, right: 5, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="violetGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#7c3aed" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#7c3aed" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />

          <XAxis
            dataKey="day"
            tick={{ fill: '#6b7280', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />

          <YAxis
            tick={{ fill: '#6b7280', fontSize: 11 }}
            axisLine={false}
            tickLine={false}
          />

          <Tooltip content={<CustomTooltip />} />

          <Area
            type="monotone"
            dataKey="videos"
            stroke="#7c3aed"
            strokeWidth={2}
            fill="url(#violetGradient)"
            dot={{ fill: '#7c3aed', strokeWidth: 0, r: 4 }}
            activeDot={{ fill: '#a78bfa', strokeWidth: 0, r: 5 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
