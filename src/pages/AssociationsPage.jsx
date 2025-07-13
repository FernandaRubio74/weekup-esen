import React, { useState } from 'react';
import { Users, Mail, Phone, MapPin, ArrowLeft, Info, Calendar, User, ExternalLink, Tag } from 'lucide-react';
import associations from '../data/associationsData';

const AssociationsPage = () => {
  const [selectedAssociation, setSelectedAssociation] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Academic', 'Cultural', 'Sports', 'Business', 'Social'];

  const filteredAssociations = filterCategory === 'All' 
    ? associations 
    : associations.filter(assoc => assoc.category === filterCategory);

  const getCategoryColor = (category) => {
    const colors = {
      'Academic': 'bg-blue-500',
      'Cultural': 'bg-pink-500',
      'Sports': 'bg-green-500',
      'Business': 'bg-purple-500',
      'Social': 'bg-orange-500'
    };
    return colors[category] || 'bg-gray-500';
  };

  const getLogoGradient = (logoType) => {
    const gradients = {
      'engineering': 'from-blue-500 to-indigo-600',
      'debate': 'from-purple-500 to-pink-600',
      'cultural': 'from-pink-500 to-rose-600',
      'sports': 'from-green-500 to-emerald-600',
      'business': 'from-purple-500 to-violet-600',
      'volunteer': 'from-orange-500 to-red-600'
    };
    return gradients[logoType] || 'from-gray-500 to-gray-600';
  };

  if (selectedAssociation) {
    return (
      <div className="min-h-screen bg-gray-900 text-white">
        {/* Navigation */}
        <nav className="bg-gray-800 px-4 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button 
                onClick={() => setSelectedAssociation(null)}
                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
              >
                <ArrowLeft size={20} className="mr-2" />
                Volver a Asociaciones
              </button>
            </div>
            <div className="text-xl font-bold">Asociaciones ESEN</div>
          </div>
        </nav>

        {/* Association Details */}
        <div className="max-w-6xl mx-auto px-4 py-8">
          {/* Header */}
          <div className={`h-64 bg-gradient-to-r ${getLogoGradient(selectedAssociation.logo)} rounded-lg mb-8 flex items-center justify-center relative overflow-hidden`}>
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="relative z-10 text-center">
              <div className="text-6xl font-bold mb-2">{selectedAssociation.acronym}</div>
              <h1 className="text-3xl font-bold mb-4">{selectedAssociation.name}</h1>
              <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${getCategoryColor(selectedAssociation.category)}`}>
                {selectedAssociation.category}
              </div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Description */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Info className="mr-2" size={24} />
                  Descripción
                </h2>
                <p className="text-gray-300 leading-relaxed">{selectedAssociation.description}</p>
              </div>

              {/* Objectives */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Objetivos</h3>
                <ul className="space-y-2">
                  {selectedAssociation.objectives.map((objective, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></div>
                      {objective}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Activities */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Actividades</h3>
                <ul className="space-y-2">
                  {selectedAssociation.activities.map((activity, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Requisitos de Membresía</h3>
                <ul className="space-y-2">
                  {selectedAssociation.requirements.map((req, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></div>
                      {req}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Etiquetas</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedAssociation.tags.map((tag, index) => (
                    <span key={index} className="bg-gray-700 text-blue-400 px-3 py-1 rounded-full text-sm flex items-center">
                      <Tag size={14} className="mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Basic Info */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Información Básica</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <User className="text-blue-400 mr-3" size={20} />
                    <div>
                      <div className="font-semibold">Presidente</div>
                      <div className="text-sm text-gray-400">{selectedAssociation.president}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="text-blue-400 mr-3" size={20} />
                    <div>
                      <div className="font-semibold">Miembros</div>
                      <div className="text-sm text-gray-400">{selectedAssociation.members} estudiantes</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="text-blue-400 mr-3" size={20} />
                    <div>
                      <div className="font-semibold">Fundada</div>
                      <div className="text-sm text-gray-400">{selectedAssociation.founded}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Contacto</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="text-blue-400 mr-3" size={16} />
                    <span className="text-sm">{selectedAssociation.email}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="text-blue-400 mr-3" size={16} />
                    <span className="text-sm">{selectedAssociation.phone}</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="text-blue-400 mr-3 mt-1" size={16} />
                    <span className="text-sm">{selectedAssociation.office}</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Redes Sociales</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <ExternalLink className="text-blue-400 mr-3" size={16} />
                    <span className="text-sm">Facebook: {selectedAssociation.socialMedia.facebook}</span>
                  </div>
                  <div className="flex items-center">
                    <ExternalLink className="text-blue-400 mr-3" size={16} />
                    <span className="text-sm">Instagram: {selectedAssociation.socialMedia.instagram}</span>
                  </div>
                  <div className="flex items-center">
                    <ExternalLink className="text-blue-400 mr-3" size={16} />
                    <span className="text-sm">Twitter: {selectedAssociation.socialMedia.twitter}</span>
                  </div>
                </div>
              </div>

              {/* Join Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-semibold transition-colors">
                Unirse a la Asociación
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
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Asociaciones Estudiantiles</h1>
          <p className="text-xl text-blue-100 mb-8">Únete a comunidades que comparten tus intereses y pasiones</p>
          
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
            Mostrando {filteredAssociations.length} asociaciones
          </div>
        </div>
      </section>

      {/* Associations Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAssociations.map((association) => (
              <div 
                key={association.id}
                className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedAssociation(association)}
              >
                {/* Card Header */}
                <div className={`h-32 bg-gradient-to-r ${getLogoGradient(association.logo)} flex items-center justify-center`}>
                  <div className="text-center">
                    <div className="text-3xl font-bold mb-1">{association.acronym}</div>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(association.category)}`}>
                      {association.category}
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{association.name}</h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">{association.description}</p>
                  
                  {/* Stats */}
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Users size={16} className="mr-1" />
                      {association.members} miembros
                    </div>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      Desde {association.founded}
                    </div>
                  </div>

                  {/* President */}
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="text-gray-400">Presidente: </span>
                      <span className="text-blue-400">{association.president}</span>
                    </div>
                    <div className="text-blue-400 hover:text-blue-300">
                      <Info size={16} />
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

export default AssociationsPage;