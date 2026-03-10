import { Suspense } from 'react'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import SearchContent from '@/components/SearchContent'

export const metadata = {
  title: 'Search Guides | FixItFirst',
}

export default function SearchPage() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <Suspense fallback={<div className="max-w-3xl mx-auto px-6 py-10 text-gray-400">Loading…</div>}>
        <SearchContent />
      </Suspense>
      <MobileNav />
    </main>
  )
}
