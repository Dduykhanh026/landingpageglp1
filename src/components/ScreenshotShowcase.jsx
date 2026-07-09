import { Squircle } from '@squircle-js/react';
import React, { useState, useEffect, useRef } from 'react';
import MockupPhone from './ui/MockupPhone';
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
      { threshold: 0, rootMargin: "-40% 0px -40% 0px" } // Triggers when element enters the middle 20% of the screen
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const hiddenClasses = [
    "translate-x-0 translate-y-12 md:translate-y-0 opacity-0 md:opacity-100 z-30",
    "md:-translate-x-[calc(100%+3rem)] translate-y-12 md:translate-y-0 opacity-0 md:opacity-100 z-20",
    "md:-translate-x-[calc(200%+6rem)] translate-y-12 md:translate-y-0 opacity-0 md:opacity-100 z-10"
  ];

  return <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-title1 md:text-largeTitle font-bold text-gray-900 mb-4">Your health, beautifully organized.</h2>
          <p className="text-title3 text-gray-600 max-w-none mx-auto whitespace-nowrap">An intuitive interface built specifically for the nuances of your GLP-1 journey.</p>
        </div>
        
        <div className="flex space-x-6 md:space-x-12 overflow-x-auto pb-12 snap-x px-4 justify-start md:justify-center" ref={containerRef}>
           {/* Mockup 1: Dashboard */}
           <div className={`snap-center shrink-0 relative transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "translate-x-0 translate-y-0 opacity-100" : hiddenClasses[0]}`}>
             <img src={mockup1} alt="Personalized Dashboard" className="w-full max-w-[280px] h-auto drop-shadow-2xl object-contain mx-auto" />
             <p className="text-center mt-6 font-semibold text-gray-800">Personalized Dashboard</p>
           </div>
           
           {/* Mockup 2: Tracker */}
           <div className={`snap-center shrink-0 relative transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "translate-x-0 translate-y-0 opacity-100" : hiddenClasses[1]}`}>
             <img src={mockup2} alt="Muscle & Hair Tracker" className="w-full max-w-[280px] h-auto drop-shadow-2xl object-contain mx-auto" />
             <p className="text-center mt-6 font-semibold text-gray-800">Muscle & Hair Tracker</p>
           </div>
           
           {/* Mockup 3: Nutrition */}
           <div className={`snap-center shrink-0 relative transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${isVisible ? "translate-x-0 translate-y-0 opacity-100" : hiddenClasses[2]}`}>
             <img src={mockup3} alt="Protein & Nutrition" className="w-full max-w-[280px] h-auto drop-shadow-2xl object-contain mx-auto" />
             <p className="text-center mt-6 font-semibold text-gray-800">Protein & Nutrition</p>
           </div>
        </div>
      </div>
    </section>;
};
export default ScreenshotShowcase;