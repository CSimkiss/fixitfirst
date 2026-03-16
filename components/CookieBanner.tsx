'use client'

import { useEffect, useState } from 'react'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('fixitfirst-cookie-consent')
    if (!consent) setVisible(true)
  }, [])

  const accept = () => {
    localStorage.setItem('fixitfirst-cookie-consent', 'accepted')
    setVisible(false)
  }

  const dismiss = () => {
    localStorage.setItem('fixitfirst-cookie-consent', 'necessary')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-16 md:bottom-0 left-0 right-0 z-40 bg-gray-950 text-white px-6 py-4 shadow-2xl border-t border-gray-800">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-200 leading-relaxed">
            We use localStorage to save your progress and preferences.{' '}
            <a href="/cookies" className="text-orange-400 hover:text-orange-300 underline underline-offset-2">
              Learn what we store and why
            </a>
            . We do not use advertising cookies.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <a
            href="/cookies"
            onClick={dismiss}
            className="text-sm font-medium text-gray-400 hover:text-white transition-colors px-4 py-2 rounded-lg border border-gray-700 hover:border-gray-500"
          >
            Manage
          </a>
          <button
            onClick={accept}
            className="text-sm font-medium bg-orange-500 hover:bg-orange-600 transition-colors text-white px-5 py-2 rounded-lg"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  )
}
