import { Squircle } from '@squircle-js/react';
import React from 'react';
import Card from './ui/Card';
import jessica from '../assets/jessica.png';
import david from '../assets/david.png';
import amanda from '../assets/amanda.png';
const UserStories = () => {
  const stories = [{
    name: "Jessica T.",
    image: jessica,
    meds: "Wegovy 1.0mg",
    quote: "Finally, an app that gets it. Being able to track my protein intake to make sure I don't lose muscle has been incredible.",
    weightLost: "Down 35 lbs"
  }, {
    name: "David M.",
    image: david,
    meds: "Mounjaro 5.0mg",
    quote: "The doctor export feature saved my last appointment. My doctor loved seeing exactly when my nausea peaked after dose days.",
    weightLost: "Down 50 lbs"
  }, {
    name: "Amanda K.",
    image: amanda,
    meds: "Ozempic 0.5mg",
    quote: "I used to forget when I took my shot. Now I have a complete history and get a reminder exactly when I need it.",
    weightLost: "Down 22 lbs"
  }];
  return <section className="py-24 " id="reviews">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-title1 md:text-largeTitle font-bold text-gray-900 mb-4">Real stories from real users</h2>
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="text-yellow-400 text-title2">★★★★★</span>
            <span className="font-bold text-gray-900 text-title3">4.8</span>
          </div>
          <p className="text-gray-600">Based on thousands of reviews on the App Store</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {stories.map((story, idx) => (
            <Card key={idx} className="bg-gray-50 border-none flex flex-col h-full relative">
              <div className="absolute top-6 right-6 flex items-center gap-1 text-app-greenDark text-caption1 font-medium">
                <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Verified Review
              </div>
              <div className="flex items-center gap-4 mb-6">
                <Squircle className="w-12 h-12 bg-gray-200 shrink-0 overflow-hidden shadow-sm" cornerRadius={100} cornerSmoothing={1}>
                  {story.image && <img src={story.image} alt={story.name} className="w-full h-full object-cover" />}
                </Squircle>
                <div>
                  <h4 className="font-bold text-gray-900">{story.name}</h4>
                  <Squircle className="text-caption1 font-semibold text-primary bg-app-greenLight px-2 py-1" cornerRadius={100} cornerSmoothing={1}>{story.meds}</Squircle>
                </div>
              </div>
              <div className="flex-grow">
                <p className="text-gray-700 italic leading-relaxed">"{story.quote}"</p>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200 text-center">
                 <span className="font-bold text-title3 text-gray-900">{story.weightLost}</span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>;
};
export default UserStories;