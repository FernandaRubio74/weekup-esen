import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import associations from '../data/associationsData';
import AssociationCard from './AssociationCard';
import AssociationDetail from './AssociationDetail';


export default function Associations({ limit }) {
  const navigate = useNavigate();
  const [selectedAssociation, setSelectedAssociation] = useState(null);
  const shownAssociations = limit ? associations.slice(0, limit) : associations;

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
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-8">Student Associations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shownAssociations.map((association) => (
            <AssociationCard
              key={association.id}
              association={association}
              onClick={handleAssociationClick}
              showDescription={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}