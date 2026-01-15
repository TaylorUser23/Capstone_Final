// Specials Section Component
import SpecialCard from './SpecialCard';
import brushC from '../assets/food/bruschetta.jpeg';
import greekS from '../assets/food/greek-salad.webp';
import lemonD from '../assets/food/lemon-dessert.webp';

const SpecialsSection = ({ onOrderClick }) => {
  const specials = [
    {
      title: 'Greek Salad',
      description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
      price: '$12.99',
      image: greekS
    },
    {
      title: 'Bruschetta',
      description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
      price: '$7.99',
      image: brushC
    },
    {
      title: 'Lemon Dessert',
      description: 'This comes straight from grandma\'s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
      price: '$6.99',
      image: lemonD
    }
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-bold text-gray-800">Specials</h2>
          <button 
            onClick={onOrderClick}
            className="bg-green-800 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors font-medium"
          >
            Order Online
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specials.map((special, index) => (
            <SpecialCard key={index} {...special} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialsSection;