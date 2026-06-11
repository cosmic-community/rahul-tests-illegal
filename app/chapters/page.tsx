import { getAllChapters } from '@/lib/cosmic'
import ChapterCard from '@/components/ChapterCard'

export const revalidate = 60

export const metadata = {
  title: 'Chapters | Rahul Tests Illegal',
  description: 'Every chapter of the KL Rahul illegal bats experiment.',
}

export default async function ChaptersPage() {
  const chapters = await getAllChapters()

  return (
    <div className="container-wide py-14">
      <header className="mb-10">
        <h1 className="text-4xl font-black text-white">The Chapters</h1>
        <p className="mt-3 max-w-2xl text-gray-400">
          Follow the full story — from understanding why bats are illegal to the science
          of power behind every monstrous swing.
        </p>
      </header>

      {chapters.length === 0 ? (
        <p className="text-gray-500">No chapters found.</p>
      ) : (
        <div className="grid gap-4 md:grid-cols-2">
          {chapters.map((chapter) => (
            <ChapterCard key={chapter.id} chapter={chapter} />
          ))}
        </div>
      )}
    </div>
  )
}