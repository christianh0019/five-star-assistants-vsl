import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, Users, Award,
    Mail, Filter, CheckSquare, BarChart2,
    ChevronDown, Check,
    FileX, BadgeDollarSign, RefreshCw, CreditCard, Timer,
    TrendingUp, Briefcase, Building,
    Target, AlertCircle,
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
        title: 'Email Support & Inbox Management',
        desc: 'Every customer email answered promptly and professionally — so your support inbox never becomes a backlog of frustrated customers.',
        items: [
            'Monitor and respond to all incoming customer support emails',
            'Write clear, professional, on-brand responses to customer inquiries',
            'Answer product and service questions using your knowledge base and SOPs',
            'Handle refund requests, complaint emails, and sensitive customer situations',
            'Manage support inbox organization — folders, labels, and flagging for follow-up',
            'Maintain response time targets and log all interactions for quality tracking',
        ],
    },
    {
        icon: Filter,
        title: 'Ticket Triage & Prioritization',
        desc: 'Incoming tickets sorted, tagged, and prioritized correctly — so urgent issues get addressed first and nothing sits unattended.',
        items: [
            'Triage all incoming support tickets and assign priority levels consistently',
            'Tag and categorize tickets by type (billing, technical, shipping, general) for reporting',
            'Route tickets that require specialist handling to the right team or rep',
            'Identify duplicate or related tickets and merge them to avoid confusion',
            'Flag high-priority or escalation-level tickets immediately for faster resolution',
            'Maintain a clean, organized ticket queue with clear status and ownership',
        ],
    },
    {
        icon: CheckSquare,
        title: 'Resolution & Follow-Up',
        desc: 'Tickets resolved completely — not just replied to — with follow-up sent to confirm the customer is satisfied and the issue is closed.',
        items: [
            'Work tickets through to full resolution, not just initial response',
            'Coordinate with internal teams to gather information needed for complex resolutions',
            'Send follow-up messages after resolution to confirm customer satisfaction',
            'Reopen and re-address tickets where the customer is still unsatisfied',
            'Document resolution steps for recurring issue types to build internal knowledge',
            'Close and archive resolved tickets with accurate resolution notes attached',
        ],
    },
    {
        icon: BarChart2,
        title: 'Reporting & Trend Analysis',
        desc: 'Weekly reports and trend summaries that show you what your customers are asking about, complaining about, and what\'s taking the most time to resolve.',
        items: [
            'Track and report ticket volume, response times, and resolution rates weekly',
            'Identify the most common support topics and surface them for FAQ updates',
            'Flag recurring product or service issues that suggest a systemic problem',
            'Report on customer sentiment patterns from ticket language and feedback',
            'Measure first-contact resolution rates and identify where multi-touch tickets occur',
            'Deliver monthly support summaries to help inform product and service decisions',
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
        desc: 'Your specialist works exclusively on your support inbox — not splitting attention across ticket queues for multiple businesses.',
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
        title: 'SaaS & Tech Companies',
        desc: "Your support volume grows with your user base — and at some point, the team can't keep up without someone dedicated to it. A specialist handles the inbox consistently so response times stay fast and customer satisfaction stays high.",
    },
    {
        icon: Building,
        title: 'E-Commerce Brands',
        desc: "Post-purchase emails — order questions, delivery issues, return requests, refund disputes — need fast, accurate responses. A dedicated specialist handles them all so your team can focus on acquisition and operations.",
    },
    {
        icon: TrendingUp,
        title: 'Service Businesses',
        desc: "Client emails, service follow-ups, complaint handling, and billing inquiries all need prompt, professional responses. A specialist ensures no email sits unanswered and no client feels ignored.",
    },
];

const pillars = [
    {
        icon: AlertCircle,
        title: 'Slow Email Support Costs You Customers',
        desc: "Most customers will tolerate one slow response. After the second, they're looking for an alternative. And when they find one, they rarely come back — and often leave a review about the experience. A dedicated email support specialist keeps response times fast so customers feel valued before they feel frustrated.",
    },
    {
        icon: DollarSign,
        title: 'Save $40k+ vs. a US-Based Support Agent',
        desc: "Customer support specialists in the US cost $35,000–$55,000/year. Our dedicated specialists start at $5/hr — full-time inbox management, ticket triage, resolution, and reporting — without the full-time overhead.",
    },
    {
        icon: Target,
        title: 'A Clean Support Inbox Reflects A Healthy Business',
        desc: "When your support inbox is under control — fast responses, tickets resolved completely, trends surfaced and acted on — it signals operational health throughout your business. Customers feel it. Your team feels it. And the data from a well-managed support function helps you make better product and service decisions.",
    },
];

const faqs = [
    {
        question: 'What support platforms do they work in?',
        answer: "Zendesk, Freshdesk, Gorgias, HubSpot Service Hub, Help Scout, Front, Intercom, Groove, and most other helpdesk and ticketing platforms. We'll match you with a specialist experienced in your specific tool.",
    },
    {
        question: 'How do they handle emails they don't know the answer to?',
        answer: "They escalate properly — flagging the ticket with context and routing it to the right person — rather than guessing or sending a generic response. During onboarding, you'll build their knowledge base and define clear escalation paths so they can handle the vast majority of tickets independently.",
    },
    {
        question: 'Can they process refunds or make account changes directly?',
        answer: "Yes — within the limits you set. Many clients grant their specialist access to process refunds up to a certain amount, update shipping addresses, or change subscription plans. For anything beyond their authority, they escalate with full context so you can act quickly.",
    },
    {
        question: 'What response time can I expect?',
        answer: "Response time targets are set during onboarding based on your expectations and ticket volume. Most clients target same-day or next-business-day first responses. With a dedicated specialist, that target becomes consistent rather than dependent on whoever has time.",
    },
    {
        question: 'Can they handle billing and payment inquiries?',
        answer: "Yes — with appropriate access to your billing system or CRM. Common billing tasks include explaining charges, processing refunds, updating payment methods, and handling subscription changes. For sensitive billing disputes, they escalate to you or your finance team with full context.",
    },
    {
        question: 'How do they maintain consistent tone and brand voice?',
        answer: "During onboarding, you'll provide brand voice guidelines, example responses, and any email templates you use. Your specialist follows these closely and develops familiarity with your brand over time. You can review responses at any time and provide feedback to calibrate further.",
    },
    {
        question: 'Can they also handle live chat or phone support?',
        answer: "Yes. Many clients have their email support specialist handle additional channels like live chat or SMS. If you need multi-channel coverage, tell us during onboarding and we'll match you with a specialist who has experience across all required channels.",
    },
    {
        question: 'How do I know they're handling tickets correctly?',
        answer: "You can review tickets and responses directly in your helpdesk at any time. Many clients do weekly spot-checks on a sample of tickets. You can also set up approval workflows for sensitive responses during the initial onboarding period while the specialist gets up to speed.",
    },
];

// ─── Component ─────────────────────────────────────────────────────────────

const EmailTicketSupport: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);
    const handleSurveyComplete = () => { closeSurvey(); navigate('/booking'); };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <SEO
                title="Hire an Email & Ticket Support Specialist | Helpdesk Management VA | Five Star Assistants"
                description="Hire a dedicated email and ticket support specialist for inbox management, ticket triage, issue resolution, and reporting. Keep your support inbox under control. Free placement. Starting at $5/hr."
                keywords="hire email support specialist, ticket support virtual assistant, helpdesk management VA, outsource email support, customer email support assistant, Zendesk VA, Freshdesk virtual assistant"
                canonical="https://www.fivestarassistants.com/hire/email-support"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* ── Hero ──────────────────────────────────────────────── */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Email & Ticket Support Specialists"
                        headline={
                            <>
                                Hire A Dedicated Email Support Specialist.{' '}
                                <span className="text-gold italic">Starting at $5/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Inbox management, ticket triage, issue resolution, and trend reporting —
                                handled consistently so every customer gets a fast, complete response.{' '}
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
                                    Everything an Email Support Specialist Takes Off Your Plate
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    One dedicated specialist who owns your support inbox — email responses, ticket triage, resolution, and reporting — so customers get fast answers and your team gets visibility into what's happening.
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
                                    Find My Email Support Specialist
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
                                    We've removed every friction point from hiring a dedicated email support specialist so your inbox gets handled and your customers feel taken care of.
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
                                    Built For Businesses With A Growing Support Inbox
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    If your support inbox is becoming a bottleneck — slow responses, incomplete resolutions, or no one dedicated to owning it — a specialist takes it off your plate completely.
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

                {/* ── Built Around Your Support Inbox ───────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">

                            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                                <div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                        WHY FSA FOR EMAIL SUPPORT
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built Around Your Support Inbox
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Most businesses handle email support reactively — whoever has a free moment responds, tickets get half-answered, and follow-up never happens. Customers wait, get frustrated, and leave. The inbox becomes something everyone dreads opening.</p>
                                        <p>At Five Star Assistants, we match you with a dedicated email support specialist who owns your inbox completely — triaging every ticket, responding promptly, following up until issues are resolved, and surfacing patterns your team needs to see.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">Book A Discovery Call</Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>
                                <div>
                                    <img src="/images/va-2.png" alt="Email support specialist managing tickets" className="w-full rounded-[2rem] shadow-xl object-cover" />
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
                                Handle Every Ticket.{' '}
                                <span className="text-gold italic">Keep Every Customer.</span>
                            </h2>
                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us about your support inbox and we'll match you with a dedicated email support specialist — in as little as 7 days. No setup fees, no long-term contracts.
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
            <SurveyModal isOpen={isSurveyOpen} onClose={closeSurvey} onComplete={handleSurveyComplete} source="Email & Ticket Support" />
        </div>
    );
};

export default EmailTicketSupport;
