'use client'

import { useState } from 'react'

export default function CompleteButton() {
  const [completed, setCompleted] = useState(false)

  return (
    <button
      onClick={() => setCompleted(true)}
      className={`w-full py-4 rounded-xl text-lg font-semibold transition-all ${
        completed
          ? 'bg-green-500 text-white cursor-default'
          : 'bg-orange-500 text-white hover:bg-orange-600'
      }`}
    >
      {completed ? '✓ Completed!' : 'Mark as Complete'}
    </button>
  )
}
