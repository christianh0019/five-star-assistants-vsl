import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, Users, Award,
    Mail, PhoneCall, Share2, BarChart2,
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
    { icon: DollarSign, value: '$6/hr',   label: 'Starting Rate' },
    { icon: Users,      value: '1,000+',  label: 'Businesses Served' },
    { icon: Award,      value: 'Top 1%',  label: 'Of Applicants Placed' },
];

const taskCategories = [
    {
        icon: Mail,
        title: 'Cold Outreach & Email Prospecting',
        desc: 'Personalized cold emails and multi-step sequences sent consistently — so your prospects hear from you before they hear from a competitor.',
        items: [
            'Write and send personalized cold email campaigns to targeted prospect lists',
            'Build and manage multi-step follow-up sequences in your outreach tool',
            'A/B test subject lines and messaging to improve open and reply rates',
            'Research prospects before outreach to personalize opening lines',
            'Track replies and hand off interested leads directly to you or your closers',
            'Maintain accurate send logs and response tracking across campaigns',
        ],
    },
    {
        icon: PhoneCall,
        title: 'Cold Calling & Phone Prospecting',
        desc: 'Consistent outbound calls to your target list — with structured scripts, objection handling, and qualified handoffs.',
        items: [
            'Execute cold call campaigns against targeted prospect lists daily',
            'Qualify leads using your sales criteria before escalating to closers',
            'Leave structured, professional voicemails to maximize callback rates',
            'Follow up by phone after initial email touches for multi-channel outreach',
            'Use call scripts and handle common objections with practiced responses',
            'Log all call activity and outcomes in your CRM for pipeline visibility',
        ],
    },
    {
        icon: Share2,
        title: 'LinkedIn & Social Prospecting',
        desc: 'Strategic LinkedIn outreach and connection-building that keeps your name in front of the right buyers.',
        items: [
            'Send targeted connection requests to ICP-matched prospects on LinkedIn',
            'Follow up with personalized DMs after connection acceptance',
            'Engage with prospects\' posts to build familiarity before direct outreach',
            'Research prospect profiles to personalize messaging and find warm angles',
            'Monitor LinkedIn Sales Navigator for new prospects matching your ICP',
            'Coordinate LinkedIn touches with email and phone for multi-channel coverage',
        ],
    },
    {
        icon: BarChart2,
        title: 'CRM Updates & Pipeline Reporting',
        desc: 'A clean, current CRM and clear pipeline visibility — so nothing falls through the cracks and you always know where deals stand.',
        items: [
            'Log all outreach activity, call notes, and email responses in your CRM',
            'Update prospect status and pipeline stage after every touchpoint',
            'Tag, categorize, and segment prospects based on engagement and fit',
            'Flag hot leads and schedule immediate follow-up for interested prospects',
            'Produce weekly activity reports — calls made, emails sent, replies received',
            'Maintain clean prospect records with current contact information',
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
        desc: 'Recruiting is completely free. You only pay once your SDR starts.',
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
        desc: 'Your SDR works exclusively on your pipeline — not juggling outreach for a dozen other clients.',
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
        title: 'B2B Service Companies',
        desc: "You need a consistent flow of qualified pipeline but you can't have your senior team doing cold outreach. A dedicated SDR handles top-of-funnel daily — so your closers are always working warm leads.",
    },
    {
        icon: Briefcase,
        title: 'Founders & Agency Owners',
        desc: "You're the best person to close — but not the best use of your time for cold outreach. An SDR handles the prospecting, the calls, and the follow-up so you only step in when a lead is ready.",
    },
    {
        icon: TrendingUp,
        title: 'Growing Sales Teams',
        desc: "Your closers need a steady flow of booked opportunities, not a pile of cold names to work through. An SDR handles the prospecting layer so your sales team can focus on what they do best.",
    },
];

const pillars = [
    {
        icon: Target,
        title: 'Top-Of-Funnel Is A Volume Game',
        desc: "Pipeline dries up when outreach stops. Most founders and sales teams know this but still let weeks go by without consistent prospecting because it's time-consuming and tedious. A dedicated SDR does outreach every single day — calls, emails, LinkedIn — so your pipeline never goes quiet.",
    },
    {
        icon: DollarSign,
        title: 'Save $60k+ vs. a US-Based SDR',
        desc: 'Entry-level SDRs in the US cost $55,000–$75,000/year plus commission, benefits, and onboarding time. Our dedicated SDRs start at $6/hr — full-time outreach, daily prospecting, and CRM management — none of the full-time overhead.',
    },
    {
        icon: Globe,
        title: 'Your Closers Should Be Closing',
        desc: "Every hour a closer spends doing cold outreach is an hour they're not closing. A dedicated SDR handles the prospecting layer — so your highest-leverage people spend their time on calls that are already warm, not on building the list that gets them there.",
    },
];

const faqs = [
    {
        question: 'What does an SDR actually do?',
        answer: "An SDR (Sales Development Rep) handles top-of-funnel outreach — cold emails, cold calls, LinkedIn prospecting, and CRM tracking. Their job is to turn a cold prospect list into booked meetings or qualified leads that your closers can work. They don't close deals — they create the pipeline that closers work from.",
    },
    {
        question: 'Do they make cold calls?',
        answer: "Yes. Cold calling is one of the core activities. We match you with SDRs who are comfortable on the phone and trained to handle objections, leave effective voicemails, and follow up systematically. If you want a phone-heavy SDR versus an email-first one, tell us during onboarding and we'll match accordingly.",
    },
    {
        question: 'What tools do they use?',
        answer: "HubSpot, Salesforce, Pipedrive, Close, Apollo, Outreach, Instantly, Lemlist, LinkedIn Sales Navigator, and most other CRMs and outreach platforms. If you have a specific stack, let us know during onboarding and we'll match you with an SDR who has relevant experience.",
    },
    {
        question: 'Can they work US time zones?',
        answer: "Yes. We specifically hire assistants who can work US business hours — Eastern, Central, Mountain, or Pacific. Prospecting works best when your SDR is active during your prospects' business hours, so this is a standard part of how we match.",
    },
    {
        question: 'How do they get the leads to reach out to?',
        answer: "You can provide them with an existing list, have them build lists using your tools (LinkedIn Sales Navigator, Apollo, etc.), or pair them with a Lead List Building specialist who feeds them fresh contacts. During onboarding, we'll clarify the lead sourcing workflow so your SDR can hit the ground running.",
    },
    {
        question: 'How do I track their activity?',
        answer: "Your SDR logs all activity in your CRM and delivers weekly reports — calls made, emails sent, replies received, and leads moved forward. They also use full-screen activity tracking software monitored by our HR team, so you have full visibility into hours worked.",
    },
    {
        question: 'How is this different from hiring a sales agency?',
        answer: "Sales agencies charge retainers of $3,000–$10,000/month, often own the outreach process (and the relationships), and are working multiple clients simultaneously. Our SDRs are dedicated to your business exclusively — integrated into your tools, your process, and your brand. You own the relationships.",
    },
    {
        question: "What if they're not performing?",
        answer: "If your SDR isn't meeting expectations, we replace them at no extra cost. We also work with you to define performance expectations clearly during onboarding — activity targets, reply rate benchmarks, and handoff criteria — so both sides know what success looks like from day one.",
    },
];

// ─── Component ─────────────────────────────────────────────────────────────

const SDR: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);
    const handleSurveyComplete = () => { closeSurvey(); navigate('/booking'); };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <SEO
                title="Hire a Sales Development Rep (SDR) | Cold Outreach & Pipeline Building | Five Star Assistants"
                description="Hire a dedicated SDR for cold email, cold calling, LinkedIn prospecting, and CRM management. Build consistent pipeline without the US-based overhead. Free placement. Starting at $6/hr. Matched in 7 days."
                keywords="hire SDR virtual assistant, outsource sales development, cold outreach specialist, cold calling virtual assistant, B2B prospecting assistant, sales pipeline VA, remote SDR"
                canonical="https://www.fivestarassistants.com/hire/sdr"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* ── Hero ──────────────────────────────────────────────── */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Sales Development Representatives"
                        headline={
                            <>
                                Hire A Dedicated SDR.{' '}
                                <span className="text-gold italic">Starting at $6/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Cold email, cold calling, LinkedIn prospecting, and CRM management —
                                handled daily by a dedicated SDR so your pipeline never goes quiet.{' '}
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
                                    Everything a Dedicated SDR Takes Off Your Plate
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    One dedicated rep who owns your top-of-funnel — cold outreach, phone prospecting, LinkedIn, and CRM — so your pipeline gets worked every single day.
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
                                    Find My SDR
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
                                    We've removed every friction point from hiring a dedicated SDR so you can start building pipeline without the overhead.
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
                                    Built For Teams That Need A Full Pipeline
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    If your top-of-funnel isn't getting daily attention — because your closers are closing and your founders are building — a dedicated SDR fills that gap.
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
                                        WHY FSA FOR SALES DEVELOPMENT
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built Around Your Pipeline
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Most companies know they need more outreach. The problem isn't knowing — it's execution. Founders don't have time, closers won't do it, and hiring a US-based SDR is expensive before you've even proven the motion works.</p>
                                        <p>At Five Star Assistants, we match you with a dedicated SDR who does outreach every day — cold calls, cold emails, LinkedIn, CRM updates — so your pipeline gets worked consistently and your closers stay busy.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">Book A Discovery Call</Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>
                                <div>
                                    <img src="/images/va-2.png" alt="SDR working outbound pipeline" className="w-full rounded-[2rem] shadow-xl object-cover" />
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
                                Build The Pipeline.{' '}
                                <span className="text-gold italic">Close The Deals.</span>
                            </h2>
                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us about your sales motion and we'll match you with a dedicated SDR — in as little as 7 days. No setup fees, no long-term contracts.
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
            <SurveyModal isOpen={isSurveyOpen} onClose={closeSurvey} onComplete={handleSurveyComplete} source="SDR" />
        </div>
    );
};

export default SDR;
