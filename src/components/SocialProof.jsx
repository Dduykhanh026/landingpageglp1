import React from 'react';
import { Star } from 'lucide-react';

const SocialProof = () => {
  const metrics = [
    { label: "Downloads", value: "1M+" },
    { label: "App Store Rating", value: (
      <span className="flex items-center justify-center gap-1">
        4.8/5 <Star className="w-7 h-7 md:w-9 md:h-9 fill-[#FFB800] text-[#FFB800]" />
      </span>
    ) },
    { label: "User Reviews", value: "20K+" },
    { label: "Features", value: "100% Free to start" },
  ];

  return (
    <section className="py-12 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-2 gap-y-8 md:gap-8 text-center">
          {metrics.map((metric, index) => (
            <div key={index} className="flex flex-col items-center justify-center px-1">
              <span className="text-[22px] sm:text-title1 md:text-largeTitle font-extrabold text-gray-900 mb-1 md:mb-2 leading-tight text-center break-words">{metric.value}</span>
              <span className="text-[11px] sm:text-caption1 md:text-subhead font-bold text-gray-500 uppercase tracking-wider text-center">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
