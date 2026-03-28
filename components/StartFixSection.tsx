'use client'

import { useState } from 'react'

const FEATURED_FIXES = [
  {
    title: 'Fix a dripping tap',
    href: '/guides/fix-a-dripping-tap',
    time: '45 mins',
    saves: 'Save £80–150',
    emoji: '💧',
  },
  {
    title: 'Fix a running toilet',
    href: '/guides/fix-a-running-toilet',
    time: '1 hour',
    saves: 'Save £80–150',
    emoji: '🚽',
  },
  {
    title: 'Unblock a drain',
    href: '/guides/unblock-a-drain',
    time: '20 mins',
    saves: 'Save £60–120',
    emoji: '🚿',
  },
]

function InlineEmailCapture() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'start-fix-section', tags: ['weekly_fix'] }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="bg-white border border-orange-200 rounded-2xl p-8 text-center max-w-xl mx-auto">
        <p className="text-green-600 font-semibold text-lg">✓ You&apos;re in — your first fix is on the way.</p>
      </div>
    )
  }

  return (
    <div className="bg-white border border-orange-200 rounded-2xl p-8 text-center max-w-xl mx-auto">
      <p className="font-semibold text-gray-900 mb-1">Get one simple fix each week</p>
      <p className="text-sm text-gray-400 mb-5">No spam. Just one useful fix, delivered to your inbox.</p>
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email..."
          required
          className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 flex-1 min-w-0"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-orange-500 text-white px-5 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors whitespace-nowrap disabled:opacity-70 text-sm"
        >
          {status === 'loading' ? 'Saving…' : 'Send me fixes'}
        </button>
      </form>
    </div>
  )
}

export default function StartFixSection() {
  return (
    <section className="bg-orange-50 border-t border-orange-100 px-6 py-14">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Start your first fix today
          </h2>
          <p className="text-gray-500 text-lg">
            Most people save £50–£200 on their first job
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
          {FEATURED_FIXES.map((fix) => (
            <a
              key={fix.href}
              href={fix.href}
              className="bg-white border border-orange-200 rounded-2xl p-6 hover:border-orange-400 hover:shadow-md transition-all group flex flex-col"
            >
              <div className="text-4xl mb-4">{fix.emoji}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-orange-600 transition-colors">
                {fix.title}
              </h3>
              <p className="text-sm font-bold text-green-600 mb-1">{fix.saves}</p>
              <p className="text-sm text-gray-400 mb-5">⏱ {fix.time}</p>
              <span className="mt-auto inline-flex items-center gap-1.5 bg-orange-500 group-hover:bg-orange-600 transition-colors text-white text-sm font-semibold px-5 py-2.5 rounded-xl">
                Start fix →
              </span>
            </a>
          ))}
        </div>

        {/* Optional email capture */}
        <InlineEmailCapture />
      </div>
    </section>
  )
}
