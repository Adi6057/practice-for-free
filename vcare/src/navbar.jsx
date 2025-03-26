import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center w-full">
        <div className="text-2xl font-bold">Your Logo</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#services" className="hover:text-gray-400">Services</a>
          <a href="#projects" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center" onClick={toggleMenu}>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu with exact height and smooth up-down animation */}
      <div
        className={`${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } md:hidden bg-gray-800 overflow-hidden transition-all duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center space-y-4 py-4">
          <a href="#home" className="text-white hover:text-gray-400">Home</a>
          <a href="#about" className="text-white hover:text-gray-400">About</a>
          <a href="#services" className="text-white hover:text-gray-400">Services</a>
          <a href="#projects" className="text-white hover:text-gray-400">Projects</a>
          <a href="#contact" className="text-white hover:text-gray-400">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
