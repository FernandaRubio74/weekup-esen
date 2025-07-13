import Glide from '@glidejs/glide';
import React, { useEffect, useState } from 'react';
import EventCardFull from './EventCardFull';
import EventCardDetail from './EventCardDetail';
import events from '../data/eventsData';
import { useNavigate } from 'react-router-dom';

const Events = () => {
  const navigate = useNavigate();
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const slider = new Glide(".glide-01", {
      type: "carousel",
      perView: 5,
      autoplay: 3000,
      animationDuration: 700,
      gap: 10,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: { perView: 4 },
        768: { perView: 3 },
        640: { perView: 2 },
        480: { perView: 1 },
      },
    }).mount();

    return () => {
      slider.destroy();
    };
  }, []);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const handleEventUpdate = (updatedEvent) => {
    setSelectedEvent(updatedEvent);
  };

  const handleNavigateToDetail = (eventId) => {
    navigate(`/event/${eventId}`);
  };

  return (
    <>
      {/* Modal para vista detallada */}
      {selectedEvent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 p-4">
          <div className="bg-gray-900 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative">
            <button
              className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white bg-gray-800 rounded-full p-2 transition-colors"
              onClick={handleCloseModal}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <EventCardDetail 
              event={selectedEvent}
              onBack={handleCloseModal}
              onEventUpdate={handleEventUpdate}
            />
          </div>
        </div>
      )}

      {/* Carousel Component */}
      <div className="glide-01 relative w-full mt-5">
        {/* Slides */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            {events.map((event) => (
              <li key={event.id}>
                <EventCardFull 
                  {...event} 
                  onClick={() => handleEventClick(event)}
                />
              </li>
            ))}
          </ul>
        </div>

        {/* Controls */}
        <div
          className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4"
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="white"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Optional: Quick action buttons */}
      <div className="flex justify-center mt-6">
        <button
          onClick={() => navigate('/EventsPage')}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
        >
          View All Events
        </button>
      </div>
    </>
  );
};

export default Events;