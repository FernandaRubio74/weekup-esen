import React from 'react';
import { Calendar, Users, MapPin, Clock } from 'lucide-react';

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
  // Si el valor ya incluye la extensión, úsalo tal cual
  if (imageType.endsWith('.jpg') || imageType.endsWith('.png')) {
    return `/${imageType}`;
  }
  // Si no, asume .jpg por defecto
  return `/${imageType}.jpg`;
};

const EventCardFull = ({
  title, 
  date, 
  time, 
  endTime, 
  location, 
  category, 
  organizer, 
  registered, 
  capacity, 
  price, 
  image,
  onClick
}) => {
  const spotsRemaining = capacity - registered;
  const isFullyBooked = registered >= capacity;

  return (
    <div 
      className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
      onClick={onClick}
    >
      {/* Event Image/Header */}
      <div className="h-48 relative overflow-hidden">
        <img
          src={getEventImage(image)}
          alt={title}
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(category)}`}>
            {category}
          </span>
        </div>

        {/* Capacity Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
            isFullyBooked 
              ? 'bg-red-500 text-white' 
              : spotsRemaining <= 5 
                ? 'bg-yellow-500 text-black' 
                : 'bg-green-500 text-white'
          }`}>
            {isFullyBooked ? 'Full' : `${spotsRemaining} spots`}
          </span>
        </div>

        {/* Title and Organizer */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-bold text-lg mb-1 line-clamp-2">{title}</h3>
          <div className="text-sm opacity-90">By {organizer}</div>
        </div>
      </div>

      {/* Event Details */}
      <div className="p-4">
        {/* Date and Price */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center text-sm text-gray-300">
            <Calendar size={16} className="mr-2" />
            {date}
          </div>
          <div className="text-sm font-semibold text-green-400">
            {price}
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center text-sm text-gray-300 mb-3">
          <MapPin size={16} className="mr-2" />
          <span className="truncate">{location}</span>
        </div>

        {/* Action Area */}
        <div className="flex items-center justify-between">
          <div className="flex items-center text-sm text-gray-400">
            <Users size={16} className="mr-1" />
            <span>{registered} registered</span>
          </div>
          <div className="text-blue-400 hover:text-blue-300 transition-colors">
            <span className="text-sm">View Details →</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCardFull;