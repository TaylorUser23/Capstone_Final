// Testimonial Card Component
const TestimonialCard = ({ name, rating }) => {
  return (
    <article className="bg-pink-50 rounded-lg p-6 shadow-md">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-gray-300 rounded-full mr-4 flex items-center justify-center">
          <span className="text-xs text-gray-600">Photo</span>
        </div>
        <div>
          <h4 className="font-bold text-gray-800">{name}</h4>
          <div className="flex text-yellow-500">
            {[...Array(5)].map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
        </div>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">
        "Absolutely wonderful! The food was fresh, delicious, and beautifully presented."
      </p>
    </article>
  );
};

export default TestimonialCard;