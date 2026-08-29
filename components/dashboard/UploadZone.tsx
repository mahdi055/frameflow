'use client'

import { useState, useRef } from 'react'
import { UploadCloud } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function UploadZone() {
  const [isDragging, setIsDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = e.dataTransfer.files
    if (files.length > 0) {
      console.log('Files dropped:', files)
    }
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={cn(
        'relative rounded-xl border-2 border-dashed p-10 text-center transition-all duration-200 cursor-pointer',
        isDragging
          ? 'border-violet-500 bg-violet-600/10'
          : 'border-white/10 bg-white/[0.02] hover:border-violet-500/40 hover:bg-violet-600/5'
      )}
      onClick={() => inputRef.current?.click()}
    >
      <input
        ref={inputRef}
        type="file"
        accept="video/mp4,video/quicktime,video/webm"
        className="hidden"
        multiple
      />

      <div
        className={cn(
          'w-14 h-14 rounded-full mx-auto mb-4 flex items-center justify-center transition-all',
          isDragging ? 'bg-violet-600/30' : 'bg-white/5'
        )}
      >
        <UploadCloud
          className={cn(
            'w-7 h-7 transition-colors',
            isDragging ? 'text-violet-300' : 'text-violet-500'
          )}
        />
      </div>

      <h3 className="text-white font-semibold mb-1">
        {isDragging ? 'Drop your video here' : 'Drag & drop your video here'}
      </h3>
      <p className="text-gray-400 text-sm mb-4">or</p>
      <button
        type="button"
        className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-sm font-medium rounded-lg transition-colors"
        onClick={(e) => {
          e.stopPropagation()
          inputRef.current?.click()
        }}
      >
        Browse Files
      </button>
      <p className="text-gray-500 text-xs mt-4">Supports MP4, MOV, WebM up to 4GB per file</p>
    </div>
  )
}
