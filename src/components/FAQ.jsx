import { Squircle } from '@squircle-js/react';
import React, { useState } from 'react';

const FAQItem = ({
  question,
  answer,
  id
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentId = `faq-content-${id}`;
  const headerId = `faq-header-${id}`;

  return (
    <div className="border-b border-gray-100 last:border-0">
      <h3 className="m-0 p-0 text-[17px] sm:text-title3 font-bold text-gray-900">
        <button 
          id={headerId}
          aria-expanded={isOpen}
          aria-controls={contentId}
          className="w-full py-5 sm:py-6 flex justify-between items-start text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:rounded-lg group" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="group-hover:text-primary transition-colors pr-4">{question}</span>
          <span className="ml-2 mt-0.5 flex-shrink-0">
            <svg 
              className={`w-6 h-6 text-primary transform motion-safe:transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
      </h3>
      <div 
        id={contentId}
        role="region"
        aria-labelledby={headerId}
        className="grid motion-safe:transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
        style={{ 
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          opacity: isOpen ? 1 : 0,
          visibility: isOpen ? 'visible' : 'hidden' 
        }}
      >
        <div className="overflow-hidden">
          <p className="text-gray-600 text-[15px] sm:text-title3 leading-relaxed pb-5 sm:pb-6 pr-4 sm:pr-8">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const faqs = [{
    q: "Is this app really free?",
    a: "Yes, absolutely! All of our tracking features, advanced insights, and dose reminders are 100% free forever. We don't charge any premium fees."
  }, {
    q: "Which medications are supported?",
    a: "Dr. GLP-1 supports all GLP-1 medications including Ozempic, Wegovy, Mounjaro, Zepbound, Rybelsus, Saxenda, and compounded versions. You can also add custom medications."
  }, {
    q: "Does it remind me to take my shot?",
    a: "Yes! You can set customizable reminders for your specific injection day and time. We'll send you a push notification so you never forget."
  }, {
    q: "Can I track my side effects?",
    a: "Absolutely. Our specialized symptom tracker lets you log nausea, fatigue, appetite changes, and more, helping you see patterns related to your dose days."
  }, {
    q: "Is my health data private?",
    a: "Privacy is our top priority. Your data is encrypted, we never sell it to third parties, and you can export or delete your entire account history at any time."
  }, {
    q: "Does this replace my doctor?",
    a: "No. Dr. GLP-1 is a tracking tool designed to empower you and provide better data for your medical team. Always consult your healthcare provider for medical advice."
  }];

  return (
    <section className="py-16 md:py-24" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-largeTitle font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        </div>
        
        <Squircle className="bg-white shadow-sm border border-gray-100 p-4 sm:p-6 md:p-8" cornerRadius={28} cornerSmoothing={1}>
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} id={idx} question={faq.q} answer={faq.a} />
          ))}
        </Squircle>
      </div>
    </section>
  );
};

export default FAQ;