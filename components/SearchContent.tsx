'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { ALL_GUIDES } from '@/lib/guides'

const categoryColours: Record<string, string> = {
  Plumbing: 'bg-blue-50 text-blue-700',
  Electrics: 'bg-yellow-50 text-yellow-700',
  Carpentry: 'bg-amber-50 text-amber-700',
  Decorating: 'bg-purple-50 text-purple-700',
  Masonry: 'bg-stone-50 text-stone-700',
  Heating: 'bg-red-50 text-red-700',
  Fitting: 'bg-teal-50 text-teal-700',
}

export default function SearchContent() {
  const params = useSearchParams()
  const [query, setQuery] = useState(params.get('q') ?? '')

  const filtered = query.trim() === ''
    ? ALL_GUIDES
    : ALL_GUIDES.filter(g =>
        g.title.toLowerCase().includes(query.toLowerCase()) ||
        g.category.toLowerCase().includes(query.toLowerCase())
      )

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Search guides</h1>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="What needs fixing?"
        autoFocus
        className="w-full border border-gray-200 rounded-xl px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-orange-500 mb-8"
      />
      {filtered.length === 0 ? (
        <p className="text-gray-400 text-center py-16">No guides found for &ldquo;{query}&rdquo;</p>
      ) : (
        <div className="flex flex-col gap-3">
          {filtered.map(guide => (
            <a
              key={guide.slug}
              href={guide.href}
              className="border border-gray-200 rounded-xl p-4 hover:border-orange-300 hover:shadow-sm transition-all group flex items-center gap-4"
            >
              <div className="flex-1 min-w-0">
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColours[guide.category] ?? 'bg-gray-100 text-gray-600'}`}>
                  {guide.category}
                </span>
                <h3 className="font-semibold text-gray-900 mt-1 group-hover:text-orange-500 transition-colors">
                  {guide.title}
                </h3>
              </div>
              <div className="text-sm text-gray-500 text-right shrink-0">
                <div>{guide.time}</div>
                <div>{guide.cost}</div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  )
}
