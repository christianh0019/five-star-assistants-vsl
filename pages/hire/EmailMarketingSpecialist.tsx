import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, Users, Award,
    Target, Mail, Filter, BarChart2,
    ChevronDown, Check,
    FileX, BadgeDollarSign, RefreshCw, CreditCard, Timer,
    TrendingUp, ShoppingBag, Briefcase,
    Zap, PenTool,
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
        title: 'Email Strategy & Campaign Planning',
        desc: 'A clear strategy is the difference between a random newsletter and a list that generates revenue every time you hit send.',
        items: [
            'Audit your current email program and identify gaps in automation and segmentation',
            'Build a full email marketing calendar aligned to launches, promotions, and seasons',
            'Design automation sequences for welcome, nurture, abandoned cart, and post-purchase flows',
            'Map the customer journey and identify where email can accelerate each stage',
            'Plan segmentation strategy based on behavior, purchase history, and engagement',
            'Develop a testing roadmap for subject lines, send times, and content formats',
        ],
    },
    {
        icon: Mail,
        title: 'Email Design & Copywriting',
        desc: 'Emails that get opened, get read, and get clicked — designed and written to perform across every inbox.',
        items: [
            'Design branded email templates in Klaviyo, Mailchimp, ActiveCampaign, or HubSpot',
            'Write promotional emails, newsletters, and product announcements in your brand voice',
            'Craft compelling subject lines and preview text optimized for open rates',
            'Produce launch sequences with storytelling, urgency, and clear conversion paths',
            'Create drip campaign copy that educates, builds trust, and moves leads to purchase',
            'Develop re-engagement emails to reactivate cold subscribers before list pruning',
        ],
    },
    {
        icon: Filter,
        title: 'List Management & Segmentation',
        desc: 'A clean, well-segmented list delivers better results and better deliverability. Your specialist maintains both.',
        items: [
            'Set up and maintain tags, lists, and segments based on subscriber behavior and data',
            'Import, merge, and clean contact databases to remove duplicates and invalid addresses',
            'Build behavioral segments (clicks, purchases, page visits) for targeted campaigns',
            'Monitor list health metrics — bounce rates, spam complaints, and unsubscribe rates',
            'Implement double opt-in and GDPR/CAN-SPAM compliant subscription flows',
            'Prune inactive subscribers regularly to protect sender reputation and deliverability',
        ],
    },
    {
        icon: BarChart2,
        title: 'Analytics, A/B Testing & Optimization',
        desc: 'Every campaign teaches you something. Your specialist tracks, tests, and improves every metric that matters.',
        items: [
            'Track open rate, click-through rate, conversion rate, and revenue per email',
            'Run A/B tests on subject lines, send times, copy, design, and CTAs',
            'Monitor deliverability metrics — inbox placement, spam rate, and sender score',
            'Build weekly and monthly performance reports with trend analysis and recommendations',
            'Attribute revenue to specific campaigns and automation flows',
            'Benchmark performance against industry averages and identify improvement priorities',
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
        desc: 'Your email specialist works exclusively for your list — not managing campaigns for a dozen other brands.',
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
        desc: 'Abandoned cart flows, post-purchase sequences, promotional campaigns, and win-back emails — your specialist builds and maintains the automation that drives repeat revenue.',
    },
    {
        icon: Zap,
        title: 'SaaS & Subscription Businesses',
        desc: 'Onboarding sequences, feature announcements, churn prevention flows, and renewal campaigns — your specialist keeps subscribers engaged and reduces churn through the inbox.',
    },
    {
        icon: Briefcase,
        title: 'Coaches, Consultants & Course Creators',
        desc: "You have a list and a product. Your specialist builds the funnels — lead magnet delivery, nurture sequences, launch campaigns, and evergreen automations — that turn subscribers into buyers.",
    },
];

const pillars = [
    {
        icon: TrendingUp,
        title: 'Email Has The Highest ROI of Any Marketing Channel',
        desc: 'Email consistently returns $36–$42 for every dollar spent — higher than social, paid ads, or SEO. But only if your list is managed strategically. Most businesses send sporadic newsletters and leave the automation that drives real revenue sitting unconfigured.',
    },
    {
        icon: DollarSign,
        title: 'Save $45k+ vs. a Full-Time Email Marketer',
        desc: 'In-house email marketing managers in the US cost $55,000–$80,000 per year. Agencies charge $2,000–$5,000/month for campaign management that rarely includes copywriting. Our dedicated email specialists start at $5/hr and handle strategy, copy, design, and reporting.',
    },
    {
        icon: BarChart2,
        title: 'Automation Is How You Scale Without Hiring More',
        desc: "The most profitable part of email isn't the broadcast campaigns — it's the automations running in the background 24/7. Welcome sequences, abandoned cart recovery, post-purchase flows — these compound over time and require a specialist who builds them right the first time.",
    },
];

const faqs = [
    {
        question: 'What email platforms do they work with?',
        answer: 'Klaviyo, Mailchimp, ActiveCampaign, HubSpot, ConvertKit, Drip, Brevo, and Constant Contact. We match you with a specialist who knows your platform — or can recommend the right one if you\'re switching. Klaviyo and ActiveCampaign are the most common for e-commerce and service businesses respectively.',
    },
    {
        question: 'Can they set up email automations from scratch?',
        answer: 'Yes — building automation flows is a core part of the role. Welcome sequences, abandoned cart, post-purchase, nurture drips, re-engagement campaigns — they map the flows, write the copy, build the sequences, and test them before going live.',
    },
    {
        question: 'Do they handle deliverability issues?',
        answer: 'Yes. They monitor sender reputation, bounce rates, spam complaint rates, and inbox placement. If deliverability is suffering, they diagnose the cause — whether that\'s list hygiene, sending frequency, content triggers, or authentication (SPF, DKIM, DMARC) — and fix it.',
    },
    {
        question: 'Can they grow my email list, or do they just manage what I have?',
        answer: 'Both. They can manage and optimize existing list-growth mechanisms (pop-ups, lead magnets, opt-in forms) and suggest new ones. For more aggressive list-building campaigns — paid lead gen, giveaways, partnerships — they\'ll plan and execute in collaboration with your other channels.',
    },
    {
        question: 'Do they write the email copy, or do I need a separate copywriter?',
        answer: 'They write the copy. Email copywriting — subject lines, preview text, body copy, CTAs — is part of the role. For businesses with very high-volume or highly specialized content needs, pairing them with a dedicated content writer is an option, but most clients find the specialist handles both.',
    },
    {
        question: 'How do they handle compliance — GDPR, CAN-SPAM, and unsubscribes?',
        answer: 'Compliance is built into their workflow. Every campaign includes a compliant unsubscribe mechanism. They maintain list hygiene to honor unsubscribes promptly, implement proper opt-in processes, and ensure footer requirements are met. They know the rules and follow them.',
    },
    {
        question: 'What metrics do they report on?',
        answer: 'Open rate, click-through rate, conversion rate, revenue per email, list growth rate, unsubscribe rate, and deliverability metrics. They deliver weekly snapshots and monthly strategy reports with trend analysis and recommendations for the period ahead.',
    },
    {
        question: 'How is this different from just using an email marketing agency?',
        answer: "Agencies manage your campaigns from a distance, use templated strategies, and rotate staff across dozens of accounts. Your Five Star email specialist is dedicated to your list, learns your brand and audience deeply, and is held accountable by our in-house HR team — including full-screen activity tracking.",
    },
];

// ─── Component ─────────────────────────────────────────────────────────────

const EmailMarketingSpecialist: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);
    const handleSurveyComplete = () => { closeSurvey(); navigate('/booking'); };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <SEO
                title="Hire an Email Marketing Specialist | Klaviyo, Mailchimp & Automation | Five Star Assistants"
                description="Hire a dedicated email marketing specialist for campaign strategy, email copywriting, automation flows, and list management. Free placement. Starting at $5/hr. Matched in 7 days."
                keywords="hire email marketing specialist, email marketer virtual assistant, outsource email marketing, Klaviyo specialist for hire, Mailchimp virtual assistant, email automation specialist, affordable email marketer"
                canonical="https://www.fivestarassistants.com/hire/email-marketing-specialist"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* ── Hero ──────────────────────────────────────────────── */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Email Marketing Specialists"
                        headline={
                            <>
                                Hire A Dedicated Email Marketing Specialist.{' '}
                                <span className="text-gold italic">Starting at $5/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Campaign strategy, email copywriting, automation flows, and list management —
                                all handled by one specialist who turns your list into revenue.{' '}
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
                                    Everything an Email Marketing Specialist Takes Off Your Plate
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    One dedicated specialist who owns your entire email channel — strategy, copy, automations, list management, and results.
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
                                    Find My Email Marketing Specialist
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
                                    We've removed every barrier to hiring a remote email specialist so you can focus on growing your list, not managing someone to run it.
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
                                    Built For Businesses Ready To Make Their List Work
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    If you're sitting on a list of subscribers and sending sporadic newsletters — a dedicated email specialist is the fastest way to turn that into consistent revenue.
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

                {/* ── Built Around Your List ────────────────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">

                            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                                <div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                        WHY FSA FOR EMAIL
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built Around Your List
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Most businesses treat email as an afterthought — a newsletter sent whenever there's time, automations set up once and never optimized, and a list that grows without a strategy to monetize it.</p>
                                        <p>At Five Star Assistants, we match you with a dedicated email marketing specialist who owns your entire email channel — from the strategy and segmentation to the copy, design, automation builds, and weekly reporting. Your list becomes your most reliable revenue channel.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">Book A Discovery Call</Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>
                                <div>
                                    <img src="/images/va-2.png" alt="Email marketing specialist at work" className="w-full rounded-[2rem] shadow-xl object-cover" />
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
                                Your List Is An Asset.{' '}
                                <span className="text-gold italic">Start Treating It Like One.</span>
                            </h2>
                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us about your platform and goals and we'll match you with a qualified email marketing specialist — in as little as 7 days. No agency fees, no setup costs, no long-term contracts.
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
            <SurveyModal isOpen={isSurveyOpen} onClose={closeSurvey} onComplete={handleSurveyComplete} source="Email Marketing" />
        </div>
    );
};

export default EmailMarketingSpecialist;
