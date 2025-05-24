import Image from 'next/image'
import Link from 'next/link'

export default function ProjectCard({
  project
}: {
  project: {
    id: number
    title: string
    description: string
    image: string
    tags: string[]
  }
}) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
      <div className="relative h-48">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded">
              {tag}
            </span>
          ))}
        </div>
        <Link href={`/portfolio/${project.id}`} className="text-blue-600 hover:underline">
          Voir le projet →
        </Link>
      </div>
    </div>
  )
}