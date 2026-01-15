// Testimonials Section Component
import TestimonialCard from "./TestimonialCard";

const TestimonialSection = () => {
  const testimonials = [
    { name: 'Maria', rating: 5 },
    { name: 'John', rating: 5 },
    { name: 'Sarah', rating: 5 },
    { name: 'David', rating: 5 }
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-r from-yellow-50 to-yellow-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;