'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import MobileNav from '@/components/MobileNav'
import EmailCapture from '@/components/EmailCapture'
import Nav from '@/components/Nav'
import Onboarding from '@/components/Onboarding'
import RecentlyViewed from '@/components/RecentlyViewed'
import DifficultyMeter from '@/components/DifficultyMeter'
import CompletedTicker from '@/components/CompletedTicker'
import { GUIDE_TOOLS } from '@/lib/tools'
import { ALL_GUIDES } from '@/lib/guides'

// Derive the real count directly from the data so this never goes stale
const GUIDE_COUNT = ALL_GUIDES.length

const guides = [
  { title: "Fix a dripping tap",    time: "45 mins", cost: "£2–5",   level: "Beginner", category: "Plumbing",   href: "/guides/fix-a-dripping-tap",    difficulty: 2, saves: "Save £80–150 today" },
  { title: "Put up shelves",        time: "1 hour",  cost: "£10–20", level: "Beginner", category: "Carpentry",  href: "/guides/put-up-shelves",        difficulty: 3, saves: "Save £50–80 today" },
  { title: "Paint a room",          time: "1 day",   cost: "£30–60", level: "Beginner", category: "Decorating", href: "/guides/paint-a-room",          difficulty: 2, saves: "Save £200–500 today" },
  { title: "Unblock a drain",       time: "20 mins", cost: "Free",   level: "Beginner", category: "Plumbing",   href: "/guides/unblock-a-drain",       difficulty: 1, saves: "Save £60–120 today" },
  { title: "Bleed a radiator",      time: "15 mins", cost: "£1–3",   level: "Beginner", category: "Heating",    href: "/guides/bleed-a-radiator",      difficulty: 1, saves: "Save £50–80 today" },
  { title: "Fill a hole in a wall", time: "30 mins", cost: "£3–5",   level: "Beginner", category: "Masonry",    href: "/guides/fill-a-hole-in-a-wall", difficulty: 2, saves: "Save £50–100 today" },
  { title: "Fit a curtain pole",    time: "45 mins", cost: "£0–15",  level: "Beginner", category: "Fitting",    href: "/guides/fit-a-curtain-pole",    difficulty: 2, saves: "Save £50–80 today" },
  { title: "Change a lightbulb",    time: "5 mins",  cost: "£5–15",  level: "Beginner", category: "Electrics",  href: "/guides/change-a-lightbulb",    difficulty: 1, saves: "Save £60–100 today" },
  { title: "Fix a running toilet",  time: "1 hour",  cost: "£10–25", level: "Beginner", category: "Plumbing",   href: "/guides/fix-a-running-toilet",  difficulty: 3, saves: "Save £80–150 today" },
]

const categories = ["All", "⚡ Quick wins", "Plumbing", "Electrics", "Carpentry", "Decorating", "Masonry", "Heating", "Fitting"]

const FEATURED_GUIDE = {
  title: 'Fix a dripping tap',
  saves: 'Save £80–150 today',
  time: '45 mins',
  cost: '£2–5',
  level: 'Beginner',
  category: 'Plumbing',
  href: '/guides/fix-a-dripping-tap',
  difficulty: 2,
  description: 'A dripping tap wastes 5,500 litres of water a year. One £2 rubber washer fixes it. This is the perfect first plumbing job.',
}

export default function Home() {
  const router = useRouter()
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const filteredGuides = activeCategory === 'All'
    ? guides
    : activeCategory === '⚡ Quick wins'
    ? guides.filter(g => ALL_GUIDES.find(ag => ag.slug === (g.href.split('/').pop() ?? ''))?.quickWin === true)
    : guides.filter(g => g.category === activeCategory)

  function handleSearch() {
    const q = query.trim()
    if (q) router.push(`/search?q=${encodeURIComponent(q)}`)
  }

  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">

      {/* Onboarding modal — only shows on first visit, sets localStorage key when done */}
      <Onboarding />

      <Nav />

      <section className="bg-gray-950 text-white px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Nobody taught you<br />how to do this stuff.
          </h1>
          <p className="text-xl text-gray-300 mb-10">We will. One fix at a time.</p>
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSearch()}
              placeholder="What needs fixing? e.g. dripping tap..."
              className="w-full bg-white text-gray-900 rounded-xl px-5 py-4 text-lg pr-16 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              onClick={handleSearch}
              className="absolute right-3 top-3 bg-orange-500 text-white px-4 py-2 rounded-lg font-medium"
            >
              Go
            </button>
          </div>
          <div className="flex gap-2 mt-5 flex-wrap justify-center">
            {["Dripping tap", "Blocked drain", "No hot water", "Leaking toilet", "Paint a room"].map((q) => (
              <span
                key={q}
                onClick={() => router.push(`/search?q=${encodeURIComponent(q)}`)}
                className="bg-white/10 text-white px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-white/20 border border-white/20"
              >
                {q}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange-500 text-white py-6 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 text-center">
          <div><div className="text-2xl font-bold">{GUIDE_COUNT}</div><div className="text-orange-100 text-sm">Guides</div></div>
          <div><div className="text-2xl font-bold">Free</div><div className="text-orange-100 text-sm">To get started</div></div>
          <div><div className="text-2xl font-bold">6 tiers</div><div className="text-orange-100 text-sm">Beginner to builder</div></div>
          <div><div className="text-2xl font-bold">100s saved</div><div className="text-orange-100 text-sm">vs calling a pro</div></div>
        </div>
      </section>

      <RecentlyViewed />

      <div className="px-6 py-4 max-w-5xl mx-auto">
        <CompletedTicker />
      </div>

      {/* This week's featured fix */}
      <section className="px-6 py-8 max-w-5xl mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Featured fix this week</span>
        </div>
        <a
          href={FEATURED_GUIDE.href}
          className="block border-2 border-orange-200 rounded-2xl p-6 hover:border-orange-400 hover:shadow-lg transition-all group bg-orange-50"
        >
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="text-xs bg-orange-100 text-orange-700 px-2 py-1 rounded-full font-medium">{FEATURED_GUIDE.category}</span>
                <DifficultyMeter level={FEATURED_GUIDE.difficulty} />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-1">{FEATURED_GUIDE.title}</h2>
              <p className="text-3xl font-black text-green-600 mb-3">{FEATURED_GUIDE.saves}</p>
              <p className="text-gray-600 text-sm mb-4 max-w-xl">{FEATURED_GUIDE.description}</p>
              <div className="flex gap-4 text-sm text-gray-500 flex-wrap">
                <span>⏱ {FEATURED_GUIDE.time}</span>
                <span>💰 {FEATURED_GUIDE.cost}</span>
                <span className="bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium">{FEATURED_GUIDE.level}</span>
              </div>
            </div>
            <div className="flex-shrink-0 hidden sm:block">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center text-4xl">🔧</div>
            </div>
          </div>
          <div className="mt-5 inline-flex items-center gap-2 text-orange-600 font-semibold text-sm group-hover:gap-3 transition-all">
            Read the guide <span>→</span>
          </div>
        </a>
      </section>

      <section className="px-6 py-12 max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Popular Guides</h2>
          <a href="/guides" className="text-orange-500 text-sm font-medium hover:underline">View all guides →</a>
        </div>
        <div className="flex gap-2 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${cat === activeCategory ? "bg-orange-500 text-white border-orange-500" : "bg-white text-gray-600 border-gray-200 hover:border-orange-300"}`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredGuides.map((guide) => {
            const slug = guide.href.split('/').pop() ?? ''
            const toolCount = GUIDE_TOOLS[slug]?.length ?? 0
            const guideData = ALL_GUIDES.find(g => g.slug === slug)
            const isUK = guideData?.ukSpecific ?? false
            const isQuickWin = guideData?.quickWin ?? false
            const cardClass = "border border-gray-200 rounded-xl p-5 hover:border-orange-300 hover:shadow-md cursor-pointer transition-all group"
            const cardContent = <>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{guide.category}</span>
                <DifficultyMeter level={guide.difficulty} />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors">{guide.title}</h3>
              <p className="text-xs text-green-700 font-medium mb-2">{guide.saves}</p>
              {(toolCount > 0 || isUK || isQuickWin) && (
                <div className="flex gap-1.5 flex-wrap mb-3">
                  {isQuickWin && (
                    <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full font-medium">⚡ Quick win</span>
                  )}
                  {toolCount > 0 && (
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">🔧 {toolCount} tool{toolCount !== 1 ? 's' : ''}</span>
                  )}
                  {isUK && (
                    <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">🇬🇧 UK advice</span>
                  )}
                </div>
              )}
              <div className="flex gap-4 text-sm text-gray-500 mt-2">
                <span>{guide.time}</span>
                <span>{guide.cost}</span>
                <span className="ml-auto bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-xs">{guide.level}</span>
              </div>
            </>
            return guide.href
              ? <a key={guide.title} href={guide.href} className={cardClass}>{cardContent}</a>
              : <div key={guide.title} className={cardClass}>{cardContent}</div>
          })}
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-12">How FixItFirst works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Search your problem", desc: "Type what's broken or browse by room. We'll find the right guide instantly." },
              { step: "2", title: "Follow the guide", desc: "Step-by-step instructions written for complete beginners. Photos at every tricky step." },
              { step: "3", title: "Earn your skills", desc: "Complete jobs to unlock harder projects and build your DIY identity." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">{item.step}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-950 text-white px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-orange-400 text-sm font-semibold uppercase tracking-wide mb-4">Coming soon</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get notified when we launch</h2>
          <p className="text-gray-300 mb-8 text-lg">We&apos;re building something that will save you hundreds of pounds a year. Be the first to know.</p>
          <EmailCapture source="homepage" />
          <p className="text-gray-500 text-sm mt-4">No spam. Unsubscribe any time.</p>
        </div>
      </section>

      <MobileNav />
    </main>
  )
}
