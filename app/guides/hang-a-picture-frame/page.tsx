import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'How to Hang a Picture Frame | FixItFirst',
  description: 'Hang a picture frame straight and securely in 20 minutes. Covers wall types, fixing choice, and levelling. Save £30–60 vs a handyperson.',
}

export default function HangAPictureFrame() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center sticky top-0 z-50">
        <a href="/" className="text-2xl font-bold text-orange-500 mr-8">FixItFirst</a>
        <div className="ml-auto">
          <a href="/guides" className="text-sm text-gray-500 hover:text-orange-500">← All guides</a>
        </div>
      </nav>

      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/guides" className="text-sm text-orange-500 mb-6 inline-block">← Back to guides</a>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Hang a picture frame properly</h1>
        <p className="text-4xl font-black text-green-600 mb-1">Save £30–60 today</p>
        <p className="text-gray-500 mb-8">20 mins · Beginner · Saves £30–60 vs a handyperson</p>

        {/* Before you start */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">The right fixing depends on your wall type and the weight of the frame. Get this wrong and the frame falls off the wall — get it right and it stays for years.</p>
          <p className="text-sm text-gray-700">Solid walls (brick or block) need a wall plug and screw. Stud partition walls need a screw into a stud or a toggle anchor. Always check for cables and pipes before drilling.</p>
        </div>

        {/* Tools needed */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Tools needed</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Pipe and cable detector</span> — essential before drilling — do not skip this step</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Spirit level</span> — for getting the frame straight</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-green-500 font-bold mt-0.5 shrink-0">✓</span>
              <span><span className="font-medium">Tape measure and pencil</span> — to mark the fixing point accurately</span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Wall plugs and screws</span> — <span className="text-orange-600">buy: £2–5 — choose a size rated for the frame weight</span></span>
            </li>
            <li className="flex items-start gap-3 text-sm">
              <span className="text-orange-500 font-bold mt-0.5 shrink-0">!</span>
              <span><span className="font-medium">Drill and masonry bit</span> — <span className="text-orange-600">buy or hire — needed for solid walls</span></span>
            </li>
          </ul>
        </div>

        {/* Steps */}
        <div className="mb-8">
          <h2 className="font-semibold text-gray-900 mb-4">Steps</h2>
          <ol className="space-y-5">
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">1</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Detect for pipes and cables</p>
                <p className="text-sm text-gray-600">Run the detector over the whole area before marking anything. Cables run up from sockets and switches; pipes run to radiators, bathrooms, and kitchens.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">2</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Choose the right fixing</p>
                <p className="text-sm text-gray-600">Light frames under 5kg: a picture hook. Medium 5–15kg: screw into a stud or hollow-wall anchor. Heavy over 15kg: masonry screw into a wall plug in solid wall.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">3</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Mark the fixing point</p>
                <p className="text-sm text-gray-600">Hold the frame against the wall where you want it. Mark the top centre with a pencil. Measure down to where the wire or hanger sits — this is where your fixing goes.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">4</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Drill or hammer your fixing</p>
                <p className="text-sm text-gray-600">For masonry: drill with a masonry bit, push in the wall plug flush, drive the screw. For stud walls: locate the stud and drive a screw directly. For hollow walls without studs: fit a toggle anchor.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">5</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Use a spirit level</p>
                <p className="text-sm text-gray-600">Hang the frame and place your spirit level on top. Slide the frame left or right on the wire until the bubble is centred.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex-shrink-0 w-7 h-7 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">6</span>
              <div>
                <p className="font-semibold text-gray-900 mb-1">Adjust the hanging point</p>
                <p className="text-sm text-gray-600">If the frame tilts because the wire is off-centre, move the D-rings or adjust the wire anchor points on the back of the frame.</p>
              </div>
            </li>
          </ol>
        </div>

        {/* Where beginners go wrong */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-yellow-800 mb-3">Where beginners go wrong</h2>
          <p className="text-sm text-yellow-900 mb-2">Not checking for cables and pipes before drilling — this is essential.</p>
          <p className="text-sm text-yellow-900 mb-2">Using a picture hook rated for 2kg to hang a heavy mirror — check the weight and match the fixing.</p>
          <p className="text-sm text-yellow-900">Not measuring the drop from the top of the frame to the wire — the screw needs to go at the wire position, not the top of the frame.</p>
        </div>

        {/* Stop and call a pro */}
        <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-red-800 mb-3">Stop and call a handyperson if...</h2>
          <p className="text-sm text-red-900 mb-1">The frame is a very heavy mirror over 20kg — use two fixings and make sure both are in studs or solid masonry</p>
          <p className="text-sm text-red-900">You are drilling into a chimney breast and are unsure of what is inside</p>
        </div>

        {/* Cost breakdown */}
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Cost breakdown</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Wall plugs and screws</span><span className="font-medium">£2–5</span></div>
            <div className="flex justify-between py-2 border-b border-gray-200"><span className="text-gray-600">Picture hooks</span><span className="font-medium">£1–3</span></div>
            <div className="flex justify-between py-2"><span className="text-gray-600">Handyperson would charge</span><span className="font-medium text-red-600">£30–60</span></div>
          </div>
        </div>

        {/* What you just learned */}
        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 mb-8">
          <h2 className="font-semibold text-orange-800 mb-3">What you just learned</h2>
          <p className="text-sm text-orange-900">You now know how to match a fixing to a wall type and frame weight, and how to hang a frame straight first time. This applies to everything mounted on walls — mirrors, shelves, and TV brackets.</p>
        </div>

        <div className="border-t border-gray-100 pt-8 text-center">
          <p className="text-sm text-gray-500 mb-4">Ready for another fix?</p>
          <a href="/guides" className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors">
            Browse all guides →
          </a>
        </div>
      </div>
    </main>
  )
}
