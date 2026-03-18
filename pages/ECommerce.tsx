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
    ChevronLeft, ChevronRight, Check,
    FileX, BadgeDollarSign, RefreshCw, CreditCard, Globe2, Timer,
    Code2, Megaphone, Award, Target, TrendingUp,
} from 'lucide-react';
import Button from '../components/Button';

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
];

const advantages = [
    {
        icon: FileX,
        title: 'No Lock-In Contracts',
        desc: 'Work with us month to month. No long-term commitments required.',
    },
    {
        icon: BadgeDollarSign,
        title: 'No Set Up Fees',
        desc: 'Recruiting is completely free. You only pay once your assistant starts.',
    },
    {
        icon: RefreshCw,
        title: 'Free To Change Your Staff',
        desc: "If someone isn't the right fit, we replace them at no extra cost.",
    },
    {
        icon: CreditCard,
        title: 'One Simple Hourly Rate',
        desc: 'Your rate covers everything — computer, internet, and all associated fees.',
    },
    {
        icon: Globe2,
        title: '24/7 Operation',
        desc: 'We can staff global businesses around the clock, any time zone.',
    },
    {
        icon: Timer,
        title: 'Flexible Hours',
        desc: 'Assistants are available from a minimum of 20 hours per week — scale as needed.',
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

                                {/* Industry image */}
                                <div className="hidden lg:block sticky top-32">
                                    <img
                                        src="/images/ecom-industry-1.png"
                                        alt="E-Commerce virtual assistant"
                                        className="w-full rounded-[2rem] shadow-xl object-cover"
                                    />
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
                                {sampleJobs.slice(0, 3).map((job, idx) => (
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

                {/* Advantages */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-navy px-4 border-t-8 border-gold">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12 md:mb-16">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    WHY FIVE STAR ASSISTANTS
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
                                    Everything Included. Zero Hassle.
                                </h2>
                                <p className="font-body text-lg text-blue-100/70 max-w-xl mx-auto">
                                    We've removed every friction point from hiring remote talent so you can focus on growing your store.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {advantages.map(({ icon: Icon, title, desc }, idx) => (
                                    <div key={idx} className="bg-white/[0.05] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] transition-colors duration-200">
                                        <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                                            <Icon size={22} className="text-gold" />
                                        </div>
                                        <h3 className="font-heading font-bold text-white text-lg mb-2 leading-snug">
                                            {title}
                                        </h3>
                                        <p className="font-body text-sm text-blue-100/60 leading-relaxed">
                                            {desc}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* Built Around Your Success */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-white px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">

                                {/* Left: narrative */}
                                <div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                        WHY FSA FOR E-COMMERCE
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built Around Your Success
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>At Five Star Assistants, we've built a smarter way to run e-commerce operations — combining deep industry knowledge with elite offshore talent, so your store runs efficiently without you doing everything yourself.</p>
                                        <p>As a specialized e-commerce staffing partner, we make sure you're matched with thoroughly vetted professionals who understand your platforms, your customers, and your goals.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">
                                        Book A Discovery Call
                                    </Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>

                                {/* Right: two feature boxes */}
                                <div className="space-y-6">
                                    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                                        <h3 className="font-heading font-bold text-navy text-xl mb-4">
                                            Streamlined, Clear, and Dependable
                                        </h3>
                                        <p className="font-body text-gray-600 mb-5">Our approach is built for maximum efficiency. Partnering with Five Star Assistants guarantees:</p>
                                        <ul className="space-y-3">
                                            {[
                                                'Access to top-tier e-commerce specialists',
                                                'A pricing model tailored to your exact needs',
                                                'Ongoing support from our team at every stage',
                                            ].map((item) => (
                                                <li key={item} className="flex items-start gap-3">
                                                    <span className="text-gold font-bold mt-0.5">—</span>
                                                    <span className="font-body text-gray-700 font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="bg-navy rounded-2xl p-8">
                                        <h3 className="font-heading font-bold text-white text-xl mb-4">
                                            Integrity at the Helm
                                        </h3>
                                        <p className="font-body text-blue-100/80 leading-relaxed">
                                            In e-commerce, precision and trust are everything. Your data stays safeguarded and is shared only with your chosen assistant. No hidden fees, no surprises — just a clean, honest partnership focused on your growth.
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* All The Skills Your Store Needs */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12 md:mb-16">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    WHAT WE COVER
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    All The Skills Your Store Needs, Under One Roof
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: Users,
                                        title: 'Administrative & Client Relations',
                                        desc: 'Boost efficiency by offloading admin and customer care — reduce operational costs by up to 70%.',
                                        items: ['Data entry & database management', 'Customer support & client assistance', 'Audio-to-text transcription', 'Talent coordination & HR support'],
                                    },
                                    {
                                        icon: Code2,
                                        title: 'Tech & Web Solutions',
                                        desc: 'Bring in skilled tech and web professionals without the overhead.',
                                        items: ['Shopify & website development', 'E-commerce, CRM & automation', 'IT infrastructure management', 'Tech support & troubleshooting'],
                                    },
                                    {
                                        icon: Megaphone,
                                        title: 'Marketing & Sales',
                                        desc: 'Elevate your brand and drive revenue with dedicated marketing professionals.',
                                        items: ['Sales agents & appointment setters', 'Social media management', 'Content creation & copywriting', 'Outreach & lead generation'],
                                    },
                                    {
                                        icon: Calculator,
                                        title: 'Finance & Accounting',
                                        desc: 'Keep your books clean and your cash flow organized.',
                                        items: ['Bookkeeping & financial summaries', 'Certified accounting support', 'AR / AP billing operations', 'Financial planning & reporting'],
                                    },
                                ].map(({ icon: Icon, title, desc, items }, idx) => (
                                    <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                                        <div className="w-12 h-12 rounded-xl bg-navy/[0.06] flex items-center justify-center mb-5">
                                            <Icon size={22} className="text-navy/70" />
                                        </div>
                                        <h3 className="font-heading font-bold text-navy text-xl mb-3">{title}</h3>
                                        <p className="font-body text-gray-500 text-sm mb-5 leading-relaxed">{desc}</p>
                                        <ul className="space-y-2">
                                            {items.map((item) => (
                                                <li key={item} className="flex items-start gap-2.5">
                                                    <span className="text-gold font-bold mt-0.5 shrink-0">—</span>
                                                    <span className="font-body text-sm text-gray-700 font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* Three Pillars */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-white px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12 md:mb-16">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    THREE REASONS TO CHOOSE FSA
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    Why E-Commerce Owners Trust Five Star Assistants
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    {
                                        icon: DollarSign,
                                        title: 'Maximize Savings, Optimize Quality',
                                        desc: "Our e-commerce staffing model delivers top-tier talent at a fraction of the cost of local hiring. You get high-quality work without the high overhead — starting at just $6/hr.",
                                    },
                                    {
                                        icon: Award,
                                        title: 'World-Class, Diverse Expertise',
                                        desc: 'From product listings to customer support to paid ads, our remote specialists cover every corner of e-commerce operations. Your store gets what it needs to compete.',
                                    },
                                    {
                                        icon: Target,
                                        title: 'Efficiency Meets Focus',
                                        desc: "Let us handle the operational details. Our staffing model frees your team to focus on growth strategy while we manage the day-to-day, ensuring a seamless experience for your customers.",
                                    },
                                ].map(({ icon: Icon, title, desc }, idx) => (
                                    <div key={idx} className="relative bg-gray-50 rounded-[2rem] p-10 border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                        <div className="w-14 h-14 rounded-2xl bg-navy flex items-center justify-center mb-7">
                                            <Icon size={24} className="text-gold" />
                                        </div>
                                        <h3 className="font-heading font-bold text-navy text-xl mb-4 leading-snug">{title}</h3>
                                        <p className="font-body text-gray-600 leading-relaxed">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* Market Stats */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-navy px-4 border-t border-white/10">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12 md:mb-16">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    THE E-COMMERCE OPPORTUNITY
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
                                    The Market Is Growing.<br />Your Operations Should Too.
                                </h2>
                                <p className="font-body text-lg text-blue-100/60 max-w-2xl mx-auto">
                                    E-commerce is one of the fastest-growing sectors globally. Businesses that outsource operations now are positioning themselves to scale faster and more profitably.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                                {[
                                    { value: '$2.8T', label: 'Global e-commerce market value in 2022' },
                                    { value: '12.2%', label: 'Compound annual growth rate (CAGR)' },
                                    { value: '$3.2T', label: 'Projected market value by 2023' },
                                ].map(({ value, label }) => (
                                    <div key={label} className="bg-white/[0.05] border border-white/10 rounded-2xl p-8 text-center">
                                        <p className="font-heading font-bold text-4xl md:text-5xl text-gold mb-3">{value}</p>
                                        <p className="font-body text-sm text-blue-100/60 leading-relaxed">{label}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-white/[0.05] border border-white/10 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center flex-shrink-0">
                                    <TrendingUp size={28} className="text-gold" />
                                </div>
                                <div>
                                    <p className="font-heading font-bold text-white text-xl md:text-2xl mb-3 leading-snug">
                                        The e-commerce BPO market is witnessing significant expansion
                                    </p>
                                    <p className="font-body text-blue-100/60 leading-relaxed">
                                        According to recent market research, the global e-commerce market is growing at a 12.2% CAGR. Businesses that build scalable remote operations today will have a decisive competitive advantage over the next decade.
                                    </p>
                                </div>
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
