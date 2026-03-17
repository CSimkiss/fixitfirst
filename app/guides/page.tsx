import type { Metadata } from 'next'
import { Suspense } from 'react'
import GuidesContent from '@/components/GuidesContent'

export const metadata: Metadata = {
  title: 'All DIY Guides | FixItFirst',
  description: 'Browse all FixItFirst DIY guides — plumbing, electrics, decorating, heating and more. Step-by-step instructions written for complete beginners.',
}

export default function GuidesPage() {
  return (
    <Suspense>
      <GuidesContent />
    </Suspense>
  )
}
