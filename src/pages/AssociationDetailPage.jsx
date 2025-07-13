import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import associations from '../data/associationsData';
import AssociationDetail from '../components/AssociationDetail';


export default function AssociationDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const association = associations.find(a => String(a.id) === id);

  const handleBack = () => {
    navigate(-1);
  };

  if (!association) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Association not found</h1>
          <button 
            onClick={handleBack}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <AssociationDetail
      association={association} 
      onBack={handleBack}
      backButtonText="Back to Associations"
    />
  );
}