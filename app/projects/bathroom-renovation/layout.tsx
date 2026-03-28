import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Renovate Your Bathroom (Step by Step) | FixItFirst',
  description:
    'A complete bathroom renovation guide broken into 6 DIY-friendly phases. Save £500–£2,000 vs hiring a contractor. Skill progression, tool lists, and honest advice on when to call a pro.',
  openGraph: {
    title: 'Renovate Your Bathroom — Step by Step | FixItFirst',
    description: 'Six phases. Real guides. One weekend at a time.',
  },
}

export default function BathroomRenovationLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
