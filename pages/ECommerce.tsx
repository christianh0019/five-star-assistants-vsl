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
    ChevronLeft, ChevronRight, ImageIcon, Check,
} from 'lucide-react';

const socialProofStats = [
    { icon: Clock,       value: '4 Days',  label: 'Average Time to First Candidate' },
    { icon: DollarSign,  value: '$6/hr',   label: 'Starting Rate' },
    { icon: ShieldCheck, value: '100%',    label: "Love It Or It's Free Guarantee" },
    { icon: Users,       value: 'Top 1%',  label: 'Of Applicants Placed' },
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

const sampleJobs = [
    {
        icon: HeadphonesIcon,
        title: 'Customer Support Specialist',
        rate: '$6–8/hr',
        responsibilities: [
            'Manage Zendesk / Gorgias tickets across email and chat',
            'Process return and exchange requests end-to-end',
            'Respond to product and shipping inquiries within 2 hours',
            'Escalate complex issues to the store owner',
            'Maintain CSAT scores above 95%',
        ],
        requirements: '1+ yr e-commerce support · Zendesk or Gorgias · Strong written English',
    },
    {
        icon: Package,
        title: 'Product Listing & Inventory Manager',
        rate: '$7–9/hr',
        responsibilities: [
            'Upload and optimize product listings on Shopify / Amazon',
            'Monitor stock levels and trigger reorder alerts',
            'Update product images, descriptions, and pricing',
            'Coordinate with suppliers for PO management',
            'Maintain inventory accuracy across all sales channels',
        ],
        requirements: '1+ yr Shopify or Amazon Seller Central · Excel / Google Sheets',
    },
    {
        icon: Share2,
        title: 'Social Media & Ads Manager',
        rate: '$8–10/hr',
        responsibilities: [
            'Create and schedule content for Instagram, TikTok, and Facebook',
            'Manage Meta Ads campaigns and reporting',
            'Engage with followers and respond to DMs',
            'Track performance metrics and suggest optimizations',
            'Source and coordinate UGC content from customers',
        ],
        requirements: '1+ yr paid social · Meta Ads Manager · Canva or Adobe',
    },
    {
        icon: Mail,
        title: 'Email Marketing Coordinator',
        rate: '$7–9/hr',
        responsibilities: [
            'Build and manage Klaviyo flows and broadcast campaigns',
            'Segment lists based on purchase behavior and LTV',
            'Draft and design promotional email content',
            'A/B test subject lines, CTAs, and send times',
            'Report on open, click, and revenue-per-email metrics',
        ],
        requirements: '1+ yr Klaviyo or Mailchimp · Basic HTML email · Copywriting',
    },
    {
        icon: Globe,
        title: 'Shopify Store Manager',
        rate: '$8–11/hr',
        responsibilities: [
            'Maintain and update Shopify storefront content daily',
            'Implement app integrations and test functionality',
            'Manage discount codes, promotions, and gift cards',
            'Monitor site speed and storefront conversion metrics',
            'Coordinate with developers on theme updates',
        ],
        requirements: '2+ yr Shopify · Liquid basics preferred · Google Analytics',
    },
    {
        icon: Search,
        title: 'E-Commerce Data Analyst',
        rate: '$9–12/hr',
        responsibilities: [
            'Build weekly sales and performance dashboards',
            'Analyze product and category-level revenue trends',
            'Track ad spend ROI across all marketing channels',
            'Prepare monthly business reviews for the owner',
            'Identify top/bottom performers and make recommendations',
        ],
        requirements: '2+ yr e-commerce analytics · Excel / Looker / GA4',
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

                {/* Roles Carousel + Image */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-7xl mx-auto">

                            {/* Section header */}
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

                            {/* 2-col: carousel left, image right */}
                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                                {/* Carousel */}
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
                                                    <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-gray-100 shadow-sm relative overflow-hidden flex flex-col min-h-[340px]">
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
                                                    className={`rounded-full transition-all duration-300 h-2 ${idx === currentSlide ? 'bg-navy w-6' : 'bg-gray-300 hover:bg-gray-400 w-2'}`}
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

                                {/* Image placeholder */}
                                <div className="hidden lg:block sticky top-32">
                                    <div className="aspect-[4/5] rounded-[2rem] border-2 border-dashed border-gray-200 bg-white flex flex-col items-center justify-center gap-4 shadow-sm">
                                        <div className="w-16 h-16 rounded-2xl bg-gray-100 flex items-center justify-center">
                                            <ImageIcon size={28} className="text-gray-300" />
                                        </div>
                                        <p className="font-heading font-semibold text-gray-300 text-base tracking-wide">
                                            Image Placeholder
                                        </p>
                                        <p className="font-body text-xs text-gray-300">
                                            Replace with industry photo
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* Sample Jobs Filled */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-white px-4 border-t border-gray-100">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-12 md:mb-16">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    RECENTLY FILLED
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    E-Commerce Jobs We've Successfully Placed
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    Real roles, real hires. Here's a sample of what we've placed for e-commerce businesses like yours.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {sampleJobs.map((job, idx) => (
                                    <div key={idx} className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden">

                                        {/* Card header */}
                                        <div className="p-6 pb-4 border-b border-gray-50">
                                            <div className="flex items-start justify-between gap-3 mb-4">
                                                <div className="w-11 h-11 rounded-xl bg-navy/[0.06] flex items-center justify-center flex-shrink-0">
                                                    <job.icon size={20} className="text-navy/70" />
                                                </div>
                                                <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-heading font-bold px-3 py-1 rounded-full border border-emerald-100">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                                    FILLED
                                                </span>
                                            </div>
                                            <h3 className="font-heading font-bold text-lg text-navy leading-snug mb-2">
                                                {job.title}
                                            </h3>
                                            <span className="inline-block bg-gold/10 text-navy font-heading font-bold text-sm px-3 py-1 rounded-full">
                                                {job.rate}
                                            </span>
                                        </div>

                                        {/* Responsibilities */}
                                        <div className="p-6 flex-grow">
                                            <p className="font-heading text-xs font-bold text-gray-400 tracking-widest uppercase mb-3">
                                                Responsibilities
                                            </p>
                                            <ul className="space-y-2">
                                                {job.responsibilities.map((r, rIdx) => (
                                                    <li key={rIdx} className="flex items-start gap-2.5">
                                                        <Check size={14} className="text-gold mt-0.5 flex-shrink-0" strokeWidth={3} />
                                                        <span className="font-body text-sm text-gray-600 leading-snug">{r}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Requirements footer */}
                                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                                            <p className="font-heading text-xs font-bold text-gray-400 tracking-widest uppercase mb-1.5">
                                                Requirements
                                            </p>
                                            <p className="font-body text-xs text-gray-500 leading-relaxed">{job.requirements}</p>
                                        </div>

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
