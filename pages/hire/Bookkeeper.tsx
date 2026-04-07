import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, Users, Award,
    BookOpen, CreditCard, BarChart2, Receipt,
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
        icon: BookOpen,
        title: 'Transaction Recording & Categorization',
        desc: 'Every income and expense recorded accurately and categorized correctly — so your books reflect what actually happened in your business.',
        items: [
            'Record all income, expenses, and transfers in your accounting software',
            'Categorize transactions according to your chart of accounts',
            'Import and reconcile bank feeds, credit card transactions, and payment processor data',
            'Process receipts and supporting documents for all recorded transactions',
            'Maintain accurate records for all business entities and accounts',
            'Flag unusual or uncategorized transactions for your review and clarification',
        ],
    },
    {
        icon: CreditCard,
        title: 'Bank & Credit Card Reconciliation',
        desc: 'Books matched to bank statements every month — so discrepancies get caught before they become problems.',
        items: [
            'Reconcile all bank accounts against monthly statements every month',
            'Reconcile credit card accounts and match to statements',
            'Identify and resolve discrepancies between books and bank records',
            'Track outstanding checks and deposits in transit',
            'Maintain a clean reconciliation history for audit and tax purposes',
            'Alert you to any unusual transactions or reconciliation gaps found',
        ],
    },
    {
        icon: BarChart2,
        title: 'Financial Reporting',
        desc: 'Monthly reports that show you exactly how your business performed — profit, loss, cash flow, and where your money went.',
        items: [
            'Produce monthly profit and loss statements showing revenue, costs, and net income',
            'Generate balance sheets showing assets, liabilities, and equity positions',
            'Create cash flow statements tracking money in and out of the business',
            'Build custom reports for specific departments, projects, or revenue streams',
            'Compare actuals against prior periods to identify trends and anomalies',
            'Prepare clean, organized books ahead of tax season for your accountant',
        ],
    },
    {
        icon: Receipt,
        title: 'Accounts & Records Management',
        desc: 'Organized, accurate financial records that make tax prep, audits, and business decisions straightforward instead of stressful.',
        items: [
            'Maintain organized records for all transactions, receipts, and supporting documents',
            'Track outstanding bills owed to vendors and amounts owed by customers',
            'Manage petty cash logs, expense records, and reimbursement documentation',
            'Set up and maintain chart of accounts aligned with your business structure',
            'Coordinate with your accountant or CPA to deliver organized month-end records',
            'Archive financial records securely for tax and compliance purposes',
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
        desc: 'Recruiting is completely free. You only pay once your bookkeeper starts.',
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
        icon: BookOpen,
        title: 'Dedicated — Not Shared',
        desc: 'Your bookkeeper works exclusively on your books — not splitting time across a roster of other clients.',
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
        desc: "You know your business needs clean books — but you don't have time to do it yourself and you can't justify a full-time US-based hire yet. A dedicated bookkeeper gives you accurate monthly financials without the overhead.",
    },
    {
        icon: TrendingUp,
        title: 'E-Commerce & Product Businesses',
        desc: "High transaction volume, cost of goods, inventory tracking, and multiple sales channels create a complex bookkeeping picture. A dedicated bookkeeper keeps it all organized and accurate every month.",
    },
    {
        icon: Briefcase,
        title: 'Agencies & Service Businesses',
        desc: "You need clean monthly financials to make payroll, pay taxes, and understand where margins actually stand — but bookkeeping keeps getting pushed down the priority list. A specialist makes it happen consistently.",
    },
];

const pillars = [
    {
        icon: AlertCircle,
        title: 'Bad Books Are A Ticking Time Bomb',
        desc: "Disorganized or inaccurate books don't just create headaches at tax time — they make it impossible to know if your business is actually profitable, where money is leaking, or what you can afford to invest. A dedicated bookkeeper keeps your records clean all year so there are no surprises when it matters most.",
    },
    {
        icon: DollarSign,
        title: 'Save $50k+ vs. a US-Based Bookkeeper',
        desc: "Bookkeepers in the US cost $45,000–$65,000/year plus benefits. Our dedicated specialists start at $5/hr — full-time transaction recording, reconciliation, reporting, and records management — without the full-time overhead.",
    },
    {
        icon: Target,
        title: "You Can't Make Good Decisions With Bad Data",
        desc: "Every growth decision — hiring, marketing spend, pricing, expansion — requires knowing your real numbers. Clean, current books give you that visibility. When your bookkeeper is on top of it every month, you always know where you stand and what moves you can actually afford to make.",
    },
];

const faqs = [
    {
        question: "What accounting software do they work in?",
        answer: "QuickBooks Online, Xero, FreshBooks, Wave, and most other cloud-based accounting platforms. We'll match you with a bookkeeper experienced in your specific tool. If you don't have accounting software yet, we can help you choose the right one during onboarding.",
    },
    {
        question: "Can they work directly with my accountant or CPA?",
        answer: "Yes — coordinating with your accountant is a standard part of the role. They deliver clean, organized month-end books so your CPA has everything needed for tax prep without having to chase you for records. Many clients have their bookkeeper and accountant communicate directly.",
    },
    {
        question: "Do they need access to my bank accounts?",
        answer: "They need read-only access to your bank and credit card feeds through your accounting software — not direct access to transfer funds. Most accounting platforms allow you to connect bank feeds with view-only permissions so your bookkeeper can reconcile without any payment authority.",
    },
    {
        question: "How do they handle receipts and expense documentation?",
        answer: "You'll share receipts through a shared folder, receipt scanning app (like Dext or Hubdoc), or email. They process and attach supporting documentation to the corresponding transactions in your accounting software so every expense has a paper trail.",
    },
    {
        question: "Can they catch up on months of backlogged bookkeeping?",
        answer: "Yes — catch-up bookkeeping is one of the most common onboarding situations. They work through backlogged months systematically before transitioning to ongoing monthly maintenance. The catch-up timeline depends on how many months need to be addressed and the volume of transactions.",
    },
    {
        question: "What's the difference between a bookkeeper and an accountant?",
        answer: "A bookkeeper records and categorizes your day-to-day financial transactions and produces monthly reports. An accountant uses those records for tax preparation, financial analysis, and strategic advisory. Your bookkeeper gives your accountant clean, accurate data to work from — reducing your CPA fees and improving accuracy.",
    },
    {
        question: "How do they handle payroll?",
        answer: "Most bookkeepers record payroll journal entries and reconcile payroll accounts rather than processing payroll directly. For payroll processing, we offer a dedicated Payroll Support specialist. Many clients use both — a bookkeeper for general ledger and a payroll specialist for payroll runs.",
    },
    {
        question: "How do I know my financial data is secure?",
        answer: "All assistants sign NDAs and operate under strict data confidentiality agreements. Access is granted at the minimum level required — typically read-only bank feeds and accounting software access. We recommend using role-based permissions in your accounting software so your bookkeeper can only access what they need.",
    },
];

// ─── Component ─────────────────────────────────────────────────────────────

const Bookkeeper: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);
    const handleSurveyComplete = () => { closeSurvey(); navigate('/booking'); };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <SEO
                title="Hire a Bookkeeper | Dedicated Virtual Bookkeeping Services | Five Star Assistants"
                description="Hire a dedicated virtual bookkeeper for transaction recording, bank reconciliation, financial reporting, and records management. Get clean books every month. Free placement. Starting at $5/hr."
                keywords="hire virtual bookkeeper, outsource bookkeeping, remote bookkeeper, QuickBooks virtual assistant, Xero bookkeeper VA, monthly bookkeeping service, dedicated bookkeeper"
                canonical="https://www.fivestarassistants.com/hire/bookkeeper"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* ── Hero ──────────────────────────────────────────────── */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Virtual Bookkeepers"
                        headline={
                            <>
                                Hire A Dedicated Bookkeeper.{' '}
                                <span className="text-gold italic">Starting at $5/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Transaction recording, bank reconciliation, monthly reporting, and records management —
                                handled every month so your books are always accurate and tax-ready.{' '}
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
                                    Everything a Bookkeeper Takes Off Your Plate
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    One dedicated bookkeeper who owns your financials — recording, reconciliation, reporting, and records — so your books are accurate every single month.
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
                                    Find My Bookkeeper
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
                                    We've removed every friction point from hiring a dedicated bookkeeper so your books stay clean without the full-time overhead.
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
                                    Built For Businesses That Need Clean Books Every Month
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    If your books are behind, inaccurate, or being done by someone who shouldn't be doing them — a dedicated bookkeeper fixes that permanently.
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

                {/* ── Built Around Your Books ───────────────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">

                            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                                <div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                        WHY FSA FOR BOOKKEEPING
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built Around Your Books
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Most small business owners either do their own bookkeeping (badly and inconsistently) or let it pile up until tax season forces a panic. Either way, they're making decisions based on financial data they don't fully trust.</p>
                                        <p>At Five Star Assistants, we match you with a dedicated bookkeeper who maintains your books monthly — recording every transaction, reconciling every account, and delivering clean reports — so you always know where your business stands and your accountant has everything they need.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">Book A Discovery Call</Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>
                                <div>
                                    <img src="/images/va-2.png" alt="Bookkeeper maintaining financial records" className="w-full rounded-[2rem] shadow-xl object-cover" />
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
                                Get Your Books Done Right.{' '}
                                <span className="text-gold italic">Every Month.</span>
                            </h2>
                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us about your business and we'll match you with a dedicated bookkeeper — in as little as 7 days. No setup fees, no long-term contracts.
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
            <SurveyModal isOpen={isSurveyOpen} onClose={closeSurvey} onComplete={handleSurveyComplete} source="Bookkeeper" />
        </div>
    );
};

export default Bookkeeper;
