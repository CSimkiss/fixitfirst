import type { Metadata } from 'next'
import StepProgress from '@/components/StepProgress'
import CompleteButton from '@/components/CompleteButton'
import MobileNav from '@/components/MobileNav'
import Nav from '@/components/Nav'
import ToolsWarning from '@/components/ToolsWarning'
import { GUIDE_TOOLS } from '@/lib/tools'
import RecentViewTracker from '@/components/RecentViewTracker'
import SocialShare from '@/components/SocialShare'
import GuideExtras from '@/components/GuideExtras'
import PrintButton from '@/components/PrintButton'
import NextGuide from '@/components/NextGuide'
import DifficultyComparison from '@/components/DifficultyComparison'
import { GUIDE_META } from '@/lib/guide-meta'

export const metadata: Metadata = {
  title: 'How to Read Your Energy Meter | FixItFirst',
  description: 'Read your gas and electricity meter correctly in under 5 minutes. Step-by-step UK guide. Submit regular readings to avoid estimated bills.',
}

const steps = [
  { title: 'Find your meters', description: 'Electricity meters are usually near the front door, in a cupboard under the stairs, or in a hallway. Gas meters are often outside in a box or in the kitchen. If you live in a flat, meters may be in a communal cupboard.' },
  { title: 'Read a standard digital meter', description: 'Note down all the numbers on the display from left to right. Ignore any numbers after the decimal point (usually shown in red). Example: if the display shows 01234.5, your reading is 01234.' },
  { title: 'Read a dial meter', description: 'Read each dial from left to right. If the pointer is between two numbers, write down the lower number. If the pointer is directly on a number, check the next dial — if it has not passed zero, write down the lower number.' },
  { title: 'Read an economy 7 meter', description: 'Economy 7 meters have two readings: Rate 1 (day) and Rate 2 (night). Submit both to your supplier — they use different rates for each.' },
  { title: 'Submit your reading', description: "Log in to your energy supplier's app or website and enter your reading. Alternatively call their customer service line. Do this once a month to keep bills accurate." },
  { title: 'Compare to previous readings', description: 'Your reading should always be higher than the last one. If it is lower, you may have misread the meter. Double-check before submitting.' },
]

export default function ReadYourEnergyMeter() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Read your energy meter</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Prevents overcharging</p>
        <p className="text-gray-500 mb-6">5 mins · Beginner · Avoid estimated bills</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['read-your-energy-meter'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Read your energy meter" />
          <PrintButton />
        </div>
        <DifficultyComparison slug="read-your-energy-meter" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">If you do not submit regular meter readings, your energy supplier estimates your usage — and estimates are often wrong, leading to a surprise bill or an overpayment.</p>
          <p className="text-sm text-gray-700">Most homes have two meters: one for electricity and one for gas. Smart meters send readings automatically. If you have a traditional meter with a dial or number display, you need to read it yourself.</p>
        </div>
        <div className="bg-blue-50 border border-blue-100 rounded-xl p-4 mb-4">
          <p className="text-xs text-blue-700">Some links on this page are affiliate links. If you buy through them we may earn a small commission at no extra cost to you.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Nothing needed</span> — just your meter and phone to submit the reading</span>
            </li>
          </ul>
        </div>
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['read-your-energy-meter']} />
        <StepProgress steps={steps} slug="read-your-energy-meter" />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Including the red decimal digits in the reading — suppliers only want the whole number.</p>
          <p className="text-sm text-yellow-900 mb-2">Reading dial meters in the wrong direction — always read left to right.</p>
          <p className="text-sm text-yellow-900">Submitting a reading lower than the previous one — call your supplier if you think the meter may be faulty.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call your energy supplier if...</h2>
          <p className="text-sm text-red-900 mb-1">Your meter reading is going down or staying the same — the meter may be faulty</p>
          <p className="text-sm text-red-900">You cannot find your meter at all — ask your landlord or the property management</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Reading and submitting yourself</span><span className="font-medium">Free</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Smart meter installation</span><span className="font-medium">Free — request one from your supplier</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Engineer to check a faulty meter</span><span className="font-medium text-red-600">Free — this is the supplier's responsibility</span></div>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how to read any type of UK energy meter and submit accurate readings. This prevents estimated bills and ensures you only pay for what you actually use.</p>
        </div>
        <p className="text-sm text-gray-400 text-center mb-3">✅ Completed by {GUIDE_META['read-your-energy-meter'].completedCount.toLocaleString()} people</p>
        {GUIDE_META['read-your-energy-meter'].renterWarning && (
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mb-6">
            <h2 className="font-semibold text-amber-800 mb-3">⚠️ Watch out if you rent</h2>
            <p className="text-sm text-amber-900">{GUIDE_META['read-your-energy-meter'].renterWarning}</p>
          </div>
        )}
        <CompleteButton />
        <GuideExtras slug="read-your-energy-meter" />
        <NextGuide currentSlug="read-your-energy-meter" />
      </div>
      <RecentViewTracker slug="read-your-energy-meter" title="Read your energy meter" href="/guides/read-your-energy-meter" />
      <MobileNav />
    </main>
  )
}
