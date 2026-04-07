import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, Users, Award,
    Receipt, FileText, CreditCard, BarChart2,
    ChevronDown, Check,
    FileX, BadgeDollarSign, RefreshCw, Timer,
    TrendingUp, Briefcase, Building,
    AlertCircle, Target,
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
        icon: Receipt,
        title: 'Accounts Payable Management',
        desc: 'Vendor bills tracked, verified, and paid on time — so you avoid late fees, protect supplier relationships, and always know what you owe.',
        items: [
            'Receive, review, and enter vendor invoices and bills into your accounting system',
            'Verify invoice accuracy against purchase orders and contracts before approval',
            'Schedule and process payments according to payment terms and due dates',
            'Track outstanding payables and flag bills approaching due dates',
            'Maintain organized vendor records with payment history and terms',
            'Reconcile AP ledger against vendor statements monthly',
        ],
    },
    {
        icon: FileText,
        title: 'Accounts Receivable & Invoicing',
        desc: 'Invoices sent on time, payments tracked, and outstanding balances followed up — so money owed to you actually arrives.',
        items: [
            'Create and send accurate invoices to clients based on completed work or milestones',
            'Apply received payments to the correct invoices in your accounting system',
            'Track outstanding receivables and identify overdue accounts',
            'Send payment reminders and follow-up communications for unpaid invoices',
            'Record and reconcile partial payments, credits, and adjustments',
            'Produce accounts receivable aging reports showing what is owed and for how long',
        ],
    },
    {
        icon: CreditCard,
        title: 'Payment Processing & Reconciliation',
        desc: 'Every payment recorded accurately and matched to the right invoice — so your books reflect what was paid, by whom, and when.',
        items: [
            'Process incoming payments from checks, ACH transfers, and credit card transactions',
            'Match payments to open invoices and update records in your accounting system',
            'Record outgoing vendor payments and match to corresponding bills',
            'Reconcile payment processor deposits (Stripe, Square, PayPal) to bank records',
            'Handle payment discrepancies, short payments, and write-offs with proper documentation',
            'Maintain accurate payment records for audit and compliance purposes',
        ],
    },
    {
        icon: BarChart2,
        title: 'Aging Reports & Cash Flow Visibility',
        desc: 'Clear weekly and monthly reports on what you owe and what you are owed — so cash flow never catches you by surprise.',
        items: [
            'Produce weekly AP aging reports showing outstanding bills by due date and vendor',
            'Produce weekly AR aging reports showing outstanding invoices by age and client',
            'Track days payable outstanding (DPO) and days sales outstanding (DSO) over time',
            'Alert you to large payables coming due or significant receivables past due',
            'Summarize net cash position from AP and AR balances for cash flow planning',
            'Deliver monthly AP and AR summaries to leadership for financial review',
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
        icon: Receipt,
        title: 'Dedicated — Not Shared',
        desc: 'Your AP/AR specialist works exclusively on your financials — not splitting time across a roster of other clients.',
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
        title: 'Product & E-Commerce Businesses',
        desc: "High vendor invoice volume, supplier payments, and customer AR across multiple sales channels create a complex AP/AR picture. A dedicated specialist keeps both sides current and reconciled every week.",
    },
    {
        icon: Briefcase,
        title: 'Service Businesses & Agencies',
        desc: "You invoice clients on milestones or retainers and pay contractors and vendors regularly. A specialist ensures invoices go out on time, payments come in, and your cash position is always visible.",
    },
    {
        icon: TrendingUp,
        title: 'Growing Companies',
        desc: "AP and AR volume that was manageable at 10 clients becomes a full-time job at 50. A dedicated specialist handles both sides of the ledger so your team focuses on growth, not chasing payments.",
    },
];

const pillars = [
    {
        icon: AlertCircle,
        title: 'Late Payments Cost More Than You Think',
        desc: "Missed payment due dates mean late fees, strained vendor relationships, and damaged credit terms. Slow collections mean cash flow gaps that force you into debt or delay investments. A dedicated AP/AR specialist keeps both sides current so you never pay a late fee you could have avoided and never wait longer than necessary to get paid.",
    },
    {
        icon: DollarSign,
        title: 'Save $45k+ vs. a US-Based AP/AR Specialist',
        desc: "Accounts payable and receivable specialists in the US cost $42,000–$62,000/year. Our dedicated specialists start at $5/hr — full-time AP management, AR invoicing, payment processing, and aging reports — without the full-time overhead.",
    },
    {
        icon: Target,
        title: 'Cash Flow Is The Lifeblood Of Your Business',
        desc: "Profitable businesses fail because of cash flow problems — not because they stopped selling. Knowing exactly what you owe, what is owed to you, and when both are due gives you the visibility to make smart cash decisions. A dedicated AP/AR specialist gives you that visibility in real time.",
    },
];

const faqs = [
    {
        question: "What accounting software do they work in?",
        answer: "QuickBooks Online, Xero, FreshBooks, NetSuite, Sage, and most other accounting platforms. For payment processing and invoicing, they work in Stripe, Bill.com, Melio, and similar tools. We match you with a specialist experienced in your specific stack.",
    },
    {
        question: "Can they approve and pay invoices directly?",
        answer: "That depends on the payment limits and access levels you set. Most clients have their specialist prepare payments for approval and execute them after sign-off, rather than granting unilateral payment authority. You define the approval workflow during onboarding.",
    },
    {
        question: "How do they handle vendor disputes or billing errors?",
        answer: "They flag discrepancies between purchase orders, contracts, and vendor invoices before any payment is processed. When disputes arise, they document the issue and coordinate resolution between your team and the vendor — escalating to you for anything requiring business judgment.",
    },
    {
        question: "How do they follow up with clients who are late paying?",
        answer: "Using your preferred communication style — email reminders, phone calls, or a combination — at intervals you define. During onboarding, you set the escalation timeline (e.g., reminder at 7 days past due, follow-up call at 14 days) so follow-up is consistent without being aggressive.",
    },
    {
        question: "Can they handle both AP and AR, or do I need two specialists?",
        answer: "One specialist can handle both. AP and AR are naturally complementary — managing both gives them a complete picture of your cash position. Most clients with moderate volume use a single specialist for both functions.",
    },
    {
        question: "Do they work with our existing vendors and clients?",
        answer: "Yes. They work within your existing vendor and client relationships, using your established contacts and communication channels. They operate on your behalf using your email and tools — not introducing new points of contact that could confuse your vendors or clients.",
    },
    {
        question: "What happens if a client refuses to pay?",
        answer: "They document the situation, exhaust standard follow-up sequences, and escalate to you for a decision on next steps — whether that is sending a formal demand, involving collections, or writing off the debt. They handle the process up to that escalation point so you only get involved when a business decision is needed.",
    },
    {
        question: "How do they protect sensitive payment information?",
        answer: "All assistants sign NDAs and operate under strict confidentiality agreements. Payment access is granted at the minimum level required for each task. We recommend role-based permissions in your accounting and payment tools so your specialist can do their job without access to accounts or funds beyond what they need.",
    },
];

// ─── Component ─────────────────────────────────────────────────────────────

const AccountsPayableReceivable: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);
    const handleSurveyComplete = () => { closeSurvey(); navigate('/booking'); };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <SEO
                title="Hire an Accounts Payable & Receivable Specialist | AP/AR Virtual Assistant | Five Star Assistants"
                description="Hire a dedicated AP/AR specialist for vendor invoice management, client invoicing, payment processing, and aging reports. Get paid faster and pay on time. Free placement. Starting at $5/hr."
                keywords="hire accounts payable specialist, accounts receivable virtual assistant, AP AR specialist, outsource AP AR, invoice management VA, payment tracking assistant, dedicated AP AR specialist"
                canonical="https://www.fivestarassistants.com/hire/accounts-payable-receivable"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* ── Hero ──────────────────────────────────────────────── */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Accounts Payable & Receivable Specialists"
                        headline={
                            <>
                                Hire A Dedicated AP/AR Specialist.{' '}
                                <span className="text-gold italic">Starting at $5/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Vendor invoice management, client invoicing, payment processing, and aging reports —
                                handled consistently so you get paid faster and pay on time, every time.{' '}
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
                                    Everything an AP/AR Specialist Takes Off Your Plate
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    One dedicated specialist who owns both sides of your cash flow — vendor payments out and client collections in — so your cash position is always accurate and current.
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
                                    Find My AP/AR Specialist
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
                                    We've removed every friction point from hiring a dedicated AP/AR specialist so your cash flow stays healthy without the full-time overhead.
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
                                    Built For Businesses That Need Both Sides Of Cash Flow Under Control
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    If vendor bills are piling up, client invoices are going out late, or you never quite know what your cash position is — a dedicated AP/AR specialist fixes all three.
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

                {/* ── Built Around Your Cash Flow ───────────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">

                            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                                <div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                        WHY FSA FOR AP/AR
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built Around Your Cash Flow
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Most businesses let AP and AR slide when things get busy — invoices go out late, vendor bills pile up, and nobody really knows what the cash position is until something forces the issue. By then, you're either behind on payments or chasing overdue invoices.</p>
                                        <p>At Five Star Assistants, we match you with a dedicated AP/AR specialist who runs both functions every week — so your vendors get paid on time, your clients get invoiced promptly, and you always have a clear, current view of your cash position.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">Book A Discovery Call</Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>
                                <div>
                                    <img src="/images/va-2.png" alt="AP/AR specialist managing invoices and payments" className="w-full rounded-[2rem] shadow-xl object-cover" />
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
                                Get Paid Faster. Pay On Time.{' '}
                                <span className="text-gold italic">Stay In Control.</span>
                            </h2>
                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us about your AP/AR volume and we'll match you with a dedicated specialist — in as little as 7 days. No setup fees, no long-term contracts.
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
            <SurveyModal isOpen={isSurveyOpen} onClose={closeSurvey} onComplete={handleSurveyComplete} source="Accounts Payable & Receivable" />
        </div>
    );
};

export default AccountsPayableReceivable;
