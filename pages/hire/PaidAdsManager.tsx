import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, Users, Award,
    Target, PenTool, BarChart2, TrendingUp,
    ChevronDown, Check,
    FileX, BadgeDollarSign, RefreshCw, CreditCard, Monitor, Timer,
    ShoppingBag, Briefcase, Megaphone,
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
        icon: Target,
        title: 'Campaign Setup & Strategy',
        desc: 'Every ad campaign starts with structure. Your manager builds it right from day one.',
        items: [
            'Audit existing ad accounts and identify wasted spend and missed opportunities',
            'Define campaign objectives, budget allocation, and bidding strategy',
            'Build campaign architecture across awareness, consideration, and conversion',
            'Set up Meta Pixel, Google Tag, or TikTok Pixel for accurate conversion tracking',
            'Create custom audiences, lookalikes, and retargeting segments',
            'Develop a structured testing framework for creatives, copy, and audiences',
        ],
    },
    {
        icon: PenTool,
        title: 'Ad Copy & Creative Direction',
        desc: 'Ads that stop the scroll — written to convert, not just to get impressions.',
        items: [
            'Write high-converting ad copy for every stage of the funnel',
            'Develop A/B test variants for headlines, body copy, and CTAs',
            'Brief or produce static ad creatives, carousels, and video scripts',
            'Tailor messaging to each audience segment and campaign objective',
            'Build and refresh creative libraries to prevent ad fatigue',
            'Align ad copy with landing page messaging to improve Quality Score and ROAS',
        ],
    },
    {
        icon: BarChart2,
        title: 'Daily Management & Optimization',
        desc: 'Daily eyes on your budget — scaling what works and cutting what doesn\'t.',
        items: [
            'Monitor campaigns daily for performance anomalies and budget pacing',
            'Pause underperforming ad sets and reallocate budget to winning campaigns',
            'Adjust bids, placements, and audience targeting based on real-time data',
            'Manage frequency and reach to prevent audience exhaustion',
            'Run ongoing creative rotation to maintain engagement and lower CPAs',
            'Coordinate retargeting sequences to re-engage warm and abandoned audiences',
        ],
    },
    {
        icon: TrendingUp,
        title: 'Reporting & Performance Analysis',
        desc: 'Clear weekly reports showing exactly what your ad spend is doing — and what to do next.',
        items: [
            'Pull weekly performance reports covering ROAS, CPA, CTR, CPM, and spend',
            'Track conversion data from ad click through to purchase or lead submission',
            'Identify top-performing audiences, creatives, and placements each week',
            'Benchmark performance against industry averages and prior period data',
            'Deliver monthly strategy reports with forward budget recommendations',
            'Build campaign dashboards in Google Looker Studio or Meta\'s native reporting',
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
        desc: 'Recruiting is completely free. You only pay once your manager starts.',
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
        icon: Monitor,
        title: 'Dedicated — Not Shared',
        desc: 'Your ads manager works exclusively for your business — not juggling 20 client accounts.',
    },
    {
        icon: Timer,
        title: 'Full Activity Tracking',
        desc: 'Every assistant uses full-screen tracking software monitored by our in-house HR team.',
    },
];

const whoIsThisFor = [
    {
        icon: ShoppingBag,
        title: 'E-Commerce & DTC Brands',
        desc: "You're spending on Meta or Google but ROAS is inconsistent. Your manager brings structure, creative testing, and daily optimization to fix that.",
    },
    {
        icon: Briefcase,
        title: 'Lead Gen Businesses',
        desc: 'Law firms, med spas, agencies, contractors — you need a steady pipeline of qualified leads from Meta or Google, not boosted posts.',
    },
    {
        icon: Megaphone,
        title: 'SaaS & Online Businesses',
        desc: 'You need someone who understands full-funnel paid strategy — from top-of-funnel awareness to conversion and retargeting — not just campaign setup.',
    },
];

const pillars = [
    {
        icon: Target,
        title: 'Stop Guessing With Your Ad Budget',
        desc: 'Most business owners boost posts and hope for the best. A real ads manager builds campaigns with defined objectives, audience segments, and bidding strategies — so every dollar has a job and every result is traceable.',
    },
    {
        icon: DollarSign,
        title: 'Save $60k+ vs. a Full-Time Hire',
        desc: 'In-house paid media managers cost $65,000–$90,000/yr in the US — before benefits, tools, and overhead. Our dedicated ads managers start at $6/hr. Same platform expertise, same daily management, none of the burden.',
    },
    {
        icon: BarChart2,
        title: 'Consistency Is What Compounds Results',
        desc: 'Paid ads only improve with consistent daily attention — budget checks every morning, creative refreshes every week, and strategy resets every month. Not occasional logins when performance drops.',
    },
];

const faqs = [
    {
        question: 'What ad platforms can they manage?',
        answer: 'Facebook and Instagram (Meta Ads), Google Ads (Search, Display, Shopping, YouTube), TikTok Ads, LinkedIn Ads, and Pinterest Ads. Most of our managers specialize in 2–3 platforms. We match based on where your audience actually is.',
    },
    {
        question: 'Do they create the ad creative or just manage campaigns?',
        answer: 'They handle copy (headlines, primary text, CTAs) and can direct creative or produce basic static ads. For complex video production, we recommend pairing them with a dedicated video editor. They\'ll brief and coordinate the creative process either way.',
    },
    {
        question: 'How do I give them access to my ad accounts?',
        answer: 'Through secure business account sharing — no password sharing required. You\'ll add them as a partner or user in Meta Business Manager, Google Ads Manager Account, or TikTok Business Center. We walk you through the setup on your onboarding call.',
    },
    {
        question: 'What\'s a realistic ad budget to work with?',
        answer: 'We recommend a minimum of $1,000–$2,000/month in ad spend to generate enough data for meaningful optimization. Lower budgets can work but limit how fast your manager can test and improve performance. They\'ll advise on the right starting budget based on your goals.',
    },
    {
        question: 'How do they report on ad performance?',
        answer: 'Weekly performance summaries covering the key metrics that matter for your campaigns (ROAS, CPA, CTR, CPM, revenue, leads). Monthly strategy reports with recommendations for the month ahead. You always know what\'s happening and why.',
    },
    {
        question: 'What if my ROAS is low when they start?',
        answer: 'They\'ll start with an account audit to identify what\'s wasting money and what has potential. Expect the first 30 days to be diagnostic and structural — real performance improvements typically compound over 60–90 days as the testing data builds.',
    },
    {
        question: 'How is this different from a marketing agency?',
        answer: 'Agencies rotate account managers, mark up your ad spend, and manage dozens of clients at once. Your Five Star ads manager is dedicated exclusively to your account, works your hours, and is held accountable by our in-house HR team. You get the same expertise at a fraction of the cost.',
    },
    {
        question: 'How quickly can they start after I book a call?',
        answer: 'Most clients are matched with a qualified candidate within 3–5 business days of their discovery call. Once you approve the match, your ads manager can typically start within the same week.',
    },
];

// ─── Component ─────────────────────────────────────────────────────────────

const PaidAdsManager: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);
    const handleSurveyComplete = () => { closeSurvey(); navigate('/booking'); };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <SEO
                title="Hire a Paid Ads Manager | Facebook, Google & TikTok Ads | Five Star Assistants"
                description="Hire a dedicated paid ads manager to build, run, and optimize your Facebook, Instagram, Google, and TikTok campaigns. Free placement. Starting at $6/hr. Matched in 7 days."
                keywords="hire paid ads manager, Facebook ads manager virtual assistant, Google ads specialist, outsource PPC management, remote paid media manager, affordable ads manager, Meta ads manager"
                canonical="https://www.fivestarassistants.com/hire/paid-ads-manager"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* ── Hero ──────────────────────────────────────────────── */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Paid Advertising Managers"
                        headline={
                            <>
                                Hire A Dedicated Paid Ads Manager.{' '}
                                <span className="text-gold italic">Starting at $6/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Facebook, Instagram, Google, and TikTok campaigns — built, managed,
                                and optimized by someone who lives in the data.{' '}
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
                                    Everything a Paid Ads Manager Takes Off Your Plate
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    From campaign architecture to daily optimization — your manager owns your ad accounts end-to-end so every dollar is working.
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
                                    Find My Paid Ads Manager
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
                                    We've removed every friction point from hiring a remote ads manager so you can focus on results, not recruiting.
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
                                    Built For Businesses Ready To Make Their Ad Spend Work
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    If you're spending money on ads without a dedicated manager watching every campaign daily — you're leaving results on the table.
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

                {/* ── Built Around Your Campaigns ───────────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">

                            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                                <div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                        WHY FSA FOR PAID ADS
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built Around Your Campaigns
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Most businesses either run ads themselves — sporadically, without a real strategy — or hand them to an agency that spreads its attention across dozens of clients and marks up every hour of work.</p>
                                        <p>At Five Star Assistants, we match you with a dedicated paid ads manager who owns your accounts like an in-house hire. They check performance every morning, run creative tests every week, and bring you a clear report every month — for a fraction of what an agency or full-time employee would cost.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">Book A Discovery Call</Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>
                                <div>
                                    <img src="/images/va-2.png" alt="Paid ads manager working" className="w-full rounded-[2rem] shadow-xl object-cover" />
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
                                Every Dollar You Spend Should{' '}
                                <span className="text-gold italic">Have A Job</span>
                            </h2>
                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us what platforms you're running on and we'll match you with a qualified paid ads manager — in as little as 7 days. No agency markups, no setup fees, no long-term contracts.
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
            <SurveyModal isOpen={isSurveyOpen} onClose={closeSurvey} onComplete={handleSurveyComplete} source="Paid Ads" />
        </div>
    );
};

export default PaidAdsManager;
