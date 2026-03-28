import React, { useState, useRef } from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import SurveyModal from '../components/SurveyModal';
import ScrollReveal from '../components/ScrollReveal';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, ShieldCheck, Users,
    Phone, ClipboardList, Search, Calculator,
    FileText, Mail, Megaphone,
    ChevronLeft, ChevronRight, Check,
    FileX, BadgeDollarSign, RefreshCw, CreditCard, Globe2, Timer,
    Award, Target, TrendingUp, Calendar,
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
        icon: Phone,
        title: 'Legal Intake Specialist',
        desc: 'The first voice of your firm — qualifying leads, booking consultations, and making sure no prospective client falls through the cracks.\n\n• Respond to all inbound inquiries within 15 minutes via phone, email, and web form during business hours\n• Qualify prospective clients against your practice area and case-type criteria using a structured intake script\n• Schedule and confirm consultations via Calendly, Clio Grow, or MyCase and send pre-consultation intake forms\n• Enter all lead and client data into your case management system with accuracy and flag incomplete records\n• Execute follow-up sequences for prospects who have not yet retained the firm — calls, emails, and texts on a defined cadence',
    },
    {
        icon: ClipboardList,
        title: 'Virtual Paralegal Assistant',
        desc: 'Non-attorney case preparation support that keeps your matters moving without your direct involvement on every task.\n\n• Draft standard legal documents from attorney-provided templates: demand letters, pleadings, correspondence, settlement agreements, and retainer agreements\n• Organize and maintain digital case files; prepare case summaries, chronologies, and deposition digests for attorney review\n• Coordinate service of process, court filings, and communication with opposing counsel offices\n• Compile exhibit lists, organize witness contact information, and prepare hearing binders ahead of trial\n• Track critical deadlines — response windows, statute of limitations, discovery cutoffs — and report upcoming dates to the supervising attorney daily',
    },
    {
        icon: Search,
        title: 'Legal Research Assistant',
        desc: 'Turn hours of library work into organized research memos delivered to your specifications.\n\n• Conduct secondary legal research using assigned databases — Google Scholar, Fastcase, Westlaw, or LexisNexis — on case law, statutes, and regulatory precedent\n• Compile findings into formatted research memos tailored to the attorney\'s citation style and preferences\n• Track legislative and regulatory updates relevant to active matters and flag changes with summaries\n• Support brief drafting with source compilation, citation verification, and bluebook formatting\n• Particularly high-value for flat-fee and contingency practices where research time directly compresses margin',
    },
    {
        icon: Calculator,
        title: 'Legal Billing & AR Specialist',
        desc: 'Stop letting invoices go unsent and revenue sit uncollected — this role pays for itself within weeks.\n\n• Enter and reconcile attorney time entries in Clio, Bill4Time, TimeSolv, or LeanLaw; flag missing or incomplete time logs before billing cycles close\n• Generate, format, and send client invoices on the firm\'s billing schedule; track invoice statuses and aging reports\n• Conduct professional follow-up on outstanding balances via email and phone per firm protocol\n• Reconcile trust account transactions and flag discrepancies for IOLTA compliance review\n• Prepare monthly billing reports showing revenue collected, invoices outstanding, and collection rate by client and matter',
    },
    {
        icon: FileText,
        title: 'Document Drafting & Review Admin',
        desc: 'Handle the production volume of routine legal documents so attorneys can focus on strategy, not formatting.\n\n• Draft contracts, NDAs, demand letters, settlement agreements, standard motions, and client correspondence from attorney templates and detailed written instructions\n• Proofread all outgoing documents for formatting accuracy, citation consistency, and compliance with court rules\n• Organize and maintain the firm\'s template and document library — version-controlled and categorized by matter type\n• Handle redlining and revision tracking across contract review cycles for transactional practices\n• Route executed documents for e-signature via DocuSign, PandaDoc, or Clio\'s native signing tools',
    },
    {
        icon: Calendar,
        title: 'Case Management & Deadline Admin',
        desc: 'Own the firm\'s operational calendar so no court date, filing deadline, or client meeting is ever missed.\n\n• Maintain court deadlines, statute of limitations dates, hearing schedules, and client meeting cadence inside Clio, MyCase, or PracticePanther\n• Coordinate with courts, opposing counsel offices, and clients to confirm and reschedule appearances\n• Send automated deadline reminders to the attorney team 72 hours and 24 hours in advance of every critical date\n• Manage attorney calendars for client consultations, depositions, mediations, and internal case reviews\n• Generate weekly docket reports showing all upcoming deadlines, hearings, and tasks by matter',
    },
    {
        icon: Mail,
        title: 'Client Communication & CRM Manager',
        desc: 'Keep every active client informed and every prospective client engaged — without interrupting attorney work time.\n\n• Manage ongoing communication with active clients: case status updates, document requests, and routine inquiry responses\n• Reduce inbound "where\'s my case?" calls by maintaining a proactive outreach schedule at key case milestones\n• Maintain client records, contact logs, and communication history in the firm\'s CRM or case management system\n• Draft and send standardized updates — referral acknowledgements, billing reminders, closing letters — on behalf of the attorney\n• Monitor the firm\'s shared inbox and triage messages: handle, delegate, or escalate within defined turnaround standards',
    },
    {
        icon: Megaphone,
        title: 'Legal Marketing & Content VA',
        desc: 'Build consistent inbound lead flow for the firm without hiring a marketing agency.\n\n• Draft and publish SEO-optimized blog posts on legal topics relevant to the firm\'s practice areas — targeting prospective client search queries\n• Manage the firm\'s Google Business Profile: update hours, respond to reviews, and post practice updates regularly\n• Schedule and publish content across LinkedIn, Instagram, and Facebook — 3–5 posts/week consistent with the firm\'s brand and compliance standards\n• Support email newsletter campaigns for past clients, referral sources, and prospective clients\n• Coordinate with third-party SEO or PPC vendors and handle basic on-page SEO tasks: meta descriptions, internal linking, and page updates',
    },
];

const sampleJobs = [
    {
        icon: Phone,
        photo: 'https://pbalmjdytwiqxpftipwn.supabase.co/storage/v1/object/public/applicant-files/headshots/1773575952617-olt3z0ejh3.png',
        title: 'Legal Intake Specialist',
        rate: '$4–6/hr',
        responsibilities: [
            'Respond to all inbound inquiries within 15 minutes via phone, email, and web form',
            'Qualify prospects against firm practice area and case-type criteria using a structured script',
            'Schedule consultations via Clio Grow, MyCase, or Calendly and send intake forms',
            'Enter all lead data into the case management system and flag incomplete records',
            'Execute structured follow-up sequences for uncommitted prospects',
        ],
        requirements: '1+ yr legal intake or customer-facing support · Clio Grow or MyCase preferred · Professional phone manner · Strong written English',
    },
    {
        icon: ClipboardList,
        photo: 'https://pbalmjdytwiqxpftipwn.supabase.co/storage/v1/object/public/applicant-files/headshots/1773575244796-870b8t0vwte.png',
        title: 'Virtual Paralegal Assistant',
        rate: '$5–8/hr',
        responsibilities: [
            'Draft legal documents from attorney templates: demand letters, pleadings, and correspondence',
            'Organize digital case files and prepare deposition summaries and case chronologies',
            'Track all critical deadlines — response windows, discovery cutoffs, statute of limitations',
            'Compile exhibit lists and prepare hearing binders ahead of trial',
            'Coordinate service of process and communication with opposing counsel offices',
        ],
        requirements: '2+ yr paralegal or legal admin experience · Clio, MyCase, or Filevine · Document drafting proficiency · Knowledge of court filing procedures',
    },
    {
        icon: Calculator,
        photo: 'https://pbalmjdytwiqxpftipwn.supabase.co/storage/v1/object/public/applicant-files/headshots/1773575378188-tf9dt4uomyi.png',
        title: 'Legal Billing & AR Specialist',
        rate: '$4–6/hr',
        responsibilities: [
            'Enter and reconcile attorney time entries in Clio, Bill4Time, or TimeSolv before billing cycles close',
            'Generate and send client invoices on schedule; track statuses and aging reports',
            'Follow up professionally on outstanding balances via email and phone',
            'Reconcile trust account transactions and flag discrepancies for IOLTA compliance',
            'Prepare monthly billing reports: revenue collected, outstanding invoices, collection rate by matter',
        ],
        requirements: '1+ yr legal billing or AR · Clio, Bill4Time, or TimeSolv · Trust accounting fundamentals · Attention to detail with financial records',
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
        title: '24/7 Coverage Available',
        desc: 'We staff across time zones — including extended hours for high-volume intake periods.',
    },
    {
        icon: Timer,
        title: 'Flexible Hours',
        desc: 'Assistants are available from a minimum of 20 hours per week — scale as needed.',
    },
];

const Legal: React.FC = () => {
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
                        callout="Law Firms, Solo Attorneys & Legal Teams"
                        headline={
                            <>
                                Hire a Top 1% Legal Virtual Assistant.{' '}
                                <span className="text-gold italic">Starting at $4/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Pre-vetted Filipino VAs for intake, paralegal support, billing, research, and case management.{' '}
                                <span className="font-bold text-navy">
                                    Free placements. Matched in 7 days.
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
                                    Legal Roles We Fill For Your Firm
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    From intake and paralegal support to billing and marketing — trained assistants who understand legal workflows, case management platforms, and the operational demands of a law practice.
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
                                        alt="Legal virtual assistant"
                                        className="w-full rounded-[2rem] shadow-xl object-cover"
                                    />
                                </div>

                            </div>

                            <div className="mt-14 text-center">
                                <Button onClick={openSurvey} variant="primary">
                                    Find My Legal Virtual Assistant
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
                                    Legal Roles We've Successfully Placed
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    Real roles, real hires. Here's a sample of what we've placed for law firms and legal practices like yours.
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
                                    We've removed every friction point from hiring remote legal support so your attorneys can focus on billable work, not operational overhead.
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

                {/* Built Around Your Practice */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-white px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">

                                <div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                        WHY FSA FOR LEGAL
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built Around Your Practice
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Attorneys didn't go to law school to chase invoices, manage scheduling calendars, or answer intake calls all day. But without dedicated support, that's exactly where the hours go — leaving the high-value, high-revenue work permanently on the back burner.</p>
                                        <p>Five Star Assistants places pre-vetted Filipino legal VAs who know Clio, MyCase, legal billing platforms, and document management workflows. You get a trained professional contributing from day one — not a generalist learning what a demand letter is on your clock.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">
                                        Book A Discovery Call
                                    </Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>

                                <div className="hidden lg:block">
                                    <img
                                        src="/images/va-2.png"
                                        alt="Legal virtual assistant at work"
                                        className="w-full rounded-[2rem] shadow-xl object-cover"
                                    />
                                </div>

                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* All The Skills Your Firm Needs */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12 md:mb-16">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    WHAT WE COVER
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    All The Skills Your Firm Needs, Under One Roof
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: Phone,
                                        title: 'Client Intake & Lead Management',
                                        desc: 'Never let a qualified prospect go cold — respond fast, qualify well, and book more consultations.',
                                        items: ['Inbound inquiry response within 15 minutes', 'Lead qualification & consultation scheduling', 'CRM entry, follow-up sequences & pipeline management', 'Clio Grow, MyCase, or Calendly integration'],
                                    },
                                    {
                                        icon: ClipboardList,
                                        title: 'Case & Document Management',
                                        desc: 'Keep cases moving and deadlines met without attorney involvement on every task.',
                                        items: ['Document drafting from attorney templates', 'Deadline tracking & docket management', 'Case file organization & deposition summaries', 'E-signature routing via DocuSign or PandaDoc'],
                                    },
                                    {
                                        icon: Calculator,
                                        title: 'Billing, Invoicing & Financial Admin',
                                        desc: 'Close the billing gap and collect more of what your firm has already earned.',
                                        items: ['Time entry reconciliation & invoice generation', 'Accounts receivable follow-up & aging reports', 'Trust account reconciliation & IOLTA support', 'Clio, Bill4Time, TimeSolv, or LeanLaw management'],
                                    },
                                    {
                                        icon: Megaphone,
                                        title: 'Marketing & Business Development',
                                        desc: 'Build inbound lead flow and a professional online presence — consistently, without an agency.',
                                        items: ['SEO blog writing on practice-area topics', 'Google Business Profile management & review responses', 'Social media scheduling across LinkedIn, Instagram & Facebook', 'Email newsletter campaigns for referral sources & past clients'],
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
                                    Why Attorneys Trust Five Star Assistants
                                </h2>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-14">

                                <div className="flex flex-col gap-6">
                                    {[
                                        {
                                            icon: DollarSign,
                                            title: 'Stop Losing $100K+ a Year to Non-Billable Work',
                                            desc: "At $288/hr, an attorney spending 18 hours/week on admin is leaving over $100,000 on the table annually. A Five Star legal VA absorbs that entire burden starting at $4/hr — returning your most expensive resource to the work only you can do.",
                                        },
                                        {
                                            icon: Award,
                                            title: 'Legal-Trained Before They Ever Touch Your Files',
                                            desc: "Our VAs are experienced with Clio, MyCase, legal billing platforms, document drafting workflows, and intake best practices before their first day. You skip the learning curve and start seeing results immediately.",
                                        },
                                        {
                                            icon: Target,
                                            title: 'Never Miss a Deadline or a Prospective Client Again',
                                            desc: "Law firms lose 40–60% of prospective clients due to slow or no follow-up after first contact. A dedicated intake VA responds within 15 minutes, every time — and a case management VA ensures no court deadline, filing window, or statute of limitations ever slips.",
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

                {/* Billable Hour Stats */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-white px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12 md:mb-16">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    THE BILLABLE HOUR CRISIS IS REAL
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    How Much Revenue Your Firm Is Losing Every Week
                                </h2>
                                <p className="font-body text-lg text-gray-500 max-w-2xl mx-auto">
                                    Law firms that delegate non-billable work to trained virtual assistants don't just save money — they unlock revenue that was already being generated but never captured. The math is striking.
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mb-12">

                                <div className="flex flex-col justify-between gap-4 h-full">
                                    {[
                                        { value: '2.6 hrs', label: 'Average billable hours captured per 8-hour attorney workday — a 33% utilization rate (Clio 2024 Legal Trends Report)' },
                                        { value: '77%', label: 'Of small law firm owners say they spend too much time on administrative tasks that don\'t require an attorney (Embroker / ABA data)' },
                                        { value: '48%', label: 'Of total law firm time is spent on non-revenue-generating tasks — documentation, emails, scheduling, and data entry' },
                                    ].map(({ value, label }) => (
                                        <div key={label} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-center gap-6">
                                            <p className="font-heading font-bold text-3xl text-gold flex-shrink-0 w-24 leading-tight">{value}</p>
                                            <p className="font-body text-sm text-gray-500 leading-relaxed">{label}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 h-full">
                                    <p className="font-heading text-xs font-bold text-gold tracking-widest uppercase mb-8">HOURS LOST TO NON-BILLABLE WORK PER DAY</p>
                                    <div className="space-y-6">
                                        {[
                                            { label: 'Admin & scheduling',    hrs: '2.2 hrs', pct: 100 },
                                            { label: 'Email & client updates', hrs: '1.8 hrs', pct: 82 },
                                            { label: 'Billing & invoicing',   hrs: '1.2 hrs', pct: 55 },
                                            { label: 'Intake & lead follow-up', hrs: '0.8 hrs', pct: 36 },
                                            { label: 'With a Five Star VA',    hrs: '0 hrs',   pct: 0, highlight: true },
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
                                    <p className="font-body text-xs text-gray-400 mt-6">* Based on Clio Legal Trends data and ABA practice management research</p>
                                </div>

                            </div>

                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                                <div className="w-16 h-16 rounded-2xl bg-navy/[0.06] flex items-center justify-center flex-shrink-0">
                                    <TrendingUp size={28} className="text-navy/70" />
                                </div>
                                <div>
                                    <p className="font-heading font-bold text-navy text-xl md:text-2xl mb-3 leading-snug">
                                        Law firms that delegate admin tasks reclaim an average of 12 billable hours per attorney per week
                                    </p>
                                    <p className="font-body text-gray-500 leading-relaxed">
                                        At the average solo attorney billing rate, that's $1,700–$3,500 in recovered revenue per week — from a VA hire that costs less than $200. Most firms reach full ROI within the first 30 days. At $4/hr with no placement fee, there is no lower-risk hire in your practice.
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
                                Tell us the role you need and we'll introduce you to a qualified legal virtual assistant — in as little as 7 days. No recruiting headaches, no hiring risk, no long-term contracts.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mb-12">
                                {['No setup fees', 'No lock-in contracts', 'Free placement', 'Legal-trained VAs'].map((item) => (
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
                source="Legal"
            />
        </div>
    );
};

export default Legal;
