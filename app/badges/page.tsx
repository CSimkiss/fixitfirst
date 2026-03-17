'use client'

import { useState, useEffect } from 'react'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import { ALL_BADGES } from '@/lib/badges'
import { getCompletionMap } from '@/lib/completions'
import { TOOLS_STORAGE_KEY } from '@/lib/tools'

export default function BadgesPage() {
  const [completedSlugs, setCompletedSlugs] = useState<string[]>([])
  const [ownedTools, setOwnedTools] = useState<string[]>([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    try {
      setCompletedSlugs(Object.keys(getCompletionMap()))
      const tools = localStorage.getItem(TOOLS_STORAGE_KEY)
      if (tools) setOwnedTools(JSON.parse(tools))
    } catch {}
    setLoaded(true)
  }, [])

  const earned = ALL_BADGES.filter(b => b.check(completedSlugs, ownedTools))
  const locked = ALL_BADGES.filter(b => !b.check(completedSlugs, ownedTools))

  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      <section className="bg-gray-950 text-white px-6 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-5xl mb-4">🏅</div>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">Your Badges</h1>
          <p className="text-gray-300 text-lg">
            Earn badges by completing guides and building your tool library.
          </p>
          {loaded && (
            <div className="mt-6 inline-flex items-center gap-3 bg-white/10 rounded-full px-5 py-2 text-sm">
              <span className="text-orange-300 font-bold">{earned.length}</span>
              <span className="text-gray-400">earned</span>
              <span className="text-gray-600">·</span>
              <span className="text-gray-400 font-bold">{locked.length}</span>
              <span className="text-gray-400">to unlock</span>
            </div>
          )}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-12">
        {!loaded ? (
          <p className="text-gray-400 text-center py-16">Loading your badges…</p>
        ) : (
          <>
            {earned.length > 0 && (
              <div className="mb-12">
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span>Earned</span>
                  <span className="bg-orange-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">{earned.length}</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {earned.map(badge => (
                    <div
                      key={badge.id}
                      className="border-2 border-orange-200 bg-orange-50 rounded-xl p-5 flex items-start gap-4"
                    >
                      <div className="text-4xl shrink-0">{badge.emoji}</div>
                      <div>
                        <p className="font-bold text-gray-900">{badge.name}</p>
                        <p className="text-sm text-gray-600 mt-0.5">{badge.description}</p>
                        <span className="inline-block mt-2 text-xs font-semibold text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full">
                          Earned ✓
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {locked.length > 0 && (
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <span>To unlock</span>
                  <span className="bg-gray-200 text-gray-600 text-xs font-bold px-2 py-0.5 rounded-full">{locked.length}</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {locked.map(badge => (
                    <div
                      key={badge.id}
                      className="border border-gray-200 bg-gray-50 rounded-xl p-5 flex items-start gap-4 opacity-60"
                    >
                      <div className="text-4xl shrink-0 grayscale">{badge.emoji}</div>
                      <div>
                        <p className="font-bold text-gray-700">{badge.name}</p>
                        <p className="text-sm text-gray-500 mt-0.5">{badge.description}</p>
                        <p className="text-xs text-gray-400 mt-2 italic">{badge.hint}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {earned.length === 0 && locked.length > 0 && (
              <div className="text-center py-8 border border-dashed border-gray-200 rounded-xl mb-8">
                <p className="text-gray-400 mb-2">No badges yet</p>
                <p className="text-sm text-gray-400">Complete your first guide to earn your first badge.</p>
                <a href="/guides" className="inline-block mt-4 bg-orange-500 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">
                  Browse guides
                </a>
              </div>
            )}
          </>
        )}
      </section>

      <MobileNav />
    </main>
  )
}
