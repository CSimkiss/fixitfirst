'use client'

import { ReactNode } from 'react'

function LockIcon() {
  return (
    <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clipRule="evenodd" />
    </svg>
  )
}

interface StatCardProps {
  value: ReactNode
  /** Full Tailwind class string for the value, including hover variants e.g. "text-orange-500 group-hover:text-orange-600 transition-colors" */
  valueClass: string
  label: string
  /** Navigate to this URL when clicked */
  href?: string
  /** Scroll/action callback when clicked — renders a <button> */
  onClick?: () => void
  /** Border colour on hover, e.g. "hover:border-orange-300" (default) */
  hoverBorderClass?: string
  /** Show locked/muted state (for guest users) — disables interaction */
  locked?: boolean
  lockedHint?: string
}

export default function StatCard({
  value,
  valueClass,
  label,
  href,
  onClick,
  hoverBorderClass = 'hover:border-orange-300',
  locked,
  lockedHint,
}: StatCardProps) {
  if (locked) {
    return (
      <div className="bg-gray-50 rounded-2xl border border-gray-100 p-5 text-center">
        <p className="text-3xl font-black text-gray-300">{value}</p>
        <div className="flex items-center justify-center gap-1 mt-1">
          <LockIcon />
          <p className="text-sm text-gray-400">{label}</p>
        </div>
        {lockedHint && <p className="text-xs text-gray-400 mt-1">{lockedHint}</p>}
      </div>
    )
  }

  const base = `bg-white rounded-2xl border border-gray-200 p-5 text-center ${hoverBorderClass} hover:shadow-sm transition-all group`
  const inner = (
    <>
      <p className={`text-3xl font-black ${valueClass}`}>{value}</p>
      <p className="text-sm text-gray-500 mt-1">{label}</p>
    </>
  )

  if (href) {
    return <a href={href} className={`block ${base}`}>{inner}</a>
  }
  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={`w-full cursor-pointer ${base}`}>
        {inner}
      </button>
    )
  }
  return <div className="bg-white rounded-2xl border border-gray-200 p-5 text-center">{inner}</div>
}
