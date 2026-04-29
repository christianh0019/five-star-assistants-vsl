import React, { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SurveyModal from '../components/SurveyModal';
import HowItWorksProcess from '../components/HowItWorksProcess';
import FinalPush from '../components/FinalPush';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const HowItWorks: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
    const navigate = useNavigate();

    const handlePlay = () => {
        if (videoRef.current) {
            videoRef.current.play();
            setPlaying(true);
        }
    };

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);

    // This will be passed to SurveyModal to handle redirect
    const handleSurveyComplete = () => {
        closeSurvey();
        navigate('/booking');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-body">
            <SEO
                title="How Virtual Assistant Placement Works | Five Star Assistants"
                description="Learn how Five Star Assistants finds, vets, and places the right virtual assistant for your business — in as little as 7 days. Free placement. No risk."
                keywords="how virtual assistant placement works, VA hiring process, virtual assistant onboarding, how to hire a VA, virtual assistant matching"
                canonical="https://www.fivestarassistants.com/how-it-works"
            />
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
                                className="min-w-[280px] md:min-w-[320px] mb-4 shadow-xl hover:shadow-2xl"
                            >
                                Book A Discovery Call
                            </Button>

                            <p className="font-heading italic text-gray-500 text-sm mb-12">
                                100% Free. No Obligation.
                            </p>

                            {/* Hero Video */}
                            <div className="w-full relative mt-4 md:mt-8">
                                <div className="absolute -inset-4 md:-inset-6 bg-gradient-to-r from-gold/20 via-navy/5 to-gold/20 rounded-[2rem] md:rounded-[2.5rem] blur-xl opacity-50"></div>

                                <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-navy/10 transform transition-transform duration-500 hover:scale-[1.01]">
                                    <div className="aspect-video w-full bg-navy flex items-center justify-center relative group">
                                        <video
                                            ref={videoRef}
                                            className="absolute inset-0 w-full h-full object-cover"
                                            src="/videos/process-video.mp4"
                                            poster="/images/how-it-works-hero.jpg"
                                            controls
                                            playsInline
                                            onPlay={() => setPlaying(true)}
                                            onPause={() => setPlaying(false)}
                                        />
                                        {!playing && (
                                            <button
                                                onClick={handlePlay}
                                                className="absolute inset-0 flex items-center justify-center z-10 group/btn"
                                                aria-label="Play video"
                                            >
                                                <div className="w-20 h-20 rounded-full bg-white/90 shadow-2xl flex items-center justify-center transition-transform duration-200 group-hover/btn:scale-110">
                                                    <Play size={32} className="text-navy ml-1" fill="currentColor" />
                                                </div>
                                            </button>
                                        )}
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
