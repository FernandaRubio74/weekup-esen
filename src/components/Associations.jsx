  import { Users } from 'lucide-react';

  const studentAssociations = [
    { name: "Engineering", logo: "/api/placeholder/60/60" },
    { name: "Business", logo: "/api/placeholder/60/60" },
    { name: "Design", logo: "/api/placeholder/60/60" },
    { name: "Psychology", logo: "/api/placeholder/60/60" },
    { name: "Medicine", logo: "/api/placeholder/60/60" },
    { name: "Law", logo: "/api/placeholder/60/60" },
    { name: "Architecture", logo: "/api/placeholder/60/60" },
    { name: "Communications", logo: "/api/placeholder/60/60" }
  ];

export default function Associations() {
  return (
    <section className="py-16 px-4 bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Student Associations</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
          {studentAssociations.map((association, index) => (
            <div key={index} className="bg-gray-700 rounded-lg p-4 text-center hover:bg-gray-600 transition-colors cursor-pointer">
              <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-3 flex items-center justify-center">
                <Users size={24} />
              </div>
              <div className="text-sm font-medium">{association.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}