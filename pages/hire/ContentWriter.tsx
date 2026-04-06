import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, Users, Award,
    FileText, Mail, Monitor, Megaphone,
    ChevronDown, Check,
    FileX, BadgeDollarSign, RefreshCw, CreditCard, Timer,
    TrendingUp, Briefcase, ShoppingBag,
    BarChart2, PenTool,
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
        icon: FileText,
        title: 'Blog & Long-Form Content',
        desc: 'Content that ranks on Google and builds authority in your niche — written by someone who understands both SEO and storytelling.',
        items: [
            'Research and write SEO-optimized blog posts (1,000–4,000+ words)',
            'Develop pillar pages and content clusters around your core topics',
            'Produce in-depth guides, how-tos, and comparison articles that rank',
            'Optimize existing posts for target keywords, readability, and structure',
            'Write thought leadership articles for LinkedIn or industry publications',
            'Maintain a consistent editorial calendar without gaps in publishing',
        ],
    },
    {
        icon: Mail,
        title: 'Email Copywriting & Sequences',
        desc: 'Email sequences that nurture, convert, and retain — written in your brand voice from welcome to win-back.',
        items: [
            'Write welcome sequences that onboard new subscribers and drive early action',
            'Build nurture email flows that move leads from awareness to purchase',
            'Produce promotional and launch emails with strong hooks and clear CTAs',
            'Create post-purchase and upsell sequences that increase customer lifetime value',
            'Write re-engagement campaigns to reactivate dormant subscribers',
            'A/B test subject lines, preview text, and CTAs to improve open and click rates',
        ],
    },
    {
        icon: Monitor,
        title: 'Landing Pages & Website Copy',
        desc: 'Words that convert visitors into leads and leads into customers — written for humans, not search bots.',
        items: [
            'Write homepage copy that communicates your value proposition in seconds',
            'Develop service, product, and solution landing pages built around conversion',
            'Craft compelling about pages, team bios, and brand story narratives',
            'Rewrite underperforming pages based on heatmaps, bounce rate, or conversion data',
            'Write case study pages and testimonial copy that build trust and credibility',
            'Produce clear, persuasive CTAs and microcopy across your entire site',
        ],
    },
    {
        icon: Megaphone,
        title: 'Ad Copy & Short-Form Writing',
        desc: 'Short, sharp copy that stops the scroll — from Facebook and Google ads to social captions and hooks.',
        items: [
            'Write ad headlines, primary text, and CTAs for Meta, Google, and TikTok campaigns',
            'Develop multiple creative variants for A/B testing across audiences',
            'Craft social media captions, hooks, and short-form copy for Instagram, LinkedIn, and X',
            'Write video scripts for short-form ads, testimonials, and explainers',
            'Produce Google Responsive Search Ad copy across keyword themes',
            'Refresh creative copy libraries to prevent ad fatigue and maintain performance',
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
        desc: 'Recruiting is completely free. You only pay once your writer starts.',
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
        icon: PenTool,
        title: 'Dedicated — Not Shared',
        desc: 'Your content writer works exclusively for your business — not rotating through a content mill.',
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
        title: 'Coaches, Consultants & Agencies',
        desc: "You need consistent blog content, email sequences, and landing pages to build authority and convert leads — but writing isn't where you should be spending your time.",
    },
    {
        icon: ShoppingBag,
        title: 'E-Commerce & DTC Brands',
        desc: 'Product descriptions, email campaigns, ad copy, and category page content — your writer handles every touchpoint across the customer journey.',
    },
    {
        icon: TrendingUp,
        title: 'SaaS & Content-Led Businesses',
        desc: "You're building topical authority through content marketing. Your writer produces long-form articles, case studies, and landing pages that rank and convert month after month.",
    },
];

const pillars = [
    {
        icon: FileText,
        title: 'Content That Ranks AND Converts',
        desc: 'Most content either ranks on Google without converting — or converts visitors without bringing in traffic. Your content writer knows how to balance both: keyword intent, search structure, and persuasive copy in the same piece.',
    },
    {
        icon: DollarSign,
        title: 'Save $45k+ vs. a Full-Time Copywriter',
        desc: "Full-time copywriters in the US cost $50,000–$75,000 per year in salary alone. Freelancers charge $0.10–$0.50 per word with no consistency. Our dedicated content writers start at $5/hr — full ownership of your content calendar for a fraction of the cost.",
    },
    {
        icon: BarChart2,
        title: 'One Writer, Every Channel',
        desc: "Blogs. Emails. Landing pages. Ad copy. Social captions. You shouldn't need four different contractors to cover your content. One dedicated writer who knows your brand voice handles all of it — consistently, every week.",
    },
];

const faqs = [
    {
        question: 'What types of content can they write?',
        answer: 'Blog posts, long-form guides, email sequences, landing pages, website copy, ad copy, social media captions, video scripts, case studies, product descriptions, and more. During matching, we identify which content types are your highest priority.',
    },
    {
        question: 'How do they learn my brand voice?',
        answer: "Through a brand voice onboarding — existing content samples, competitor examples, your tone guidelines, and a short briefing call. Most writers get the voice right by week two. If not, we adjust or replace at no cost.",
    },
    {
        question: 'Do I need to provide research and content briefs?',
        answer: "No. Your writer handles research, topic ideation, keyword mapping, and brief creation. You review and approve the calendar, but you don't have to build the infrastructure. That said, if you have specific topics or briefs in mind, they can work to those too.",
    },
    {
        question: 'Can they write SEO-optimized content?',
        answer: 'Yes — SEO writing is a core skill for most of our content writers. They work with keyword data (from Ahrefs, Semrush, or Google Search Console), optimize headers and meta descriptions, and structure content for the right search intent. For deeper technical SEO, pair them with an SEO specialist.',
    },
    {
        question: 'How much content can they produce per week?',
        answer: 'Volume depends on content type and hours. A full-time writer (40 hrs/week) can typically produce 3–5 blog posts, 2–3 email sequences, and various shorter pieces in a week. Part-time engagement scales accordingly. We set clear expectations during onboarding.',
    },
    {
        question: 'Do they self-edit, or do I need to review everything?',
        answer: 'They self-edit before submission, but most clients do a light review pass — especially early on. Once your writer knows your voice and standards, many clients move to a simple approve/publish workflow with minimal back and forth.',
    },
    {
        question: 'Can they write for a technical or specialized niche?',
        answer: 'Yes. We match based on industry experience — not just writing ability. Whether you\'re in SaaS, healthcare, finance, law, or e-commerce, we look for writers who have written in your space and can hit the ground running without a long learning curve.',
    },
    {
        question: 'How is this different from using ChatGPT or an AI writing tool?',
        answer: 'AI can draft quickly but it can\'t match your brand voice, conduct original research, handle revision rounds, manage a content calendar, or adapt strategy based on performance data. Your content writer does all of that — plus they\'re accountable, consistent, and improve over time with your feedback.',
    },
];

// ─── Component ─────────────────────────────────────────────────────────────

const ContentWriter: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);
    const handleSurveyComplete = () => { closeSurvey(); navigate('/booking'); };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <SEO
                title="Hire a Content Writer & Copywriter | Blogs, Emails & Landing Pages | Five Star Assistants"
                description="Hire a dedicated content writer for blog posts, email sequences, landing pages, and ad copy. Free placement. Starting at $5/hr. Matched in 7 days."
                keywords="hire content writer, copywriter virtual assistant, outsource content writing, affordable copywriter, remote content writer, blog writer for hire, email copywriter, landing page copywriter"
                canonical="https://www.fivestarassistants.com/hire/content-writer"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* ── Hero ──────────────────────────────────────────────── */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Content Writers & Copywriters"
                        headline={
                            <>
                                Hire A Dedicated Content Writer.{' '}
                                <span className="text-gold italic">Starting at $5/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Blog posts, email sequences, landing pages, and ad copy —
                                written in your voice and published on schedule, every week.{' '}
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
                                    Everything a Content Writer Takes Off Your Plate
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    One dedicated writer who owns your content across every channel — blogs, email, landing pages, and ads.
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
                                    Find My Content Writer
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
                                    We've removed every friction point from hiring a remote content writer so you can focus on your business, not managing freelancers.
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
                                    Built For Businesses That Need Words That Work
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    If your content is inconsistent, your emails are sporadic, or your landing pages aren't converting — a dedicated content writer fixes all three.
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

                {/* ── Built Around Your Voice ───────────────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">

                            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                                <div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                        WHY FSA FOR CONTENT
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built Around Your Voice
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Most businesses either write content themselves — inconsistently, whenever there's time — or hire a content agency that produces generic, interchangeable articles that could belong to any brand.</p>
                                        <p>At Five Star Assistants, we match you with a dedicated content writer who learns your brand voice, owns your content calendar, and produces work that sounds like you — across blogs, email, landing pages, and ads — week after week, without being managed.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">Book A Discovery Call</Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>
                                <div>
                                    <img src="/images/va-2.png" alt="Content writer at work" className="w-full rounded-[2rem] shadow-xl object-cover" />
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
                                Great Content Is The One Thing{' '}
                                <span className="text-gold italic">That Never Stops Working</span>
                            </h2>
                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us what you need written and we'll match you with a qualified content writer — in as little as 7 days. No agencies, no setup fees, no long-term contracts.
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
            <SurveyModal isOpen={isSurveyOpen} onClose={closeSurvey} onComplete={handleSurveyComplete} source="Content Writer" />
        </div>
    );
};

export default ContentWriter;
