"use client";
import React, { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(10);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Why Frippy", href: "#why-frippy" },
    { name: "Products", href: "#products" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle scroll direction
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY < 10) {
        // If scrolling up, show the navbar
        setIsVisible(true);
      } else {
        // If scrolling down, hide the navbar
        setIsVisible(false);
      }
      setLastScrollY(window.scrollY);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div
      ref={menuRef}
      className={`bg-[#E07B39] py-3 px-8 fixed top-0 w-full max-w-[60%] mx-auto z-10 rounded-full shadow-lg transition-transform duration-500 ease-in-out ${
        isVisible ? "translate-y-6" : "-translate-y-full"
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
              />
            </svg>
          </button>
        </div>

        {/* Menu Items */}
        <div className={`lg:flex ${isMenuOpen ? "block" : "hidden"}`}>
          {menuItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => handleScrollToSection(item.href)}
              className="text-white hover:text-black mx-4"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
