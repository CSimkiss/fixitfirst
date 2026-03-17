'use client'

import { useState, useEffect } from 'react'
import { useCompletions } from '@/lib/useCompletions'

type Step = { title: string; description: string }

export default function StepProgress({ steps, slug }: { steps: Step[]; slug?: string }) {
  const [current, setCurrent] = useState(0)
  const total = steps.length
  const { completionMap, markComplete, mounted } = useCompletions()
  const [saving, setSaving] = useState(false)

  const completed = slug ? !!completionMap[slug] : false

  useEffect(() => {
    if (slug) {
      localStorage.setItem(`fixitfirst-step-${slug}`, JSON.stringify({ current, total }))
    }
  }, [current, slug, total])

  function go(n: number) {
    setCurrent(n)
  }

  async function handleEarlyComplete() {
    if (!slug || completed || saving) return
    setSaving(true)
    await markComplete(slug)
    setSaving(false)
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-gray-700">Step {current + 1} of {total} — {Math.round(((current + 1) / total) * 100)}% done</span>
        <div className="flex gap-2">
          <button
            onClick={() => go(Math.max(0, current - 1))}
            disabled={current === 0}
            className="text-xs px-3 py-1 border border-gray-200 rounded-lg disabled:opacity-30 hover:border-orange-300 transition-colors"
          >← Prev</button>
          <button
            onClick={() => go(Math.min(total - 1, current + 1))}
            disabled={current === total - 1}
            className="text-xs px-3 py-1 border border-gray-200 rounded-lg disabled:opacity-30 hover:border-orange-300 transition-colors"
          >Next →</button>
        </div>
      </div>
      <div className="flex gap-1 mb-4">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`h-2 flex-1 rounded-full transition-all ${i <= current ? 'bg-orange-500' : 'bg-gray-200'}`}
          />
        ))}
      </div>
      <div className="flex gap-4 pt-3 border-t border-gray-100">
        <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0 text-sm">
          {current + 1}
        </div>
        <div>
          <h3 className="font-semibold mb-1">{steps[current].title}</h3>
          <p className="text-sm text-gray-600">{steps[current].description}</p>
          {current === 0 && (
            <p className="text-xs text-gray-400 mt-2">Most people get this done in under 5 minutes.</p>
          )}
        </div>
      </div>
      {mounted && slug && current >= 1 && !completed && (
        <div className="mt-4 pt-3 border-t border-gray-100">
          <button
            onClick={handleEarlyComplete}
            disabled={saving}
            className="w-full py-2.5 rounded-lg text-sm font-medium text-green-700 bg-green-50 border border-green-200 hover:bg-green-100 transition-colors disabled:opacity-60"
          >
            {saving ? 'Saving…' : 'Fixed it already? Mark as complete'}
          </button>
        </div>
      )}
    </div>
  )
}
