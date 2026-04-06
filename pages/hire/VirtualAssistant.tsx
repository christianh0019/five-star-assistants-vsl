import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, Users, Award,
    Inbox, Search, CheckSquare, Star,
    ChevronDown, Check,
    FileX, BadgeDollarSign, RefreshCw, CreditCard, Timer,
    Briefcase, Building, UserCheck,
    TrendingUp, BarChart2, Zap,
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
        icon: Inbox,
        title: 'Email & Calendar Management',
        desc: 'A managed inbox and a protected calendar — so you start every day with clarity, not chaos.',
        items: [
            'Process and organize your inbox daily using folders, labels, and priority flags',
            'Draft and send routine email replies using your approved templates and voice',
            'Manage your calendar — schedule meetings, resolve conflicts, and block focus time',
            'Coordinate appointments with clients, vendors, and team members on your behalf',
            'Set up follow-up reminders so nothing falls through the cracks',
            'Maintain shared calendars and send meeting invites and prep reminders',
        ],
    },
    {
        icon: Search,
        title: 'Research & Data Tasks',
        desc: 'Accurate information, organized and delivered — without you spending hours pulling it together.',
        items: [
            'Conduct web research on competitors, markets, vendors, and prospects',
            'Build targeted lead lists and prospect data for the sales team',
            'Compare vendors, tools, and service providers with structured summaries',
            'Compile research reports and organize findings into usable formats',
            'Update CRM records and spreadsheets with accurate, verified data',
            'Gather and consolidate information from multiple online sources',
        ],
    },
    {
        icon: CheckSquare,
        title: 'Task & Project Support',
        desc: 'Open items tracked, follow-ups sent, and nothing forgotten — your VA owns the operational details.',
        items: [
            'Track open tasks and send follow-up messages on outstanding items',
            'Maintain and update project management tools (Asana, ClickUp, Notion, Trello)',
            'Prepare meeting agendas, take notes, and produce clean action-item summaries',
            'Coordinate between team members and follow up on cross-team deliverables',
            'Send reminders and chase approvals so you don\'t have to',
            'Document and update internal SOPs and process documentation',
        ],
    },
    {
        icon: Star,
        title: 'Personal & Administrative Support',
        desc: 'The miscellaneous tasks that eat your week — handled without you having to think about them.',
        items: [
            'Book restaurants, travel, accommodations, and experiences',
            'Handle online purchases, returns, and vendor coordination',
            'Organize and maintain digital files, folders, and cloud storage',
            'Research and compare services for personal or business decisions',
            'Manage subscriptions, renewals, and recurring administrative tasks',
            'Handle one-off requests so you can stay focused on high-value work',
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
        desc: 'Recruiting is completely free. You only pay once your VA starts.',
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
        icon: CheckSquare,
        title: 'Dedicated — Not Shared',
        desc: 'Your VA works exclusively for your business — not splitting attention between multiple clients.',
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
        title: 'Solopreneurs & Small Business Owners',
        desc: "You're doing everything yourself. A VA takes the admin work off your plate so you can focus on the work that actually moves the needle.",
    },
    {
        icon: Building,
        title: 'Growing Teams',
        desc: 'You need operational support without the overhead of a full-time hire. A virtual assistant handles the day-to-day so your team stays focused on growth.',
    },
    {
        icon: UserCheck,
        title: 'Coaches, Consultants & Freelancers',
        desc: "Scheduling, inbox management, research, follow-ups — the tasks that eat your billable hours every day. A dedicated VA handles all of it.",
    },
];

const pillars = [
    {
        icon: TrendingUp,
        title: 'Stop Doing $5/hr Work As A $100/hr Person',
        desc: 'Every hour you spend managing your inbox, building spreadsheets, or booking travel is an hour you\'re not closing deals or delivering for clients. A VA handles the operational work for a fraction of what your time is worth.',
    },
    {
        icon: DollarSign,
        title: 'Save $35k+ vs. a Local Admin Hire',
        desc: 'US-based administrative assistants cost $35,000–$55,000/year in salary alone — before benefits, desk space, and equipment. Our dedicated VAs start at $5/hr. Full-time support, none of the full-time overhead.',
    },
    {
        icon: BarChart2,
        title: 'Reliable — Without Being Managed',
        desc: "Your VA follows your processes, takes ownership of recurring tasks, and handles the unexpected without needing to be reminded three times. That's the difference between an assistant and someone you babysit.",
    },
];

const faqs = [
    {
        question: 'What tasks can a general virtual assistant handle?',
        answer: 'Email management, calendar scheduling, web research, data entry, CRM updates, meeting prep, file organization, vendor coordination, travel booking, and miscellaneous admin tasks. If it can be done remotely and doesn\'t require a local presence, a VA can handle it.',
    },
    {
        question: 'What tools and software do they use?',
        answer: 'Google Workspace, Microsoft 365, Slack, Zoom, Asana, ClickUp, Notion, Trello, HubSpot, Salesforce, Canva, and more. We match you with a VA familiar with the tools you already use — or adaptable to learn your stack quickly.',
    },
    {
        question: 'How do I hand off tasks to them?',
        answer: "Through your existing tools — email, Slack, Asana, Notion, or however you already communicate. During onboarding, you'll establish a task handoff process that fits your workflow. Most clients settle into a daily or weekly rhythm within the first two weeks.",
    },
    {
        question: 'How many hours per week do I need?',
        answer: "It depends on your volume. Part-time engagements (20 hrs/week) work well for lighter admin loads. Full-time (40 hrs/week) is best if you're handing off email, calendar, research, and project support together. We help you scope the right engagement on your discovery call.",
    },
    {
        question: 'Do I need to train them from scratch?',
        answer: "We match based on relevant experience, so you're not starting from zero. You'll still do an onboarding session to share your preferences, tools, and priorities — but your VA arrives with the foundational skills. Most clients see full productivity within 2–3 weeks.",
    },
    {
        question: 'Can one VA handle both admin and personal tasks?',
        answer: "Yes — that's one of the main advantages of a dedicated VA. They learn your work style and personal preferences so both professional and personal tasks get handled with the same consistency and discretion.",
    },
    {
        question: "What if they don't have experience in my specific industry?",
        answer: "General VA tasks are transferable across industries. We match based on role-type experience — an EA who has supported a founder in SaaS can quickly adapt to healthcare or real estate. If your work requires deep industry knowledge, we factor that into the matching process.",
    },
    {
        question: 'How is this different from hiring through Fiverr or Upwork?',
        answer: "Freelancers are project-based, have multiple clients at once, and offer no accountability structure. Your Five Star VA is dedicated to your business, works your hours, and is held accountable by our in-house HR team — including full-screen activity tracking. You get a real team member, not a contractor.",
    },
];

// ─── Component ─────────────────────────────────────────────────────────────

const VirtualAssistant: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);
    const handleSurveyComplete = () => { closeSurvey(); navigate('/booking'); };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <SEO
                title="Hire a Virtual Assistant | Email, Calendar, Research & Admin | Five Star Assistants"
                description="Hire a dedicated virtual assistant for email management, calendar scheduling, web research, data entry, and admin support. Free placement. Starting at $5/hr. Matched in 7 days."
                keywords="hire virtual assistant, virtual assistant for hire, outsource admin tasks, affordable virtual assistant, remote virtual assistant, general VA, personal virtual assistant, administrative assistant"
                canonical="https://www.fivestarassistants.com/hire/virtual-assistant"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* ── Hero ──────────────────────────────────────────────── */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="General Virtual Assistants"
                        headline={
                            <>
                                Hire A Dedicated Virtual Assistant.{' '}
                                <span className="text-gold italic">Starting at $5/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Email, calendar, research, data entry, and admin support —
                                handled by one person who treats your work like their own.{' '}
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
                                    Everything a Virtual Assistant Takes Off Your Plate
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    One dedicated VA who owns your admin end-to-end — inbox, calendar, research, tasks, and everything else that shouldn't require your attention.
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
                                    Find My Virtual Assistant
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
                                    We've removed every friction point from hiring a dedicated VA so you can focus on your business, not managing a hire.
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
                                    Built For Busy People Who Need The Admin Done Right
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    If you're spending hours each week on tasks that don't require your expertise — a dedicated VA is the fastest way to get that time back.
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

                {/* ── Built Around Your Workflow ────────────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">

                            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                                <div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                        WHY FSA FOR ADMIN SUPPORT
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built Around Your Workflow
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Most business owners either try to do everything themselves — burning hours on admin that doesn't require their expertise — or hire locally at a cost that doesn't make financial sense for the output.</p>
                                        <p>At Five Star Assistants, we match you with a dedicated VA who learns your systems, your communication style, and your priorities — then takes ownership of the work without being managed. You get a real team member, not someone you have to chase.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">Book A Discovery Call</Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>
                                <div>
                                    <img src="/images/va-2.png" alt="Virtual assistant at work" className="w-full rounded-[2rem] shadow-xl object-cover" />
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
                                Your Time Is Worth More{' '}
                                <span className="text-gold italic">Than Admin Work</span>
                            </h2>
                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us what you need handled and we'll match you with a qualified virtual assistant — in as little as 7 days. No setup fees, no long-term contracts, no risk.
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
            <SurveyModal isOpen={isSurveyOpen} onClose={closeSurvey} onComplete={handleSurveyComplete} source="Virtual Assistant" />
        </div>
    );
};

export default VirtualAssistant;
