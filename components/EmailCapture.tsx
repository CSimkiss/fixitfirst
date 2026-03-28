'use client'

import { useState } from 'react'

interface EmailCaptureProps {
  source?: string
  tags?: string[]
  ctaLabel?: string
}

export default function EmailCapture({ source = 'unknown', tags, ctaLabel }: EmailCaptureProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'duplicate' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, source, tags }),
    })

    const data = await res.json()

    if (!res.ok) {
      setStatus('error')
    } else if (data.duplicate) {
      setStatus('duplicate')
    } else {
      setStatus('success')
    }
  }

  if (status === 'success') {
    return (
      <p className="text-green-400 font-semibold text-lg">
        ✓ You&apos;re in. Check your email — your first fix is waiting.
      </p>
    )
  }

  if (status === 'duplicate') {
    return (
      <p className="text-blue-400 font-semibold text-lg">
        ✓ You&apos;re already signed up!
      </p>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email address..."
        required
        className="bg-white/10 text-white placeholder-gray-400 border border-white/20 rounded-xl px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-orange-500 w-full sm:w-80"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors whitespace-nowrap disabled:opacity-70"
      >
        {status === 'loading' ? 'Saving…' : (ctaLabel ?? 'Send it to me →')}
      </button>
      {status === 'error' && (
        <p className="text-red-400 text-sm mt-1 w-full">Something went wrong. Please try again.</p>
      )}
    </form>
  )
}
