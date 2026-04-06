import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, Users, Award,
    Search, FileText, Globe, PenTool,
    ChevronDown, Check,
    FileX, BadgeDollarSign, RefreshCw, CreditCard, Monitor, Timer,
    MapPin, ShoppingBag, TrendingUp,
    BarChart2, Briefcase,
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
        icon: Search,
        title: 'Keyword Research & Strategy',
        desc: 'Finding the right keywords is where SEO starts. Your specialist builds a keyword map that targets what your buyers are actually searching for.',
        items: [
            'Conduct full keyword research using Ahrefs, Semrush, or Ubersuggest',
            'Map keywords to pages across your site — blog, product, service, and landing pages',
            'Identify high-intent, low-competition opportunities to rank faster',
            'Analyze competitor keyword gaps and surface quick-win targets',
            'Build a content calendar around keywords that drive commercial traffic',
            'Track keyword rankings weekly and adjust strategy based on movement',
        ],
    },
    {
        icon: FileText,
        title: 'On-Page Optimization',
        desc: 'Every page on your site is an opportunity to rank. Your specialist optimizes each one for both search engines and real readers.',
        items: [
            'Optimize title tags, meta descriptions, and header structure (H1–H4)',
            'Improve internal linking across all key pages to distribute authority',
            'Add and optimize image alt text, schema markup, and structured data',
            'Audit and fix thin, duplicate, or cannibalized content across the site',
            'Optimize page speed and core web vital signals in collaboration with your dev',
            'Conduct regular content refreshes to keep top pages ranking and current',
        ],
    },
    {
        icon: Globe,
        title: 'Link Building & Off-Page SEO',
        desc: 'Authority comes from other sites linking to yours. Your specialist runs outreach and builds the backlink profile that signals trust to Google.',
        items: [
            'Identify high-authority websites and blogs for link outreach in your niche',
            'Execute guest posting, resource page, and broken link building campaigns',
            'Write or coordinate anchor-optimized content for external publications',
            'Disavow toxic backlinks and clean up spammy link profiles',
            'Monitor your domain authority, referring domains, and backlink growth',
            'Build local citations and directory listings for geo-targeted businesses',
        ],
    },
    {
        icon: PenTool,
        title: 'Content Strategy & SEO Writing',
        desc: 'Content is the engine of SEO. Your specialist plans and produces articles that rank, attract backlinks, and bring in qualified traffic.',
        items: [
            'Develop a full content strategy mapped to your keyword and funnel targets',
            'Write long-form, SEO-optimized blog posts and pillar pages (1,500–4,000 words)',
            'Build content clusters that establish topical authority in your niche',
            'Optimize existing blog posts to recover lost rankings and improve CTR',
            'Create landing page copy that balances search intent with conversion goals',
            'Produce monthly content reports showing traffic, rankings, and engagement',
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
        icon: Monitor,
        title: 'Dedicated — Not Shared',
        desc: 'Your SEO specialist works exclusively for your business — not managing 30 client accounts.',
    },
    {
        icon: Timer,
        title: 'Full Activity Tracking',
        desc: 'Every assistant uses full-screen tracking software monitored by our in-house HR team.',
    },
];

const whoIsThisFor = [
    {
        icon: MapPin,
        title: 'Local Service Businesses',
        desc: "Dentists, law firms, home services, and med spas — if your customers search 'near me,' your specialist focuses on local SEO that puts you at the top of the map pack and organic results.",
    },
    {
        icon: ShoppingBag,
        title: 'E-Commerce & DTC Brands',
        desc: 'Product pages, category pages, and collection SEO are a different skill set. Your specialist optimizes every layer of your store so buyers find you before they find a competitor.',
    },
    {
        icon: Briefcase,
        title: 'SaaS & Content-Led Businesses',
        desc: 'You need topical authority, not just traffic. Your specialist builds content clusters, earns backlinks, and targets high-intent keywords that bring in trial signups and qualified leads.',
    },
];

const pillars = [
    {
        icon: TrendingUp,
        title: 'SEO Is A Long Game — But Only If You Start',
        desc: 'Most businesses say they want to rank on Google and never take consistent action. SEO compounds — every article written, every link earned, every page optimized builds on the last. A dedicated specialist is what turns the intention into actual results.',
    },
    {
        icon: DollarSign,
        title: 'Save $50k+ vs. a Full-Time SEO Manager',
        desc: 'In-house SEO managers in the US cost $55,000–$85,000 per year — before benefits, tools, and overhead. Our dedicated SEO specialists start at $5/hr. Full-stack SEO (technical, content, links) at a fraction of the cost.',
    },
    {
        icon: BarChart2,
        title: 'Technical + Content + Links — All Three',
        desc: "Most agencies do one or two. A real SEO specialist handles keyword research, on-page optimization, content creation, and link building — because all three work together. Ranking only comes from getting all three right, consistently.",
    },
];

const faqs = [
    {
        question: 'What SEO tools do they use?',
        answer: 'Ahrefs, Semrush, Google Search Console, Google Analytics, Screaming Frog, Ubersuggest, and Moz. We match you with a specialist familiar with the tools you already have, or recommend the right stack if you\'re starting fresh.',
    },
    {
        question: 'How long before I see results from SEO?',
        answer: 'Typically 3–6 months for meaningful ranking movement on competitive terms, faster for long-tail or local SEO. The first 30 days are audit and strategy — months 2–4 are where you see the first gains. SEO compounds, so results grow over time.',
    },
    {
        question: 'Can they handle technical SEO — not just content?',
        answer: 'Yes. Technical SEO (crawlability, site speed, schema, indexation, redirects, Core Web Vitals) is part of the role. For changes that require direct code edits, they\'ll produce clear instructions or work directly with your developer.',
    },
    {
        question: 'Do they write the SEO content or just optimize existing pages?',
        answer: 'Both. They write new long-form content (blog posts, pillar pages, landing pages) and optimize existing content that\'s ranking on page two or losing traffic. Ongoing content production is often what separates sites that plateau from sites that compound.',
    },
    {
        question: 'Can they help with local SEO and Google Business Profile?',
        answer: 'Yes — local SEO is a common specialization. That includes Google Business Profile optimization, local citation building, NAP consistency, local keyword targeting, and review strategy. We match based on whether local or national SEO is your priority.',
    },
    {
        question: 'How do they access my website to make changes?',
        answer: 'Through your CMS (WordPress, Shopify, Webflow, etc.) with appropriate editor or admin access. For technical changes, they\'ll document exactly what needs to be changed so you or your developer can implement. No risk, no guessing.',
    },
    {
        question: 'How do they report on SEO progress?',
        answer: 'Monthly reports covering keyword ranking movement, organic traffic trends, backlink growth, and top-performing pages. You\'ll always know what was done that month and what the plan is for next month.',
    },
    {
        question: 'How is this different from hiring an SEO agency?',
        answer: 'Agencies spread their junior staff across dozens of clients, lock you into 6–12 month contracts, and charge $2,000–$5,000/month for work that takes a few hours per week. Your Five Star SEO specialist is dedicated to your site, works your hours, and is held accountable by our in-house HR team.',
    },
];

// ─── Component ─────────────────────────────────────────────────────────────

const SEOSpecialist: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);
    const handleSurveyComplete = () => { closeSurvey(); navigate('/booking'); };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <SEO
                title="Hire an SEO Specialist | Keyword Research, On-Page & Link Building | Five Star Assistants"
                description="Hire a dedicated SEO specialist for keyword research, on-page optimization, link building, and SEO content. Free placement. Starting at $5/hr. Matched in 7 days."
                keywords="hire SEO specialist, SEO virtual assistant, outsource SEO, affordable SEO specialist, remote SEO manager, link building virtual assistant, on-page SEO, technical SEO"
                canonical="https://www.fivestarassistants.com/hire/seo-specialist"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* ── Hero ──────────────────────────────────────────────── */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="SEO Specialists"
                        headline={
                            <>
                                Hire A Dedicated SEO Specialist.{' '}
                                <span className="text-gold italic">Starting at $5/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Keyword research, on-page optimization, link building, and SEO content —
                                all handled by one specialist who lives in Google Search Console.{' '}
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
                                    Everything an SEO Specialist Takes Off Your Plate
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    One dedicated specialist who owns your search strategy end-to-end — keywords, content, links, and technical.
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
                                    Find My SEO Specialist
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
                                    We've removed every barrier to hiring a dedicated remote SEO specialist so you can focus on growth, not recruiting.
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
                                    Built For Businesses Ready To Own Their Rankings
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    If you're relying on paid ads for all your traffic — a dedicated SEO specialist is how you build something that compounds.
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

                {/* ── Built Around Your Search Strategy ────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">

                            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                                <div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                        WHY FSA FOR SEO
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built Around Your Search Strategy
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Most businesses know they should invest in SEO but either try to do it themselves sporadically — or hand it to an agency that puts a junior on their account and sends a generic monthly report.</p>
                                        <p>At Five Star Assistants, we match you with a dedicated SEO specialist who treats your site like their own — running weekly keyword checks, publishing optimized content, building backlinks, and delivering a clear strategy report every month. All for a fraction of what an agency or in-house hire would cost.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">Book A Discovery Call</Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>
                                <div>
                                    <img src="/images/va-2.png" alt="SEO specialist working" className="w-full rounded-[2rem] shadow-xl object-cover" />
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
                                Stop Paying For Ads You Could{' '}
                                <span className="text-gold italic">Earn For Free</span>
                            </h2>
                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us about your site and goals and we'll match you with a qualified SEO specialist — in as little as 7 days. No agency markups, no setup fees, no long-term contracts.
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
            <SurveyModal isOpen={isSurveyOpen} onClose={closeSurvey} onComplete={handleSurveyComplete} source="SEO Specialist" />
        </div>
    );
};

export default SEOSpecialist;
