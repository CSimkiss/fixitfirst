'use client'

import { useEffect, useState } from 'react'
import { ALL_TOOLS, TOOLS_STORAGE_KEY } from '@/lib/tools'

export default function ToolsWarning({ requiredToolIds }: { requiredToolIds: string[] }) {
  const [missingTools, setMissingTools] = useState<string[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const raw = localStorage.getItem(TOOLS_STORAGE_KEY)
    const owned: string[] = raw ? JSON.parse(raw) : []
    const missing = requiredToolIds.filter((id) => !owned.includes(id))
    setMissingTools(missing)
    setMounted(true)
  }, [requiredToolIds])

  if (!mounted || missingTools.length === 0) return null

  const missingNames = missingTools.map(
    (id) => ALL_TOOLS.find((t) => t.id === id)?.name ?? id
  )

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6 flex gap-3">
      <span className="text-amber-500 text-lg shrink-0">⚠</span>
      <div className="text-sm">
        <p className="font-semibold text-amber-900 mb-1">
          You&apos;re missing {missingTools.length} tool{missingTools.length > 1 ? 's' : ''} for this guide
        </p>
        <p className="text-amber-800 mb-2">{missingNames.join(', ')}</p>
        <a href="/tools" className="text-amber-700 underline font-medium hover:text-amber-900">
          Update your tool library →
        </a>
      </div>
    </div>
  )
}
