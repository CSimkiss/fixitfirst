'use client'

import { useState } from 'react'
import DifficultyMeter from './DifficultyMeter'
import { GUIDE_TOOLS } from '@/lib/tools'
import { ALL_GUIDES } from '@/lib/guides'

type Guide = {
  title: string
  time: string
  cost: string
  level: string
  category: string
  href: string
  saves: string
  difficulty: number
}

const categories = ['All', '⚡ Quick wins', 'Plumbing', 'Electrics', 'Carpentry', 'Decorating', 'Masonry', 'Heating', 'Fitting']

const categoryColours: Record<string, string> = {
  Plumbing: 'bg-blue-50 text-blue-700',
  Electrics: 'bg-yellow-50 text-yellow-700',
  Carpentry: 'bg-amber-50 text-amber-700',
  Decorating: 'bg-purple-50 text-purple-700',
  Masonry: 'bg-stone-50 text-stone-700',
  Heating: 'bg-red-50 text-red-700',
  Fitting: 'bg-teal-50 text-teal-700',
}

export default function GuidesGrid({ guides }: { guides: Guide[] }) {
  const [active, setActive] = useState('All')
  const filtered = active === 'All'
    ? guides
    : active === '⚡ Quick wins'
    ? guides.filter(g => ALL_GUIDES.find(ag => ag.slug === (g.href.split('/').pop() ?? ''))?.quickWin === true)
    : guides.filter((g) => g.category === active)

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="flex gap-2 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
              active === cat
                ? 'bg-orange-500 text-white border-orange-500'
                : 'bg-white text-gray-600 border-gray-200 hover:border-orange-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      {filtered.length === 0 ? (
        <p className="text-gray-400 text-center py-16">No guides in this category yet.</p>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((guide) => {
            const slug = guide.href.split('/').pop() ?? ''
            const toolCount = GUIDE_TOOLS[slug]?.length ?? 0
            const guideData = ALL_GUIDES.find(g => g.slug === slug)
            const isUK = guideData?.ukSpecific ?? false
            const isQuickWin = guideData?.quickWin ?? false
            return (
              <a
                key={guide.href}
                href={guide.href}
                className="border border-gray-200 rounded-xl p-5 hover:border-orange-300 hover:shadow-md transition-all group flex flex-col"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${categoryColours[guide.category] ?? 'bg-gray-100 text-gray-600'}`}>
                    {guide.category}
                  </span>
                  <DifficultyMeter level={guide.difficulty} />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-orange-500 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-xs text-green-700 font-medium mb-2">{guide.saves}</p>
                {(toolCount > 0 || isUK || isQuickWin) && (
                  <div className="flex gap-1.5 flex-wrap mb-3">
                    {isQuickWin && (
                      <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full font-medium">⚡ Quick win</span>
                    )}
                    {toolCount > 0 && (
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
                        🔧 {toolCount} tool{toolCount !== 1 ? 's' : ''}
                      </span>
                    )}
                    {isUK && (
                      <span className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full">
                        🇬🇧 UK advice
                      </span>
                    )}
                  </div>
                )}
                <div className="flex gap-4 text-sm text-gray-500 mt-auto">
                  <span>{guide.time}</span>
                  <span>{guide.cost}</span>
                  <span className="ml-auto bg-green-50 text-green-700 px-2 py-0.5 rounded-full text-xs">{guide.level}</span>
                </div>
              </a>
            )
          })}
        </div>
      )}
    </div>
  )
}
