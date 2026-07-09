import { Squircle } from '@squircle-js/react';
import React from 'react';
import Card from './ui/Card';
const Credibility = () => {
  return <section className="py-24 " id="science">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Expert Advisory Board */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-title1 font-bold text-gray-900 mb-4">Developed with Medical Professionals</h2>
            <p className="text-title3 text-gray-600 max-w-2xl mx-auto">Our tracking methodologies are designed in consultation with endocrinologists and registered dietitians.</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center gap-8">
             <Card className="max-w-md flex items-center gap-6 p-8">
                <Squircle className="w-24 h-24 bg-gray-200 flex-shrink-0" cornerRadius={100} cornerSmoothing={1}></Squircle>
                <div>
                   <h4 className="font-bold text-title3 text-gray-900">Dr. Sarah Jenkins, MD</h4>
                   <p className="text-primary font-medium mb-2">Endocrinologist</p>
                   <p className="text-subhead text-gray-600 italic">"The ability for patients to track their side effects precisely alongside their dose history is a game-changer for our clinic."</p>
                </div>
             </Card>
             
             <Card className="max-w-md flex items-center gap-6 p-8">
                <Squircle className="w-24 h-24 bg-gray-200 flex-shrink-0" cornerRadius={100} cornerSmoothing={1}></Squircle>
                <div>
                   <h4 className="font-bold text-title3 text-gray-900">Michael Chen, RDN</h4>
                   <p className="text-primary font-medium mb-2">Registered Dietitian</p>
                   <p className="text-subhead text-gray-600 italic">"Focusing on protein and fiber rather than just calories is exactly what GLP-1 patients need to maintain muscle."</p>
                </div>
             </Card>
          </div>
        </div>


        
        {/* Medical Disclaimer */}
        <div className="mt-12 text-center text-subhead text-gray-400 max-w-3xl mx-auto">
          <p>Disclaimer: Dr. GLP-1 is a tracking tool and is not intended to provide medical advice, diagnosis, or treatment. Always consult with your healthcare provider before making changes to your medication or diet.</p>
        </div>
        
      </div>
    </section>;
};
export default Credibility;