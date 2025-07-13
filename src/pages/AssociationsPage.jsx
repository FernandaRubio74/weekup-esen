import React, { useState } from 'react';
import associations from '../data/associationsData';
import AssociationDetail from '../components/AssociationDetail';
import AssociationCard from '../components/AssociationCard';


const AssociationsPage = () => {
  const [selectedAssociation, setSelectedAssociation] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Academic', 'Cultural', 'Sports', 'Business', 'Social'];

  const filteredAssociations = filterCategory === 'All' 
    ? associations 
    : associations.filter(assoc => assoc.category === filterCategory);

  const handleAssociationClick = (association) => {
    setSelectedAssociation(association);
  };

  const handleBack = () => {
    setSelectedAssociation(null);
  };

  if (selectedAssociation) {
    return (
      <AssociationDetail
        association={selectedAssociation} 
        onBack={handleBack}
        backButtonText="Back to Associations"
      />
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <section className="bg-gradient-to-b from-blue-900 via-violet-950 py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Student Associations</h1>
          <p className="text-xl text-blue-100 mb-8">Join communities that share your interests and passions</p>
          
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
            Showing {filteredAssociations.length} associations
          </div>
        </div>
      </section>

      {/* Associations Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAssociations.map((association) => (
              <AssociationCard
                key={association.id}
                association={association}
                onClick={handleAssociationClick}
                showDescription={true}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AssociationsPage;