import { Squircle } from '@squircle-js/react';
import React, { useState, useEffect, useRef } from 'react';
import mockup1 from '../assets/mockup1_ScreenshotShowcase.png';
import mockup2 from '../assets/mockup2_ScreenshotShowcase.png';
import mockup3 from '../assets/mockup3_ScreenshotShowcase.png';

const ScreenshotShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (containerRef.current) observer.unobserve(containerRef.current);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -10% 0px" } 
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  // Desktop uses a fan-out animation (starts stacked, fully opaque, then translates out).
  // Mobile uses a sequential vertical fade-up animation (starts translated down, opacity 0).
  const hiddenClasses = [
    "translate-y-12 opacity-0 md:translate-y-0 md:opacity-100 md:translate-x-0 z-30",
    "translate-y-12 opacity-0 md:translate-y-0 md:opacity-100 md:-translate-x-[calc(100%+3rem)] z-20",
    "translate-y-12 opacity-0 md:translate-y-0 md:opacity-100 md:-translate-x-[calc(200%+6rem)] z-10"
  ];

  return (
    <section className="py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-largeTitle font-bold text-gray-900 mb-4">Your health, beautifully organized.</h2>
          <p className="text-lg sm:text-xl md:text-title3 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            An intuitive interface built specifically for the nuances of your GLP-1 journey.
          </p>
        </div>
        
        <div 
          className="flex flex-col md:flex-row space-y-16 md:space-y-0 md:space-x-12 pb-12 px-4 justify-center items-center" 
          ref={containerRef}
        >
           {/* Mockup 1: Dashboard */}
           <div className={`relative transition-all duration-1000 md:duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] w-full max-w-[280px] ${isVisible ? "translate-x-0 translate-y-0 opacity-100" : hiddenClasses[0]}`}>
             <img 
               src={mockup1} 
               alt="Personalized Dashboard" 
               className="w-full h-auto drop-shadow-2xl object-contain mx-auto" 
               loading="lazy"
               decoding="async"
             />
             <p className="text-center mt-5 md:mt-6 font-semibold text-gray-800 text-lg md:text-base">Personalized Dashboard</p>
           </div>
           
           {/* Mockup 2: Tracker */}
           <div className={`relative transition-all duration-1000 delay-[200ms] md:delay-0 md:duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] w-full max-w-[280px] ${isVisible ? "translate-x-0 translate-y-0 opacity-100" : hiddenClasses[1]}`}>
             <img 
               src={mockup2} 
               alt="Muscle & Hair Tracker" 
               className="w-full h-auto drop-shadow-2xl object-contain mx-auto" 
               loading="lazy"
               decoding="async"
             />
             <p className="text-center mt-5 md:mt-6 font-semibold text-gray-800 text-lg md:text-base">Muscle & Hair Tracker</p>
           </div>
           
           {/* Mockup 3: Nutrition */}
           <div className={`relative transition-all duration-1000 delay-[400ms] md:delay-0 md:duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] w-full max-w-[280px] ${isVisible ? "translate-x-0 translate-y-0 opacity-100" : hiddenClasses[2]}`}>
             <img 
               src={mockup3} 
               alt="Protein & Nutrition" 
               className="w-full h-auto drop-shadow-2xl object-contain mx-auto"
               loading="lazy"
               decoding="async" 
             />
             <p className="text-center mt-5 md:mt-6 font-semibold text-gray-800 text-lg md:text-base">Protein & Nutrition</p>
           </div>
        </div>
      </div>
    </section>
  );
};
export default ScreenshotShowcase;