import type { Metadata } from 'next'
import StepProgress from '@/components/StepProgress'
import CompleteButton from '@/components/CompleteButton'
import MobileNav from '@/components/MobileNav'

export const metadata: Metadata = {
  title: 'How to Fit a Curtain Pole | FixItFirst',
  description: 'How to fit a curtain pole on any wall type, including plasterboard. Step-by-step guide with tools list. Save £50–80 vs a handyman.',
}

const steps = [
  { title: 'Mark the bracket positions', description: 'Hold the first bracket 15cm beyond the window edge and at least 10cm above the frame. Mark the screw holes lightly with a pencil. Repeat for the second bracket, using a tape measure and spirit level to ensure they are at exactly the same height.' },
  { title: 'Check for pipes and cables', description: 'Run your detector over each marked position. If it beeps, move your mark a few centimetres and re-check.' },
  { title: 'Drill the holes', description: 'Use the correct drill bit for your wall type (masonry bit for brick or plaster, wood bit for timber). Drill to the depth of your wall plug. Keep the drill straight and level.' },
  { title: 'Insert the wall plugs', description: 'Push a wall plug into each hole until it is flush with the wall surface. If it spins freely, the hole is too large — use a larger plug.' },
  { title: 'Screw on the brackets', description: 'Hold each bracket in position and drive the screws in until firm. Do not overtighten. Check both brackets are level with a spirit level before fully tightening.' },
  { title: 'Hang the pole and curtains', description: 'Thread the curtain rings onto the pole, clip the pole into the brackets, and fit the end finials. Hang your curtains and test that they draw smoothly.' },
]

export default function FitACurtainPole() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <a href="/" className="text-2xl font-bold text-orange-500">FixItFirst</a>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium">Get Started</button>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/" className="text-sm text-orange-500 mb-6 inline-block">Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Fit a curtain pole</h1>
        <p className="text-gray-500 mb-6">45 mins · Beginner · Saves £50-80 vs a handyman</p>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Before drilling, use a pipe and cable detector to check for hidden pipes and wires behind the wall. These are inexpensive and available at any DIY shop.</p>
          <p className="text-sm text-gray-700 mb-2">You need a drill, spirit level, pencil, tape measure, and the fixings that come with your pole (wall plugs and screws).</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Power drill with drill bits</span> — <span className="text-orange-600">buy or borrow if you don't have one</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Pipe and cable detector</span> — <span className="text-orange-600">buy: £10–15, essential before any drilling</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Spirit level</span> — for level brackets</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Tape measure and pencil</span> — standard household items</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Screwdriver</span> — wall plugs and screws come with the pole</span>
            </li>
          </ul>
        </div>
        <StepProgress steps={steps} />
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Not checking for pipes and cables before drilling — always use a detector first.</p>
          <p className="text-sm text-yellow-900 mb-2">Brackets that are not level, causing curtains to hang crooked.</p>
          <p className="text-sm text-yellow-900">Using the wrong wall plugs for hollow plasterboard walls — you need cavity fixings, not standard plugs.</p>
        </div>
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a professional if...</h2>
          <p className="text-sm text-red-900 mb-1">Your detector shows cables directly behind your chosen position and there is no alternative spot</p>
          <p className="text-sm text-red-900 mb-1">The wall is an unusual material such as glass or metal panel</p>
          <p className="text-sm text-red-900">The drill produces sparks or the wall is unusually hard</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">You have a drill already</span><span className="font-medium">£0-5</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Detector and drill bits</span><span className="font-medium">£10-20</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Handyman would charge</span><span className="font-medium text-red-600">£50-80</span></div>
          </div>
        </div>
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how to use a drill, read wall types, and fix things securely to a wall. These skills transfer to hanging shelves, fitting blinds, and mounting a TV bracket.</p>
        </div>
        <CompleteButton />
      </div>
      <MobileNav />
    </main>
  )
}
