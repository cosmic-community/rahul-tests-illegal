import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-edge bg-carbon mt-20">
      <div className="container-wide py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🏏</span>
            <span className="font-extrabold tracking-tight">
              Rahul Tests <span className="text-ember">Illegal</span>
            </span>
          </div>
          <nav className="flex gap-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-ember transition-colors">Home</Link>
            <Link href="/bats" className="hover:text-ember transition-colors">Bats</Link>
            <Link href="/chapters" className="hover:text-ember transition-colors">Chapters</Link>
          </nav>
        </div>
        <p className="mt-6 text-center text-xs text-gray-600">
          © {new Date().getFullYear()} Rahul Tests Illegal. Content managed with Cosmic.
        </p>
      </div>
    </footer>
  )
}