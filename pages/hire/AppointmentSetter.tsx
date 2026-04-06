import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, Users, Award,
    PhoneCall, Inbox, Calendar, Database,
    ChevronDown, Check,
    FileX, BadgeDollarSign, RefreshCw, CreditCard, Timer,
    TrendingUp, Briefcase, Building,
    Target, Globe, Zap,
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
        title: 'Outbound Calling & Follow-Up',
        desc: "Consistent calls to your lead list every day — so no lead ages out and every warm prospect gets followed up before they go cold.",
        items: [
            'Call new leads and warm prospects daily from your pipeline or lead list',
            'Execute structured follow-up call sequences until a decision is made',
            'Leave professional voicemails designed to get callbacks',
            'Handle common objections and re-engage prospects who went quiet',
            'Qualify leads against your booking criteria before scheduling',
            'Track call activity and log outcomes in your CRM after every session',
        ],
    },
    {
        icon: Inbox,
        title: 'Inbound Lead Response',
        desc: 'Fast, professional responses to every inbound inquiry — because the first business to respond wins.',
        items: [
            'Monitor and respond to inbound leads from web forms, ads, and landing pages',
            'Follow up with new leads within minutes to maximize show rates',
            'Qualify inbound prospects before booking to protect your calendar',
            'Re-engage leads who expressed interest but never booked',
            'Handle DMs, emails, and texts from leads across channels',
            'Tag and categorize inbound leads by source and qualification status in CRM',
        ],
    },
    {
        icon: Calendar,
        title: 'Calendar & Booking Management',
        desc: 'Confirmed appointments on the right calendar — with reminders sent and no-shows rescheduled before they become lost deals.',
        items: [
            'Book qualified leads directly onto your calendar using your scheduling tool',
            'Send confirmation messages and calendar invites immediately after booking',
            'Send reminder messages 24 hours and 1 hour before each appointment',
            'Reschedule no-shows and cancellations before they fall out of the pipeline',
            'Coordinate across multiple calendars and time zones without errors',
            'Maintain a clean, organized booking system with no double-bookings',
        ],
    },
    {
        icon: Database,
        title: 'CRM Tracking & Pipeline Reporting',
        desc: "A current, accurate CRM so you always know what's happening in your pipeline — who booked, who no-showed, and who needs another touch.",
        items: [
            'Log every call, text, and booking interaction in your CRM',
            'Update lead status and pipeline stage after every touchpoint',
            'Track show rates, cancellations, and no-show patterns over time',
            'Flag hot leads who are close to booking for priority follow-up',
            'Produce weekly booking reports — leads worked, booked, and show rates',
            'Maintain clean lead records with accurate contact information',
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
        desc: 'Recruiting is completely free. You only pay once your setter starts.',
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
        icon: Calendar,
        title: 'Dedicated — Not Shared',
        desc: 'Your setter works exclusively on your pipeline — not booking appointments for a dozen other clients at the same time.',
    },
    {
        icon: Timer,
        title: 'Full Activity Tracking',
        desc: 'Every assistant uses full-screen tracking software monitored by our in-house HR team.',
    },
];

const whoIsThisFor = [
    {
        icon: TrendingUp,
        title: 'Coaches & Consultants',
        desc: "You need a full calendar without personally chasing every lead. A dedicated setter handles the follow-up, qualifies the prospects, and gets them booked — so you show up to calls ready to close, not to re-qualify.",
    },
    {
        icon: Building,
        title: 'Local Service Businesses',
        desc: "Roofing, solar, HVAC, insurance, financial services — your leads go cold fast. A setter follows up within minutes, qualifies on the phone, and books the appointment while the lead is still warm.",
    },
    {
        icon: Briefcase,
        title: 'Sales Teams & Agencies',
        desc: "Your closers need a full pipeline of confirmed calls — not a lead list they have to work themselves. A dedicated setter fills their calendar so they spend every hour doing what generates revenue.",
    },
];

const pillars = [
    {
        icon: Zap,
        title: 'Speed-To-Lead Is Everything',
        desc: "Studies show that responding to a lead within 5 minutes makes you 100x more likely to connect. Most businesses follow up hours or days later — and by then, the lead booked with someone else. A dedicated setter responds immediately, every time, and keeps following up until there's a decision.",
    },
    {
        icon: DollarSign,
        title: 'Save $40k+ vs. a US-Based Appointment Setter',
        desc: "Appointment setters in the US cost $40,000–$60,000/year plus benefits. Our dedicated setters start at $5/hr — full-time follow-up, outbound calls, and calendar management — without the full-time overhead.",
    },
    {
        icon: Target,
        title: 'A Lead That Doesn\'t Book Is A Lead That\'s Dying',
        desc: "Every day a lead goes without contact, your chance of converting drops. Most businesses lose deals not because the product wasn't right — but because follow-up was inconsistent. A dedicated setter keeps every lead in motion until they book or opt out.",
    },
];

const faqs = [
    {
        question: 'What does an appointment setter actually do?',
        answer: "An appointment setter follows up with leads — inbound and outbound — to qualify them and get them booked on your calendar. They handle the calls, texts, and emails between the first lead touch and the confirmed appointment, so you only show up to calls that are already qualified and confirmed.",
    },
    {
        question: 'Do they make outbound calls?',
        answer: "Yes. Outbound calling is one of the primary activities — following up with leads who showed interest, re-engaging cold contacts, and calling new names from your pipeline. If you want a call-heavy setter versus a text/email-first one, tell us during onboarding and we'll match accordingly.",
    },
    {
        question: "What's a typical show rate I can expect?",
        answer: "Show rates vary by industry, offer, and traffic source. Most clients see 60–80% show rates with consistent reminders and pre-call follow-up in place. Your setter sends confirmation messages and reminders before every call, and reschedules no-shows immediately rather than letting them fall out of the pipeline.",
    },
    {
        question: 'How do they handle no-shows and cancellations?',
        answer: "Immediately. When a no-show occurs, your setter follows up within minutes to reschedule — while the lead is still warm and the context is fresh. They use a structured re-engagement sequence rather than letting the lead sit idle, which dramatically reduces permanent no-shows.",
    },
    {
        question: 'What booking software do they use?',
        answer: "Calendly, GHL (GoHighLevel), HubSpot Meetings, Acuity, Book Like A Boss, and most other scheduling tools. They can also book directly into Google Calendar or Outlook. During onboarding, we'll confirm your scheduling stack and configure them accordingly.",
    },
    {
        question: 'Can they work US hours?',
        answer: "Yes. Speed-to-lead requires working during your prospects' business hours. We match you with a setter who works your time zone — Eastern, Central, Mountain, or Pacific — so leads are followed up immediately, not the next morning.",
    },
    {
        question: 'How do I give them leads to work?',
        answer: "You can share leads directly from your CRM, funnel, or ad platform — either in real time (via Zapier, webhook, or integration) or through a shared lead sheet they monitor. During onboarding, we'll map out the lead handoff process so your setter can start working leads from day one.",
    },
    {
        question: 'How is this different from a VA handling my calendar?',
        answer: "A general VA can block time and send invites. An appointment setter is trained specifically for the follow-up and persuasion required to get a lead on the phone and booked. They handle objections, re-engage cold leads, and focus entirely on one outcome: a confirmed appointment. That specialization is what moves the needle.",
    },
];

// ─── Component ─────────────────────────────────────────────────────────────

const AppointmentSetter: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);
    const handleSurveyComplete = () => { closeSurvey(); navigate('/booking'); };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <SEO
                title="Hire an Appointment Setter | Lead Follow-Up & Calendar Booking | Five Star Assistants"
                description="Hire a dedicated appointment setter for outbound follow-up, inbound lead response, calendar booking, and CRM management. Fill your calendar without chasing leads yourself. Free placement. Starting at $5/hr."
                keywords="hire appointment setter, virtual appointment setter, outsource lead follow-up, sales calendar booking VA, remote appointment setter, inbound lead response, outbound calling assistant"
                canonical="https://www.fivestarassistants.com/hire/appointment-setter"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* ── Hero ──────────────────────────────────────────────── */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Appointment Setters"
                        headline={
                            <>
                                Hire A Dedicated Appointment Setter.{' '}
                                <span className="text-gold italic">Starting at $5/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Outbound follow-up, inbound lead response, calendar booking, and CRM management —
                                handled daily so your calendar stays full and your closers stay busy.{' '}
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
                                    Everything an Appointment Setter Takes Off Your Plate
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    One dedicated setter who owns your lead follow-up — outbound calls, inbound response, booking, and CRM — so no lead goes cold and no appointment gets missed.
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
                                    Find My Appointment Setter
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
                                    We've removed every friction point from hiring a dedicated setter so you can start filling your calendar without the overhead.
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
                                    Built For Businesses That Sell On Calls
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    If your revenue depends on booked appointments and your leads aren't getting consistent follow-up — a dedicated setter is the highest-leverage hire you can make.
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

                {/* ── Built Around Your Calendar ────────────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">

                            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                                <div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                        WHY FSA FOR APPOINTMENT SETTING
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built Around Your Calendar
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Most businesses generate leads. The breakdown happens in the follow-up — too slow, too inconsistent, or too manual for the volume. Leads go cold, no-shows pile up, and booked calls drop off.</p>
                                        <p>At Five Star Assistants, we match you with a dedicated setter who owns your entire booking process — from first contact to confirmed call — so your calendar fills up and your closers stay focused on closing.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">Book A Discovery Call</Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>
                                <div>
                                    <img src="/images/va-2.png" alt="Appointment setter following up with leads" className="w-full rounded-[2rem] shadow-xl object-cover" />
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
                                Fill The Calendar.{' '}
                                <span className="text-gold italic">Focus On Closing.</span>
                            </h2>
                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us about your sales process and we'll match you with a dedicated appointment setter — in as little as 7 days. No setup fees, no long-term contracts.
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
            <SurveyModal isOpen={isSurveyOpen} onClose={closeSurvey} onComplete={handleSurveyComplete} source="Appointment Setter" />
        </div>
    );
};

export default AppointmentSetter;
