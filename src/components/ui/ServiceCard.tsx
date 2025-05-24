import Link from "next/link"

interface ServiceCardProps {
    icon: string
    title: string
    description: string
  }
  
  export default function ServiceCard({ icon, title, description }: ServiceCardProps) {
    return (
      <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 h-full">
        <div className="text-4xl mb-4 text-blue-600">{icon}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600">{description}</p>
        <Link 
          href="/services" 
          className="inline-block mt-4 text-blue-600 hover:underline"
        >
          En savoir plus →
        </Link>
      </div>
    )
  }