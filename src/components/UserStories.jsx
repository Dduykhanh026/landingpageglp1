import React, { useRef, useState, useEffect } from 'react';
import { Squircle } from '@squircle-js/react';
import { Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import jessica from '../assets/jessica.png';
import david from '../assets/david.png';
import amanda from '../assets/amanda.png';

const UserStories = () => {
  const scrollRef = useRef(null);

  const scrollPrev = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  };

  const scrollNext = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  };

  const stories = [
    {
      name: "Jessica T.",
      image: jessica,
      meds: "Wegovy 1.0mg",
      weightLost: "Down 35 lbs",
      paragraphs: [
        "Jessica started her GLP-1 journey to regain control of her health and build sustainable habits.",
        "Tracking her protein intake and hydration became crucial to ensuring she lost fat while preserving muscle mass.",
        "Combining firsthand experience with consistent tracking, Jessica has turned her progress into lasting health."
      ]
    },
    {
      name: "David M.",
      image: david,
      meds: "Mounjaro 5.0mg",
      weightLost: "Down 50 lbs",
      paragraphs: [
        "David needed a clear, reliable way to share his weekly side-effect logs and dose timing with his physician.",
        "The doctor export feature saved his appointment by giving his doctor instant visibility into dose day peaks.",
        "Combining consistency with smart data tracking, David has maintained his 50 lbs weight loss milestone."
      ]
    },
    {
      name: "Amanda K.",
      image: amanda,
      meds: "Ozempic 0.5mg",
      weightLost: "Down 22 lbs",
      paragraphs: [
        "Amanda used to struggle with remembering shot schedules and managing unpredictable appetite changes.",
        "Having a complete history and smart reminders helped her build a stress-free weekly routine.",
        "With better tracking and data visualization, Amanda navigates her GLP-1 treatment with complete confidence."
      ]
    }
  ];

  return (
    <section className="py-6 md:py-10 bg-gray-50 px-4" id="user-stories">
      <div className="max-w-4xl mx-auto relative">
        {/* Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {/* Hide Webkit Scrollbar */}
          <style dangerouslySetInnerHTML={{__html: `
            div::-webkit-scrollbar { display: none; }
          `}} />

          {stories.map((story, idx) => (
            <div key={idx} className="w-full shrink-0 snap-center flex justify-center px-1">
              <Squircle 
                className="bg-white border border-gray-200 shadow-sm w-full max-w-[600px] p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden" 
                cornerRadius={28} 
                cornerSmoothing={1}
              >
                {/* Left Navigation Icon inside Card */}
                <button 
                  onClick={scrollPrev}
                  className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-30 p-1 text-gray-800 hover:text-black hover:scale-110 active:scale-95 transition-all focus:outline-none drop-shadow-[0_2px_8px_rgba(255,255,255,1)] filter"
                  aria-label="Previous story"
                >
                  <ChevronLeft className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.5]" />
                </button>

                {/* Right Navigation Icon inside Card */}
                <button 
                  onClick={scrollNext}
                  className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-30 p-1 text-gray-800 hover:text-black hover:scale-110 active:scale-95 transition-all focus:outline-none drop-shadow-[0_2px_8px_rgba(255,255,255,1)] filter"
                  aria-label="Next story"
                >
                  <ChevronRight className="w-8 h-8 sm:w-10 sm:h-10 stroke-[2.5]" />
                </button>

                {/* 2-Column Main Content */}
                <div className="flex flex-row gap-3.5 sm:gap-5 items-stretch mb-3">
                  {/* Left Column - Auto-Stretching Photo Container */}
                  <div className="w-[120px] sm:w-[160px] md:w-[185px] shrink-0 self-stretch flex">
                    <Squircle className="w-full h-full min-h-[170px] sm:min-h-[200px] bg-gray-100 relative overflow-hidden shadow-xs" cornerRadius={18} cornerSmoothing={1}>
                      <img src={story.image} alt={story.name} className="w-full h-full object-cover" />
                      <div className="absolute bottom-2 left-2 bg-gray-900/85 backdrop-blur-md rounded-lg px-2 py-1 text-white shadow-sm">
                        <span className="font-bold text-[10px] sm:text-xs">{story.weightLost}</span>
                      </div>
                    </Squircle>
                  </div>

                  {/* Right Column - Text Details */}
                  <div className="flex-1 flex flex-col justify-between min-w-0 py-0.5">
                    <div>
                      <div className="mb-2">
                        <h3 className="font-extrabold text-base sm:text-xl md:text-2xl text-gray-900 leading-tight mb-0.5">{story.name}</h3>
                        <p className="text-primary font-bold text-xs sm:text-sm">{story.meds}</p>
                      </div>

                      <div className="text-[11px] sm:text-xs md:text-sm text-gray-600 leading-relaxed space-y-1.5 sm:space-y-2">
                        {story.paragraphs.map((p, pIdx) => (
                          <p key={pIdx}>{p}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Full-Width Pill Banner */}
                <div className="w-full mt-1">
                  <div className="bg-sky-50 text-primary font-semibold text-[11px] sm:text-xs rounded-full py-2.5 px-3 flex items-center justify-center gap-1.5 w-full text-center">
                    <Heart className="w-3.5 h-3.5 shrink-0 text-primary" fill="currentColor" />
                    <span>Built by GLP-1 users, for GLP-1 users</span>
                  </div>
                </div>
              </Squircle>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserStories;