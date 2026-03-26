'use client'

import { useState, useEffect } from 'react'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import { ALL_GUIDES } from '@/lib/guides'
import { useCompletions } from '@/lib/useCompletions'
import { totalSavings } from '@/lib/completions'
import { ALL_TOOLS, GUIDE_TOOLS as GUIDE_TOOL_MAP, TOOLS_STORAGE_KEY } from '@/lib/tools'
import { amazonToolUrl } from '@/lib/affiliates'

const MILESTONES = [100, 250, 500, 1000, 2000, 5000]

export default function SavingsTracker() {
  const { completionMap, user, mounted } = useCompletions()
  const [copied, setCopied] = useState(false)
  const [ownedTools, setOwnedTools] = useState<string[]>([])

  useEffect(() => {
    try {
      const raw = localStorage.getItem(TOOLS_STORAGE_KEY)
      if (raw) setOwnedTools(JSON.parse(raw))
    } catch {}
  }, [])

  if (!mounted) return null

  // ─── Savings calculation logic (unchanged) ────────────────────────────────
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
  // ─────────────────────────────────────────────────────────────────────────

  // Milestone
  const nextMilestone = MILESTONES.find(m => m > totalSaved) ?? null
  const milestoneRemaining = nextMilestone ? nextMilestone - totalSaved : 0
  const milestoneProgress = nextMilestone ? Math.round((totalSaved / nextMilestone) * 100) : 100

  // Quick wins — prioritise quickWin guides, then by savings midpoint descending
  const quickWins = guideRows
    .filter(g => !g.done && g.midpoint > 0)
    .sort((a, b) => (b.quickWin ? 1 : 0) - (a.quickWin ? 1 : 0) || b.midpoint - a.midpoint)
    .slice(0, 3)

  // Tool lookup helpers
  const toolById = Object.fromEntries(ALL_TOOLS.map(t => [t.id, t]))
  const ownedSet = new Set(ownedTools)

  // Share
  const shareText = `I've saved £${totalSaved} fixing things myself 💪 ${completedSlugs.length} guide${completedSlugs.length !== 1 ? 's' : ''} done. Check it out at fixit-first.co.uk`
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`

  function handleCopy() {
    navigator.clipboard.writeText(shareText).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }).catch(() => {})
  }

  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <div className="bg-gray-950 text-white px-6 py-14 text-center">
        <p className="text-green-400 text-sm font-semibold uppercase tracking-wide mb-2">Your savings</p>
        <h1 className="text-5xl md:text-7xl font-black text-green-400 mb-2">
          £{totalSaved.toLocaleString()}
        </h1>
        <p className="text-gray-300 text-lg mb-1">saved vs calling a tradesperson</p>
        <p className="text-gray-500 text-sm mb-3">
          {completedSlugs.length} of {ALL_GUIDES.length} guides completed · £{potentialTotal - totalSaved} more available
        </p>

        {/* User positioning */}
        {totalSaved > 0 && (
          <p className="text-green-400 text-sm font-medium mb-6">
            You&apos;re ahead of most users 🏆
          </p>
        )}

        {/* Share buttons */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <button
            type="button"
            onClick={handleCopy}
            className="bg-green-500 hover:bg-green-400 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
          >
            {copied ? '✓ Copied!' : '📋 Copy'}
          </button>
          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
          >
            𝕏 Share
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-700 hover:bg-green-600 text-white font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
          >
            💬 WhatsApp
          </a>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-10 space-y-10">

        {/* Sign-in warning for guests (unchanged) */}
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

        {/* ── Next milestone ─────────────────────────────────────────────── */}
        {nextMilestone && (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-green-600 mb-1">Next milestone</p>
            <div className="flex items-center justify-between mb-3">
              <p className="text-xl font-bold text-gray-900">£{nextMilestone}</p>
              <p className="text-sm text-gray-500">£{milestoneRemaining} to go</p>
            </div>
            <div className="h-3 bg-green-100 rounded-full overflow-hidden mb-3">
              <div
                className="h-full bg-green-500 rounded-full transition-all duration-700"
                style={{ width: `${milestoneProgress}%` }}
              />
            </div>
            <a
              href="#quick-wins"
              onClick={e => { e.preventDefault(); document.getElementById('quick-wins')?.scrollIntoView({ behavior: 'smooth', block: 'start' }) }}
              className="inline-flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2 rounded-xl transition-colors"
            >
              Earn £{milestoneRemaining} more →
            </a>
          </div>
        )}

        {/* ── Quick wins ─────────────────────────────────────────────────── */}
        {quickWins.length > 0 && (
          <div id="quick-wins" className="bg-orange-50 border border-orange-200 rounded-2xl p-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-orange-500 mb-1">Quick wins</p>
            <h2 className="text-lg font-bold text-gray-900 mb-4">Easy guides that save you the most</h2>
            <div className="space-y-3 mb-4">
              {quickWins.map(g => (
                <a
                  key={g.slug}
                  href={g.href}
                  className="flex items-center justify-between bg-white border border-orange-200 rounded-xl px-4 py-3 hover:border-orange-400 hover:shadow-sm transition-all group"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="text-lg shrink-0">{g.emoji}</span>
                    <span className="text-sm font-medium text-gray-900 group-hover:text-orange-500 transition-colors truncate">{g.title}</span>
                  </div>
                  <span className="text-sm font-bold text-green-700 shrink-0 ml-3">{g.savingsLabel}</span>
                </a>
              ))}
            </div>
            <a
              href="/guides"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors"
            >
              Save more money →
            </a>
          </div>
        )}

        {/* ── Progress bar (unchanged logic) ─────────────────────────────── */}
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

        {/* ── Savings breakdown ──────────────────────────────────────────── */}
        <div>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Savings breakdown</h2>
          <div className="space-y-3">
            {guideRows.map(guide => {
              const missingTools = guide.done
                ? []
                : (GUIDE_TOOL_MAP[guide.slug] ?? []).filter(id => !ownedSet.has(id) && toolById[id])
              const showFindPro = !guide.done && guide.difficulty >= 3

              return (
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

                  {/* Pro cost comparison — completed guides */}
                  {guide.done && guide.midpoint > 0 && (
                    <p className="text-xs text-gray-400 pl-9 mt-1">
                      A professional would charge ~£{guide.midpoint}
                    </p>
                  )}

                  {/* CTA for incomplete guides */}
                  {!guide.done && guide.savingsLabel && (
                    <a href={guide.href} className="block text-xs text-orange-500 hover:underline pl-9 mt-1">
                      Do this guide → save {guide.savingsLabel}
                    </a>
                  )}

                  {/* Tool monetisation — incomplete guides with unowned tools */}
                  {missingTools.length > 0 && (
                    <p className="text-xs text-gray-500 pl-9 mt-1.5">
                      <span className="font-medium text-gray-600">You&apos;ll need: </span>
                      {missingTools.map((id, i) => (
                        <span key={id}>
                          {toolById[id].name}{' '}
                          <a
                            href={amazonToolUrl(toolById[id].name)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-orange-500 hover:underline"
                          >
                            Find it
                          </a>
                          {i < missingTools.length - 1 ? ', ' : ''}
                        </span>
                      ))}
                    </p>
                  )}

                  {/* Find a pro — difficult incomplete guides */}
                  {showFindPro && (
                    <a
                      href="/find-a-pro"
                      className="block text-xs text-gray-400 hover:text-gray-600 transition-colors pl-9 mt-1.5"
                    >
                      Rather not do this? Find a pro →
                    </a>
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Empty state (unchanged) */}
        {completedSlugs.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-400 text-lg mb-4">No guides completed yet.</p>
            <a href="/guides" className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors">
              Start your first guide →
            </a>
          </div>
        )}

        {/* ── Big total + improved share ──────────────────────────────────── */}
        {completedSlugs.length > 0 && (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-6 text-center">
            <p className="text-4xl font-black text-green-700 mb-1">£{totalSaved}</p>
            <p className="text-green-600 font-medium mb-1">saved by doing it yourself</p>
            <p className="text-sm text-gray-500 mb-5">
              That&apos;s {Math.floor(totalSaved / 15)} hours of tradesperson time you didn&apos;t need to pay for.
            </p>

            {/* Share message preview */}
            <p className="text-sm text-gray-600 italic bg-white border border-green-200 rounded-xl px-4 py-3 mb-4 text-left">
              &ldquo;{shareText}&rdquo;
            </p>

            {/* Share buttons */}
            <div className="flex items-center justify-center gap-3 flex-wrap">
              <button
                type="button"
                onClick={handleCopy}
                className="bg-green-500 hover:bg-green-400 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
              >
                {copied ? '✓ Copied!' : '📋 Copy'}
              </button>
              <a
                href={twitterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
              >
                𝕏 Share
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-700 hover:bg-green-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        )}

      </div>

      <MobileNav />
    </main>
  )
}
