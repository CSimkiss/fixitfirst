'use client'

import { useState } from 'react'

export default function StepProgress({ totalSteps = 6 }: { totalSteps?: number }) {
  const [currentStep, setCurrentStep] = useState(1)

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 mb-6">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-semibold text-gray-700">Step {currentStep} of {totalSteps}</span>
        <div className="flex gap-2">
          <button
            onClick={() => setCurrentStep(s => Math.max(1, s - 1))}
            disabled={currentStep === 1}
            className="text-xs px-3 py-1 border border-gray-200 rounded-lg disabled:opacity-30 hover:border-orange-300 transition-colors"
          >← Prev</button>
          <button
            onClick={() => setCurrentStep(s => Math.min(totalSteps, s + 1))}
            disabled={currentStep === totalSteps}
            className="text-xs px-3 py-1 border border-gray-200 rounded-lg disabled:opacity-30 hover:border-orange-300 transition-colors"
          >Next →</button>
        </div>
      </div>
      <div className="flex gap-1">
        {Array.from({ length: totalSteps }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentStep(i + 1)}
            className={`h-2 flex-1 rounded-full transition-all ${i < currentStep ? 'bg-orange-500' : 'bg-gray-200'}`}
          />
        ))}
      </div>
    </div>
  )
}
