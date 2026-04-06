import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, Users, Award,
    Plane, Truck, MapPin, Receipt,
    ChevronDown, Check,
    FileX, BadgeDollarSign, RefreshCw, CreditCard, Timer,
    Briefcase, Building, UserCheck,
    Calendar, Globe,
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
        icon: Plane,
        title: 'Travel Booking & Itinerary Management',
        desc: 'Every trip researched, booked, and documented — so you just show up and everything is already handled.',
        items: [
            'Research and book flights, hotels, rental cars, and ground transportation',
            'Build detailed day-by-day itineraries with all confirmations, contacts, and logistics',
            'Research visa requirements, entry rules, and travel advisories for international trips',
            'Apply loyalty program numbers and maximize points, upgrades, and preferred rates',
            'Monitor booked travel and coordinate rebooking when disruptions or changes occur',
            'Maintain a preferred vendor list and travel preferences profile for repeat bookings',
        ],
    },
    {
        icon: Receipt,
        title: 'Expense Tracking & Reimbursement',
        desc: 'Every receipt collected, every expense categorized, and every report submitted — nothing left pending.',
        items: [
            'Collect, organize, and categorize travel receipts and expense documentation',
            'Build expense reports in your preferred format or tool (Expensify, Concur, spreadsheets)',
            'Verify expense submissions against company policy before submitting for approval',
            'Track outstanding reimbursements and follow up on pending approvals',
            'Reconcile corporate card statements against travel bookings and receipts',
            'Maintain a clean record of all travel spend for budgeting and tax purposes',
        ],
    },
    {
        icon: Truck,
        title: 'Vendor & Supplier Coordination',
        desc: 'Hotel confirmations, supplier shipments, and service vendors — all coordinated without you chasing anyone.',
        items: [
            'Coordinate with hotels, airlines, and car services on reservations and special requests',
            'Manage ongoing vendor relationships and negotiate preferred rates for frequent needs',
            'Coordinate package, equipment, and material shipments for events or relocations',
            'Track delivery schedules and follow up on logistics for time-sensitive shipments',
            'Source and compare vendors for cost, reliability, and service quality',
            'Handle vendor communications, confirmations, and issue resolution end-to-end',
        ],
    },
    {
        icon: MapPin,
        title: 'Event & Meeting Logistics',
        desc: 'Offsites, team events, and client meetings — fully planned, coordinated, and confirmed before the day arrives.',
        items: [
            'Research and book venues for offsites, team events, and client meetings',
            'Coordinate catering, AV setup, accommodation blocks, and transport for group events',
            'Build run-of-show documents and logistics guides for complex multi-day events',
            'Manage RSVPs, attendee lists, and pre-event communications and reminders',
            'Handle last-minute changes, vendor issues, and day-of logistics coordination',
            'Debrief after events to capture what worked and what to improve next time',
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
        desc: 'Recruiting is completely free. You only pay once your coordinator starts.',
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
        icon: Plane,
        title: 'Dedicated — Not Shared',
        desc: 'Your coordinator works exclusively for your business — not managing travel for a pool of other clients.',
    },
    {
        icon: Timer,
        title: 'Full Activity Tracking',
        desc: 'Every assistant uses full-screen tracking software monitored by our in-house HR team.',
    },
];

const whoIsThisFor = [
    {
        icon: Briefcase,
        title: 'Executives & Frequent Travelers',
        desc: 'Multiple trips per month across time zones, with loyalty programs, expense reports, and last-minute changes. Your coordinator handles every detail so travel is never something you have to think about.',
    },
    {
        icon: Building,
        title: 'Operations Teams',
        desc: 'Equipment shipments, vendor scheduling, and team travel that need to be coordinated precisely and on time. Your coordinator owns the logistics layer from booking to delivery.',
    },
    {
        icon: UserCheck,
        title: 'Event-Driven Businesses',
        desc: 'Offsites, client dinners, industry events, and team gatherings — every one requires detailed coordination. Your coordinator handles venue, vendors, and logistics from start to finish.',
    },
];

const pillars = [
    {
        icon: Plane,
        title: 'Travel Coordination Is More Than Booking Flights',
        desc: 'Researching options, applying loyalty programs, building itineraries, tracking changes, handling disruptions, reconciling expenses — the full coordination cycle takes far more time than the booking itself. A dedicated coordinator handles all of it.',
    },
    {
        icon: DollarSign,
        title: 'Save $35k+ vs. a Local Coordinator',
        desc: 'Travel and logistics coordinators in the US cost $40,000–$65,000/year. Our specialists start at $5/hr. The same organized, detail-oriented support at a fraction of the cost.',
    },
    {
        icon: Globe,
        title: 'Every Detail Handled Before You Even Ask',
        desc: "Great travel coordination means you never have to ask 'did you book the hotel?' or 'what's my confirmation number?' — because everything is already done, documented, and sitting in your itinerary before you board.",
    },
];

const faqs = [
    {
        question: 'What tools do they use for booking?',
        answer: 'Google Flights, Kayak, Booking.com, Expedia, direct airline and hotel sites, and corporate travel tools like TripActions or Concur if you use them. They optimize for your preferences — points programs, preferred airlines, budget parameters — not just the cheapest option.',
    },
    {
        question: 'Can they book international travel and handle visa research?',
        answer: "Yes. International travel coordination includes researching entry requirements, visa applications, travel advisories, and health requirements for each destination. They'll surface everything you need to know and coordinate any documentation requirements well in advance.",
    },
    {
        question: 'What happens if there\'s a last-minute flight change or cancellation?',
        answer: "They monitor your booked travel for schedule changes and handle rebooking proactively when disruptions occur. For urgent same-day issues, they coordinate directly with airlines or hotels and communicate your updated itinerary as quickly as possible.",
    },
    {
        question: 'Can they manage expense reports and receipts?',
        answer: "Yes — expense management is a core part of the role. They collect receipts, categorize expenses, build reports, and submit them in whatever format or platform your company uses (Expensify, Concur, Excel, Google Sheets).",
    },
    {
        question: 'Do they work within our company\'s travel policy?',
        answer: "Absolutely. You share your travel policy during onboarding — budget limits, preferred vendors, booking lead times, approval workflows — and they apply it consistently to every booking. No policy exceptions without your approval.",
    },
    {
        question: 'Can they coordinate travel for multiple people at once?',
        answer: "Yes. Group travel coordination — aligning flights, hotels, and ground transport for multiple travelers — is a common use case. They manage each person's bookings, preferences, and documentation and keep everyone's itineraries synchronized.",
    },
    {
        question: 'Can they also coordinate non-travel logistics like shipments?',
        answer: "Yes. Equipment shipping, material deliveries, and vendor logistics are part of the role. They coordinate scheduling, track shipments, follow up on delivery confirmations, and manage any issues — the same attention they bring to travel bookings.",
    },
    {
        question: 'What if I need them available for urgent travel issues outside business hours?',
        answer: "Many of our coordinators have flexible availability and can handle urgent issues outside standard hours for time-sensitive situations. If after-hours coverage is a requirement, we factor that into the matching process from the start.",
    },
];

// ─── Component ─────────────────────────────────────────────────────────────

const TravelLogistics: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);
    const handleSurveyComplete = () => { closeSurvey(); navigate('/booking'); };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <SEO
                title="Hire a Travel & Logistics Coordinator | Booking, Expenses & Event Logistics | Five Star Assistants"
                description="Hire a dedicated travel and logistics coordinator for travel booking, itinerary management, expense tracking, and event logistics. Free placement. Starting at $5/hr. Matched in 7 days."
                keywords="hire travel coordinator, travel virtual assistant, logistics coordinator for hire, outsource travel management, expense management virtual assistant, event logistics assistant, travel booking assistant"
                canonical="https://www.fivestarassistants.com/hire/travel-logistics"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* ── Hero ──────────────────────────────────────────────── */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Travel & Logistics Coordinators"
                        headline={
                            <>
                                Hire A Dedicated Travel & Logistics Coordinator.{' '}
                                <span className="text-gold italic">Starting at $5/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Travel booking, itinerary management, expense tracking, and event logistics —
                                all handled so every trip and shipment runs without a hitch.{' '}
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
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">WHAT THEY HANDLE</h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    Everything a Travel & Logistics Coordinator Takes Off Your Plate
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    One dedicated coordinator who manages every trip, shipment, and event from start to finish — so you just show up.
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
                                <Button onClick={openSurvey} variant="primary">Find My Travel & Logistics Coordinator</Button>
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
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">WHY FIVE STAR ASSISTANTS</h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">Everything Included. Zero Hassle.</h2>
                                <p className="font-body text-lg text-blue-100/70 max-w-xl mx-auto">
                                    We've removed every friction point from hiring a dedicated remote coordinator so your logistics run smoothly without you managing them.
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
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">WHO THIS IS FOR</h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    Built For People Who Move Fast And Need The Details Handled
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    If travel coordination, expense reports, or logistics coordination eats time your team doesn't have — a dedicated specialist handles it completely.
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

                {/* ── Built Around Your Logistics ───────────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                                <div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">WHY FSA FOR TRAVEL & LOGISTICS</h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built Around Your Logistics
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Most executives and operations teams manage travel and logistics themselves — bouncing between booking sites, chasing receipts, and rebuilding itineraries when flights change. It works, but it shouldn't require their time.</p>
                                        <p>At Five Star Assistants, we match you with a dedicated coordinator who learns your preferences, follows your travel policy, and handles every booking, expense report, and logistical detail — so travel and logistics become something you never have to think about again.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">Book A Discovery Call</Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>
                                <div>
                                    <img src="/images/va-2.png" alt="Travel coordinator at work" className="w-full rounded-[2rem] shadow-xl object-cover" />
                                </div>
                            </div>
                            <div className="text-center mb-12">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">THREE REASONS TO CHOOSE FSA</h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy">Why Businesses Trust Five Star Assistants</h2>
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
                                You Shouldn't Be Managing{' '}
                                <span className="text-gold italic">Your Own Travel</span>
                            </h2>
                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us how often you travel and what you need coordinated — and we'll match you with a qualified specialist in as little as 7 days. No setup fees, no long-term contracts.
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
            <SurveyModal isOpen={isSurveyOpen} onClose={closeSurvey} onComplete={handleSurveyComplete} source="Travel & Logistics" />
        </div>
    );
};

export default TravelLogistics;
