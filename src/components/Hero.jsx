import { Squircle } from '@squircle-js/react';
import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import MockupPhone from './ui/MockupPhone';

import foundayopill from '../assets/foundayopill.png';
import ozempicpencil from '../assets/ozempicpencil.png';
import wegovypencil from '../assets/wegovypencil.png';
import wegovypill from '../assets/wegovypill.png';
import mockupHero from '../assets/mockup_hero.png';

const Hero = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full overflow-hidden" id="hero">
      <div className="w-full min-h-[100dvh] flex flex-col justify-end pb-4 pt-28">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full flex flex-col items-center mt-auto">

          {/* Floating Images (Desktop only) */}
          <div className={`hidden lg:block absolute right-1/2 mr-[15rem] xl:mr-[18rem] top-[35%] z-0 transition-all duration-[1200ms] ease-out ${scrolled ? 'translate-x-0 rotate-[-45deg] scale-100' : 'translate-x-[10rem] rotate-[90deg] scale-0'}`}>
            <img src={ozempicpencil} alt="Ozempic" className="w-36 lg:w-48 h-auto object-contain drop-shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:rotate-[0deg]" />
          </div>
          <div className={`hidden lg:block absolute right-1/2 mr-[12rem] xl:mr-[14rem] top-[50%] z-0 transition-all duration-[1200ms] delay-100 ease-out ${scrolled ? 'translate-x-0 rotate-[20deg] scale-100' : 'translate-x-[8rem] rotate-[90deg] scale-0'}`}>
            <img src={wegovypill} alt="Wegovy Pill" className="w-28 lg:w-32 h-auto object-contain drop-shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:rotate-[0deg]" />
          </div>

          <div className={`hidden lg:block absolute left-1/2 ml-[8rem] xl:ml-[10rem] top-[35%] z-0 transition-all duration-[1200ms] ease-out ${scrolled ? 'translate-x-0 rotate-[55deg] scale-100' : '-translate-x-[10rem] -rotate-[90deg] scale-0'}`}>
            <img src={wegovypencil} alt="Wegovy" className="w-28 lg:w-36 h-auto object-contain drop-shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:rotate-[0deg]" />
          </div>
          <div className={`hidden lg:block absolute left-1/2 ml-[16rem] xl:ml-[18rem] top-[80%] z-0 transition-all duration-[1200ms] delay-100 ease-out ${scrolled ? 'translate-x-0 rotate-[-25deg] scale-100' : '-translate-x-[8rem] -rotate-[90deg] scale-0'}`}>
            <img src={foundayopill} alt="Foundayo" className="w-28 lg:w-32 h-auto object-contain drop-shadow-2xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 hover:rotate-[0deg]" />
          </div>

          {/* Floating Texts (Desktop only) */}
          <div className={`hidden lg:block absolute right-1/2 mr-[10rem] xl:mr-[12rem] top-[33%] z-0 transition-all duration-[1200ms] delay-200 ease-out ${scrolled ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-[10rem] opacity-0 scale-50'}`}>
            <div className="text-largeTitle sm:text-display2 lg:text-display1 font-extrabold text-gray-800 whitespace-nowrap drop-shadow-lg tracking-tight">
              Your ultimate
            </div>
          </div>

          <div className={`hidden lg:block absolute left-1/2 ml-[10rem] xl:ml-[12rem] top-[33%] z-0 transition-all duration-[1200ms] delay-300 ease-out ${scrolled ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-[10rem] opacity-0 scale-50'}`}>
            <div className="text-largeTitle sm:text-display2 lg:text-display1 font-extrabold text-app-greenDark whitespace-nowrap drop-shadow-lg tracking-tight">
              GLP-1 companion
            </div>
          </div>

          {/* Text Content */}
          <div className="mb-16 w-full max-w-none flex flex-col items-center z-10 relative">
            <h1 className={`text-largeTitle sm:text-display2 lg:text-display1 font-extrabold text-gray-900 leading-tight mb-4 whitespace-nowrap text-center transition-all duration-[800ms] ease-out ${scrolled ? 'opacity-0 -translate-y-8 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
              Maximize your <span className="text-primary">weight loss</span> journey.
            </h1>
            <p className={`text-body sm:text-title3 text-gray-600 mb-8 max-w-none mx-auto text-center whitespace-nowrap font-medium transition-all duration-[800ms] ease-out delay-100 ${scrolled ? 'opacity-0 -translate-y-8 pointer-events-none' : 'opacity-100 translate-y-0'}`}>
              Track your GLP-1 medication, monitor side effects, ensure adequate nutrition, and visualize your progress—all in one place.
            </p>
          </div>

          {/* Mockup */}
          <div className={`relative w-full max-w-xs mx-auto flex justify-center mb-8 transition-all duration-[800ms] ease-out origin-top z-10 ${scrolled ? 'scale-100 mt-16' : 'scale-[2.0] mt-12'}`}>
            <img src={mockupHero} alt="App Mockup" className="w-full h-auto drop-shadow-2xl object-contain" />
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-col items-center w-full relative z-20 pb-12">
            <div className="flex flex-row items-center justify-center space-x-4 mb-3">
              <a href="https://apps.apple.com/us/app/free-glp-1-tracker-dr-glp1/id6760417769" target="_blank" rel="noopener noreferrer" className="inline-block cursor-pointer">
                <Squircle cornerRadius={16} cornerSmoothing={1} className="inline-flex items-center justify-center overflow-hidden transition-transform hover:scale-105 bg-black w-[192px] h-[56px]">
                  <img src="/app-store-badge.svg" alt="Download on the App Store" className="w-[192px] h-[64px] max-w-none" />
                </Squircle>
              </a>

              <Squircle as="a" href="#how-it-works" onClick={(e) => { e.preventDefault(); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }} cornerRadius={16} cornerSmoothing={1} className="group inline-flex p-[2px] bg-gray-200 hover:bg-gray-300 transition-all hover:scale-105 w-[192px] h-[56px] cursor-pointer shadow-sm hover:shadow-md">
                <Squircle cornerRadius={14} cornerSmoothing={1} className="bg-white group-hover:bg-gray-50 transition-colors w-full h-full flex items-center justify-center">
                  <span className="text-gray-700 font-bold text-[17px]">See How It Works</span>
                </Squircle>
              </Squircle>
            </div>
            <p className="text-subhead text-gray-500 font-medium text-center mt-3 mb-0">Free to try. No credit card required.</p>
          </div>

        </div>

      </div>
    </section>
  );
};
export default Hero;