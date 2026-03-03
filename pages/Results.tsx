import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SurveyModal from '../components/SurveyModal';
import Button from '../components/Button';
import FinalPush from '../components/FinalPush';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';
import { caseStudies } from '../src/data/caseStudies';

const Results: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);

    const handleSurveyComplete = () => {
        closeSurvey();
        navigate('/booking');
    };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen font-body">
            <Navbar onOpenSurvey={openSurvey} />
            <main className="flex-grow pb-32">

                {/* Hero block */}
                <div className="relative pt-36 md:pt-48 pb-20 px-4 md:px-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-white text-center">
                    <div className="max-w-[900px] mx-auto flex flex-col items-center relative z-10">
                        {/* Callout Pill */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 text-navy font-body text-sm font-semibold mb-6 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                            Client Results
                        </div>

                        {/* H1 Headline */}
                        <h1 className="font-heading text-navy text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 drop-shadow-sm">
                            Real Companies. <br className="hidden md:block" /> <span className="text-gold italic">Real Growth.</span>
                        </h1>

                        {/* Sub-headline */}
                        <p className="font-subheading text-navy/80 text-lg md:text-xl font-medium tracking-wider mb-12 max-w-2xl">
                            See how businesses are scaling faster, saving money, and eliminating bottlenecks with Five Star Assistants.
                        </p>

                        {/* Primary CTA */}
                        <Button
                            onClick={openSurvey}
                            variant="primary"
                            className="min-w-[280px] md:min-w-[320px] mb-4 shadow-xl hover:shadow-2xl"
                        >
                            Book A Discovery Call
                        </Button>

                        <p className="font-heading italic text-gray-500 text-sm">
                            100% Free. No Obligation.
                        </p>
                    </div>
                </div>

                {/* Grid */}
                <div className="max-w-7xl mx-auto px-4 mt-20">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {caseStudies.map((study) => (
                            <Link
                                to={`/results/${study.slug}`}
                                key={study.id}
                                className="bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden flex flex-col h-full"
                            >
                                {/* Thumbnail */}
                                <div className="h-64 relative overflow-hidden bg-gray-200">
                                    <img
                                        src={study.thumbnailUrl}
                                        alt={study.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/40 transition-colors duration-300 flex items-center justify-center">
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                            <Play className="text-white w-8 h-8 ml-1 drop-shadow-md" fill="currentColor" />
                                        </div>
                                    </div>
                                    <div className="absolute top-4 left-4 bg-navy text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                                        {study.industry}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="font-heading text-2xl font-bold text-navy mb-4 line-clamp-2">
                                        {study.title}
                                    </h3>
                                    <p className="font-body text-gray-600 mb-6 flex-grow line-clamp-3 leading-relaxed">
                                        {study.summary}
                                    </p>



                                    {/* Link block */}
                                    <div className="flex items-center text-gold font-bold font-heading text-lg group-hover:text-navy transition-colors">
                                        Watch Video <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>

                <FinalPush onOpenSurvey={openSurvey} />
            </main>
            <Footer />
            <SurveyModal
                isOpen={isSurveyOpen}
                onClose={closeSurvey}
                onComplete={handleSurveyComplete}
                source="Results"
            />
        </div>
    );
};

export default Results;
