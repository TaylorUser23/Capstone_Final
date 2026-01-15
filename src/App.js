import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import SpecialsSection from './components/SpecialsSection';
import TestimonialsSection from './components/TestimonialSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import ReserveTableModal from './components/ReserveTableModal';
import OrderOnlineModal from './components/OrderOnlineModal';

// Main App Component
const App = () => {
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection onReserveClick={() => setIsReserveModalOpen(true)} />
        <SpecialsSection onOrderClick={() => setIsOrderModalOpen(true)} />
        <TestimonialsSection />
        <AboutSection />
      </main>
      <Footer />
      <ReserveTableModal 
        isOpen={isReserveModalOpen} 
        onClose={() => setIsReserveModalOpen(false)} 
      />
      <OrderOnlineModal 
        isOpen={isOrderModalOpen} 
        onClose={() => setIsOrderModalOpen(false)} 
      />
    </div>
  );
};

export default App;