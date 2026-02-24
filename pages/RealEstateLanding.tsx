import React, { useState } from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import SurveyModal from '../components/SurveyModal';
import ScrollReveal from '../components/ScrollReveal';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

const RealEstateLanding: React.FC = () => {
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
                        callout="Busy Real Estate Agents"
                        headline={
                            <>
                                Turn <span className="text-gold italic">More Leads Into Showings</span> Without Doing Everything Yourself
                            </>
                        }
                        subheadline={
                            <>
                                Get a trained assistant to respond instantly, qualify and book prospects, and manage your backend for <span className="font-bold text-navy">$6/hr. Love It Or It’s Free Guarantee.</span>
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
                source="Real Estate"
            />
        </div>
    );
};

export default RealEstateLanding;
