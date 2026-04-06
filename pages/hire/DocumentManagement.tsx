import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, Users, Award,
    FolderOpen, FileText, BookOpen, Shield,
    ChevronDown, Check,
    FileX, BadgeDollarSign, RefreshCw, CreditCard, Timer,
    Building, Briefcase, UserCheck,
    BarChart2, TrendingUp,
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
        icon: FolderOpen,
        title: 'File Organization & Cloud Storage',
        desc: 'A logical, navigable file system your whole team can use — built once, maintained consistently.',
        items: [
            'Audit existing file storage and map the full scope of current disorganization',
            'Design a logical folder structure with clear naming conventions and hierarchy',
            'Migrate, reorganize, and relabel files across Google Drive, Dropbox, SharePoint, or Notion',
            'Set up and maintain access permissions so the right people see the right files',
            'Create a master file index or knowledge base so anyone can find anything fast',
            'Establish ongoing maintenance protocols to prevent the system from deteriorating over time',
        ],
    },
    {
        icon: FileText,
        title: 'Document Creation & Formatting',
        desc: 'Professional, on-brand documents and templates — built to your standards and ready to use across the team.',
        items: [
            'Create professional document templates for proposals, reports, contracts, and memos',
            'Format and polish business documents to brand standards (fonts, colors, logos, spacing)',
            'Produce presentations, decks, and one-pagers from raw notes or bullet points',
            'Convert between file formats (Word to PDF, PDF to editable, etc.) as needed',
            'Create fillable forms, intake templates, and standardized document frameworks',
            'Maintain a library of branded templates available and up-to-date for the whole team',
        ],
    },
    {
        icon: BookOpen,
        title: 'SOP Writing & Process Documentation',
        desc: 'Clear, written processes that anyone on your team can follow — without asking someone how to do it.',
        items: [
            'Interview team members and document current workflows as clear, step-by-step SOPs',
            'Write process guides for onboarding, operations, client delivery, and recurring tasks',
            'Build knowledge base articles, wikis, and internal training materials',
            'Maintain and update SOPs when processes change to keep documentation current',
            'Create visual process maps and flowcharts for complex or multi-step workflows',
            'Organize all process documentation in a searchable, accessible knowledge base',
        ],
    },
    {
        icon: Shield,
        title: 'Records Management & Compliance',
        desc: 'Versioned, retained, and properly secured — so your records hold up to scrutiny and nothing important gets lost.',
        items: [
            'Implement document versioning and change tracking across all key files',
            'Establish document retention schedules and archive or delete outdated records on schedule',
            'Audit document access permissions and flag files with inappropriate exposure',
            'Create a document control system for regulated industries (legal, healthcare, finance)',
            'Maintain audit-ready records with consistent naming, dating, and storage standards',
            'Document the file management system itself so anyone can maintain it going forward',
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
        icon: FolderOpen,
        title: 'Dedicated — Not Shared',
        desc: 'Your specialist works exclusively for your business — not managing files for a rotation of other clients.',
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
        title: 'Growing Teams',
        desc: "As the team grows, shared drives become unmanageable. A document specialist installs the structure before the chaos becomes permanent — and keeps it that way.",
    },
    {
        icon: Briefcase,
        title: 'Operations Managers',
        desc: "You know the files are a mess and no one has time to fix it. Your specialist does the full audit, builds the new system, and maintains it going forward.",
    },
    {
        icon: UserCheck,
        title: 'Professional Service Firms',
        desc: 'Law firms, agencies, and consultancies deal with high volumes of client documents that need to be organized, versioned, and instantly accessible. This role is built for exactly that.',
    },
];

const pillars = [
    {
        icon: BarChart2,
        title: 'Disorganized Files Cost More Than You Think',
        desc: "When people can't find files, they recreate them. When documents aren't versioned, the wrong version gets used. When permissions aren't set, sensitive information leaks. Document chaos creates real operational and compliance risk — not just inconvenience.",
    },
    {
        icon: DollarSign,
        title: 'Save $35k+ vs. a Local Admin Hire',
        desc: 'Hiring someone locally to manage documents and build SOPs costs $35,000–$50,000/year. Our dedicated specialists start at $5/hr. The same organized, thorough output at a fraction of the cost.',
    },
    {
        icon: TrendingUp,
        title: 'When Everyone Can Find Everything, Work Gets Done',
        desc: "The goal isn't a perfect filing system. It's a system anyone on your team can navigate, maintain, and trust — without asking someone else where something is. That's what your specialist builds and keeps running.",
    },
];

const faqs = [
    {
        question: 'What platforms and cloud storage tools do they work with?',
        answer: 'Google Drive, Microsoft SharePoint, Dropbox, Box, Notion, Confluence, and most other document management platforms. We match you with a specialist familiar with the tools your team already uses.',
    },
    {
        question: 'What if we have thousands of existing files to organize?',
        answer: "That's the most common starting point. They begin with an audit — mapping what exists, where it lives, and what the duplication and gap situation looks like — then build the new system and migrate files systematically. Large reorganizations are scoped and planned before any files are moved.",
    },
    {
        question: 'Can they set up naming conventions and folder structures from scratch?',
        answer: "Yes. Building a logical folder hierarchy and naming convention is often the first deliverable. They'll propose a structure based on your business model and team needs, get your approval, then implement it consistently across all platforms.",
    },
    {
        question: "Can they write SOPs even if we've never documented our processes?",
        answer: "Yes — and undocumented businesses are exactly who needs this most. They interview team members, observe workflows, and convert informal institutional knowledge into clear, written SOPs. No existing documentation required.",
    },
    {
        question: 'How do they handle sensitive or confidential documents?',
        answer: "All specialists sign NDAs and receive access only to the systems and document categories required for their work. Access is granted through role-based permissions, not shared credentials. Sensitive document categories can be explicitly excluded from their scope.",
    },
    {
        question: "What's the best way to hand off ongoing file management to them?",
        answer: "During onboarding, you share access to your storage platforms and walk them through the current state. They audit, propose a new structure, get your approval, and then take over ongoing maintenance — adding new files to the right place, updating SOPs when processes change, and keeping the system clean.",
    },
    {
        question: 'Can they create document templates in Word, Google Docs, and other tools?',
        answer: "Yes — document template creation is a core deliverable. They build templates in Google Docs, Microsoft Word, PowerPoint, Google Slides, Canva, and Notion, depending on where your team works and what formats you need.",
    },
    {
        question: 'How do they keep the system organized over time, not just at setup?',
        answer: "Through a recurring maintenance process — regularly auditing for misplaced files, updating templates when processes change, adding new SOPs as new workflows emerge, and enforcing naming conventions as new content is created. Setup is the start, not the end.",
    },
];

// ─── Component ─────────────────────────────────────────────────────────────

const DocumentManagement: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);
    const handleSurveyComplete = () => { closeSurvey(); navigate('/booking'); };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <SEO
                title="Hire a Document & File Management Specialist | SOPs & Cloud Storage | Five Star Assistants"
                description="Hire a dedicated document and file management specialist for file organization, SOP writing, document templates, and records management. Free placement. Starting at $5/hr. Matched in 7 days."
                keywords="hire document management specialist, file organization virtual assistant, SOP writer for hire, cloud storage organizer, process documentation assistant, records management VA, Google Drive organization"
                canonical="https://www.fivestarassistants.com/hire/document-management"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* ── Hero ──────────────────────────────────────────────── */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Document & File Management Specialists"
                        headline={
                            <>
                                Hire A Dedicated Document & File Management Specialist.{' '}
                                <span className="text-gold italic">Starting at $5/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                File organization, SOP writing, document templates, and records management —
                                all handled by someone who builds systems your team can actually use.{' '}
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
                                    Everything a Document Specialist Takes Off Your Plate
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    One dedicated specialist who builds your document infrastructure — file systems, templates, SOPs, and records management — and keeps it running.
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
                                <Button onClick={openSurvey} variant="primary">Find My Document Management Specialist</Button>
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
                                    We've removed every friction point from hiring a dedicated document specialist so your team can stop searching for files and start using them.
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
                                    Built For Teams That Are Tired Of Not Finding What They Need
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    If your files are scattered, your SOPs are in someone's head, or your shared drive is a place files go to disappear — a dedicated specialist fixes that permanently.
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

                {/* ── Built Around Your Operations ──────────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                                <div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">WHY FSA FOR DOCUMENT MANAGEMENT</h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built Around Your Operations
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Most teams tolerate document chaos because no one has time to fix it. Files pile up in the wrong folders, SOPs exist only in people's heads, and the shared drive becomes a place new hires are afraid to touch.</p>
                                        <p>At Five Star Assistants, we match you with a dedicated document specialist who audits the current state, builds a system that works for your team, writes the SOPs that turn institutional knowledge into documented process, and maintains everything going forward.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">Book A Discovery Call</Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>
                                <div>
                                    <img src="/images/va-2.png" alt="Document management specialist at work" className="w-full rounded-[2rem] shadow-xl object-cover" />
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
                                Fix The Mess Once.{' '}
                                <span className="text-gold italic">Keep It Clean Forever.</span>
                            </h2>
                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us about your current file situation and what you need built — and we'll match you with a qualified document specialist in as little as 7 days. No setup fees, no long-term contracts.
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
            <SurveyModal isOpen={isSurveyOpen} onClose={closeSurvey} onComplete={handleSurveyComplete} source="Document Management" />
        </div>
    );
};

export default DocumentManagement;
