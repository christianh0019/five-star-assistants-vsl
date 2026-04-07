import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, Users, Award,
    Receipt, Tag, FileText, CreditCard,
    FileX, BadgeDollarSign, RefreshCw, Timer,
    Building, TrendingUp,
    AlertCircle, Star,
    ChevronDown, Check,
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
        title: 'Receipt Collection & Organization',
        desc: 'Every receipt captured and filed correctly — from email forwards and uploaded photos to app-based submissions — so nothing gets lost before month-end.',
        items: [
            'Collect receipts from email, photos, shared folders, and expense apps',
            'Sort and file receipts by date, vendor, category, and payment method',
            'Upload and organize in your expense management system',
            'Flag missing, duplicate, or incomplete receipts before closing the period',
            'Follow up with team members on outstanding receipt submissions',
            'Maintain a clean, searchable receipt archive by time period',
        ],
    },
    {
        icon: Tag,
        title: 'Expense Categorization & Coding',
        desc: 'Every dollar categorized correctly and consistently — by expense type, department, project, and tax category — so your books are always accurate.',
        items: [
            'Categorize all expenses by type — travel, meals, software, supplies, and more',
            'Apply correct accounting codes or GL codes to each transaction',
            'Tag expenses by department, project, cost center, or team member',
            'Assign tax categories to support clean year-end reporting',
            'Maintain consistent categorization rules across your entire expense history',
            'Flag any expenses that fall outside your normal spending patterns',
        ],
    },
    {
        icon: FileText,
        title: 'Expense Report Preparation',
        desc: 'Organized, complete expense reports prepared on your schedule — ready for manager review, reimbursement approval, or accountant handoff.',
        items: [
            'Compile weekly, bi-weekly, or monthly expense reports by category and time period',
            'Format reports to your preferred template or accounting system output',
            'Summarize spending by category, department, project, or team member',
            'Prepare reimbursement reports for employee expense submissions',
            'Include supporting receipts and documentation with each report',
            'Deliver reports to the right stakeholders on schedule every period',
        ],
    },
    {
        icon: CreditCard,
        title: 'Credit Card & Reimbursement Tracking',
        desc: 'Every corporate card transaction matched, every employee reimbursement request tracked, and every statement reconciled — with discrepancies flagged before they become problems.',
        items: [
            'Monitor and record all corporate credit card transactions',
            'Match card charges to corresponding receipts and documentation',
            'Track employee expense submissions and reimbursement approval status',
            'Flag unauthorized, duplicate, or out-of-policy charges for review',
            'Reconcile card statements against recorded expenses each billing cycle',
            'Maintain a clean audit trail for every card holder on the account',
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
        desc: 'Your expense tracking specialist works exclusively on your books — not splitting time across a roster of other clients.',
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
        title: 'Small Business Owners',
        desc: "You are running the business — tracking receipts and building expense reports is the last thing you have time for. A dedicated specialist captures every expense, categorizes it correctly, and keeps your books clean all year.",
    },
    {
        icon: Users,
        title: 'Remote & Distributed Teams',
        desc: "When expenses are submitted by multiple team members across different locations and systems, things fall through the cracks. Your specialist brings a single organized process to every submission.",
    },
    {
        icon: TrendingUp,
        title: 'Growing Companies',
        desc: "As headcount grows, so does expense volume. Your specialist scales with you — handling more receipts, more categories, and more complexity without letting anything slip.",
    },
];

const pillars = [
    {
        icon: AlertCircle,
        title: 'Messy Expense Records Cost You Time and Money',
        desc: "Uncategorized expenses mean your accountant spends billable hours cleaning up your books at year-end. Missing receipts mean disallowed deductions at tax time. Untracked corporate card charges mean surprises in your cash flow. A dedicated expense tracking specialist prevents all of it — one organized record at a time.",
    },
    {
        icon: DollarSign,
        title: 'Save $40k+ vs. a US-Based Bookkeeping Assistant',
        desc: "Bookkeeping and accounting assistants in the US cost $36,000–$52,000/year — before benefits. Our dedicated expense tracking specialists start at $5/hr, full-time — receipt collection, categorization, expense reports, and credit card reconciliation — without the full-time overhead.",
    },
    {
        icon: Star,
        title: 'Clean Books Make Tax Season Easy',
        desc: "When every expense is categorized, every receipt is filed, and every report is current, tax season stops being a scramble. Your accountant gets exactly what they need from day one, your deductions are supported, and your financial picture is accurate — not estimated.",
    },
];

const faqs = [
    {
        question: "What kinds of expenses can your specialist track?",
        answer: "Any business expense — travel, meals, software subscriptions, office supplies, contractor payments, corporate card charges, employee reimbursements, and more. If your business spends money on it, your specialist can track it.",
    },
    {
        question: "What tools does your expense tracking specialist use?",
        answer: "Your specialist is trained in tools like QuickBooks, Xero, Expensify, Ramp, Brex, Divvy, Zoho Expense, and Google Sheets. If you use a different tool, let us know during onboarding and we will match you with someone experienced in your system.",
    },
    {
        question: "How do I send receipts and expense data to my specialist?",
        answer: "Most clients forward email receipts, share a receipt folder in Google Drive or Dropbox, or use an expense app that your specialist monitors directly. We set up whatever workflow fits your team during onboarding.",
    },
    {
        question: "Can they categorize expenses for tax purposes?",
        answer: "Yes. Your specialist applies the correct tax categories to each expense type so your accountant has everything they need when tax season arrives. You define the categories — they apply them consistently.",
    },
    {
        question: "How often will expense reports be updated?",
        answer: "That depends on your preference. Most clients prefer weekly or bi-weekly expense updates. If you need daily tracking or monthly reporting, we set up your specialist to match your cycle.",
    },
    {
        question: "What if an expense does not have a receipt?",
        answer: "Your specialist flags any expense missing documentation and follows up with the relevant team member to obtain a receipt or justification before closing out the period. Nothing gets categorized without proper support.",
    },
    {
        question: "Can they manage expenses across multiple accounts and cards?",
        answer: "Yes. Your specialist consolidates expenses from multiple cards, accounts, and team members into a single organized system — giving you one complete picture of your business spending.",
    },
    {
        question: "Is my financial data kept confidential?",
        answer: "Yes. All specialists sign confidentiality agreements before starting. Your expense data, receipts, and financial records are handled with the same discretion you would expect from a trusted member of your internal team.",
    },
];

// ─── Component ─────────────────────────────────────────────────────────────

const ExpenseTracking: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);
    const handleSurveyComplete = () => { closeSurvey(); navigate('/booking'); };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <SEO
                title="Hire an Expense Tracking Specialist | Expense Management VA | Five Star Assistants"
                description="Hire a dedicated expense tracking specialist for receipt collection, expense categorization, report preparation, and credit card reconciliation. Clean books all year. Free placement. Starting at $5/hr."
                keywords="hire expense tracking VA, expense management virtual assistant, outsource expense tracking, receipt organization VA, bookkeeping assistant, expense report specialist"
                canonical="https://www.fivestarassistants.com/hire/expense-tracking"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* ── Hero ──────────────────────────────────────────────── */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Expense Tracking Specialists"
                        headline={
                            <>
                                Hire A Dedicated Expense Tracking Specialist.{' '}
                                <span className="text-gold italic">Starting at $5/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Receipt collection, expense categorization, report preparation, and credit card reconciliation —
                                handled consistently so your books are always clean and your records are always current.{' '}
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
                                    Everything an Expense Tracking Specialist Takes Off Your Plate
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    One dedicated specialist who owns your entire expense tracking process — from receipt collection to categorization to monthly reports — so your books are always accurate and your records are always current.
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
                                    Find My Expense Tracking Specialist
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
                                    We have removed every friction point from hiring a dedicated expense tracking specialist so your records stay clean without you having to manage the process.
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
                                    Built For Businesses That Need Clean Books
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    If receipts pile up, expenses get miscategorized, and tax season is always a scramble — a dedicated specialist fixes all of it.
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

                {/* ── Built Around Your Expenses ────────────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">

                            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                                <div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                        WHY FSA FOR EXPENSE TRACKING
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built Around Clean, Organized Records
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Receipts pile up faster than most business owners can process them. Expenses get estimated instead of tracked, categories get mixed up, and by the time tax season arrives, sorting it all out is a multi-week project that costs more in accountant hours than it should.</p>
                                        <p>At Five Star Assistants, we match you with a dedicated expense tracking specialist who keeps your records clean in real time — capturing every receipt, applying the right categories, reconciling your cards, and delivering organized reports on your schedule — so your books are always accurate and audit-ready.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">Book A Discovery Call</Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>
                                <div>
                                    <img src="/images/va-2.png" alt="Expense tracking specialist organizing records" className="w-full rounded-[2rem] shadow-xl object-cover" />
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
                                Stop Drowning in Receipts.{' '}
                                <span className="text-gold italic">Keep Clean Books All Year.</span>
                            </h2>
                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us about your expense tracking needs and we will match you with a dedicated specialist — in as little as 7 days. No setup fees, no long-term contracts.
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
            <SurveyModal isOpen={isSurveyOpen} onClose={closeSurvey} onComplete={handleSurveyComplete} source="Expense Tracking" />
        </div>
    );
};

export default ExpenseTracking;
