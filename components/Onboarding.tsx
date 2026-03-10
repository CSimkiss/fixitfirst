'use client'

import { useState, useEffect } from 'react'
import { ALL_TOOLS, TOOLS_STORAGE_KEY } from '@/lib/tools'

const ONBOARDING_KEY = 'fixitfirst-onboarding-complete'

export default function Onboarding() {
  const [visible, setVisible] = useState(false)
  const [step, setStep] = useState(1)
  const [ownedTools, setOwnedTools] = useState<string[]>([])

  useEffect(() => {
    if (!localStorage.getItem(ONBOARDING_KEY)) {
      setVisible(true)
    }
  }, [])

  function toggleTool(id: string) {
    setOwnedTools(prev =>
      prev.includes(id) ? prev.filter(t => t !== id) : [...prev, id]
    )
  }

  function finish() {
    localStorage.setItem(ONBOARDING_KEY, '1')
    localStorage.setItem(TOOLS_STORAGE_KEY, JSON.stringify(ownedTools))
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 bg-gray-950/90 z-50 flex items-center justify-center p-6">
      <div className="bg-white rounded-2xl max-w-lg w-full p-8">

        <div className="flex gap-2 mb-8 justify-center">
          {[1, 2, 3].map(s => (
            <div
              key={s}
              className={`h-1.5 rounded-full w-16 transition-all ${step >= s ? 'bg-orange-500' : 'bg-gray-200'}`}
            />
          ))}
        </div>

        {step === 1 && (
          <>
            <div className="text-center mb-8">
              <div className="text-5xl mb-4">🔧</div>
              <h1 className="text-2xl font-bold text-gray-900 mb-3">Welcome to FixItFirst</h1>
              <p className="text-gray-500 text-base leading-relaxed">
                Nobody taught you how to do this stuff.<br />We will. One fix at a time.
              </p>
            </div>
            <button
              onClick={() => setStep(2)}
              className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
            >
              Get started
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-bold text-gray-900 mb-6">What&apos;s your experience level?</h2>
            <div className="flex flex-col gap-3">
              {[
                { value: 'none', label: 'Never done DIY', emoji: '😅' },
                { value: 'some', label: 'Done a bit', emoji: '🙂' },
                { value: 'confident', label: 'Fairly confident', emoji: '💪' },
              ].map(opt => (
                <button
                  key={opt.value}
                  onClick={() => setStep(3)}
                  className="flex items-center gap-4 border-2 border-gray-200 rounded-xl p-4 text-left hover:border-orange-500 transition-colors"
                >
                  <span className="text-2xl">{opt.emoji}</span>
                  <span className="font-medium text-gray-900">{opt.label}</span>
                </button>
              ))}
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-xl font-bold text-gray-900 mb-1">Tick the tools you already own</h2>
            <p className="text-gray-500 text-sm mb-5">We&apos;ll warn you if a guide needs tools you don&apos;t have yet.</p>
            <div className="max-h-64 overflow-y-auto flex flex-col gap-1 mb-6 pr-1">
              {ALL_TOOLS.map(tool => (
                <label key={tool.id} className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 px-2 py-2 rounded-lg">
                  <input
                    type="checkbox"
                    checked={ownedTools.includes(tool.id)}
                    onChange={() => toggleTool(tool.id)}
                    className="w-4 h-4 accent-orange-500 shrink-0"
                  />
                  <span className="text-sm text-gray-700">{tool.name}</span>
                </label>
              ))}
            </div>
            <button
              onClick={finish}
              className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
            >
              Let&apos;s get started
            </button>
          </>
        )}
      </div>
    </div>
  )
}
