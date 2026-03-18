import React, { useState, useRef } from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import SurveyModal from '../components/SurveyModal';
import ScrollReveal from '../components/ScrollReveal';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, ShieldCheck, Users,
    HeadphonesIcon, Package, Share2, Globe,
    ClipboardList, Mail, Calculator, Search,
    ChevronLeft, ChevronRight,
} from 'lucide-react';

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

const roles = [
    {
        icon: HeadphonesIcon,
        title: 'Customer Service & Support',
        desc: 'Handle every customer touchpoint so nothing slips through the cracks.\n\n• Handling inquiries via email or chat — products, shipping, and policies\n• Managing returns and exchanges for a smooth customer experience\n• Following up on feedback and reviews, positive and negative\n• Resolving disputes and complaints in a timely, professional manner\n• Providing product information and assisting customers in placing orders',
    },
    {
        icon: Package,
        title: 'Order Processing & Inventory Management',
        desc: 'Keep your store running smoothly from product listing to doorstep delivery.\n\n• Managing and updating product listings — descriptions, images, and prices\n• Monitoring stock levels and placing supplier orders to prevent stockouts\n• Processing orders from confirmation to shipping with accuracy\n• Coordinating with shipping vendors for timely dispatch and delivery\n• Handling inventory-related queries and database updates',
    },
    {
        icon: Share2,
        title: 'Social Media Management & Marketing',
        desc: 'Grow your brand presence and drive traffic without spending your own time on it.\n\n• Creating and scheduling posts for Instagram, Facebook, TikTok, and more\n• Engaging with followers, responding to comments, and building community\n• Running and monitoring ad campaigns to drive traffic and sales\n• Analyzing social media metrics to refine strategy\n• Coordinating with influencers or partner brands for promotional campaigns',
    },
    {
        icon: Globe,
        title: 'Website Maintenance & Content Creation',
        desc: 'Keep your storefront fresh, fast, and optimized for search engines.\n\n• Regularly updating website content for accuracy and freshness\n• Writing and publishing blog posts that engage customers and improve SEO\n• Optimizing product pages with keyword research and meta-tagging\n• Ensuring a smooth, efficient user experience across devices\n• Building and managing landing pages for marketing campaigns',
    },
    {
        icon: ClipboardList,
        title: 'Administrative Tasks',
        desc: 'Offload the day-to-day operational work that eats your time.\n\n• Scheduling appointments, managing your calendar, and organizing your to-do list\n• Performing data entry, maintaining customer databases, and managing records\n• Preparing reports, presentations, and business documents\n• Managing email correspondence and inbox organization\n• Coordinating with team members and managing small internal projects',
    },
    {
        icon: Mail,
        title: 'Email Marketing',
        desc: 'Stay top-of-mind with your customers through well-crafted, data-driven campaigns.\n\n• Designing newsletters and promotional emails that convert\n• Segmenting email lists by behavior and preferences for targeted campaigns\n• Analyzing open rates, click-through rates, and conversion metrics\n• Creating automated sequences for welcome flows, abandoned carts, and win-backs\n• Staying current with email marketing trends and deliverability best practices',
    },
    {
        icon: Calculator,
        title: 'Financial Tasks',
        desc: 'Keep your books clean and your cash flow clear without hiring a full-time accountant.\n\n• Maintaining bookkeeping records, tracking expenses, and managing receipts\n• Creating, sending, and following up on invoices for timely payment\n• Assisting with budget planning, forecasting, and expense analysis\n• Reconciling bank statements and financial transactions\n• Collaborating with accountants or advisors for tax prep and compliance',
    },
    {
        icon: Search,
        title: 'Research & Data Analysis',
        desc: 'Make smarter business decisions backed by real data and market insight.\n\n• Conducting market research to identify trends, customer needs, and competitors\n• Analyzing sales data to understand product performance and buying patterns\n• Researching potential suppliers, partners, or new product lines\n• Gathering and analyzing customer feedback for product development\n• Using analytics tools to generate insights that inform business decisions',
    },
];

const ECommerce: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const touchStartX = useRef(0);
    const navigate = useNavigate();

    const prevSlide = () => setCurrentSlide(i => (i - 1 + roles.length) % roles.length);
    const nextSlide = () => setCurrentSlide(i => (i + 1) % roles.length);

    const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
    const handleTouchEnd = (e: React.TouchEvent) => {
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) { if (diff > 0) nextSlide(); else prevSlide(); }
    };

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

                {/* Roles Carousel */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-5xl mx-auto">
                            <div className="text-center mb-12 md:mb-16">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    ROLES WE PLACE
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    E-Commerce Roles We Fill For You
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    From customer support to financial management — trained assistants ready to plug into your store.
                                </p>
                            </div>

                            <div className="relative">
                                <div
                                    className="overflow-hidden rounded-[2rem]"
                                    onTouchStart={handleTouchStart}
                                    onTouchEnd={handleTouchEnd}
                                >
                                    <div
                                        className="flex transition-transform duration-500 ease-out"
                                        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                    >
                                        {roles.map((role, idx) => (
                                            <div key={idx} className="w-full flex-shrink-0">
                                                <div className="bg-white p-8 md:p-14 rounded-[2rem] border border-gray-100 shadow-sm relative overflow-hidden flex flex-col min-h-[320px]">
                                                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
                                                    <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center mb-6 shrink-0 relative z-10">
                                                        <role.icon className="text-navy" size={24} />
                                                    </div>
                                                    <h3 className="font-heading font-bold text-2xl md:text-3xl text-navy mb-5 leading-tight relative z-10">
                                                        {role.title}
                                                    </h3>
                                                    <div className="font-body text-gray-600 text-base leading-relaxed space-y-3 relative z-10">
                                                        {role.desc.split('\n\n').map((paragraph, pIdx) => {
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
                                        {roles.map((_, idx) => (
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
                                    {currentSlide + 1} of {roles.length}
                                </p>
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
