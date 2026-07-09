import { Squircle } from '@squircle-js/react';
import React from 'react';
import Card from './ui/Card';
const PrivacySection = () => {
  const points = [{
    title: "Private by Design",
    desc: "We don't sell your health data to third parties. Period."
  }, {
    title: "Export Anytime",
    desc: "Your data belongs to you. Export it to CSV or PDF whenever you want."
  }, {
    title: "Delete Your Data",
    desc: "One tap to permanently delete your account and all associated data."
  }, {
    title: "Not Medical Advice",
    desc: "We provide tracking tools, not diagnoses. Always consult your doctor."
  }];
  return <section className="py-20 bg-app-darkBg text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <svg className="w-12 h-12 text-primary mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <h2 className="text-title1 font-bold mb-4">Your health data is sacred.</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">We believe privacy is a fundamental right, especially when it comes to your body and your medication.</p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((point, idx) => <Squircle key={idx} className="bg-app-darkCard p-6 border border-gray-700 text-center" cornerRadius={20} cornerSmoothing={1}>
              <h4 className="font-bold text-title3 mb-2 text-gray-100">{point.title}</h4>
              <p className="text-gray-400 text-subhead">{point.desc}</p>
            </Squircle>)}
        </div>
      </div>
    </section>;
};
export default PrivacySection;