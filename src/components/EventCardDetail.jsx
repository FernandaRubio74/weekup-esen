import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import events from '../data/eventsData'
import { Calendar, Users, MapPin, Clock, ArrowLeft, User, Phone, Mail, Tag, Info } from 'lucide-react'

const getCategoryColor = (category) => {
  const colors = {
    'Sports': 'bg-green-500',
    'Academic': 'bg-blue-500',
    'Administrative': 'bg-purple-500',
    'Technology': 'bg-indigo-500',
    'Cultural': 'bg-pink-500'
  }
  return colors[category] || 'bg-gray-500'
}

const getEventImage = (imageType) => {
  const gradients = {
    'chess-tournament': 'from-amber-500 to-orange-600',
    'lost-items': 'from-purple-500 to-indigo-600',
    'marine-conference': 'from-blue-500 to-cyan-600',
    'beach-volleyball': 'from-yellow-500 to-red-600',
    'tech-summit': 'from-indigo-500 to-purple-600',
    'cultural-festival': 'from-pink-500 to-rose-600'
  }
  return gradients[imageType] || 'from-gray-500 to-gray-600'
}

export default function EventCardDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const event = events.find(e => String(e.id) === id)

  if (!event) return <div className="text-white p-8">Evento no encontrado</div>

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 px-4 py-3">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Volver
        </button>
      </nav>
      <div className={`h-64 bg-gradient-to-r ${getEventImage(event.image)} rounded-lg mb-8 flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
          <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${getCategoryColor(event.category)}`}>
            {event.category}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8 px-6">
        {/* Main Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Info className="mr-2" size={24} />
              Description
            </h2>
            <p className="text-gray-300 leading-relaxed">{event.description}</p>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Requirements</h3>
            <ul className="space-y-2">
              {event.requirements.map((req, index) => (
                <li key={index} className="flex items-center text-gray-300">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  {req}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {event.tags.map((tag, index) => (
                <span key={index} className="bg-gray-700 text-blue-400 px-3 py-1 rounded-full text-sm flex items-center">
                  <Tag size={14} className="mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
        {/* Side Info */}
        <div className="space-y-6">
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Event Details</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Calendar className="text-blue-400 mr-3" size={20} />
                <div>
                  <div className="font-semibold">{event.date}</div>
                  <div className="text-sm text-gray-400">{event.time} - {event.endTime}</div>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="text-blue-400 mr-3 mt-1" size={20} />
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-sm text-gray-400">{event.location}</div>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="text-blue-400 mr-3" size={20} />
                <div>
                  <div className="font-semibold">Capacity</div>
                  <div className="text-sm text-gray-400">{event.registered}/{event.capacity} registered</div>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-xs font-bold">$</span>
                </div>
                <div>
                  <div className="font-semibold">Price</div>
                  <div className="text-sm text-gray-400">{event.price}</div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div>
                <div className="font-semibold text-blue-400">Organizer</div>
                <div className="text-sm">{event.organizer}</div>
              </div>
              <div className="flex items-center">
                <User className="text-blue-400 mr-2" size={16} />
                <span className="text-sm">{event.contact.name}</span>
              </div>
              <div className="flex items-center">
                <Mail className="text-blue-400 mr-2" size={16} />
                <span className="text-sm">{event.contact.email}</span>
              </div>
              <div className="flex items-center">
                <Phone className="text-blue-400 mr-2" size={16} />
                <span className="text-sm">{event.contact.phone}</span>
              </div>
            </div>
          </div>
          <div className="bg-gray-800 rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Registration Status</h3>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Registered</span>
                <span>{event.registered}/{event.capacity}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                ></div>
              </div>
              <div className="text-xs text-gray-400">
                {event.capacity - event.registered} spots remaining
              </div>
            </div>
          </div>
          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
            Register for Event
          </button>
        </div>
      </div>
    </div>
  )
}