import React, { useState, useRef } from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import SurveyModal from '../components/SurveyModal';
import ScrollReveal from '../components/ScrollReveal';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, ShieldCheck, Users,
    HeadphonesIcon, ClipboardList, FileText, Search,
    ChevronLeft, ChevronRight, Check,
    FileX, BadgeDollarSign, RefreshCw, CreditCard, Globe2, Timer,
    Activity, Calculator, Award, Target, TrendingUp,
} from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';

const socialProofStats = [
    { icon: Clock,       value: '7 Days',  label: 'Average Time to First Candidate' },
    { icon: DollarSign,  value: '$4/hr',   label: 'Starting Rate' },
    { icon: ShieldCheck, value: '100%',    label: 'HIPAA-Compliant VAs' },
    { icon: Users,       value: 'Top 1%',  label: 'Of Applicants Placed' },
];

const roles = [
    {
        icon: HeadphonesIcon,
        title: 'Virtual Medical Receptionist',
        desc: 'Keep your phones answered and your schedule full — without adding a single in-house hire.\n\n• Answer inbound patient calls and handle scheduling across all appointment types\n• Send appointment reminders via phone, text, and email to reduce no-shows\n• Manage cancellations, rescheduling, and waitlist coordination\n• Handle new patient intake forms and digital registration\n• Route urgent calls to clinical staff and triage messages appropriately\n• Support telehealth session setup and patient onboarding',
    },
    {
        icon: FileText,
        title: 'Medical Billing Virtual Assistant',
        desc: 'Recover revenue that\'s sitting in your denial queue and keep your claims cycle clean.\n\n• Submit and follow up on insurance claims across all major payers\n• Post payments, manage EOBs, and reconcile remittances\n• Identify, appeal, and track denied or underpaid claims\n• Verify CPT and ICD-10 codes for accuracy before submission\n• Generate aging reports and monitor days in A/R\n• Coordinate patient invoicing and co-pay collections',
    },
    {
        icon: ClipboardList,
        title: 'Prior Authorization Specialist',
        desc: 'Stop letting prior auth bottlenecks delay care and drain your staff\'s time.\n\n• Initiate and track prior authorization requests with insurance carriers\n• Submit clinical documentation and letters of medical necessity\n• Follow up on pending authorizations and escalate stalled requests\n• Monitor expiration dates and manage renewal timelines proactively\n• Escalate denials to your clinical team with supporting documentation\n• Maintain detailed authorization logs inside your EHR',
    },
    {
        icon: ShieldCheck,
        title: 'Insurance Verification VA',
        desc: 'Confirm coverage before every appointment and eliminate billing surprises at the back end.\n\n• Verify patient insurance eligibility before scheduled appointments\n• Confirm coverage for specific procedures, services, and providers\n• Identify patient copays, deductibles, and out-of-pocket responsibilities\n• Communicate coverage details to patients and front desk staff\n• Flag expired, inactive, or incorrect coverage in advance\n• Update EHR systems with verified insurance information',
    },
    {
        icon: Activity,
        title: 'Virtual Medical Scribe',
        desc: 'Give physicians their time back — no more staying late to finish notes.\n\n• Join patient encounters via secure audio or video feed in real time\n• Document SOAP notes, clinical findings, and assessment/plan directly into the EHR\n• Update medical histories, HPI, chief complaints, and physical exam findings\n• Transcribe physician dictation and manage lab result entries\n• Handle referral documentation and specialist communications\n• Compatible with Epic, Cerner, eClinicalWorks, Athena, and more',
    },
    {
        icon: Users,
        title: 'Patient Care Coordinator VA',
        desc: 'Improve patient outcomes and retention without adding to your clinical team\'s workload.\n\n• Coordinate care transitions, follow-up appointments, and specialist referrals\n• Call patients after visits to confirm adherence and satisfaction\n• Handle prescription refill requests and pharmacy coordination\n• Manage chronic care outreach and preventive care scheduling\n• Track referral status and ensure closed-loop communication\n• Support patient onboarding and telehealth workflows',
    },
    {
        icon: Search,
        title: 'Medical Records & Admin VA',
        desc: 'Keep your records organized, your fax inbox clear, and your compliance airtight.\n\n• Organize and index patient records in compliance with HIPAA standards\n• Process records release requests from patients and third parties\n• Scan, upload, and file paper documents into the EHR\n• Manage high-volume fax inboxes and route documents to the right provider\n• Respond to records requests within required timeframes\n• Support documentation retention policies and audit-readiness',
    },
    {
        icon: Calculator,
        title: 'Revenue Cycle Management VA',
        desc: 'Manage the full claims lifecycle and stop revenue from leaking out of your practice.\n\n• Oversee end-to-end claims management from submission to payment posting\n• Run denial management workflows and resubmit rejected claims\n• Submit secondary claims and coordinate between payers\n• Generate weekly and monthly RCM performance reports\n• Monitor KPIs including clean claim rate, days in A/R, and denial rate\n• Escalate complex payer issues to your billing team with full documentation',
    },
];

const sampleJobs = [
    {
        icon: HeadphonesIcon,
        photo: 'https://pbalmjdytwiqxpftipwn.supabase.co/storage/v1/object/public/applicant-files/headshots/1773965282218-2sd1135bm5f.jpeg',
        title: 'Virtual Medical Receptionist',
        rate: '$4–6/hr',
        responsibilities: [
            'Answer inbound calls and manage scheduling across all appointment types',
            'Send reminders via phone, text, and email to reduce no-shows',
            'Handle new patient intake, registration, and eligibility pre-checks',
            'Route urgent calls to clinical staff and triage messages',
            'Support telehealth onboarding and session setup',
        ],
        requirements: '1+ yr medical front desk or healthcare admin · Epic, Athena, or eClinicalWorks · Strong English communication',
    },
    {
        icon: FileText,
        photo: 'https://pbalmjdytwiqxpftipwn.supabase.co/storage/v1/object/public/applicant-files/headshots/1773950891999-lr76r6v1ha.png',
        title: 'Medical Billing VA',
        rate: '$5–7/hr',
        responsibilities: [
            'Submit claims and follow up on unpaid or denied charges',
            'Post payments, manage EOBs, and reconcile remittances',
            'Verify CPT and ICD-10 codes for accuracy before submission',
            'Run aging reports and track days in A/R',
            'Handle patient invoicing and co-pay collection follow-ups',
        ],
        requirements: '1+ yr medical billing · Kareo, AdvancedMD, or DrChrono · Knowledge of CPT/ICD-10 coding',
    },
    {
        icon: ClipboardList,
        photo: 'https://pbalmjdytwiqxpftipwn.supabase.co/storage/v1/object/public/applicant-files/headshots/1773954039691-n5ej5rvfsss.jpg',
        title: 'Prior Authorization Specialist',
        rate: '$5–8/hr',
        responsibilities: [
            'Initiate and track prior auth requests across all major insurance carriers',
            'Submit letters of medical necessity and supporting clinical documentation',
            'Follow up on pending authorizations and manage renewal timelines',
            'Monitor and flag expiring authorizations before care is impacted',
            'Maintain detailed auth logs in your EHR or practice management system',
        ],
        requirements: '1+ yr prior authorization · Availity, Change Healthcare, or NaviNet · Medical terminology fluency',
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
        desc: 'We can staff practices around the clock — including evenings and weekends.',
    },
    {
        icon: Timer,
        title: 'Flexible Hours',
        desc: 'Assistants are available from a minimum of 20 hours per week — scale as needed.',
    },
];

const Healthcare: React.FC = () => {
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
                title="Healthcare Virtual Assistants | HIPAA-Compliant, Starting at $4/hr | Five Star Assistants"
                description="Hire HIPAA-trained virtual assistants for medical billing, prior auth, scribing & scheduling. Top 1% of applicants. Free placement. Matched in 7 days."
                keywords="healthcare virtual assistant, medical virtual assistant, HIPAA compliant VA, medical billing VA, prior authorization specialist, virtual medical receptionist, remote healthcare admin"
                canonical="https://www.fivestarassistants.com/industries/healthcare"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* Hero */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Healthcare Practices & Clinics"
                        headline={
                            <>
                                Hire a Top 1% Medical Virtual Assistant.{' '}
                                <span className="text-gold italic">HIPAA-Compliant, Starting at $4/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Elite, HIPAA-trained Filipino VAs for billing, prior auth, scribing, and scheduling.{' '}
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

                            {/* Section header */}
                            <div className="text-center mb-12 md:mb-16">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    ROLES WE PLACE
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    Healthcare Roles We Fill For Your Practice
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    From medical billing to virtual scribing — trained assistants who understand healthcare workflows, insurance systems, and HIPAA compliance.
                                </p>
                            </div>

                            {/* 2-col: carousel left, image right */}
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
                                        alt="Medical virtual assistant"
                                        className="w-full rounded-[2rem] shadow-xl object-cover"
                                    />
                                </div>

                            </div>

                            {/* CTA under carousel */}
                            <div className="mt-14 text-center">
                                <Button onClick={openSurvey} variant="primary">
                                    Find My Medical Virtual Assistant
                                </Button>
                                <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
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
                                    RECENTLY PLACED
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    Healthcare Roles We've Successfully Placed
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    Real roles, real hires. Here's a sample of what we've placed for healthcare practices like yours.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
                                {sampleJobs.slice(0, 3).map((job, idx) => (
                                    <div key={idx} className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden">

                                        {/* Card header */}
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
                                    We've removed every friction point from hiring remote healthcare support so you can focus on your patients, not your payroll.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
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

                                {/* Left: narrative */}
                                <div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                        WHY FSA FOR HEALTHCARE
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built Around Your Practice
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>At Five Star Assistants, we understand that healthcare practices run on tight margins, complex workflows, and an endless stream of administrative demands. Every hour your staff spends on hold with insurance or chasing prior authorizations is an hour not spent on patients.</p>
                                        <p>We specialize in placing HIPAA-trained Filipino VAs who understand medical terminology, insurance systems, and EHR platforms — so you get real support from day one, not a learning curve that takes months to flatten.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">
                                        Book A Discovery Call
                                    </Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>

                                {/* Right: industry image */}
                                <div className="mt-8 lg:mt-0">
                                    <img
                                        src="/images/va-2.png"
                                        alt="Healthcare virtual assistant"
                                        className="w-full rounded-[2rem] shadow-xl object-cover"
                                    />
                                </div>

                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* All The Skills Your Practice Needs */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12 md:mb-16">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    WHAT WE COVER
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    All The Skills Your Practice Needs, Under One Roof
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: HeadphonesIcon,
                                        title: 'Front Desk & Patient Access',
                                        desc: 'Keep your phones covered and your schedule full without overloading your in-house team.',
                                        items: ['Inbound call handling & appointment scheduling', 'Insurance eligibility verification', 'New patient intake & registration', 'Appointment reminders & no-show follow-up'],
                                    },
                                    {
                                        icon: FileText,
                                        title: 'Medical Billing & Revenue Cycle',
                                        desc: 'Recover denied revenue, reduce days in A/R, and keep your cash flow moving.',
                                        items: ['Claims submission & denial management', 'Prior authorization tracking & appeals', 'Payment posting & reconciliation', 'Accounts receivable & aging reports'],
                                    },
                                    {
                                        icon: Activity,
                                        title: 'Clinical & Care Coordination Support',
                                        desc: 'Reduce physician documentation burden and improve continuity of care.',
                                        items: ['Real-time virtual medical scribing', 'Patient care coordination & follow-up', 'Referral tracking & specialist scheduling', 'Chronic care outreach & telehealth support'],
                                    },
                                    {
                                        icon: ClipboardList,
                                        title: 'Administrative & Compliance',
                                        desc: 'Maintain airtight records, meet compliance requirements, and reduce operational overhead.',
                                        items: ['HIPAA-compliant records management', 'Fax inbox management & document routing', 'Staff scheduling & calendar coordination', 'Reporting, data entry & EHR maintenance'],
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
                                    Why Healthcare Practices Trust Five Star Assistants
                                </h2>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-14">

                                {/* Cards */}
                                <div className="flex flex-col gap-6">
                                    {[
                                        {
                                            icon: DollarSign,
                                            title: 'Cut Admin Costs Without Cutting Quality',
                                            desc: "Replacing a full-time in-house admin role with a Five Star VA can save your practice $35,000–$50,000 per year. You get HIPAA-trained, experienced healthcare support — starting at just $4/hr.",
                                        },
                                        {
                                            icon: Award,
                                            title: 'Specialists Who Know Healthcare',
                                            desc: "Our VAs aren't generalists. They're trained on EHR platforms, insurance workflows, and medical terminology before they ever touch your practice — so onboarding is fast and results come early.",
                                        },
                                        {
                                            icon: Target,
                                            title: 'Give Your Physicians Their Time Back',
                                            desc: "Physicians spend nearly two hours on admin for every hour with a patient. Our VAs absorb that burden so your clinical team can see more patients, reduce burnout, and focus on the work that matters.",
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

                                {/* Image */}
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

                {/* Admin Burden Stats */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-white px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12 md:mb-16">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    THE ADMINISTRATIVE BURDEN IS REAL
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    The Numbers Behind Healthcare Admin Overload
                                </h2>
                                <p className="font-body text-lg text-gray-500 max-w-2xl mx-auto">
                                    Healthcare practices that outsource administrative work to trained virtual assistants reduce burnout, improve revenue cycle performance, and scale without the overhead of in-house hiring.
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mb-12">

                                {/* Stat cards */}
                                <div className="flex flex-col justify-between gap-4 h-full">
                                    {[
                                        { value: '$68K', label: 'Annual cost per physician for health plan interactions, including prior authorizations (AMA)' },
                                        { value: '49%', label: 'Of US physicians report burnout — largely driven by documentation and administrative overload' },
                                        { value: '$150B', label: 'Lost annually by US healthcare providers due to patient no-shows and missed appointments' },
                                    ].map(({ value, label }) => (
                                        <div key={label} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-center gap-6">
                                            <p className="font-heading font-bold text-3xl text-gold flex-shrink-0 w-24">{value}</p>
                                            <p className="font-body text-sm text-gray-500 leading-relaxed">{label}</p>
                                        </div>
                                    ))}
                                </div>

                                {/* Horizontal bar chart — where physician time goes */}
                                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 h-full">
                                    <p className="font-heading text-xs font-bold text-gold tracking-widest uppercase mb-8">WHERE PHYSICIAN TIME GOES</p>
                                    <div className="space-y-6">
                                        {[
                                            { label: 'EHR documentation', pct: 76, note: '6.0 hrs/day' },
                                            { label: 'Prior auth & insurance', pct: 39, note: '3.1 hrs/day' },
                                            { label: 'Scheduling & coordination', pct: 30, note: '2.4 hrs/day' },
                                            { label: 'Billing follow-up', pct: 23, note: '1.8 hrs/day' },
                                            { label: 'With an FSA VA', pct: 0, note: '0 hrs', highlight: true },
                                        ].map(({ label, pct, note, highlight }) => (
                                            <div key={label} className="flex items-center gap-4">
                                                <span className={`font-heading font-bold text-xs w-36 flex-shrink-0 leading-tight ${highlight ? 'text-gold' : 'text-gray-500'}`}>{label}</span>
                                                <div className="flex-1 h-7 bg-gray-200 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full rounded-full ${highlight ? 'bg-gold/30' : 'bg-gold'}`}
                                                        style={{ width: `${pct}%` }}
                                                    />
                                                </div>
                                                <span className={`font-heading font-bold text-xs w-16 text-right flex-shrink-0 ${highlight ? 'text-gold' : 'text-navy'}`}>{note}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="font-body text-xs text-gray-400 mt-6">* Based on AMA and physician time-use research</p>
                                </div>

                            </div>

                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                                <div className="w-16 h-16 rounded-2xl bg-navy/[0.06] flex items-center justify-center flex-shrink-0">
                                    <TrendingUp size={28} className="text-navy/70" />
                                </div>
                                <div>
                                    <p className="font-heading font-bold text-navy text-xl md:text-2xl mb-3 leading-snug">
                                        The medical virtual assistant market is growing fast — and practices that adopt early win
                                    </p>
                                    <p className="font-body text-gray-500 leading-relaxed">
                                        The global healthcare outsourcing market is projected to grow from $390B to over $650B by 2028 — driven by practices that are eliminating unnecessary in-house overhead and replacing it with specialized remote support. The practices staffing smarter today will operate at a decisive cost and capacity advantage within the next three years.
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
                                Your Practice Deserves A{' '}
                                <span className="text-gold italic">Five Star Team</span>
                            </h2>

                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us the role you need and we'll introduce you to a qualified medical virtual assistant — in as little as 7 days. No recruiting headaches, no hiring risk, no long-term contracts.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mb-12">
                                {['No setup fees', 'No lock-in contracts', 'HIPAA-compliant VAs', 'Free placement'].map((item) => (
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
                source="Healthcare"
            />
        </div>
    );
};

export default Healthcare;
