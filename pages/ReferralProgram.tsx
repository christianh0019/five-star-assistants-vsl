import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SurveyModal from '../components/SurveyModal';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { Gift, Users, CheckCircle } from 'lucide-react';

const ReferralProgram: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);

    const handleSurveyComplete = () => {
        closeSurvey();
        navigate('/booking');
    };

    return (
        <div className="min-h-screen bg-white flex flex-col font-body">
            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">
                {/* HERO SECTION */}
                <section className="relative pt-36 md:pt-48 pb-20 px-4 md:px-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-white">
                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="max-w-[900px] mx-auto text-center flex flex-col items-center mb-0">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 text-navy font-body text-sm font-semibold mb-6 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                                Partner With Us
                            </div>
                            <h1 className="font-heading text-navy text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 drop-shadow-sm">
                                Five Star Assistants <span className="text-gold">Referral Program</span>
                            </h1>
                            <p className="font-subheading text-navy/80 text-lg md:text-xl font-medium tracking-wider mb-8 max-w-2xl mx-auto leading-relaxed">
                                Know a business owner who needs reliable help? Refer them to us and get rewarded. Plus, ask about our special rates for repeat clients!
                            </p>

                            <Button
                                onClick={openSurvey}
                                variant="primary"
                                className="min-w-[280px] md:min-w-[320px] shadow-xl hover:shadow-2xl"
                            >
                                Book A Discovery Call
                            </Button>
                            <p className="font-heading italic text-gray-500 text-sm mt-4">
                                100% Free. No Obligation.
                            </p>
                        </div>
                    </div>
                </section>

                {/* BODY SECTION */}
                <section className="py-20 md:py-32 bg-gray-50 px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                                How Our Rewards Work
                            </h2>
                            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                                We believe in growing together. Whether you are sending us a new client or expanding your own team, we have incentives designed to reward your loyalty.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                            {/* Card 1: $250 Referral Credit */}
                            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="w-16 h-16 rounded-2xl bg-navy/5 flex items-center justify-center mb-8 shrink-0">
                                    <Gift className="text-gold" size={32} />
                                </div>
                                <h3 className="font-heading font-bold text-2xl text-navy mb-4 relative z-10">$250 Referral Credit</h3>
                                <p className="text-gray-600 text-lg leading-relaxed relative z-10 mb-6">
                                    Send a new client our way! When your referral successfully hires a remote employee through Five Star Assistants, we will give you a $250 credit.
                                </p>
                                <ul className="space-y-3 font-medium text-gray-700 relative z-10">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-gold w-5 h-5 shrink-0 mt-0.5" />
                                        <span>Unlimited referrals allowed</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-gold w-5 h-5 shrink-0 mt-0.5" />
                                        <span>Applies to any business owner you refer</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-gold w-5 h-5 shrink-0 mt-0.5" />
                                        <span>Credit awarded upon successful placement</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Card 2: Discounted Placements */}
                            <div className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-navy/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-8 shrink-0">
                                    <Users className="text-navy" size={32} />
                                </div>
                                <h3 className="font-heading font-bold text-2xl text-navy mb-4 relative z-10">Discounted Placements</h3>
                                <p className="text-gray-600 text-lg leading-relaxed relative z-10 mb-6">
                                    Already a client? If you want to expand your remote team, we offer special discounted placement pricing for scaling businesses.
                                </p>
                                <ul className="space-y-3 font-medium text-gray-700 relative z-10">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-gold w-5 h-5 shrink-0 mt-0.5" />
                                        <span>Lower placement fees for repeat hires</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-gold w-5 h-5 shrink-0 mt-0.5" />
                                        <span>Streamlined onboarding for secondary roles</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-gold w-5 h-5 shrink-0 mt-0.5" />
                                        <span>Scale your department efficiently and cost-effectively</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FINAL SECTION */}
                <section className="py-24 bg-white px-4 border-t border-gray-100 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6">
                            Ready to Start Earning <span className="text-gold">Rewards?</span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                            Whether you're referring a friend or adding to your own team, we're here to help you grow. Reach out to learn more about partner options.
                        </p>
                        <Button
                            onClick={openSurvey}
                            variant="primary"
                            className="text-lg px-10 py-4 shadow-xl hover:shadow-2xl hover:scale-105 transition-transform"
                        >
                            Contact Us Today
                        </Button>
                        <p className="font-heading italic text-gray-500 text-sm mt-4">
                            100% Free. No Obligation.
                        </p>
                    </div>
                </section>

            </main>

            <Footer />

            <SurveyModal
                isOpen={isSurveyOpen}
                onClose={closeSurvey}
                onComplete={handleSurveyComplete}
                source="Referral Program"
            />
        </div>
    );
};

export default ReferralProgram;
