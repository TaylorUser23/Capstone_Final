import React, { useState, useEffect } from 'react';
import navLogo from '../assets/nav-logo.png';

// Navigation Component
const Navigation = ({ onReserveClick, onOrderClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item) => {
    if (item === 'Reservations') {
      onReserveClick();
    } else if (item === 'Order Online') {
      onOrderClick();
    }
  };

  const navItems = ['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={navLogo} 
              alt="Little Lemon Logo" 
              className="h-20 w-auto object-contain"
            />
          </div>
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item}>
                {item === 'Reservations' || item === 'Order Online' ? (
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
  );
};

export default Navigation;