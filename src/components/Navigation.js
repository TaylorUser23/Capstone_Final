import React, { useState, useEffect } from 'react';
import navLogo from '../assets/nav-logo.png';
import menuPic from '../assets/menu.webp';

// 1. Removed LoginModal import because it is now handled in App.js
// 2. Added onLoginClick to the destructured props
const Navigation = ({ onReserveClick, onOrderClick, onLoginClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMenuImage, setShowMenuImage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item) => {
    if (item === 'Home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (item === 'About') {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (item === 'Menu') {
      setShowMenuImage(true);
    } else if (item === 'Reservations') {
      onReserveClick();
    } else if (item === 'Order Online') {
      onOrderClick();
    } else if (item === 'Login') {
      // 3. Now calls the function passed down from App.js
      onLoginClick(); 
    }
  };

  const navItems = ['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img src={navLogo} alt="Little Lemon Logo" className="h-20 w-auto object-contain" />
            </div>
            <ul className="flex space-x-8">
              {navItems.map((item) => (
                <li key={item}>
                  {['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'].includes(item) ? (
                    <button
                      onClick={() => handleNavClick(item)}
                      className="text-gray-700 hover:text-green-700 transition-colors font-medium"
                    >
                      {item}
                    </button>
                  ) : (
                    <a 
                      href={`#${item.toLowerCase().replace(' ', '-')}`} 
                      className="text-gray-700 hover:text-green-700 transition-colors font-medium"
                    >
                      {item}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Menu Modal remains here because it's specific to the Nav's Menu button */}
      {showMenuImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={() => setShowMenuImage(false)}
        >
          <div className="relative max-w-4xl w-full flex flex-col items-center">
            <button 
              className="absolute -top-12 right-0 text-white bg-green-700 px-4 py-2 rounded font-bold"
              onClick={() => setShowMenuImage(false)}
            >
              Close
            </button>
            <img src={menuPic} alt="Menu" className="max-h-[85vh] rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
          </div>
        </div>
      )}
      
      {/* 4. Removed the LoginModal component from here because it is now rendered in App.js */}
    </>
  );
};

export default Navigation;