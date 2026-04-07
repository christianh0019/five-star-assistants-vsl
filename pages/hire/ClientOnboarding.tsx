import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, Users, Award,
    UserCheck, FileText, BookOpen, CheckSquare,
    ChevronDown, Check,
    FileX, BadgeDollarSign, RefreshCw, CreditCard, Timer,
    TrendingUp, Briefcase, Building,
    Star, AlertCircle,
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
        icon: UserCheck,
        title: 'Welcome & Kickoff Coordination',
        desc: "A fast, professional welcome that makes every new client feel like they made the right decision — before the work even begins.",
        items: [
            'Send personalized welcome emails to new clients immediately after signing',
            'Schedule kickoff calls and orientation sessions within the first 24 hours',
            'Introduce clients to their point of contact, team, and communication channels',
            'Confirm service scope, timeline, and first deliverables with every new client',
            'Set clear expectations for response times, check-in cadence, and milestones',
            'Create and share a new client welcome packet tailored to their service tier',
        ],
    },
    {
        icon: FileText,
        title: 'Onboarding Documentation & Setup',
        desc: 'Contracts signed, forms submitted, accounts created — every administrative step completed before the kickoff call so onboarding starts clean.',
        items: [
            'Send and track contracts, NDAs, and service agreements through to completion',
            'Collect and process intake forms, questionnaires, and project briefs',
            'Set up client accounts, project boards, and shared workspaces',
            'Create client records in your CRM with all relevant onboarding information',
            'Coordinate with your team to provision access, tools, and systems for new clients',
            'Verify that all required documentation is received and complete before kickoff',
        ],
    },
    {
        icon: BookOpen,
        title: 'Training & Resource Delivery',
        desc: 'Guides, tutorials, and resources delivered at the right time — so clients know how to use your product or service from day one.',
        items: [
            'Send onboarding guides, how-to documents, and training materials on schedule',
            'Walk clients through product features, portal navigation, or service processes',
            'Schedule and coordinate training sessions or product walkthroughs',
            'Share video tutorials, knowledge base articles, and FAQ resources proactively',
            'Create onboarding checklists clients can track as they complete each step',
            'Follow up to confirm clients have reviewed and understood key resources',
        ],
    },
    {
        icon: CheckSquare,
        title: 'Progress Tracking & Check-Ins',
        desc: 'Regular check-ins that catch problems early, confirm progress, and keep clients engaged — before small issues become reasons to churn.',
        items: [
            'Conduct scheduled check-in calls or emails at key onboarding milestones',
            'Track onboarding progress for each client against a standard completion checklist',
            'Flag clients who are behind on onboarding steps for proactive outreach',
            'Collect early feedback to identify any friction or confusion in the experience',
            'Escalate at-risk clients to the account manager or team lead immediately',
            'Document onboarding completion and transition clients smoothly to steady-state',
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
        icon: UserCheck,
        title: 'Dedicated — Not Shared',
        desc: 'Your onboarding specialist works exclusively on your clients — not juggling onboarding for a queue of other businesses.',
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
        title: 'Agencies & Consultants',
        desc: "The handoff from sales to delivery is where clients form their first real impression of working with you. A dedicated onboarding specialist ensures every new client is welcomed quickly, set up completely, and kicked off professionally — so the relationship starts strong.",
    },
    {
        icon: Building,
        title: 'SaaS Companies',
        desc: "Users who don't onboard properly never reach the value moment — and they churn before they ever do. A dedicated onboarding specialist guides every new user through setup, training, and early milestones so activation rates go up and early churn goes down.",
    },
    {
        icon: TrendingUp,
        title: 'Coaches & Service Providers',
        desc: "Your client experience starts the moment they sign — not the moment you deliver. A specialist handles the administrative and communication layer of onboarding so every new client feels taken care of while you focus on delivering the actual work.",
    },
];

const pillars = [
    {
        icon: Star,
        title: 'The Onboarding Experience Sets The Tone For Everything',
        desc: "Clients form their opinion of your business in the first 48 hours after signing. A slow welcome, a missing contract, or a chaotic kickoff call signals disorganization — and starts the relationship on shaky ground. A dedicated onboarding specialist ensures every new client gets a fast, professional, and seamless first experience.",
    },
    {
        icon: DollarSign,
        title: 'Save $40k+ vs. a US-Based Onboarding Specialist',
        desc: "Customer success and onboarding specialists in the US cost $50,000–$70,000/year. Our dedicated specialists start at $5/hr — full-time welcome coordination, documentation, training delivery, and progress tracking — without the full-time overhead.",
    },
    {
        icon: AlertCircle,
        title: 'Poor Onboarding Is The #1 Driver Of Early Churn',
        desc: "Clients who don't complete onboarding don't stick around. They either feel lost, feel unsupported, or never reach the value they expected — and they leave before you've had a real chance to deliver. A dedicated onboarding specialist keeps every client moving through the process and catches problems before they become cancellations.",
    },
];

const faqs = [
    {
        question: 'What does a client onboarding specialist actually do?',
        answer: "They own the administrative and communication layer of your onboarding process — from welcome email to completed setup. They coordinate contracts, collect intake forms, set up accounts, deliver resources, schedule kickoff calls, and track progress for every new client so nothing falls through the cracks during the most critical phase of the relationship.",
    },
    {
        question: 'What tools and platforms do they work in?',
        answer: "HubSpot, Salesforce, Notion, Monday.com, Asana, ClickUp, Google Workspace, DocuSign, PandaDoc, Slack, Zoom, and most other CRM, project management, and communication platforms. We'll match you with a specialist whose tool experience matches your stack.",
    },
    {
        question: 'Can they send contracts and collect signatures?',
        answer: "Yes. Sending, tracking, and following up on unsigned contracts via DocuSign, PandaDoc, HelloSign, or similar tools is a standard part of the role. They monitor completion status and follow up with clients who haven't signed within your required window.",
    },
    {
        question: 'How do they personalize the onboarding experience?',
        answer: "During onboarding setup, you'll provide templates, scripts, and guides for them to customize based on client type, service tier, or use case. Over time, they develop familiarity with your client segments and adapt communication accordingly. You maintain control over the core content; they execute it at scale.",
    },
    {
        question: 'Can they handle multiple new clients at once?',
        answer: "Yes — managing multiple concurrent onboarding processes is a core part of the role. They track each client's progress on a shared checklist or project board so nothing gets missed regardless of how many clients are onboarding simultaneously.",
    },
    {
        question: 'What happens if a client is unresponsive during onboarding?',
        answer: "They follow up with a structured re-engagement sequence — email, then phone, then escalation to the account manager if needed. During onboarding setup, you'll define your preferred escalation timeline and communication cadence so they always know when to push harder versus when to loop in your team.",
    },
    {
        question: 'Can they also handle ongoing client communication after onboarding is complete?',
        answer: "Yes — many clients have their onboarding specialist transition into an ongoing client success or account management support role after the initial onboarding period. If you want to expand the scope over time, we can discuss that during the matching process.",
    },
    {
        question: 'How do I measure whether onboarding is going well?',
        answer: "Key metrics include time-to-first-value, onboarding completion rate, kickoff call attendance, and early satisfaction scores. Your specialist tracks progress on each client against a standard onboarding checklist and delivers regular reports so you always know where each new client stands.",
    },
];

// ─── Component ─────────────────────────────────────────────────────────────

const ClientOnboarding: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);
    const handleSurveyComplete = () => { closeSurvey(); navigate('/booking'); };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <SEO
                title="Hire a Client Onboarding Specialist | New Client Setup & Welcome Coordination | Five Star Assistants"
                description="Hire a dedicated client onboarding specialist for welcome coordination, contract management, training delivery, and progress tracking. Give every new client a five-star first experience. Free placement. Starting at $5/hr."
                keywords="hire client onboarding specialist, customer onboarding virtual assistant, outsource client onboarding, new client setup VA, customer success assistant, onboarding coordinator virtual assistant"
                canonical="https://www.fivestarassistants.com/hire/client-onboarding"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* ── Hero ──────────────────────────────────────────────── */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Client Onboarding Specialists"
                        headline={
                            <>
                                Hire A Dedicated Onboarding Specialist.{' '}
                                <span className="text-gold italic">Starting at $5/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Welcome coordination, contract management, training delivery, and progress tracking —
                                handled from day one so every new client gets a fast, professional first experience.{' '}
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
                                    Everything an Onboarding Specialist Takes Off Your Plate
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    One dedicated specialist who owns your new client experience — welcome coordination, contracts, training, and check-ins — so every client starts fast and stays engaged.
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
                                    Find My Onboarding Specialist
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
                                    We've removed every friction point from hiring a dedicated onboarding specialist so your new clients get an exceptional first experience from day one.
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
                                    Built For Businesses That Know Retention Starts On Day One
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    If new clients feel confused, unsupported, or slow to get started — a dedicated onboarding specialist fixes the experience before it becomes a churn problem.
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

                {/* ── Built Around Your Client Experience ───────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">

                            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                                <div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                        WHY FSA FOR CLIENT ONBOARDING
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built Around Your Client Experience
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Most businesses treat onboarding as an afterthought — a checklist that gets done when someone has time. New clients wait days for their welcome email, kickoff calls get delayed, and the first week sets a tone of disorganization that's hard to recover from.</p>
                                        <p>At Five Star Assistants, we match you with a dedicated onboarding specialist who runs a consistent, professional process for every new client — so the first impression is always strong, setup is always complete, and clients start seeing value as fast as possible.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">Book A Discovery Call</Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>
                                <div>
                                    <img src="/images/va-2.png" alt="Client onboarding specialist welcoming new clients" className="w-full rounded-[2rem] shadow-xl object-cover" />
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
                                Give Every Client A{' '}
                                <span className="text-gold italic">Five-Star First Experience.</span>
                            </h2>
                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us about your onboarding process and we'll match you with a dedicated specialist — in as little as 7 days. No setup fees, no long-term contracts.
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
            <SurveyModal isOpen={isSurveyOpen} onClose={closeSurvey} onComplete={handleSurveyComplete} source="Client Onboarding" />
        </div>
    );
};

export default ClientOnboarding;
