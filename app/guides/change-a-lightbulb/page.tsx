export default function ChangeALightbulb() {
  return (
    <main className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <a href="/" className="text-2xl font-bold text-orange-500">FixItFirst</a>
        <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium">Get Started</button>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-10">
        <a href="/" className="text-sm text-orange-500 mb-6 inline-block">Back to guides</a>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Change a lightbulb</h1>
        <p className="text-gray-500 mb-8">5 mins · Beginner · Saves £60-100 vs an electrician</p>
        <div className="bg-gray-50 rounded-xl p-6 mb-6">
          <h2 className="font-semibold text-gray-900 mb-3">Before you start</h2>
          <p className="text-sm text-gray-700 mb-2">Changing a bulb is safe as long as the light is switched off and the bulb has cooled down. No tools needed.</p>
          <p className="text-sm text-gray-700 mb-2">Check the fitting type before buying a replacement — the most common UK fittings are bayonet cap (BC/B22) and Edison screw (ES/E27).</p>
        </div>
        <div className="mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">Steps</h2>
          <div className="space-y-4">
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">1</div><div><h3 className="font-semibold mb-1">Turn off the light switch</h3><p className="text-sm text-gray-600">Switch the light off at the wall. For ceiling fittings, this is enough. For a lamp, also unplug it from the socket.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">2</div><div><h3 className="font-semibold mb-1">Let the bulb cool</h3><p className="text-sm text-gray-600">Wait at least 5 minutes. Halogen and incandescent bulbs get extremely hot and can burn you or shatter if touched while warm.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">3</div><div><h3 className="font-semibold mb-1">Remove the old bulb</h3><p className="text-sm text-gray-600">Bayonet cap: push gently inward, turn anticlockwise, and pull down. Edison screw: turn anticlockwise until it comes free. For GU10 spotlights: grip and pull straight down with a gentle twist.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">4</div><div><h3 className="font-semibold mb-1">Check the fitting and wattage</h3><p className="text-sm text-gray-600">Match the fitting type of your new bulb to the old one. Check the fitting has a maximum wattage label and do not exceed it.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">5</div><div><h3 className="font-semibold mb-1">Insert the new bulb</h3><p className="text-sm text-gray-600">Bayonet cap: align the pins with the slots, push in and turn clockwise until it clicks. Edison screw: push in and turn clockwise until snug — do not overtighten. For halogen GU10s, use a cloth or gloves — skin oils shorten bulb life.</p></div></div>
            <div className="flex gap-4"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold shrink-0">6</div><div><h3 className="font-semibold mb-1">Test the light</h3><p className="text-sm text-gray-600">Switch the light back on. If it does not work, switch off and check the bulb is fully seated. If it still fails, the issue may be with the fitting or circuit.</p></div></div>
          </div>
        </div>
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
        <button className="w-full bg-orange-500 text-white py-4 rounded-xl text-lg font-semibold hover:bg-orange-600">Mark as Complete</button>
      </div>
    </main>
  )
}
