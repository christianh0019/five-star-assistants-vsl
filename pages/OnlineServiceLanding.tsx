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

const OnlineServiceLanding: React.FC = () => {
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
            <Navbar hideMenu />
            <main className="flex-grow">
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Attention Agency Owners"
                        headline={
                            <>
                                Hire A-Players Overseas <span className="text-gold italic">For Just $10-15/hr</span>
                            </>
                        }
                        subheadline={
                            <>
                                College-educated, English-fluent specialists placed into the exact roles your agency needs, from delivery to account management. <span className="font-bold text-navy">And if you don't love them, it's free, guaranteed!</span>
                            </>
                        }
                    />
                </ScrollReveal>
            </main>

            <Footer />

            <SurveyModal
                isOpen={isSurveyOpen}
                onClose={closeSurvey}
                onComplete={handleSurveyComplete}
                source="Online Service Provider"
            />
        </div>
    );
};

export default OnlineServiceLanding;
