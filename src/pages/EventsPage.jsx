import React, { useState } from 'react';
import EventCardFull from '../components/EventCardFull';
import EventCardDetail from '../components/EventCardDetail';
import events from '../data/eventsData';

const EventsPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Sports', 'Academic', 'Administrative', 'Technology', 'Cultural'];

  const filteredEvents = filterCategory === 'All' 
    ? events 
    : events.filter(event => event.category === filterCategory);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleBackToEvents = () => {
    setSelectedEvent(null);
  };

  const handleEventUpdate = (updatedEvent) => {
    setSelectedEvent(updatedEvent);
  };

  // Si hay un evento seleccionado, mostrar el detalle
  if (selectedEvent) {
    return (
      <EventCardDetail 
        event={selectedEvent}
        onBack={handleBackToEvents}
        onEventUpdate={handleEventUpdate}
      />
    );
  }

  // Vista principal de eventos
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <section className="bg-gradient-to-b from-indigo-800 via-violet-950 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Events</h1>
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
                onClick={() => handleEventClick(event)}
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