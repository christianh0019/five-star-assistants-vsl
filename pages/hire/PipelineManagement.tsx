import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, Users, Award,
    Mail, BarChart2, FileText, RefreshCw,
    ChevronDown, Check,
    FileX, BadgeDollarSign, CreditCard, Timer,
    TrendingUp, Briefcase, Building,
    Target, Zap,
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
        icon: Mail,
        title: 'Follow-Up Sequencing & Outreach',
        desc: 'Structured, consistent follow-up across every open deal — so no opportunity goes quiet because nobody remembered to follow up.',
        items: [
            'Execute multi-step follow-up sequences across all active deals and proposals',
            'Send personalized emails, texts, and LinkedIn messages at the right intervals',
            'Personalize follow-up based on deal stage, previous touchpoints, and engagement',
            'Re-engage deals that went quiet with targeted re-engagement messages',
            'Coordinate multi-channel follow-up across email, phone, and social platforms',
            'Track response rates and adjust timing and messaging based on what works',
        ],
    },
    {
        icon: BarChart2,
        title: 'Pipeline Stage Management',
        desc: 'A clean, current pipeline where every deal is in the right stage and every stalled opportunity gets flagged before it falls out.',
        items: [
            'Monitor all open deals and flag opportunities that have stalled by stage',
            'Move deals through pipeline stages based on rep activity and outcomes',
            'Ensure all active deals have a next step assigned and a close date set',
            'Flag deals overdue for follow-up and escalate to the appropriate rep',
            'Maintain pipeline hygiene by archiving dead or unqualified deals promptly',
            'Track and report pipeline velocity, stage conversion rates, and drop-offs',
        ],
    },
    {
        icon: FileText,
        title: 'Deal Activity Logging',
        desc: "A complete activity history on every deal — so context is never lost, reps are always prepared, and leadership can see exactly what's happened.",
        items: [
            'Log all outreach activity, call notes, and meeting outcomes against deals',
            'Create follow-up tasks and reminders in your CRM after every touchpoint',
            'Document deal history so context is preserved during rep handoffs',
            'Attach proposals, quotes, and supporting documents to the correct deal records',
            'Keep deal timelines accurate so leadership can review history at any stage',
            'Maintain consistent logging standards across your entire sales team',
        ],
    },
    {
        icon: RefreshCw,
        title: 'Re-Engagement & Lost Deal Recovery',
        desc: 'Deals that went cold or were marked lost are often recoverable — if someone follows up at the right time with the right message.',
        items: [
            'Identify lost or stalled deals worth a structured re-engagement attempt',
            'Execute re-engagement campaigns for prospects who went quiet mid-process',
            'Follow up on proposals sent but never responded to — with new angles',
            'Build a 90-day re-engagement sequence for formally lost deals',
            'Monitor past clients for expansion, renewal, or upsell opportunities',
            'Track re-engagement results and refine messaging based on response patterns',
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
        icon: Mail,
        title: 'Dedicated — Not Shared',
        desc: 'Your specialist owns your follow-up process exclusively — not managing pipelines for a queue of other clients.',
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
        title: 'Sales Teams',
        desc: "Your reps close — but they don't always follow up consistently when a deal goes quiet. A dedicated specialist handles the follow-up layer so every deal gets worked and nothing falls out of the pipeline silently.",
    },
    {
        icon: Briefcase,
        title: 'Founders & Small Businesses',
        desc: "You're doing all your own follow-up manually — when you remember to. A dedicated specialist follows up on every open opportunity on a structured schedule so you never lose a deal to forgetfulness.",
    },
    {
        icon: Building,
        title: 'Agencies & Consultants',
        desc: "You have proposals out but nobody tracking them. A specialist monitors every open proposal, follows up at the right intervals, and flags the ones worth a direct call from you — so deals close instead of going cold.",
    },
];

const pillars = [
    {
        icon: Target,
        title: 'The Fortune Is In The Follow-Up',
        desc: "80% of sales require at least five follow-up touches. Most reps stop after one or two — not because they don't want to close, but because manual follow-up is tedious and time-consuming. A dedicated specialist handles every touch in every deal so nothing slips through because someone forgot.",
    },
    {
        icon: DollarSign,
        title: 'Save $40k+ vs. a US-Based Sales Coordinator',
        desc: "Sales coordinators and pipeline managers in the US cost $45,000–$65,000/year. Our dedicated specialists start at $5/hr — full-time follow-up execution, pipeline maintenance, deal logging, and re-engagement — without the full-time overhead.",
    },
    {
        icon: Zap,
        title: 'Most Deals Are Lost To Silence, Not Competition',
        desc: "The majority of deals that go cold don't close with a competitor — they just never close because nobody followed up enough times. A dedicated pipeline specialist makes sure every open deal gets consistent attention until there's a clear yes or no.",
    },
];

const faqs = [
    {
        question: 'What does a pipeline management specialist actually do?',
        answer: "They own the follow-up and tracking layer of your sales process — executing follow-up sequences across open deals, logging activity in your CRM, flagging stalled opportunities, and re-engaging leads who went cold. Their job is to make sure every deal gets worked consistently and nothing falls through the cracks.",
    },
    {
        question: 'How do they know which deals to follow up on?',
        answer: "They work from your CRM — reviewing open deals by stage, last activity date, and next step. During onboarding, you'll agree on follow-up cadences by stage (e.g., follow up every 3 days in proposal stage, every 7 days in negotiation) so they always know what needs attention and when.",
    },
    {
        question: 'Do they reach out directly to prospects on our behalf?',
        answer: "Yes — if you want them to. Many clients have their specialist send follow-up emails from a shared inbox or CRM sequence tool on behalf of the rep. Others prefer the specialist to prepare the outreach and have the rep send it. Both workflows are common and we set it up however fits your process best.",
    },
    {
        question: 'How do they handle it when a prospect responds?',
        answer: "Responses get flagged immediately to the appropriate rep for handling. Your specialist doesn't carry conversations into negotiation or qualification — they handle the follow-up layer and hand off as soon as there's meaningful engagement that requires your judgment or expertise.",
    },
    {
        question: 'What CRMs and tools do they work in?',
        answer: "HubSpot, Salesforce, Pipedrive, Close, GoHighLevel, Monday.com, Zoho, and most other CRM platforms. For outreach, they work in tools like Instantly, Lemlist, Outreach, Apollo, and standard email clients. We'll match you with a specialist whose tool experience matches your stack.",
    },
    {
        question: 'How do they prioritize which deals to work?',
        answer: "Priority is set by deal value, stage, and time since last contact — all visible in your CRM. During onboarding, you'll define a prioritization framework (e.g., high-value deals get daily follow-up, smaller deals get weekly) so they always know where to focus first.",
    },
    {
        question: 'Can they also help with lost deal recovery?',
        answer: "Yes — this is one of the highest-ROI tasks they handle. Re-engaging deals that went cold or were marked lost (especially those that were previously qualified) often recovers revenue that would have been written off. Your specialist runs structured re-engagement sequences on a 30/60/90 day basis.",
    },
    {
        question: 'How is this different from an SDR or appointment setter?',
        answer: "An SDR works cold prospects to generate new pipeline. An appointment setter books meetings from inbound leads. A pipeline management specialist works deals already in your pipeline — ensuring active opportunities get consistent follow-up and don't slip out through inconsistent attention. They're complementary roles, not interchangeable ones.",
    },
];

// ─── Component ─────────────────────────────────────────────────────────────

const PipelineManagement: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);
    const handleSurveyComplete = () => { closeSurvey(); navigate('/booking'); };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <SEO
                title="Hire a Follow-Up & Pipeline Management Specialist | Deal Tracking & Re-Engagement | Five Star Assistants"
                description="Hire a dedicated pipeline management specialist for deal follow-up, pipeline tracking, activity logging, and lost deal recovery. Stop letting deals go cold. Free placement. Starting at $5/hr."
                keywords="hire pipeline management specialist, follow-up virtual assistant, deal tracking VA, sales follow-up assistant, CRM pipeline assistant, lost deal recovery VA, outsource sales follow-up"
                canonical="https://www.fivestarassistants.com/hire/pipeline-management"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* ── Hero ──────────────────────────────────────────────── */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Follow-Up & Pipeline Management Specialists"
                        headline={
                            <>
                                Hire A Dedicated Pipeline Specialist.{' '}
                                <span className="text-gold italic">Starting at $5/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Deal follow-up, pipeline tracking, activity logging, and lost deal recovery —
                                handled consistently so every open opportunity gets worked and nothing slips through.{' '}
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
                                    Everything a Pipeline Specialist Takes Off Your Plate
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    One dedicated specialist who owns your follow-up and pipeline — deal sequencing, stage tracking, activity logging, and re-engagement — so every opportunity gets worked all the way to a decision.
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
                                    Find My Pipeline Specialist
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
                                    We've removed every friction point from hiring a dedicated pipeline specialist so you can stop losing deals to inconsistent follow-up.
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
                                    Built For Businesses That Can't Afford To Let Deals Go Cold
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    If deals are slipping out of your pipeline not because they weren't qualified — but because follow-up was inconsistent — a dedicated specialist fixes that.
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

                {/* ── Built Around Your Pipeline ────────────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">

                            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                                <div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                        WHY FSA FOR PIPELINE MANAGEMENT
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built Around Your Pipeline
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Most businesses lose deals they should have closed — not to better competitors, but to inconsistent follow-up. Someone gets busy, a deal goes quiet, and by the time anyone circles back, the prospect has moved on.</p>
                                        <p>At Five Star Assistants, we match you with a dedicated pipeline specialist who executes follow-up across every open deal on a structured schedule — logging activity, flagging stalls, and re-engaging cold opportunities — so no deal is ever lost to silence.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">Book A Discovery Call</Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>
                                <div>
                                    <img src="/images/va-2.png" alt="Pipeline management specialist tracking deals" className="w-full rounded-[2rem] shadow-xl object-cover" />
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
                                Stop Letting Deals Slip.{' '}
                                <span className="text-gold italic">Start Closing More.</span>
                            </h2>
                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us about your pipeline and we'll match you with a dedicated follow-up specialist — in as little as 7 days. No setup fees, no long-term contracts.
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
            <SurveyModal isOpen={isSurveyOpen} onClose={closeSurvey} onComplete={handleSurveyComplete} source="Follow-Up & Pipeline" />
        </div>
    );
};

export default PipelineManagement;
