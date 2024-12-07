'use client';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Benefits', href: '#' },
    { name: 'Universities', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'FAQ', href: '#' },
  ];

  // Handle scroll direction
  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY < lastScrollY) {
        // If scrolling up, show the navbar
        setIsVisible(true);
      } else {
        // If scrolling down, hide the navbar
        setIsVisible(false);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <div
      className={`bg-[#E07B39] py-2 px-8 fixed top-6 w-full max-w-[60%] mx-auto z-10 rounded-full shadow-lg transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex justify-between items-center w-full">
        {/* Logo */}
        <div className="flex items-center">
          <span className="text-white font-gilroy-bold text-2xl font-extrabold">
            Frippy
          </span>
          {/* Adding margin-right to create space */}
          <div className="mr-6"></div>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white hover:text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Menu Items for Larger Screens */}
        <div className="hidden lg:flex lg:items-center">
          <ul className="flex space-x-5">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-sm font-gilroy-bold text-white hover:text-black transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Menu - Expands in a slightly larger rectangle, right-aligned */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#E07B39] px-5 py-4 mt-2 rounded-lg w-56 fixed top-[60px] right-6 z-20">
          <ul className="space-y-3">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="block text-sm font-gilroy-bold text-white hover:text-black transition-colors duration-300"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
