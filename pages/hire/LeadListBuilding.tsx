import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, Users, Award,
    Target, Search, UserCheck, Database,
    ChevronDown, Check,
    FileX, BadgeDollarSign, RefreshCw, CreditCard, Timer,
    TrendingUp, Briefcase, Building,
    Globe, Filter,
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
        icon: Target,
        title: 'ICP Research & List Strategy',
        desc: 'A clearly defined ideal customer profile and a sourcing plan that targets the right companies — before a single contact is pulled.',
        items: [
            'Define and refine your ideal customer profile (ICP) based on your criteria',
            'Identify the best data sources for your target industry, company size, and role',
            'Research niche industries and directories to find untapped prospect pools',
            'Map out decision-maker titles and org structures for your target accounts',
            'Prioritize accounts by firmographic fit before building contact lists',
            'Develop a repeatable research playbook so lists stay consistent over time',
        ],
    },
    {
        icon: Search,
        title: 'Contact Sourcing & Prospecting',
        desc: 'Targeted contacts sourced from the right places — with company name, role, and contact information compiled and ready.',
        items: [
            'Source prospect contacts from LinkedIn, Apollo, ZoomInfo, and public directories',
            'Find company websites, employee pages, and about sections to identify contacts',
            'Build lists segmented by industry, geography, company size, or job function',
            'Source executive contacts and decision-makers at target accounts',
            'Research intent signals and hiring data to identify in-market prospects',
            'Expand prospect lists continuously to keep outreach pipelines full',
        ],
    },
    {
        icon: UserCheck,
        title: 'Contact Verification & Enrichment',
        desc: 'Verified contact details and enriched records — so your outreach lands in real inboxes and your CRM stays clean.',
        items: [
            'Verify email addresses using NeverBounce, Hunter, or similar tools',
            'Confirm direct phone numbers and LinkedIn profile URLs for each contact',
            'Enrich records with company size, revenue, tech stack, and social profiles',
            'Remove outdated contacts and flag records where information cannot be verified',
            'Cross-reference data across multiple sources to maximize accuracy',
            'Add custom enrichment fields relevant to your specific outreach strategy',
        ],
    },
    {
        icon: Database,
        title: 'List Formatting & CRM Upload',
        desc: 'Clean, structured lists in the exact format you need — ready to import, sequence, or hand off to your outreach team.',
        items: [
            'Format lists in your required structure (CSV, Google Sheets, Airtable, etc.)',
            'Import and map contact records directly into your CRM or outreach tool',
            'Tag, segment, and categorize contacts for targeted sequencing',
            'Deduplicate against existing records to avoid contacting the same person twice',
            'Create filtered views and lists by segment for easy access by your sales team',
            'Maintain a master list repository that stays organized as new batches arrive',
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
        icon: Search,
        title: 'Dedicated — Not Shared',
        desc: 'Your list builder works exclusively on your pipeline — not pulling contacts for a queue of other clients.',
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
        title: 'B2B Sales Teams',
        desc: "Your SDRs and AEs need a constant supply of fresh, targeted contacts to work. A dedicated list builder keeps the pipeline stocked — so your reps spend their time on outreach, not on researching who to reach out to.",
    },
    {
        icon: Briefcase,
        title: 'Founders Doing Outbound',
        desc: "You know who you want to reach. You just don't have time to manually pull 500 contacts from LinkedIn every week. A dedicated list builder does it consistently so your outreach never runs dry.",
    },
    {
        icon: Building,
        title: 'Marketing & Outreach Teams',
        desc: "Email campaigns, ABM targeting, and outbound sequences only work with accurate contact data. A specialist builds and maintains your lists so your campaigns reach the right people with the right information.",
    },
];

const pillars = [
    {
        icon: Globe,
        title: 'Outbound Only Works When The List Is Right',
        desc: "Bad lists kill outreach before it starts. Wrong titles, outdated emails, and irrelevant companies mean your sequences land in dead inboxes or get replies from people who will never buy. A dedicated list builder ensures every contact matches your ICP and every email has a real chance of reaching a decision-maker.",
    },
    {
        icon: DollarSign,
        title: 'Save $35k+ vs. a Full-Time List Builder',
        desc: "Sales researchers and list-building specialists in the US cost $40,000–$60,000/year. Our dedicated specialists start at $5/hr — full-time sourcing, verification, and CRM uploads — without the full-time overhead.",
    },
    {
        icon: Filter,
        title: 'A Clean List Is The Highest-ROI Asset In Your Sales Stack',
        desc: "Your CRM is only as useful as the data inside it. Every hour your reps spend on bad contacts is wasted — wasted calls, bounced emails, and pipeline that never closes. A dedicated list builder keeps your data clean, current, and targeted so every outreach effort has the best possible chance of converting.",
    },
];

const faqs = [
    {
        question: 'What sources do they use to find contacts?',
        answer: "LinkedIn (including Sales Navigator), Apollo, Hunter.io, ZoomInfo (if you have access), Crunchbase, industry directories, company websites, and public databases. The exact sources depend on your target market — during onboarding, we'll map out which sources are most relevant for your ICP.",
    },
    {
        question: 'Can they verify email addresses?',
        answer: "Yes. Contact verification is a core part of the role. They use tools like NeverBounce, Hunter, or ZeroBounce to verify email deliverability before adding contacts to your list. This significantly reduces bounce rates and protects your sending domain reputation.",
    },
    {
        question: 'What formats do they deliver lists in?',
        answer: "CSV, Google Sheets, Airtable, Notion, or directly imported into your CRM or outreach tool (Apollo, Instantly, Outreach, HubSpot, Salesforce, etc.). During onboarding, you'll specify your preferred format and any custom fields required.",
    },
    {
        question: 'How many contacts can they build per day or week?',
        answer: "Volume varies based on how specific your ICP is and which sources they're using. For standard B2B lists from LinkedIn and Apollo, most specialists can source and verify 100–300 contacts per day depending on the research complexity. Niche industries or hard-to-find contacts may take longer.",
    },
    {
        question: 'Do they use LinkedIn Sales Navigator or Apollo?',
        answer: "Yes — both are commonly used. If you have existing subscriptions, they'll work within your accounts. If not, we can discuss the best tooling setup during onboarding based on your target market and budget.",
    },
    {
        question: 'Can they build lists for specific niches or industries?',
        answer: "Yes. Niche research is one of the highest-value use cases — finding contacts in specific industries, sub-industries, geographic markets, or with specific technologies in their stack. The more defined your ICP, the more targeted the lists they can build.",
    },
    {
        question: 'How accurate are the lists they deliver?',
        answer: "Accuracy depends on the sources used and verification steps applied. With email verification and cross-referencing, most lists achieve 85–95% deliverability. During onboarding, we'll agree on your accuracy standards and verification process so you know exactly what to expect.",
    },
    {
        question: "What's the difference between this and buying a list?",
        answer: "Bought lists are generic, often outdated, and shared across many buyers — meaning your prospects have already been contacted by dozens of competitors. A dedicated list builder creates custom, targeted lists built specifically for your ICP, verified for accuracy, and never used by anyone else. The quality difference directly impacts your reply rates and conversion.",
    },
];

// ─── Component ─────────────────────────────────────────────────────────────

const LeadListBuilding: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);
    const handleSurveyComplete = () => { closeSurvey(); navigate('/booking'); };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <SEO
                title="Hire a Lead List Building Specialist | B2B Prospect Research & Contact Sourcing | Five Star Assistants"
                description="Hire a dedicated lead list building specialist for B2B prospect research, contact sourcing, email verification, and CRM upload. Keep your outreach pipeline full. Free placement. Starting at $5/hr."
                keywords="hire lead list building specialist, B2B prospect research VA, contact sourcing virtual assistant, outsource list building, LinkedIn list building assistant, email list builder, outbound prospecting specialist"
                canonical="https://www.fivestarassistants.com/hire/lead-list-building"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* ── Hero ──────────────────────────────────────────────── */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Lead List Building Specialists"
                        headline={
                            <>
                                Hire A Dedicated Lead List Builder.{' '}
                                <span className="text-gold italic">Starting at $5/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                ICP research, contact sourcing, email verification, and CRM upload —
                                handled daily so your outreach pipeline never runs dry.{' '}
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
                                    Everything a Lead List Builder Takes Off Your Plate
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    One dedicated specialist who owns your prospect research — ICP strategy, contact sourcing, verification, and delivery — so your team never runs out of targeted leads to work.
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
                                    Find My Lead List Builder
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
                                    We've removed every friction point from hiring a dedicated list builder so your pipeline stays full without the overhead.
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
                                    Built For Teams Running Outbound
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    If your outreach depends on targeted contact data and your team is spending hours manually building lists — a dedicated specialist fixes that immediately.
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

                {/* ── Built Around Your Outbound ────────────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">

                            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                                <div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                        WHY FSA FOR LIST BUILDING
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built Around Your Outbound
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Most teams either buy generic lists — outdated, unverified, shared — or spend hours manually pulling contacts from LinkedIn. Both approaches waste money, time, and sender reputation on contacts that were never going to convert.</p>
                                        <p>At Five Star Assistants, we match you with a dedicated list builder who researches your ICP, sources verified contacts from the right channels, and delivers clean, targeted lists ready for your outreach team — consistently, every week.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">Book A Discovery Call</Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>
                                <div>
                                    <img src="/images/va-2.png" alt="Lead list building specialist at work" className="w-full rounded-[2rem] shadow-xl object-cover" />
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
                                Build The List.{' '}
                                <span className="text-gold italic">Fill The Pipeline.</span>
                            </h2>
                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us about your ICP and outreach process and we'll match you with a dedicated list builder — in as little as 7 days. No setup fees, no long-term contracts.
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
            <SurveyModal isOpen={isSurveyOpen} onClose={closeSurvey} onComplete={handleSurveyComplete} source="Lead List Building" />
        </div>
    );
};

export default LeadListBuilding;
