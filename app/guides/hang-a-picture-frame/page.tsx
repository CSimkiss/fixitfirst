import type { Metadata } from 'next'
import Nav from '@/components/Nav'
import MobileNav from '@/components/MobileNav'

export const metadata: Metadata = {
  title: 'Hang a Picture Frame Properly | FixItFirst',
  description: 'Hang a picture frame straight and securely in 20 minutes. Step-by-step guide covering wall types, fixings, and getting it level. Save £30–60.',
}

const steps = [
  { title: 'Detect for pipes and cables', description: 'Run the detector over the whole area before marking anything. Cables run up from sockets and switches; pipes run to radiators, bathrooms, and kitchens.' },
  { title: 'Choose the right fixing', description: 'Light frames (under 5kg): a picture hook hammered into the wall. Medium frames (5–15kg): a screw into a stud or a hollow-wall anchor. Heavy frames (over 15kg): a masonry screw into a wall plug in solid wall, or two screws into studs.' },
  { title: 'Mark the fixing point', description: 'Hold the frame against the wall where you want it. Mark the top centre with a pencil. Measure down to where the wire or hanger sits and mark that point — this is where your fixing goes.' },
  { title: 'Drill or hammer your fixing', description: 'For masonry: drill with a masonry bit, push in the wall plug flush, drive the screw. For stud walls: locate the stud with a detector and drive a screw directly. For hollow walls without studs: fit a toggle anchor.' },
  { title: 'Use a spirit level', description: 'Hang the frame and place your spirit level on top. Slide the frame left or right on the wire until the bubble is centred. Step back and check from a distance.' },
  { title: 'Adjust the hanging point', description: 'If the frame tilts because the wire is off-centre, move the D-rings or adjust the wire anchor points on the back of the frame.' },
]

export default function HangAPictureFrame() {
  return (
    <main className="min-h-screen bg-white pb-20 md:pb-0">
      <Nav />
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Hang a picture frame properly</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £30–60 today</p>
        <p className="text-gray-500 mb-8">20 mins · Beginner · Saves £30–60 vs a handyperson</p>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Getting a picture to hang straight and stay there requires the right fixing for your wall type. Solid walls (brick or block) need masonry anchors; hollow stud walls need toggle anchors or a screw into a stud.</p>
          <p className="text-sm text-gray-700">Always use a cable and pipe detector before drilling. Cables run vertically from sockets and switches; pipes run to radiators and bathrooms.</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Tape measure</span> — to position the fixing correctly</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Spirit level</span> — to hang it straight</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Pencil</span> — to mark the wall</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Hammer or drill</span> — hammer for picture hooks on solid walls; drill for masonry fixings</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Pipe &amp; cable detector</span> — essential before any drilling</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Wall fixings</span> — <span className="text-orange-600">buy: £2–5 — picture hooks for light frames; wall plugs and screws for heavier ones</span></span>
            </li>
          </ul>
        </div>

        <ol className="space-y-4 mb-6">
          {steps.map((step, i) => (
            <li key={i} className="flex gap-4">
              <span className="flex-shrink-0 w-8 h-8 rounded-full bg-orange-500 text-white text-sm font-bold flex items-center justify-center">{i + 1}</span>
              <div>
                <p className="font-semibold text-gray-900">{step.title}</p>
                <p className="text-sm text-gray-600 mt-1">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Drilling without checking for cables — this is a real danger, especially near sockets and switches.</p>
          <p className="text-sm text-yellow-900 mb-2">Using the wrong fixing for the wall type — a picture hook in a plasterboard wall will pull straight out under any weight.</p>
          <p className="text-sm text-yellow-900">Not using a spirit level — what looks straight to the eye is almost always slightly off.</p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a handyperson if...</h2>
          <p className="text-sm text-red-900 mb-1">You cannot identify the wall construction and the frame is heavy (over 15kg)</p>
          <p className="text-sm text-red-900">The cable detector shows cables exactly where you need to drill</p>
        </div>

        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Picture hooks (light frame)</span><span className="font-medium">£2–3</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Wall plugs and screws</span><span className="font-medium">£3–6</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Handyperson would charge</span><span className="font-medium text-red-600">£30–60</span></div>
          </div>
        </div>

        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how to choose wall fixings, find joists and studs, and hang things level. These skills transfer to fitting shelves, curtain poles, mirrors, and anything else on a wall.</p>
        </div>
      </div>
      <MobileNav />
    </main>
  )
}
