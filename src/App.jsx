import React, { Suspense, lazy } from 'react';
import TrustBar from './components/TrustBar';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import HowItWorks from './components/HowItWorks';
import FeatureGrid from './components/FeatureGrid';
import FeatureDetail from './components/FeatureDetail';
import DoctorStory from './components/DoctorStory';
import SupportedMedications from './components/SupportedMedications';
import WhoItsFor from './components/WhoItsFor';
import PrivacySection from './components/PrivacySection';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

// Dynamically import heavy non-critical components to reduce initial bundle
const ScreenshotShowcase = lazy(() => import('./components/ScreenshotShowcase'));
const UserStories = lazy(() => import('./components/UserStories'));
const FAQ = lazy(() => import('./components/FAQ'));

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <TrustBar />
      <Header />
      <main className="flex-grow pt-0 overflow-x-hidden">
        <Hero />
        <DoctorStory />
        <Suspense fallback={<div className="h-64 flex items-center justify-center animate-pulse bg-gray-50"></div>}>
          <UserStories />
        </Suspense>
        <ProblemSection />
        <SolutionSection />
        <Suspense fallback={<div className="h-64 flex items-center justify-center animate-pulse bg-gray-50"></div>}>
          <ScreenshotShowcase />
        </Suspense>
        <HowItWorks />
        <FeatureGrid />
        <FeatureDetail />
        <SupportedMedications />
        <WhoItsFor />

        <PrivacySection />

        <Suspense fallback={<div className="h-64 flex items-center justify-center animate-pulse bg-gray-50"></div>}>
          <FAQ />
        </Suspense>
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
