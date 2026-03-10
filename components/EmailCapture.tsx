'use client'

import { useState } from 'react'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <p className="text-green-400 font-semibold text-lg">
        ✓ You&apos;re on the list — we&apos;ll let you know when we launch.
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
        className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors whitespace-nowrap"
      >
        Notify me
      </button>
    </form>
  )
}
