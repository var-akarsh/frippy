"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const menuItems = [
    { name: "Home", href: "#home" },
    { name: "Why Frippy", href: "#why-frippy" },
    { name: "Reviews", href: "#testimonials" },
    { name: "Products", href: "/products" },
    { name: "Track", href: "/track" },
    { name: "FAQ", href: "#faq" },
    { name: "Contact", href: "/contact" },
  ];

  const handleNavigation = useCallback(
    (href: string) => {
      if (href.startsWith("/")) {
        router.push(href);
      } else {
        if (window.location.pathname === "/") {
          const section = document.getElementById(href.substring(1));
          if (section) {
            section.scrollIntoView({ behavior: "smooth" });
          }
        } else {
          router.push("/");
        }
      }
      setIsMenuOpen(false);
    },
    [router]
  );

  const controlNavbar = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY < 10 || currentScrollY < lastScrollY.current);
    lastScrollY.current = currentScrollY;
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [controlNavbar]);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen, handleClickOutside]);

  return (
    <nav
      ref={menuRef}
      className={`z-50 bg-[#E07B39] py-3 px-8 fixed top-0 w-full max-w-[60%] mx-auto rounded-full shadow-lg transition-transform duration-300 ${
        isVisible ? "translate-y-6" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center w-full">
        {/* Clickable Logo */}
        <button
          onClick={() => router.push("/")}
          className="text-white font-gilroy-bold text-2xl font-extrabold focus:outline-none"
        >
          Frippy
        </button>

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
        <ul className="hidden lg:flex space-x-5">
          {menuItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => handleNavigation(item.href)}
                className="text-md font-gilroy-bold text-white hover:text-black transition-colors duration-300 cursor-pointer"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-[#E07B39] px-5 py-4 mt-2 rounded-lg w-60 fixed top-[60px] left-1/2 transform -translate-x-1/2 z-50">
          <ul className="space-y-3">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => handleNavigation(item.href)}
                  className="block text-md font-gilroy-bold text-white hover:text-black transition-colors duration-300 cursor-pointer"
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;