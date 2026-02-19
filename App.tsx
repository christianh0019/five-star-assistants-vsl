import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Booking from './pages/Booking';
import ThankYou from './pages/ThankYou';
import ScrollToTop from './components/ScrollToTop';
import OnboardingWelcome from './pages/onboarding/Welcome';
import OnboardingIntake from './pages/onboarding/Intake';
import OnboardingBooking from './pages/onboarding/OnboardingBooking';
import OnboardingComplete from './pages/onboarding/Complete';

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Main funnel */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/thank-you" element={<ThankYou />} />

        {/* Onboarding funnel */}
        <Route path="/onboarding/welcome" element={<OnboardingWelcome />} />
        <Route path="/onboarding/intake" element={<OnboardingIntake />} />
        <Route path="/onboarding/booking" element={<OnboardingBooking />} />
        <Route path="/onboarding/complete" element={<OnboardingComplete />} />
      </Routes>
    </>
  );
};

export default App;