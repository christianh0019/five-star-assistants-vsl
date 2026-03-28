import React, { useState, useRef } from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import SurveyModal from '../components/SurveyModal';
import ScrollReveal from '../components/ScrollReveal';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, ShieldCheck, Users,
    CreditCard, Package, Phone, FileText,
    BarChart2, Calculator, Database, Calendar,
    ChevronLeft, ChevronRight, Check,
    FileX, BadgeDollarSign, RefreshCw, Globe2, Timer,
    Award, Target, TrendingUp, Megaphone,
} from 'lucide-react';
import Button from '../components/Button';

const socialProofStats = [
    { icon: Clock,       value: '7 Days',  label: 'Average Time to First Candidate' },
    { icon: DollarSign,  value: '$4/hr',   label: 'Starting Rate' },
    { icon: ShieldCheck, value: '100%',    label: 'Free Placements' },
    { icon: Users,       value: 'Top 1%',  label: 'Of Applicants Placed' },
];

const roles = [
    {
        icon: CreditCard,
        title: 'Telecom Billing & Invoicing VA',
        desc: "Process invoices, reconcile usage charges, and resolve billing disputes — without pulling your team off higher-value work.\n\n• Generate monthly invoices and send them to customers on schedule\n• Reconcile usage data against billing records and flag any discrepancies\n• Handle inbound billing dispute calls and emails and log resolution steps\n• Enter billing adjustments, credits, and proration changes into Rev.io, Datagate, or OneBill\n• Pull aging reports weekly and follow up on past-due balances",
    },
    {
        icon: Package,
        title: 'Order Management & Provisioning VA',
        desc: "Track every service order from submission to activation and catch delays before they reach the customer.\n\n• Enter new service orders into your OSS/BSS or CRM and monitor status at every step\n• Coordinate with carrier provisioning teams and follow up on pending activations\n• Update customers on order status and expected activation timelines\n• Flag stalled orders and escalate to the right internal contact immediately\n• Maintain accurate order logs and ensure all records are complete before closing",
    },
    {
        icon: Phone,
        title: 'Customer Support & Ticketing Agent',
        desc: "Handle Tier 1 support so your technical team only deals with issues that actually need them.\n\n• Answer inbound calls and emails about billing, outages, account changes, and plan questions\n• Create, categorize, and update tickets in Zendesk, Freshdesk, or ConnectWise\n• Resolve routine issues — password resets, portal login help, plan change requests\n• Escalate complex technical issues to the right team member with a full summary\n• Follow up with customers after resolution to confirm the issue is closed",
    },
    {
        icon: FileText,
        title: 'Number Porting Specialist',
        desc: "Manage the full LOA process from start to finish — and keep customers informed the whole way.\n\n• Prepare and submit Letters of Authorization to carriers for number port requests\n• Track port submission status and follow up with carriers on pending requests\n• Communicate expected completion dates and updates directly to clients\n• Resolve rejection notices by identifying the error and resubmitting quickly\n• Maintain a port log with current status, dates, and carrier contact notes for every request",
    },
    {
        icon: BarChart2,
        title: 'Sales Support & Quote Assistant',
        desc: "Build comparison quotes and keep the CRM clean so your sales team can focus on closing.\n\n• Research carrier pricing, coverage maps, and plan options for each client opportunity\n• Build formatted side-by-side comparison quotes and proposal documents\n• Update CRM records after every sales call, demo, or proposal sent\n• Follow up on open quotes that have not responded within a defined timeframe\n• Prepare MSAs, SOWs, and contract documents for sales team review before sending",
    },
    {
        icon: Calculator,
        title: 'Commission Tracking & Reconciliation VA',
        desc: "Log in to every carrier portal, download every statement, and find every discrepancy before money is left on the table.\n\n• Access carrier portals monthly and download commission statements for each provider\n• Cross-reference actual payouts against expected commissions by account\n• Flag missed, reduced, or incorrect commissions and document each discrepancy\n• Prepare reconciliation summaries for the agent or broker to review and dispute\n• Maintain a commission tracking spreadsheet with rolling 12-month history by carrier",
    },
    {
        icon: Database,
        title: 'CRM & Data Entry Specialist',
        desc: "Keep your customer records accurate across every platform so your billing, support, and sales data actually reflects reality.\n\n• Update customer profiles, contact info, and account status after every interaction\n• Merge duplicate records and fix missing fields in Salesforce, Zoho, or HubSpot\n• Log all sales activity, service tickets, and billing notes in the correct account\n• Tag accounts by segment, product, status, and renewal date for reporting purposes\n• Run weekly data quality checks and flag records that need review",
    },
    {
        icon: Calendar,
        title: 'Back-Office Admin & Scheduling VA',
        desc: "Handle the administrative work that keeps your operation running without slowing anyone down.\n\n• Schedule installs, field tech visits, and onboarding calls with customers\n• Send appointment confirmations, reminders, and instructions to all parties\n• Triage the general inbox and route emails to the right team member\n• Format internal documents, reports, and presentations on request\n• Coordinate between departments on open tasks that are waiting on input",
    },
];

const sampleJobs = [
    {
        icon: CreditCard,
        photo: 'https://pbalmjdytwiqxpftipwn.supabase.co/storage/v1/object/public/applicant-files/headshots/1773833445963-jnwktbqo0o.jpg',
        title: 'Telecom Billing & Invoicing VA',
        rate: '$5–8/hr',
        responsibilities: [
            'Generate and send monthly invoices and follow up on all past-due balances',
            'Reconcile usage charges against billing records and resolve discrepancies',
            'Handle inbound billing disputes via phone and email and log every resolution step',
            'Enter billing adjustments, credits, and proration changes into Rev.io or Datagate',
            'Prepare weekly aging reports and escalate high-risk accounts to the billing manager',
        ],
        requirements: '2+ yrs telecom or SaaS billing experience · Rev.io, Datagate, or OneBill preferred · Billing dispute handling · Strong Excel or Sheets skills',
    },
    {
        icon: Package,
        photo: 'https://pbalmjdytwiqxpftipwn.supabase.co/storage/v1/object/public/applicant-files/headshots/1773880813684-oupmv91rsbj.jpeg',
        title: 'Order Management & Provisioning VA',
        rate: '$5–8/hr',
        responsibilities: [
            'Enter new service orders into the OSS/BSS or CRM and monitor provisioning status',
            'Coordinate with carrier provisioning teams and follow up daily on pending activations',
            'Send order status updates to customers and manage expectation on activation timelines',
            'Flag stalled or rejected orders immediately and escalate to the correct internal contact',
            'Maintain complete and accurate order records from submission through to activation close',
        ],
        requirements: '1+ yr telecom order entry or provisioning experience · CRM or OSS/BSS platforms · Carrier coordination · High attention to detail',
    },
    {
        icon: Phone,
        photo: 'https://pbalmjdytwiqxpftipwn.supabase.co/storage/v1/object/public/applicant-files/headshots/1773970257320-z45ifycz8gb.jpg',
        title: 'Customer Support & Ticketing Agent',
        rate: '$4–7/hr',
        responsibilities: [
            'Answer inbound calls and emails about billing, service outages, and account questions',
            'Create, categorize, and update tickets in Zendesk, Freshdesk, or ConnectWise',
            'Resolve Tier 1 issues — password resets, plan changes, portal access — on the first contact',
            'Escalate complex technical issues to the correct team member with a full written summary',
            'Follow up with customers after each resolved ticket to confirm satisfaction',
        ],
        requirements: '1+ yr telecom or technical customer service experience · Zendesk, Freshdesk, or ConnectWise · Billing and account query handling · Clear phone and written communication',
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
        desc: 'Finding your VA is completely free. You only pay once they start.',
    },
    {
        icon: RefreshCw,
        title: 'Free To Change Your Staff',
        desc: "If someone isn't the right fit, we find a replacement at no extra cost.",
    },
    {
        icon: CreditCard,
        title: 'One Simple Hourly Rate',
        desc: 'Your rate covers everything — computer, internet, and all associated fees.',
    },
    {
        icon: Globe2,
        title: '24/7 Coverage Available',
        desc: 'We staff around the clock — great for 24/7 customer support and after-hours order management.',
    },
    {
        icon: Timer,
        title: 'Flexible Hours',
        desc: 'Start with 20 hours a week and scale up as your subscriber base grows.',
    },
];

const Telecommunications: React.FC = () => {
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
                        callout="Telecom Agents, ISPs, Resellers & MVNO Operators"
                        headline={
                            <>
                                Hire a Telecom Virtual Assistant.{' '}
                                <span className="text-gold italic">Starting at $4/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Get a trained remote assistant to handle your billing, orders, customer support, and back-office work — so you can focus on growing your business.{' '}
                                <span className="font-bold text-navy">
                                    Placement is free. Your VA starts in 7 days or less.
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

                            <div className="text-center mb-12 md:mb-16">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    ROLES WE PLACE
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    Telecom Roles We Fill For Your Business
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    From billing and provisioning to number porting and customer support — trained assistants who know how telecom businesses operate.
                                </p>
                            </div>

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
                                <div className="hidden lg:block">
                                    <img
                                        src="/images/va-1.png"
                                        alt="Telecom virtual assistant"
                                        className="w-full rounded-[2rem] shadow-xl object-cover"
                                    />
                                </div>

                            </div>

                            <div className="mt-14 text-center">
                                <Button onClick={openSurvey} variant="primary">
                                    Find My Telecom Virtual Assistant
                                </Button>
                                <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                            </div>

                        </div>
                    </section>
                </ScrollReveal>

                {/* Sample Jobs Placed */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-white px-4 border-t border-gray-100">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-12 md:mb-16">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    RECENTLY PLACED
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    Telecom Roles We've Successfully Placed
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    Real roles, real hires. Here's a look at what we've placed for telecom agents, ISPs, resellers, and MVNO operators.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
                                {sampleJobs.map((job, idx) => (
                                    <div key={idx} className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden">

                                        <div className="p-6 pb-4 border-b border-gray-50">
                                            <div className="flex items-center gap-3 mb-4">
                                                <img
                                                    src={job.photo}
                                                    alt="Placed assistant"
                                                    className="w-11 h-11 rounded-full object-cover flex-shrink-0 border border-gray-100"
                                                />
                                            </div>
                                            <h3 className="font-heading font-bold text-lg text-navy leading-snug mb-2">
                                                {job.title}
                                            </h3>
                                            <span className="inline-block bg-gold/10 text-navy font-heading font-bold text-sm px-3 py-1 rounded-full">
                                                {job.rate}
                                            </span>
                                        </div>

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

                                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                                            <p className="font-heading text-xs font-bold text-gray-400 tracking-widest uppercase mb-1.5">
                                                Requirements
                                            </p>
                                            <p className="font-body text-xs text-gray-500 leading-relaxed">{job.requirements}</p>
                                        </div>

                                    </div>
                                ))}
                            </div>

                            <div className="text-center">
                                <Button onClick={openSurvey} variant="primary">
                                    Hire A Role Like These
                                </Button>
                                <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
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
                                    We handle the hiring. You get a great VA. It really is that simple.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
                                {advantages.map(({ icon: Icon, title, desc }, idx) => (
                                    <div key={idx} className="bg-white/[0.05] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] transition-colors duration-200">
                                        <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                                            <Icon size={22} className="text-gold" />
                                        </div>
                                        <h3 className="font-heading font-bold text-white text-lg mb-2 leading-snug">{title}</h3>
                                        <p className="font-body text-sm text-blue-100/60 leading-relaxed">{desc}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="text-center">
                                <Button onClick={openSurvey} variant="primary">
                                    Get Started — It's Free
                                </Button>
                                <p className="font-heading italic text-white/30 text-sm mt-3">No setup fees. No long-term contracts.</p>
                            </div>

                        </div>
                    </section>
                </ScrollReveal>

                {/* Built Around Your Business */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-white px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">

                                <div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                        WHY FSA FOR TELECOM
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built For Telecom Agents, ISPs &amp; Resellers
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Your team should be focused on customers and growth — not manually reconciling commissions, chasing provisioning updates, or handling Tier 1 support tickets. But without dedicated back-office staff, that work lands on the people you can least afford to distract.</p>
                                        <p>We place trained assistants who already know how telecom operations work. They know the billing platforms. They know the ticketing tools. They know the workflows. You tell us what you need, and we find the right person. Fast.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">
                                        Book A Discovery Call
                                    </Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>

                                <div className="hidden lg:block">
                                    <img
                                        src="/images/va-2.png"
                                        alt="Telecom virtual assistant at work"
                                        className="w-full rounded-[2rem] shadow-xl object-cover"
                                    />
                                </div>

                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* What We Cover */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12 md:mb-16">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    WHAT WE COVER
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    Everything Your Telecom Business Needs, Under One Roof
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: CreditCard,
                                        title: 'Billing, Invoicing & Commission Tracking',
                                        desc: 'Keep your billing accurate and make sure every commission gets paid.',
                                        items: ['Monthly invoice generation and delivery', 'Usage reconciliation and dispute resolution', 'Carrier portal access and commission statement downloads', 'Discrepancy reporting and follow-up with carriers'],
                                    },
                                    {
                                        icon: Package,
                                        title: 'Order Management & Provisioning',
                                        desc: 'Track every order and catch every delay before it reaches a customer.',
                                        items: ['Service order entry and provisioning status tracking', 'Carrier coordination and activation follow-up', 'Number porting — LOA prep, submissions, and rejections', 'Customer status updates throughout the order lifecycle'],
                                    },
                                    {
                                        icon: Phone,
                                        title: 'Customer Support & Ticketing',
                                        desc: 'Handle Tier 1 support so your technical team stays focused.',
                                        items: ['Inbound call and email support for billing and service questions', 'Ticket creation, routing, and status updates in Zendesk or Freshdesk', 'Password resets, plan changes, and portal access issues', 'Post-resolution follow-up and customer satisfaction checks'],
                                    },
                                    {
                                        icon: Megaphone,
                                        title: 'CRM, Sales Support & Admin',
                                        desc: "Keep your pipeline clean and your sales team moving fast.",
                                        items: ['Carrier quote research and proposal formatting', 'CRM record updates after every sales and service interaction', 'MSA, SOW, and contract document preparation', 'Scheduling, inbox triage, and general back-office admin'],
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
                                    Why Telecom Companies Choose Five Star Assistants
                                </h2>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-14">

                                <div className="flex flex-col gap-6">
                                    {[
                                        {
                                            icon: DollarSign,
                                            title: 'Labor Costs Are Eating Your Revenue',
                                            desc: "Telecom companies spend up to 50% of their operating revenue on labor. Wage costs have grown more than 5% per year for three years straight. A trained VA at $4/hr handles your back-office work for a fraction of what a local hire costs — without sacrificing quality.",
                                        },
                                        {
                                            icon: Award,
                                            title: 'They Know Your Tools Before Day One',
                                            desc: "Our assistants are trained on Salesforce, Zendesk, ConnectWise, Rev.io, Datagate, OneBill, Freshdesk, and HubSpot. You don't have to teach them how telecom operations work. They already know.",
                                        },
                                        {
                                            icon: Target,
                                            title: 'Every Ticket Handled. Every Order Tracked. Every Commission Reconciled.',
                                            desc: "Support backlogs hurt retention. Missed commissions hurt your margin. Stalled orders hurt your reputation. A dedicated VA stays on top of all three — so your team only deals with things that actually need them.",
                                        },
                                    ].map(({ icon: Icon, title, desc }, idx) => (
                                        <div key={idx} className="relative bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex gap-5 items-start">
                                            <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center flex-shrink-0">
                                                <Icon size={22} className="text-gold" />
                                            </div>
                                            <div>
                                                <h3 className="font-heading font-bold text-navy text-lg mb-2 leading-snug">{title}</h3>
                                                <p className="font-body text-gray-600 text-sm leading-relaxed">{desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="hidden lg:block">
                                    <img
                                        src="/images/va-3.png"
                                        alt="Five Star Assistant at work"
                                        className="w-full rounded-[2rem] shadow-xl object-cover"
                                    />
                                </div>

                            </div>

                            <div className="text-center">
                                <Button onClick={openSurvey} variant="primary">
                                    Start Building Your Team
                                </Button>
                                <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                            </div>

                        </div>
                    </section>
                </ScrollReveal>

                {/* Stats Section */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-white px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12 md:mb-16">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    THE NUMBERS
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    Why Telecom Companies Are Turning to Virtual Assistants
                                </h2>
                                <p className="font-body text-lg text-gray-500 max-w-2xl mx-auto">
                                    The telecom industry is growing fast. The companies that scale are the ones who stop doing $4/hr work in-house.
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mb-12">

                                <div className="flex flex-col justify-between gap-4 h-full">
                                    {[
                                        { value: '50%', label: "The median telecom company spends nearly 50% of its operating revenue on labor. Wage costs have grown more than 5% per year. Outsourcing back-office work is no longer optional — it's financial strategy. (Moss Adams 2024)" },
                                        { value: '75%', label: "Of customer service reps reported handling their highest-ever ticket volume in 2024. Without dedicated support staff, your best people are stuck on routine inquiries. (HubSpot State of Customer Service 2024)" },
                                        { value: '$3.58T', label: "The global telecom services market is projected to reach $3.58 trillion by 2033, growing at 7.1% per year. More subscribers means more orders, more billing, and more support — all of which a VA can handle. (Grand View Research 2025)" },
                                    ].map(({ value, label }) => (
                                        <div key={label} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-center gap-6">
                                            <p className="font-heading font-bold text-3xl text-gold flex-shrink-0 w-24 leading-tight">{value}</p>
                                            <p className="font-body text-sm text-gray-500 leading-relaxed">{label}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 h-full">
                                    <p className="font-heading text-xs font-bold text-gold tracking-widest uppercase mb-8">WHERE TELECOM BACK-OFFICE TIME GOES EACH WEEK</p>
                                    <div className="space-y-6">
                                        {[
                                            { label: 'Customer support & tickets', hrs: '8 hrs', pct: 100 },
                                            { label: 'Order entry & provisioning',  hrs: '6 hrs', pct: 75 },
                                            { label: 'Billing & reconciliation',   hrs: '5 hrs', pct: 63 },
                                            { label: 'Commission tracking',         hrs: '3 hrs', pct: 38 },
                                            { label: 'With a Five Star VA',          hrs: '0 hrs', pct: 0, highlight: true },
                                        ].map(({ label, hrs, pct, highlight }) => (
                                            <div key={label} className="flex items-center gap-4">
                                                <span className={`font-heading font-bold text-xs w-36 flex-shrink-0 leading-tight ${highlight ? 'text-gold' : 'text-gray-500'}`}>{label}</span>
                                                <div className="flex-1 h-7 bg-gray-200 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full rounded-full ${highlight ? 'bg-gold/30' : 'bg-gold'}`}
                                                        style={{ width: `${pct}%` }}
                                                    />
                                                </div>
                                                <span className={`font-heading font-bold text-xs w-14 text-right flex-shrink-0 ${highlight ? 'text-gold' : 'text-navy'}`}>{hrs}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="font-body text-xs text-gray-400 mt-6">* Based on Moss Adams telecom benchmarking and HubSpot customer service data</p>
                                </div>

                            </div>

                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                                <div className="w-16 h-16 rounded-2xl bg-navy/[0.06] flex items-center justify-center flex-shrink-0">
                                    <TrendingUp size={28} className="text-navy/70" />
                                </div>
                                <div>
                                    <p className="font-heading font-bold text-navy text-xl md:text-2xl mb-3 leading-snug">
                                        Telecom companies that outsource back-office work report 30–40% lower cost per ticket and faster order turnaround
                                    </p>
                                    <p className="font-body text-gray-500 leading-relaxed">
                                        When your billing VA catches every dispute before it becomes a chargeback, and your provisioning VA tracks every order before it goes past SLA, you stop losing money to preventable mistakes. A trained VA at $4/hr costs less per month than a single billing error.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* Final CTA */}
                <ScrollReveal>
                    <section className="bg-navy py-24 md:py-36 px-4 relative overflow-hidden border-t-8 border-gold">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

                        <div className="max-w-4xl mx-auto text-center relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-body text-sm font-semibold mb-8">
                                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                                READY TO GET STARTED?
                            </div>

                            <h2 className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                                Your Business Deserves A{' '}
                                <span className="text-gold italic">Five Star Team</span>
                            </h2>

                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us what you need and we'll find you the right VA — in 7 days or less. No recruiting, no risk, no long-term contracts.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mb-12">
                                {['No setup fees', 'No lock-in contracts', 'Free placement', 'Telecom-trained VAs'].map((item) => (
                                    <div key={item} className="flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-5 py-2.5">
                                        <Check size={14} className="text-gold flex-shrink-0" strokeWidth={3} />
                                        <span className="font-body text-white font-medium text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                onClick={openSurvey}
                                variant="primary"
                                className="w-full sm:w-auto min-w-[320px] text-xl shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] py-5"
                            >
                                Book A Free Discovery Call
                            </Button>
                            <p className="font-heading italic text-white/30 text-sm mt-4">100% Free. No Obligation.</p>
                        </div>
                    </section>
                </ScrollReveal>

            </main>

            <Footer />

            <SurveyModal
                isOpen={isSurveyOpen}
                onClose={closeSurvey}
                onComplete={handleSurveyComplete}
                source="Telecommunications"
            />
        </div>
    );
};

export default Telecommunications;
