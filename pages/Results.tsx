import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SurveyModal from '../components/SurveyModal';
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
        <div className="min-h-screen bg-gray-50 flex flex-col font-body">
            <Navbar onOpenSurvey={openSurvey} />
            <main className="flex-grow pt-24 pb-32">

                {/* Hero block */}
                <div className="bg-navy py-20 px-4 text-center border-b-[8px] border-gold relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 z-0"></div>
                    <div className="max-w-4xl mx-auto relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-body text-sm font-semibold mb-6 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                            Client Results
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 drop-shadow-sm">
                            Real Companies. <br /> <span className="text-gold italic">Real Growth.</span>
                        </h1>
                        <p className="font-subheading text-xl text-blue-100 max-w-2xl mx-auto">
                            See how businesses are scaling faster, saving money, and eliminating bottlenecks with Five Star Assistants.
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
