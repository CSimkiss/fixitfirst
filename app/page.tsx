export default function Home() {
  const guides = [
    { title: "Fix a dripping tap", time: "45 mins", cost: "0-5", level: "Beginner", category: "Plumbing" },
    { title: "Put up shelves", time: "1 hour", cost: "10-20", level: "Beginner", category: "Carpentry" },
    { title: "Paint a room", time: "1 day", cost: "30-60", level: "Beginner", category: "Decorating" },
    { title: "Unblock a drain", time: "20 mins", cost: "0-10", level: "Beginner", category: "Plumbing" },
    { title: "Bleed a radiator", time: "15 mins", cost: "Free", level: "Beginner", category: "Heating" },
    { title: "Fill a hole in a wall", time: "30 mins", cost: "5", level: "Beginner", category: "Masonry" },
    { title: "Fit a curtain pole", time: "45 mins", cost: "0-15", level: "Beginner", category: "Fitting" },
    { title: "Change a lightbulb", time: "5 mins", cost: "5-15", level: "Beginner", category: "Electrics" },
    { title: "Fix a running toilet", time: "1 hour", cost: "10-25", level: "Beginner", category: "Plumbing" },
  ]

  const categories = ["All", "Plumbing", "Electrics", "Carpentry", "Decorating", "Masonry", "Heating", "Fitting"]

  return (
    <main className="min-h-screen bg-white">

      <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between sticky top-0 z-50">
        <span className="text-2xl font-bold text-orange-500">FixItFirst</span>
        <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-orange-500">Guides</a>
          <a href="#" className="hover:text-orange-500">My Tools</a>
          <a href="#" className="hover:text-orange-500">Progress</a>
          <a href="#" className="hover:text-orange-500">Find a Pro</a>
        </div>
        <div className="flex gap-3">
          <button className="text-sm font-medium text-gray-600 hover:text-orange-500">Log in</button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600">Get Started</button>
        </div>
      </nav>

      <section className="bg-gray-950 text-white px-6 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            Nobody taught you<br />how to do this stuff.
          </h1>
          <p className="text-xl text-gray-300 mb-10">We will. One fix at a time.</p>
          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="What needs fixing? e.g. dripping tap..."
              className="w-full bg-white text-gray-900 rounded-xl px-5 py-4 text-lg pr-16 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button className="absolute right-3 top-3 bg-orange-500 text-white px-4 py-2 rounded-lg font-medium">Go</button>
          </div>
          <div className="flex gap-2 mt-5 flex-wrap justify-center">
            {["Dripping tap", "Blocked drain", "No hot water", "Leaking toilet", "Paint a room"].map((q) => (
              <span key={q} className="bg-white/10 text-white px-3 py-1 rounded-full text-sm cursor-pointer hover:bg-white/20 border border-white/20">{q}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-orange-500 text-white py-6 px-6">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-8 text-center">
          <div><div className="text-2xl font-bold">150+</div><div className="text-orange-100 text-sm">Guides</div></div>
          <div><div className="text-2xl font-bold">Free</div><div className="text-orange-100 text-sm">To get started</div></div>
          <div><div className="text-2xl font-bold">6 tiers</div><div className="text-orange-100 text-sm">Beginner to builder</div></div>
          <div><div className="text-2xl font-bold">100s saved</div><div className="text-orange-100 text-sm">vs calling a pro</div></div>
        </div>
      </section>

      <section className="px-6 py-16 max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Popular Guides</h2>
          <a href="#" className="text-orange-500 text-sm font-medium hover:underline">View all</a>
        </div>
        <div className="flex gap-2 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button key={cat} className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${cat === "All" ? "bg-orange-500 text-white border-orange-500" : "bg-white text-gray-600 border-gray-200 hover:border-orange-300"}`}>
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((guide) => (
            <div key={guide.title} className="border border-gray-200 rounded-xl p-5 hover:border-orange-300 hover:shadow-md cursor-pointer transition-all group">
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{guide.category}</span>
              <h3 className="font-semibold text-gray-900 my-3 group-hover:text-orange-500 transition-colors">{guide.title}</h3>
              <div className="flex gap-4 text-sm text-gray-500 mb-3">
                <span>{guide.time}</span>
                <span>£{guide.cost}</span>
              </div>
              <span className="inline-block bg-green-50 text-green-700 text-s px-2 py-1 rounded-full">{guide.level}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-12">How FixItFirst works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: "1", title: "Search your problem", desc: "Type what's broken or browse by room. We'll find the right guide instantly." },
              { step: "2", title: "Follow the guide", desc: "Step-by-step instructions written for complete beginners. Photos at every tricky step." },
              { step: "3", title: "Earn your skills", desc: "Complete jobs to unlock harder projects and build your DIY identity." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4">{item.step}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-950 text-white px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to fix something?</h2>
          <p className="text-gray-300 mb-8">Join thousands of people who stopped waiting for someone else to do it.</p>
          <button className="bg-orange-500 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-orange-600">Get started for free</button>
        </div>
      </section>

      <footer className="border-t border-gray-100 px-6 py-8 text-center text-gray-400 text-sm">
        <span className="font-bold text-orange-500">FixItFirst</span>
        <p className="mt-1">Nobody taught you. We will.</p>
      </footer>

    </main>
  )
}
