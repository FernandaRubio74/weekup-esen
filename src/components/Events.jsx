{/**refer: https://wind-ui.com/components/carousels/  & para usar glide: https://glidejs.com/docs/options/*/}

import Glide from '@glidejs/glide'
import React, { useEffect, useState } from 'react'
import EventCardFull from './EventCardFull'
import events from '../data/eventsData'
import { useNavigate } from 'react-router-dom'

const Events = () => {
  const navigate = useNavigate()
  const [selectedEvent, setSelectedEvent] = useState(null)

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
        670: { perView: 3 },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  // Puedes reutilizar el mismo modal/detalle de EventsPage aquí
  if (selectedEvent) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
        <div className="bg-white rounded-lg p-6 max-w-lg w-full relative text-gray-900">
          <button
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            onClick={() => setSelectedEvent(null)}
          >
            ✕
          </button>
          <EventCardFull {...selectedEvent} />
          {/* Aquí puedes agregar más detalles si quieres */}
          <div className="mt-4">
            <p className="font-semibold">Descripción:</p>
            <p>{selectedEvent.description}</p>
            {/* Agrega más campos si lo necesitas */}
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {/*<!-- Component: Carousel with controls inside --> */}
      <div className="glide-01 relative w-full">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            {events.map((event, idx) => (
              <li
                key={idx}
                onClick={() => navigate(`/event/${event.id}`)}
                className="cursor-pointer"
              >
                <EventCardFull {...event} />
              </li>
            ))}
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="absolute left-0 top-1/2 flex h-0 w-full items-center justify-between px-4 "
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
      {/*<!-- End Carousel with controls inside --> */}
    </>
  )
}

export default Events
