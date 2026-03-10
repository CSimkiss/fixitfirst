'use client'

import { useEffect } from 'react'

const RECENTLY_VIEWED_KEY = 'fixitfirst-recently-viewed'

type Entry = { slug: string; title: string; href: string }

export default function RecentViewTracker({ slug, title, href }: Entry) {
  useEffect(() => {
    try {
      const raw = localStorage.getItem(RECENTLY_VIEWED_KEY)
      const existing: Entry[] = raw ? JSON.parse(raw) : []
      const updated = [{ slug, title, href }, ...existing.filter(e => e.slug !== slug)].slice(0, 10)
      localStorage.setItem(RECENTLY_VIEWED_KEY, JSON.stringify(updated))
    } catch {}
  }, [slug, title, href])

  return null
}
