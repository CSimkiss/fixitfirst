'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import { useCompletions } from '@/lib/useCompletions'
import { tierLevel } from '@/lib/completions'
import { ALL_GUIDES, getRecommendation } from '@/lib/guides'
import type { User } from '@supabase/supabase-js'

export default function ProfilePage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [mounted, setMounted] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [deleteError, setDeleteError] = useState('')
  const [showAdvanced, setShowAdvanced] = useState(false)

  const { completionMap } = useCompletions()

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setUser(data.session?.user ?? null)
      setMounted(true)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (mounted && !user) router.replace('/login')
  }, [mounted, user, router])

  if (!mounted || !user) return null

  const handleDeleteAccount = async () => {
    setDeleting(true)
    setDeleteError('')

    const { data: { session } } = await supabase.auth.getSession()

    const res = await fetch('/api/delete-account', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    })

    if (!res.ok) {
      const data = await res.json()
      setDeleteError(data.error ?? 'Something went wrong. Please try again.')
      setDeleting(false)
      return
    }

    await supabase.auth.signOut()
    router.push('/?deleted=1')
  }

  const fixingSince = new Date(user.created_at).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  // ── Progress snapshot ────────────────────────────────────────────────────────
  const completedSlugs  = Object.keys(completionMap)
  const completedCount  = completedSlugs.length
  const tier            = tierLevel(completionMap)
  const totalPoints     = completedSlugs.reduce(
    (sum, slug) => sum + (ALL_GUIDES.find(g => g.slug === slug)?.skillPoints ?? 0),
    0,
  )
  const recommendation  = getRecommendation(completionMap)

  return (
    <main className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Nav />

      <div className="bg-gray-950 text-white px-6 py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
          {user.email?.[0]?.toUpperCase() ?? '?'}
        </div>
        <h1 className="text-2xl font-bold">{user.email}</h1>
        <p className="text-gray-400 text-sm mt-1">Fixing things since {fixingSince}</p>
      </div>

      <div className="max-w-lg mx-auto px-6 py-10 space-y-6">

        {/* ── Progress snapshot ─────────────────────────────────────────────── */}
        <div className="bg-white border border-gray-200 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{tier.emoji}</span>
              <div>
                <p className="font-semibold text-gray-900">{tier.name}</p>
                <p className="text-xs text-gray-400">{tier.description}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-purple-600">⭐ {totalPoints} pts</p>
              <p className="text-xs text-gray-400 mt-0.5">
                {completedCount} of {ALL_GUIDES.length} guides
              </p>
            </div>
          </div>
          <a
            href="/progress"
            className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
          >
            Continue your progress →
          </a>
        </div>

        {/* ── Your next fix ─────────────────────────────────────────────────── */}
        {recommendation && (
          <div className="bg-orange-50 border border-orange-200 rounded-2xl p-5">
            <p className="text-xs font-semibold uppercase tracking-wide text-orange-500 mb-2">Your next fix</p>
            <p className="font-semibold text-gray-900 leading-snug mb-1">{recommendation.guide.title}</p>
            <div className="flex items-center gap-3 text-xs text-gray-500 mb-4">
              <span>⏱ {recommendation.guide.time}</span>
              {recommendation.guide.estimatedSavingsMax > 0 && (
                <span>💰 Save £{recommendation.guide.estimatedSavingsMin}–{recommendation.guide.estimatedSavingsMax}</span>
              )}
            </div>
            <a
              href={recommendation.guide.href}
              className="inline-flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Start →
            </a>
          </div>
        )}

        {/* ── Account details ───────────────────────────────────────────────── */}
        <div className="bg-white border border-gray-200 rounded-2xl divide-y divide-gray-100">
          <div className="px-5 py-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Email address</p>
            <p className="text-gray-900 font-medium">{user.email}</p>
          </div>
          <div className="px-5 py-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Fixing things since</p>
            <p className="text-gray-900 font-medium">{fixingSince}</p>
          </div>

          {/* Advanced details — collapsed by default */}
          <button
            onClick={() => setShowAdvanced(o => !o)}
            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-gray-50 transition-colors"
          >
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-wide">Advanced details</span>
            <svg
              className={`w-4 h-4 text-gray-400 transition-transform duration-200 ${showAdvanced ? 'rotate-180' : ''}`}
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {showAdvanced && (
            <div className="px-5 py-4 bg-gray-50">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Account ID</p>
              <p className="text-gray-500 text-sm font-mono break-all">{user.id}</p>
            </div>
          )}
        </div>

        {/* ── Quick links ───────────────────────────────────────────────────── */}
        <div className="bg-white border border-gray-200 rounded-2xl divide-y divide-gray-100">
          <a href="/dashboard" className="flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors">
            <span className="font-medium text-gray-800">View dashboard</span>
            <span className="text-gray-400">→</span>
          </a>
          <a href="/progress" className="flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors">
            <span className="font-medium text-gray-800">Continue fixing</span>
            <span className="text-gray-400">→</span>
          </a>
          <a href="/savings-tracker" className="flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors">
            <span className="font-medium text-gray-800">Track your savings</span>
            <span className="text-gray-400">→</span>
          </a>
        </div>

        {/* ── Danger zone ───────────────────────────────────────────────────── */}
        <div className="bg-white border border-red-200 rounded-2xl p-5">
          <h2 className="text-sm font-semibold text-red-700 uppercase tracking-wide mb-3">Danger zone</h2>

          {!confirmDelete ? (
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="font-medium text-gray-800 text-sm">Delete my account</p>
                <p className="text-xs text-gray-400 mt-0.5">Permanently removes your account and all data. This cannot be undone.</p>
              </div>
              <button
                onClick={() => setConfirmDelete(true)}
                className="shrink-0 text-sm font-semibold text-red-600 border border-red-300 rounded-lg px-4 py-2 hover:bg-red-50 transition-colors"
              >
                Delete
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-sm text-gray-700">
                <strong>Are you sure?</strong> This will permanently delete your account, all completed guides, and saved progress. There&apos;s no undo.
              </p>
              {deleteError && (
                <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                  {deleteError}
                </p>
              )}
              <div className="flex gap-3">
                <button
                  onClick={handleDeleteAccount}
                  disabled={deleting}
                  className="bg-red-600 text-white text-sm font-semibold px-4 py-2 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-60"
                >
                  {deleting ? 'Deleting…' : 'Yes, delete my account'}
                </button>
                <button
                  onClick={() => setConfirmDelete(false)}
                  className="text-sm font-medium text-gray-600 hover:text-gray-800"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
      <MobileNav />
    </main>
  )
}
