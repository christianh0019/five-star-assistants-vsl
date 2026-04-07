import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, Users, Award,
    ClipboardList, FileText, CreditCard, BarChart2,
    FileX, BadgeDollarSign, RefreshCw, Timer,
    Building, Briefcase, TrendingUp,
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
        icon: Clock,
        title: 'Timesheet Collection & Verification',
        desc: 'Every timesheet collected on schedule, verified against your records, and ready for payroll — with discrepancies flagged and resolved before the run.',
        items: [
            'Send timesheet submission reminders to employees and contractors on schedule',
            'Collect timesheets from team members across all time-tracking tools',
            'Verify submitted hours against schedules, project records, and approval workflows',
            'Flag missing submissions and follow up to obtain them before payroll closes',
            'Identify and escalate discrepancies for your review before processing',
            'Organize verified timesheets for each pay period in a clean, accessible format',
        ],
    },
    {
        icon: ClipboardList,
        title: 'Payroll Data Entry & Processing',
        desc: 'Hours, rates, adjustments, and deductions entered accurately into your payroll system — every cycle, without errors or delays.',
        items: [
            'Enter hours, wages, and adjustments into your payroll platform',
            'Apply overtime, bonuses, commissions, and allowances per pay period',
            'Process standard and off-cycle payroll runs on your defined schedule',
            'Confirm all entries before submission and flag anything that looks off',
            'Apply pay rate changes, promotions, and adjustments when notified',
            'Support payroll approval workflows and submit for final sign-off',
        ],
    },
    {
        icon: FileText,
        title: 'Payroll Record Keeping',
        desc: 'Complete, organized payroll records maintained for every pay period — so your data is always accurate and accessible for audits, reporting, or compliance needs.',
        items: [
            'Maintain organized payroll records by employee, pay period, and department',
            'Track pay history, rate changes, deductions, and adjustments for each team member',
            'File and archive payroll documents for completed periods in your preferred system',
            'Prepare payroll summaries for management review after each pay run',
            'Organize records to support year-end tax filings and W-2 or 1099 preparation',
            'Flag discrepancies between current records and prior period data',
        ],
    },
    {
        icon: BarChart2,
        title: 'Contractor & Vendor Payment Tracking',
        desc: 'Contractor invoices tracked, payments recorded, and vendor schedules maintained — with complete documentation for year-end reporting.',
        items: [
            'Track contractor invoices and payment due dates across all active engagements',
            'Record payments made to contractors and match against submitted invoices',
            'Flag overdue or upcoming contractor payments for review and approval',
            'Maintain contractor payment records by project, engagement, and time period',
            'Organize contractor payment documentation for 1099 preparation at year-end',
            'Monitor vendor payment schedules and flag any missed or late payments',
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
        desc: 'Your payroll specialist works exclusively on your payroll — not splitting time across a roster of other clients.',
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
        desc: "Payroll is the most time-sensitive admin task in your business — and the most consequential if something goes wrong. A dedicated specialist handles the data entry, record keeping, and follow-up so you just review and approve.",
    },
    {
        icon: Briefcase,
        title: 'Agencies & Firms',
        desc: "Managing payroll for a team of employees alongside contractor payments creates real complexity. Your specialist keeps every record organized, every deadline met, and every contractor payment documented.",
    },
    {
        icon: TrendingUp,
        title: 'Growing Companies',
        desc: "As your headcount grows, payroll admin grows with it. Your specialist scales with your team — handling more employees, more pay structures, and more complexity without errors or delays.",
    },
];

const pillars = [
    {
        icon: AlertCircle,
        title: 'Payroll Errors Cost More Than Money',
        desc: "A missed payroll run or a miscalculated paycheck does not just create extra work — it damages employee trust and can trigger compliance issues. A dedicated payroll specialist applies a consistent, verified process every cycle so errors are caught before they happen, not after.",
    },
    {
        icon: DollarSign,
        title: 'Save $40k+ vs. a US-Based Payroll Administrator',
        desc: "Payroll and HR administrators in the US cost $42,000–$58,000/year. Our dedicated payroll support specialists start at $5/hr — full-time timesheet management, data entry, record keeping, and contractor payment tracking — without the full-time overhead.",
    },
    {
        icon: Star,
        title: 'On-Time Payroll Is a Retention Tool',
        desc: "Employees notice when payroll runs late or contains errors. Consistently accurate, on-time payroll signals that your business is organized and that you take care of your team. A dedicated specialist makes sure every pay cycle runs cleanly — so your team never has a reason to worry.",
    },
];

const faqs = [
    {
        question: "What payroll tasks can your specialist handle?",
        answer: "Your specialist can manage timesheet collection and verification, payroll data entry and processing, payroll record keeping, and contractor payment tracking. They support your payroll process end to end — but do not replace a licensed payroll service or CPA for tax filings and compliance decisions.",
    },
    {
        question: "What payroll software does your specialist use?",
        answer: "Your specialist is trained in tools like Gusto, QuickBooks Payroll, ADP, Paychex, Rippling, and similar platforms. If you use a different system, let us know during onboarding and we will match you with someone experienced in your specific tool.",
    },
    {
        question: "Can they handle contractor payments as well?",
        answer: "Yes. Your specialist tracks contractor invoices, records payments, and maintains complete contractor payment documentation — including organizing records for 1099 preparation at year-end.",
    },
    {
        question: "How do they make sure payroll is accurate?",
        answer: "Your specialist follows a consistent verification process every cycle — checking timesheets against schedules, confirming adjustments and deductions, and flagging anything that looks inconsistent before submitting for your approval. Nothing gets processed without a final review.",
    },
    {
        question: "What happens if there is a payroll discrepancy?",
        answer: "Your specialist flags the discrepancy immediately with full details so you can resolve it before payroll runs. They do not submit anything they are not confident in — every cycle goes through a verification step before final approval.",
    },
    {
        question: "Can your specialist support payroll for remote or international teams?",
        answer: "Yes. Your specialist can manage payroll admin for teams across multiple locations and time zones. For international payroll specifics, they work within the tools and processes your business already uses.",
    },
    {
        question: "How does my specialist stay current on pay rate changes or policy updates?",
        answer: "Any changes to rates, schedules, or payroll policies are communicated directly to your specialist and documented for the record. They apply changes immediately and flag anything in prior records that may need adjustment.",
    },
    {
        question: "Is employee payroll data kept confidential?",
        answer: "Yes. All specialists sign confidentiality agreements before starting. Employee pay information, payroll records, and contractor data are handled with the same discretion you would expect from a trusted member of your internal HR team.",
    },
];

// ─── Component ─────────────────────────────────────────────────────────────

const PayrollSupport: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);
    const handleSurveyComplete = () => { closeSurvey(); navigate('/booking'); };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <SEO
                title="Hire a Payroll Support Specialist | Payroll Admin VA | Five Star Assistants"
                description="Hire a dedicated payroll support specialist for timesheet collection, payroll data entry, record keeping, and contractor payment tracking. On-time, accurate payroll every cycle. Free placement. Starting at $5/hr."
                keywords="hire payroll support VA, payroll admin virtual assistant, outsource payroll administration, timesheet management VA, payroll data entry specialist, Gusto VA, QuickBooks payroll assistant"
                canonical="https://www.fivestarassistants.com/hire/payroll-support"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* ── Hero ──────────────────────────────────────────────── */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Payroll Support Specialists"
                        headline={
                            <>
                                Hire A Dedicated Payroll Support Specialist.{' '}
                                <span className="text-gold italic">Starting at $5/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Timesheet collection, payroll data entry, record keeping, and contractor payment tracking —
                                handled consistently so every pay cycle runs on time and every record is accurate.{' '}
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
                                    Everything a Payroll Support Specialist Takes Off Your Plate
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    One dedicated specialist who manages the admin side of your entire payroll cycle — from timesheet collection to data entry to record keeping — so every pay run is accurate, complete, and on time.
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
                                    Find My Payroll Support Specialist
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
                                    We have removed every friction point from hiring a dedicated payroll support specialist so your pay cycles run on time without you managing the details.
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
                                    Built For Businesses That Run Payroll Regularly
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    If payroll is stressful, time-consuming, or prone to errors — a dedicated specialist brings consistency and accuracy to every pay cycle.
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

                {/* ── Built Around Payroll ──────────────────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">

                            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                                <div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                        WHY FSA FOR PAYROLL SUPPORT
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built Around Accuracy and On-Time Delivery
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Payroll is non-negotiable. Employees expect to get paid on time, every time. When it does not happen — whether because timesheets were late, data was entered incorrectly, or someone forgot to run the cycle — the damage to morale and trust is immediate.</p>
                                        <p>At Five Star Assistants, we match you with a dedicated payroll support specialist who brings a consistent, verified process to every pay cycle — collecting timesheets, entering data accurately, keeping records organized, and making sure everything is ready for your final approval before anything goes out.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">Book A Discovery Call</Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>
                                <div>
                                    <img src="/images/va-2.png" alt="Payroll support specialist managing records" className="w-full rounded-[2rem] shadow-xl object-cover" />
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
                                Run Payroll Without{' '}
                                <span className="text-gold italic">the Stress.</span>
                            </h2>
                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us about your payroll process and we will match you with a dedicated support specialist — in as little as 7 days. No setup fees, no long-term contracts.
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
            <SurveyModal isOpen={isSurveyOpen} onClose={closeSurvey} onComplete={handleSurveyComplete} source="Payroll Support" />
        </div>
    );
};

export default PayrollSupport;
