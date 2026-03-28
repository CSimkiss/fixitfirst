'use client'

import { useEffect, useState } from 'react'
import { TOOLS_STORAGE_KEY } from '@/lib/tools'
import { amazonToolUrl, amazonGuideUrl, screwfixToolUrl, screwfixGuideUrl } from '@/lib/affiliates'

export type ToolItem = {
  /** Default icon shown before localStorage is read */
  icon: 'check' | 'buy'
  /** Display name of the tool or material */
  name: string
  /** Hint text shown after the dash */
  hint?: string
  /** Render hint in orange (for consumables with "buy: £X" hints) */
  hintOrange?: boolean
  /** ALL_TOOLS id — if present, ownership is checked and buy links shown when not owned */
  toolId?: string
}

interface Props {
  tools: ToolItem[]
  slug: string
  /** Human-readable guide name used for the "Shop this fix" search URLs */
  guideName: string
}

export default function ToolsSection({ tools, slug: _slug, guideName }: Props) {
  const [owned, setOwned] = useState<string[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const raw = localStorage.getItem(TOOLS_STORAGE_KEY)
    setOwned(raw ? JSON.parse(raw) : [])
    setMounted(true)
  }, [])

  return (
    <div id="tools-section" className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
      <h2 className="font-semibold text-gray-900 mb-4">Tools &amp; materials</h2>
      <ul className="space-y-4">
        {tools.map((tool, i) => {
          const isOwned = mounted && !!tool.toolId && owned.includes(tool.toolId)
          const showBuy = mounted && !!tool.toolId && !owned.includes(tool.toolId)
          const useCheck = tool.icon === 'check' || isOwned

          return (
            <li key={i} className="flex items-start gap-3 text-sm">
              <span className={`${useCheck ? 'text-green-500' : 'text-orange-500'} font-bold mt-0.5 shrink-0`}>
                {useCheck ? '✓' : '!'}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5">
                  <span className="font-medium">{tool.name}</span>
                  {tool.hint && !showBuy && (
                    <span className={tool.hintOrange ? 'text-orange-600' : 'text-gray-500'}>
                      — {tool.hint}
                    </span>
                  )}
                  {isOwned && (
                    <span className="text-green-600 font-medium text-xs">✓ You have this</span>
                  )}
                </div>

                {showBuy && tool.name && (
                  <div className="mt-2 flex flex-col gap-1.5">
                    <span className="text-xs text-gray-400 italic">Worth having — useful for many other fixes too.</span>
                    <div className="flex flex-wrap gap-2 mt-0.5">
                      <a
                        href={amazonToolUrl(tool.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
                      >
                        Buy on Amazon <span className="opacity-80">(fastest delivery)</span>
                      </a>
                      <a
                        href={screwfixToolUrl(tool.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                      >
                        Check Screwfix <span className="text-gray-400">(pickup today)</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </li>
          )
        })}
      </ul>

      {guideName && (
        <div className="mt-5 pt-4 border-t border-gray-100">
          <p className="text-sm font-medium text-gray-700 mb-2">Want everything in one go?</p>
          <div className="flex flex-wrap gap-2">
            <a
              href={amazonGuideUrl(guideName)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 bg-orange-500 hover:bg-orange-600 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              Get it on Amazon <span className="opacity-80">(fastest delivery)</span>
            </a>
            <a
              href={screwfixGuideUrl(guideName)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 hover:underline transition-colors self-center"
            >
              Check Screwfix <span className="text-gray-400">(pickup today)</span>
            </a>
          </div>
        </div>
      )}

      <p className="text-xs text-gray-400 mt-3">
        Prices shown on retailer sites. Always check current pricing before purchasing.
      </p>
    </div>
  )
}
