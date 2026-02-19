import React from 'react';
import { CheckCircle, Inbox, Wrench, ArrowRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import OnboardingHeader from '../../components/OnboardingHeader';

const OnboardingComplete: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 font-body flex flex-col">
            <OnboardingHeader currentStep={3} totalSteps={3} stepLabel="You're All Set" />

            <div className="flex-grow pt-24 pb-20 px-6">
                <div className="max-w-4xl mx-auto text-center">

                    {/* Status Badge */}
                    <div className="flex flex-col items-center gap-4 mb-10">
                        <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-50 text-green-700 rounded-full text-sm font-bold border border-green-200">
                            <CheckCircle size={16} />
                            <span className="font-subheading uppercase tracking-wider text-xs">Onboarding Complete</span>
                        </div>
                    </div>

                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
                        Here's what happens next.
                    </h1>

                    <p className="font-body text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
                        Your intake form is being reviewed and your VA match is underway. While we prepare, please watch this short video on how to prepare for your kickoff call.
                    </p>

                    {/* Video Placeholder */}
                    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 mb-16 relative group cursor-pointer aspect-video">
                        <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-navy rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-navy/20 group-hover:scale-105 transition-transform duration-300">
                                    <Play fill="currentColor" className="ml-1" size={32} />
                                </div>
                                <p className="text-gray-400 font-medium font-subheading text-sm uppercase tracking-wider">"What to Expect" Video Coming Soon</p>
                            </div>
                        </div>
                    </div>

                    {/* Next Steps Grid */}
                    <div className="grid md:grid-cols-2 gap-6 text-left max-w-3xl mx-auto mb-16">
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                            <div className="bg-navy/5 p-3 rounded-xl text-navy shrink-0">
                                <Inbox size={24} />
                            </div>
                            <div>
                                <h3 className="font-heading font-bold text-navy mb-1">Check Your Inbox</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">A confirmation has been sent to your email. Look for next steps from our team within 24 hours.</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                            <div className="bg-gold/10 p-3 rounded-xl text-gold shrink-0">
                                <Wrench size={24} />
                            </div>
                            <div>
                                <h3 className="font-heading font-bold text-navy mb-1">Prepare Your Tools</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">Have access to your CRM, inbox, and calendar ready. We'll walk through everything on your kickoff call.</p>
                            </div>
                        </div>
                    </div>

                    {/* Support link */}
                    <div className="max-w-xl mx-auto text-center border-t border-gray-200 pt-12">
                        <p className="text-navy font-bold mb-4 font-subheading text-sm uppercase tracking-wider">Need anything before then?</p>
                        <a
                            href="mailto:support@fivestarassistants.com"
                            className="inline-flex items-center text-gold font-bold hover:text-navy transition-colors"
                        >
                            Contact Support <ArrowRight size={16} className="ml-2" />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default OnboardingComplete;
