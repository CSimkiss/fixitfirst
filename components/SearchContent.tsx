'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { searchGuides } from '@/lib/guides'

const categoryColours: Record<string, string> = {
  Plumbing:   'bg-blue-50 text-blue-700',
  Electrics:  'bg-yellow-50 text-yellow-700',
  Carpentry:  'bg-amber-50 text-amber-700',
  Decorating: 'bg-purple-50 text-purple-700',
  Masonry:    'bg-stone-50 text-stone-700',
  Heating:    'bg-red-50 text-red-700',
  Fitting:    'bg-teal-50 text-teal-700',
}

export default function SearchContent() {
  const params = useSearchParams()
  const router = useRouter()
  const [query, setQuery] = useState(params.get('q') ?? '')

  const { guides: results, fuzzy, canonicalTitle } = query.trim()
    ? searchGuides(query)
    : { guides: [], fuzzy: false, canonicalTitle: undefined }

  // Direct routing: one unambiguous non-fuzzy match → go straight there
  useEffect(() => {
    if (!fuzzy && results.length === 1 && query.trim()) {
      router.replace(results[0].href)
    }
  // Only run on initial mount from URL param, not on every keystroke
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const showAll = !query.trim()
  const { guides: allGuides } = searchGuides('')
  const displayGuides = showAll ? allGuides : results

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Search guides</h1>
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder="What needs fixing?"
        autoFocus
        className="w-full border border-gray-200 rounded-xl px-5 py-3 text-base focus:outline-none focus:ring-2 focus:ring-orange-500 mb-6"
      />

      {/* Canonical redirect notice — shown when a known variant is searched */}
      {canonicalTitle && !fuzzy && query.trim() && (
        <div className="mb-4 text-sm text-gray-500">
          Showing results for:{' '}
          <span className="font-semibold text-gray-800">{canonicalTitle}</span>
        </div>
      )}

      {/* Did you mean — shown when fuzzy fallback is used */}
      {fuzzy && results.length > 0 && (
        <div className="mb-6 p-4 bg-orange-50 border border-orange-100 rounded-xl">
          <p className="text-sm font-semibold text-orange-700 mb-3">Did you mean…</p>
          <div className="flex flex-col gap-2">
            {results.slice(0, 4).map(g => (
              <a
                key={g.slug}
                href={g.href}
                className="flex items-center gap-3 text-sm text-gray-800 hover:text-orange-600 transition-colors group"
              >
                <span className="text-lg shrink-0">{g.emoji}</span>
                <span className="font-medium group-hover:underline">{g.title}</span>
                {g.estimatedSavingsMax > 0 && (
                  <span className="ml-auto text-xs text-green-600 font-medium shrink-0">
                    Save £{g.estimatedSavingsMin}–{g.estimatedSavingsMax}
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* No results */}
      {!showAll && !fuzzy && results.length === 0 && (
        <p className="text-gray-400 text-center py-16">No guides found for &ldquo;{query}&rdquo;</p>
      )}

      {/* Results list */}
      {displayGuides.length > 0 && (
        <div className="flex flex-col gap-3">
          {!showAll && !fuzzy && results.length === 1 && (
            <p className="text-xs text-gray-400 mb-1">Taking you directly to the best match…</p>
          )}
          {(fuzzy ? [] : displayGuides).map(guide => (
            <a
              key={guide.slug}
              href={guide.href}
              className="border border-gray-200 rounded-xl p-4 hover:border-orange-300 hover:shadow-sm transition-all group flex items-center gap-4"
            >
              <span className="text-2xl shrink-0">{guide.emoji}</span>
              <div className="flex-1 min-w-0">
                <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColours[guide.category] ?? 'bg-gray-100 text-gray-600'}`}>
                  {guide.category}
                </span>
                <h3 className="font-semibold text-gray-900 mt-1 group-hover:text-orange-500 transition-colors">
                  {guide.title}
                </h3>
                {guide.estimatedSavingsMax > 0 && (
                  <p className="text-xs text-green-600 font-medium mt-0.5">
                    Save £{guide.estimatedSavingsMin}–{guide.estimatedSavingsMax} today
                  </p>
                )}
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
