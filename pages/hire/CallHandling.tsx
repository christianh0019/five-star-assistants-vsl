import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, Users, Award,
    PhoneCall, Phone, MessageSquare, FileText,
    ChevronDown, Check,
    FileX, BadgeDollarSign, RefreshCw, CreditCard, Timer,
    TrendingUp, Briefcase, Building,
    AlertCircle,
} from 'lucide-react';
import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SurveyModal from '../../components/SurveyModal';
import ScrollReveal from '../../components/ScrollReveal';
import Button from '../../components/Button';
import SEO from '../../components/SEO';

// ─── Data ──────────────────────────────────────────────────────────────────

const socialProofStats = [
    { icon: Clock,      value: '7 Days',  label: 'Average Time to First Candidate' },
    { icon: DollarSign, value: '$5/hr',   label: 'Starting Rate' },
    { icon: Users,      value: '1,000+',  label: 'Businesses Served' },
    { icon: Award,      value: 'Top 1%',  label: 'Of Applicants Placed' },
];

const taskCategories = [
    {
        icon: PhoneCall,
        title: 'Inbound Call Answering & Routing',
        desc: 'Every call answered professionally — with callers routed to the right person or handled completely without transferring.',
        items: [
            'Answer all incoming calls promptly with a professional, branded greeting',
            'Identify caller needs and route to the appropriate person or department',
            'Handle common inquiries independently using your scripts and FAQs',
            'Take messages accurately and deliver them to the right person immediately',
            'Screen and prioritize calls based on urgency and caller type',
            'Manage high call volume periods without calls going to voicemail',
        ],
    },
    {
        icon: Phone,
        title: 'Outbound Follow-Up Calls',
        desc: 'Outbound calls to customers, prospects, and partners — made consistently so nothing falls through the cracks.',
        items: [
            'Follow up with customers post-purchase or post-service to confirm satisfaction',
            'Call leads who submitted inquiries or requested callbacks',
            'Conduct reminder calls for upcoming appointments or deliveries',
            'Re-engage inactive customers with scheduled check-in calls',
            'Call vendors, partners, and suppliers to confirm orders and timelines',
            'Log all outbound call outcomes in your CRM after each session',
        ],
    },
    {
        icon: MessageSquare,
        title: 'Message Taking & Scheduling',
        desc: 'Accurate messages delivered immediately, and appointments booked directly — so callers get what they need on the first call.',
        items: [
            'Take detailed messages and relay them to the right person within minutes',
            'Schedule appointments and callbacks directly using your booking tool',
            'Confirm and reschedule existing appointments over the phone',
            'Coordinate scheduling across multiple team members and calendars',
            'Send confirmation messages via email or SMS after bookings are made',
            'Handle rescheduling and cancellation requests without disrupting your day',
        ],
    },
    {
        icon: FileText,
        title: 'Call Logging & Documentation',
        desc: 'Every call documented accurately — so your team always knows who called, why, and what was said or agreed.',
        items: [
            'Log all inbound and outbound calls with caller name, purpose, and outcome',
            'Update CRM records immediately after each call with relevant notes',
            'Flag urgent calls or issues that require immediate action from your team',
            'Maintain a call log spreadsheet or helpdesk ticket for every interaction',
            'Produce weekly call summary reports — volume, topics, and outcomes',
            'Track recurring caller issues to surface patterns for process improvement',
        ],
    },
];

const advantages = [
    {
        icon: FileX,
        title: 'No Lock-In Contracts',
        desc: 'Work with us month to month. No long-term commitments, ever.',
    },
    {
        icon: BadgeDollarSign,
        title: 'No Setup Fees',
        desc: 'Recruiting is completely free. You only pay once your specialist starts.',
    },
    {
        icon: RefreshCw,
        title: 'Free Replacement',
        desc: "If someone isn't the right fit, we replace them at no extra cost.",
    },
    {
        icon: CreditCard,
        title: 'One Simple Hourly Rate',
        desc: 'Your rate covers everything — equipment, internet, and all associated costs.',
    },
    {
        icon: PhoneCall,
        title: 'Dedicated — Not Shared',
        desc: 'Your call handler works exclusively for your business — not splitting attention across a shared receptionist queue with other clients.',
    },
    {
        icon: Timer,
        title: 'Full Activity Tracking',
        desc: 'Every assistant uses full-screen tracking software monitored by our in-house HR team.',
    },
];

const whoIsThisFor = [
    {
        icon: Building,
        title: 'Local Service Businesses',
        desc: "Roofing, plumbing, HVAC, solar, dental, legal — your phone rings constantly and every missed call is a missed opportunity. A dedicated call handler answers every call professionally so you stop losing business to voicemail.",
    },
    {
        icon: Briefcase,
        title: 'Healthcare & Professional Services',
        desc: "Patients and clients calling for appointments, billing questions, and referrals expect a real person to pick up. A dedicated specialist handles your phones so callers feel taken care of from the very first interaction.",
    },
    {
        icon: TrendingUp,
        title: 'E-Commerce & Product Companies',
        desc: "Customers with order questions, shipping concerns, and return requests who can't reach anyone switch to a competitor or leave a bad review. A call handler gives them the answer they need without putting that burden on your team.",
    },
];

const pillars = [
    {
        icon: AlertCircle,
        title: 'Missed Calls Are Missed Revenue',
        desc: "Most callers won't leave a voicemail — they'll call the next business on the list. Every unanswered call is a potential customer you handed to a competitor. A dedicated call handler ensures someone picks up every time, professionally, without exception.",
    },
    {
        icon: DollarSign,
        title: 'Save $40k+ vs. a US-Based Receptionist',
        desc: "Receptionists and inbound call specialists in the US cost $35,000–$50,000/year plus benefits. Our dedicated specialists start at $5/hr — full-time call coverage, outbound follow-up, scheduling, and documentation — without the full-time overhead.",
    },
    {
        icon: Users,
        title: 'A Real Person Converts Better Than Voicemail Every Time',
        desc: "Voicemail has a sub-20% callback rate. A real person who answers, understands the caller's need, and either resolves it or books a next step converts at a dramatically higher rate. Phone is still one of the highest-converting channels — but only when someone picks up.",
    },
];

const faqs = [
    {
        question: 'What phone systems and tools do they work with?',
        answer: "Google Voice, RingCentral, Dialpad, Grasshopper, OpenPhone, Vonage, and most other VoIP and cloud phone systems. They can also work with forwarded lines from your existing business number. During onboarding, we'll confirm your phone setup and configure access accordingly.",
    },
    {
        question: 'Can they answer calls as if they're part of my company?',
        answer: "Yes. They answer using your business name and any greeting script you provide. Callers experience them as a member of your team, not an outside service. You provide the script and brand voice; they execute it consistently on every call.",
    },
    {
        question: 'What if a caller asks something they can't answer?',
        answer: "They take a detailed message and promise a callback — then deliver it immediately to the right person. During onboarding, you'll define clear escalation paths and build their call scripts so they can handle the majority of inquiries independently, with escalation reserved for genuinely complex situations.",
    },
    {
        question: 'What hours can they cover?',
        answer: "We match you with a specialist who covers your required business hours — any US time zone, standard business hours. For extended coverage or after-hours answering, we can discuss shift arrangements. Most clients start with core business hour coverage and expand from there.",
    },
    {
        question: 'Can they also make outbound calls, not just receive them?',
        answer: "Yes — outbound follow-up calling is a core part of the role. Callback requests, appointment reminders, post-service check-ins, and lead follow-up calls are all common. If your volume is primarily outbound, we'll match you with a specialist who has strong outbound call experience.",
    },
    {
        question: 'Can they schedule appointments directly while on the call?',
        answer: "Yes. They can book appointments in real time using Calendly, GoHighLevel, your practice management software, or any booking tool you use. This eliminates the callback loop and significantly improves show rates by getting the appointment confirmed while the caller is engaged.",
    },
    {
        question: 'How do they learn about my business and products?',
        answer: "During onboarding, you'll provide call scripts, FAQs, and any relevant product or service documentation. Most specialists are comfortable within the first week and reach full proficiency within two to four weeks as they handle more real calls and get feedback from your team.",
    },
    {
        question: 'What if call volume is unpredictable?',
        answer: "Since there are no long-term contracts, you can scale easily if volume increases significantly. For businesses with highly variable call volume (e.g., seasonal surges), we can discuss building a small call handling rotation so no calls get missed during peak periods.",
    },
];

// ─── Component ─────────────────────────────────────────────────────────────

const CallHandling: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);
    const handleSurveyComplete = () => { closeSurvey(); navigate('/booking'); };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <SEO
                title="Hire a Phone & Call Handling Specialist | Virtual Receptionist | Five Star Assistants"
                description="Hire a dedicated phone and call handling specialist for inbound answering, outbound follow-up, scheduling, and call logging. Answer every call, lose fewer customers. Free placement. Starting at $5/hr."
                keywords="hire virtual receptionist, phone answering virtual assistant, call handling VA, outsource inbound calls, remote receptionist, business phone answering service, call handling specialist"
                canonical="https://www.fivestarassistants.com/hire/call-handling"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* ── Hero ──────────────────────────────────────────────── */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Phone & Call Handling Specialists"
                        headline={
                            <>
                                Hire A Dedicated Call Handler.{' '}
                                <span className="text-gold italic">Starting at $5/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Inbound call answering, outbound follow-up, appointment scheduling, and call logging —
                                handled professionally so every caller gets a real person, every time.{' '}
                                <span className="font-bold text-navy">Free placement. Matched in 7 days.</span>
                            </>
                        }
                    />
                </ScrollReveal>

                {/* ── Social Proof Stats ────────────────────────────────── */}
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

                {/* ── What They Handle ──────────────────────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12 md:mb-16">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    WHAT THEY HANDLE
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    Everything a Call Handling Specialist Takes Off Your Plate
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    One dedicated specialist who owns your phones — inbound answering, outbound follow-up, scheduling, and call logging — so no caller reaches voicemail and no message gets lost.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {taskCategories.map(({ icon: Icon, title, desc, items }, idx) => (
                                    <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                                        <div className="w-12 h-12 rounded-xl bg-navy/[0.06] flex items-center justify-center mb-5">
                                            <Icon size={22} className="text-navy/70" />
                                        </div>
                                        <h3 className="font-heading font-bold text-navy text-xl mb-2">{title}</h3>
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

                            <div className="mt-14 text-center">
                                <Button onClick={openSurvey} variant="primary">
                                    Find My Call Handling Specialist
                                </Button>
                                <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* ── Why FSA — Navy Advantages ─────────────────────────── */}
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
                                    We've removed every friction point from hiring a dedicated call handler so your phones are covered and your team can stay focused on the work.
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
                                <Button onClick={openSurvey} variant="primary">Get Started — It's Free</Button>
                                <p className="font-heading italic text-white/30 text-sm mt-3">No setup fees. No lock-in contracts.</p>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* ── Who Is This For ───────────────────────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-white px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12 md:mb-16">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    WHO THIS IS FOR
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    Built For Businesses That Can't Afford To Miss A Call
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    If your phones go unanswered when your team is busy — or if you're personally fielding calls that shouldn't require your attention — a dedicated specialist changes that.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {whoIsThisFor.map(({ icon: Icon, title, desc }, idx) => (
                                    <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                                        <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-5">
                                            <Icon size={22} className="text-gold" />
                                        </div>
                                        <h3 className="font-heading font-bold text-navy text-xl mb-3 leading-snug">{title}</h3>
                                        <p className="font-body text-gray-600 text-sm leading-relaxed">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* ── Built Around Your Phones ──────────────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">

                            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                                <div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                        WHY FSA FOR CALL HANDLING
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built Around Your Phones
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Most businesses handle calls reactively — whoever is available picks up. When everyone's busy, calls go to voicemail. When the wrong person answers, the experience suffers. And when calls don't get logged, important information disappears.</p>
                                        <p>At Five Star Assistants, we match you with a dedicated call handling specialist who covers your phones consistently — answering professionally, routing accurately, scheduling on the spot, and logging every interaction — so your callers always reach a real person who knows what to do.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">Book A Discovery Call</Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>
                                <div>
                                    <img src="/images/va-2.png" alt="Call handling specialist answering phones" className="w-full rounded-[2rem] shadow-xl object-cover" />
                                </div>
                            </div>

                            <div className="text-center mb-12">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    THREE REASONS TO CHOOSE FSA
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy">
                                    Why Businesses Trust Five Star Assistants
                                </h2>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                                <div className="flex flex-col gap-6">
                                    {pillars.map(({ icon: Icon, title, desc }, idx) => (
                                        <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex gap-5 items-start">
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
                                <div>
                                    <img src="/images/va-3.png" alt="Five Star Assistant at work" className="w-full rounded-[2rem] shadow-xl object-cover" />
                                </div>
                            </div>

                            <div className="mt-14 text-center">
                                <Button onClick={openSurvey} variant="primary">Start Building Your Team</Button>
                                <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                            </div>

                        </div>
                    </section>
                </ScrollReveal>

                {/* ── FAQ ───────────────────────────────────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-white px-4 border-t border-gray-100">
                        <div className="max-w-3xl mx-auto">
                            <div className="text-center mb-12 md:mb-16">
                                <div className="flex items-center justify-center gap-4 mb-6">
                                    <span className="w-12 h-[1px] bg-gold" />
                                    <span className="font-body text-gold font-bold tracking-[0.2em] uppercase text-xs">FAQ</span>
                                    <span className="w-12 h-[1px] bg-gold" />
                                </div>
                                <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy">Common Questions</h2>
                            </div>
                            <div className="flex flex-col gap-3">
                                {faqs.map((faq, idx) => (
                                    <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <button
                                            onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-navy/[0.02] transition-colors duration-200"
                                        >
                                            <span className="font-heading font-bold text-lg text-navy leading-snug">{faq.question}</span>
                                            <ChevronDown size={20} className={`text-gold flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                                            <div className="px-6 pb-5 pt-1 border-t border-gray-100">
                                                <p className="font-body text-gray-500 leading-relaxed">{faq.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* ── Final CTA ─────────────────────────────────────────── */}
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
                                Answer Every Call.{' '}
                                <span className="text-gold italic">Lose Fewer Customers.</span>
                            </h2>
                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us about your call volume and we'll match you with a dedicated call handling specialist — in as little as 7 days. No setup fees, no long-term contracts.
                            </p>
                            <div className="flex flex-wrap justify-center gap-3 mb-12">
                                {['No setup fees', 'No lock-in contracts', 'Dedicated — not shared', 'Free placement'].map((item) => (
                                    <div key={item} className="flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-5 py-2.5">
                                        <Check size={14} className="text-gold flex-shrink-0" strokeWidth={3} />
                                        <span className="font-body text-white font-medium text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Button onClick={openSurvey} variant="primary" className="w-full sm:w-auto min-w-[320px] text-xl shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] py-5">
                                Book A Free Discovery Call
                            </Button>
                            <p className="font-heading italic text-white/30 text-sm mt-4">100% Free. No Obligation.</p>
                        </div>
                    </section>
                </ScrollReveal>

            </main>

            <Footer />
            <SurveyModal isOpen={isSurveyOpen} onClose={closeSurvey} onComplete={handleSurveyComplete} source="Phone & Call Handling" />
        </div>
    );
};

export default CallHandling;
