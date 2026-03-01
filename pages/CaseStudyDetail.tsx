import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SurveyModal from '../components/SurveyModal';
import Button from '../components/Button';
import { ArrowLeft, Play, TrendingUp, CheckCircle } from 'lucide-react';
import { caseStudies } from '../src/data/caseStudies';

const CaseStudyDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const study = caseStudies.find(c => c.slug === slug);

    if (!study) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 font-body">
                <h1 className="text-4xl font-heading text-navy mb-4 font-bold">Case Study Not Found</h1>
                <Link to="/results" className="text-gold font-bold flex items-center hover:text-navy transition-colors">
                    <ArrowLeft className="mr-2 h-5 w-5" /> Back to Results
                </Link>
            </div>
        );
    }

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

                {/* Back button & Header */}
                <div className="max-w-5xl mx-auto px-4 mb-12">
                    <Link to="/results" className="inline-flex items-center text-gray-500 hover:text-navy font-bold mb-8 transition-colors">
                        <ArrowLeft className="mr-2 h-5 w-5" /> Back to all results
                    </Link>

                    <div className="flex items-center gap-3 mb-6">
                        <span className="bg-navy text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                            {study.industry}
                        </span>
                        <span className="text-gray-500 font-bold">•</span>
                        <span className="text-gray-500 font-bold">{study.clientName}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy leading-tight mb-8">
                        {study.title}
                    </h1>
                </div>

                {/* Video Player Section */}
                <div className="max-w-6xl mx-auto px-4 mb-20">
                    <div className="bg-navy rounded-[2rem] md:rounded-[3rem] p-4 md:p-8 shadow-2xl">
                        <div className="aspect-video w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-black relative shadow-inner">
                            {/* Placeholder for actual video embed. For now, we simulate a poster frame */}
                            <img
                                src={study.thumbnailUrl}
                                alt="Video thumbnail"
                                className="absolute inset-0 w-full h-full object-cover opacity-60"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-24 h-24 bg-gold/90 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 shadow-[0_0_50px_rgba(255,215,0,0.5)]">
                                    <Play className="text-navy w-10 h-10 ml-2 animate-pulse" fill="currentColor" />
                                </div>
                            </div>

                            {/* Uncomment actual iframe when you have real links */}
                            {/* <iframe 
                                src={study.videoUrl} 
                                className="absolute inset-0 w-full h-full"
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen
                            ></iframe> */}
                        </div>
                    </div>
                </div>

                {/* Metrics Bar */}
                <div className="max-w-5xl mx-auto px-4 mb-20">
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                        {study.metrics.map((metric, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center pt-8 md:pt-0 first:pt-0">
                                <TrendingUp className="text-gold w-8 h-8 mb-4 opacity-80" />
                                <div className="font-heading text-4xl md:text-5xl font-bold text-navy mb-2">{metric.value}</div>
                                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Deep Dive Content */}
                <div className="max-w-4xl mx-auto px-4">
                    <div className="prose prose-lg prose-navy max-w-none">

                        <p className="text-2xl font-body font-medium text-gray-800 leading-relaxed mb-16 border-l-4 border-gold pl-6 py-2">
                            {study.fullDescription}
                        </p>

                        <div className="grid md:grid-cols-2 gap-12 mb-16">
                            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                                <h3 className="font-heading text-2xl font-bold text-navy border-b border-gray-200 pb-4 mb-6 uppercase tracking-wider text-sm flex items-center">
                                    <span className="w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center mr-3 font-bold text-lg">!</span>
                                    The Challenge
                                </h3>
                                <p className="text-gray-700 leading-relaxed font-medium">
                                    {study.challenge}
                                </p>
                            </div>

                            <div className="bg-navy rounded-3xl p-8 border border-navy shadow-lg relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0"></div>
                                <h3 className="font-heading text-2xl font-bold text-white border-b border-white/10 pb-4 mb-6 uppercase tracking-wider text-sm flex items-center relative z-10">
                                    <CheckCircle className="text-gold w-6 h-6 mr-3" />
                                    Our Solution
                                </h3>
                                <p className="text-blue-50 leading-relaxed relative z-10 font-medium tracking-wide">
                                    {study.solution}
                                </p>
                            </div>
                        </div>

                        <div className="text-center bg-white rounded-3xl p-12 border border-gray-100 shadow-sm">
                            <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-6">
                                The Result
                            </h3>
                            <p className="font-heading text-2xl md:text-3xl font-bold text-navy leading-tight max-w-2xl mx-auto">
                                "{study.result}"
                            </p>
                        </div>

                    </div>
                </div>

                {/* Unified CTA */}
                <div className="max-w-4xl mx-auto px-4 mt-32 text-center">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                        Ready to achieve similar results?
                    </h2>
                    <Button
                        onClick={openSurvey}
                        variant="primary"
                        className="w-full sm:w-auto min-w-[360px] text-xl shadow-[0_0_40px_rgba(255,215,0,0.3)] hover:shadow-[0_0_60px_rgba(255,215,0,0.4)] animate-pulse hover:animate-none py-5"
                    >
                        Book A Discovery Call
                    </Button>
                </div>

            </main>

            <Footer />
            <SurveyModal
                isOpen={isSurveyOpen}
                onClose={closeSurvey}
                onComplete={handleSurveyComplete}
                source="CaseStudyDetail"
            />
        </div>
    );
};

export default CaseStudyDetail;
