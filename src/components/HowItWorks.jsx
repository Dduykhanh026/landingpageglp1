import { Squircle } from '@squircle-js/react';
import React, { useEffect, useRef, useState } from 'react';

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const steps = [{
    number: "01",
    title: "Log Your Shot",
    description: "Quickly record your dose, date, and injection site in seconds. Never guess when you took your last shot again."
  }, {
    number: "02",
    title: "Track Your Body",
    description: "Log meals (focusing on protein), track hydration, and document side effects to see patterns over time."
  }, {
    number: "03",
    title: "Get Insights",
    description: "Receive AI-driven suggestions, view progress charts, and generate a 1-page summary for your next doctor's visit."
  }];

  return (
    <section className="py-16 md:py-24" id="how-it-works" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase mb-2 text-[12px] sm:text-[13px]">How It Works</h2>
          <h3 className="text-title1 md:text-largeTitle font-bold text-gray-900">Three simple steps to success</h3>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 z-0">
            <div 
              className={`h-full bg-white transition-all duration-1000 ease-out ${isVisible ? 'w-full' : 'w-0'}`}
              style={{ transitionDelay: '400ms' }}
            ></div>
          </div>
          
          {steps.map((step, index) => (
            <div key={index} className="relative z-10 flex flex-col items-center text-center group">
              {/* Icon and Title */}
              <div 
                className={`flex flex-col items-center transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 300 + 200}ms` }}
              >
                <Squircle 
                  className="w-24 h-24 bg-white shadow-lg flex items-center justify-center text-title1 font-extrabold text-primary border-4 border-primary/10 mb-6 transition-all duration-300 ease-out group-hover:-translate-y-1.5 group-hover:shadow-xl group-hover:border-primary/20" 
                  cornerRadius={100} 
                  cornerSmoothing={1}
                >
                  <span>
                    {step.number}
                  </span>
                </Squircle>
                <h4 className="text-title2 font-bold text-gray-900 mb-4 transition-colors duration-300 group-hover:text-primary">
                  {step.title}
                </h4>
              </div>
              
              {/* Description (Fades in simultaneously after all titles) */}
              <p 
                className={`text-gray-600 text-title3 leading-relaxed max-w-sm transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: '1200ms' }}
              >
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;