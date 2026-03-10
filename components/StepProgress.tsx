'use client'

import { useState } from 'react'

type Step = { title: string; description: string }

export default function StepProgress({ steps }: { steps: Step[] }) {
  const [current, setCurrent] = useState(0)
  const total = steps.length

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-gray-700">Step {current + 1} of {total}</span>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrent(s => Math.max(0, s - 1))}
            disabled={current === 0}
            className="text-xs px-3 py-1 border border-gray-200 rounded-lg disabled:opacity-30 hover:border-orange-300 transition-colors"
          >← Prev</button>
          <button
            onClick={() => setCurrent(s => Math.min(total - 1, s + 1))}
            disabled={current === total - 1}
            className="text-xs px-3 py-1 border border-gray-200 rounded-lg disabled:opacity-30 hover:border-orange-300 transition-colors"
          >Next →</button>
        </div>
      </div>
      <div className="flex gap-1 mb-4">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
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
        </div>
      </div>
    </div>
  )
}
