export default function Nav() {
  return (
    <nav className="bg-white border-b border-gray-100 px-6 py-4 flex items-center sticky top-0 z-50">
      <a href="/" className="text-2xl font-bold text-orange-500 mr-8">FixItFirst</a>
      <div className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
        <a href="/guides" className="hover:text-orange-500">Guides</a>
        <a href="/tools" className="hover:text-orange-500">My Tools</a>
      </div>
      <div className="ml-auto flex items-center gap-3">
        <a href="/login" className="text-sm font-medium text-gray-600 hover:text-orange-500">Log in</a>
        <a href="/sign-up" className="bg-orange-500 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-600 transition-colors">Sign up free</a>
      </div>
    </nav>
  )
}
