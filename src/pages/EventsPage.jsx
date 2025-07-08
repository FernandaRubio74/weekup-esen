import React, { useState } from 'react';
import { Calendar, Users, MapPin, Clock, ChevronDown, Menu, X, ArrowLeft, User, Phone, Mail, Tag, Info } from 'lucide-react';
import EventCardFull from '../components/EventCardFull';
import events from '../data/eventsData';

const EventsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Sports', 'Academic', 'Administrative', 'Technology', 'Cultural'];

  const filteredEvents = filterCategory === 'All' 
    ? events 
    : events.filter(event => event.category === filterCategory);

  const getCategoryColor = (category) => {
    const colors = {
      'Sports': 'bg-green-500',
      'Academic': 'bg-blue-500',
      'Administrative': 'bg-purple-500',
      'Technology': 'bg-indigo-500',
      'Cultural': 'bg-pink-500'
    };
    return colors[category] || 'bg-gray-500';
  };

  const getEventImage = (imageType) => {
    const gradients = {
      'chess-tournament': 'from-amber-500 to-orange-600',
      'lost-items': 'from-purple-500 to-indigo-600',
      'marine-conference': 'from-blue-500 to-cyan-600',
      'beach-volleyball': 'from-yellow-500 to-red-600',
      'tech-summit': 'from-indigo-500 to-purple-600',
      'cultural-festival': 'from-pink-500 to-rose-600'
    };
    return gradients[imageType] || 'from-gray-500 to-gray-600';
  };

  if (selectedEvent) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Navigation */}
        <nav className="bg-gray-800 px-4 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setSelectedEvent(null)}
                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Back to Events
              </button>
            </div>
            <div className="text-xl font-bold">ESEN Events</div>
          </div>
        </nav>

        {/* Event Details */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          {/* Event Header */}
          <div className={`h-64 bg-gradient-to-r ${getEventImage(selectedEvent.image)} rounded-lg mb-8 flex items-center justify-center relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative z-10 text-center">
              <h1 className="text-4xl font-bold mb-4">{selectedEvent.title}</h1>
              <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${getCategoryColor(selectedEvent.category)}`}>
                {selectedEvent.category}
              </div>
            </div>
          </div>

          {/* Event Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
            {/* Main Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Info className="mr-2" size={24} />
                  Description
                </h2>
                <p className="text-gray-300 leading-relaxed">{selectedEvent.description}</p>
              </div>

              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Requirements</h3>
                <ul className="space-y-2">
                  {selectedEvent.requirements.map((req, index) => (
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
                  {selectedEvent.tags.map((tag, index) => (
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
              {/* Event Details */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Event Details</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Calendar className="text-blue-400 mr-3" size={20} />
                    <div>
                      <div className="font-semibold">{selectedEvent.date}</div>
                      <div className="text-sm text-gray-400">{selectedEvent.time} - {selectedEvent.endTime}</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="text-blue-400 mr-3 mt-1" size={20} />
                    <div>
                      <div className="font-semibold">Location</div>
                      <div className="text-sm text-gray-400">{selectedEvent.location}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="text-blue-400 mr-3" size={20} />
                    <div>
                      <div className="font-semibold">Capacity</div>
                      <div className="text-sm text-gray-400">{selectedEvent.registered}/{selectedEvent.capacity} registered</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-xs font-bold">$</span>
                    </div>
                    <div>
                      <div className="font-semibold">Price</div>
                      <div className="text-sm text-gray-400">{selectedEvent.price}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div>
                    <div className="font-semibold text-blue-400">Organizer</div>
                    <div className="text-sm">{selectedEvent.organizer}</div>
                  </div>
                  <div className="flex items-center">
                    <User className="text-blue-400 mr-2" size={16} />
                    <span className="text-sm">{selectedEvent.contact.name}</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="text-blue-400 mr-2" size={16} />
                    <span className="text-sm">{selectedEvent.contact.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-blue-400 mr-2" size={16} />
                    <span className="text-sm">{selectedEvent.contact.phone}</span>
                  </div>
                </div>
              </div>

              {/* Registration Progress */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Registration Status</h3>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Registered</span>
                    <span>{selectedEvent.registered}/{selectedEvent.capacity}</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(selectedEvent.registered / selectedEvent.capacity) * 100}%` }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-400">
                    {selectedEvent.capacity - selectedEvent.registered} spots remaining
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                Register for Event
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">University Events</h1>
          <p className="text-xl text-blue-100 mb-8">Discover and participate in exciting campus activities</p>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilterCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  filterCategory === category 
                    ? 'bg-white text-blue-600' 
                    : 'bg-blue-500 hover:bg-blue-400 text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="text-blue-100">
            Showing {filteredEvents.length} events
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div 
                key={event.id}
                className="cursor-pointer"
                onClick={() => setSelectedEvent(event)}
              >
                <EventCardFull {...event} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;