'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'
import type { User } from '@supabase/supabase-js'

export default function Nav() {
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setUser(data.session?.user ?? null))

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  return (
    <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center sticky top-0 z-50">
      <a href="/" className="text-2xl font-bold text-orange-500 mr-8">FixItFirst</a>
      <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
        <a href="/guides" className="hover:text-orange-500">Guides</a>
        <a href="/tools" className="hover:text-orange-500">My Tools</a>
        {user && (
          <a href="/dashboard" className="hover:text-orange-500">My Dashboard</a>
        )}
      </div>
      <div className="ml-auto flex items-center gap-3">
        {user ? (
          <>
            <span className="hidden md:block text-sm text-gray-500 truncate max-w-[160px]">{user.email}</span>
            <a
              href="/dashboard"
              className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors"
            >
              My Dashboard
            </a>
            <button
              onClick={handleSignOut}
              className="text-sm font-medium text-gray-600 hover:text-orange-500"
            >
              Sign out
            </button>
          </>
        ) : (
          <>
            <a href="/login" className="text-sm font-medium text-gray-600 hover:text-orange-500">Log in</a>
            <a href="/sign-up" className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">Sign up free</a>
          </>
        )}
      </div>
    </nav>
  )
}
