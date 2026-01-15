import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import SpecialsSection from './components/SpecialsSection';
import TestimonialsSection from './components/TestimonialSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import ReserveTableModal from './components/ReserveTableModal';
import OrderOnlineModal from './components/OrderOnlineModal';
import LoginModal from './components/LoginModal';

// Main App Component
const App = () => {
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  // 1. Add state for the Login Modal
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Navigation 
        onReserveClick={() => setIsReserveModalOpen(true)}
        onOrderClick={() => setIsOrderModalOpen(true)}
        // 2. Pass the trigger function to Navigation
        onLoginClick={() => setIsLoginModalOpen(true)}
      />
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
      
      {/* 3. Render the Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </div>
  );
};

export default App;