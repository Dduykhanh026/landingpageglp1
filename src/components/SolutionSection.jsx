import { Squircle } from '@squircle-js/react';
import React from 'react';
const SolutionSection = () => {
  return <section className="py-20 bg-primary text-white" id="solution">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <h2 className="text-title1 md:text-largeTitle font-bold mb-6">
              Your All-in-One GLP-1 Companion
            </h2>
            <p className="text-white/80 text-title3 max-w-xl">
              We built Dr. GLP-1 to solve the unique challenges of GLP-1 medications. 
              Track your shots, meals, symptoms, and progress—and get a one-page summary 
              for your doctor, all in a single app.
            </p>
          </div>
          
          <div className="lg:w-5/12">
            <ul className="space-y-4">
              {["Smart Dose Reminders & Shot History", "GLP-1 Specific Nutrition (Protein & Fiber focus)", "Comprehensive Side Effect Tracker", "Exportable Doctor Reports"].map((item, index) => <li key={index} className="flex items-center">
                  <svg className="w-6 h-6 text-white mr-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-medium text-title3">{item}</span>
                </li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>;
};
export default SolutionSection;