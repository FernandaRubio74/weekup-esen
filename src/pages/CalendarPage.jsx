import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Filter, ChevronLeft, ChevronRight, Search, ArrowLeft, Info, Tag } from 'lucide-react';
import events from '../data/eventsData';

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [viewMode, setViewMode] = useState('month'); // 'month', 'week', 'day'
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const agendaItems = events;

  const categories = ['All', 'Academic', 'Sports', 'Cultural', 'Business', 'Administrative', 'Social'];

  const filteredItems = agendaItems.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.organizer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'All' || item.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  const getCategoryColor = (category) => {
    const colors = {
      'Academic': 'bg-blue-500',
      'Sports': 'bg-green-500',
      'Cultural': 'bg-pink-500',
      'Business': 'bg-purple-500',
      'Administrative': 'bg-gray-500',
      'Social': 'bg-orange-500'
    };
    return colors[category] || 'bg-gray-500';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      'high': 'border-red-500',
      'medium': 'border-yellow-500',
      'low': 'border-green-500'
    };
    return colors[priority] || 'border-gray-500';
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-EN', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getItemsForDate = (date) => {
    return filteredItems.filter(item => item.date === date);
  };

  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();
    
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day);
    }
    
    return days;
  };

  const navigateMonth = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  const getWeekDays = () => {
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
    
    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(startOfWeek);
      day.setDate(startOfWeek.getDate() + i);
      days.push(day);
    }
    return days;
  };

  if (selectedDate) {
    const selectedItems = getItemsForDate(selectedDate);
    
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Navigation */}
        <nav className="bg-gray-800 px-4 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setSelectedDate(null)}
                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Go back
              </button>
            </div>
          </div>
        </nav>

        {/* Day Details */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{formatDate(selectedDate)}</h1>
            <p className="text-gray-400">{selectedItems.length} event(s) scheduled</p>
          </div>

          {selectedItems.length === 0 ? (
            <div className="text-center py-12">
              <Calendar size={64} className="mx-auto text-gray-600 mb-4" />
              <p className="text-gray-400">No events scheduled for this day</p>
            </div>
          ) : (
            <div className="space-y-6">
              {selectedItems.map((item) => (
                <div key={item.id} className={`bg-gray-800 rounded-lg p-6 border-l-4 ${getPriorityColor(item.priority)}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h3 className="text-xl font-bold mr-3">{item.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(item.category)}`}>
                          {item.category}
                        </span>
                        <span className="ml-2 px-2 py-1 bg-gray-700 text-gray-300 rounded text-xs">
                          {item.type}
                        </span>
                      </div>
                      <p className="text-gray-400 mb-3">{item.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {item.tags.map((tag, index) => (
                          <span key={index} className="bg-gray-700 text-blue-400 px-2 py-1 rounded text-xs flex items-center">
                            <Tag size={12} className="mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="flex items-center">
                      <Clock className="text-blue-400 mr-2" size={16} />
                      <span>{item.time} - {item.endTime}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="text-blue-400 mr-2" size={16} />
                      <span>{item.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="text-blue-400 mr-2" size={16} />
                      <span>{item.participants}/{item.capacity} participants</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Organize by: <span className="text-blue-400">{item.organizer}</span></span>
                      <div className="flex items-center space-x-2">
                        <div className="w-full bg-gray-700 rounded-full h-2">
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <section className="bg-[url(/public/banner-end.jpg)] bg-cover py-58 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">ESEN Calendar</h1>
            <p className="text-xl text-white">Stay updated with all campus events and activities!</p>
          </div>
          
          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            
          </div>
        </div>
      </section>

      {/* Calendar View */}
      <section className="py-8 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">
              {currentDate.toLocaleDateString('en-EN', { month: 'long', year: 'numeric' })}
            </h2>
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigateMonth(-1)}
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => setCurrentDate(new Date())}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition-colors"
              >
                Today
              </button>
              <button
                onClick={() => navigateMonth(1)}
                className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {viewMode === 'month' && (
            <div className="bg-gray-800 rounded-lg p-6">
              {/* Days of week header */}
              <div className="grid grid-cols-7 gap-1 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'].map(day => (
                  <div key={day} className="text-center text-sm font-semibold text-gray-400 py-2">
                    {day}
                  </div>
                ))}
              </div>
              
              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-1">
                {getDaysInMonth(currentDate).map((day, index) => {
                  if (day === null) {
                    return <div key={index} className="h-20"></div>;
                  }
                  
                  const dateString = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                  const dayItems = getItemsForDate(dateString);
                  const isToday = new Date().toDateString() === new Date(dateString).toDateString();
                  
                  return (
                    <div
                      key={day}
                      className={`h-20 border border-gray-700 rounded-lg p-2 cursor-pointer hover:bg-gray-700 transition-colors ${
                        isToday ? 'bg-blue-900 border-blue-500' : 'bg-gray-800'
                      }`}
                      onClick={() => setSelectedDate(dateString)}
                    >
                      <div className="text-sm font-semibold mb-1">{day}</div>
                      {dayItems.slice(0, 2).map((item, idx) => (
                        <div key={idx} className={`text-xs p-1 rounded mb-1 ${getCategoryColor(item.category)}`}>
                          {item.title.substring(0, 15)}...
                        </div>
                      ))}
                      {dayItems.length > 2 && (
                        <div className="text-xs text-gray-400">+{dayItems.length - 2} more</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        </div>
      </section>
    </div>
  );
};

export default CalendarPage;