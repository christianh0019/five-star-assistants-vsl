import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, Users, Award,
    Calendar, MessageSquare, FileText, Target,
    ChevronDown, Check,
    FileX, BadgeDollarSign, RefreshCw, CreditCard, UserCheck, Timer,
    Briefcase, TrendingUp, BarChart2,
    Zap, Shield,
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
    { icon: DollarSign, value: '$6/hr',   label: 'Starting Rate' },
    { icon: Users,      value: '1,000+',  label: 'Businesses Served' },
    { icon: Award,      value: 'Top 1%',  label: 'Of Applicants Placed' },
];

const taskCategories = [
    {
        icon: Calendar,
        title: 'Executive Calendar & Travel Management',
        desc: 'Complex scheduling handled completely — your time is protected, your travel is organized, and you\'re never double-booked.',
        items: [
            'Own the executive\'s calendar — scheduling, prioritization, and conflict resolution',
            'Coordinate multi-timezone meeting scheduling with internal and external stakeholders',
            'Book flights, hotels, and ground transport with detailed day-by-day travel itineraries',
            'Manage recurring meetings and ensure prep materials are delivered in advance',
            'Protect focus time blocks and enforce the executive\'s scheduling preferences',
            'Handle last-minute changes and communicate adjustments to all affected parties',
        ],
    },
    {
        icon: MessageSquare,
        title: 'Communications & Correspondence',
        desc: 'Professional, on-brand communication handled on your behalf — so the right messages go out, on time, every time.',
        items: [
            'Draft, proofread, and send emails on behalf of the executive',
            'Manage a high-volume inbox — triage, prioritize, and flag urgent items for attention',
            'Maintain professional communication with clients, board members, and key vendors',
            'Write or edit presentations, memos, and internal announcements',
            'Handle sensitive correspondence with discretion and the right tone',
            'Keep stakeholders informed through timely status updates and follow-ups',
        ],
    },
    {
        icon: FileText,
        title: 'Meeting Preparation & Follow-Through',
        desc: 'Fully prepared before every meeting, and nothing dropped after — your EA owns the full meeting lifecycle.',
        items: [
            'Research meeting attendees, companies, and background context before every call',
            'Prepare agendas, talking points, and supporting materials in advance',
            'Take detailed meeting notes and produce clean, actionable summaries',
            'Track and follow up on action items assigned during meetings on the executive\'s behalf',
            'Coordinate post-meeting deliverables and keep stakeholders accountable',
            'Maintain a running log of open items, decisions made, and upcoming deadlines',
        ],
    },
    {
        icon: Target,
        title: 'Research, Projects & Strategic Support',
        desc: 'Special projects, market research, and high-context tasks — handled with the precision and discretion an executive demands.',
        items: [
            'Conduct market and competitive research to inform business decisions',
            'Manage special projects from initiation through completion with full accountability',
            'Prepare board decks, investor updates, and executive briefings',
            'Research vendors, evaluate options, and present structured recommendations',
            'Build and maintain stakeholder lists, relationship trackers, and CRM data',
            'Handle one-off strategic tasks requiring confidentiality and independent judgment',
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
        desc: 'Recruiting is completely free. You only pay once your EA starts.',
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
        icon: UserCheck,
        title: 'Dedicated — Not Shared',
        desc: 'Your EA works exclusively for you — not splitting attention between multiple executives or clients.',
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
        title: 'Founders & CEOs',
        desc: "Your calendar and inbox are your most valuable assets. An executive assistant protects both — preparing you for every meeting, managing your communications, and ensuring nothing slips.",
    },
    {
        icon: TrendingUp,
        title: 'Senior Executives & VPs',
        desc: 'You operate at a pace where administrative friction adds up fast. Your EA handles the complexity — scheduling, comms, meeting prep, and follow-through — so you can stay focused on what matters.',
    },
    {
        icon: Shield,
        title: 'Investors & High-Volume Consultants',
        desc: 'Deal flow, due diligence coordination, relationship management, travel — your EA manages the operational layer so you can stay focused on the decisions that require your judgment.',
    },
];

const pillars = [
    {
        icon: Zap,
        title: 'The Right Executive Assistant Multiplies Your Output',
        desc: "A great EA isn't just task support. They're a force multiplier — managing your time, anticipating your needs, and ensuring that decisions, commitments, and communications are never dropped. The best ones operate like a business partner, not an admin.",
    },
    {
        icon: DollarSign,
        title: 'Save $50k+ vs. a Full-Time EA',
        desc: 'US-based executive assistants in major markets cost $60,000–$90,000/year — before benefits and overhead. Our dedicated EAs start at $6/hr. Same strategic support, same discretion, none of the full-time burden.',
    },
    {
        icon: BarChart2,
        title: 'Not Just Tasks — Strategic Support That Scales With You',
        desc: "Most VAs handle tasks. Executive assistants handle priorities. The difference is context — knowing which meeting matters, which email to flag, and which vendor to vet — without being told every time. That judgment is what separates an EA from a general assistant.",
    },
];

const faqs = [
    {
        question: 'How is an Executive Assistant different from a General Virtual Assistant?',
        answer: "An EA operates at a higher level of ownership, judgment, and trust. They manage complex calendars, communicate with senior stakeholders, prepare executive briefings, and handle confidential information — not just complete tasks from a list. They anticipate, not just react.",
    },
    {
        question: 'Can they handle confidential information?',
        answer: "Yes. Our EAs are screened for discretion as part of the matching process. All assistants sign NDAs, and we match executives with candidates who have prior experience handling confidential communications, board materials, and sensitive business information.",
    },
    {
        question: 'What happens when they\'re in a different time zone?',
        answer: "We match you with an EA who overlaps with your working hours — typically 8+ hours of overlap. For executives who need someone available during US business hours, we have assistants working those shifts. Timezone coverage is confirmed before any match is made.",
    },
    {
        question: 'What tools do they use for calendar and email management?',
        answer: 'Google Calendar, Outlook, Calendly, Cal.com, Gmail, Microsoft 365, and any other tools in your existing stack. They can also work within your CRM, project management tools, or communication platforms (Slack, Teams, Zoom) as needed.',
    },
    {
        question: 'Can they communicate directly with my clients or board members?',
        answer: "Yes — many EAs send emails, schedule calls, and coordinate logistics directly with external stakeholders on your behalf. You'll establish the scope of what they handle independently vs. what requires your review during onboarding.",
    },
    {
        question: 'How do they get up to speed on my work and priorities?',
        answer: "Through a structured onboarding session where you share your preferences, working style, key stakeholders, and current priorities. Most EAs reach full operational effectiveness within 2–3 weeks. We monitor the onboarding closely and intervene if anything needs adjustment.",
    },
    {
        question: 'What if I need them available outside normal business hours?',
        answer: 'Many of our EAs have flexible schedules and can accommodate early morning, evening, or weekend availability for urgent items. If after-hours coverage is a requirement, we factor that into the matching process from the start.',
    },
    {
        question: 'How quickly can they start after I book a call?',
        answer: 'Most clients are matched with a qualified EA candidate within 3–5 business days of their discovery call. Once you approve the match, your EA can typically start within the same week.',
    },
];

// ─── Component ─────────────────────────────────────────────────────────────

const ExecutiveAssistant: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);
    const handleSurveyComplete = () => { closeSurvey(); navigate('/booking'); };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <SEO
                title="Hire an Executive Assistant | Calendar, Comms & Strategic Support | Five Star Assistants"
                description="Hire a dedicated executive assistant for calendar management, email communications, meeting preparation, and strategic admin support. Free placement. Starting at $6/hr. Matched in 7 days."
                keywords="hire executive assistant, executive assistant virtual assistant, remote executive assistant, outsource executive support, affordable executive assistant, EA for hire, personal assistant for CEO"
                canonical="https://www.fivestarassistants.com/hire/executive-assistant"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* ── Hero ──────────────────────────────────────────────── */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Executive Assistants"
                        headline={
                            <>
                                Hire A Dedicated Executive Assistant.{' '}
                                <span className="text-gold italic">Starting at $6/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Calendar management, executive communications, meeting prep, and strategic support —
                                handled by someone who operates at your level.{' '}
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
                                    Everything an Executive Assistant Takes Off Your Plate
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    One dedicated EA who owns your calendar, communications, meetings, and special projects — with the judgment and discretion an executive requires.
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
                                    Find My Executive Assistant
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
                                    We've removed every friction point from hiring a remote executive assistant so you can focus on leading, not recruiting.
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
                                    Built For Leaders Who Need More Than Task Support
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    An executive assistant isn't just admin help. It's someone who operates at your level and keeps everything moving so you can focus on what only you can do.
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

                {/* ── Built Around Your Priorities ──────────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">

                            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                                <div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                        WHY FSA FOR EXECUTIVE SUPPORT
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built Around Your Priorities
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Most executives either manage their own calendar and inbox — which isn't the best use of their time — or have a local EA who costs $70,000+ per year and still requires significant oversight.</p>
                                        <p>At Five Star Assistants, we match you with a dedicated executive assistant who learns how you work, takes ownership of your schedule and communications, and operates with the discretion and judgment your role demands — at a fraction of what a local hire would cost.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">Book A Discovery Call</Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>
                                <div>
                                    <img src="/images/va-2.png" alt="Executive assistant at work" className="w-full rounded-[2rem] shadow-xl object-cover" />
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
                                The Right Executive Assistant{' '}
                                <span className="text-gold italic">Changes Everything</span>
                            </h2>
                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us how you work and what you need — and we'll match you with a qualified executive assistant in as little as 7 days. No setup fees, no long-term contracts.
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
            <SurveyModal isOpen={isSurveyOpen} onClose={closeSurvey} onComplete={handleSurveyComplete} source="Executive Assistant" />
        </div>
    );
};

export default ExecutiveAssistant;
