import React, { useState, useRef } from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import SurveyModal from '../components/SurveyModal';
import ScrollReveal from '../components/ScrollReveal';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, ShieldCheck, Users,
    ClipboardList, FileText, Share2, Search,
    ChevronLeft, ChevronRight, Check,
    FileX, BadgeDollarSign, RefreshCw, CreditCard, Globe2, Timer,
    Phone, BarChart2, Home, Award, Target, TrendingUp, Mail,
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
        icon: ClipboardList,
        title: 'Transaction Coordinator VA',
        desc: 'Own the entire contract-to-close workflow so your agent never misses a deadline or drops a deal.\n\n• Open escrow and distribute the full transaction timeline and checklist to all parties on the day of contract acceptance\n• Collect, organize, and route all disclosures, addenda, inspection reports, and contingency removals via DocuSign or Dotloop\n• Serve as the primary contact for escrow/title, lender, co-op agent, and all third-party vendors throughout the transaction\n• Monitor every contingency deadline and provide 48-hour advance notice before anything expires\n• Upload the fully executed compliance packet to SkySlope and confirm broker approval before close',
    },
    {
        icon: Phone,
        title: 'ISA / Lead Follow-Up VA',
        desc: 'Execute 150–250 outbound dials per day so your pipeline never goes cold between closings.\n\n• Work expired listings, FSBOs, past clients, and geographic farm lists using agent-approved scripts and a triple-line power dialer\n• Qualify every lead on motivation, timeline, financials, and agent relationship status — log outcomes in the CRM within 15 minutes of each call\n• Book listing appointments and buyer consultations directly onto the agent\'s calendar with same-day confirmation texts and 24-hour reminders\n• Re-engage no-contact and long-nurture leads on a structured 30/60/90-day follow-up cadence via calls, texts, and personalized email templates\n• Deliver a daily activity report showing total dials, contacts made, appointments set, and new CRM entries',
    },
    {
        icon: Home,
        title: 'Listing Coordinator VA',
        desc: 'Get listings to market faster and keep every showing, deadline, and offer organized from day one.\n\n• Enter new listings into the MLS within 24 hours of the photography session — full remarks, photos in correct order, showing instructions, and accurate property details\n• Schedule and coordinate photography, videography, Matterport 3D tours, and staging vendors\n• Create "Just Listed" social posts, listing flyers, brochures, and email announcement templates in Canva for agent approval\n• Syndicate to Zillow, Realtor.com, and Homes.com and verify all details — price, photos, remarks — are accurate within 24 hours of MLS activation\n• Manage the ShowingTime calendar, confirm all appointments with buyers\' agents, and collect and compile showing feedback for seller reports',
    },
    {
        icon: BarChart2,
        title: 'CRM Manager / Database VA',
        desc: 'Turn a neglected contact list into a working pipeline of repeat and referral business.\n\n• Audit and clean the entire database — deduplicate records, fill missing fields, and standardize tags by lead source, buyer/seller stage, and sphere category\n• Build and maintain automated drip campaigns and action plans in Follow Up Boss, kvCORE, LionDesk, or BoomTown\n• Route inbound leads from Zillow, Realtor.com, and Facebook Ads into the correct CRM pipeline stage immediately upon arrival\n• Track pipeline movement and generate weekly reports on active leads by stage, source, and projected close date\n• Re-engage dormant contacts with personalized outreach sequences on a defined 30/60/90-day cycle',
    },
    {
        icon: Share2,
        title: 'Social Media & Marketing VA',
        desc: 'Maintain a consistent, professional presence across every platform — without the agent touching a design tool.\n\n• Produce 15–20 pieces of content per month: listing spotlights, just sold posts, neighborhood guides, market update graphics, and short-form Reels scripts using Canva and CapCut\n• Schedule and publish content across Instagram, Facebook, LinkedIn, and YouTube Shorts using Buffer or Hootsuite — maintaining a 4–7 posts/week cadence\n• Write MLS listing descriptions and email newsletter copy in the agent\'s voice, optimized for engagement\n• Monitor comments, DMs, and reviews and respond within 24 hours to maintain algorithmic engagement signals\n• Compile monthly analytics reports on reach, engagement rate, lead form completions, and follower growth with content recommendations',
    },
    {
        icon: FileText,
        title: 'Property Management VA',
        desc: 'Handle the relentless inbound volume of a rental portfolio so your property managers can focus on growth.\n\n• Answer inbound tenant inquiries via phone, email, and portal; triage maintenance requests and dispatch to the appropriate vendor in Buildium or AppFolio\n• Process rental applications — collect documentation, coordinate background and credit checks, verify employment and rental history, and generate approval/denial letters\n• Track rent collection status daily, send late notices, and maintain delinquency logs in the property management platform\n• Coordinate lease renewals — generate documents, route for e-signature, update lease terms, and communicate changes to tenants\n• Compile monthly owner reports including occupancy rates, rent roll, maintenance spending, and upcoming lease expirations',
    },
    {
        icon: Search,
        title: 'Real Estate Investor / Acquisitions VA',
        desc: 'Build and work a high-volume lead pipeline so investors can focus on deals, not dials.\n\n• Pull distressed property lists from PropStream or BatchLeads by filter criteria — high equity, absentee owner, tax delinquency, pre-foreclosure, long ownership tenure\n• Skip trace owner contact information and organize leads into outreach batches ready for cold calling or SMS via Launch Control or Textedly\n• Execute cold call outreach with approved scripts and log all outcomes in REsimpli or Podio with full notes within 15 minutes of each call\n• Manage the cash buyer\'s list — add new buyers from inbound inquiries, segment by buy box criteria, and blast new deals upon contract\n• Support ARV comp research from MLS data, contract paperwork prep, and disposition calendar management',
    },
    {
        icon: Mail,
        title: 'Executive / Admin Assistant VA',
        desc: 'Keep the entire business running behind the scenes — inbox, calendar, vendors, and operations.\n\n• Manage the agent\'s inbox — label, prioritize, and draft responses — along with calendar scheduling for showings, consultations, and inspections\n• Handle inbound inquiry calls and emails: greet, qualify, and route to the appropriate agent or pipeline\n• Prepare expense reports, invoices, and commission disbursement requests; track in QuickBooks or Wave\n• Research and compile competitive market analyses, neighborhood statistics, and listing comparables into presentation-ready formats\n• Coordinate all agent marketing needs — order signs and lockboxes, manage vendor relationships, and track active listing and transaction deadlines',
    },
];

const sampleJobs = [
    {
        icon: ClipboardList,
        photo: 'https://pbalmjdytwiqxpftipwn.supabase.co/storage/v1/object/public/applicant-files/headshots/1773959874836-w9yxyr4fbdn.jpeg',
        title: 'Transaction Coordinator VA',
        rate: '$5–7/hr',
        responsibilities: [
            'Open escrow and distribute the transaction timeline to all parties on the day of acceptance',
            'Collect, organize, and route all disclosures, addenda, and inspection reports via DocuSign',
            'Monitor every contingency deadline and alert the agent 48 hours in advance',
            'Coordinate directly with escrow, lender, and co-op agent throughout the transaction',
            'Upload the fully executed compliance packet to SkySlope before close',
        ],
        requirements: '1+ yr real estate transaction coordination · Dotloop, SkySlope, or Glide · Strong deadline management',
    },
    {
        icon: Phone,
        photo: 'https://pbalmjdytwiqxpftipwn.supabase.co/storage/v1/object/public/applicant-files/headshots/1773954648923-rf1u4wrp55d.png',
        title: 'ISA / Lead Follow-Up VA',
        rate: '$5–6/hr',
        responsibilities: [
            'Execute 150–250 outbound dials per day using Mojo Dialer or Vulcan7 with approved scripts',
            'Qualify leads on motivation, timeline, and financials — log all outcomes in CRM within 15 minutes',
            'Book listing appointments and buyer consults directly on the agent\'s calendar',
            'Re-engage long-nurture leads on a 30/60/90-day follow-up cadence',
            'Deliver a daily activity report: dials, contacts made, appointments set, new CRM entries',
        ],
        requirements: '1+ yr real estate ISA or cold calling · Mojo Dialer or Vulcan7 · Follow Up Boss or kvCORE · LPMAMA script proficiency',
    },
    {
        icon: Home,
        photo: 'https://pbalmjdytwiqxpftipwn.supabase.co/storage/v1/object/public/applicant-files/headshots/1773952447020-5ww9tu1ufcw.jpg',
        title: 'Listing Coordinator VA',
        rate: '$4–6/hr',
        responsibilities: [
            'Enter new listings into MLS within 24 hours of photography — full remarks, photos, and showing instructions',
            'Coordinate photography, videography, and Matterport tours with vendors',
            'Create "Just Listed" social graphics and email blast templates in Canva for agent approval',
            'Syndicate listing to Zillow, Realtor.com, and Homes.com and verify accuracy within 24 hours',
            'Manage ShowingTime calendar, confirm appointments, and collect feedback after each showing',
        ],
        requirements: '1+ yr real estate listing coordination or MLS data entry · Canva · ShowingTime · Knowledge of MLS input requirements',
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
        desc: 'We can staff your business around the clock — any time zone, any schedule.',
    },
    {
        icon: Timer,
        title: 'Flexible Hours',
        desc: 'Assistants are available from a minimum of 20 hours per week — scale as needed.',
    },
];

const RealEstateIndustry: React.FC = () => {
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
                        callout="Real Estate Agents, Teams & Investors"
                        headline={
                            <>
                                Hire a Top 1% Real Estate Virtual Assistant.{' '}
                                <span className="text-gold italic">Starting at $4/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Elite Filipino VAs for transaction coordination, lead follow-up, listings, and property management.{' '}
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
                                    Real Estate Roles We Fill For Your Business
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    From transaction coordination to ISA calling to property management — trained assistants who know real estate workflows, CRMs, and MLS systems.
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
                                        alt="Real estate virtual assistant"
                                        className="w-full rounded-[2rem] shadow-xl object-cover"
                                    />
                                </div>

                            </div>

                            <div className="mt-14 text-center">
                                <Button onClick={openSurvey} variant="primary">
                                    Find My Real Estate Virtual Assistant
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
                                    Real Estate Roles We've Successfully Placed
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    Real roles, real hires. Here's a sample of what we've placed for real estate businesses like yours.
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
                                    We've removed every friction point from hiring remote real estate support so your agents can focus on clients, not coordination.
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
                                        WHY FSA FOR REAL ESTATE
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built Around Your Business
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Real estate runs on relationships — but the business behind those relationships runs on an endless stream of paperwork, data entry, calls, and coordination. The agents who scale aren't the ones working harder. They're the ones who've stopped doing $15/hr work.</p>
                                        <p>Five Star Assistants places rigorously vetted Filipino VAs who understand real estate workflows, CRM platforms, MLS systems, and transaction timelines — so your first hire is productive from day one, not a six-week onboarding project.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">
                                        Book A Discovery Call
                                    </Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>

                                <div className="hidden lg:block">
                                    <img
                                        src="/images/va-2.png"
                                        alt="Real estate virtual assistant at work"
                                        className="w-full rounded-[2rem] shadow-xl object-cover"
                                    />
                                </div>

                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* All The Skills Your Business Needs */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12 md:mb-16">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    WHAT WE COVER
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    All The Skills Your Real Estate Business Needs, Under One Roof
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: ClipboardList,
                                        title: 'Transaction & Listing Coordination',
                                        desc: 'Never miss a deadline or drop a deal in transit — from MLS entry to closing compliance.',
                                        items: ['Contract-to-close transaction management', 'MLS entry, listing syndication & ShowingTime', 'Disclosure, addenda & contingency tracking', 'SkySlope / Dotloop compliance filing'],
                                    },
                                    {
                                        icon: Phone,
                                        title: 'Lead Generation & ISA Support',
                                        desc: 'Keep your pipeline full and your response time under five minutes — every day.',
                                        items: ['150–250 outbound dials/day via power dialer', 'LPMAMA lead qualification & CRM logging', 'Appointment setting directly onto agent calendars', 'Database nurture on 30/60/90-day follow-up cycles'],
                                    },
                                    {
                                        icon: Share2,
                                        title: 'Marketing & Content',
                                        desc: 'Build a brand presence that generates inbound leads without the agent spending a minute on design.',
                                        items: ['Listing graphics, social posts & Reels scripts', '4–7 posts/week across Instagram, Facebook & LinkedIn', 'Email newsletters, MLS remarks & listing copy', 'Monthly performance reports with content recommendations'],
                                    },
                                    {
                                        icon: Home,
                                        title: 'Property Management & Investor Ops',
                                        desc: 'Scale your portfolio or deal pipeline without adding proportional headcount.',
                                        items: ['Tenant communication, maintenance dispatch & leasing', 'Rent collection tracking & owner report generation', 'Distressed property list-building & skip tracing', 'Cold call outreach, CRM management & buyer\'s list maintenance'],
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
                                    Why Real Estate Professionals Trust Five Star Assistants
                                </h2>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-14">

                                <div className="flex flex-col gap-6">
                                    {[
                                        {
                                            icon: DollarSign,
                                            title: 'Cut Overhead Without Cutting Output',
                                            desc: "A full-time US-based real estate admin costs $52,000–$78,000/year in salary and benefits. A Five Star VA delivers the same coverage starting at $8,320/year — a 70–80% reduction with no benefits, no desk space, and no recruiting risk.",
                                        },
                                        {
                                            icon: Award,
                                            title: 'Real Estate-Trained From Day One',
                                            desc: "Our VAs know Follow Up Boss, kvCORE, Dotloop, SkySlope, MLS platforms, and power dialers before their first day with you. You get a working team member, not a training project.",
                                        },
                                        {
                                            icon: Target,
                                            title: 'Your Pipeline Never Goes Cold',
                                            desc: "87% of buyers say they'd use their agent again — but only 12% do, because agents stop following up. A dedicated ISA or CRM VA keeps every lead nurtured, every contact touched, and every deal in motion.",
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

                {/* Admin Burden Stats */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-white px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12 md:mb-16">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    THE NUMBERS DON'T LIE
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    How Much Agent Time Is Really Lost to Admin
                                </h2>
                                <p className="font-body text-lg text-gray-500 max-w-2xl mx-auto">
                                    The agents scaling past $500K GCI aren't working more hours — they've stopped doing $15/hr work themselves. The data makes the case for delegation better than any sales pitch.
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mb-12">

                                <div className="flex flex-col justify-between gap-4 h-full">
                                    {[
                                        { value: '26%', label: 'Share of a real estate agent\'s week actually spent on revenue-generating activity — the rest is admin (NAR Member Profile)' },
                                        { value: '30 hrs', label: 'Unlicensed administrative hours inside the average real estate transaction — out of ~40 total hours from contract to close' },
                                        { value: '100x', label: 'More likely to convert a lead contacted within 5 minutes vs. 30 minutes — most agents respond in hours or not at all (Harvard Business Review)' },
                                    ].map(({ value, label }) => (
                                        <div key={label} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-center gap-6">
                                            <p className="font-heading font-bold text-3xl text-gold flex-shrink-0 w-24 leading-tight">{value}</p>
                                            <p className="font-body text-sm text-gray-500 leading-relaxed">{label}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 h-full">
                                    <p className="font-heading text-xs font-bold text-gold tracking-widest uppercase mb-8">HOURS LOST TO NON-REVENUE WORK PER WEEK</p>
                                    <div className="space-y-6">
                                        {[
                                            { label: 'Admin & paperwork',       hrs: '10 hrs', pct: 100 },
                                            { label: 'Transaction coordination', hrs: '8 hrs',  pct: 80 },
                                            { label: 'Lead follow-up (manual)', hrs: '5 hrs',  pct: 50 },
                                            { label: 'Marketing & content',     hrs: '3 hrs',  pct: 30 },
                                            { label: 'With a Five Star VA',      hrs: '0 hrs',  pct: 0, highlight: true },
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
                                    <p className="font-body text-xs text-gray-400 mt-6">* Based on NAR member data and industry transaction studies</p>
                                </div>

                            </div>

                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                                <div className="w-16 h-16 rounded-2xl bg-navy/[0.06] flex items-center justify-center flex-shrink-0">
                                    <TrendingUp size={28} className="text-navy/70" />
                                </div>
                                <div>
                                    <p className="font-heading font-bold text-navy text-xl md:text-2xl mb-3 leading-snug">
                                        Real estate firms using VAs report 35–50% more agent productivity within six months
                                    </p>
                                    <p className="font-body text-gray-500 leading-relaxed">
                                        Most brokerages reach positive ROI on their first VA hire within 60–90 days. At $4/hr and a free placement, the financial risk of trying is effectively zero — while the cost of staying buried in admin compounds with every deal you take on.
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
                                Tell us the role you need and we'll introduce you to a qualified real estate virtual assistant — in as little as 7 days. No recruiting headaches, no hiring risk, no long-term contracts.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mb-12">
                                {['No setup fees', 'No lock-in contracts', 'Free placement', 'Real estate-trained VAs'].map((item) => (
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
                source="Real Estate"
            />
        </div>
    );
};

export default RealEstateIndustry;
