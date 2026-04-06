import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, Users, Award,
    MessageCircle, Target, BarChart2,
    Calendar, PenTool, Megaphone,
    ChevronDown, Check,
    FileX, BadgeDollarSign, RefreshCw, CreditCard, Monitor, Timer,
    ShoppingBag, Wrench, Briefcase,
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
        icon: PenTool,
        title: 'Content Creation',
        desc: 'From scroll-stopping graphics to on-brand Reels — your SMM creates everything from scratch.',
        items: [
            'Design branded graphics, carousels, and story templates in Canva',
            'Edit short-form videos into polished Reels, TikToks, and YouTube Shorts',
            'Write captions and platform-specific copy in your brand voice',
            'Repurpose existing content (blogs, podcasts, clips) into social posts',
            'Research trending sounds, formats, and content styles for your niche',
            'Build and maintain a monthly content calendar',
        ],
    },
    {
        icon: Calendar,
        title: 'Scheduling & Publishing',
        desc: 'Consistent posting, every day, on every platform — without you lifting a finger.',
        items: [
            'Schedule posts across Instagram, TikTok, Facebook, LinkedIn, and more',
            'Manage your content calendar in Buffer, Later, Hootsuite, or Meta Business Suite',
            'Optimize posting times based on audience engagement data',
            'Coordinate content drops around launches, promotions, and events',
            'Maintain posting consistency even during your busiest weeks',
            'Adapt content formats and aspect ratios for each platform\'s specs',
        ],
    },
    {
        icon: MessageCircle,
        title: 'Community Management',
        desc: 'Never miss a comment, DM, or review — your audience stays engaged every single day.',
        items: [
            'Reply to every comment, DM, and story mention across all active platforms',
            'Engage proactively with followers, potential customers, and brand partners',
            'Moderate Facebook Groups and community spaces',
            'Handle negative reviews and complaints with a professional tone',
            'Flag urgent or sensitive messages for your immediate attention',
            'Build brand loyalty through consistent, on-brand daily interactions',
        ],
    },
    {
        icon: BarChart2,
        title: 'Analytics & Reporting',
        desc: 'Weekly and monthly reports that tell you exactly what\'s working — and what to do next.',
        items: [
            'Pull performance data across all platforms every week',
            'Track follower growth, reach, impressions, engagement rate, and link clicks',
            'Identify top-performing content types and surface patterns',
            'Benchmark your performance against competitors and industry averages',
            'Deliver monthly reports with data-backed strategy recommendations',
            'Adjust content strategy based on performance, not guesswork',
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
        desc: 'Recruiting is completely free. You only pay once your assistant starts.',
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
        desc: 'Your SMM works exclusively for your business. Not splitting time between ten clients.',
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
        desc: 'You need daily content, product posts, UGC repurposing, and paid social that actually converts. Your SMM owns all of it.',
    },
    {
        icon: Wrench,
        title: 'Local Service Businesses',
        desc: 'Plumbers, realtors, med spas, gyms — you need to stay top of mind on social without spending hours on it every week.',
    },
    {
        icon: Briefcase,
        title: 'Coaches, Consultants & Agencies',
        desc: "You're building a personal brand and need consistent content, Reels, and a community manager so you can stay focused on delivering.",
    },
];

const pillars = [
    {
        icon: Calendar,
        title: 'Stop Posting Inconsistently',
        desc: 'Most businesses post when they have time — which means sporadic content, erratic growth, and an audience that forgets you exist. A dedicated SMM posts on a strategy, every single day, regardless of how busy you are.',
    },
    {
        icon: DollarSign,
        title: 'Save $40k+ vs. a Local Hire',
        desc: 'US-based social media managers cost $50,000–$80,000 per year in salary alone — before benefits, equipment, and overhead. Our SMMs start at $5/hr. Same deliverables. Full ownership. None of the burden.',
    },
    {
        icon: Megaphone,
        title: 'Full Account Ownership — Not Just Posting',
        desc: "Your SMM doesn't just schedule posts. They handle strategy, content creation, video editing, community management, and weekly analytics reports — complete ownership of your social presence.",
    },
];

const faqs = [
    {
        question: 'What platforms can a social media manager handle?',
        answer: 'Instagram, TikTok, Facebook, LinkedIn, Pinterest, YouTube, and X (Twitter). Most of our SMMs specialize in 2–4 platforms. During the matching process, we identify which platforms matter most to your business and match accordingly.',
    },
    {
        question: 'Do they create graphics and videos, or just post existing content?',
        answer: "Both. Our SMMs are full content creators — they design branded graphics in Canva, edit Reels and TikToks in CapCut or Adobe Premiere, write captions, and schedule everything. You can also provide raw content (phone footage, product photos) and they'll turn it into polished posts.",
    },
    {
        question: 'What tools do your social media managers use?',
        answer: 'Content creation: Canva, Adobe Express, CapCut, Adobe Premiere. Scheduling: Buffer, Later, Hootsuite, Meta Business Suite. Ads: Meta Ads Manager, TikTok Ads Manager. Analytics: native platform insights, Google Analytics. We match you with someone familiar with the tools you already use.',
    },
    {
        question: 'How do I give them access to my social accounts?',
        answer: "Safely — no password sharing required. For most platforms you'll add them as a team member or editor (e.g., Facebook Business Manager, LinkedIn Company Page admin, TikTok Business Center). We'll walk you through the setup on your onboarding call.",
    },
    {
        question: 'Do I need to provide content ideas or do they handle everything?',
        answer: "They handle everything — but they'll want to understand your brand, voice, and goals first. Most clients do a short onboarding call to share brand guidelines and priorities, then hand it off completely. You review and approve content on whatever cadence feels right for you.",
    },
    {
        question: 'How quickly can they start after I book a call?',
        answer: 'Most clients are matched with a qualified candidate within 3–5 business days of their discovery call. Once you approve the match, your SMM can typically start within the same week.',
    },
    {
        question: "What if they don't understand my brand or niche?",
        answer: "We match based on industry experience and platform expertise, not just availability. If your first match isn't right, we'll find you a better one at no additional cost. There's zero risk in getting started.",
    },
    {
        question: 'How is this different from hiring a freelancer on Fiverr or Upwork?',
        answer: "Freelancers come and go, bill per project, and usually juggle dozens of clients. Your Five Star SMM is dedicated exclusively to your business, works your hours, and is managed and held accountable by our in-house HR team — including full-screen activity tracking. You get a real team member, not a contractor.",
    },
];

// ─── Component ─────────────────────────────────────────────────────────────

const SocialMediaManager: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);
    const handleSurveyComplete = () => { closeSurvey(); navigate('/booking'); };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <SEO
                title="Hire a Social Media Manager | Starting at $5/hr | Five Star Assistants"
                description="Hire a dedicated social media manager to create content, edit Reels, schedule posts, manage your community, and run paid ads. Free placement. Starting at $5/hr. Matched in 7 days."
                keywords="hire social media manager, social media manager virtual assistant, outsource social media management, affordable social media manager, remote social media manager, Instagram manager, TikTok content creator, Facebook ads manager"
                canonical="https://www.fivestarassistants.com/hire/social-media-manager"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* ── Hero ──────────────────────────────────────────────── */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Social Media Managers"
                        headline={
                            <>
                                Hire A Dedicated Social Media Manager.{' '}
                                <span className="text-gold italic">Starting at $5/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Content creation, Reels editing, scheduling, community management, and paid ads —
                                completely done for you.{' '}
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
                                    Everything a Social Media Manager Takes Off Your Plate
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    One dedicated person who owns your social presence end-to-end — creation, scheduling, community, and reporting.
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
                                    Find My Social Media Manager
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
                                    We've eliminated every friction point from hiring remote social media talent so you can focus on your business, not managing a hire.
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
                                <Button onClick={openSurvey} variant="primary">
                                    Get Started — It's Free
                                </Button>
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
                                    Built For Businesses That Are Ready To Show Up Online
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    If your social media presence is inconsistent, neglected, or nonexistent — this is for you.
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

                {/* ── Built Around Your Brand ───────────────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">

                            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                                <div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                        WHY FSA FOR SOCIAL MEDIA
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built Around Your Brand
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Running social media consistently is a full-time job. Most business owners know they should be posting every day, responding to comments, running ads, and showing up on Reels — but between client work, operations, and everything else, it never gets done.</p>
                                        <p>At Five Star Assistants, we match you with a dedicated social media manager who takes full ownership of your accounts from day one. Not a generalist who also does data entry. A specialist who creates content, edits video, manages your community, and reports on results — every week, without being asked.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">
                                        Book A Discovery Call
                                    </Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>

                                <div>
                                    <img
                                        src="/images/va-2.png"
                                        alt="Social media manager"
                                        className="w-full rounded-[2rem] shadow-xl object-cover"
                                    />
                                </div>
                            </div>

                            {/* Three Pillars */}
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
                                    <img
                                        src="/images/va-3.png"
                                        alt="Five Star Assistant at work"
                                        className="w-full rounded-[2rem] shadow-xl object-cover"
                                    />
                                </div>
                            </div>

                            <div className="mt-14 text-center">
                                <Button onClick={openSurvey} variant="primary">
                                    Start Building Your Team
                                </Button>
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
                                <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy">
                                    Common Questions
                                </h2>
                            </div>

                            <div className="flex flex-col gap-3">
                                {faqs.map((faq, idx) => (
                                    <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <button
                                            onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-navy/[0.02] transition-colors duration-200"
                                        >
                                            <span className="font-heading font-bold text-lg text-navy leading-snug">{faq.question}</span>
                                            <ChevronDown
                                                size={20}
                                                className={`text-gold flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                                            />
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
                                Your Brand Deserves To Be{' '}
                                <span className="text-gold italic">Seen Every Day</span>
                            </h2>

                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us what you need and we'll introduce you to a qualified social media manager — in as little as 7 days. No hiring headaches, no setup fees, no long-term contracts.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mb-12">
                                {['No setup fees', 'No lock-in contracts', 'Dedicated — not shared', 'Free placement'].map((item) => (
                                    <div key={item} className="flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-5 py-2.5">
                                        <Check size={14} className="text-gold flex-shrink-0" strokeWidth={3} />
                                        <span className="font-body text-white font-medium text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                onClick={openSurvey}
                                variant="primary"
                                className="w-full sm:w-auto min-w-[320px] text-xl shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] py-5"
                            >
                                Book A Free Discovery Call
                            </Button>
                            <p className="font-heading italic text-white/30 text-sm mt-4">100% Free. No Obligation.</p>
                        </div>
                    </section>
                </ScrollReveal>

            </main>

            <Footer />

            <SurveyModal
                isOpen={isSurveyOpen}
                onClose={closeSurvey}
                onComplete={handleSurveyComplete}
                source="SMM"
            />
        </div>
    );
};

export default SocialMediaManager;
