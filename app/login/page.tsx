'use client'

import { useState } from 'react'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen bg-gray-50 flex flex-col">
      <nav className="bg-white border-b border-gray-100 px-6 py-4">
        <a href="/" className="text-2xl font-bold text-orange-500">FixItFirst</a>
      </nav>

      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 w-full max-w-md">
          {submitted ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">👋</div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Welcome back!</h2>
              <p className="text-gray-500 mb-6">Backend coming soon — stay tuned.</p>
              <a href="/" className="text-orange-500 font-medium hover:underline">Back to home →</a>
            </div>
          ) : (
            <>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Log in</h1>
              <p className="text-gray-500 text-sm mb-6">Good to have you back.</p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Your password"
                    required
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                  />
                </div>
                <div className="flex justify-end">
                  <a href="#" className="text-xs text-orange-500 hover:underline">Forgot password?</a>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
                >
                  Log in
                </button>
              </form>

              <p className="text-center text-sm text-gray-500 mt-6">
                New here?{' '}
                <a href="/sign-up" className="text-orange-500 font-medium hover:underline">Create a free account</a>
              </p>
            </>
          )}
        </div>
      </div>
    </main>
  )
}
