export const getCategoryColor = (category) => {
  const colors = {
    'Academic': 'bg-blue-500',
    'Cultural': 'bg-pink-500',
    'Leadership': 'bg-green-500',
    'Business': 'bg-purple-500',
    'Social': 'bg-orange-500'
  };
  return colors[category] || 'bg-gray-500';
};

export const getLogoGradient = (logoType) => {
  const gradients = {
    'hope': 'from-orange-500 to-red-600',
    'debate': 'from-purple-500 to-pink-600',
    'cultural': 'from-pink-500 to-rose-600',
    'sports': 'from-green-500 to-emerald-600',
    'business': 'from-purple-500 to-violet-600',
    'volunteer': 'from-blue-500 to-indigo-600'
  };
  return gradients[logoType] || 'from-gray-500 to-gray-600';
};