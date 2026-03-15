import React, { useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SurveyModal from '../components/SurveyModal';
import PricingCalculator from '../components/PricingCalculator';
import { useNavigate } from 'react-router-dom';
import { Check, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Button from '../components/Button';

const features = [
    {
        title: "Recruiting & Talent Sourcing",
        desc: "We actively recruit overseas professionals instead of waiting for random applicants.\n\nOur team sources college-educated, English-fluent candidates with experience working remotely in roles like marketing, operations, customer support, and administration.\n\nYou skip the job boards, resume sorting, and endless applicant filtering.\n\nWe bring you only the strongest candidates."
    },
    {
        title: "Candidate Vetting & Interviews",
        desc: "Before you ever meet a candidate, they go through our internal screening process.\n\nWe evaluate:\n\n• communication skills\n• professional experience\n• remote work readiness\n• technical ability\n\nBy the time you interview them, you're meeting pre-qualified finalists, not random applicants."
    },
    {
        title: "Payroll & International Payments",
        desc: "Hiring overseas employees normally requires navigating complicated international payments and compliance.\n\nWe handle the payroll infrastructure so you don't have to deal with:\n\n• international payment logistics\n• currency issues\n• contractor management\n\nYou simply pay one predictable rate for your assistant's time."
    },
    {
        title: "Productivity Monitoring",
        desc: "Every assistant works through productivity tracking software that records:\n\n• active work time\n• screen activity\n• time spent on tasks\n\nThis ensures you have full visibility into how your assistant spends their work hours.\n\nNo guessing. No blind trust."
    },
    {
        title: "Daily Productivity Reports",
        desc: "You receive detailed reports showing:\n\n• hours worked\n• productivity metrics\n• activity summaries\n\nThese reports ensure you are only paying for real work being completed, not idle time.\n\nMost businesses never get this level of visibility with traditional employees."
    },
    {
        title: "Ongoing Support & Replacement Guarantee",
        desc: "If your assistant isn't the right fit, we replace them.\n\nNo extra cost. No restarting the hiring process.\n\nOur team continues supporting the relationship so your remote employee stays productive and aligned with your business needs.\n\nYou get the flexibility of remote talent without the risk of hiring mistakes."
    }
];

const Pricing: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const touchStartX = useRef(0);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);

    const handleSurveyComplete = () => {
        closeSurvey();
        navigate('/booking');
    };

    const prevSlide = () => setCurrentSlide(i => (i - 1 + features.length) % features.length);
    const nextSlide = () => setCurrentSlide(i => (i + 1) % features.length);

    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartX.current = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: React.TouchEvent) => {
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) nextSlide();
            else prevSlide();
        }
    };

    return (
        <div className="min-h-screen bg-white flex flex-col font-body">
            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* HERO */}
                <section className="relative pt-36 md:pt-48 pb-12 px-4 md:px-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-white">
                    <div className="max-w-[900px] mx-auto text-center flex flex-col items-center relative z-10">
                        <h1 className="font-heading text-navy text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 drop-shadow-sm">
                            See Your Role's <span className="text-gold italic">Average Hourly Rate</span>
                        </h1>
                        <p className="font-subheading text-navy/70 text-lg md:text-xl font-medium tracking-wider max-w-2xl mx-auto">
                            Select a category, role, and experience level for an instant hourly rate estimate.
                        </p>
                    </div>
                </section>

                {/* PRICING CALCULATOR */}
                <PricingCalculator />

                {/* WHAT WE HANDLE FOR YOU — Carousel */}
                <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-12 md:mb-16">
                            <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                WHAT WE DO
                            </h3>
                            <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                What We Actually Handle For You
                            </h2>
                        </div>

                        <div className="relative">
                            {/* Carousel track */}
                            <div
                                className="overflow-hidden rounded-[2rem]"
                                onTouchStart={handleTouchStart}
                                onTouchEnd={handleTouchEnd}
                            >
                                <div
                                    className="flex transition-transform duration-500 ease-out"
                                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                >
                                    {features.map((feature, idx) => (
                                        <div key={idx} className="w-full flex-shrink-0">
                                            <div className="bg-white p-8 md:p-14 rounded-[2rem] border border-gray-100 shadow-sm relative overflow-hidden flex flex-col min-h-[320px]">
                                                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
                                                <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center mb-6 shrink-0 relative z-10">
                                                    <Check className="text-navy" size={24} />
                                                </div>
                                                <h3 className="font-heading font-bold text-2xl md:text-3xl text-navy mb-5 leading-tight relative z-10">
                                                    {feature.title}
                                                </h3>
                                                <div className="font-body text-gray-600 text-base leading-relaxed space-y-3 relative z-10">
                                                    {feature.desc.split('\n\n').map((paragraph, pIdx) => {
                                                        if (paragraph.startsWith('•')) {
                                                            return (
                                                                <ul key={pIdx} className="space-y-2">
                                                                    {paragraph.split('\n').map((item, iIdx) => (
                                                                        <li key={iIdx} className="flex items-start gap-3">
                                                                            <span className="text-gold font-bold mt-0.5 shrink-0">•</span>
                                                                            <span className="font-medium text-gray-700">{item.replace('• ', '')}</span>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            );
                                                        }
                                                        return <p key={pIdx}>{paragraph}</p>;
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Controls */}
                            <div className="flex items-center justify-center gap-6 mt-8">
                                <button
                                    onClick={prevSlide}
                                    className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-navy hover:bg-navy hover:text-white hover:border-navy transition-all duration-200"
                                    aria-label="Previous"
                                >
                                    <ChevronLeft size={20} />
                                </button>

                                <div className="flex items-center gap-2">
                                    {features.map((_, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => setCurrentSlide(idx)}
                                            className={`rounded-full transition-all duration-300 h-2 ${
                                                idx === currentSlide
                                                    ? 'bg-navy w-6'
                                                    : 'bg-gray-300 hover:bg-gray-400 w-2'
                                            }`}
                                            aria-label={`Go to slide ${idx + 1}`}
                                        />
                                    ))}
                                </div>

                                <button
                                    onClick={nextSlide}
                                    className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-navy hover:bg-navy hover:text-white hover:border-navy transition-all duration-200"
                                    aria-label="Next"
                                >
                                    <ChevronRight size={20} />
                                </button>
                            </div>

                            <p className="text-center font-body text-sm text-gray-400 mt-3">
                                {currentSlide + 1} of {features.length}
                            </p>
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="bg-navy py-24 md:py-32 px-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3 pointer-events-none" />

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-body text-sm font-semibold mb-8">
                            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                            READY TO START?
                        </div>

                        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                            Build Your Team Without the{' '}
                            <span className="text-gold italic">Hiring Headache</span>
                        </h2>

                        <p className="font-body text-lg text-blue-100/80 max-w-xl mx-auto mb-12">
                            Tell us the role you want to fill and we'll introduce you to qualified candidates — fast.
                        </p>

                        <div className="flex flex-wrap justify-center gap-3 mb-12">
                            {['No recruiting process', 'No payroll complexity', 'No hiring risk'].map((item) => (
                                <div key={item} className="flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-5 py-2.5">
                                    <X className="text-gold w-4 h-4 flex-shrink-0" />
                                    <span className="font-body text-white font-medium text-sm">{item}</span>
                                </div>
                            ))}
                        </div>

                        <p className="font-heading font-bold text-white text-2xl md:text-3xl mb-12">
                            Just talented professionals ready to work.
                        </p>

                        <Button
                            onClick={openSurvey}
                            variant="primary"
                            className="w-full sm:w-auto min-w-[320px] text-xl shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] py-5"
                        >
                            Find Your Remote Employee
                        </Button>
                        <p className="font-heading italic text-white/40 text-sm mt-4">100% Free. No Obligation.</p>
                    </div>
                </section>

            </main>

            <Footer />

            <SurveyModal
                isOpen={isSurveyOpen}
                onClose={closeSurvey}
                onComplete={handleSurveyComplete}
                source="Pricing"
            />
        </div>
    );
};

export default Pricing;
