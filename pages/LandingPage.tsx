import React, { useState } from 'react';
import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import WhoWeWorkWithSection from '../components/WhoWeWorkWithSection';
import CapabilitiesSection from '../components/CapabilitiesSection';
import ResultsSection from '../components/ResultsSection';
import ProcessSection from '../components/ProcessSection';
import FinalPush from '../components/FinalPush';
import Footer from '../components/Footer';
import SurveyModal from '../components/SurveyModal';
import ScrollReveal from '../components/ScrollReveal';
import { useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';

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
            <Navbar onOpenSurvey={openSurvey} />
            <main className="flex-grow">
                <ScrollReveal>
                    <Hero onOpenSurvey={openSurvey} />
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                    <TrustBadges />
                </ScrollReveal>

                <ScrollReveal>
                    <WhoWeWorkWithSection />
                </ScrollReveal>

                <ScrollReveal>
                    <CapabilitiesSection />
                </ScrollReveal>

                <ScrollReveal>
                    <ResultsSection />
                </ScrollReveal>

                <ScrollReveal>
                    <ProcessSection />
                </ScrollReveal>

                <ScrollReveal>
                    <FinalPush onOpenSurvey={openSurvey} />
                </ScrollReveal>
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
