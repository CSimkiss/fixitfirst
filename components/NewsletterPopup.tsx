'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

const DISMISSED_KEY = 'fixitfirst-newsletter-popup-dismissed'

export default function NewsletterPopup() {
  const [visible, setVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'duplicate' | 'error'>('idle')

  useEffect(() => {
    try {
      if (localStorage.getItem(DISMISSED_KEY)) return
    } catch {}

    const timer = setTimeout(() => setVisible(true), 30000)
    return () => clearTimeout(timer)
  }, [])

  const dismiss = () => {
    try { localStorage.setItem(DISMISSED_KEY, '1') } catch {}
    setVisible(false)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    const { error } = await supabase
      .from('email_signups')
      .insert({ email, source: 'popup' })

    if (!error) {
      setStatus('success')
      try { localStorage.setItem(DISMISSED_KEY, '1') } catch {}
    } else if (error.code === '23505') {
      setStatus('duplicate')
    } else {
      setStatus('error')
    }
  }

  if (!visible) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative animate-in slide-in-from-bottom-4 duration-300">
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl leading-none"
        >
          ×
        </button>

        <div className="text-center mb-6">
          <div className="text-4xl mb-3">🔧</div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Get a free fix every week</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            One practical DIY guide every Monday. Save money, build skills, never pay for something you can fix yourself.
          </p>
        </div>

        {status === 'success' && (
          <p className="text-green-600 font-semibold text-center text-lg">
            ✓ You&apos;re in! First fix lands in your inbox soon.
          </p>
        )}

        {status === 'duplicate' && (
          <p className="text-blue-600 font-semibold text-center text-lg">
            ✓ You&apos;re already signed up!
          </p>
        )}

        {(status === 'idle' || status === 'loading' || status === 'error') && (
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              required
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors disabled:opacity-70"
            >
              {status === 'loading' ? 'Saving…' : 'Get my free weekly fix'}
            </button>
            {status === 'error' && (
              <p className="text-red-500 text-xs text-center">Something went wrong. Please try again.</p>
            )}
          </form>
        )}

        <p className="text-gray-400 text-xs text-center mt-4">
          Free forever. No spam. Unsubscribe any time.
        </p>

        {status !== 'idle' && status !== 'loading' && status !== 'error' && (
          <button
            onClick={dismiss}
            className="mt-4 w-full text-gray-400 text-sm hover:text-gray-600 transition-colors"
          >
            Close
          </button>
        )}
      </div>
    </div>
  )
}
