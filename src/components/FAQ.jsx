import { Squircle } from '@squircle-js/react';
import React, { useState } from 'react';
const FAQItem = ({
  question,
  answer
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return <div className="border-b border-gray-200">
      <button className="w-full py-6 flex justify-between items-center text-left focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
        <span className="text-title3 font-bold text-gray-900">{question}</span>
        <span className="ml-6 flex-shrink-0">
          <svg className={`w-6 h-6 text-primary transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-gray-600 text-title3 leading-relaxed">{answer}</p>
      </div>
    </div>;
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
  return <section className="py-24 " id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-title1 md:text-largeTitle font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        </div>
        
        <Squircle className="bg-white shadow-sm border border-gray-100 p-6 md:p-8" cornerRadius={28} cornerSmoothing={1}>
          {faqs.map((faq, idx) => <FAQItem key={idx} question={faq.q} answer={faq.a} />)}
        </Squircle>
      </div>
    </section>;
};
export default FAQ;