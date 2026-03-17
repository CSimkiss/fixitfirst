'use client'

import { useEffect, useState } from 'react'
import { TOOLS_STORAGE_KEY } from '@/lib/tools'
import { screwfixToolUrl, amazonToolUrl, screwfixGuideUrl, amazonGuideUrl } from '@/lib/affiliates'

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
      <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
      <ul className="space-y-3">
        {tools.map((tool, i) => {
          const isOwned = mounted && !!tool.toolId && owned.includes(tool.toolId)
          const showBuy = mounted && !!tool.toolId && !owned.includes(tool.toolId)
          const useCheck = tool.icon === 'check' || isOwned

          return (
            <li key={i} className="flex items-start gap-3 text-sm">
              <span className={`${useCheck ? 'text-green-500' : 'text-orange-500'} font-bold mt-0.5 shrink-0`}>
                {useCheck ? '✓' : '!'}
              </span>
              <span className="flex flex-wrap items-baseline gap-x-1.5 gap-y-0.5 min-w-0">
                <span className="font-medium">{tool.name}</span>
                {tool.hint && (
                  <span className={showBuy ? 'text-gray-400' : tool.hintOrange ? 'text-orange-600' : 'text-gray-500'}>
                    — {tool.hint}
                  </span>
                )}
                {showBuy && tool.name && (
                  <span className="flex flex-col gap-0.5 text-xs mt-0.5 w-full">
                    <span className="text-gray-400 italic">Worth having — you will use it for other fixes too.</span>
                    <span className="flex items-center gap-1 flex-wrap">
                      <span className="text-gray-400">· Get it:</span>
                      <a
                        href={screwfixToolUrl(tool.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Screwfix
                      </a>
                      <span className="text-gray-300">|</span>
                      <a
                        href={amazonToolUrl(tool.name)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline"
                      >
                        Amazon
                      </a>
                    </span>
                  </span>
                )}
              </span>
            </li>
          )
        })}
      </ul>
      {guideName && (
        <p className="text-xs text-gray-500 mt-4 pt-3 border-t border-gray-100">
          Want to get everything in one go?{' '}
          <a
            href={screwfixGuideUrl(guideName)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Shop this fix on Screwfix
          </a>
          {' '}or{' '}
          <a
            href={amazonGuideUrl(guideName)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            Amazon
          </a>
        </p>
      )}
      <p className="text-xs text-gray-400 mt-3">
        Prices shown on retailer sites. Always check current pricing before purchasing.
      </p>
    </div>
  )
}
