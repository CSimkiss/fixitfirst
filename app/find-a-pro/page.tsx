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
        <h1 className="text-3xl md:text-5xl font-bold mb-3">Need a pro? We&apos;ll help you find one</h1>
        <p className="text-gray-300 text-lg max-w-xl mx-auto">
          Try a quick fix first — if it doesn&apos;t work, we&apos;ve got you covered.
        </p>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-12 space-y-10">

        {/* Try a quick fix first */}
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
          <h2 className="font-bold text-gray-900 text-lg mb-1">Try a quick fix first (10–20 mins)</h2>
          <p className="text-sm text-gray-500 mb-5">Most common issues have a simple DIY fix. These take under 20 minutes.</p>
          <div className="space-y-3 mb-5">
            {[
              { title: 'Unblock a drain', time: '15 mins', cost: 'Free–£5', href: '/guides/unblock-a-drain' },
              { title: 'Fix a dripping tap', time: '20 mins', cost: '£5–15', href: '/guides/fix-a-dripping-tap' },
              { title: 'Fix a running toilet', time: '20 mins', cost: '£10–20', href: '/guides/fix-a-running-toilet' },
            ].map((g) => (
              <a
                key={g.href}
                href={g.href}
                className="flex items-center justify-between bg-white border border-orange-200 rounded-xl px-4 py-3 hover:border-orange-400 hover:shadow-sm transition-all group"
              >
                <span className="font-medium text-sm text-gray-900 group-hover:text-orange-500 transition-colors">{g.title}</span>
                <span className="text-xs text-gray-400 shrink-0 ml-4">{g.time} · {g.cost}</span>
              </a>
            ))}
          </div>
          <a
            href="/guides"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
          >
            Try a quick fix first →
          </a>
        </div>

        {/* Search form */}
        <form onSubmit={handleSearch} className="bg-gray-50 border border-gray-200 rounded-2xl p-6 space-y-4">
          <p className="text-sm text-gray-500">When it&apos;s beyond a quick fix, find someone nearby</p>
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

        {/* Search result */}
        {searched ? (
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 text-center">
            <p className="text-2xl mb-3">🔧</p>
            <p className="font-semibold text-gray-900 mb-2">While we build our directory&hellip;</p>
            <p className="text-sm text-gray-600 mb-4">
              Most issues have a quick DIY fix first. Try one before booking a tradesperson.
            </p>
            <a
              href="/guides"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
            >
              Browse all guides →
            </a>
          </div>
        ) : (
          <div className="text-center text-gray-400 text-sm">
            Enter your postcode and trade to search.
          </div>
        )}

        {/* Email capture */}
        <div className="bg-gray-950 text-white rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-2">Get weekly fixes before you need a pro</h2>
          <p className="text-gray-300 text-sm mb-6">
            One simple home fix per week. Most take under an hour and save £50–£150.
          </p>
          <EmailCapture source="find-a-pro" ctaLabel="Send me fixes" />
        </div>

        {/* When to call a pro */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
          <h2 className="font-semibold text-gray-900 mb-4">When to call a pro</h2>
          <ul className="space-y-3">
            {[
              'Multiple issues happening at once',
              'Electrical problems you\'re unsure about',
              'Structural or safety concerns',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                <span className="text-orange-500 mt-0.5 shrink-0">•</span>
                {item}
              </li>
            ))}
          </ul>
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
