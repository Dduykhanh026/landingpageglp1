import { Squircle } from '@squircle-js/react';
import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';

const metrics = [
  { label: "Downloads", value: "500K+" },
  { label: "App Store Rating", value: (
    <span className="flex items-center gap-1.5">
      4.9 <div className="flex gap-0.5"><Star className="w-3 h-3 sm:w-4 sm:h-4 fill-[#FFB800] text-[#FFB800]" /><Star className="w-3 h-3 sm:w-4 sm:h-4 fill-[#FFB800] text-[#FFB800]" /><Star className="w-3 h-3 sm:w-4 sm:h-4 fill-[#FFB800] text-[#FFB800]" /><Star className="w-3 h-3 sm:w-4 sm:h-4 fill-[#FFB800] text-[#FFB800]" /><Star className="w-3 h-3 sm:w-4 sm:h-4 fill-[#FFB800] text-[#FFB800]" /></div>
    </span>
  ) },
  { label: "Most features free", value: "Free to try" },
];

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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative w-full bg-gray-50" id="hero">
      <div className="w-full flex flex-col justify-center pb-12 pt-8 lg:pb-16 lg:pt-12">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full flex flex-col items-center">

          {/* Floating Images (Desktop only) */}
          {/* Floating Assets - Hidden on mobile, lazy loaded since non-critical */}
          <div className="absolute top-[55%] right-1/2 mr-[5.5rem] sm:mr-[8rem] lg:mr-[10rem] z-0 -rotate-[30deg]">
            <img src={ozempicpencil} alt="Ozempic" loading="lazy" decoding="async" className="w-16 sm:w-20 md:w-32 lg:w-40 h-auto object-contain drop-shadow-2xl" />
          </div>
          <div className="absolute top-[55%] left-1/2 ml-[7.5rem] sm:ml-[10rem] lg:ml-[15rem] z-0 rotate-12">
            <img src={wegovypill} alt="Wegovy Pill" loading="lazy" decoding="async" className="w-14 sm:w-20 md:w-28 lg:w-32 h-auto object-contain drop-shadow-2xl" />
          </div>
          
          <div className="absolute top-[65%] left-1/2 ml-[4.5rem] sm:ml-[7rem] lg:ml-[10.5rem] z-20 rotate-[30deg]">
            <img src={wegovypencil} alt="Wegovy" loading="lazy" decoding="async" className="w-14 sm:w-16 md:w-28 lg:w-36 h-auto object-contain drop-shadow-2xl" />
          </div>
          <div className="absolute top-[90%] right-1/2 mr-[6rem] sm:mr-[9rem] lg:mr-[13rem] z-20 rotate-45">
            <img src={foundayopill} alt="Foundayo" loading="lazy" decoding="async" className="w-14 sm:w-20 md:w-28 lg:w-36 h-auto object-contain drop-shadow-2xl" />
          </div>

          {/* Floating Texts (Desktop only) */}
          <div className={`hidden lg:block absolute right-1/2 mr-[10rem] xl:mr-[12rem] top-[33%] z-0 motion-safe:transition-all duration-[1200ms] delay-200 ease-out motion-reduce:transition-none ${scrolled ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-[10rem] opacity-0 scale-50'}`}>
            <div className="text-display2 lg:text-display1 font-extrabold text-gray-800 whitespace-nowrap drop-shadow-lg tracking-tight">
              Your ultimate
            </div>
          </div>

          <div className={`hidden lg:block absolute left-1/2 ml-[10rem] xl:ml-[12rem] top-[33%] z-0 motion-safe:transition-all duration-[1200ms] delay-300 ease-out motion-reduce:transition-none ${scrolled ? 'translate-x-0 opacity-100 scale-100' : '-translate-x-[10rem] opacity-0 scale-50'}`}>
            <div className="text-display2 lg:text-display1 font-extrabold text-app-greenDark whitespace-nowrap drop-shadow-lg tracking-tight">
              GLP-1 companion
            </div>
          </div>

          {/* Text Content */}
          <div className="mb-8 md:mb-16 w-full max-w-3xl flex flex-col items-start z-10 relative">
            <h1 className={`text-4xl sm:text-5xl md:text-display2 lg:text-display1 font-extrabold text-gray-900 leading-[1.15] tracking-tight mb-3 text-left motion-safe:transition-all duration-[800ms] ease-out motion-reduce:transition-none ${scrolled ? 'md:opacity-0 md:-translate-y-8 md:pointer-events-none' : 'opacity-100 translate-y-0'}`}>
              Maximize your <span className="text-primary whitespace-nowrap">weight loss</span> journey.
            </h1>
            <p className={`text-[15px] sm:text-base md:text-lg text-gray-600 mb-4 max-w-2xl text-left font-medium leading-snug motion-safe:transition-all duration-[800ms] ease-out delay-100 motion-reduce:transition-none ${scrolled ? 'md:opacity-0 md:-translate-y-8 md:pointer-events-none' : 'opacity-100 translate-y-0'}`}>
              Track your GLP-1 medication, monitor side effects, ensure adequate nutrition, and visualize your progress—all in one place.
            </p>

            {/* Actions */}
            <div className={`flex flex-row items-center w-full space-x-3 sm:space-x-4 mb-3 motion-safe:transition-all duration-[800ms] ease-out delay-150 motion-reduce:transition-none ${scrolled ? 'md:opacity-0 md:-translate-y-8 md:pointer-events-none' : 'opacity-100 translate-y-0'}`}>
              <a href="https://apps.apple.com/us/app/free-glp-1-tracker-dr-glp1/id6760417769" target="_blank" rel="noopener noreferrer" className="inline-block cursor-pointer outline-none focus-visible:ring-4 focus-visible:ring-primary rounded-2xl group">
                <Squircle cornerRadius={14} cornerSmoothing={1} className="inline-flex justify-center items-center overflow-hidden motion-safe:transition-transform hover:scale-[1.02] active:scale-[0.98] motion-reduce:transform-none drop-shadow-sm w-[144px] h-[48px]">
                  <img src="/app-store-badge.svg" alt="Download on the App Store" className="w-full h-full object-fill scale-[1.02]" />
                </Squircle>
              </a>

              <a href="#how-it-works" onClick={(e) => { e.preventDefault(); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }} className="inline-block cursor-pointer outline-none focus-visible:ring-4 focus-visible:ring-gray-300 rounded-2xl group">
                <Squircle cornerRadius={14} cornerSmoothing={1} className="inline-flex p-[2px] bg-gray-200 group-hover:bg-gray-300 motion-safe:transition-all hover:scale-[1.02] active:scale-[0.98] motion-reduce:transform-none w-[144px] h-[48px] shadow-sm hover:shadow-md">
                  <Squircle cornerRadius={12} cornerSmoothing={1} className="bg-white group-hover:bg-gray-50 transition-colors w-full h-full flex items-center justify-center">
                    <span className="text-gray-700 font-bold text-[14px] sm:text-[15px]">See How It Works</span>
                  </Squircle>
                </Squircle>
              </a>
            </div>

            {/* Social Proof Metrics */}
            <div className={`w-full max-w-xl border-t border-gray-200 pt-6 motion-safe:transition-all duration-[1000ms] ease-out delay-200 motion-reduce:transition-none ${scrolled ? 'md:opacity-0 md:-translate-y-4 md:pointer-events-none' : 'opacity-100 translate-y-0'}`}>
              <div className="flex flex-row items-center divide-x divide-gray-200">
                {metrics.map((metric, index) => (
                  <div key={index} className={`flex flex-col items-start justify-center flex-1 ${index === 0 ? 'pr-4' : index === metrics.length - 1 ? 'pl-4' : 'px-4'}`}>
                    <span className="text-[18px] sm:text-[20px] md:text-[22px] font-bold text-primary mb-1 leading-none text-left flex items-center">{metric.value}</span>
                    <span className="text-[12px] sm:text-[13px] font-medium text-gray-500 text-left">{metric.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* LCP Critical Image: prioritize loading */}
          <div className={`relative z-10 mx-auto max-w-[200px] sm:max-w-[240px] md:max-w-sm lg:max-w-md px-4 pb-12 sm:pb-16 md:pb-20 motion-safe:transition-all duration-[1000ms] delay-300 ease-out motion-reduce:transition-none ${scrolled ? 'md:scale-[1.02]' : 'scale-100'}`}>
            <img src={mockupHero} alt="App Mockup" fetchpriority="high" decoding="sync" className="w-full h-auto drop-shadow-2xl object-contain" />
          </div>

        </div>

      </div>
    </section>
  );
};
export default Hero;