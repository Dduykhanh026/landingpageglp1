import React from 'react';
import { Squircle } from '@squircle-js/react';

const DoctorStory = () => {
  return (
    <section className="pt-8 pb-2 md:pt-10 md:pb-3 bg-gray-50 px-4" id="doctor-story">
      <div className="max-w-4xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-8 md:mb-10">
          <h2 className="text-primary font-bold tracking-widest uppercase mb-2 text-[12px] sm:text-[13px]">
            About Dr.GLP1™
          </h2>
          <h3 className="text-[32px] sm:text-[40px] md:text-[48px] font-extrabold text-gray-900 leading-[1.1] tracking-tight">
            Real people. Real experience. <span className="font-serif italic text-primary font-normal text-[36px] sm:text-[44px] md:text-[52px]">Real purpose.</span>
          </h3>
        </div>

        <div className="flex justify-center">
          <Squircle 
            className="bg-white border border-gray-200 shadow-sm p-5 sm:p-6 w-full max-w-[640px] relative overflow-hidden" 
            cornerRadius={24} 
            cornerSmoothing={1}
          >
            <div className="text-[14px] sm:text-[15px] text-gray-700 leading-[1.45]">
              <div className="float-left mr-4 mb-1 sm:mr-5 sm:mb-2">
                <Squircle 
                  className="w-20 h-20 sm:w-[100px] sm:h-[100px] bg-gray-100 flex items-center justify-center shadow-sm overflow-hidden"
                  cornerRadius={16}
                  cornerSmoothing={1}
                >
                  <img src="/dr-elena.png" alt="Dr. Elena Morris" className="w-full h-full object-cover" />
                </Squircle>
              </div>

              <div className="pt-0.5 mb-3">
                <h3 className="font-extrabold text-[17px] sm:text-[20px] text-gray-900 leading-tight mb-0.5">
                  Dr. Elena Morris
                </h3>
                <p className="text-primary font-bold text-[12px] sm:text-[13px]">
                  Metabolic Health Specialist
                </p>
              </div>

              <p className="mb-3">
                <strong className="text-gray-900 block mb-1">“I Thought I Was Failing Treatment.”</strong>
                Dr. Elena Morris remembers one patient who arrived in tears after three months on GLP-1 medication.
              </p>

              <p className="mb-3">
                She was tracking everything in scattered notes, screenshots, and spreadsheets — but still couldn’t understand why some weeks felt amazing while others felt impossible.
              </p>

              <p className="mb-3">
                Her nausea seemed random. Her appetite changed unpredictably. Her weight plateau terrified her. Every fluctuation on the scale felt like failure. Every difficult day made her wonder if the treatment had stopped working.
              </p>

              <p className="mb-3">
                But once her data was finally visualized in one place, the patterns became clear: hydration drops, inconsistent protein intake, and medication peaks were all connected.
              </p>

              <p className="mb-3">
                “She wasn’t failing treatment,” Dr. Morris said. “She simply couldn’t see her own story yet.”
              </p>
              
              <p className="italic font-medium text-gray-900 mt-4 mb-0">
                “Most GLP-1 patients are trying to navigate a life-changing treatment with fragmented information. Better tracking creates better understanding. And better understanding reduces fear.”
              </p>

              <div className="clear-both"></div>
            </div>
          </Squircle>
        </div>
      </div>
    </section>
  );
};

export default DoctorStory;
