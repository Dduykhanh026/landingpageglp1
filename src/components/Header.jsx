import React, { useState, useEffect, useRef } from 'react';
import { Squircle } from '@squircle-js/react';
import { Menu, X } from 'lucide-react';
import appicon from '../assets/appicon.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);
  const closeButtonRef = useRef(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle body scroll & focus trap when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      closeButtonRef.current?.focus();
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  // Handle Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isMenuOpen) setIsMenuOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  const navLinks = [
    { href: "#features", label: "Features" },
    { href: "#how-it-works", label: "How it works" },
    { href: "#reviews", label: "Reviews" },
    { href: "#faq", label: "FAQ" }
  ];

  return (
    <>
      <div className="sticky top-4 z-40 px-4 sm:px-6 w-full flex justify-center mt-4 transition-all duration-500">
        <Squircle 
          cornerRadius={24} 
          cornerSmoothing={1} 
          className={`bg-white/95 backdrop-blur-md border border-gray-100 drop-shadow-mockup flex justify-between items-center w-full max-w-7xl mx-auto p-2 sm:p-3 md:px-6 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] origin-top ${
            isScrolled ? "md:scale-[0.8] shadow-md" : "scale-100 shadow-sm"
          }`}
        >
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center pl-2">
            <a 
              href="#" 
              className="flex items-center gap-2 font-bold text-primary tracking-tight text-[17px] sm:text-title3 lg:text-title2 focus-visible:ring-2 focus-visible:ring-primary focus:outline-none rounded-lg"
            >
              <Squircle className="w-9 h-9 bg-primary overflow-hidden shrink-0 shadow-sm" cornerRadius={10} cornerSmoothing={1}>
                <img src={appicon} alt="Dr. GLP-1 Logo" fetchpriority="high" decoding="sync" className="w-full h-full object-cover" />
              </Squircle>
              <span className="leading-tight break-words">Free GLP 1 Tracker Dr.GLP1™</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-6 xl:space-x-8 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="text-gray-600 hover:text-gray-900 font-bold transition-colors focus-visible:ring-2 focus-visible:ring-primary focus:outline-none rounded"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center space-x-2 md:space-x-4 pr-1 sm:pr-0">
            {/* Desktop / Tablet CTA */}
            <a 
              href="https://apps.apple.com/us/app/free-glp-1-tracker-dr-glp1/id6760417769" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hidden sm:block cursor-pointer focus-visible:ring-2 focus-visible:ring-primary focus:outline-none rounded-xl shrink-0"
            >
              <Squircle className="bg-app-darkCardElevated hover:bg-app-darkBg text-white font-bold px-5 md:px-7 shadow-inner transition-colors py-2 md:py-2.5 text-subhead md:text-body" cornerRadius={12} cornerSmoothing={1}>
                Get Started
              </Squircle>
            </a>

            {/* Mobile Hamburger Button */}
            <button 
              className="lg:hidden flex items-center justify-center w-11 h-11 text-gray-700 hover:text-gray-900 focus-visible:ring-2 focus-visible:ring-primary focus:outline-none rounded-xl hover:bg-gray-100 transition-colors shrink-0"
              onClick={() => setIsMenuOpen(true)}
              aria-expanded={isMenuOpen}
              aria-label="Open main menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </Squircle>
      </div>

      {/* Mobile Drawer Overlay */}
      <div 
        className={`fixed inset-0 bg-gray-900/40 backdrop-blur-sm z-50 lg:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Content */}
      <div 
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
        className={`fixed top-0 right-0 h-[100dvh] w-[280px] max-w-[85vw] bg-white shadow-2xl z-50 lg:hidden transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex items-center justify-between p-4 border-b border-gray-100">
          <div className="flex items-center gap-2.5 pr-2">
            <Squircle className="w-8 h-8 bg-primary overflow-hidden shrink-0 shadow-sm" cornerRadius={8} cornerSmoothing={1}>
              <img src={appicon} alt="Logo" className="w-full h-full object-cover" />
            </Squircle>
            <span className="font-bold text-primary text-[14px] leading-tight break-words">Free GLP 1 Tracker Dr.GLP1™</span>
          </div>
          <button 
            ref={closeButtonRef}
            className="flex items-center justify-center w-11 h-11 text-gray-500 hover:text-gray-900 focus-visible:ring-2 focus-visible:ring-primary focus:outline-none rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors shrink-0"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto py-4 px-4 sm:px-6 flex flex-col space-y-2">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="block py-3 px-4 text-title3 text-gray-700 font-bold rounded-xl hover:bg-gray-50 focus-visible:bg-gray-50 focus-visible:ring-2 focus-visible:ring-primary focus:outline-none transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          
          <div className="mt-8 pt-6 border-t border-gray-100">
            <a 
              href="https://apps.apple.com/us/app/free-glp-1-tracker-dr-glp1/id6760417769" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full text-center focus-visible:ring-2 focus-visible:ring-primary focus:outline-none rounded-xl"
              onClick={() => setIsMenuOpen(false)}
            >
              <Squircle className="bg-app-darkCardElevated hover:bg-app-darkBg text-white font-bold w-full shadow-inner transition-colors py-3 sm:py-4 text-body sm:text-title3" cornerRadius={14} cornerSmoothing={1}>
                Get Started
              </Squircle>
            </a>
          </div>
        </nav>
      </div>
    </>
  );
};
export default Header;