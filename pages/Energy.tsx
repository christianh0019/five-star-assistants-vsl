import React, { useState, useRef } from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import SurveyModal from '../components/SurveyModal';
import ScrollReveal from '../components/ScrollReveal';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, ShieldCheck, Users,
    FileText, ClipboardList, Calculator, Search, Phone, Calendar,
    ChevronLeft, ChevronRight, Check,
    FileX, BadgeDollarSign, RefreshCw, CreditCard, Globe2, Timer,
    Award, Target, TrendingUp,
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
        icon: Calculator,
        title: 'Billing & Invoicing VA',
        desc: "Keep revenue flowing without tying up your operations team in paperwork.\n\n• Generate and send customer invoices and statements on schedule\n• Process joint interest billing statements for oil and gas operators\n• Reconcile payments in QuickBooks, NetSuite, or SAP against billing records\n• Follow up on outstanding balances and log payment status in your CRM\n• Prepare month-end revenue summaries and flag billing discrepancies for review",
    },
    {
        icon: Phone,
        title: 'Customer Support VA',
        desc: "Handle front-line customer communication so your operations team stays focused on the field.\n\n• Answer inbound inquiries by phone, email, and chat about accounts and service\n• Process service connection and disconnection requests and update account records\n• Log outage reports and escalate to field operations per established protocols\n• Handle payment arrangement requests and document all interactions in your CRM\n• Send proactive notifications for planned outages, rate changes, and billing cycles",
    },
    {
        icon: ShieldCheck,
        title: 'Compliance & Documentation VA',
        desc: "Keep your records current, organized, and audit-ready at all times.\n\n• Maintain and update permit files, safety certifications, and inspection records\n• Track regulatory deadlines and send internal reminders for renewals and submissions\n• Compile documentation packages for audits, inspections, and regulatory filings\n• Research state-by-state compliance requirements for renewable energy incentive programs\n• Organize and archive contracts, LOAs, and compliance correspondence in document systems",
    },
    {
        icon: Calendar,
        title: 'Field Crew Scheduling VA',
        desc: "Keep your dispatch board full, organized, and updated in real time every day.\n\n• Schedule and dispatch field technicians using ServiceNow, Salesforce FSM, or Praxedo\n• Manage work order creation, assignment, and status updates through the full job lifecycle\n• Coordinate equipment and vehicle availability to prevent scheduling conflicts\n• Send job confirmations and pre-visit details to customers and field crews\n• Update records after job completion and flag unresolved work orders for follow-up",
    },
    {
        icon: ClipboardList,
        title: 'Data Entry & Reporting VA',
        desc: "Capture operational data accurately and turn it into reports your team can act on.\n\n• Enter production data, meter readings, and field service records into ERP and CRM systems\n• Build and distribute standardized operational and performance reports each week or month\n• Audit existing data records for errors or gaps and perform bulk corrections\n• Manage spreadsheet models tracking energy output, consumption trends, or contract performance\n• Support management with ad hoc data pulls and formatted summaries for decision-making",
    },
    {
        icon: TrendingUp,
        title: 'Energy Broker Support VA',
        desc: "Handle the admin and pipeline work so brokers can stay focused on closing deals.\n\n• Prepare and send energy quotes, contract summaries, and LOAs to commercial clients\n• Track prospect pipeline stages in Enerex, UtilityClick, or Salesforce CRM\n• Follow up with leads, schedule renewal conversations, and manage contract expiration timelines\n• Reconcile supplier commission statements against expected payouts and flag shortfalls\n• Research energy pricing, market rates, and supplier availability to support broker proposals",
    },
    {
        icon: Search,
        title: 'CRM Data & Database VA',
        desc: "Keep your CRM clean, complete, and trusted by every team that relies on it.\n\n• Audit and deduplicate CRM records — contacts, accounts, and opportunities — on a regular basis\n• Enter new leads, update deal stages, and log all customer interactions in your CRM\n• Build and segment contact lists for outreach campaigns and account-based marketing\n• Maintain accuracy of contract data, renewal dates, and account-level notes across the platform\n• Generate CRM-based reports on pipeline health, win/loss rates, and customer activity",
    },
    {
        icon: FileText,
        title: 'Permit Tracking & Project Coordination VA',
        desc: "Keep every permit application moving and every project timeline on track.\n\n• Submit permit applications and track status across municipal, county, and state portals\n• Maintain a live permit tracker with submission dates, expected approvals, and escalation flags\n• Coordinate with utilities for interconnection approvals and net metering paperwork\n• Compile and organize inspection reports, approval letters, and project closeout documentation\n• Send permit status updates to project managers, installers, and customers on schedule",
    },
];

const sampleJobs = [
    {
        icon: Calculator,
        photo: 'https://pbalmjdytwiqxpftipwn.supabase.co/storage/v1/object/public/applicant-files/headshots/1773576691585-v13ixipnqm.png',
        title: 'Energy Billing & Invoicing VA',
        rate: '$4–7/hr',
        responsibilities: [
            'Generate and send invoices, statements, and billing summaries on schedule',
            'Process joint interest billing and reconcile payments in QuickBooks or NetSuite',
            'Follow up on overdue balances and log collection activity in CRM',
            'Prepare month-end revenue reports and flag discrepancies for review',
            'Support audits with organized billing records and transaction documentation',
        ],
        requirements: '1+ yr billing or accounts receivable experience · QuickBooks, NetSuite, or SAP · Excel/Google Sheets · Strong written English',
    },
    {
        icon: ClipboardList,
        photo: 'https://pbalmjdytwiqxpftipwn.supabase.co/storage/v1/object/public/applicant-files/headshots/1773576853450-k8t3obkownj.jpg',
        title: 'Energy Operations Data VA',
        rate: '$4–6/hr',
        responsibilities: [
            'Enter production figures, meter readings, and field reports into ERP systems',
            'Build weekly and monthly operational performance reports from raw data',
            'Audit records for gaps or errors and perform corrections in bulk',
            'Maintain tracking spreadsheets for energy output, contracts, and usage trends',
            'Pull ad hoc data summaries for management and operations teams on request',
        ],
        requirements: '1+ yr data entry or operations support · SAP, NetSuite, or Salesforce · Excel/Sheets · Attention to detail · Strong English',
    },
    {
        icon: TrendingUp,
        photo: 'https://pbalmjdytwiqxpftipwn.supabase.co/storage/v1/object/public/applicant-files/headshots/1773577090157-pp22tvjza6l.jpg',
        title: 'Energy Broker Support VA',
        rate: '$5–8/hr',
        responsibilities: [
            'Prepare and send energy quotes, contract summaries, and LOAs to commercial clients',
            'Track and update prospect pipeline stages in Enerex, UtilityClick, or Salesforce',
            'Follow up with leads and manage contract renewal timelines in CRM',
            'Reconcile commission statements against expected payouts and flag shortfalls',
            'Research pricing, supplier availability, and market rates to support broker proposals',
        ],
        requirements: '1+ yr energy broker or sales support experience · Enerex or UtilityClick preferred · Salesforce or Pipedrive · Strong English',
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
        desc: 'We staff energy companies around the clock — great for high-demand service periods.',
    },
    {
        icon: Timer,
        title: 'Flexible Hours',
        desc: 'Start with 20 hours a week and scale up as your operations grow.',
    },
];

const Energy: React.FC = () => {
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
                        callout="Oil & Gas Operators, Solar Companies & Energy Brokers"
                        headline={
                            <>
                                Hire a Virtual Assistant for Your Energy Company.{' '}
                                <span className="text-gold italic">Starting at $4/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Get a trained energy VA to handle billing, compliance, field scheduling, and more.{' '}
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
                                    Energy Roles We Fill For Your Company
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    From billing and compliance to field scheduling and broker support — trained assistants who know how energy companies work.
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                                {/* Carousel */}
                                <div className="relative min-w-0">
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
                                                <div key={idx} className="min-w-full">
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
                                <div className="mt-8 lg:mt-0">
                                    <img
                                        src="/images/va-1.png"
                                        alt="Energy virtual assistant"
                                        className="w-full rounded-[2rem] shadow-xl object-cover"
                                    />
                                </div>

                            </div>

                            <div className="mt-14 text-center">
                                <Button onClick={openSurvey} variant="primary">
                                    Find My Energy Virtual Assistant
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
                                    Energy Roles We've Successfully Placed
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    Real roles, real hires. Here's a look at what we've placed for energy companies like yours.
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
                                        WHY FSA FOR ENERGY
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built For Energy Companies
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Your engineers and operations staff should be focused on production, field work, and growth — not chasing invoices or filing compliance paperwork. But without someone to handle that work, it all lands on your team anyway.</p>
                                        <p>We place trained assistants who already know how energy companies work. They know the tools. They know the workflows. You tell us the role, and we find the right person. Fast.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">
                                        Book A Discovery Call
                                    </Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>

                                <div className="mt-8 lg:mt-0">
                                    <img
                                        src="/images/va-2.png"
                                        alt="Energy virtual assistant at work"
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
                                    Everything Your Company Needs, Under One Roof
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: Calculator,
                                        title: 'Billing, Invoicing & Revenue Admin',
                                        desc: 'Keep your revenue cycle moving without pulling ops staff into paperwork.',
                                        items: ['Invoice generation and customer billing', 'Joint interest billing for O&G operators', 'Payment reconciliation in QuickBooks or SAP', 'Collections follow-up and month-end summaries'],
                                    },
                                    {
                                        icon: Phone,
                                        title: 'Customer Support & Account Management',
                                        desc: 'Handle front-line customer communication across every channel.',
                                        items: ['Inbound inquiries by phone, email, and chat', 'Service connection and disconnection processing', 'Outage reporting and escalation to field ops', 'Proactive billing and service notifications'],
                                    },
                                    {
                                        icon: ShieldCheck,
                                        title: 'Compliance, Permits & Documentation',
                                        desc: 'Stay audit-ready and never miss a regulatory deadline.',
                                        items: ['Permit files, safety certs, and inspection records', 'Regulatory deadline tracking and reminders', 'Audit and filing documentation packages', 'Interconnection approvals and net metering paperwork'],
                                    },
                                    {
                                        icon: Calendar,
                                        title: 'Field Scheduling & Project Coordination',
                                        desc: 'Keep your field crews dispatched, coordinated, and on schedule.',
                                        items: ['Technician scheduling and work order dispatch', 'Equipment and vehicle availability coordination', 'Job confirmations and status updates', 'Permit tracking and project closeout documentation'],
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
                                    Why Energy Companies Choose Five Star Assistants
                                </h2>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-14">

                                <div className="flex flex-col gap-6">
                                    {[
                                        {
                                            icon: DollarSign,
                                            title: 'Your Engineers Should Be Engineering, Not Filing',
                                            desc: "60% of energy companies report labor shortages — yet skilled technical staff routinely spend hours every week on admin tasks. That's expensive. One VA at $4/hr frees your best people to do the work that actually moves your business forward.",
                                        },
                                        {
                                            icon: Award,
                                            title: 'They Know Your Tools Before Day One',
                                            desc: "Our assistants know QuickBooks, NetSuite, SAP, Salesforce, ServiceNow, Enerex, and UtilityClick. You don't have to teach them how energy back-office work flows. They already know.",
                                        },
                                        {
                                            icon: Target,
                                            title: 'No Compliance Deadline or Invoice Ever Gets Dropped',
                                            desc: "One missed permit filing or overdue invoice can trigger penalties, delays, or lost revenue. A dedicated VA tracks every deadline, follows up on every open item, and keeps your records audit-ready — so nothing slips through.",
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

                                <div className="mt-8 lg:mt-0">
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
                                    Why Energy Companies Can't Afford to Ignore This
                                </h2>
                                <p className="font-body text-lg text-gray-500 max-w-2xl mx-auto">
                                    The energy sector is growing fast. The companies that scale aren't hiring more engineers to do admin work — they're hiring VAs at $4/hr to handle it.
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mb-12">

                                <div className="flex flex-col justify-between gap-4 h-full">
                                    {[
                                        { value: '60%', label: 'Of energy companies worldwide reported labor shortages in 2025 — putting timelines, reliability, and cost control at risk (IEA, World Energy Employment 2025)' },
                                        { value: '5.2M', label: 'Qualified workers needed for solar and wind projects alone by 2030 — a 342% increase from 2021, including over 1.3M office-based roles (IEA / ClearSource BPO, 2025)' },
                                        { value: '$3.68T', label: 'Projected global energy market value by 2030, growing at 14.25% CAGR from $1.89T in 2024 — companies need the capacity to capture that growth (Virtue Market Research, 2025)' },
                                    ].map(({ value, label }) => (
                                        <div key={label} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-center gap-6">
                                            <p className="font-heading font-bold text-3xl text-gold flex-shrink-0 w-24 leading-tight">{value}</p>
                                            <p className="font-body text-sm text-gray-500 leading-relaxed">{label}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 h-full">
                                    <p className="font-heading text-xs font-bold text-gold tracking-widest uppercase mb-8">WHERE OPERATIONS TIME GOES EACH WEEK</p>
                                    <div className="space-y-6">
                                        {[
                                            { label: 'Billing & invoicing',         hrs: '6.0 hrs', pct: 100 },
                                            { label: 'Compliance & permits',         hrs: '5.5 hrs', pct: 92 },
                                            { label: 'Scheduling & dispatch',        hrs: '4.5 hrs', pct: 75 },
                                            { label: 'Data entry & reporting',       hrs: '3.0 hrs', pct: 50 },
                                            { label: 'With a Five Star VA',          hrs: '0 hrs',   pct: 0, highlight: true },
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
                                    <p className="font-body text-xs text-gray-400 mt-6">* Estimated weekly hours based on energy operations benchmarks</p>
                                </div>

                            </div>

                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                                <div className="w-16 h-16 rounded-2xl bg-navy/[0.06] flex items-center justify-center flex-shrink-0">
                                    <TrendingUp size={28} className="text-navy/70" />
                                </div>
                                <div>
                                    <p className="font-heading font-bold text-navy text-xl md:text-2xl mb-3 leading-snug">
                                        Outsourcing back-office work can save energy companies up to 70% compared to equivalent in-house hires
                                    </p>
                                    <p className="font-body text-gray-500 leading-relaxed">
                                        When your operations staff stops doing billing and compliance paperwork, they have time to manage field crews and drive production. A single VA at $4/hr can absorb an entire category of admin work — at a fraction of what a local hire would cost.
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
                                {['No setup fees', 'No lock-in contracts', 'Free placement', 'Energy-trained VAs'].map((item) => (
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
                source="Energy"
            />
        </div>
    );
};

export default Energy;
