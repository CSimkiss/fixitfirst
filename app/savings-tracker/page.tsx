'use client'

import { useState } from 'react'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import { ALL_GUIDES } from '@/lib/guides'
import { useCompletions } from '@/lib/useCompletions'
import { totalSavings } from '@/lib/completions'


export default function SavingsTracker() {
  const { completionMap, user, mounted } = useCompletions()
  const [shared, setShared] = useState(false)

  if (!mounted) return null

  const completedSlugs = Object.keys(completionMap)
  const guideRows = ALL_GUIDES.map(g => {
    const midpoint = g.estimatedSavingsMin > 0
      ? Math.round((g.estimatedSavingsMin + g.estimatedSavingsMax) / 2)
      : 0
    const savingsLabel = g.estimatedSavingsMin > 0
      ? `£${g.estimatedSavingsMin}–${g.estimatedSavingsMax}`
      : ''
    const done = completedSlugs.includes(g.slug)
    return { ...g, midpoint, savingsLabel, done }
  })

  const totalSaved = totalSavings(completionMap)
  const potentialTotal = guideRows.reduce((sum, r) => sum + r.midpoint, 0)
  const maxSaving = Math.max(...guideRows.map(r => r.midpoint))

  function handleShare() {
    const text = `I've saved £${totalSaved} doing my own home repairs with FixItFirst! 🔧 ${completedSlugs.length} guides completed. Check it out at fixit-first.co.uk`
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({ title: 'My DIY savings', text }).catch(() => {})
    } else {
      navigator.clipboard.writeText(text).then(() => {
        setShared(true)
        setTimeout(() => setShared(false), 2000)
      })
    }
  }

  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      <div className="bg-gray-950 text-white px-6 py-14 text-center">
        <p className="text-green-400 text-sm font-semibold uppercase tracking-wide mb-2">Your savings</p>
        <h1 className="text-5xl md:text-7xl font-black text-green-400 mb-2">
          £{totalSaved.toLocaleString()}
        </h1>
        <p className="text-gray-300 text-lg mb-1">saved vs calling a tradesperson</p>
        <p className="text-gray-500 text-sm mb-6">
          {completedSlugs.length} of {ALL_GUIDES.length} guides completed · £{potentialTotal - totalSaved} more available
        </p>
        <button
          onClick={handleShare}
          className="bg-green-500 hover:bg-green-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          {shared ? '✓ Copied to clipboard!' : '📣 Share your savings'}
        </button>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10 space-y-10">

        {/* Sign-in warning for guests */}
        {!user && (
          <div className="flex items-start gap-4 bg-amber-50 border border-amber-300 rounded-2xl px-6 py-5">
            <span className="text-2xl shrink-0">⚠️</span>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-amber-900 mb-1">You&apos;re not signed in</p>
              <p className="text-sm text-amber-800 mb-3">
                Your savings are only stored in this browser. If you clear your cache or switch devices, you&apos;ll lose your data. Sign up free to keep it safe.
              </p>
              <div className="flex gap-3 flex-wrap">
                <a href="/sign-up" className="bg-amber-500 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-amber-600 transition-colors">
                  Sign up free
                </a>
                <a href="/login" className="text-sm font-medium text-amber-700 hover:underline self-center">
                  Log in
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Progress bar */}
        <div className="bg-gray-50 rounded-2xl p-6">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>£0 saved</span>
            <span>£{potentialTotal} potential</span>
          </div>
          <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-green-500 rounded-full transition-all duration-700"
              style={{ width: potentialTotal > 0 ? `${(totalSaved / potentialTotal) * 100}%` : '0%' }}
            />
          </div>
          <p className="text-xs text-gray-400 mt-2 text-center">
            {potentialTotal > 0 ? Math.round((totalSaved / potentialTotal) * 100) : 0}% of potential savings unlocked
          </p>
        </div>

        {/* Guide-by-guide breakdown */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Savings breakdown</h2>
          <div className="space-y-3">
            {guideRows.map(guide => (
              <div
                key={guide.slug}
                className={`rounded-xl border p-4 transition-all ${guide.done ? 'border-green-200 bg-green-50' : 'border-gray-200'}`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl shrink-0">{guide.emoji}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center gap-2 flex-wrap">
                      <a
                        href={guide.href}
                        className={`text-sm font-semibold hover:text-orange-500 transition-colors ${guide.done ? 'text-green-900' : 'text-gray-700'}`}
                      >
                        {guide.title}
                      </a>
                      <span className={`text-sm font-bold shrink-0 ${guide.done ? 'text-green-700' : 'text-gray-400'}`}>
                        {guide.done ? `+£${guide.midpoint}` : guide.savingsLabel}
                      </span>
                    </div>
                    {/* Bar */}
                    <div className="mt-2 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${guide.done ? 'bg-green-500' : 'bg-gray-200'}`}
                        style={{ width: `${(guide.midpoint / maxSaving) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
                {!guide.done && guide.savingsLabel && (
                  <a href={guide.href} className="text-xs text-orange-500 hover:underline">
                    Do this guide → save {guide.savingsLabel}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Big total */}
        {completedSlugs.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-400 text-lg mb-4">No guides completed yet.</p>
            <a href="/guides" className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors">
              Start your first guide →
            </a>
          </div>
        )}

        {completedSlugs.length > 0 && (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
            <p className="text-4xl font-black text-green-700 mb-1">£{totalSaved}</p>
            <p className="text-green-600 font-medium mb-2">saved by doing it yourself</p>
            <p className="text-sm text-gray-500">
              That&apos;s {Math.floor(totalSaved / 15)} hours of tradesperson time you didn&apos;t need to pay for.
            </p>
            <button
              onClick={handleShare}
              className="mt-4 bg-green-500 hover:bg-green-400 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
            >
              {shared ? '✓ Copied!' : '📣 Share your savings'}
            </button>
          </div>
        )}

      </div>

      <MobileNav />
    </main>
  )
}
