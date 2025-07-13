import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, Filter, ChevronLeft, ChevronRight, Search, ArrowLeft, Info, Tag } from 'lucide-react';

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [viewMode, setViewMode] = useState('month'); // 'month', 'week', 'day'
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const agendaItems = [
    {
      id: 1,
      title: "Torneo de Ajedrez Universitario",
      date: "2025-07-15",
      time: "09:00",
      endTime: "17:00",
      location: "Aula Magna",
      category: "Sports",
      type: "Competencia",
      organizer: "Liga Deportiva ESEN",
      participants: 45,
      capacity: 64,
      description: "Torneo de ajedrez con participación de estudiantes de todas las carreras. Premios para los primeros 3 lugares.",
      priority: "high",
      tags: ["Ajedrez", "Competencia", "Deportes"]
    },
    {
      id: 2,
      title: "Conferencia: Inteligencia Artificial en el Futuro",
      date: "2025-07-16",
      time: "14:00",
      endTime: "16:00",
      location: "Auditorio Principal",
      category: "Academic",
      type: "Conferencia",
      organizer: "Asociación de Estudiantes de Ingeniería",
      participants: 120,
      capacity: 150,
      description: "Conferencia magistral sobre las aplicaciones futuras de la inteligencia artificial en diversas industrias.",
      priority: "high",
      tags: ["AI", "Tecnología", "Futuro", "Conferencia"]
    },
    {
      id: 3,
      title: "Taller de Emprendimiento",
      date: "2025-07-17",
      time: "10:00",
      endTime: "12:00",
      location: "Sala de Conferencias B",
      category: "Business",
      type: "Taller",
      organizer: "Asociación de Emprendedores",
      participants: 25,
      capacity: 30,
      description: "Taller práctico sobre desarrollo de ideas de negocio y plan de negocios.",
      priority: "medium",
      tags: ["Emprendimiento", "Negocios", "Startup"]
    },
    {
      id: 4,
      title: "Reunión de Consejo Estudiantil",
      date: "2025-07-18",
      time: "15:00",
      endTime: "17:00",
      location: "Sala de Juntas",
      category: "Administrative",
      type: "Reunión",
      organizer: "Consejo Estudiantil",
      participants: 15,
      capacity: 20,
      description: "Reunión mensual del consejo estudiantil para discutir temas académicos y estudiantiles.",
      priority: "medium",
      tags: ["Consejo", "Administrativo", "Estudiantes"]
    },
    {
      id: 5,
      title: "Festival Cultural de Primavera",
      date: "2025-07-19",
      time: "16:00",
      endTime: "22:00",
      location: "Plaza Central",
      category: "Cultural",
      type: "Festival",
      organizer: "Asociación Cultural ESEN",
      participants: 200,
      capacity: 300,
      description: "Festival cultural con presentaciones musicales, danza folclórica y exhibiciones artísticas.",
      priority: "high",
      tags: ["Cultura", "Música", "Danza", "Arte"]
    },
    {
      id: 6,
      title: "Sesión de Debate: Cambio Climático",
      date: "2025-07-20",
      time: "13:00",
      endTime: "15:00",
      location: "Aula 205",
      category: "Academic",
      type: "Debate",
      organizer: "Club de Debate Universitario",
      participants: 20,
      capacity: 25,
      description: "Sesión de debate sobre políticas ambientales y cambio climático global.",
      priority: "medium",
      tags: ["Debate", "Ambiente", "Clima", "Política"]
    },
    {
      id: 7,
      title: "Campaña de Donación de Sangre",
      date: "2025-07-21",
      time: "08:00",
      endTime: "16:00",
      location: "Clínica Universitaria",
      category: "Social",
      type: "Campaña",
      organizer: "Grupo de Voluntariado Social",
      participants: 80,
      capacity: 100,
      description: "Campaña de donación de sangre en colaboración con la Cruz Roja Salvadoreña.",
      priority: "high",
      tags: ["Donación", "Salud", "Voluntariado", "Social"]
    },
    {
      id: 8,
      title: "Examen Final de Cálculo II",
      date: "2025-07-22",
      time: "08:00",
      endTime: "10:00",
      location: "Aulas 101-105",
      category: "Academic",
      type: "Examen",
      organizer: "Departamento de Matemáticas",
      participants: 85,
      capacity: 100,
      description: "Examen final del curso de Cálculo II para estudiantes de ingeniería.",
      priority: "high",
      tags: ["Examen", "Matemáticas", "Cálculo", "Final"]
    },
    {
      id: 9,
      title: "Torneo de Voleibol de Playa",
      date: "2025-07-23",
      time: "15:00",
      endTime: "19:00",
      location: "Cancha de Voleibol",
      category: "Sports",
      type: "Torneo",
      organizer: "Liga Deportiva ESEN",
      participants: 32,
      capacity: 40,
      description: "Torneo de voleibol de playa por equipos mixtos. Inscripciones abiertas hasta el día del evento.",
      priority: "medium",
      tags: ["Voleibol", "Playa", "Equipos", "Deportes"]
    },
    {
      id: 10,
      title: "Presentación de Proyectos de Grado",
      date: "2025-07-24",
      time: "09:00",
      endTime: "17:00",
      location: "Múltiples Aulas",
      category: "Academic",
      type: "Presentación",
      organizer: "Coordinación Académica",
      participants: 40,
      capacity: 200,
      description: "Presentaciones finales de proyectos de graduación de estudiantes de último año.",
      priority: "high",
      tags: ["Graduación", "Proyectos", "Presentación", "Académico"]
    }
  ];

  const categories = ['All', 'Academic', 'Sports', 'Cultural', 'Business', 'Administrative', 'Social'];
  const types = ['All', 'Conferencia', 'Taller', 'Competencia', 'Reunión', 'Festival', 'Debate', 'Campaña', 'Examen', 'Torneo', 'Presentación'];

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
    return date.toLocaleDateString('es-ES', {
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
                Volver a Agenda
              </button>
            </div>
            <div className="text-xl font-bold">Agenda ESEN</div>
          </div>
        </nav>

        {/* Day Details */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">{formatDate(selectedDate)}</h1>
            <p className="text-gray-400">{selectedItems.length} evento(s) programado(s)</p>
          </div>

          {selectedItems.length === 0 ? (
            <div className="text-center py-12">
              <Calendar size={64} className="mx-auto text-gray-600 mb-4" />
              <p className="text-gray-400">No hay eventos programados para este día</p>
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
                      <span>{item.participants}/{item.capacity} participantes</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Organizado por: <span className="text-blue-400">{item.organizer}</span></span>
                      <div className="flex items-center space-x-2">
                        <div className="w-full bg-gray-700 rounded-full h-2">
                          <div 
                            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                            style={{ width: `${(item.participants / item.capacity) * 100}%` }}
                          ></div>
                        </div>
                        <span className="text-xs text-gray-400">
                          {Math.round((item.participants / item.capacity) * 100)}%
                        </span>
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
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">Agenda Universitaria</h1>
            <p className="text-xl text-blue-100">Mantente al día con todos los eventos y actividades del campus</p>
          </div>
          
          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Buscar eventos..."
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
            
            {/* View Mode Toggle */}
            <div className="flex justify-center gap-2">
              {['month', 'week', 'day'].map(mode => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                    viewMode === mode 
                      ? 'bg-white text-blue-600' 
                      : 'bg-blue-500 hover:bg-blue-400 text-white'
                  }`}
                >
                  {mode.charAt(0).toUpperCase() + mode.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calendar View */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">
              {currentDate.toLocaleDateString('es-ES', { month: 'long', year: 'numeric' })}
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
                Hoy
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
                {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
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
                        <div className="text-xs text-gray-400">+{dayItems.length - 2} más</div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Stats */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Total de Eventos</h3>
              <p className="text-3xl font-bold text-blue-400">{filteredItems.length}</p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Eventos de Alta Prioridad</h3>
              <p className="text-3xl font-bold text-red-400">
                {filteredItems.filter(item => item.priority === 'high').length}
              </p>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2">Participantes Totales</h3>
              <p className="text-3xl font-bold text-green-400">
                {filteredItems.reduce((total, item) => total + item.participants, 0)}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CalendarPage;