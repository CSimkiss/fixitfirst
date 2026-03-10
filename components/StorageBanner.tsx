'use client'

import { useState, useEffect } from 'react'

const BANNER_KEY = 'fixitfirst-storage-banner-dismissed'

export default function StorageBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem(BANNER_KEY)) {
      setVisible(true)
    }
  }, [])

  function dismiss() {
    localStorage.setItem(BANNER_KEY, '1')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-16 md:bottom-0 left-0 right-0 bg-gray-900 text-white px-6 py-3 z-40 flex items-center justify-between gap-4 text-sm">
      <p className="text-gray-200">
        🔒 We use localStorage to save your progress.{' '}
        <strong className="text-white">No data leaves your device.</strong>
      </p>
      <button
        onClick={dismiss}
        className="shrink-0 text-gray-400 hover:text-white font-medium transition-colors"
      >
        Got it
      </button>
    </div>
  )
}
