import React from 'react';
import Card from './ui/Card';
import Button from './ui/Button';

const Pricing = () => {
  return (
    <section className="py-24 " id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-title1 md:text-largeTitle font-bold text-gray-900 mb-4">Simple, transparent pricing</h2>
          <p className="text-title3 text-gray-600">Start for free. Upgrade when you need more power.</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <Card className="border-gray-200 flex flex-col h-full hover:border-gray-300 transition-colors">
            <h3 className="text-2xl sm:text-title2 font-bold text-gray-900 mb-2">Basic Track</h3>
            <p className="text-gray-500 text-sm sm:text-base mb-6">Everything you need to get started.</p>
            <div className="mb-8 flex items-baseline">
               <span className="text-5xl sm:text-display2 font-extrabold text-gray-900">$0</span>
               <span className="text-gray-500 font-medium ml-2">/forever</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
               <li className="flex items-start text-gray-700 text-base sm:text-lg"><span className="text-primary mr-3 font-bold shrink-0">✓</span> Basic Shot Logging</li>
               <li className="flex items-start text-gray-700 text-base sm:text-lg"><span className="text-primary mr-3 font-bold shrink-0">✓</span> Simple Weight Tracking</li>
               <li className="flex items-start text-gray-700 text-base sm:text-lg"><span className="text-primary mr-3 font-bold shrink-0">✓</span> Dose Reminders</li>
            </ul>
            <Button variant="outline" className="w-full text-base sm:text-title3 py-3 sm:py-4 min-h-[56px] mt-auto">Get Started Free</Button>
          </Card>

          {/* Premium Tier */}
          <Card className="border-2 border-primary relative shadow-xl md:scale-105 bg-app-darkBg text-white flex flex-col h-full">
            <div className="absolute top-0 right-0 bg-primary text-white text-[11px] sm:text-caption1 font-bold px-3 py-1.5 rounded-bl-xl rounded-tr-2xl uppercase tracking-wider shadow-sm">Most Popular</div>
            <h3 className="text-2xl sm:text-title2 font-bold mb-2 pr-24">Premium Companion</h3>
            <p className="text-gray-400 text-sm sm:text-base mb-6">Advanced insights and doctor reports.</p>
            <div className="mb-8 flex items-baseline">
               <span className="text-5xl sm:text-display2 font-extrabold">$7.99</span>
               <span className="text-gray-400 font-medium ml-2">/month</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
               <li className="flex items-start text-gray-200 text-base sm:text-lg"><span className="text-primary mr-3 font-bold shrink-0">✓</span> Everything in Free</li>
               <li className="flex items-start text-gray-200 text-base sm:text-lg"><span className="text-primary mr-3 font-bold shrink-0">✓</span> Advanced Side Effect Logging</li>
               <li className="flex items-start text-gray-200 text-base sm:text-lg"><span className="text-primary mr-3 font-bold shrink-0">✓</span> Protein & Nutrition Tracking</li>
               <li className="flex items-start text-gray-200 text-base sm:text-lg"><span className="text-primary mr-3 font-bold shrink-0">✓</span> PDF Doctor Export</li>
               <li className="flex items-start text-gray-200 text-base sm:text-lg"><span className="text-primary mr-3 font-bold shrink-0">✓</span> AI Weekly Insights</li>
            </ul>
            <Button className="w-full text-base sm:text-title3 py-3 sm:py-4 min-h-[56px] mt-auto shadow-lg hover:shadow-primary/30 transition-all border-none">Start 7-Day Free Trial</Button>
            <p className="text-center text-[12px] sm:text-caption1 text-gray-500 mt-4 font-medium">Cancel anytime.</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
