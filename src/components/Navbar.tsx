'use client';

import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["about", "services", "products", "process", "quality", "contact"];

  return (
    <>
      {/* Desktop & Mobile Toggle Bar */}
      <nav className="container mx-auto px-4 sm:px-6 py-3 bg-white rounded-full shadow-sm flex items-center justify-between gap-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
    <a href="/" className="flex items-center gap-2">
      <img src="/logo.webp" alt="Vitameals Africa Logo" className="w-8 h-8 object-contain" />
      <span className="font-bold text-lg text-emerald-600 transition">
        Vitameals Africa
      </span>
    </a>
  </div>

        {/* Desktop Navigation + CTA */}
        <div className="hidden sm:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="text-gray-700 hover:text-emerald-600 text-sm font-medium transition"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          
        </div>

        {/* Mobile Hamburger (only on small screens) */}
        <button
          className="sm:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="sm:hidden bg-white shadow-lg rounded-b-xl mx-4 mb-4">
          <ul className="py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item} className="px-6">
                <a
                  href={`#${item}`}
                  className="block text-gray-700 hover:text-emerald-600 text-base font-medium py-2 transition"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
            
          </ul>
        </div>
      )}
    </>
  );
}