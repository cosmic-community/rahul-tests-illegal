import { getAllBats } from '@/lib/cosmic'
import BatCard from '@/components/BatCard'

export const revalidate = 60

export const metadata = {
  title: 'The Bats | Rahul Tests Illegal',
  description: 'Every outrageous and banned cricket bat tested in the experiment.',
}

export default async function BatsPage() {
  const bats = await getAllBats()

  return (
    <div className="container-wide py-14">
      <header className="mb-10">
        <h1 className="text-4xl font-black text-white">The Bats</h1>
        <p className="mt-3 max-w-2xl text-gray-400">
          From giant-edge monsters to a bat so oversized it looks like a wooden shovel —
          explore each one with its power and control ratings.
        </p>
      </header>

      {bats.length === 0 ? (
        <p className="text-gray-500">No bats found.</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {bats.map((bat) => (
            <BatCard key={bat.id} bat={bat} />
          ))}
        </div>
      )}
    </div>
  )
}