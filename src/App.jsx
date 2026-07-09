import React from 'react';
import TrustBar from './components/TrustBar';
import Header from './components/Header';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import ScreenshotShowcase from './components/ScreenshotShowcase';
import HowItWorks from './components/HowItWorks';
import FeatureGrid from './components/FeatureGrid';
import FeatureDetail from './components/FeatureDetail';
import DoctorSummary from './components/DoctorSummary';
import SupportedMedications from './components/SupportedMedications';
import WhoItsFor from './components/WhoItsFor';

import UserStories from './components/UserStories';
import PrivacySection from './components/PrivacySection';


import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <TrustBar />
      <Header />
      <main className="flex-grow pt-16">
        <Hero />
        <SocialProof />
        <ProblemSection />
        <SolutionSection />
        <ScreenshotShowcase />
        <HowItWorks />
        <FeatureGrid />
        <FeatureDetail />
        {/* <DoctorSummary /> */}
        <SupportedMedications />
        <WhoItsFor />

        <UserStories />
        <PrivacySection />


        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
