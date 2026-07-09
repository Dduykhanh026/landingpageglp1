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
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Tier */}
          <Card className="border-gray-200">
            <h3 className="text-title2 font-bold text-gray-900 mb-2">Basic Track</h3>
            <p className="text-gray-500 mb-6">Everything you need to get started.</p>
            <div className="mb-8">
               <span className="text-display2 font-extrabold text-gray-900">$0</span>
               <span className="text-gray-500 font-medium">/forever</span>
            </div>
            <ul className="space-y-4 mb-8">
               <li className="flex text-gray-700"><span className="text-primary mr-3 font-bold">✓</span> Basic Shot Logging</li>
               <li className="flex text-gray-700"><span className="text-primary mr-3 font-bold">✓</span> Simple Weight Tracking</li>
               <li className="flex text-gray-700"><span className="text-primary mr-3 font-bold">✓</span> Dose Reminders</li>
            </ul>
            <Button variant="outline" className="w-full text-title3">Get Started Free</Button>
          </Card>

          {/* Premium Tier */}
          <Card className="border-2 border-primary relative shadow-xl scale-105 md:-mt-4 md:mb-4 bg-app-darkBg text-white flex flex-col">
            <div className="absolute top-0 right-0 bg-primary text-white text-caption1 font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl uppercase tracking-wider">Most Popular</div>
            <h3 className="text-title2 font-bold mb-2">Premium Companion</h3>
            <p className="text-gray-400 mb-6">Advanced insights and doctor reports.</p>
            <div className="mb-8">
               <span className="text-display2 font-extrabold">$7.99</span>
               <span className="text-gray-400 font-medium">/month</span>
            </div>
            <ul className="space-y-4 mb-8 flex-grow">
               <li className="flex text-gray-300"><span className="text-primary mr-3 font-bold">✓</span> Everything in Free</li>
               <li className="flex text-gray-300"><span className="text-primary mr-3 font-bold">✓</span> Advanced Side Effect Logging</li>
               <li className="flex text-gray-300"><span className="text-primary mr-3 font-bold">✓</span> Protein & Nutrition Tracking</li>
               <li className="flex text-gray-300"><span className="text-primary mr-3 font-bold">✓</span> PDF Doctor Export</li>
               <li className="flex text-gray-300"><span className="text-primary mr-3 font-bold">✓</span> AI Weekly Insights</li>
            </ul>
            <Button className="w-full text-title3 mt-auto">Start 7-Day Free Trial</Button>
            <p className="text-center text-caption1 text-gray-500 mt-4">Cancel anytime.</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
