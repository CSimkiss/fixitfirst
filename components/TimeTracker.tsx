'use client'

import { useState, useEffect } from 'react'

type StepData = { current: number; total: number }

export default function TimeTracker({ slug, totalMins }: { slug: string; totalMins: number }) {
  const [stepData, setStepData] = useState<StepData | null>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    function readStep() {
      try {
        const raw = localStorage.getItem(`fixitfirst-step-${slug}`)
        if (raw) setStepData(JSON.parse(raw))
      } catch {}
    }

    readStep()
    setMounted(true)

    // Poll for step changes every second
    const interval = setInterval(readStep, 1000)
    return () => clearInterval(interval)
  }, [slug])

  if (!mounted) return null

  const currentStep = stepData?.current ?? 0
  const totalSteps = stepData?.total ?? 1
  const stepsRemaining = Math.max(0, totalSteps - currentStep - 1)
  const pct = totalSteps > 0 ? (currentStep / totalSteps) * 100 : 0
  const minsRemaining = Math.round((stepsRemaining / totalSteps) * totalMins)
  const isDone = currentStep >= totalSteps - 1

  return (
    <div className={`rounded-xl border p-4 mb-6 ${isDone ? 'bg-green-50 border-green-200' : 'bg-blue-50 border-blue-200'}`}>
      <div className="flex items-center justify-between mb-2 gap-4">
        <div className="flex items-center gap-2">
          <span className="text-base">{isDone ? '✅' : '⏱'}</span>
          <span className={`text-sm font-semibold ${isDone ? 'text-green-800' : 'text-blue-900'}`}>
            {isDone ? 'All steps done!' : 'Time remaining'}
          </span>
        </div>
        {!isDone && (
          <span className="text-sm font-bold text-blue-700 shrink-0">
            ~{minsRemaining === 0 ? '< 1' : minsRemaining} min{minsRemaining !== 1 ? 's' : ''}
          </span>
        )}
      </div>
      <div className={`h-2 rounded-full overflow-hidden ${isDone ? 'bg-green-100' : 'bg-blue-100'}`}>
        <div
          className={`h-full rounded-full transition-all duration-500 ${isDone ? 'bg-green-500' : 'bg-blue-500'}`}
          style={{ width: `${Math.max(pct, 8)}%` }}
        />
      </div>
      <p className={`text-xs mt-1.5 ${isDone ? 'text-green-700' : 'text-blue-600'}`}>
        {isDone
          ? `Completed in approx. ${totalMins} min — ready to mark as done below`
          : `Step ${currentStep + 1} of ${totalSteps} · ${totalMins} min total guide`}
      </p>
    </div>
  )
}
