import { Squircle } from '@squircle-js/react';
import React from 'react';
import Button from './ui/Button';
const FinalCTA = () => {
  return <section className="py-24 bg-gradient-to-br from-primary to-primary-dark text-white text-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-largeTitle md:text-display2 font-extrabold mb-6 leading-tight">Ready to take control of your GLP-1 journey?</h2>
        <p className="text-title3 md:text-title2 text-white/80 mb-10 max-w-2xl mx-auto">
          Join thousands of users tracking their progress, managing side effects, and preserving muscle mass.
        </p>
        
        <div className="flex justify-center mb-8">
           <a href="https://apps.apple.com/us/app/free-glp-1-tracker-dr-glp1/id6760417769" target="_blank" rel="noopener noreferrer" className="inline-block cursor-pointer">
             <Squircle cornerRadius={16} cornerSmoothing={1} className="inline-flex items-center justify-center overflow-hidden transition-transform hover:scale-105 bg-black w-[192px] h-[56px] shadow-2xl">
               <img src="/app-store-badge.svg" alt="Download on the App Store" className="w-[192px] h-[64px] max-w-none" />
             </Squircle>
           </a>
        </div>
        
        <p className="mt-8 text-white/60">Free forever • No credit card required to start</p>
      </div>
    </section>;
};
export default FinalCTA;