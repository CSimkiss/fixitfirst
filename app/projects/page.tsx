import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'

export const metadata: Metadata = {
  title: 'Projects | FixItFirst',
  description: 'Step-by-step project hubs for bigger DIY jobs. Break a full renovation into manageable phases using existing guides.',
}

const PROJECTS = [
  {
    href: '/projects/bathroom-renovation',
    emoji: '🚿',
    title: 'Renovate Your Bathroom',
    description: 'Break a full bathroom renovation into 6 manageable phases. Real guides, clear order, honest advice on when to call a pro.',
    badge: '🏗️ Tier 5 · Builder',
    meta: ['2–5 weekends', '£300–£2,000+', '6 phases'],
    status: 'available' as const,
  },
]

const COMING_SOON = [
  { emoji: '🍳', title: 'Renovate Your Kitchen', description: 'Coming soon' },
  { emoji: '🛏️', title: 'Refresh a Bedroom',     description: 'Coming soon' },
  { emoji: '🌿', title: 'Transform Your Garden',  description: 'Coming soon' },
]

export default function ProjectsIndex() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />

      <div className="max-w-3xl mx-auto px-6 py-12">
        <a href="/" className="text-sm text-orange-500 mb-6 inline-block hover:underline">← Back to home</a>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Projects</h1>
        <p className="text-gray-500 mb-10 max-w-xl">
          Bigger jobs broken into manageable phases. Each project links to existing guides
          in the right order — so you build skills as you go rather than being overwhelmed at the start.
        </p>

        {/* Live projects */}
        <div className="space-y-4 mb-12">
          {PROJECTS.map(p => (
            <a
              key={p.href}
              href={p.href}
              className="flex gap-5 items-start border-2 border-gray-200 rounded-2xl p-6 hover:border-orange-300 hover:shadow-md transition-all group"
            >
              <div className="text-4xl shrink-0 mt-1">{p.emoji}</div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-medium">
                    Project hub
                  </span>
                  <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
                    {p.badge}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-orange-500 transition-colors mb-1">
                  {p.title}
                </h2>
                <p className="text-sm text-gray-500 mb-3">{p.description}</p>
                <div className="flex gap-3 text-xs text-gray-400 flex-wrap">
                  {p.meta.map((m, i) => (
                    <span key={i} className={i > 0 ? 'before:content-["·"] before:mr-3' : ''}>
                      {m}
                    </span>
                  ))}
                </div>
              </div>
              <span className="shrink-0 hidden sm:flex items-center text-orange-500 text-sm font-semibold group-hover:translate-x-1 transition-transform">
                View →
              </span>
            </a>
          ))}
        </div>

        {/* Coming soon */}
        <div>
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-4">Coming soon</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {COMING_SOON.map(p => (
              <div
                key={p.title}
                className="border border-dashed border-gray-200 rounded-xl p-5 text-center opacity-60"
              >
                <div className="text-3xl mb-2">{p.emoji}</div>
                <p className="text-sm font-medium text-gray-500">{p.title}</p>
                <p className="text-xs text-gray-400 mt-0.5">{p.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 bg-orange-50 border border-orange-200 rounded-xl p-6 text-center">
          <p className="font-semibold text-orange-900 mb-1">Start with smaller guides first</p>
          <p className="text-sm text-orange-700 mb-4">
            Projects use the same skills as individual guides — just combined. Build your confidence first.
          </p>
          <div className="flex gap-3 justify-center flex-wrap">
            <a
              href="/search"
              className="bg-orange-500 text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors"
            >
              Find a quick fix
            </a>
            <a
              href="/guides"
              className="border border-orange-300 text-orange-700 px-5 py-2 rounded-lg text-sm font-medium hover:bg-orange-50 transition-colors"
            >
              All guides
            </a>
          </div>
        </div>
      </div>

      <MobileNav />
    </main>
  )
}
