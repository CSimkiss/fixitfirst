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

export const metadata: Metadata = {
  title: 'How to Change a Lightbulb | FixItFirst',
  description: 'How to safely change a lightbulb — bayonet cap, Edison screw, and GU10 fittings explained. Takes 5 minutes. Save £60–100 vs an electrician call-out.',
}

const steps = [
  { title: 'Turn off the light switch', description: 'Switch the light off at the wall. For ceiling fittings, this is enough. For a lamp, also unplug it from the socket.' },
  { title: 'Let the bulb cool', description: 'Wait at least 5 minutes. Halogen and incandescent bulbs get extremely hot and can burn you or shatter if touched while warm.' },
  { title: 'Remove the old bulb', description: 'Bayonet cap: push gently inward, turn anticlockwise, and pull down. Edison screw: turn anticlockwise until it comes free. For GU10 spotlights: grip and pull straight down with a gentle twist.' },
  { title: 'Check the fitting and wattage', description: 'Match the fitting type of your new bulb to the old one. Check the fitting has a maximum wattage label and do not exceed it.' },
  { title: 'Insert the new bulb', description: 'Bayonet cap: align the pins with the slots, push in and turn clockwise until it clicks. Edison screw: push in and turn clockwise until snug. For halogen GU10s, use a cloth or gloves — skin oils shorten bulb life.' },
  { title: 'Test the light', description: 'Switch the light back on. If it does not work, switch off and check the bulb is fully seated. If it still fails, the issue may be with the fitting or circuit.' },
]

export default function ChangeALightbulb() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/" className="text-sm text-orange-500 mb-6 inline-block">Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Change a lightbulb</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £60–100 today</p>
        <p className="text-gray-500 mb-6">5 mins · Beginner · Saves £60-100 vs an electrician</p>
        <div className="flex gap-3 flex-wrap mb-6">
          <SocialShare title="Change a lightbulb" />
          <PrintButton />
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Changing a bulb is safe as long as the light is switched off and the bulb has cooled down. No tools needed.</p>
          <p className="text-sm text-gray-700 mb-2">Check the fitting type before buying a replacement — the most common UK fittings are bayonet cap (BC/B22) and Edison screw (ES/E27).</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">No tools required</span> — just your hands</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Step ladder or stable chair</span> — for ceiling fittings</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Replacement bulb</span> — <span className="text-orange-600">buy: match the existing fitting type (B22, E27, or GU10), £5–15</span></span>
            </li>
          </ul>
        </div>
        <ToolsWarning requiredToolIds={GUIDE_TOOLS['change-a-lightbulb']} />
        <StepProgress steps={steps} />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Touching a new halogen bulb with bare hands — oils from your skin cause hot spots that crack the glass.</p>
          <p className="text-sm text-yellow-900 mb-2">Buying the wrong fitting type and only realising after you are up a ladder.</p>
          <p className="text-sm text-yellow-900">Fitting a bulb with too high a wattage, which can overheat the fitting and cause a fire risk.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call an electrician if...</h2>
          <p className="text-sm text-red-900 mb-1">The fitting is discoloured, melted, or smells of burning</p>
          <p className="text-sm text-red-900 mb-1">Bulbs keep blowing repeatedly in the same fitting</p>
          <p className="text-sm text-red-900">You see any exposed or damaged wiring</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">LED bulb replacement</span><span className="font-medium">£5-15</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Specialist bulb (GU10, globe)</span><span className="font-medium">£8-20</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Electrician call-out</span><span className="font-medium text-red-600">£60-100</span></div>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now understand the main bulb fitting types used in UK homes and how to work safely around basic electrics. These skills transfer to fitting lampshades and replacing light fittings.</p>
        </div>
        <CompleteButton />
        <GuideExtras slug="change-a-lightbulb" />
      </div>
      <RecentViewTracker slug="change-a-lightbulb" title="Change a lightbulb" href="/guides/change-a-lightbulb" />
      <MobileNav />
    </main>
  )
}
