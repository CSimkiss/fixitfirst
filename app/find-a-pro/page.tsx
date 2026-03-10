'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import EmailCapture from '@/components/EmailCapture'

const CATEGORIES = [
  'Plumber',
  'Electrician',
  'Carpenter / Joiner',
  'Decorator',
  'Handyman',
  'Heating engineer',
  'Tiler',
  'Plasterer',
  'Roofer',
  'General builder',
]

export default function FindAProPage() {
  const [postcode, setPostcode] = useState('')
  const [category, setCategory] = useState('')
  const [searched, setSearched] = useState(false)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    setSearched(true)
  }

  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      <div className="bg-gray-950 text-white px-6 py-14 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-3">Find a trusted tradesperson</h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          When the job needs a pro, we'll help you find one nearby — vetted, reviewed, and fairly priced.
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-12 space-y-10">

        {/* Search form */}
        <form onSubmit={handleSearch} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 space-y-4">
          <h2 className="font-semibold text-gray-900 text-lg">Search for a tradesperson</h2>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Postcode</label>
            <input
              type="text"
              value={postcode}
              onChange={(e) => setPostcode(e.target.value.toUpperCase())}
              placeholder="e.g. SW1A 1AA"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent uppercase"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Trade category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent bg-white"
            >
              <option value="">Select a trade...</option>
              {CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
          >
            Search
          </button>
        </form>

        {/* Result / coming soon */}
        {searched ? (
          <div className="text-center py-4">
            <p className="text-2xl mb-3">🚧</p>
            <p className="font-semibold text-gray-900 mb-1">No results yet</p>
            <p className="text-sm text-gray-500">
              The trades directory is coming soon. Leave your email and we&apos;ll notify you when it launches.
            </p>
          </div>
        ) : (
          <div className="text-center text-gray-400 text-sm">
            Enter your postcode and trade to search.
          </div>
        )}

        {/* Email capture */}
        <div className="bg-gray-950 text-white rounded-2xl p-8 text-center">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-wide mb-3">Coming soon</p>
          <h2 className="text-xl font-bold mb-2">Trades directory launching soon</h2>
          <p className="text-gray-300 text-sm mb-6">
            We&apos;re vetting tradespeople across the UK. Be first to search when it goes live.
          </p>
          <EmailCapture />
        </div>

        {/* Why trust section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          {[
            { icon: '✅', title: 'Vetted trades', desc: 'Every tradesperson checked for insurance and reviews' },
            { icon: '💬', title: 'Real reviews', desc: 'Ratings from real customers, not paid listings' },
            { icon: '💰', title: 'Fair pricing', desc: 'Typical job costs shown upfront so you know what to expect' },
          ].map((item) => (
            <div key={item.title} className="bg-gray-50 rounded-xl p-4">
              <div className="text-2xl mb-2">{item.icon}</div>
              <p className="font-semibold text-sm text-gray-900 mb-1">{item.title}</p>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
      <MobileNav />
    </main>
  )
}
