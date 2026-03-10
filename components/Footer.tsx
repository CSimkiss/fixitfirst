export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white px-6 py-10 pb-28 md:pb-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <a href="/" className="text-xl font-bold text-orange-500">FixItFirst</a>
            <p className="text-sm text-gray-400 mt-1">Nobody taught you. We will.</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium text-gray-500">
            <a href="/" className="hover:text-orange-500 transition-colors">Home</a>
            <a href="/guides" className="hover:text-orange-500 transition-colors">Guides</a>
            <a href="/about" className="hover:text-orange-500 transition-colors">About</a>
            <a href="/progress" className="hover:text-orange-500 transition-colors">Progress</a>
            <a href="/find-a-pro" className="hover:text-orange-500 transition-colors">Find a Pro</a>
          </nav>
        </div>
        <p className="text-gray-400 text-xs mt-8 md:text-center">© 2024 FixItFirst. All rights reserved.</p>
      </div>
    </footer>
  )
}
