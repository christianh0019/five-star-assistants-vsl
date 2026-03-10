import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LocalServiceLanding from './pages/LocalServiceLanding';
import LocalStorefrontLanding from './pages/LocalStorefrontLanding';
import OnlineServiceLanding from './pages/OnlineServiceLanding';
import OnlineBusinessLanding from './pages/OnlineBusinessLanding';
import RealEstateLanding from './pages/RealEstateLanding';
import Booking from './pages/Booking';
import ThankYou from './pages/ThankYou';
import ScrollToTop from './components/ScrollToTop';
import OnboardingWelcome from './pages/onboarding/Welcome';
import OnboardingIntake from './pages/onboarding/Intake';
import OnboardingBooking from './pages/onboarding/OnboardingBooking';
import OnboardingComplete from './pages/onboarding/Complete';
import LocalServiceBusinesses from './pages/LocalServiceBusinesses';
import DigitalAgencies from './pages/DigitalAgencies';
import RealEstateAgents from './pages/RealEstateAgents';
import Pricing from './pages/Pricing';
import Results from './pages/Results';
import CaseStudyDetail from './pages/CaseStudyDetail';
import HowItWorks from './pages/HowItWorks';
import ReferralProgram from './pages/ReferralProgram';

const App: React.FC = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Main funnel */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/local-service" element={<LocalServiceLanding />} />
        <Route path="/local-storefront" element={<LocalStorefrontLanding />} />
        <Route path="/online-service" element={<OnlineServiceLanding />} />
        <Route path="/online-business" element={<OnlineBusinessLanding />} />
        <Route path="/real-estate" element={<RealEstateLanding />} />
        <Route path="/local-service-businesses" element={<LocalServiceBusinesses />} />
        <Route path="/digital-agencies" element={<DigitalAgencies />} />
        <Route path="/real-estate-agents" element={<RealEstateAgents />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/results" element={<Results />} />
        <Route path="/results/:slug" element={<CaseStudyDetail />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/referral-program" element={<ReferralProgram />} />
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