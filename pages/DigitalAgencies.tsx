import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SurveyModal from '../components/SurveyModal';
import Hero from '../components/Hero';
import ScrollReveal from '../components/ScrollReveal';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, Check, UserCheck, ShieldCheck, X, Quote, ChevronDown } from 'lucide-react';
import Button from '../components/Button';

const DigitalAgencies: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);

    const handleSurveyComplete = () => {
        closeSurvey();
        navigate('/booking');
    };

    const painPoints = [
        "$60k+ salary",
        "payroll taxes",
        "benefits",
        "recruiting time",
        "training"
    ];

    const roles = [
        {
            title: "Media Buyers",
            description: "Manage ad accounts across Meta, Google, TikTok, and more."
        },
        {
            title: "Video Editors",
            description: "Short-form content, ad creatives, YouTube editing, and social media clips."
        },
        {
            title: "Graphic Designers",
            description: "Ad creatives, landing pages, and branding assets."
        },
        {
            title: "Account Managers",
            description: "Handle client communication, updates, and reporting."
        },
        {
            title: "Appointment Setters",
            description: "Follow up with leads and book sales calls for your team."
        },
        {
            title: "Operations Assistants",
            description: "Manage CRM updates, reporting, SOPs, and daily tasks."
        }
    ];

    const processSteps = [
        {
            title: "Tell Us The Role",
            description: "Describe the position and responsibilities your agency needs."
        },
        {
            title: "We Recruit Candidates",
            description: "Our team sources and screens qualified professionals."
        },
        {
            title: "Meet Your Candidates",
            description: "You interview the finalists and choose who you want."
        },
        {
            title: "They Start Working",
            description: "Your new remote employee begins contributing immediately."
        }
    ];

    const faqs = [
        {
            question: "Are overseas employees reliable?",
            answer: "Yes. We recruit college-educated professionals with strong English and previous remote work experience."
        },
        {
            question: "What about time zones?",
            answer: "Many overseas professionals work U.S. hours or overlapping schedules."
        },
        {
            question: "Who manages the employee?",
            answer: "They work directly inside your agency just like a normal team member."
        },
        {
            question: "What if the hire doesn't work out?",
            answer: "We replace them for free or you don't pay."
        },
        {
            question: "How quickly can we hire someone?",
            answer: "Most agencies meet qualified candidates within a few days."
        }
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col font-body">
            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">
                {/* HERO SECTION */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Attention Agency Owners"
                        headline={
                            <>
                                Hire A-Players Overseas <span className="text-gold italic">For Just $10-15/hr</span>
                            </>
                        }
                        subheadline={
                            <>
                                College-educated, English-fluent specialists placed into the exact roles your agency needs, from delivery to account management. <span className="font-bold text-navy">And if you don't love them, it's free, guaranteed!</span>
                            </>
                        }
                    />
                </ScrollReveal>

                {/* PAIN SECTION */}
                <section className="py-20 md:py-32 bg-gray-50/50 px-4 border-t border-gray-100">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                            <div className="lg:col-span-7">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-bold uppercase tracking-widest mb-6">
                                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                                    The Problem
                                </div>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                    Why Agencies Get Stuck
                                </h2>
                                <div className="border-l-4 border-gold pl-6 md:pl-8 py-2">
                                    <div className="font-body text-gray-700 text-lg md:text-xl leading-relaxed">
                                        At first the agency grows fast. You land a few clients, start getting results, and suddenly things take off. But then something happens. <b>You become the bottleneck.</b><br /><br />
                                        You are managing fulfillment, handling client communication, reviewing ads, answering questions, and trying to grow the business at the same time.<br /><br />
                                        Hiring locally sounds like the solution until you see the numbers.
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-5 w-full">
                                <div className="bg-white rounded-3xl p-8 shadow-xl shadow-navy/5 border border-gray-100 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                    <h3 className="font-heading font-bold text-navy text-2xl mb-6 relative z-10">
                                        Most agencies hit the same wall:
                                    </h3>
                                    <ul className="space-y-5 relative z-10">
                                        {painPoints.map((pain, idx) => (
                                            <li key={idx} className="flex items-start gap-4">
                                                <div className="mt-1 flex-shrink-0">
                                                    <AlertCircle className="text-red-500 w-5 h-5 flex-shrink-0" />
                                                </div>
                                                <span className="font-body text-gray-800 text-lg font-medium shadow-sm">
                                                    {pain}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ARBITRAGE SECTION */}
                <section className="py-20 md:py-32 bg-gray-50 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-2 gap-16 items-center">
                            <div>
                                <div className="flex items-center gap-4 mb-6">
                                    <span className="w-12 h-[1px] bg-gold"></span>
                                    <span className="font-body text-gold font-bold tracking-[0.2em] uppercase text-xs">The Secret</span>
                                </div>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                    The Agencies Scaling Fast Aren't Hiring Locally
                                </h2>
                                <div className="prose prose-lg text-gray-600 font-body mb-8">
                                    <p className="text-xl leading-relaxed">
                                        They are building remote teams. Instead of paying $60k–$90k for one employee, they hire highly capable overseas specialists for <span className="font-bold text-navy">$10–15/hour.</span>
                                    </p>
                                    <div className="my-8 p-6 bg-white border-l-4 border-gold rounded-r shadow-sm">
                                        <p className="font-heading font-semibold text-navy text-lg m-0">
                                            But finding good people overseas isn't easy. You've probably heard the horror stories. Bad communication, missed deadlines, poor quality work, people disappearing.<br /><br />That is exactly why Five Star Assistants exists. We remove the entire hiring risk.
                                        </p>
                                    </div>
                                    <p className="font-bold text-navy text-xl">We handle everything.</p>
                                </div>
                            </div>

                            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100">
                                <h3 className="font-heading text-2xl font-bold text-navy mb-8 pb-6 border-b border-gray-100">
                                    What Five Star Assistants Provides
                                </h3>
                                <ul className="space-y-6">
                                    {[
                                        "Recruiting",
                                        "Candidate screening",
                                        "Interviews",
                                        "Vetting",
                                        "Payroll",
                                        "Replacement if needed"
                                    ].map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-4 group">
                                            <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                                                <Check className="text-gold group-hover:text-white transition-colors" size={24} />
                                            </div>
                                            <span className="font-body text-xl text-gray-700 font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ROLES SECTION */}
                <div id="roles-section">
                    <section className="py-20 md:py-32 bg-white px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    The Exact Roles Agencies Need To Scale
                                </h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {roles.map((role, idx) => (
                                    <div key={idx} className="bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 rounded-2xl flex flex-col items-center text-center group cursor-default">
                                        <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                                            <UserCheck className="text-navy group-hover:text-gold w-8 h-8 transition-colors" />
                                        </div>
                                        <h3 className="font-heading font-bold text-xl text-navy mb-3">{role.title}</h3>
                                        <p className="font-body text-gray-600 text-sm leading-relaxed">{role.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>

                {/* PROCESS SECTION */}
                <section className="py-20 md:py-32 bg-gray-50 px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                How Our Process Works
                            </h2>
                        </div>
                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-8 md:before:mx-auto before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
                            {processSteps.map((step, idx) => (
                                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                    <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-white bg-navy text-white font-heading font-bold text-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow md:mx-auto z-10 transition-all duration-300 group-hover:bg-gold group-hover:scale-110">
                                        {idx + 1}
                                    </div>
                                    <div className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
                                        <h3 className="font-heading font-bold text-xl text-navy mb-2">{step.title}</h3>
                                        <p className="font-body text-gray-600 leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* GUARANTEE SECTION */}
                <section className="py-20 bg-navy px-4 border-y-8 border-gold">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse text-gold">
                            <ShieldCheck size={40} />
                        </div>
                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-8 drop-shadow-md">
                            Hiring Overseas Shouldn't Feel Risky
                        </h2>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] p-8 md:p-12 mb-8">
                            <p className="font-body text-xl md:text-2xl text-blue-100 font-medium mb-8">
                                If your remote employee isn't the right fit:
                            </p>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                                <span className="font-heading font-bold text-2xl md:text-3xl text-gold">We replace them for free</span>
                                <span className="font-body italic text-gray-400">or</span>
                                <span className="font-heading font-bold text-2xl md:text-3xl text-gold">You don't pay</span>
                            </div>
                        </div>
                        <p className="font-heading text-xl md:text-2xl text-white font-bold tracking-wider">
                            We only win when you are happy with the hire.
                        </p>
                    </div>
                </section>

                {/* COST COMPARISON SECTION */}
                <section className="py-20 md:py-32 bg-white px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                Hiring Locally vs Hiring Through Five Star Assistants
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                            {/* Local Hire Column */}
                            <div className="bg-gray-50 border border-gray-200 rounded-[2rem] p-8 md:p-12 shadow-sm">
                                <h3 className="font-heading text-2xl font-bold text-gray-500 mb-8 pb-4 border-b border-gray-200 text-center">
                                    The Local Hire
                                </h3>
                                <ul className="space-y-6">
                                    {[
                                        "$60k–$90k salary",
                                        "Payroll taxes",
                                        "Benefits",
                                        "Office space",
                                        "Recruiting time",
                                        "Training time"
                                    ].map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <X className="text-red-400 w-6 h-6 flex-shrink-0 mt-0.5" />
                                            <span className="font-body text-lg text-gray-600 font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* FSA Column */}
                            <div className="bg-navy border border-navy rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden transform md:-translate-y-4">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0"></div>
                                <h3 className="relative z-10 font-heading text-2xl font-bold text-white mb-8 pb-4 border-b border-white/20 text-center flex items-center justify-center gap-3">
                                    <span className="bg-gold text-navy text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full">Winner</span>
                                    Five Star Assistants
                                </h3>
                                <ul className="space-y-6 relative z-10">
                                    {[
                                        "$10–15/hour specialists",
                                        "Pre-vetted candidates",
                                        "No recruiting process",
                                        "Flexible scaling",
                                        "Replace anytime if needed"
                                    ].map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <Check className="text-gold w-6 h-6 flex-shrink-0 mt-0.5 drop-shadow-sm" strokeWidth={3} />
                                            <span className="font-body text-lg text-white font-medium drop-shadow-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* TESTIMONIAL SECTION */}
                <section className="py-20 md:py-32 bg-gray-50 px-4">
                    <div className="max-w-4xl mx-auto text-center relative">
                        <Quote className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10 w-24 h-24 text-gold/20 z-0" />
                        <div className="relative z-10 bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-gray-100">
                            <p className="font-heading text-2xl md:text-4xl text-navy font-bold italic leading-tight mb-8">
                                "An agency owner hired a media buyer through us and reduced workload by 40% while simultaneously scaling their overall ad spend."
                            </p>
                            <div className="flex items-center justify-center gap-4">
                                <div className="flex text-gold">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="py-20 md:py-32 bg-white px-4 border-t border-gray-100">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                Frequently Asked Questions
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <div
                                    key={idx}
                                    className={`border-b border-gray-200 overflow-hidden transition-all duration-300 ${openFaqIndex === idx ? 'bg-gray-50/50' : 'bg-transparent'}`}
                                >
                                    <button
                                        className="w-full flex items-center justify-between py-6 px-4 md:px-6 text-left focus:outline-none group"
                                        onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                                    >
                                        <span className={`font-heading font-bold text-xl md:text-2xl transition-colors ${openFaqIndex === idx ? 'text-gold' : 'text-navy group-hover:text-gold/80'}`}>
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            className={`flex-shrink-0 text-navy transition-transform duration-300 ${openFaqIndex === idx ? 'rotate-180 text-gold' : ''}`}
                                            size={24}
                                        />
                                    </button>
                                    <div
                                        className={`transition-all duration-300 ease-in-out ${openFaqIndex === idx ? 'max-h-[500px] opacity-100 pb-8 px-4 md:px-6' : 'max-h-0 opacity-0 overflow-hidden px-4 md:px-6'}`}
                                    >
                                        <p className="font-body text-lg text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL PUSH SECTION */}
                <section className="bg-navy py-24 px-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 z-0 hidden md:block"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 z-0 hidden md:block"></div>

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-md">
                            Your Agency Doesn't Need More Hustle. It Needs More Capacity.
                        </h2>

                        <p className="font-subheading text-blue-100 text-xl md:text-2xl tracking-wide max-w-2xl mx-auto mb-16 opacity-90">
                            The fastest growing agencies aren't doing everything themselves. They are building teams. If you want to scale without blowing up your payroll, hiring overseas talent is the smartest move you can make. Tell us the role you need and we'll introduce you to qualified candidates.
                        </p>

                        <div className="flex flex-col items-center">
                            <Button
                                onClick={openSurvey}
                                variant="primary"
                                className="w-full sm:w-auto min-w-[320px] text-lg shadow-[0_0_40px_rgba(255,215,0,0.3)] hover:shadow-[0_0_60px_rgba(255,215,0,0.4)] animate-pulse hover:animate-none group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                                <span className="relative z-10">Find Your Remote Employee</span>
                            </Button>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />

            <SurveyModal
                isOpen={isSurveyOpen}
                onClose={closeSurvey}
                onComplete={handleSurveyComplete}
                source="Digital Agencies"
            />
        </div>
    );
};

export default DigitalAgencies;
