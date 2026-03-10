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
import DifficultyComparison from '@/components/DifficultyComparison'
import { GUIDE_META } from '@/lib/guide-meta'

export const metadata: Metadata = {
  title: 'How to Put Up Shelves | FixItFirst',
  description: 'How to put up shelves safely on any wall type — masonry or plasterboard. Step-by-step guide for beginners. Save £50–80 vs a handyman.',
}

const steps = [
  { title: 'Mark the shelf position', description: 'Hold the shelf bracket against the wall at the desired height. Use a spirit level to ensure it is perfectly horizontal. Mark the bracket screw holes lightly with a pencil.' },
  { title: 'Check for pipes and cables', description: 'Run your detector over each marked position. Cables typically run vertically from switches and horizontally from sockets. If it beeps, move your mark and re-check.' },
  { title: 'Identify your wall type and drill', description: 'Tap the wall — a solid sound means masonry (use a masonry bit), a hollow sound means plasterboard (use cavity fixings). Drill to the depth of your wall plug, keeping the drill level.' },
  { title: 'Insert wall plugs', description: 'Push a wall plug into each hole until flush with the surface. For plasterboard, use cavity anchors — these expand behind the board to grip securely.' },
  { title: 'Fix the brackets and check level', description: 'Screw the bracket to the wall, leaving screws slightly loose. Hold a spirit level across both brackets and adjust until perfectly level, then fully tighten all screws.' },
  { title: 'Attach the shelf and load test', description: 'Screw or clip the shelf onto the brackets. Test by pressing down firmly with both hands before placing anything on it. If it flexes, add a third bracket in the middle.' },
]

export default function PutUpShelves() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/" className="text-sm text-orange-500 mb-6 inline-block">Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Put up shelves</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £50–80 today</p>
        
<p className="text-gray-500 mb-6">1 hour · Beginner · Saves £50-80 vs a handyman</p>
        <p className="text-xs text-gray-400 mb-4">Last updated: {GUIDE_META['put-up-shelves'].lastUpdated}</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Put up shelves" />
          
<PrintButton />
        </div>
        <DifficultyComparison slug="put-up-shelves" />
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">This guide covers fitting a floating shelf or bracket-mounted shelf on a solid or plasterboard wall.</p>
          <p className="text-sm text-gray-700 mb-2">Before drilling, use a pipe and cable detector to check for hidden pipes and wires. You need a drill, spirit level, tape measure, pencil, and the fixings supplied with your shelf.</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Power drill with masonry and wood bits</span> — <span className="text-orange-600">buy or borrow if you don't have one</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Pipe and cable detector</span> — <span className="text-orange-600">buy: £10–15, essential before drilling</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Spirit level</span> — borrow from a neighbour if needed</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Tape measure and pencil</span> — standard household items</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Screwdriver</span> — standard household tool</span>
            </li>
          </ul>
        </div>
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['put-up-shelves']} />
        <StepProgress steps={steps} />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Using standard wall plugs in plasterboard — they will pull straight out under load. Always use cavity anchors for hollow walls.</p>
          <p className="text-sm text-yellow-900 mb-2">Not checking with a spirit level — a shelf that looks level to the eye is often several millimetres off.</p>
          <p className="text-sm text-yellow-900">Overloading a shelf fixed only into plasterboard — keep heavy items on shelves anchored into masonry or timber studs.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a professional if...</h2>
          <p className="text-sm text-red-900 mb-1">Your detector shows cables directly behind every possible fixing position</p>
          <p className="text-sm text-red-900 mb-1">The drill produces sparks or the wall material is unexpected</p>
          <p className="text-sm text-red-900">You need to support very heavy loads such as a full bookcase — consider a specialist wall anchor assessment</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">You have a drill already</span><span className="font-medium">£10-20</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">With drill and detector</span><span className="font-medium">£30-50</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Handyman would charge</span><span className="font-medium text-red-600">£50-80</span></div>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now understand wall types, how to choose the right fixing, and how to use a spirit level accurately. These skills transfer directly to fitting curtain poles, mounting a TV, and hanging heavy pictures.</p>
        </div>
        <p className="text-sm text-gray-400 text-center mb-3">✅ Completed by {GUIDE_META['put-up-shelves'].completedCount.toLocaleString()} people</p>
        <CompleteButton />
        <GuideExtras slug="put-up-shelves" />
      </div>
      <RecentViewTracker slug="put-up-shelves" title="Put up shelves" href="/guides/put-up-shelves" />
      <MobileNav />
    </main>
  )
}
