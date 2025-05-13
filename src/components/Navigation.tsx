"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // Using lucide-react for icons

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > 80 && window.scrollY > lastScrollY) {
        setIsScrolled(true); // Scrolled down and past a certain point
      } else {
        setIsScrolled(false); // Scrolled up or near the top
      }
      setLastScrollY(window.scrollY);
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/create-earprint", label: "Create EarPrint" },
    { href: "/products", label: "Products" },
    { href: "/challenges", label: "Challenges" },
    { href: "/community", label: "Community" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 bg-dark-surface/80 backdrop-blur-md shadow-lg transition-transform duration-300 ease-in-out ${isScrolled && !isMobileMenuOpen ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-brand-cyan text-3xl font-bold tracking-wider hover:text-brand-pink transition-colors">
          EarPrint
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center text-light-text">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-brand-pink transition-colors">
              {link.label}
            </Link>
          ))}
          <Link href="/signin" className="bg-brand-purple hover:bg-brand-pink text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
            Sign In
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu} 
            aria-label="Toggle menu" 
            className="text-light-text hover:text-brand-pink transition-colors"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-dark-surface/95 backdrop-blur-md py-4 absolute top-full left-0 right-0 shadow-xl">
          <ul className="flex flex-col items-center space-y-4 text-light-text">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="block py-2 hover:text-brand-pink transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/signin" className="block mt-2 bg-brand-purple hover:bg-brand-pink text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-300" onClick={() => setIsMobileMenuOpen(false)}>
                Sign In
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navigation;

