import React, { useState, useEffect } from 'react';
import navLogo from '../assets/nav-logo.png';
// 1. Import your menu image (adjust the filename extension if it's .jpg or .jpeg)
import menuPic from '../assets/menu.webp'; 

const Navigation = ({ onReserveClick, onOrderClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  // 2. State to handle the visibility of the menu image
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
      // Scrolls to the very top of the page (0,0)
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
    }
  };


  const navItems = ['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login'];

  return (
    <>
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
                  {/* 4. Update the condition to include 'Menu' as a clickable button */}
                  {item === 'Reservations' || item === 'Order Online' || item === 'Menu' ? (
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

      {/* 5. The Menu Image Overlay (Modal) */}
      {showMenuImage && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-80 p-4"
          onClick={() => setShowMenuImage(false)} // Close when clicking the background
        >
          <div className="relative max-w-4xl w-full flex flex-col items-center">
            {/* Close Button */}
            <button 
              className="absolute -top-12 right-0 text-white text-xl font-bold bg-green-700 px-4 py-2 rounded hover:bg-green-800 transition-colors"
              onClick={() => setShowMenuImage(false)}
            >
              Close
            </button>
            
            {menuPic}
            <img 
              src={menuPic} 
              alt="Restaurant Menu" 
              className="max-h-[85vh] w-auto shadow-2xl rounded-lg"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;