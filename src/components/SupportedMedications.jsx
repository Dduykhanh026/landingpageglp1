import { Squircle } from '@squircle-js/react';
import React from 'react';
const SupportedMedications = () => {
  const meds = ["Ozempic®", "Wegovy®", "Mounjaro®", "Zepbound®", "Semaglutide", "Tirzepatide", "Rybelsus®", "Wegovy® Pill", "Compounded GLP-1", "... and 30+ more"];
  return <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-title2 md:text-title1 font-bold text-gray-900 mb-8">Works with your prescribed medication</h2>
        
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 max-w-4xl mx-auto">
          {meds.map((med, index) => <Squircle key={index} className="px-6 py-3 border border-gray-200 bg-gray-50 text-gray-700 font-medium text-title3 hover:border-primary hover:text-primary transition-colors cursor-default" cornerRadius={100} cornerSmoothing={1}>
              {med}
            </Squircle>)}
        </div>
        
        <p className="mt-8 text-subhead text-gray-400 max-w-2xl mx-auto">
          All product and company names are trademarks™ or registered® trademarks of their respective holders. Use of them does not imply any affiliation with or endorsement by them.
        </p>
      </div>
    </section>;
};
export default SupportedMedications;