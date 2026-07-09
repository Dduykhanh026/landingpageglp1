import React, { useEffect, useRef, useState } from 'react';
import Card from './ui/Card';
import { Syringe, Bell, Utensils, BicepsFlexed, Droplet, Frown, TrendingUp, Scissors } from 'lucide-react';

const FeatureGrid = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const features = [
    { icon: <BicepsFlexed className="w-8 h-8 text-primary" strokeWidth={1.5} />, title: "Protect Muscle", desc: "Prioritize muscle retention with dedicated protein intake monitoring." },
    { icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary"><circle cx="12" cy="9" r="4" /><path d="M9 13.5C7.5 14.5 6 17 6 20h12c0-3-1.5-5.5-3-6.5" /><path d="M8 8c-2 2-3 5-3 8" /><path d="M16 8c2 2 3 5 3 8" /><path d="M14.5 4a3.5 3.5 0 0 0-5 0" /></svg>, title: "Track Hair", desc: "Monitor hair health and track any thinning or loss during your weight loss journey." },
    { icon: <Syringe className="w-8 h-8 text-primary" strokeWidth={1.5} />, title: "Shot History", desc: "Keep a precise log of injection dates, locations, and dosage amounts." },
    { icon: <Bell className="w-8 h-8 text-primary" strokeWidth={1.5} />, title: "Dose Reminder", desc: "Smart notifications ensure you never miss your scheduled injection day." },
    { icon: <Utensils className="w-8 h-8 text-primary" strokeWidth={1.5} />, title: "Meal Logging", desc: "Easily log meals via text, voice, or photo to track your nutrition." },
    { icon: <Droplet className="w-8 h-8 text-primary" strokeWidth={1.5} />, title: "Water Tracking", desc: "Stay hydrated to minimize side effects and support weight loss." },
    { icon: <Frown className="w-8 h-8 text-primary" strokeWidth={1.5} />, title: "Side Effects", desc: "Log symptoms like nausea or fatigue to identify patterns with your dose." },
    { icon: <TrendingUp className="w-8 h-8 text-primary" strokeWidth={1.5} />, title: "Progress Charts", desc: "Visualize your weight, body changes, and symptom trends over time." },
  ];

  return (
    <section className="py-24" id="features" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-title1 md:text-largeTitle font-bold text-gray-900 mb-4">Everything you need to succeed</h2>
          <p className="text-title3 text-gray-600">Built specifically for GLP-1 users, not just calorie counters.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feat, idx) => (
            <div 
              key={idx}
              className={`h-full transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${idx * 100 + 100}ms` }}
            >
              <Card className="h-full bg-gray-50 border-none hover:bg-white hover:shadow-md transition-all">
                <div className="text-title1 mb-4">{feat.icon}</div>
                <h4 className="text-title3 font-bold text-gray-900 mb-2">{feat.title}</h4>
                <p className="text-gray-600 text-subhead leading-relaxed">{feat.desc}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
