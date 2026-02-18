import React, { useState } from 'react';
import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import CapabilitiesSection from '../components/CapabilitiesSection';
import ResultsSection from '../components/ResultsSection';
import ProcessSection from '../components/ProcessSection';
import FinalPush from '../components/FinalPush';
import Footer from '../components/Footer';
import SurveyModal from '../components/SurveyModal';
import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);

    // This will be passed to SurveyModal to handle redirect
    const handleSurveyComplete = () => {
        closeSurvey();
        navigate('/booking');
    };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <main className="flex-grow">
                <Hero onOpenSurvey={openSurvey} />
                <TrustBadges />
                <ProblemSection />
                <SolutionSection />
                <CapabilitiesSection />
                <ResultsSection />
                <ProcessSection />
                <FinalPush onOpenSurvey={openSurvey} />
            </main>

            <Footer />

            <SurveyModal
                isOpen={isSurveyOpen}
                onClose={closeSurvey}
                onComplete={handleSurveyComplete}
            />
        </div>
    );
};

export default LandingPage;
