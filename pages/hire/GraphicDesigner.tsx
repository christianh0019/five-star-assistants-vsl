import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, Users, Award,
    Palette, Image, Layout, FileText,
    ChevronDown, Check,
    FileX, BadgeDollarSign, RefreshCw, CreditCard, Layers, Timer,
    ShoppingBag, Briefcase, TrendingUp,
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
        icon: Palette,
        title: 'Brand Identity & Visual Design',
        desc: 'A consistent visual identity is what makes your brand look like a real business. Your designer builds and maintains every asset.',
        items: [
            'Design or refresh logos, wordmarks, and brand mark variations',
            'Build full brand style guides covering colors, typography, and usage rules',
            'Create brand asset libraries — icons, patterns, textures, and graphic elements',
            'Design brand templates across all touchpoints for visual consistency',
            'Develop sub-brand or product-line visual identities that stay on-system',
            'Audit existing brand materials and flag inconsistencies for correction',
        ],
    },
    {
        icon: Image,
        title: 'Marketing & Ad Creative',
        desc: 'Scroll-stopping ad creative designed to convert — across every platform and placement.',
        items: [
            'Design static ad creatives for Meta, Google Display, TikTok, and LinkedIn',
            'Produce carousel ads, banner ads, and responsive display ad sets',
            'Create multiple creative variants for A/B testing across audiences',
            'Adapt ad designs to all required sizes and platform specs',
            'Design promotional graphics for sales, launches, and seasonal campaigns',
            'Refresh creative libraries regularly to prevent ad fatigue and maintain performance',
        ],
    },
    {
        icon: Layout,
        title: 'Social Media Graphics',
        desc: 'A feed that looks like a real brand — post templates, story frames, and carousel slides, ready to publish.',
        items: [
            'Design branded post templates for Instagram, Facebook, LinkedIn, and Pinterest',
            'Create story and Reel cover templates in your brand colors and fonts',
            'Produce carousel slide decks with visual hierarchy and clear narrative flow',
            'Design highlight covers, profile graphics, and link-in-bio landing pages',
            'Build a library of reusable social templates your team can update themselves',
            'Adapt designs to platform specs and safe zones for every format',
        ],
    },
    {
        icon: FileText,
        title: 'Print & Document Design',
        desc: 'From pitch decks that win clients to brochures that close deals — print-ready, professional, and on brand.',
        items: [
            'Design pitch decks, investor presentations, and sales decks in PowerPoint or Canva',
            'Create brochures, flyers, and one-pagers for print and digital distribution',
            'Design business cards, letterheads, and branded stationery',
            'Produce lead magnets, ebooks, and downloadable PDF guides',
            'Create event materials — banners, signage, trade show assets, and programs',
            'Deliver all files print-ready (CMYK, bleed, correct DPI) or web-optimized as needed',
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
        desc: 'Recruiting is completely free. You only pay once your designer starts.',
    },
    {
        icon: RefreshCw,
        title: 'Free Replacement',
        desc: "If someone isn't the right fit, we replace them at no extra cost.",
    },
    {
        icon: CreditCard,
        title: 'One Simple Hourly Rate',
        desc: 'Your rate covers everything — equipment, software, and all associated costs.',
    },
    {
        icon: Layers,
        title: 'Dedicated — Not Shared',
        desc: 'Your designer works exclusively for your business — not rotating between 20 client briefs.',
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
        desc: "You need product creative, ad assets, email graphics, and social content produced consistently — without briefing a new freelancer every week.",
    },
    {
        icon: Briefcase,
        title: 'Marketing Agencies',
        desc: 'You have client work and internal brand needs. A dedicated designer increases output without the cost of another full-time salary.',
    },
    {
        icon: TrendingUp,
        title: 'Coaches, Consultants & Personal Brands',
        desc: "Your brand is tied to how you show up visually. A dedicated designer keeps every post, deck, and asset looking like it came from the same place.",
    },
];

const pillars = [
    {
        icon: Palette,
        title: 'Consistency Is The Foundation of Every Strong Brand',
        desc: 'Most businesses look inconsistent — different fonts on ads, off-brand colors on social, presentations that feel disconnected from the website. A dedicated designer becomes the guardian of your visual identity across every touchpoint.',
    },
    {
        icon: DollarSign,
        title: 'Save $45k+ vs. a Full-Time Designer',
        desc: 'In-house graphic designers in the US cost $50,000–$75,000 per year — before software, benefits, and overhead. Our dedicated designers start at $5/hr. Same daily output, full brand ownership, none of the burden.',
    },
    {
        icon: BarChart2,
        title: 'One Designer Who Knows Your Brand Inside Out',
        desc: "Freelancers require a new brief every time. Agencies have no brand memory. Your Five Star designer learns your brand once and gets sharper with every project — zero re-briefing, zero style drift, zero chasing people for files.",
    },
];

const faqs = [
    {
        question: 'What design tools do they use?',
        answer: 'Adobe Creative Suite (Photoshop, Illustrator, InDesign, Premiere), Canva Pro, Figma, and Google Slides. We match you with a designer proficient in the tools you already use — or recommend the right stack if you\'re starting fresh.',
    },
    {
        question: 'What file formats can they deliver?',
        answer: 'Any format you need — PNG, JPG, SVG, PDF (print-ready CMYK or web), AI, PSD, EPS, MP4. Print files are delivered with correct DPI, bleed, and color profiles. Digital assets are optimized for web and platform specs.',
    },
    {
        question: 'Do I need to provide a brand guide or creative brief?',
        answer: "Not necessarily. If you have brand guidelines, they'll follow them precisely. If you don't, they can help establish your visual system from scratch based on examples you like. Either way, onboarding covers everything before they touch a single brief.",
    },
    {
        question: 'How does the revision process work?',
        answer: "They deliver work with built-in revision rounds (typically 2–3 per project) based on your feedback. Most clients set up a shared feedback tool like Notion, Google Doc, or Frame.io. Over time, revisions drop significantly as your designer internalizes your preferences.",
    },
    {
        question: 'Can they design for print — not just digital?',
        answer: "Yes. Print design (brochures, flyers, business cards, signage, trade show materials) is a core capability. They deliver print-ready files with the correct bleed, resolution, and color mode — ready to send directly to your print vendor.",
    },
    {
        question: 'How quickly can they turn around projects?',
        answer: "Turnaround depends on complexity and hours. Social graphics and ad creatives: same day or next day. Pitch decks and brochures: 2–4 days. Brand identity projects: 1–2 weeks. Once your designer knows your style, turnaround gets faster.",
    },
    {
        question: 'Can they design for a specific niche or industry?',
        answer: "We match based on portfolio and industry experience. Whether you're in healthcare, real estate, e-commerce, SaaS, or hospitality — we look for designers who've worked in your space and understand the conventions and expectations of your market.",
    },
    {
        question: 'How is this different from hiring a designer on Fiverr or Upwork?',
        answer: "Freelancers have no brand memory, inconsistent availability, and are managing dozens of clients. Your Five Star designer is dedicated to your business, works your hours, and is held accountable by our in-house HR team — including full-screen activity tracking.",
    },
];

// ─── Component ─────────────────────────────────────────────────────────────

const GraphicDesigner: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);
    const handleSurveyComplete = () => { closeSurvey(); navigate('/booking'); };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <SEO
                title="Hire a Graphic Designer | Brand, Social & Ad Creative | Five Star Assistants"
                description="Hire a dedicated graphic designer for brand identity, social media graphics, ad creative, and print design. Free placement. Starting at $5/hr. Matched in 7 days."
                keywords="hire graphic designer, graphic designer virtual assistant, outsource graphic design, affordable graphic designer, remote graphic designer, brand designer for hire, social media graphic designer, ad creative designer"
                canonical="https://www.fivestarassistants.com/hire/graphic-designer"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* ── Hero ──────────────────────────────────────────────── */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Graphic Designers"
                        headline={
                            <>
                                Hire A Dedicated Graphic Designer.{' '}
                                <span className="text-gold italic">Starting at $5/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Brand identity, social media graphics, ad creative, and print design —
                                one designer who knows your brand and keeps everything consistent.{' '}
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
                                    Everything a Graphic Designer Takes Off Your Plate
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    One dedicated designer who owns your visual identity — from brand assets and ad creative to social graphics and print materials.
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
                                    Find My Graphic Designer
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
                                    We've removed every friction point from hiring a remote designer so you can focus on your brand, not managing freelancers.
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
                                    Built For Businesses That Need To Look The Part
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    If your brand looks inconsistent, your creative output is too slow, or you're still bribing a different freelancer every week — this is the fix.
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
                                        WHY FSA FOR DESIGN
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built Around Your Brand
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Most businesses juggle three or four designers at once — a Fiverr freelancer for social, a different agency for ads, someone on the team rebuilding templates in Canva every other week. The result is a brand that looks like it was designed by committee.</p>
                                        <p>At Five Star Assistants, we match you with one dedicated graphic designer who learns your brand inside and out — and handles everything from daily social assets to major campaign launches, all consistent, all on time, all without a constant back-and-forth.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">Book A Discovery Call</Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>
                                <div>
                                    <img src="/images/va-2.png" alt="Graphic designer at work" className="w-full rounded-[2rem] shadow-xl object-cover" />
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
                                Your Brand Should Look As Good As{' '}
                                <span className="text-gold italic">It Actually Is</span>
                            </h2>
                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us what you need designed and we'll match you with a qualified graphic designer — in as little as 7 days. No freelancer roulette, no setup fees, no long-term contracts.
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
            <SurveyModal isOpen={isSurveyOpen} onClose={closeSurvey} onComplete={handleSurveyComplete} source="Graphic Designer" />
        </div>
    );
};

export default GraphicDesigner;
