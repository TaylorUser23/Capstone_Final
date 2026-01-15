// Hero Section Component
import dishPic from '../assets/food/food5.jpeg';

const HeroSection = ({ onReserveClick }) => {
  return (
    <section className="pt-32 pb-16 px-6 bg-gradient-to-r from-yellow-100 to-yellow-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex-1 pr-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">Little Lemon</h1>
            <h2 className="text-2xl text-gray-600 mb-6">Chicago</h2>
            <p className="text-gray-700 mb-8 leading-relaxed max-w-md">
              Little Lemon is a family-owned Mediterranean restaurant known for its warm, inviting atmosphere and flavorful, traditional dishes with a modern twist. Based in Chicago, Illinois, it was started and is run by two Italian brothers, Mario and Adrian, who built the restaurant around cherished family recipes and their passion for Mediterranean cuisine.            </p>
            <button 
              onClick={onReserveClick}
              className="bg-green-800 text-white px-8 py-3 rounded hover:bg-green-700 transition-colors font-medium"
            >
              Reserve a Table
            </button>
          </div>
          <div className="flex-1">
            <img 
              src={dishPic} 
              alt="dish picture" 
              className="w-full h-96 rounded-lg object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;