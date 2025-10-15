"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navItems = ["about", "services", "products", "process", "quality", "contact"];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation with Centered Logo */}
      <nav className="relative">
        <div
          className={`bg-[hsl(var(--navbar-bg))] text-[hsl(var(--navbar-foreground))] transition-all duration-300 ${
            scrolled ? "shadow-sm" : ""
          }`}
        >
          <div className="container mx-auto px-4 sm:px-6">
            <div className="hidden sm:flex items-center justify-center py-4">
              {/* Left Navigation Items */}
              <ul className="flex items-center gap-8">
                {navItems.slice(0, 3).map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      className="text-gray-700 hover:text-[#0f4c81] text-sm font-medium transition"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Spacer for centered logo */}
              <div className="mx-12 w-24"></div>

              {/* Right Navigation Items */}
              <ul className="flex items-center gap-8">
                {navItems.slice(3).map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item}`}
                      className="text-gray-700 hover:text-[#0f4c81] text-sm font-medium transition"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Navigation */}
            <div className="sm:hidden flex items-center justify-between py-3">
              <Link href="/" className="flex items-center">
                <img
                  src="/logo3.webp"
                  alt="Vitameals Africa Logo"
                  className="h-10 max-w-[180px] object-contain"
                />
              </Link>

              <button
                className="sm:hidden text-gray-700 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Centered Logo with Overflow - Desktop Only */}
        <div className="hidden sm:block absolute left-1/2 top-0 transform -translate-x-1/2 z-20 transition-all duration-300"> 
  <div className="relative">
    <div
      className={`bg-white rounded-full flex items-center justify-center transition-all duration-300 ${
        scrolled
          ? "h-16 w-16 p-1 border-2 border-[#1C506D]" // ✅ small logo with border
          : "h-40 w-40 p-3 border-0" // large logo without border
      }`}
    >
      <Link href="/" className="block">
        <img
          src="/logo3.webp"
          alt="Vitameals Africa Logo"
          className={`object-contain transition-all duration-300 ${
            scrolled ? "h-12 w-12" : "h-40 w-40"
          }`}
        />
      </Link>
    </div>
  </div>
</div>

      </nav>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="sm:hidden bg-[hsl(var(--navbar-bg))] text-[hsl(var(--navbar-foreground))] shadow-lg">
          <ul className="py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item} className="px-6">
                <a
                  href={`#${item}`}
                  className="text-gray-700 hover:text-[#0f4c81] text-sm font-medium transition"
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