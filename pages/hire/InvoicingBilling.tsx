import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, Users, Award,
    FileText, Calendar, Settings, RefreshCw,
    ChevronDown, Check,
    FileX, BadgeDollarSign, CreditCard, Timer,
    TrendingUp, Briefcase, Building,
    Star, AlertCircle,
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
        title: 'Invoice Creation & Sending',
        desc: 'Accurate invoices created and sent on time — every project, every milestone, every retainer — so billing never falls behind.',
        items: [
            'Create invoices in your billing software based on completed work, time logs, or milestones',
            'Apply correct rates, line items, taxes, and discounts to each invoice accurately',
            'Send invoices to clients via email, billing portal, or your preferred delivery method',
            'Customize invoice templates to match your brand and billing structure',
            'Process retainer invoices, milestone billing, and progress payments on schedule',
            'Log all sent invoices with amounts, due dates, and client details for tracking',
        ],
    },
    {
        icon: Calendar,
        title: 'Payment Tracking & Follow-Up',
        desc: 'Every invoice tracked from sent to paid — with timely follow-up on anything overdue so payments arrive without you having to chase them.',
        items: [
            'Monitor payment status for all outstanding invoices daily',
            'Send payment reminders at defined intervals before and after due dates',
            'Follow up with clients on overdue invoices by email or phone',
            'Record and apply payments to the correct invoices when received',
            'Escalate significantly overdue accounts for your review and decision',
            'Maintain a current aging report showing all outstanding invoices by age',
        ],
    },
    {
        icon: Settings,
        title: 'Billing System Management',
        desc: 'Your billing software maintained and organized — with accurate client records, current rate sheets, and clean invoice histories.',
        items: [
            'Maintain up-to-date client profiles with correct billing contacts and rates',
            'Set up new clients in your billing system with appropriate terms and settings',
            'Update pricing, rate changes, and service configurations as they evolve',
            'Organize and archive invoice histories for completed projects and clients',
            'Troubleshoot billing system issues and coordinate with software support if needed',
            'Keep payment method records current and flag expiring cards or failed charges',
        ],
    },
    {
        icon: RefreshCw,
        title: 'Recurring Billing & Subscription Management',
        desc: 'Recurring charges set up correctly and running automatically — with failed payments caught and resolved before they become lost revenue.',
        items: [
            'Set up and manage recurring invoices for retainer and subscription clients',
            'Monitor automatic charge runs and resolve failed payments promptly',
            'Update subscription plans, quantities, and pricing when changes occur',
            'Send renewal reminders and process renewals for annual subscription clients',
            'Handle subscription cancellations, pauses, and plan downgrades per client request',
            'Reconcile recurring revenue against expected billing for the period',
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
        icon: FileText,
        title: 'Dedicated — Not Shared',
        desc: 'Your billing specialist works exclusively on your invoicing — not splitting time across a roster of other clients.',
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
        title: 'Service Businesses & Consultants',
        desc: "You do the work — but invoicing is always a step behind. A dedicated billing specialist ensures every client gets invoiced on time, every payment is tracked, and nothing falls through the cracks between project delivery and cash collected.",
    },
    {
        icon: Building,
        title: 'Agencies & Firms',
        desc: "Complex billing across retainers, project milestones, and hourly clients requires someone dedicated to getting it right. A specialist manages the entire billing cycle so your account managers and delivery team can focus on client work.",
    },
    {
        icon: TrendingUp,
        title: 'SaaS & Subscription Businesses',
        desc: "Recurring billing, failed charges, plan changes, and renewal management require consistent daily attention. A specialist keeps your recurring revenue running cleanly so failed payments don't silently become churned customers.",
    },
];

const pillars = [
    {
        icon: AlertCircle,
        title: 'Inconsistent Invoicing Slows Your Cash Flow',
        desc: "Every day a completed project goes unbilled is a day your cash flow suffers. When invoices go out late, clients pay late — and your ability to make payroll, invest in growth, or simply know where you stand financially gets harder. A dedicated billing specialist ensures invoices go out on time, every time.",
    },
    {
        icon: DollarSign,
        title: 'Save $40k+ vs. a US-Based Billing Specialist',
        desc: "Billing coordinators and invoicing specialists in the US cost $38,000–$55,000/year. Our dedicated specialists start at $5/hr — full-time invoice creation, payment tracking, billing system management, and recurring billing — without the full-time overhead.",
    },
    {
        icon: Star,
        title: 'Professional Invoicing Signals A Professional Business',
        desc: "Clients notice when invoices arrive late, contain errors, or look inconsistent. A clean, branded, accurate invoice sent on time signals that your business is organized and trustworthy — and makes it easier for clients to pay promptly. Your billing process is part of your client experience.",
    },
];

const faqs = [
    {
        question: "What billing and invoicing tools do they work in?",
        answer: "QuickBooks Online, Xero, FreshBooks, Wave, HoneyBook, Dubsado, Stripe Billing, Chargebee, Recurly, and most other billing platforms. We match you with a specialist experienced in your specific tool.",
    },
    {
        question: "Can they send invoices on my behalf directly to clients?",
        answer: "Yes. They send invoices from your billing system using your email or the platform's delivery system, so invoices arrive from your brand — not from a third party. Most clients give their specialist access to send invoices directly after reviewing the first few for accuracy.",
    },
    {
        question: "How do they know when to invoice a client?",
        answer: "You define the billing trigger during onboarding — project completion, milestone sign-off, monthly retainer date, or time log submission. They monitor for these triggers and initiate billing accordingly, or you can send them a quick confirmation when a deliverable is complete.",
    },
    {
        question: "Can they handle disputed invoices?",
        answer: "They handle the initial communication — acknowledging the dispute, gathering the details, and presenting the client's position to you. For anything requiring a business judgment call (adjusting an amount, issuing a credit, or escalating to collections), they bring it to you with full context so you can decide.",
    },
    {
        question: "What happens with failed recurring payments?",
        answer: "Most billing platforms retry failed charges automatically. Your specialist monitors retry outcomes, contacts clients about failed payments, updates expired payment information, and ensures the charge is resolved before the account is disrupted or the subscription lapses.",
    },
    {
        question: "Can they also manage time tracking for billing purposes?",
        answer: "Yes — many billing specialists also manage time tracking for hourly clients using tools like Harvest, Toggl, or Clockify. They compile time logs into accurate invoices and ensure every billable hour is captured before the invoice goes out.",
    },
    {
        question: "How do they handle billing for multiple clients with different structures?",
        answer: "Each client gets a billing profile in your system with their specific rates, terms, payment method, and billing schedule. Your specialist manages them all in parallel — sending the right invoice at the right time for each client based on their individual setup.",
    },
    {
        question: "Can they work with my accountant on monthly close?",
        answer: "Yes. Many clients have their billing specialist coordinate with their bookkeeper or accountant at month-end — ensuring all sent invoices, received payments, and outstanding AR are reconciled and documented for the monthly close process.",
    },
];

// ─── Component ─────────────────────────────────────────────────────────────

const InvoicingBilling: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);
    const handleSurveyComplete = () => { closeSurvey(); navigate('/booking'); };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <SEO
                title="Hire an Invoicing & Billing Specialist | Invoice Management VA | Five Star Assistants"
                description="Hire a dedicated invoicing and billing specialist for invoice creation, payment tracking, billing system management, and recurring billing. Invoice faster, get paid sooner. Free placement. Starting at $5/hr."
                keywords="hire invoicing specialist, billing virtual assistant, invoice management VA, outsource billing, recurring billing assistant, FreshBooks VA, QuickBooks invoicing specialist"
                canonical="https://www.fivestarassistants.com/hire/invoicing"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* ── Hero ──────────────────────────────────────────────── */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Invoicing & Billing Specialists"
                        headline={
                            <>
                                Hire A Dedicated Billing Specialist.{' '}
                                <span className="text-gold italic">Starting at $5/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Invoice creation, payment tracking, billing system management, and recurring billing —
                                handled consistently so invoices go out on time and payments come in.{' '}
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
                                    Everything a Billing Specialist Takes Off Your Plate
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    One dedicated specialist who owns your entire billing cycle — invoicing, tracking, system management, and recurring billing — so your cash flow stays consistent and your billing stays professional.
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
                                    Find My Billing Specialist
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
                                    We've removed every friction point from hiring a dedicated billing specialist so your invoicing runs on time without you having to manage it.
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
                                    Built For Businesses That Bill Clients Regularly
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    If invoicing is falling behind, payment follow-up is inconsistent, or billing errors are creating friction with clients — a dedicated specialist fixes all of it.
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

                {/* ── Built Around Your Billing ─────────────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">

                            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                                <div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                        WHY FSA FOR INVOICING & BILLING
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built Around Your Billing
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>For most service businesses, billing is the last thing that gets done — after the work is delivered, after the client is happy, after everything else is handled. Which means invoices go out late, follow-up is inconsistent, and cash flow reflects it.</p>
                                        <p>At Five Star Assistants, we match you with a dedicated billing specialist who owns your invoicing process end to end — creating and sending invoices on schedule, tracking payments to completion, and keeping your billing system organized — so billing is never the thing holding up your cash flow.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">Book A Discovery Call</Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>
                                <div>
                                    <img src="/images/va-2.png" alt="Billing specialist managing invoices" className="w-full rounded-[2rem] shadow-xl object-cover" />
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
                                Invoice Faster.{' '}
                                <span className="text-gold italic">Get Paid Sooner.</span>
                            </h2>
                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us about your billing process and we'll match you with a dedicated specialist — in as little as 7 days. No setup fees, no long-term contracts.
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
            <SurveyModal isOpen={isSurveyOpen} onClose={closeSurvey} onComplete={handleSurveyComplete} source="Invoicing & Billing" />
        </div>
    );
};

export default InvoicingBilling;
