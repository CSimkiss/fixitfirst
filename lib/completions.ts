/**
 * lib/completions.ts
 *
 * Shared utilities for guide completion state.
 *   – Guests:      stored in localStorage only
 *   – Logged-in:   stored in Supabase (localStorage is kept as a fast cache)
 *   – On login:    call mergeLocalIntoSupabase to push any guest completions up
 */

import { supabase } from '@/lib/supabase'
import { COMPLETED_GUIDES_KEY, getLocalDateStr, getStreak, getTier } from '@/lib/progress'
import { GUIDE_BY_SLUG } from '@/lib/guides'
import type { Tier } from '@/lib/progress'

export type CompletionMap = Record<string, string> // slug → 'YYYY-MM-DD'

const SUPABASE_TIMEOUT_MS = 3_000

// ─── localStorage ─────────────────────────────────────────────────────────────

export function getCompletionMap(): CompletionMap {
  if (typeof window === 'undefined') return {}
  try {
    const raw = localStorage.getItem(COMPLETED_GUIDES_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export function setCompletionMap(map: CompletionMap): void {
  try {
    localStorage.setItem(COMPLETED_GUIDES_KEY, JSON.stringify(map))
  } catch {}
}

/**
 * Mark a guide complete in localStorage and return the updated map.
 * For logged-in users, also call upsertSupabaseCompletion separately.
 */
export function markComplete(slug: string): CompletionMap {
  const next = { ...getCompletionMap(), [slug]: getLocalDateStr() }
  setCompletionMap(next)
  return next
}

// ─── Supabase ─────────────────────────────────────────────────────────────────

export async function fetchSupabaseCompletions(userId: string): Promise<CompletionMap> {
  const queryPromise = supabase
    .from('completions')
    .select('guide_slug, completed_at')
    .eq('user_id', userId)
    .then(({ data, error }) => {
      if (error) throw error
      const map: CompletionMap = {}
      for (const row of data ?? []) {
        map[row.guide_slug] = (row.completed_at as string).split('T')[0]
      }
      return map
    })

  const timeoutPromise = new Promise<never>((_, reject) =>
    setTimeout(() => reject(new Error('timeout')), SUPABASE_TIMEOUT_MS),
  )

  return Promise.race([queryPromise, timeoutPromise])
}

export async function upsertSupabaseCompletion(userId: string, slug: string): Promise<void> {
  const { error } = await supabase
    .from('completions')
    .upsert(
      { user_id: userId, guide_slug: slug, completed_at: new Date().toISOString() },
      { onConflict: 'user_id,guide_slug' },
    )
  if (error) throw error
}

/**
 * On login: push any guest completions from localStorage into Supabase so
 * progress is not lost when a user signs up or logs in on a new device.
 */
export async function mergeLocalIntoSupabase(userId: string): Promise<void> {
  const local = getCompletionMap()
  const slugs = Object.keys(local)
  if (slugs.length === 0) return

  const rows = slugs.map(slug => ({
    user_id: userId,
    guide_slug: slug,
    completed_at: new Date(local[slug] + 'T12:00:00').toISOString(),
  }))

  await supabase
    .from('completions')
    .upsert(rows, { onConflict: 'user_id,guide_slug' })
}

// ─── Derived computations ─────────────────────────────────────────────────────

/** Total £ saved (midpoint) across all completed guides. */
export function totalSavings(completionMap: CompletionMap): number {
  return Object.keys(completionMap).reduce((sum, slug) => {
    const guide = GUIDE_BY_SLUG[slug]
    if (!guide || guide.estimatedSavingsMin === 0) return sum
    return sum + Math.round((guide.estimatedSavingsMin + guide.estimatedSavingsMax) / 2)
  }, 0)
}

/** Current active streak in days. */
export function streakCount(completionMap: CompletionMap): number {
  return getStreak(Object.values(completionMap))
}

/** Current tier based on number of completions. */
export function tierLevel(completionMap: CompletionMap): Tier {
  return getTier(Object.keys(completionMap).length)
}
