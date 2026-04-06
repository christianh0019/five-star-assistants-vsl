import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, Users, Award,
    Inbox, Calendar, PenTool, Settings,
    ChevronDown, Check,
    FileX, BadgeDollarSign, RefreshCw, CreditCard, Timer,
    Briefcase, UserCheck, Building,
    TrendingUp, BarChart2, Zap,
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
        icon: Inbox,
        title: 'Inbox Management & Organization',
        desc: 'A clean, triaged inbox delivered to you every morning — so you only see what actually needs your attention.',
        items: [
            'Process your inbox daily using GTD or Inbox Zero methodology',
            'Build a folder and label system to sort, archive, and surface priority messages',
            'Unsubscribe from junk, reduce inbox noise, and manage email notifications',
            'Flag urgent messages and surface action items requiring your same-day attention',
            'Handle routine email replies using approved templates and your established voice',
            'Maintain a clean inbox so every email you open has a reason to be there',
        ],
    },
    {
        icon: Calendar,
        title: 'Calendar Management & Scheduling',
        desc: 'A protected, organized calendar — no double-bookings, no back-and-forth, and always time blocked for deep work.',
        items: [
            'Own your calendar — book, move, decline, and protect time blocks on your behalf',
            'Coordinate scheduling with clients, prospects, and team members across time zones',
            'Handle back-and-forth scheduling via Calendly, Cal.com, or direct email coordination',
            'Set up recurring meetings, standing calls, and review cadences',
            'Send meeting reminders and prep materials to attendees before every call',
            'Resolve scheduling conflicts proactively and communicate changes to all parties',
        ],
    },
    {
        icon: PenTool,
        title: 'Email Drafting & Correspondence',
        desc: 'Outgoing emails drafted in your voice — responses, follow-ups, and routine correspondence handled without you.',
        items: [
            'Draft outgoing emails in your voice, ready for your one-click review and send',
            'Write follow-up sequences for prospects, clients, and vendor relationships',
            'Handle routine responses — meeting requests, vendor inquiries, support questions',
            'Compose professional announcements, status updates, and newsletters',
            'Build and maintain email templates for high-frequency response scenarios',
            'Proofread outgoing communications before they leave your inbox',
        ],
    },
    {
        icon: Settings,
        title: 'Systems & Communication SOPs',
        desc: 'The infrastructure behind a well-run inbox — filters, rules, templates, and clear delegation standards.',
        items: [
            'Build SOPs and response templates for your most common email scenarios',
            'Set up inbox filters, rules, and automation (Gmail filters, Outlook rules)',
            'Create and maintain a contact management system within your email client',
            'Recommend tools to reduce email volume (Slack, Loom, shared inboxes)',
            'Document your communication preferences and delegation rules in writing',
            'Coordinate with other team members on shared inbox standards and protocols',
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
        icon: Inbox,
        title: 'Dedicated — Not Shared',
        desc: 'Your specialist works exclusively for your inbox and calendar — not splitting attention between multiple clients.',
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
        title: 'Entrepreneurs & Business Owners',
        desc: "Your inbox is full and your calendar has no white space. A dedicated email and calendar manager fixes both — so your days start with clarity instead of catching up.",
    },
    {
        icon: UserCheck,
        title: 'Sales Professionals & Consultants',
        desc: 'Client scheduling, prospect follow-ups, and pipeline coordination need to happen without gaps. One specialist focused exclusively on this keeps every ball in the air.',
    },
    {
        icon: Building,
        title: 'Executives & Directors',
        desc: "Your time is worth too much to spend scheduling meetings. A dedicated manager protects your calendar and ensures your inbox doesn't run your day.",
    },
];

const pillars = [
    {
        icon: Inbox,
        title: 'Your Inbox Should Not Be Your To-Do List',
        desc: "An unmanaged inbox creates anxiety, drops follow-ups, and steals focus. A dedicated specialist turns it into a triaged, actionable system — where every email has been processed, prioritized, and handled before it ever reaches you.",
    },
    {
        icon: DollarSign,
        title: 'Save $35k+ vs. a Local Admin Hire',
        desc: 'Hiring someone locally just to manage your inbox and calendar costs $35,000–$50,000/year. Our dedicated specialists start at $5/hr. The same focused expertise, none of the full-time overhead.',
    },
    {
        icon: Zap,
        title: "You Can't Get Time Back — But You Can Protect It",
        desc: 'Most executives spend 3+ hours per day on email and scheduling — tasks that don\'t require their judgment, just their attention. Handing them off permanently is the simplest way to reclaim your working day.',
    },
];

const faqs = [
    {
        question: 'How do they access my email without compromising security?',
        answer: "Through a delegated access setup — no password sharing required. For Gmail, you'll add them as a delegate. For Outlook/Microsoft 365, they're added as a mailbox delegate. They can read, process, and draft emails without ever seeing your password or login credentials.",
    },
    {
        question: 'Do they respond to emails as me, or do I still review drafts?',
        answer: "Your choice. Most clients start with a draft-and-review workflow — they draft replies and you approve before sending. Over time, many clients expand to full send authority for defined categories of email. The scope evolves as trust is established.",
    },
    {
        question: 'What email clients and calendar tools do they work with?',
        answer: 'Gmail, Google Calendar, Microsoft Outlook, Microsoft 365, Apple Mail, and Calendly, Cal.com, Acuity Scheduling, and similar tools. We match you with someone proficient in your existing setup.',
    },
    {
        question: 'What if someone emails about something confidential?',
        answer: "You establish a set of rules during onboarding — specific senders, keywords, or topics that should be flagged and not touched. Everything outside those parameters gets handled by your specialist. Confidentiality expectations are set explicitly before they start.",
    },
    {
        question: 'Can they manage multiple email accounts or shared inboxes?',
        answer: "Yes — managing multiple accounts (e.g., your personal business email + a general info@ inbox) or shared team inboxes is a common part of the role. Setup is handled during onboarding.",
    },
    {
        question: 'How do they handle scheduling across multiple time zones?',
        answer: "They use tools like World Time Buddy, Google Calendar's timezone features, or Calendly's multi-timezone settings to coordinate meetings accurately. You'll never have to think about the math — they handle it.",
    },
    {
        question: 'Will they schedule calls in Calendly or do they do it manually?',
        answer: 'Both, depending on what the situation calls for. For inbound scheduling requests, they can configure and manage your Calendly. For outbound coordination (where you want to send a specific time rather than a booking link), they handle the back-and-forth directly.',
    },
    {
        question: 'How is this different from just using a scheduling tool?',
        answer: "Scheduling tools handle inbound booking. A specialist handles everything else — outbound coordination, conflict resolution, rescheduling, meeting prep, inbox triage, and the judgment calls that a tool can't make. Tools assist; a dedicated specialist owns it.",
    },
];

// ─── Component ─────────────────────────────────────────────────────────────

const CalendarEmailManagement: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);
    const handleSurveyComplete = () => { closeSurvey(); navigate('/booking'); };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <SEO
                title="Hire a Calendar & Email Manager | Inbox Zero & Scheduling | Five Star Assistants"
                description="Hire a dedicated calendar and email manager for inbox management, scheduling coordination, email drafting, and communication systems. Free placement. Starting at $5/hr. Matched in 7 days."
                keywords="hire email manager, calendar management virtual assistant, inbox management assistant, outsource email management, email and calendar assistant, scheduling virtual assistant, inbox zero assistant"
                canonical="https://www.fivestarassistants.com/hire/calendar-email-management"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* ── Hero ──────────────────────────────────────────────── */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Calendar & Email Managers"
                        headline={
                            <>
                                Hire A Dedicated Calendar & Email Manager.{' '}
                                <span className="text-gold italic">Starting at $5/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Inbox zero, organized scheduling, and email drafting —
                                all handled by one specialist so your day starts with clarity, not chaos.{' '}
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
                                    Everything a Calendar & Email Manager Takes Off Your Plate
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    One dedicated specialist who owns your inbox and calendar end-to-end — from daily triage and scheduling to drafting and communication systems.
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
                                    Find My Calendar & Email Manager
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
                                    We've removed every friction point from hiring a remote inbox and calendar specialist so you can focus on your work, not managing the admin layer.
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
                                    Built For People Who Want Their Time Back
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    If your inbox is the first thing you check in the morning and your calendar runs your day — a dedicated specialist flips that dynamic completely.
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

                {/* ── Built Around Your Communication ───────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">

                            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                                <div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                        WHY FSA FOR EMAIL & CALENDAR
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built Around Your Communication
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Most professionals spend 3–5 hours a day on email and scheduling — tasks that require attention but not their expertise. The problem isn't the volume. It's that these tasks are never fully delegated, so they never fully go away.</p>
                                        <p>At Five Star Assistants, we match you with a dedicated email and calendar specialist who takes complete ownership of both — learning your communication style, your scheduling preferences, and your standards — so you never have to touch the inbox unless you want to.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">Book A Discovery Call</Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>
                                <div>
                                    <img src="/images/va-2.png" alt="Calendar and email manager at work" className="w-full rounded-[2rem] shadow-xl object-cover" />
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
                                Take Back Your Inbox.{' '}
                                <span className="text-gold italic">Take Back Your Day.</span>
                            </h2>
                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us how your inbox and calendar look today and we'll match you with a specialist who fixes both — in as little as 7 days. No setup fees, no long-term contracts.
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
            <SurveyModal isOpen={isSurveyOpen} onClose={closeSurvey} onComplete={handleSurveyComplete} source="Calendar & Email" />
        </div>
    );
};

export default CalendarEmailManagement;
