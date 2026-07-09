import React, { useState, useEffect, useRef } from 'react';
import Card from './ui/Card';
import { CalendarX, AlertCircle, BicepsFlexed, Scale } from 'lucide-react';

const ProblemSection = () => {
  const problems = [
    {
      icon: <CalendarX className="w-10 h-10 text-primary" strokeWidth={1.5} />,
      title: "Forgetting Shot Days",
      description: "It's easy to lose track of when you took your last dose, leading to inconsistent medication schedules."
    },
    {
      icon: <AlertCircle className="w-10 h-10 text-primary" strokeWidth={1.5} />,
      title: "Unpredictable Side Effects",
      description: "Not knowing if your nausea or fatigue follows a pattern or is linked to specific foods or dosage changes."
    },
    {
      icon: <BicepsFlexed className="w-10 h-10 text-primary" strokeWidth={1.5} />,
      title: "Muscle Loss Risk",
      description: "Losing weight fast often means losing muscle if you aren't tracking your protein intake properly."
    },
    {
      icon: <Scale className="w-10 h-10 text-primary" strokeWidth={1.5} />,
      title: "Scale Obsession",
      description: "Focusing only on the scale without seeing the full picture of body changes and non-scale victories."
    }
  ];

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      },
      { threshold: 0, rootMargin: "-40% 0px -40% 0px" }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  const hiddenClasses = [
    "translate-x-0 translate-y-12 md:translate-y-0 opacity-0 md:opacity-100 z-40",
    "md:-translate-x-[calc(100%+2rem)] translate-y-12 md:translate-y-0 opacity-0 md:opacity-100 z-30",
    "md:translate-x-0 md:-translate-y-[calc(100%+2rem)] lg:-translate-x-[calc(200%+4rem)] lg:translate-y-0 translate-y-12 opacity-0 md:opacity-100 z-20",
    "md:-translate-x-[calc(100%+2rem)] md:-translate-y-[calc(100%+2rem)] lg:-translate-x-[calc(300%+6rem)] lg:translate-y-0 translate-y-12 opacity-0 md:opacity-100 z-10"
  ];

  return (
    <section className="py-20 " id="problem">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-primary font-semibold tracking-wide uppercase mb-3">The Challenge</h2>
          <h3 className="text-title1 md:text-largeTitle font-bold text-gray-900 mb-6">Weight loss is more than just an injection.</h3>
          <p className="text-title3 text-gray-600">
            Taking a GLP-1 medication like Ozempic or Wegovy is life-changing, but it comes with challenges that traditional calorie trackers aren't built to handle.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" ref={sectionRef}>
          {problems.map((item, index) => (
            <div 
              key={index}
              className={`relative transition-all duration-[2000ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isVisible ? "translate-x-0 translate-y-0 opacity-100" : hiddenClasses[index]
              }`}
            >
              <Card className="bg-white hover:-translate-y-1 transition-transform duration-300 h-full">
                <div className="text-largeTitle mb-4">{item.icon}</div>
                <h4 className="text-title3 font-bold text-gray-900 mb-3">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
