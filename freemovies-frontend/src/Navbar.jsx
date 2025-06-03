import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-gray-100 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        {/* Logo / Brand */}
        <a href="/" className="text-2xl font-bold text-indigo-400 hover:text-indigo-500">
          MovieStories
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 font-medium text-gray-300">
          <a href="#home" className="hover:text-indigo-400 transition">
            Home
          </a>
          <a href="#stories" className="hover:text-indigo-400 transition">
            Stories
          </a>
          <a href="#about" className="hover:text-indigo-400 transition">
            About
          </a>
          <a href="#contact" className="hover:text-indigo-400 transition">
            Contact
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none focus:ring-2 focus:ring-indigo-400"
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 text-gray-300"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-gray-200 px-6 py-4 space-y-3 font-medium">
          <a href="#home" className="block hover:text-indigo-400 transition" onClick={() => setIsOpen(false)}>
            Home
          </a>
          <a href="#stories" className="block hover:text-indigo-400 transition" onClick={() => setIsOpen(false)}>
            Stories
          </a>
          <a href="#about" className="block hover:text-indigo-400 transition" onClick={() => setIsOpen(false)}>
            About
          </a>
          <a href="#contact" className="block hover:text-indigo-400 transition" onClick={() => setIsOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
