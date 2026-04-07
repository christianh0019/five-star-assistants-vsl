import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, Users, Award,
    Settings, Database, BarChart2, Zap,
    ChevronDown, Check,
    FileX, BadgeDollarSign, RefreshCw, CreditCard, Timer,
    TrendingUp, Briefcase, Building,
    Target, Globe,
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
        icon: Settings,
        title: 'CRM Setup & Configuration',
        desc: 'A CRM built around how your team actually sells — with the right pipelines, stages, fields, and views from day one.',
        items: [
            'Build and configure pipelines, deal stages, and custom fields for your process',
            'Set up contact and company views, filters, and saved segments by rep or region',
            'Create and organize deal cards, custom properties, and activity log templates',
            'Configure user permissions, roles, and data access controls for your team',
            'Migrate data from spreadsheets or other CRMs during tool transitions',
            'Audit and restructure existing CRM setup for clarity and reporting accuracy',
        ],
    },
    {
        icon: Database,
        title: 'Contact & Record Maintenance',
        desc: 'Accurate, up-to-date records across every contact, company, and deal — so your CRM reflects reality.',
        items: [
            'Add, update, and deduplicate contact and company records continuously',
            'Enrich records with current job titles, company info, and contact details',
            'Log meeting notes, call outcomes, and email history against the right records',
            'Archive or merge outdated records to maintain database accuracy',
            'Import new contacts from lead lists, events, or form submissions',
            'Standardize field formats across all records for consistent reporting',
        ],
    },
    {
        icon: BarChart2,
        title: 'Pipeline Tracking & Reporting',
        desc: 'A live view of your pipeline you can actually trust — with weekly reports, deal tracking, and visibility into where things stand.',
        items: [
            'Monitor deal stages and flag stalled opportunities for immediate follow-up',
            'Track close dates, deal values, and weighted pipeline totals by rep and team',
            'Produce weekly pipeline reports with stage-by-stage breakdowns',
            'Build dashboards and saved views for sales reps and leadership',
            'Track deal velocity and identify bottlenecks where deals consistently stall',
            'Reconcile closed deals against forecasts for accurate revenue reporting',
        ],
    },
    {
        icon: Zap,
        title: 'Automation & Workflow Management',
        desc: 'Workflows that run in the background — so your team gets the right tasks at the right time without manual reminders.',
        items: [
            'Build and maintain workflow automations (task assignments, stage triggers, alerts)',
            'Set up email sequences and follow-up tasks triggered by pipeline events',
            'Configure lead routing rules and round-robin assignment logic',
            'Connect CRM to other tools via native integrations or Zapier',
            'Maintain and update automations as your sales process evolves',
            'Document all automation logic and workflow SOPs for team reference',
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
        icon: Database,
        title: 'Dedicated — Not Shared',
        desc: 'Your CRM specialist works exclusively on your system — not maintaining pipelines for a queue of other clients.',
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
        title: 'Sales Teams',
        desc: "Your CRM is supposed to give you visibility into the pipeline — but if records are incomplete, deals are in the wrong stages, and data hasn't been updated in weeks, it's useless. A dedicated CRM specialist keeps it current so your pipeline reviews actually reflect reality.",
    },
    {
        icon: Briefcase,
        title: 'Founders & Agency Owners',
        desc: "You're paying for a CRM but nobody has time to maintain it properly. Deals get logged manually (or not at all), contacts are outdated, and reporting doesn't match what's actually happening. A specialist fixes and maintains all of it.",
    },
    {
        icon: TrendingUp,
        title: 'Operations Teams',
        desc: "You need the CRM to function as the single source of truth across sales, marketing, and service — but that only works if the data is clean and the system is set up correctly. A dedicated admin keeps everything accurate and the automations running.",
    },
];

const pillars = [
    {
        icon: Database,
        title: 'A CRM Nobody Maintains Is A CRM Nobody Trusts',
        desc: 'When your CRM is full of outdated records, stalled deals in wrong stages, and missing activity logs — your team stops using it. And when they stop using it, you lose visibility into your pipeline entirely. A dedicated CRM specialist maintains it daily so the data stays accurate and your team stays engaged with the system.',
    },
    {
        icon: DollarSign,
        title: 'Save $40k+ vs. a US-Based CRM Administrator',
        desc: "CRM administrators and sales operations specialists in the US cost $50,000–$80,000/year. Our dedicated specialists start at $5/hr — full-time CRM maintenance, pipeline tracking, automations, and reporting — without the full-time overhead.",
    },
    {
        icon: Target,
        title: 'Clean Data Changes How You Make Decisions',
        desc: "Bad pipeline data leads to bad forecasts, bad resource decisions, and bad hiring choices. When your CRM is accurate, you can trust your numbers — and make strategic decisions based on what's actually happening in your business rather than what you think is happening.",
    },
];

const faqs = [
    {
        question: 'What CRMs do they work in?',
        answer: "HubSpot, Salesforce, Pipedrive, Close, Zoho CRM, Monday.com (CRM module), GoHighLevel, Copper, and most other modern CRM platforms. During onboarding, we'll confirm your CRM and match you with a specialist who has direct experience with it.",
    },
    {
        question: 'Can they migrate our data from a spreadsheet or another CRM?',
        answer: "Yes. Data migration is one of the most common use cases — moving contacts, deals, and history from spreadsheets, legacy CRMs, or other tools into your current platform. They map fields, clean data before import, and verify accuracy after migration.",
    },
    {
        question: 'Can they build automations and workflows?',
        answer: "Yes. Building and maintaining workflow automations — task triggers, stage-based notifications, lead routing, and follow-up sequences — is a core part of the role. They can also build Zapier automations to connect your CRM to other tools in your stack.",
    },
    {
        question: 'How do they stay current on deal activity without attending our sales calls?',
        answer: "They work from your existing records, rep notes, email logs, and activity history. Many clients give their specialist access to call recording tools (Gong, Chorus, Fireflies) so they can log notes without requiring reps to write them manually. The onboarding process clarifies exactly how activity gets captured.",
    },
    {
        question: 'Can they run reporting and build dashboards?',
        answer: "Yes — pipeline reports, conversion rate dashboards, deal velocity tracking, and rep activity summaries are all common deliverables. They'll produce reports on whatever schedule you need (daily, weekly, monthly) in whatever format is most useful for your leadership team.",
    },
    {
        question: 'Do they need admin access to set everything up?',
        answer: "For setup, configuration, and automation work — yes, admin access is typically required. For ongoing maintenance and data entry, standard user access may be sufficient depending on your CRM. During onboarding, we'll align on what access level is needed and how to provision it securely.",
    },
    {
        question: 'How is this different from using our sales ops person?',
        answer: "Sales ops typically handles strategy, tooling decisions, and cross-functional coordination. A CRM specialist handles the day-to-day execution — data entry, record maintenance, pipeline tracking, and report generation — so your sales ops person can focus on higher-level work instead of manual CRM upkeep.",
    },
    {
        question: 'What if our CRM is a complete mess right now?',
        answer: "That's one of the most common situations we onboard into. The first phase is typically an audit — reviewing what's in the system, what's outdated, what's missing, and what needs to be restructured. From there, the specialist creates a cleanup plan and works through it systematically before shifting to ongoing maintenance.",
    },
];

// ─── Component ─────────────────────────────────────────────────────────────

const CRMManagement: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);
    const handleSurveyComplete = () => { closeSurvey(); navigate('/booking'); };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <SEO
                title="Hire a CRM Management Specialist | CRM Admin, Pipeline Tracking & Automation | Five Star Assistants"
                description="Hire a dedicated CRM management specialist for data entry, pipeline tracking, workflow automation, and reporting. Keep your CRM accurate and your pipeline visible. Free placement. Starting at $5/hr."
                keywords="hire CRM specialist, CRM management virtual assistant, HubSpot admin VA, Salesforce data entry assistant, pipeline management specialist, CRM automation VA, outsource CRM management"
                canonical="https://www.fivestarassistants.com/hire/crm-management"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* ── Hero ──────────────────────────────────────────────── */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="CRM Management Specialists"
                        headline={
                            <>
                                Hire A Dedicated CRM Specialist.{' '}
                                <span className="text-gold italic">Starting at $5/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                CRM setup, data maintenance, pipeline tracking, and workflow automation —
                                handled daily so your CRM actually reflects what's happening in your business.{' '}
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
                                    Everything a CRM Specialist Takes Off Your Plate
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    One dedicated specialist who owns your CRM — setup, data, pipeline tracking, and automations — so your system stays accurate and your team stays focused on selling.
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
                                    Find My CRM Specialist
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
                                    We've removed every friction point from hiring a dedicated CRM specialist so you can get your system under control without the overhead.
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
                                    Built For Teams That Need A CRM They Can Trust
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    If your CRM isn't being maintained consistently — and your pipeline data doesn't match reality — a dedicated specialist changes that.
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

                {/* ── Built Around Your CRM ─────────────────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">

                            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                                <div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                        WHY FSA FOR CRM MANAGEMENT
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built Around Your CRM
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Most teams have a CRM that nobody fully maintains. Records go stale, deals sit in the wrong stages, automations break, and reporting becomes unreliable. Eventually the team stops trusting the system — and the data inside it.</p>
                                        <p>At Five Star Assistants, we match you with a dedicated CRM specialist who maintains your system daily — keeping records accurate, pipelines current, and automations running — so your CRM becomes something your team actually relies on.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">Book A Discovery Call</Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>
                                <div>
                                    <img src="/images/va-2.png" alt="CRM management specialist maintaining pipeline" className="w-full rounded-[2rem] shadow-xl object-cover" />
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
                                Fix Your CRM.{' '}
                                <span className="text-gold italic">Trust Your Pipeline.</span>
                            </h2>
                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us about your CRM and we'll match you with a dedicated specialist — in as little as 7 days. No setup fees, no long-term contracts.
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
            <SurveyModal isOpen={isSurveyOpen} onClose={closeSurvey} onComplete={handleSurveyComplete} source="CRM Management" />
        </div>
    );
};

export default CRMManagement;
