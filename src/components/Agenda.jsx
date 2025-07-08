import { ChevronDown } from 'lucide-react'
import React from 'react'

  const agendaItems = [
    { time: "09:00", event: "Opening Ceremony", location: "Main Auditorium" },
    { time: "10:30", event: "Panel Discussion", location: "Conference Room A" },
    { time: "12:00", event: "Lunch Break", location: "Cafeteria" },
    { time: "14:00", event: "Workshop Session", location: "Workshop Hall" },
    { time: "16:00", event: "Networking Event", location: "Lobby" },
    { time: "18:00", event: "Closing Ceremony", location: "Main Auditorium" }
  ];

const Agenda = () => {
  return (
 <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8">Agenda</h2>
          <div className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6">
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold mb-4">Today's Schedule</h3>
                <div className="space-y-4">
                  {agendaItems.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-700 rounded-lg">
                      <div className="flex items-center">
                        <div className="text-blue-400 font-bold mr-4">{item.time}</div>
                        <div>
                          <div className="font-medium">{item.event}</div>
                          <div className="text-sm text-gray-300">{item.location}</div>
                        </div>
                      </div>
                      <div className="text-blue-400">
                        <ChevronDown size={20} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gray-700 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Quick Stats</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">12</div>
                    <div className="text-sm text-gray-300">Events This Week</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">245</div>
                    <div className="text-sm text-gray-300">Total Attendees</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">8</div>
                    <div className="text-sm text-gray-300">Active Associations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Agenda
