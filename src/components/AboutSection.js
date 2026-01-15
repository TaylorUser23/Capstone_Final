// About Section Component
const AboutSection = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex-1 pr-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Little Lemon</h2>
            <h3 className="text-2xl text-gray-600 mb-6">Chicago</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
          </div>
          <div className="flex-1 relative">
            <div className="relative">
              <div className="w-64 h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">About Image 1</span>
              </div>
              <div className="absolute top-12 right-0 w-64 h-80 bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-500">About Image 2</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;