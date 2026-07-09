import { Squircle } from '@squircle-js/react';
import React, { useState } from 'react';
import Card from './ui/Card';
import Button from './ui/Button';
const QuizSection = () => {
  const [step, setStep] = useState(1);
  return <section className="py-24  ">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-title1 md:text-largeTitle font-bold text-gray-900 mb-4">Get your personalized tracking plan</h2>
          <p className="text-gray-600">Answer 3 quick questions to see how Dr. GLP-1 can help you.</p>
        </div>
        
        <Card className="p-8 md:p-12 shadow-lg relative overflow-hidden">
           {/* Progress bar */}
           <div className="absolute top-0 left-0 w-full h-2 bg-gray-100">
             <div className="h-full bg-primary transition-all duration-500" style={{
            width: `${step / 4 * 100}%`
          }}></div>
           </div>
           
           <div className="mt-4">
             {step === 1 && <div className="animate-fade-in">
                 <h3 className="text-title2 font-bold text-center mb-8">What medication are you currently on?</h3>
                 <div className="grid grid-cols-2 gap-4">
                    {["Ozempic", "Wegovy", "Mounjaro", "Zepbound"].map(m => <Squircle key={m} onClick={() => setStep(2)} className="py-4 px-6 border-2 border-gray-200 hover:border-primary hover:bg-app-greenLight text-title3 font-medium transition-all" cornerRadius={20} cornerSmoothing={1}>{m}</Squircle>)}
                 </div>
                 <button onClick={() => setStep(2)} className="mt-4 text-gray-500 hover:text-gray-900 w-full text-center">Other / Not sure yet</button>
               </div>}
             
             {step === 2 && <div className="animate-fade-in">
                 <h3 className="text-title2 font-bold text-center mb-8">What is your main tracking goal?</h3>
                 <div className="flex flex-col gap-3">
                    {["Track my doses and injection sites", "Monitor side effects", "Track protein and preserve muscle", "All of the above"].map(g => <Squircle key={g} onClick={() => setStep(3)} className="py-4 px-6 border-2 border-gray-200 hover:border-primary hover:bg-app-greenLight text-title3 font-medium text-left transition-all" cornerRadius={20} cornerSmoothing={1}>{g}</Squircle>)}
                 </div>
               </div>}
             
             {step === 3 && <div className="animate-fade-in">
                 <h3 className="text-title2 font-bold text-center mb-8">Are you preparing for a doctor's visit soon?</h3>
                 <div className="grid grid-cols-2 gap-4">
                    <Squircle onClick={() => setStep(4)} className="py-6 px-6 border-2 border-gray-200 hover:border-primary hover:bg-app-greenLight text-title3 font-bold transition-all" cornerRadius={20} cornerSmoothing={1}>Yes</Squircle>
                    <Squircle onClick={() => setStep(4)} className="py-6 px-6 border-2 border-gray-200 hover:border-primary hover:bg-app-greenLight text-title3 font-bold transition-all" cornerRadius={20} cornerSmoothing={1}>No</Squircle>
                 </div>
               </div>}
             
             {step === 4 && <div className="animate-fade-in text-center">
                 <Squircle className="w-20 h-20 bg-app-greenLight flex items-center justify-center mx-auto mb-6" cornerRadius={100} cornerSmoothing={1}>
                    <svg className="w-10 h-10 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                 </Squircle>
                 <h3 className="text-title2 font-bold mb-4">Your plan is ready!</h3>
                 <p className="text-gray-600 mb-8 max-w-md mx-auto">We've customized your dashboard to focus on dose tracking and protein monitoring. Enter your email to get your free plan and app download link.</p>
                 <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
                    <Squircle type="email" placeholder="Enter your email" className="flex-grow px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent" cornerRadius={20} cornerSmoothing={1} />
                    <Button>Get Free Plan</Button>
                 </div>
               </div>}
           </div>
        </Card>
      </div>
    </section>;
};
export default QuizSection;