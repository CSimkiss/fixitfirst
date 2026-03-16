'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import type { User } from '@supabase/supabase-js'

export default function ProfilePage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [mounted, setMounted] = useState(false)
  const [deleting, setDeleting] = useState(false)
  const [confirmDelete, setConfirmDelete] = useState(false)
  const [deleteError, setDeleteError] = useState('')

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

  const memberSince = new Date(user.created_at).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <main className="min-h-screen bg-gray-50 pb-20 md:pb-0">
      <Nav />

      <div className="bg-gray-950 text-white px-6 py-12 text-center">
        <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
          {user.email?.[0]?.toUpperCase() ?? '?'}
        </div>
        <h1 className="text-2xl font-bold">{user.email}</h1>
        <p className="text-gray-400 text-sm mt-1">Member since {memberSince}</p>
      </div>

      <div className="max-w-lg mx-auto px-6 py-10 space-y-6">

        {/* Account details */}
        <div className="bg-white border border-gray-200 rounded-2xl divide-y divide-gray-100">
          <div className="px-5 py-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Email address</p>
            <p className="text-gray-900 font-medium">{user.email}</p>
          </div>
          <div className="px-5 py-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Account ID</p>
            <p className="text-gray-500 text-sm font-mono">{user.id}</p>
          </div>
          <div className="px-5 py-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1">Member since</p>
            <p className="text-gray-900 font-medium">{memberSince}</p>
          </div>
        </div>

        {/* Quick links */}
        <div className="bg-white border border-gray-200 rounded-2xl divide-y divide-gray-100">
          <a href="/dashboard" className="flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors">
            <span className="font-medium text-gray-800">My Dashboard</span>
            <span className="text-gray-400">→</span>
          </a>
          <a href="/progress" className="flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors">
            <span className="font-medium text-gray-800">My Progress</span>
            <span className="text-gray-400">→</span>
          </a>
          <a href="/savings-tracker" className="flex items-center justify-between px-5 py-4 hover:bg-gray-50 transition-colors">
            <span className="font-medium text-gray-800">Savings Tracker</span>
            <span className="text-gray-400">→</span>
          </a>
        </div>

        {/* Danger zone */}
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
