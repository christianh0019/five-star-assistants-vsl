import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import OnboardingHeader from '../../components/OnboardingHeader';

const OnboardingWelcome: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-body">
            <OnboardingHeader />

            <div className="flex-grow flex flex-col justify-center items-center px-6 pt-24 pb-12">
                <div className="max-w-4xl w-full mx-auto text-center">

                    {/* Welcome Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-navy/5 text-navy rounded-full text-xs font-bold mb-8 border border-navy/10 font-subheading uppercase tracking-widest">
                        <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                        Official Client Onboarding
                    </div>

                    <h1 className="font-heading text-4xl md:text-6xl font-bold text-navy mb-6 leading-tight">
                        Welcome to{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-gold">
                            Five Star Assistants.
                        </span>
                    </h1>

                    <p className="font-body text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
                        We're excited to have you. Please watch this short welcome video from our team, then complete your intake form so we can begin your match.
                    </p>

                    {/* Video Placeholder */}
                    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-12 relative group cursor-pointer aspect-video">
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-navy/20 group-hover:scale-105 transition-transform duration-300">
                                    <Play fill="currentColor" className="ml-1" size={32} />
                                </div>
                                <p className="text-gray-400 font-medium font-subheading text-sm uppercase tracking-wider">Welcome Video Coming Soon</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <button
                        onClick={() => navigate('/onboarding/intake')}
                        className="group inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-navy rounded-xl hover:bg-navy/90 transition-all duration-200 shadow-lg shadow-navy/20 hover:shadow-xl hover:shadow-navy/30 focus:outline-none"
                    >
                        Let's Get Started
                        <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>

                    <p className="mt-6 text-sm text-gray-400 font-subheading">
                        Expected time: 5-10 minutes
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OnboardingWelcome;
