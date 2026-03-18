import React, { useState } from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import SurveyModal from '../components/SurveyModal';
import ScrollReveal from '../components/ScrollReveal';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import { Clock, DollarSign, ShieldCheck, Users } from 'lucide-react';

const socialProofStats = [
    {
        icon: Clock,
        value: '4 Days',
        label: 'Average Time to First Candidate',
    },
    {
        icon: DollarSign,
        value: '$6/hr',
        label: 'Starting Rate',
    },
    {
        icon: ShieldCheck,
        value: '100%',
        label: 'Love It Or It\'s Free Guarantee',
    },
    {
        icon: Users,
        value: 'Top 1%',
        label: 'Of Applicants Placed',
    },
];

const ECommerce: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);

    const handleSurveyComplete = () => {
        closeSurvey();
        navigate('/booking');
    };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* Hero */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="E-Commerce Store Owners"
                        headline={
                            <>
                                Stop Drowning In Orders, Tickets,{' '}
                                <span className="text-gold italic">And Admin</span>
                            </>
                        }
                        subheadline={
                            <>
                                Get a dedicated e-commerce assistant to handle customer support,
                                order management, and back-end operations for{' '}
                                <span className="font-bold text-navy">
                                    just $6/hr. Love It Or It's Free Guarantee.
                                </span>
                            </>
                        }
                    />
                </ScrollReveal>

                {/* Social Proof Bar */}
                <ScrollReveal delay={0.1}>
                    <section className="border-y border-gray-100 bg-gray-50/60 py-8 px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-gray-200">
                                {socialProofStats.map(({ icon: Icon, value, label }) => (
                                    <div key={label} className="flex flex-col items-center text-center px-6">
                                        <div className="w-10 h-10 rounded-full bg-navy/[0.06] flex items-center justify-center mb-3">
                                            <Icon size={18} className="text-navy/70" />
                                        </div>
                                        <p className="font-heading font-bold text-2xl text-navy mb-1">{value}</p>
                                        <p className="font-body text-xs text-gray-500 leading-snug">{label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

            </main>

            <Footer />

            <SurveyModal
                isOpen={isSurveyOpen}
                onClose={closeSurvey}
                onComplete={handleSurveyComplete}
                source="E-Commerce"
            />
        </div>
    );
};

export default ECommerce;
