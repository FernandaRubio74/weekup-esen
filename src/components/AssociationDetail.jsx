import React from 'react';
import { Info, Mail, Phone, MapPin, ExternalLink, Tag, ArrowLeft } from 'lucide-react';
import { getCategoryColor, getLogoGradient } from '../data/associationUtils';


const AssociationDetail = ({ association, onBack, backButtonText = "Back to Associations" }) => {
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
              {backButtonText}
            </button>
          </div>
        </div>
      </nav>

      {/* Association Details */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className={`h-64 bg-gradient-to-r ${getLogoGradient(association.logo)} rounded-lg mb-8 flex items-center justify-center relative overflow-hidden`}>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="relative z-10 text-center">
            <div className="text-6xl font-bold mb-2">{association.acronym}</div>

            <div className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${getCategoryColor(association.category)}`}>
              {association.category}
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
                Description
              </h2>
              <p className="text-gray-300 leading-relaxed">{association.description}</p>
            </div>

            {/* Objectives */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Objectives</h3>
              <ul className="space-y-2">
                {association.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 mt-2"></div>
                    {objective}
                  </li>
                ))}
              </ul>
            </div>

            {/* Activities */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Activities</h3>
              <ul className="space-y-2">
                {association.activities.map((activity, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2"></div>
                    {activity}
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Membership Requirements</h3>
              <ul className="space-y-2">
                {association.requirements.map((req, index) => (
                  <li key={index} className="flex items-start text-gray-300">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mr-3 mt-2"></div>
                    {req}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {association.tags.map((tag, index) => (
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
            {/* Contact Info */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Mail className="text-blue-400 mr-3" size={16} />
                  <span className="text-sm">{association.email}</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-blue-400 mr-3" size={16} />
                  <span className="text-sm">{association.phone}</span>
                </div>
                {association.office && (
                  <div className="flex items-start">
                    <MapPin className="text-blue-400 mr-3 mt-1" size={16} />
                    <span className="text-sm">{association.office}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-800 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Social Media</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <ExternalLink className="text-blue-400 mr-3" size={16} />
                  <span className="text-sm">Facebook: {association.socialMedia.facebook}</span>
                </div>
                <div className="flex items-center">
                  <ExternalLink className="text-blue-400 mr-3" size={16} />
                  <span className="text-sm">Instagram: {association.socialMedia.instagram}</span>
                </div>
                <div className="flex items-center">
                  <ExternalLink className="text-blue-400 mr-3" size={16} />
                  <span className="text-sm">Twitter: {association.socialMedia.twitter}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssociationDetail;