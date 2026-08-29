'use client'

import { FileVideo, Download, Trash2 } from 'lucide-react'
import { DASHBOARD_VIDEOS } from '@/lib/data'
import { cn } from '@/lib/utils'

const STATUS_STYLES: Record<string, string> = {
  completed: 'bg-green-500/10 text-green-400 border-green-500/20',
  processing: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  failed: 'bg-red-500/10 text-red-400 border-red-500/20',
}

interface VideosTableProps {
  videos?: typeof DASHBOARD_VIDEOS
}

export default function VideosTable({ videos = DASHBOARD_VIDEOS }: VideosTableProps) {
  if (videos.length === 0) {
    return (
      <div className="p-10 rounded-xl border border-white/10 bg-white/5 text-center">
        <FileVideo className="w-10 h-10 text-gray-600 mx-auto mb-3" />
        <p className="text-gray-400 font-medium">No videos yet</p>
        <p className="text-gray-600 text-sm mt-1">Upload your first video to get started.</p>
      </div>
    )
  }

  return (
    <div className="rounded-xl border border-white/10 bg-white/5 overflow-hidden">
      <div className="p-5 border-b border-white/10">
        <h3 className="text-white font-semibold">Recent Videos</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/5">
              <th className="text-left py-3 px-4 text-gray-500 font-medium">Name</th>
              <th className="text-left py-3 px-4 text-gray-500 font-medium">Formats</th>
              <th className="text-left py-3 px-4 text-gray-500 font-medium">Status</th>
              <th className="text-left py-3 px-4 text-gray-500 font-medium">Size</th>
              <th className="text-left py-3 px-4 text-gray-500 font-medium">Duration</th>
              <th className="text-left py-3 px-4 text-gray-500 font-medium">Date</th>
              <th className="text-right py-3 px-4 text-gray-500 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {videos.map((video) => (
              <tr
                key={video.id}
                className="border-b border-white/5 hover:bg-white/[0.03] transition-colors"
              >
                <td className="py-3 px-4">
                  <div className="flex items-center gap-2.5">
                    <FileVideo className="w-4 h-4 text-violet-400 flex-shrink-0" />
                    <span className="text-white font-medium truncate max-w-[180px]">
                      {video.name}
                    </span>
                  </div>
                </td>
                <td className="py-3 px-4">
                  <div className="flex gap-1.5 flex-wrap">
                    {video.formats.map((fmt) => (
                      <span
                        key={fmt}
                        className="px-1.5 py-0.5 bg-violet-600/10 border border-violet-500/20 text-violet-300 text-xs rounded"
                      >
                        {fmt}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-3 px-4">
                  <span
                    className={cn(
                      'px-2 py-0.5 rounded-full text-xs font-medium border capitalize',
                      STATUS_STYLES[video.status]
                    )}
                  >
                    {video.status}
                  </span>
                </td>
                <td className="py-3 px-4 text-gray-400">{video.size}</td>
                <td className="py-3 px-4 text-gray-400">{video.duration}</td>
                <td className="py-3 px-4 text-gray-500 text-xs">{video.date}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center justify-end gap-2">
                    <button
                      className="p-1.5 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                      aria-label="Download"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                    <button
                      className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all"
                      aria-label="Delete"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
