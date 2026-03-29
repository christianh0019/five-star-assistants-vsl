import React, { useState, useRef } from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import SurveyModal from '../components/SurveyModal';
import ScrollReveal from '../components/ScrollReveal';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, ShieldCheck, Users,
    FileText, Calculator, ClipboardList, BarChart2,
    Search, Phone, Mail, RefreshCw,
    ChevronLeft, ChevronRight, Check,
    FileX, BadgeDollarSign, CreditCard, Globe2, Timer,
    Award, Target, TrendingUp, Megaphone,
} from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';

const socialProofStats = [
    { icon: Clock,       value: '7 Days',  label: 'Average Time to First Candidate' },
    { icon: DollarSign,  value: '$4/hr',   label: 'Starting Rate' },
    { icon: ShieldCheck, value: '100%',    label: 'Free Placements' },
    { icon: Users,       value: 'Top 1%',  label: 'Of Applicants Placed' },
];

const roles = [
    {
        icon: ClipboardList,
        title: 'Financial Admin VA',
        desc: 'Handle the daily admin that keeps your practice running — so you can focus on clients.\n\n• Manage your calendar and schedule client review meetings\n• Triage your email inbox and draft responses to routine client inquiries\n• Update CRM records after every call, meeting, and interaction\n• Send meeting prep materials and follow-up summaries to clients\n• Handle appointment reminders, reschedules, and no-show follow-up',
    },
    {
        icon: Users,
        title: 'Client Onboarding VA',
        desc: 'Get new clients through your onboarding process fast and without errors.\n\n• Collect KYC/AML documents and follow up on anything missing\n• Set up new client accounts and enter all details into your CRM or platform\n• Send welcome emails, onboarding checklists, and DocuSign agreements\n• Track the status of every new client and flag anything that is stalled\n• Coordinate with custodians, compliance, and your ops team to complete account setup',
    },
    {
        icon: Calculator,
        title: 'Bookkeeping VA',
        desc: 'Keep your books clean and your reports ready — without doing it yourself.\n\n• Record daily transactions and categorize expenses in QuickBooks or Xero\n• Reconcile bank and credit card accounts every month\n• Process accounts payable and receivable and follow up on unpaid invoices\n• Generate monthly P&L, balance sheet, and cash flow reports for review\n• Prepare clean books ahead of CPA review or tax prep season',
    },
    {
        icon: FileText,
        title: 'Tax Prep Support VA',
        desc: 'Take the busywork out of tax season so your CPAs can focus on the actual work.\n\n• Request and collect missing tax documents from clients via email and phone\n• Organize and sort returns, prior-year files, and supporting documents\n• Enter client data into TaxDome, Canopy, or your tax workflow system\n• Send status updates to clients and answer routine questions about document status\n• Manage the document checklist for each client from intake through filing',
    },
    {
        icon: ShieldCheck,
        title: 'Compliance & Documentation VA',
        desc: 'Stay audit-ready and never miss a regulatory deadline.\n\n• Maintain KYC/AML records and track expiration dates for compliance docs\n• Monitor and log regulatory filing deadlines across all active clients\n• Build and update compliance checklists for RIA and broker-dealer requirements\n• File and organize disclosures, client agreements, and supervisory records\n• Flag any missing or expired documentation before it becomes a problem',
    },
    {
        icon: BarChart2,
        title: 'Client Reporting VA',
        desc: 'Give every client a clear, professional update on schedule — every time.\n\n• Pull portfolio and performance data from your reporting platform\n• Build client-facing reports and presentation decks for advisor review\n• Format and brand reports to match your firm standards\n• Distribute finalized reports to clients via email or client portal\n• Archive all reports and log delivery confirmation in the CRM',
    },
    {
        icon: Phone,
        title: 'Loan Processing VA',
        desc: 'Move mortgage applications from intake to submission without the bottleneck.\n\n• Collect borrower documents and follow up on missing items\n• Enter application data into your LOS and keep records current through the process\n• Prepare pre-underwriting submissions and flag any file deficiencies early\n• Coordinate with lenders, title companies, and attorneys on closing timelines\n• Send progress updates to borrowers so they always know where their loan stands',
    },
    {
        icon: Search,
        title: 'Financial Research VA',
        desc: 'Get the market intelligence you need without the hours of manual research.\n\n• Monitor interest rate changes, competitor products, and industry news daily\n• Summarize key market updates into short briefings for advisor review\n• Research specific companies, funds, or products on request\n• Track regulatory changes that could affect client portfolios or compliance\n• Compile prospect research and background information before client meetings',
    },
];

const sampleJobs = [
    {
        icon: ClipboardList,
        photo: 'https://pbalmjdytwiqxpftipwn.supabase.co/storage/v1/object/public/applicant-files/headshots/1773576174552-fwmn5ytevcp.png',
        title: 'Financial Admin Virtual Assistant',
        rate: '$4–7/hr',
        responsibilities: [
            'Manage advisor calendar, schedule client reviews, and send meeting reminders',
            'Triage email inbox and respond to routine client questions on the advisor\'s behalf',
            'Update Redtail, Wealthbox, or Salesforce CRM records after every client interaction',
            'Prepare meeting agendas, client prep packets, and post-meeting action item recaps',
            'Handle incoming client calls and route complex inquiries to the right team member',
        ],
        requirements: '1+ yr financial services admin or executive assistant experience · Redtail, Wealthbox, or Salesforce · DocuSign · Strong written English',
    },
    {
        icon: Calculator,
        photo: 'https://pbalmjdytwiqxpftipwn.supabase.co/storage/v1/object/public/applicant-files/headshots/1773979102116-xofszo85x6.jpg',
        title: 'Bookkeeping Virtual Assistant',
        rate: '$5–8/hr',
        responsibilities: [
            'Record daily transactions and categorize expenses in QuickBooks Online or Xero',
            'Reconcile bank and credit card accounts monthly and flag discrepancies',
            'Process accounts payable and receivable and follow up on overdue invoices',
            'Generate monthly P&L, balance sheet, and cash flow reports for accountant review',
            'Organize and upload client financial documents ahead of tax or audit prep',
        ],
        requirements: '2+ yrs bookkeeping experience · QuickBooks Online or Xero certified preferred · Accounts reconciliation · Attention to detail',
    },
    {
        icon: ShieldCheck,
        photo: 'https://pbalmjdytwiqxpftipwn.supabase.co/storage/v1/object/public/applicant-files/headshots/1773948958183-xlysc58ukf9.jpg',
        title: 'Client Onboarding & Compliance VA',
        rate: '$5–8/hr',
        responsibilities: [
            'Collect and organize KYC/AML documents for new client accounts',
            'Set up client profiles in the CRM and firm portal and send onboarding packets',
            'Track completion status for each new client and follow up on outstanding items',
            'Monitor compliance deadlines and flag missing or expiring documentation',
            'Coordinate with custodians and compliance team to finalize account activation',
        ],
        requirements: '1+ yr RIA, broker-dealer, or financial services ops experience · KYC/AML document processing · CRM proficiency · High accuracy and discretion',
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
        desc: 'We staff practices around the clock — great for high-volume tax season periods.',
    },
    {
        icon: Timer,
        title: 'Flexible Hours',
        desc: 'Start with 20 hours a week and scale up as your client base grows.',
    },
];

const FinancialServices: React.FC = () => {
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
            <SEO
                title="Financial Services Virtual Assistants | Admin & Client Support | Five Star Assistants"
                description="Hire virtual assistants for financial advisors and firms. Client onboarding, scheduling, compliance support, CRM management & more. Starting at $4/hr."
                keywords="financial services virtual assistant, financial advisor VA, wealth management VA, financial admin assistant, client onboarding VA, compliance support VA"
                canonical="https://www.fivestarassistants.com/industries/financial-services"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* Hero */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Financial Advisors, CPAs & Bookkeeping Firms"
                        headline={
                            <>
                                Virtual Assistants for Financial Advisors.{' '}
                                <span className="text-gold italic">Starting at $4/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Stop doing $15/hr admin work yourself. Get a trained financial VA who handles your scheduling, CRM, reports, and client follow-ups.{' '}
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
                                    Financial Services Roles We Fill For Your Firm
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    From admin to bookkeeping to compliance support — trained assistants who know how financial services firms operate.
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
                                        alt="Financial services virtual assistant"
                                        className="w-full rounded-[2rem] shadow-xl object-cover"
                                    />
                                </div>

                            </div>

                            <div className="mt-14 text-center">
                                <Button onClick={openSurvey} variant="primary">
                                    Find My Financial Services Virtual Assistant
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
                                    Financial Roles We've Successfully Placed
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    Real roles, real hires. Here's a look at what we've placed for financial advisors, CPAs, and bookkeepers like you.
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
                                        WHY FSA FOR FINANCIAL SERVICES
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built For Financial Advisors, CPAs &amp; Bookkeepers
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Your best people should be meeting with clients and making decisions — not updating CRM records, chasing tax documents, or sending meeting reminders. But when admin piles up, that's exactly where their time goes.</p>
                                        <p>We place trained assistants who already know how financial services firms work. They know the tools, the workflows, and the standards. You tell us what you need, and we find the right person. Fast.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">
                                        Book A Discovery Call
                                    </Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>

                                <div className="mt-8 lg:mt-0">
                                    <img
                                        src="/images/va-2.png"
                                        alt="Financial services virtual assistant at work"
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
                                    Everything Your Firm Needs, Under One Roof
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: ClipboardList,
                                        title: 'Client Admin & Scheduling',
                                        desc: 'Keep your calendar full and your clients well-served without doing it yourself.',
                                        items: ['Calendar management & client meeting scheduling', 'Email triage and routine client responses', 'CRM data entry and contact record updates', 'Meeting prep packets & post-meeting follow-up'],
                                    },
                                    {
                                        icon: Calculator,
                                        title: 'Bookkeeping & Financial Reporting',
                                        desc: 'Clean books, reconciled accounts, and reports ready for review — every month.',
                                        items: ['Transaction recording & expense categorization', 'Bank and credit card reconciliation', 'Accounts payable & receivable processing', 'Monthly P&L, balance sheet & cash flow reports'],
                                    },
                                    {
                                        icon: ShieldCheck,
                                        title: 'Client Onboarding & Compliance',
                                        desc: 'Get new clients set up correctly and stay audit-ready at all times.',
                                        items: ['KYC/AML document collection & verification', 'New account setup & CRM profile creation', 'Compliance deadline tracking & audit prep', 'DocuSign agreement management & filing'],
                                    },
                                    {
                                        icon: Megaphone,
                                        title: 'Tax Support & Document Management',
                                        desc: 'Reduce the chaos of tax season and keep client files organized year-round.',
                                        items: ['Tax document requests & client follow-up', 'TaxDome or Canopy workflow management', 'Return organization & document filing', 'Client status updates during busy season'],
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
                                    Why Financial Firms Choose Five Star Assistants
                                </h2>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-14">

                                <div className="flex flex-col gap-6">
                                    {[
                                        {
                                            icon: DollarSign,
                                            title: 'Your Advisors Should Be With Clients, Not Doing Admin',
                                            desc: "The average financial advisor spends less than 20% of their time actually with clients. 41% spend 2+ hours every day on repetitive scheduling and data entry. A VA takes that entire workload off your team — starting at $4/hr.",
                                        },
                                        {
                                            icon: Award,
                                            title: 'They Know Your Software Before Day One',
                                            desc: "Our assistants are trained on Redtail, Wealthbox, QuickBooks Online, Xero, TaxDome, Canopy, and DocuSign. You don't have to teach them how financial services works. They already know.",
                                        },
                                        {
                                            icon: Target,
                                            title: 'Every Client Followed Up. Every Deadline Met.',
                                            desc: "A missed review meeting or a late compliance filing can cost you a client — or worse. A dedicated VA keeps your calendar full, your CRM clean, and your compliance checklist current. Nothing slips through.",
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
                                    How Much Time Financial Firms Lose to Admin
                                </h2>
                                <p className="font-body text-lg text-gray-500 max-w-2xl mx-auto">
                                    The firms growing fastest aren't the ones working harder. They're the ones who stopped doing work that a VA can handle for $4/hr.
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mb-12">

                                <div className="flex flex-col justify-between gap-4 h-full">
                                    {[
                                        { value: '&lt;20%', label: "Financial advisors spend less than 20% of their time with clients. 41% spend 2+ hours every day on repetitive scheduling and data entry alone. (PreciseFP / Kitces Research 2024)" },
                                        { value: '300K', label: 'Accountants and auditors have left the profession in 3 years — a 17% drop. 75% of finance employers now say they can\'t find the talent they need. (ManpowerGroup / BLS Q4 2024)' },
                                        { value: '$180K', label: 'Lost in billable capacity every year by the average CPA firm — just from manual document processing at a $150/hr billing rate. (PreciseFP 2024)' },
                                    ].map(({ value, label }) => (
                                        <div key={label} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-center gap-6">
                                            <p className="font-heading font-bold text-3xl text-gold flex-shrink-0 w-24 leading-tight" dangerouslySetInnerHTML={{ __html: value }} />
                                            <p className="font-body text-sm text-gray-500 leading-relaxed">{label}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 h-full">
                                    <p className="font-heading text-xs font-bold text-gold tracking-widest uppercase mb-8">WHERE ADVISOR TIME GOES EACH DAY</p>
                                    <div className="space-y-6">
                                        {[
                                            { label: 'CRM updates & admin',       hrs: '2.5 hrs', pct: 100 },
                                            { label: 'Meeting prep & reporting',  hrs: '2.0 hrs', pct: 80 },
                                            { label: 'Client follow-up & email',  hrs: '1.5 hrs', pct: 60 },
                                            { label: 'Compliance & paperwork',    hrs: '1.0 hr',  pct: 40 },
                                            { label: 'With a Five Star VA',        hrs: '0 hrs',   pct: 0, highlight: true },
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
                                    <p className="font-body text-xs text-gray-400 mt-6">* Based on PreciseFP and Kitces Research advisor time-use data</p>
                                </div>

                            </div>

                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                                <div className="w-16 h-16 rounded-2xl bg-navy/[0.06] flex items-center justify-center flex-shrink-0">
                                    <TrendingUp size={28} className="text-navy/70" />
                                </div>
                                <div>
                                    <p className="font-heading font-bold text-navy text-xl md:text-2xl mb-3 leading-snug">
                                        Firms that delegate admin to a VA report 30–40% more capacity for client-facing work
                                    </p>
                                    <p className="font-body text-gray-500 leading-relaxed">
                                        When advisors stop doing CRM entry and meeting prep, they see more clients. When CPAs stop chasing tax documents, they bill more hours. A single VA at $4/hr can add more capacity to your practice than hiring another full-time employee — at a fraction of the cost.
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
                                Your Firm Deserves A{' '}
                                <span className="text-gold italic">Five Star Team</span>
                            </h2>

                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us what you need and we'll find you the right VA — in 7 days or less. No recruiting, no risk, no long-term contracts.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mb-12">
                                {['No setup fees', 'No lock-in contracts', 'Free placement', 'Finance-trained VAs'].map((item) => (
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
                source="FinancialServices"
            />
        </div>
    );
};

export default FinancialServices;
