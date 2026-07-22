import { Squircle } from '@squircle-js/react';
import React from 'react';
import Button from './ui/Button';
const DoctorSummary = () => {
  return <section className="py-16 md:py-24 border-y border-gray-200" id="doctor-report">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Squircle className="bg-white shadow-xl overflow-hidden" cornerRadius={40} cornerSmoothing={1}>
          <div className="lg:flex">
            <div className="lg:w-1/2 p-12 md:p-16 flex flex-col justify-center">
              <Squircle className="inline-flex items-center px-3 py-1 bg-app-waterTrack text-app-water text-subhead font-semibold mb-6 w-max" cornerRadius={100} cornerSmoothing={1}>
                Provider Export
              </Squircle>
              <h2 className="text-title1 md:text-largeTitle font-bold text-gray-900 mb-6">Make doctor visits 10x more productive.</h2>
              <p className="text-title3 text-gray-600 mb-8 leading-relaxed">
                Stop trying to remember how you felt three weeks ago. Generate a clean, comprehensive 1-page PDF summary covering your medication history, weight trends, and side effect logs to share directly with your healthcare provider.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center text-gray-700"><span className="text-primary mr-2">✓</span> Current Dose & History</li>
                <li className="flex items-center text-gray-700"><span className="text-primary mr-2">✓</span> Weight change chart</li>
                <li className="flex items-center text-gray-700"><span className="text-primary mr-2">✓</span> Side effect frequency report</li>
              </ul>
              <div>
                <Button variant="outline" className="border-gray-300">Preview Sample PDF</Button>
              </div>
            </div>
            <div className="lg:w-1/2 bg-gray-100 p-12 flex justify-center items-center">
              {/* PDF Placeholder */}
              <Squircle className="bg-white w-full max-w-md aspect-[1/1.4] shadow-2xl p-8 flex flex-col border border-gray-200 transform rotate-2 hover:rotate-0 transition-transform duration-300" cornerRadius={8} cornerSmoothing={1}>
                 <div className="border-b-2 border-gray-800 pb-4 mb-6 flex justify-between items-end">
                    <div>
                       <h4 className="font-black text-title2 uppercase tracking-tighter">GLP-1 Progress</h4>
                       <p className="text-subhead text-gray-500 font-medium mt-1">Patient: Jane Doe • Nov 2026</p>
                    </div>
                    <Squircle className="w-12 h-12 bg-gray-200" cornerRadius={100} cornerSmoothing={1}></Squircle>
                 </div>
                 
                 <div className="space-y-6 flex-grow">
                    <div>
                       <div className="text-caption1 font-bold text-gray-400 uppercase tracking-wider mb-2">Medication</div>
                       <Squircle className="h-8 bg-gray-100 w-full" cornerRadius={4} cornerSmoothing={1}></Squircle>
                    </div>
                    
                    <div>
                       <div className="text-caption1 font-bold text-gray-400 uppercase tracking-wider mb-2">Weight Trend</div>
                       <Squircle className="h-32 bg-gray-50 border border-gray-100 flex items-end p-2 gap-1" cornerRadius={4} cornerSmoothing={1}>
                          <Squircle className="bg-gray-300 w-full h-full" cornerRadius={2} cornerSmoothing={1}></Squircle>
                       </Squircle>
                    </div>
                    
                    <div>
                       <div className="text-caption1 font-bold text-gray-400 uppercase tracking-wider mb-2">Reported Side Effects</div>
                       <Squircle className="h-4 bg-gray-100 w-3/4 mb-2" cornerRadius={4} cornerSmoothing={1}></Squircle>
                       <Squircle className="h-4 bg-gray-100 w-1/2" cornerRadius={4} cornerSmoothing={1}></Squircle>
                    </div>
                 </div>
              </Squircle>
            </div>
          </div>
        </Squircle>
      </div>
    </section>;
};
export default DoctorSummary;