export default function Stats({ stats }: { stats: { value: string, label: string }[] }) {
    return (
      <div className="bg-gray-50 rounded-xl p-8 mb-20">
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }