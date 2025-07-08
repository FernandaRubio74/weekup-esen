import React, { useState } from 'react';
import { Calendar, Users, MapPin, Clock, ChevronDown, Menu, X, ArrowLeft, User, Phone, Mail, Tag, Info } from 'lucide-react';

const EventsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');

  const events = [
    {
      id: 1,
      title: "Chess Tournament 2025",
      date: "2025-07-15",
      time: "09:00",
      endTime: "17:00",
      location: "Main Hall - Building A",
      category: "Sports",
      description: "Annual chess tournament open to all students and faculty. Compete for the university championship title and win exciting prizes. Registration is required by July 10th.",
      organizer: "Sports Committee",
      contact: {
        name: "Maria Rodriguez",
        email: "maria.rodriguez@esen.edu.sv",
        phone: "+503 1234-5678"
      },
      capacity: 64,
      registered: 42,
      requirements: ["Student ID", "Registration form", "Chess set (optional)"],
      image: "chess-tournament",
      price: "Free",
      tags: ["Tournament", "Chess", "Competition", "Students"]
    },
    {
      id: 2,
      title: "Lost Items Inventory Workshop",
      date: "2025-07-20",
      time: "14:00",
      endTime: "16:00",
      location: "Student Services Office",
      category: "Administrative",
      description: "Workshop on how to properly report and claim lost items on campus. Learn about the new digital system and procedures for handling lost and found items.",
      organizer: "Student Services",
      contact: {
        name: "Carlos Mendez",
        email: "carlos.mendez@esen.edu.sv",
        phone: "+503 1234-5679"
      },
      capacity: 30,
      registered: 18,
      requirements: ["Student ID"],
      image: "lost-items",
      price: "Free",
      tags: ["Workshop", "Administrative", "Lost Items", "Procedures"]
    },
    {
      id: 3,
      title: "Beach Conference 2025: Marine Biology",
      date: "2025-07-25",
      time: "10:00",
      endTime: "18:00",
      location: "Coastal Research Center",
      category: "Academic",
      description: "International conference on marine biology and coastal ecosystem conservation. Features keynote speakers, research presentations, and networking opportunities with marine biologists from around the world.",
      organizer: "Biology Department",
      contact: {
        name: "Dr. Ana Flores",
        email: "ana.flores@esen.edu.sv",
        phone: "+503 1234-5680"
      },
      capacity: 150,
      registered: 89,
      requirements: ["Registration fee", "Academic credentials", "Lunch pre-order"],
      image: "marine-conference",
      price: "$25",
      tags: ["Conference", "Marine Biology", "Research", "International"]
    },
    {
      id: 4,
      title: "San Diego Beach Volleyball Tournament",
      date: "2025-08-01",
      time: "16:00",
      endTime: "20:00",
      location: "San Diego Beach Volleyball Court",
      category: "Sports",
      description: "Inter-university beach volleyball tournament. Teams of 4 players compete in a fun and competitive environment. Prizes for top 3 teams and refreshments provided.",
      organizer: "Athletics Department",
      contact: {
        name: "Roberto Silva",
        email: "roberto.silva@esen.edu.sv",
        phone: "+503 1234-5681"
      },
      capacity: 80,
      registered: 56,
      requirements: ["Team registration", "Sports insurance", "Beach volleyball experience"],
      image: "beach-volleyball",
      price: "$10 per team",
      tags: ["Volleyball", "Beach", "Tournament", "Team Sport"]
    },
    {
      id: 5,
      title: "Tech Innovation Summit",
      date: "2025-08-05",
      time: "09:00",
      endTime: "17:00",
      location: "Innovation Hub - Building C",
      category: "Technology",
      description: "Annual technology summit featuring the latest innovations in AI, blockchain, and software development. Includes workshops, startup pitches, and networking sessions.",
      organizer: "Computer Science Department",
      contact: {
        name: "Dr. Luis Martinez",
        email: "luis.martinez@esen.edu.sv",
        phone: "+503 1234-5682"
      },
      capacity: 200,
      registered: 145,
      requirements: ["Laptop", "Registration", "Technical background preferred"],
      image: "tech-summit",
      price: "$15",
      tags: ["Technology", "Innovation", "AI", "Blockchain", "Startups"]
    },
    {
      id: 6,
      title: "Cultural Arts Festival",
      date: "2025-08-10",
      time: "18:00",
      endTime: "22:00",
      location: "University Amphitheater",
      category: "Cultural",
      description: "Celebrate diversity through music, dance, and art performances by students from different cultural backgrounds. Food stalls representing various cuisines will be available.",
      organizer: "Cultural Affairs Office",
      contact: {
        name: "Sofia Ramirez",
        email: "sofia.ramirez@esen.edu.sv",
        phone: "+503 1234-5683"
      },
      capacity: 500,
      registered: 234,
      requirements: ["None"],
      image: "cultural-festival",
      price: "Free",
      tags: ["Culture", "Arts", "Music", "Dance", "Food", "Diversity"]
    }
  ];

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
                className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                onClick={() => setSelectedEvent(event)}
              >
                <div className={`h-48 bg-gradient-to-br ${getEventImage(event.image)} relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="font-bold text-lg mb-1">{event.title}</h3>
                    <div className="text-sm opacity-90">By {event.organizer}</div>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-sm text-gray-300">
                      <Calendar size={16} className="mr-2" />
                      {event.date}
                    </div>
                    <div className="text-sm font-semibold text-green-400">
                      {event.price}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-300 mb-2">
                    <Clock size={16} className="mr-2" />
                    {event.time} - {event.endTime}
                  </div>
                  <div className="flex items-center text-sm text-gray-300 mb-3">
                    <MapPin size={16} className="mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-300">
                      <Users size={16} className="mr-2" />
                      {event.registered}/{event.capacity}
                    </div>
                    <div className="text-blue-400 hover:text-blue-300 transition-colors">
                      <span className="text-sm">View Details →</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventsPage;