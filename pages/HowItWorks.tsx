import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SurveyModal from '../components/SurveyModal';
import HowItWorksProcess from '../components/HowItWorksProcess';
import FinalPush from '../components/FinalPush';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const HowItWorks: React.FC = () => {
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
        <div className="min-h-screen bg-gray-50 flex flex-col font-body">
            <Navbar onOpenSurvey={openSurvey} />
            <main className="flex-grow bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-white">
                {/* HERO SECTION */}
                <section className="relative pt-36 md:pt-48 pb-20 px-4 md:px-8">
                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="max-w-[900px] mx-auto text-center flex flex-col items-center mb-0">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 text-navy font-body text-sm font-semibold mb-6 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                                How It Works
                            </div>
                            <h1 className="font-heading text-navy text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 drop-shadow-sm">
                                Hiring reliable remote employees shouldn’t be <span className="text-gold italic">complicated or risky.</span>
                            </h1>
                            <p className="font-subheading text-navy/80 text-lg md:text-xl font-medium tracking-wider max-w-3xl mx-auto leading-relaxed mb-12">
                                Five Star Assistants handles the recruiting, screening, placement, and payroll so you can quickly add skilled team members without the cost and risk of hiring locally.
                            </p>

                            {/* Primary CTA */}
                            <Button
                                onClick={openSurvey}
                                variant="primary"
                                className="min-w-[280px] md:min-w-[320px] mb-12 shadow-xl hover:shadow-2xl"
                            >
                                Book A Discovery Call
                            </Button>

                            {/* Hero Image */}
                            <div className="w-full relative mt-4 md:mt-8">
                                {/* Decorative elements behind the image */}
                                <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-r from-gold/20 via-navy/5 to-gold/20 rounded-[2rem] md:rounded-[2.5rem] blur-xl opacity-50"></div>

                                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-navy/10 transform transition-transform duration-500 hover:scale-[1.01]">
                                    <div className="aspect-video w-full bg-navy flex items-center justify-center relative group">
                                        <img
                                            src="/images/how-it-works-hero.jpg"
                                            alt="Five Star Assistants Global Team Sync via Zoom"
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                        {/* Subtle overlay */}
                                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <HowItWorksProcess />
                <FinalPush onOpenSurvey={openSurvey} />
            </main>
            <Footer />
            <SurveyModal
                isOpen={isSurveyOpen}
                onClose={closeSurvey}
                onComplete={handleSurveyComplete}
                source="How It Works"
            />
        </div>
    );
};

export default HowItWorks;
