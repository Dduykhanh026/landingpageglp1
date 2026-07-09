import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import { Squircle } from '@squircle-js/react';
import appicon from '../assets/appicon.png';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Shrink when scrolled more than 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return <div className="sticky top-4 z-50 px-4 sm:px-6 w-full flex justify-center mt-4 transition-all duration-500">
      <Squircle 
        cornerRadius={24} 
        cornerSmoothing={1} 
        className={`bg-white/95 backdrop-blur-md border border-gray-100 shadow-sm flex justify-between items-center w-full max-w-6xl p-3 transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] origin-top ${
          isScrolled ? "scale-[0.7]" : "scale-100"
        }`}
      >

        {/* Logo */}
        <div className="flex-shrink-0 flex items-center pl-2">
          <a href="#" className="flex items-center gap-2 font-bold text-primary tracking-tight text-title2">
            <Squircle cornerRadius={8} cornerSmoothing={1} className="w-8 h-8 md:w-10 md:h-10 overflow-hidden shadow-sm">
              <img src={appicon} alt="Dr. GLP-1 Logo" className="w-full h-full object-cover" />
            </Squircle>
            <span className="truncate max-w-[200px] md:max-w-none">Free GLP 1 Tracker Dr.GLP1™</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-6 xl:space-x-8">
          <a href="#features" className="text-gray-900 font-bold transition-colors">Features</a>
          <a href="#how-it-works" className="text-gray-500 hover:text-gray-900 font-bold transition-colors">How it works</a>

          <a href="#reviews" className="text-gray-500 hover:text-gray-900 font-bold transition-colors">Reviews</a>
          <a href="#faq" className="text-gray-500 hover:text-gray-900 font-bold transition-colors">FAQ</a>
        </nav>

        {/* CTA */}
        <div className="flex items-center space-x-2 md:space-x-4">
          <a href="https://apps.apple.com/us/app/free-glp-1-tracker-dr-glp1/id6760417769" target="_blank" rel="noopener noreferrer" className="block cursor-pointer">
            <Squircle className="bg-app-darkCardElevated hover:bg-app-darkBg text-white font-bold px-5 md:px-7 shadow-inner transition-colors py-2 md:py-2.5 text-subhead md:text-body" cornerRadius={12} cornerSmoothing={1}>
              Get Started
            </Squircle>
          </a>
        </div>

      </Squircle>
    </div>;
};
export default Header;