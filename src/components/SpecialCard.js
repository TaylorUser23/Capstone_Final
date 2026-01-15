import React from 'react';

// Special Card Component
const SpecialCard = ({ title, description, price, image }) => {
  return (
    <article className="bg-yellow-50 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <img 
        src={image} 
        alt={title} 
        className="h-48 w-full object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <button className="text-green-700 font-medium hover:text-green-800 transition-colors">
            Order Here →
          </button>
          <span className="text-gray-800 font-semibold">{price}</span>
        </div>
      </div>
    </article>
  );
};

export default SpecialCard;