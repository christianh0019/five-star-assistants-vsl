import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, Users, Award,
    MessageSquare, Shield, Package, Heart,
    ChevronDown, Check,
    FileX, BadgeDollarSign, RefreshCw, CreditCard, Timer,
    TrendingUp, Briefcase, Building,
    AlertCircle, Star,
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
        icon: MessageSquare,
        title: 'Customer Inquiry Handling',
        desc: 'Every customer question answered quickly and professionally — across email, chat, phone, or social — so nothing goes ignored.',
        items: [
            'Respond to customer questions across email, live chat, and social media channels',
            'Answer product and service questions clearly using your knowledge base or FAQs',
            'Handle pre-sale inquiries and guide prospects toward the right decision',
            'Respond to reviews, feedback, and direct messages on behalf of your brand',
            'Maintain consistent tone and brand voice across every customer interaction',
            'Log all inquiries and responses for tracking and quality review purposes',
        ],
    },
    {
        icon: Shield,
        title: 'Issue Resolution & Escalation',
        desc: 'Customer problems handled completely — resolved when possible, escalated properly when not — so nothing falls through the cracks.',
        items: [
            'Investigate and resolve common customer complaints and service issues',
            'Process refund requests, replacement orders, and service adjustments',
            'Escalate complex or sensitive issues to the appropriate team with full context',
            'Follow up with customers after resolution to confirm satisfaction',
            'Document recurring issue types to surface patterns for process improvement',
            'Maintain calm, professional communication with frustrated or upset customers',
        ],
    },
    {
        icon: Package,
        title: 'Order & Account Management',
        desc: "Order questions, account changes, and customer records — managed accurately so your customers get what they need without having to ask twice.",
        items: [
            'Look up and update order status, shipping details, and delivery timelines',
            'Process address changes, order modifications, and cancellation requests',
            'Update customer account information across your CRM and support platform',
            'Coordinate with fulfillment and shipping teams on order issues or delays',
            'Handle subscription changes, plan upgrades, and billing inquiry responses',
            'Maintain accurate records of all customer interactions and account changes',
        ],
    },
    {
        icon: Heart,
        title: 'Customer Retention & Satisfaction',
        desc: 'Proactive outreach and follow-up that keeps customers happy, reduces churn, and turns satisfied buyers into loyal advocates.',
        items: [
            'Follow up with customers post-purchase to confirm delivery and satisfaction',
            'Reach out to at-risk customers showing signs of disengagement or dissatisfaction',
            'Request reviews and testimonials from happy customers at the right moment',
            'Handle win-back outreach for recently churned or lapsed customers',
            'Collect and log customer feedback for product and service improvement',
            'Acknowledge and respond to negative reviews professionally and constructively',
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
        desc: 'Recruiting is completely free. You only pay once your rep starts.',
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
        icon: MessageSquare,
        title: 'Dedicated — Not Shared',
        desc: 'Your rep works exclusively for your customers — not splitting attention across a shared support queue with other businesses.',
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
        title: 'E-Commerce Brands',
        desc: "Order questions, shipping issues, returns, and refund requests — your customers expect fast answers. A dedicated rep handles every ticket so your team isn't buried in support while trying to grow the business.",
    },
    {
        icon: Briefcase,
        title: 'SaaS & Service Companies',
        desc: "Your customers need help getting value from what they bought. A dedicated customer service rep handles onboarding questions, troubleshooting, and account issues — so your team focuses on product and sales, not support queues.",
    },
    {
        icon: TrendingUp,
        title: 'Local Service Businesses',
        desc: "Calls, texts, and emails from customers who need status updates, scheduling changes, or answers to questions. A dedicated rep handles it all professionally so you can focus on doing the work, not managing the inbox.",
    },
];

const pillars = [
    {
        icon: AlertCircle,
        title: 'Bad Customer Service Is A Revenue Leak',
        desc: "Every ignored inquiry, slow response, and unresolved complaint costs you a customer — and often more than one, through bad reviews and lost referrals. A dedicated customer service rep ensures every interaction is handled well, every time, so your reputation and retention both stay strong.",
    },
    {
        icon: DollarSign,
        title: 'Save $40k+ vs. a US-Based Customer Service Rep',
        desc: "Customer service representatives in the US cost $35,000–$55,000/year plus benefits. Our dedicated reps start at $5/hr — full-time inquiry handling, issue resolution, and retention outreach — without the full-time overhead.",
    },
    {
        icon: Star,
        title: 'Great Support Turns Customers Into Advocates',
        desc: "When a customer has a great experience — especially when something went wrong — they tell people. A dedicated rep who handles issues with speed and empathy doesn't just retain customers. They create the kind of experience people talk about, recommend, and come back for.",
    },
];

const faqs = [
    {
        question: 'What channels can they handle?',
        answer: "Email, live chat, social media DMs and comments, SMS, and phone calls. Most clients start with one or two channels and expand from there. During onboarding, we'll confirm which channels you need covered and match you with a rep who has experience with those platforms.",
    },
    {
        question: 'What platforms and tools do they work in?',
        answer: "Zendesk, Freshdesk, Gorgias, HubSpot Service Hub, Intercom, Front, Help Scout, Shopify, and most e-commerce and support platforms. We'll match you with a rep experienced in your specific stack.",
    },
    {
        question: "How do they handle situations they don't know the answer to?",
        answer: "They use your knowledge base, FAQs, and internal SOPs for standard inquiries. For anything outside their scope, they escalate with full context rather than guessing. During onboarding, you'll build out their resource library so they can handle the vast majority of tickets independently.",
    },
    {
        question: 'Can they handle upset or difficult customers?',
        answer: "Yes. De-escalation and professional communication with frustrated customers are core skills we screen for. They're trained to stay calm, acknowledge the issue, and work toward resolution — not to get defensive or dismiss the customer.",
    },
    {
        question: 'What hours can they cover?',
        answer: "We can match you with reps covering standard US business hours across any time zone. For extended coverage or after-hours support, we can also discuss shift arrangements during onboarding.",
    },
    {
        question: 'Can they process refunds and make account changes directly?',
        answer: "Yes — if you grant them the appropriate access in your platforms. Many clients give their rep limited admin access (e.g., refund up to a certain amount, update shipping addresses) with clear escalation protocols for anything beyond their authority.",
    },
    {
        question: 'How do I maintain quality control?',
        answer: "You can review ticket logs and chat transcripts at any time through your support platform. Many clients also do weekly spot-checks on random tickets. Your rep uses full-screen tracking software so you have visibility into activity throughout the day.",
    },
    {
        question: 'What if my support volume changes significantly?',
        answer: "Since there are no long-term contracts, you can scale up or down as your volume changes. If you need an additional rep during a high-volume period or a seasonal sale, we can typically match and onboard one quickly.",
    },
];

// ─── Component ─────────────────────────────────────────────────────────────

const CustomerServiceRep: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);
    const handleSurveyComplete = () => { closeSurvey(); navigate('/booking'); };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <SEO
                title="Hire a Customer Service Rep | Dedicated Customer Support VA | Five Star Assistants"
                description="Hire a dedicated customer service rep for inquiry handling, issue resolution, order management, and customer retention. Keep customers happy without burning out your team. Free placement. Starting at $5/hr."
                keywords="hire customer service rep, virtual customer service assistant, outsource customer support, dedicated support rep, e-commerce customer service VA, customer service virtual assistant"
                canonical="https://www.fivestarassistants.com/hire/customer-service"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* ── Hero ──────────────────────────────────────────────── */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Customer Service Representatives"
                        headline={
                            <>
                                Hire A Dedicated Customer Service Rep.{' '}
                                <span className="text-gold italic">Starting at $5/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Inquiry handling, issue resolution, order management, and retention outreach —
                                handled daily so every customer gets a fast, professional response.{' '}
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
                                    Everything a Customer Service Rep Takes Off Your Plate
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    One dedicated rep who owns your customer experience — inquiries, issues, orders, and retention — so every customer interaction gets the attention it deserves.
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
                                    Find My Customer Service Rep
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
                                    We've removed every friction point from hiring a dedicated customer service rep so your customers get the support they deserve from day one.
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
                                    Built For Businesses That Take Customer Experience Seriously
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    If your team is spending hours on support tickets instead of growing the business — or if customers aren't getting responses fast enough — a dedicated rep changes that.
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

                {/* ── Built Around Your Customer Experience ─────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">

                            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                                <div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                        WHY FSA FOR CUSTOMER SERVICE
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built Around Your Customer Experience
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Most growing businesses reach a point where customer support becomes a bottleneck. Tickets pile up, responses slow down, and the founder or team starts handling support instead of running the business. The customer experience suffers — and so does retention.</p>
                                        <p>At Five Star Assistants, we match you with a dedicated customer service rep who owns your support function — answering every inquiry, resolving every issue, and following up proactively — so your customers feel taken care of and your team can focus on growth.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">Book A Discovery Call</Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>
                                <div>
                                    <img src="/images/va-2.png" alt="Customer service rep handling support tickets" className="w-full rounded-[2rem] shadow-xl object-cover" />
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
                                Stop Making Customers Wait.{' '}
                                <span className="text-gold italic">Start Building Loyalty.</span>
                            </h2>
                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us about your support needs and we'll match you with a dedicated customer service rep — in as little as 7 days. No setup fees, no long-term contracts.
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
            <SurveyModal isOpen={isSurveyOpen} onClose={closeSurvey} onComplete={handleSurveyComplete} source="Customer Service Rep" />
        </div>
    );
};

export default CustomerServiceRep;
