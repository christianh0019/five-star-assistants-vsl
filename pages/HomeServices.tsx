import React, { useState, useRef } from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import SurveyModal from '../components/SurveyModal';
import ScrollReveal from '../components/ScrollReveal';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, ShieldCheck, Users,
    Phone, Calendar, FileText, CreditCard,
    ClipboardList, Star, Megaphone, Package,
    ChevronLeft, ChevronRight, Check,
    FileX, BadgeDollarSign, RefreshCw, Globe2, Timer,
    Award, Target, TrendingUp,
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
        icon: Calendar,
        title: 'Dispatch & Scheduling VA',
        desc: "Book every job, fill your tech's calendar, and keep customers in the loop — all day.\n\n• Answer scheduling requests by phone, text, web form, and app\n• Book service calls and match them to the right tech based on location and skill\n• Send appointment confirmation texts and reminder calls to customers\n• Manage same-day changes, cancellations, and urgent reschedules on the fly\n• Update job statuses and technician notes in ServiceTitan, Jobber, or Housecall Pro throughout the day",
    },
    {
        icon: Phone,
        title: 'Inbound Call & Lead Intake VA',
        desc: 'Answer every call. Book every job. Never send a customer to voicemail again.\n\n• Handle all inbound calls during business hours — and after-hours overflow\n• Qualify leads, collect job details, and book the appointment on the first call\n• Respond to Google LSA, Angi, and web form leads within minutes\n• Log every lead with full notes in your CRM before routing to the right person\n• Escalate emergencies and complex calls to the owner or senior tech immediately',
    },
    {
        icon: FileText,
        title: 'Estimate Follow-Up VA',
        desc: 'Never lose a job to silence. Every open quote gets a follow-up within 48 hours.\n\n• Call, text, and email every customer who has an open estimate\n• Address objections, answer questions, and help move the customer to a decision\n• Log all follow-up activity in your CRM and update quote status after each contact\n• Flag quotes that need a price review or have gone cold for more than a week\n• Send seasonal promotions to unconverted leads to bring them back in',
    },
    {
        icon: CreditCard,
        title: 'Invoicing & Collections VA',
        desc: 'Get invoices out the same day a job is done — and chase every unpaid balance.\n\n• Generate invoices from technician job notes as soon as a job is marked complete\n• Send invoices by email and text and follow up on any that go unpaid\n• Make outbound collection calls on past-due balances and log every contact\n• Reconcile payments in QuickBooks and flag discrepancies for owner review\n• Send weekly aging reports so you always know what is owed and who owes it',
    },
    {
        icon: ClipboardList,
        title: 'CRM Data Entry & Admin VA',
        desc: 'Keep your system clean so your reports, dispatching, and follow-ups actually work.\n\n• Log call notes, job details, and customer history after every interaction\n• Update customer contact records, service addresses, and equipment information\n• Tag leads by status and create follow-up tasks for open opportunities\n• Pull weekly job, revenue, and technician productivity reports for owner review\n• Works in ServiceTitan, Jobber, Housecall Pro, Workiz, FieldEdge, and more',
    },
    {
        icon: Star,
        title: 'Review & Reputation VA',
        desc: 'Get more five-star reviews and respond to every one — good or bad.\n\n• Send review request texts and emails to every customer after a completed job\n• Monitor Google, Yelp, and Facebook for new reviews every day\n• Draft professional responses to all reviews and flag negative ones for owner review\n• Track your average star rating and total review count week over week\n• Manage your Google Business Profile — update hours, photos, and service info',
    },
    {
        icon: Megaphone,
        title: 'Lead Nurture & CSR VA',
        desc: 'Stay in front of your past customers so they call you — not your competitor — next time.\n\n• Send seasonal tune-up and maintenance reminders to your customer list\n• Reach out to customers who are due for a service agreement renewal\n• Follow up on maintenance plan leads and send plan details to interested customers\n• Handle inbound service agreement and warranty questions by phone and email\n• Send post-job check-in messages to confirm customer satisfaction',
    },
    {
        icon: Package,
        title: 'Warranty, Parts & Vendor VA',
        desc: "Handle the back-and-forth with suppliers and manufacturers so your techs don't have to.\n\n• Process warranty claims and follow up with manufacturers until resolved\n• Coordinate parts orders and track delivery status for upcoming jobs\n• Communicate with subcontractors on scheduling, scopes, and payment status\n• Handle supplier invoices and reconcile purchase orders in your accounting system\n• Follow up on open warranty jobs and log all claim updates for the tech and owner",
    },
];

const sampleJobs = [
    {
        icon: Calendar,
        photo: 'https://pbalmjdytwiqxpftipwn.supabase.co/storage/v1/object/public/applicant-files/headshots/1773577317578-05nhp7k7ayl6.png',
        title: 'Dispatch & Scheduling Virtual Assistant',
        rate: '$4–6/hr',
        responsibilities: [
            'Book service calls and update the job board in ServiceTitan or Jobber all day',
            'Send appointment confirmation texts and reminder calls to customers',
            'Handle reschedules, cancellations, and same-day job changes in real time',
            'Log tech notes and update job statuses after each call',
            'Route urgent after-hours calls to the on-call technician',
        ],
        requirements: '1+ yr home services scheduling or dispatch experience · ServiceTitan, Jobber, or Housecall Pro · Strong phone communication · Fast typer',
    },
    {
        icon: Phone,
        photo: 'https://pbalmjdytwiqxpftipwn.supabase.co/storage/v1/object/public/applicant-files/headshots/1773960278331-97hy9223as6.png',
        title: 'Inbound Call & Lead Intake VA',
        rate: '$4–7/hr',
        responsibilities: [
            'Answer all inbound calls and book new service appointments on the first call',
            'Respond to Google LSA, Angi, and web leads within minutes of submission',
            'Qualify callers, collect job details, and enter lead info into the CRM',
            'Handle customer questions about pricing, availability, and service areas',
            'Escalate emergencies to the owner or senior tech immediately',
        ],
        requirements: '1+ yr inbound call center or CSR experience · Home services knowledge a plus · ServiceTitan, Housecall Pro, or similar · Clear, professional phone presence',
    },
    {
        icon: FileText,
        photo: 'https://pbalmjdytwiqxpftipwn.supabase.co/storage/v1/object/public/applicant-files/headshots/1773576267499-vblqvj4h39f.jpg',
        title: 'Estimate Follow-Up & CSR VA',
        rate: '$4–7/hr',
        responsibilities: [
            'Call and text every customer with an open estimate within 48 hours',
            'Answer questions, handle objections, and help customers move forward',
            'Log all follow-up attempts and outcomes in the CRM with full notes',
            'Send seasonal promotions and re-engagement messages to cold leads',
            'Update quote status and flag stale estimates needing a price adjustment',
        ],
        requirements: '1+ yr sales support or customer service experience · Home services a plus · CRM data entry · Comfortable on outbound calls · Strong follow-up habits',
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
        desc: 'We staff after-hours and weekend coverage — great for emergency call businesses.',
    },
    {
        icon: Timer,
        title: 'Flexible Hours',
        desc: 'Start with 20 hours a week and scale up as your call volume grows.',
    },
];

const HomeServices: React.FC = () => {
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
                title="Home Services Virtual Assistants | Scheduling & Customer Service | Five Star Assistants"
                description="Hire virtual assistants for home service businesses. Call answering, job scheduling, estimate follow-up, customer service & more. Free placement starting at $4/hr."
                keywords="home services virtual assistant, HVAC virtual assistant, plumbing VA, roofing virtual assistant, home service scheduling, field service VA, contractor virtual assistant"
                canonical="https://www.fivestarassistants.com/industries/home-services"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* Hero */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="HVAC, Plumbing, Roofing & Home Service Businesses"
                        headline={
                            <>
                                Get a Full-Time Assistant for Your Home Service Business.{' '}
                                <span className="text-gold italic">Starting at $4/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Phones. Scheduling. Follow-ups. Invoices. We hire and train the assistant. You just tell them what to do.{' '}
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
                                    Home Service Roles We Fill For Your Business
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    From dispatch to collections to reviews — trained assistants who know how home service businesses run.
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
                                        alt="Home service virtual assistant"
                                        className="w-full rounded-[2rem] shadow-xl object-cover"
                                    />
                                </div>

                            </div>

                            <div className="mt-14 text-center">
                                <Button onClick={openSurvey} variant="primary">
                                    Find My Home Service Virtual Assistant
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
                                    Home Service Roles We've Successfully Placed
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    Real roles, real hires. Here's a look at what we've placed for HVAC, plumbing, roofing, and other home service companies.
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
                                        WHY FSA FOR HOME SERVICES
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built For HVAC, Plumbing, Roofing &amp; More
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Your best techs should be running jobs — not answering the phone. But when the office is short-staffed, calls get missed, estimates go unfollowed, and invoices sit unpaid. That's real money walking out the door every day.</p>
                                        <p>We place trained assistants who already know how home service businesses work. They know the software. They know the workflows. You tell us what you need, and we find the right person. Fast.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">
                                        Book A Discovery Call
                                    </Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>

                                <div className="mt-8 lg:mt-0">
                                    <img
                                        src="/images/va-2.png"
                                        alt="Home service virtual assistant at work"
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
                                    Everything Your Business Needs, Under One Roof
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: Phone,
                                        title: 'Phones, Dispatch & Scheduling',
                                        desc: 'Answer every call and keep your techs\' calendars full.',
                                        items: ['Inbound call answering and job booking', 'Technician dispatch and daily job board management', 'Appointment confirmations and reminder calls', 'After-hours overflow and emergency routing'],
                                    },
                                    {
                                        icon: FileText,
                                        title: 'Estimates, Invoicing & Collections',
                                        desc: 'Get paid faster and stop letting jobs die in the pipeline.',
                                        items: ['Open estimate follow-up within 48 hours', 'Same-day invoice generation from tech job notes', 'Overdue balance follow-up and collections calls', 'Payment reconciliation in QuickBooks'],
                                    },
                                    {
                                        icon: ClipboardList,
                                        title: 'CRM & Lead Management',
                                        desc: 'Keep your system clean and your leads moving forward.',
                                        items: ['Call notes and job detail logging after every interaction', 'Lead status updates and follow-up task creation', 'Google LSA, Angi, and web lead response and intake', 'Weekly job, revenue, and booking rate reports'],
                                    },
                                    {
                                        icon: Megaphone,
                                        title: 'Reviews, Marketing & Vendor Support',
                                        desc: 'Build your reputation and stay in front of your customer base.',
                                        items: ['Post-job review request texts and emails', 'Google and Yelp review monitoring and responses', 'Seasonal promotion and maintenance reminder outreach', 'Parts ordering coordination and warranty claim follow-up'],
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
                                    Why Home Service Companies Choose Five Star Assistants
                                </h2>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-14">

                                <div className="flex flex-col gap-6">
                                    {[
                                        {
                                            icon: DollarSign,
                                            title: 'Every Missed Call Is a Job You Didn\'t Get',
                                            desc: "Home service companies miss around 27% of their inbound calls — and less than 3% of callers sent to voicemail ever leave a message. A VA answers every call, books every job, and makes sure no customer walks to a competitor.",
                                        },
                                        {
                                            icon: Award,
                                            title: 'They Know Your Software Before Day One',
                                            desc: "Our assistants are trained on ServiceTitan, Jobber, Housecall Pro, Workiz, FieldEdge, CallRail, and QuickBooks. You don't have to teach them how your business works. They already know.",
                                        },
                                        {
                                            icon: Target,
                                            title: 'Every Estimate Followed Up. Every Invoice Chased.',
                                            desc: "Most home service jobs are lost because nobody followed up on the quote. Most invoices go unpaid because nobody called. A dedicated VA follows up on every estimate and chases every outstanding balance — so your close rate and cash flow both improve.",
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
                                    How Much Home Service Businesses Lose to Admin
                                </h2>
                                <p className="font-body text-lg text-gray-500 max-w-2xl mx-auto">
                                    The businesses growing fastest aren't the ones working harder. They're the ones who stopped doing work that a VA can handle for $4/hr.
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mb-12">

                                <div className="flex flex-col justify-between gap-4 h-full">
                                    {[
                                        { value: '36%', label: "Business owners spend 36% of their work week on admin tasks like scheduling, invoicing, and data entry — about 16 hours every week. (Time Etc / Censuswide Survey 2023)" },
                                        { value: '27%', label: "Home service companies miss 27% of inbound calls. Less than 3% of callers sent to voicemail ever leave a message. Every missed call is a job your competitor gets instead. (Invoca / Housecall Pro 2024)" },
                                        { value: '86%', label: "Of home service companies say lack of qualified candidates is their biggest hiring challenge. Outsourcing admin to a trained VA removes that bottleneck entirely. (Housecall Pro Industry Trends 2024)" },
                                    ].map(({ value, label }) => (
                                        <div key={label} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-center gap-6">
                                            <p className="font-heading font-bold text-3xl text-gold flex-shrink-0 w-24 leading-tight">{value}</p>
                                            <p className="font-body text-sm text-gray-500 leading-relaxed">{label}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 h-full">
                                    <p className="font-heading text-xs font-bold text-gold tracking-widest uppercase mb-8">WHERE OWNER TIME GOES EACH WEEK</p>
                                    <div className="space-y-6">
                                        {[
                                            { label: 'Phones & scheduling',      hrs: '6 hrs', pct: 100 },
                                            { label: 'Estimate follow-up',       hrs: '4 hrs', pct: 67 },
                                            { label: 'Invoicing & collections',  hrs: '3 hrs', pct: 50 },
                                            { label: 'CRM & data entry',         hrs: '3 hrs', pct: 50 },
                                            { label: 'With a Five Star VA',       hrs: '0 hrs', pct: 0, highlight: true },
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
                                    <p className="font-body text-xs text-gray-400 mt-6">* Based on Time Etc / Censuswide entrepreneur time-use survey data</p>
                                </div>

                            </div>

                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                                <div className="w-16 h-16 rounded-2xl bg-navy/[0.06] flex items-center justify-center flex-shrink-0">
                                    <TrendingUp size={28} className="text-navy/70" />
                                </div>
                                <div>
                                    <p className="font-heading font-bold text-navy text-xl md:text-2xl mb-3 leading-snug">
                                        Home service businesses that hire a VA report booking 20–30% more jobs per week
                                    </p>
                                    <p className="font-body text-gray-500 leading-relaxed">
                                        When every call gets answered and every estimate gets followed up, your booking rate goes up — without adding a single tech. A VA at $4/hr can pay for itself with one extra job per week. Everything after that is pure profit.
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
                                {['No setup fees', 'No lock-in contracts', 'Free placement', 'Home service-trained VAs'].map((item) => (
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
                source="HomeServices"
            />
        </div>
    );
};

export default HomeServices;
