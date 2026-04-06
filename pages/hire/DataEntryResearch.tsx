import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, Users, Award,
    Database, Search, BarChart2, Filter,
    ChevronDown, Check,
    FileX, BadgeDollarSign, RefreshCw, CreditCard, Timer,
    TrendingUp, Briefcase, Building,
    Globe, Target,
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
        icon: Database,
        title: 'Data Entry & Database Management',
        desc: 'Accurate records, maintained consistently — so your databases, CRMs, and spreadsheets stay usable.',
        items: [
            'Enter, update, and maintain records in CRMs, spreadsheets, and databases',
            'Import, export, and format data across tools (CSV, Excel, Google Sheets, Airtable)',
            'Build and maintain contact databases, product catalogs, and inventory records',
            'Clean and deduplicate existing datasets to ensure data integrity across systems',
            'Create data entry templates and SOPs for repeatable, consistent processes',
            'Validate and cross-reference data for accuracy before entry or migration',
        ],
    },
    {
        icon: Search,
        title: 'Web Research & Lead Research',
        desc: 'Targeted prospect lists, vendor comparisons, and sourced data — compiled and delivered, ready to use.',
        items: [
            'Research companies, executives, and prospects for outbound sales outreach',
            'Build targeted lead lists with verified contact information from public sources',
            'Find and compile data from directories, databases, LinkedIn, and industry sites',
            'Research competitors — pricing, features, positioning, and market presence',
            'Source vendor options, service providers, and pricing for purchasing decisions',
            'Conduct industry and market scans to identify trends and opportunities',
        ],
    },
    {
        icon: BarChart2,
        title: 'Market & Competitive Research',
        desc: 'Structured intelligence reports that give you a clear picture of your market, your competitors, and your opportunities.',
        items: [
            'Analyze competitors and produce structured competitive intelligence summaries',
            'Research market size, trends, and growth signals in your target industry',
            'Gather and synthesize customer reviews, forums, and public sentiment data',
            'Compile media coverage, press releases, and news on key competitors and players',
            'Research potential acquisition targets, partners, or investment opportunities',
            'Produce research briefs and one-pagers sourced from multiple inputs',
        ],
    },
    {
        icon: Filter,
        title: 'Data Cleaning & Organization',
        desc: 'Messy data fixed, standardized, and organized — so the systems that depend on it actually work.',
        items: [
            'Audit and clean spreadsheets and databases for errors, gaps, and inconsistencies',
            'Standardize formatting across datasets (dates, phone numbers, addresses, names)',
            'Remove duplicates, fill missing fields, and merge fragmented records',
            'Organize and tag content libraries, media files, and document archives',
            'Build reporting views and dashboards in Google Sheets, Airtable, or Notion',
            'Migrate data between tools accurately and without loss during system transitions',
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
        desc: 'Your specialist works exclusively for your business — not managing data for a queue of other clients.',
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
        title: 'Sales & Marketing Teams',
        desc: "You need clean lead lists, accurate CRM records, and competitor research — but you can't have high-paid team members doing manual data work. A specialist handles it so your team can focus on selling.",
    },
    {
        icon: Building,
        title: 'Operations & Admin Teams',
        desc: 'Someone needs to maintain the databases, clean the spreadsheets, and keep records current. This role was built for exactly that — structured, accurate, and without errors.',
    },
    {
        icon: Briefcase,
        title: 'Consultants & Agencies',
        desc: 'Client research, competitive analysis, and market scans — the background work that needs to be done well and fast before the real work starts. Your specialist handles the research layer.',
    },
];

const pillars = [
    {
        icon: Target,
        title: 'Decisions Are Only As Good As Your Data',
        desc: 'Bad data creates real downstream costs — wrong outreach, missed leads, inaccurate reports, and broken workflows. A dedicated data specialist keeps your records accurate, current, and usable so everything downstream works the way it should.',
    },
    {
        icon: DollarSign,
        title: 'Save $40k+ vs. a Full-Time Research Analyst',
        desc: 'Research analysts and data coordinators in the US cost $45,000–$70,000/year. Our dedicated specialists start at $5/hr. Full-time output — data entry, research, cleaning, and reporting — none of the full-time overhead.',
    },
    {
        icon: Globe,
        title: 'Every Hour Spent on Data Entry Is An Hour Not Spent on Growth',
        desc: "Data entry and research are important — but they don't require senior judgment. Delegating them to a specialist means your team stays focused on the work only they can do, while the data layer gets handled properly by someone who specializes in exactly this.",
    },
];

const faqs = [
    {
        question: 'What tools and platforms do they work in?',
        answer: 'Google Sheets, Microsoft Excel, Airtable, Notion, HubSpot, Salesforce, Monday.com, Zoho CRM, and most other databases or CRMs. For web research, they use LinkedIn Sales Navigator, Apollo, ZoomInfo (if you have access), and public directories. We match based on your existing stack.',
    },
    {
        question: 'Can they build lead lists from scratch?',
        answer: "Yes — building targeted prospect lists is one of the most common use cases. They research companies and contacts matching your ICP (industry, size, role, location), verify contact information where possible, and deliver a structured list ready for outreach. Volume and sourcing method depend on the tools available.",
    },
    {
        question: "What's their accuracy rate on data entry tasks?",
        answer: "We match you with specialists who have demonstrated high accuracy in previous roles. Most clients establish a spot-check process during the first few weeks to calibrate. If accuracy issues emerge, we adjust the match or add a QA step to the workflow.",
    },
    {
        question: 'Can they handle confidential data securely?',
        answer: "Yes. All assistants sign NDAs and receive access only to the specific systems and data required for their tasks. Access is granted through role-based permissions — not shared credentials — so you maintain control over what they can see.",
    },
    {
        question: 'What types of research can they conduct?',
        answer: "Web research, competitive analysis, lead and prospect research, vendor evaluation, market sizing, product research, news and media monitoring, customer review analysis, and general background research. If the information is publicly available, they can find and compile it.",
    },
    {
        question: 'How do they deliver research results?',
        answer: "In whatever format works best for you — Google Sheets, Notion tables, Airtable bases, Word/Google Docs, or formatted PDFs. During onboarding, you'll specify the output format and structure so every deliverable arrives the same way.",
    },
    {
        question: 'Can they do both data entry and research, or do I need two people?',
        answer: "One specialist can handle both. Data entry and research are naturally complementary — they research contacts, then enter them into your CRM. Or they clean your existing database while sourcing new records to fill gaps. Most clients use a single specialist for both.",
    },
    {
        question: 'How is this different from using a data scraping tool or AI?',
        answer: "Automated tools and AI are fast but lack judgment — they can't verify accuracy, resolve ambiguous records, apply business logic, or adapt to edge cases. A human specialist catches errors, uses judgment on borderline cases, and delivers clean, verified data — not raw output that still needs cleaning.",
    },
];

// ─── Component ─────────────────────────────────────────────────────────────

const DataEntryResearch: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);
    const handleSurveyComplete = () => { closeSurvey(); navigate('/booking'); };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <SEO
                title="Hire a Data Entry & Research Specialist | Lead Lists & Database Management | Five Star Assistants"
                description="Hire a dedicated data entry and research specialist for lead list building, CRM data management, competitive research, and database cleaning. Free placement. Starting at $5/hr. Matched in 7 days."
                keywords="hire data entry specialist, research virtual assistant, lead list building VA, outsource data entry, CRM data entry specialist, competitive research assistant, database management virtual assistant"
                canonical="https://www.fivestarassistants.com/hire/data-entry"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* ── Hero ──────────────────────────────────────────────── */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Data Entry & Research Specialists"
                        headline={
                            <>
                                Hire A Dedicated Data Entry & Research Specialist.{' '}
                                <span className="text-gold italic">Starting at $5/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Lead list building, CRM data management, competitive research, and database cleaning —
                                handled accurately by someone who lives in spreadsheets.{' '}
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
                                    Everything a Data & Research Specialist Takes Off Your Plate
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    One dedicated specialist who owns your data layer — entry, research, cleaning, and organization — so your systems stay accurate and your team stays focused.
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
                                    Find My Data & Research Specialist
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
                                    We've removed every friction point from hiring a dedicated data specialist so your team can focus on what they do best.
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
                                    Built For Teams That Run On Accurate Data
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    If your team is doing manual data work that doesn't require their expertise — a dedicated specialist handles it faster, more accurately, and at a fraction of the cost.
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

                {/* ── Built Around Your Data Layer ──────────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">

                            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                                <div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                        WHY FSA FOR DATA & RESEARCH
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built Around Your Data Layer
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Most teams handle data work themselves — whoever has time does it, which means it gets done inconsistently, inaccurately, or not at all. The result is a CRM full of bad data, lead lists no one trusts, and spreadsheets that create more questions than answers.</p>
                                        <p>At Five Star Assistants, we match you with a dedicated data and research specialist who owns this layer completely — maintaining your databases, building your lead lists, and delivering clean, organized data your team can actually use.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">Book A Discovery Call</Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>
                                <div>
                                    <img src="/images/va-2.png" alt="Data entry and research specialist at work" className="w-full rounded-[2rem] shadow-xl object-cover" />
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
                                Stop Doing Data Work.{' '}
                                <span className="text-gold italic">Start Using It.</span>
                            </h2>
                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us what data you need managed or researched and we'll match you with a qualified specialist — in as little as 7 days. No setup fees, no long-term contracts.
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
            <SurveyModal isOpen={isSurveyOpen} onClose={closeSurvey} onComplete={handleSurveyComplete} source="Data Entry & Research" />
        </div>
    );
};

export default DataEntryResearch;
