import React from 'react';
import Card from './ui/Card';

const WhoItsFor = () => {
  const users = [
    { title: "New GLP-1 Users", desc: "Just started your first dose and want to track how your body responds." },
    { title: "Dose Increasers", desc: "Titrating up your dose and need to monitor changes in side effects closely." },
    { title: "Muscle Preservers", desc: "Focused on high protein intake and strength training while losing fat." },
    { title: "Data Nerds", desc: "Love seeing charts, streaks, and detailed insights about your health." },
  ];

  return (
    <section className="py-16 md:py-24 bg-primary text-white" id="who-its-for">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-title1 md:text-largeTitle font-bold mb-4">Built for your specific journey</h2>
          <p className="text-title3 text-white/80">Whether you're on day 1 or year 1, Dr. GLP-1 adapts to you.</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {users.map((user, idx) => (
            <Card key={idx} className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-colors">
              <h3 className="text-title3 font-bold mb-3">{user.title}</h3>
              <p className="text-white/60 leading-relaxed text-subhead">{user.desc}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsFor;
