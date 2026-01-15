// Hero Section Component
const HeroSection = ({ onReserveClick }) => {
  return (
    <section className="pt-32 pb-16 px-6 bg-gradient-to-r from-yellow-100 to-yellow-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex-1 pr-12">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">Little Lemon</h1>
            <h2 className="text-2xl text-gray-600 mb-6">Chicago</h2>
            <p className="text-gray-700 mb-8 leading-relaxed max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <button 
              onClick={onReserveClick}
              className="bg-green-800 text-white px-8 py-3 rounded hover:bg-green-700 transition-colors font-medium"
            >
              Reserve a Table
            </button>
          </div>
          <div className="flex-1">
            <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center">
              {/* Hero image placeholder */}
              <span className="text-gray-500">Hero Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;