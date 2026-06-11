import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-edge bg-ink/80 backdrop-blur-md">
      <div className="container-wide flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl">🏏</span>
          <span className="font-extrabold tracking-tight text-lg">
            Rahul Tests <span className="text-ember">Illegal</span>
          </span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link href="/bats" className="text-gray-300 hover:text-ember transition-colors">
            Bats
          </Link>
          <Link href="/chapters" className="text-gray-300 hover:text-ember transition-colors">
            Chapters
          </Link>
        </nav>
      </div>
    </header>
  )
}