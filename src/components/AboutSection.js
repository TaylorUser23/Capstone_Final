// About Section Component
import abtImg from '../assets/food/food1.png';
import abtImg2 from '../assets/food/food5.jpeg';

const AboutSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex-1 pr-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Little Lemon</h2>
            <h3 className="text-2xl text-gray-600 mb-6">Chicago</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Little Lemon is a family-owned Mediterranean restaurant known for its warm, inviting atmosphere and flavorful, traditional dishes with a modern twist. Based in Chicago, Illinois, it was started and is run by two Italian brothers, Mario and Adrian, who built the restaurant around cherished family recipes and their passion for Mediterranean cuisine.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The restaurant's ambiance is cozy and laid-back, with moderate prices that make it a welcoming spot for meals any time of day, whether you're there for a casual dinner or a special occasion.
            </p>
          </div>
          <div className="flex-1 relative">
            <div className="relative">
              <img 
                src={abtImg} 
                alt="Mediterranean cuisine at Little Lemon" 
                className="w-64 h-80 rounded-lg object-cover shadow-lg"
              />
              <img 
                src={abtImg2} 
                alt="Fresh ingredients and dishes" 
                className="absolute top-12 right-0 w-64 h-80 rounded-lg object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;