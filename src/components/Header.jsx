import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-2xl font-bold text-gray-800">
            <span className="text-blue-600">Lavanya</span> T M
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a 
              href="#about" 
              className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium"
              onClick={closeMenu}
            >
              About
            </a>
            <a 
              href="#skills" 
              className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium"
              onClick={closeMenu}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium"
              onClick={closeMenu}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium"
              onClick={closeMenu}
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className="text-gray-600 hover:text-blue-600 transition duration-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-64 opacity-100 mt-4' 
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}>
          <div className="flex flex-col space-y-4 py-4 border-t border-gray-200">
            <a 
              href="#about" 
              className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium py-2"
              onClick={closeMenu}
            >
              About
            </a>
            <a 
              href="#skills" 
              className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium py-2"
              onClick={closeMenu}
            >
              Skills
            </a>
            <a 
              href="#projects" 
              className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium py-2"
              onClick={closeMenu}
            >
              Projects
            </a>
            <a 
              href="#contact" 
              className="text-gray-600 hover:text-blue-600 transition duration-300 font-medium py-2"
              onClick={closeMenu}
            >
              Contact
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
