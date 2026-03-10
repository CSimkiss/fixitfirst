'use client'

import { useState } from 'react'
import { GUIDE_CONTENT } from '@/lib/guide-content'
import { ALL_GUIDES } from '@/lib/guides'
import DifficultyMeter from './DifficultyMeter'

const categoryColours: Record<string, string> = {
  Plumbing:   'bg-blue-50 text-blue-700',
  Electrics:  'bg-yellow-50 text-yellow-700',
  Carpentry:  'bg-amber-50 text-amber-700',
  Decorating: 'bg-purple-50 text-purple-700',
  Masonry:    'bg-stone-50 text-stone-700',
  Heating:    'bg-red-50 text-red-700',
  Fitting:    'bg-teal-50 text-teal-700',
}

export default function GuideExtras({ slug }: { slug: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const content = GUIDE_CONTENT[slug]
  if (!content) return null

  const { timeEstimate, problems, category } = content

  const related = ALL_GUIDES
    .filter(g => g.slug !== slug)
    .sort((a, b) => (a.category === category ? -1 : 0) - (b.category === category ? -1 : 0))
    .slice(0, 2)

  return (
    <>
      {/* Time estimate */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
        <h2 className="font-semibold text-blue-900 mb-4">How long will this actually take me?</h2>
        <div className="grid grid-cols-2 gap-4 mb-3">
          <div>
            <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-1">First time</p>
            <p className="text-2xl font-bold text-blue-900">{timeEstimate.beginner}</p>
          </div>
          <div>
            <p className="text-xs text-blue-600 font-semibold uppercase tracking-wide mb-1">With experience</p>
            <p className="text-2xl font-bold text-blue-900">{timeEstimate.experienced}</p>
          </div>
        </div>
        <p className="text-xs text-blue-700 leading-relaxed">{timeEstimate.note}</p>
      </div>

      {/* What could go wrong */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
        <h2 className="font-semibold text-amber-900 mb-4">What could go wrong?</h2>
        <div className="flex flex-col divide-y divide-amber-200">
          {problems.map((item, i) => (
            <div key={i}>
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="flex items-center justify-between w-full text-left py-3 gap-3"
              >
                <span className="text-sm font-medium text-amber-900">⚠️ {item.problem}</span>
                <span className="text-amber-600 text-lg leading-none shrink-0 font-light">
                  {openIndex === i ? '−' : '+'}
                </span>
              </button>
              {openIndex === i && (
                <p className="text-sm text-amber-800 pb-3 pl-6 leading-relaxed">{item.solution}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Related guides */}
      {related.length > 0 && (
        <div className="mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {related.map(guide => (
              <a
                key={guide.slug}
                href={guide.href}
                className="border border-gray-200 rounded-xl p-4 hover:border-orange-300 hover:shadow-sm transition-all group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${categoryColours[guide.category] ?? 'bg-gray-100 text-gray-600'}`}>
                    {guide.category}
                  </span>
                  <DifficultyMeter level={guide.difficulty} />
                </div>
                <h3 className="font-semibold text-gray-900 group-hover:text-orange-500 transition-colors mb-1">
                  {guide.title}
                </h3>
                <p className="text-xs text-green-700 font-medium">{guide.saves}</p>
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
