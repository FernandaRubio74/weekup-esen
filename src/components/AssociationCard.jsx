import React from 'react';
import { getCategoryColor, getLogoGradient } from '../data/associationUtils';

const AssociationCard = ({ association, onClick, showDescription = false }) => {
  return (
    <div
      className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer"
      onClick={() => onClick(association)}
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
      {showDescription && (
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{association.name}</h3>
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">{association.description}</p>
        </div>
      )}
    </div>
  );
};

export default AssociationCard;