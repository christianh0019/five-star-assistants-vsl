import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, Users, Award,
    Target, CheckSquare, MessageSquare, FileText,
    ChevronDown, Check,
    FileX, BadgeDollarSign, RefreshCw, CreditCard, List, Timer,
    Building, Briefcase, TrendingUp,
    Zap, BarChart2,
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
        icon: Target,
        title: 'Project Planning & Kickoff',
        desc: 'Every project starts with a plan. Your coordinator builds the structure that keeps everything on track from day one.',
        items: [
            'Define project scope, objectives, deliverables, and success criteria',
            'Build project timelines, milestone maps, and task dependency structures',
            'Set up project workspaces in Asana, ClickUp, Notion, or Monday.com',
            'Facilitate kickoff meetings and align all stakeholders on roles and expectations',
            'Create task assignments, ownership, and deadline structures from the project brief',
            'Build communication plans so every stakeholder knows what to expect and when',
        ],
    },
    {
        icon: CheckSquare,
        title: 'Task Tracking & Progress Management',
        desc: 'Daily visibility into what\'s done, what\'s due, and what\'s blocked — before small delays become missed deadlines.',
        items: [
            'Monitor task completion daily and flag blockers before they become delays',
            'Update project boards, track progress percentages, and log status changes',
            'Send daily or weekly progress summaries to stakeholders automatically',
            'Run standup coordination — prep notes, collect updates, synthesize outcomes',
            'Reprioritize tasks dynamically as scope, resources, or timelines shift',
            'Maintain a risk log and surface issues that need leadership attention',
        ],
    },
    {
        icon: MessageSquare,
        title: 'Team Coordination & Communication',
        desc: 'No crossed wires, no dropped handoffs — your coordinator keeps every team and stakeholder aligned throughout.',
        items: [
            'Coordinate between departments, clients, and external vendors on active projects',
            'Schedule and facilitate project meetings — agendas, notes, action items, follow-up',
            'Maintain communication cadence so no stakeholder is ever out of the loop',
            'Manage dependencies between teams so handoffs happen without gaps or delays',
            'Keep the team accountable to deadlines through structured follow-up processes',
            'Escalate blockers and coordinate resolutions so the project keeps moving forward',
        ],
    },
    {
        icon: FileText,
        title: 'Documentation & Reporting',
        desc: 'Every decision documented, every status visible, every completed project archived and easy to reference.',
        items: [
            'Maintain project documentation — specs, decision logs, change requests, and SOPs',
            'Produce weekly project status reports for stakeholders and leadership',
            'Write meeting notes and convert them into tracked, assigned action items',
            'Build project retrospectives and capture lessons learned after completion',
            'Create and maintain live project dashboards with real-time visibility',
            'Archive completed project documentation for future reference and auditing',
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
        desc: 'Recruiting is completely free. You only pay once your coordinator starts.',
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
        icon: List,
        title: 'Dedicated — Not Shared',
        desc: 'Your project coordinator works exclusively for your team — not juggling coordination for multiple companies.',
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
        title: 'Agencies & Service Businesses',
        desc: 'Multiple client projects running at once, each with its own timeline and deliverables. A project coordinator keeps every one of them on track without you managing the details.',
    },
    {
        icon: Building,
        title: 'Growing Teams',
        desc: "As the team grows, informal coordination breaks down. A project coordinator installs the structure that scales — so nothing slips through the cracks as you add people and complexity.",
    },
    {
        icon: TrendingUp,
        title: 'Founders & Operators',
        desc: 'You need someone to own the coordination layer so you can stay out of the weeds and focused on the decisions that move the business. Your coordinator handles the operational detail.',
    },
];

const pillars = [
    {
        icon: Zap,
        title: 'Projects Without a Coordinator Drift',
        desc: "Without someone dedicated to tracking, following up, and surfacing blockers, projects slip quietly. Scope creeps. Deadlines move without anyone noticing. A project coordinator is what keeps everything anchored to the original plan and timeline.",
    },
    {
        icon: DollarSign,
        title: 'Save $40k+ vs. a Full-Time PM',
        desc: 'Project managers in the US cost $70,000–$100,000/year. Our dedicated project coordinators start at $5/hr. Real project structure, consistent follow-through, none of the full-time overhead.',
    },
    {
        icon: BarChart2,
        title: 'Systems Beat Heroics Every Time',
        desc: "Great project coordination isn't about working harder when things slip — it's about building the systems that prevent slipping in the first place. Your coordinator builds those systems, maintains them, and improves them after every project.",
    },
];

const faqs = [
    {
        question: 'What project management tools do they work in?',
        answer: 'Asana, ClickUp, Monday.com, Notion, Trello, Jira, Basecamp, and Smartsheet. We match you with a coordinator experienced in the tools your team already uses — or who can set up a new system from scratch if you\'re starting fresh.',
    },
    {
        question: 'How is a project coordinator different from a project manager?',
        answer: "A project manager owns strategy, budget, risk, and stakeholder management at a senior level. A project coordinator owns the operational execution — tracking tasks, coordinating teams, maintaining documentation, and ensuring nothing falls through. For most growing businesses, a coordinator is what's actually needed.",
    },
    {
        question: 'Can they manage projects for clients, not just internal work?',
        answer: 'Yes — client-facing project coordination (timelines, deliverable tracking, client communication, reporting) is a common use case, especially for agencies and service businesses. They operate within whatever client-facing standards and communication cadence you set.',
    },
    {
        question: 'How do they handle projects that involve external contractors or vendors?',
        answer: "They manage the coordination layer — scheduling, briefing, deadline tracking, and follow-up — with external contributors just as they would with internal team members. They don't manage vendor contracts or payments, but they own the communication and accountability structure.",
    },
    {
        question: 'What happens when a project scope changes mid-flight?',
        answer: 'They document the scope change, update the affected timelines and task assignments, communicate the impact to stakeholders, and adjust the project plan accordingly. Change management is a core part of the role.',
    },
    {
        question: 'Do they need to understand our industry or product deeply?',
        answer: "Not to start. Project coordination skills transfer across industries — the tools, frameworks, and processes are the same whether you're running a software build, a marketing campaign, or a client service engagement. We match based on coordination experience, and your onboarding session fills in the context gaps.",
    },
    {
        question: 'Can they handle multiple projects simultaneously?',
        answer: "Yes — managing multiple concurrent projects is the norm. Full-time coordinators (40 hrs/week) typically manage 3–6 projects simultaneously depending on complexity. Part-time engagements scale accordingly. Volume and complexity are scoped on your discovery call.",
    },
    {
        question: 'How quickly can they get up to speed on existing projects?',
        answer: "With access to your project management tools and a structured onboarding session, most coordinators are fully operational within the first week. They'll audit the current state of all active projects, identify gaps, and start tracking from day one.",
    },
];

// ─── Component ─────────────────────────────────────────────────────────────

const ProjectCoordinator: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);
    const handleSurveyComplete = () => { closeSurvey(); navigate('/booking'); };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <SEO
                title="Hire a Project Coordinator | Task Tracking & Team Coordination | Five Star Assistants"
                description="Hire a dedicated project coordinator for project planning, task tracking, team coordination, and progress reporting. Free placement. Starting at $5/hr. Matched in 7 days."
                keywords="hire project coordinator, project coordinator virtual assistant, remote project coordinator, outsource project management, affordable project coordinator, task tracking assistant, team coordination virtual assistant"
                canonical="https://www.fivestarassistants.com/hire/project-coordinator"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* ── Hero ──────────────────────────────────────────────── */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Project Coordinators"
                        headline={
                            <>
                                Hire A Dedicated Project Coordinator.{' '}
                                <span className="text-gold italic">Starting at $5/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Project planning, task tracking, team coordination, and progress reporting —
                                all handled by someone who keeps every project on time.{' '}
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
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">WHAT THEY HANDLE</h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    Everything a Project Coordinator Takes Off Your Plate
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    One dedicated coordinator who owns the full project lifecycle — from planning and kickoff through tracking, coordination, and closeout.
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
                                <Button onClick={openSurvey} variant="primary">Find My Project Coordinator</Button>
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
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">WHY FIVE STAR ASSISTANTS</h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">Everything Included. Zero Hassle.</h2>
                                <p className="font-body text-lg text-blue-100/70 max-w-xl mx-auto">
                                    We've removed every friction point from hiring a remote project coordinator so your projects move forward, not sideways.
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
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">WHO THIS IS FOR</h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    Built For Teams That Need Their Projects To Actually Finish
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    If projects in your business routinely drift, miss deadlines, or die in a Slack thread — a dedicated project coordinator is the fix.
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

                {/* ── Built Around Your Projects ────────────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                                <div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">WHY FSA FOR PROJECT COORDINATION</h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built Around Your Projects
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Most teams manage projects reactively — someone asks for an update, a deadline is missed, a blocker surfaces after it's already delayed everything. The coordination layer gets handled by whoever has time, which means it rarely gets handled properly.</p>
                                        <p>At Five Star Assistants, we match you with a dedicated project coordinator who installs real structure — project plans, daily tracking, stakeholder communication, and documentation — so every project moves forward with visibility and accountability.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">Book A Discovery Call</Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>
                                <div>
                                    <img src="/images/va-2.png" alt="Project coordinator at work" className="w-full rounded-[2rem] shadow-xl object-cover" />
                                </div>
                            </div>
                            <div className="text-center mb-12">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">THREE REASONS TO CHOOSE FSA</h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy">Why Businesses Trust Five Star Assistants</h2>
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
                                Stop Managing The Work.{' '}
                                <span className="text-gold italic">Start Doing It.</span>
                            </h2>
                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us about your team and your projects and we'll match you with a qualified project coordinator — in as little as 7 days. No setup fees, no long-term contracts.
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
            <SurveyModal isOpen={isSurveyOpen} onClose={closeSurvey} onComplete={handleSurveyComplete} source="Project Coordinator" />
        </div>
    );
};

export default ProjectCoordinator;
