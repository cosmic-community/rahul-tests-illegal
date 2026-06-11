import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container-wide flex min-h-[60vh] flex-col items-center justify-center text-center">
      <span className="text-6xl">🏏</span>
      <h1 className="mt-6 text-4xl font-black text-white">Out of Bounds</h1>
      <p className="mt-3 text-gray-400">
        This page didn&apos;t make it past the bat gauge.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-xl bg-ember px-6 py-3 font-bold text-white transition-colors hover:bg-ember-dark"
      >
        Back to Home
      </Link>
    </div>
  )
}