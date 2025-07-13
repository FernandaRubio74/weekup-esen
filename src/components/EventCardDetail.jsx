import React, { useState } from 'react';
import { Calendar, Users, MapPin, Clock, ArrowLeft, User, Phone, Mail, Tag, Info } from 'lucide-react';

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
  if (imageType.endsWith('.jpg') || imageType.endsWith('.png')) {
    return `/${imageType}`;
  }
  return `/${imageType}.jpg`;
};

const EventCardDetail = ({ event, onBack, onEventUpdate }) => {
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    if (event && event.registered < event.capacity && registerName && registerEmail) {
      const updatedEvent = {
        ...event,
        registered: event.registered + 1
      };
      onEventUpdate(updatedEvent);
      setRegisterSuccess(true);
      setRegisterName('');
      setRegisterEmail('');
      setTimeout(() => setRegisterSuccess(false), 2500);
    }
  };

  if (!event) return <div className="text-white p-8">Event not found</div>;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-800 px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={onBack}
              className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Events
            </button>
          </div>
        </div>
      </nav>

      {/* Event Details */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Event Header */}
        <div className={`h-64 bg-gradient-to-r ${getEventImage(event.image)} rounded-lg mb-8 flex items-center justify-center relative overflow-hidden`}>
          <div className="absolute inset-0 bg-opacity-40"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-4xl font-bold mb-4">{event.title}</h1>
            <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${getCategoryColor(event.category)}`}>
              {event.category}
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
            {/* Event Details */}
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

            {/* Contact Info */}
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

            {/* Registration Progress */}
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

            {/* Registration Form */}
            {event.registered >= event.capacity ? (
              <div className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold text-center">
                Event Full! Registration is closed.
              </div>
            ) : (
              <form onSubmit={handleRegister} className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={registerName}
                  onChange={(e) => setRegisterName(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                  className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
                  disabled={event.registered >= event.capacity}
                >
                  Register for Event
                </button>
                {registerSuccess && (
                  <div className="text-green-400 text-center font-semibold mt-2">
                    Registration successful!
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCardDetail;