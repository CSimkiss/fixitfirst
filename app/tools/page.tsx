import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'
import ToolsOwned from '@/components/ToolsOwned'

export const metadata: Metadata = {
  title: 'My Tool Library | FixItFirst',
  description: 'Track which DIY tools you own. FixItFirst will warn you before a guide if you are missing something.',
}

export default function ToolsPage() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-2xl mx-auto px-6 py-10">
        <a href="/" className="text-sm text-orange-500 mb-6 inline-block">← Back to home</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My tool library</h1>
        <p className="text-gray-500 mb-8">
          Tick the tools you own. We&apos;ll warn you at the top of any guide if you&apos;re missing something before you start.
          Your selections are saved automatically.
        </p>
        <ToolsOwned />
      </div>
      <MobileNav />
    </main>
  )
}
