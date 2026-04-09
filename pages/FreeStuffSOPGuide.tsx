import React, { useState } from 'react';
import { Check, Star, Lock, FileText, BarChart2, BookOpen, Users, ChevronDown } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ScrollReveal from '../components/ScrollReveal';

// ─── Opt-In Form ─────────────────────────────────────────────────────────────

interface OptInProps {
    formData: { name: string; email: string; phone: string };
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent) => void;
    canSubmit: boolean;
    isSubmitting: boolean;
}

const avatars = [
    '/images/va-1.png',
    '/images/va-2.png',
    '/images/va-3.png',
    '/images/va-4.png',
    '/images/for-employees-1.png',
];

const whatIsInside = [
    { icon: FileText, text: 'How to build a perfect SOP in 5 minutes using Loom + AI' },
    { icon: BookOpen, text: 'How to structure Identity SOPs that link to task-specific workflows' },
    { icon: BarChart2, text: 'How to define KPIs so performance is clear from day one' },
    { icon: Users, text: '3 complete role SOP packages — SDR, Admin VA, Social Media Manager' },
];

const OptInView: React.FC<OptInProps> = ({ formData, onChange, onSubmit, canSubmit, isSubmitting }) => (
    <div className="w-full min-h-screen bg-white pt-24 pb-24 px-4">

        {/* Hero */}
        <div className="w-full bg-navy py-16 px-4 -mx-4 mb-0" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', width: '100vw' }}>
            <div className="max-w-3xl mx-auto text-center">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/30 text-gold font-body text-sm font-semibold mb-6">
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                    Free Resource
                </div>
                <h1 className="font-heading text-white text-4xl md:text-5xl font-bold leading-tight mb-5">
                    The Complete SOP System<br className="hidden md:block" /> for Remote Roles
                </h1>
                <p className="font-body text-white/75 text-lg max-w-2xl mx-auto">
                    Build SOPs in minutes. Hire with confidence. Hold anyone accountable — from day one.
                </p>
            </div>
        </div>

        {/* Content + Form */}
        <div className="max-w-4xl mx-auto mt-12 grid md:grid-cols-2 gap-10 items-start">

            {/* What's Inside */}
            <ScrollReveal>
                <div>
                    <p className="font-body text-gold font-bold tracking-widest uppercase text-xs mb-4">What's Inside</p>
                    <div className="flex flex-col gap-4">
                        {whatIsInside.map(({ icon: Icon, text }, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <div className="w-9 h-9 rounded-lg bg-navy/[0.07] flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <Icon size={16} className="text-navy" />
                                </div>
                                <p className="font-body text-gray-700 text-base leading-snug pt-1.5">{text}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-8 p-4 rounded-xl bg-gold/5 border border-gold/20">
                        <p className="font-body text-gray-600 text-sm leading-relaxed">
                            This is the exact SOP framework we use to onboard and manage remote workers across dozens of businesses. We're giving it away free — no strings attached.
                        </p>
                    </div>

                    {/* Social proof */}
                    <div className="mt-8 flex flex-col items-start">
                        <div className="flex items-center mb-3">
                            {avatars.map((src, i) => (
                                <img key={i} src={src} alt="client" className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm" style={{ marginLeft: i === 0 ? 0 : '-8px' }} />
                            ))}
                        </div>
                        <div className="flex gap-1 mb-1.5">
                            {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} className="text-gold fill-gold" />)}
                        </div>
                        <p className="font-body text-gray-500 text-sm">Trusted by 1,000+ businesses</p>
                    </div>
                </div>
            </ScrollReveal>

            {/* Form Card */}
            <ScrollReveal>
                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
                    <div className="bg-navy px-6 py-5">
                        <div className="flex items-center gap-2 mb-1">
                            <Lock size={14} className="text-gold" />
                            <span className="font-body text-gold text-xs font-bold uppercase tracking-widest">Instant Access</span>
                        </div>
                        <h2 className="font-heading text-white text-xl font-bold">Enter your info to unlock</h2>
                        <p className="font-body text-white/60 text-sm mt-1">The full guide unlocks immediately. No email series. No upsell.</p>
                    </div>
                    <form onSubmit={onSubmit} className="p-6 space-y-4">
                        {[
                            { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Doe' },
                            { label: 'Email Address', name: 'email', type: 'email', placeholder: 'john@company.com' },
                            { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '(555) 123-4567' },
                        ].map((field) => (
                            <div key={field.name}>
                                <label className="block text-sm font-bold text-navy mb-1">{field.label}</label>
                                <input
                                    type={field.type}
                                    name={field.name}
                                    value={formData[field.name as keyof typeof formData]}
                                    onChange={onChange}
                                    placeholder={field.placeholder}
                                    required
                                    className="w-full p-3 border border-gray-200 rounded-lg focus:border-gold outline-none font-body text-sm transition-colors"
                                />
                            </div>
                        ))}
                        <button
                            type="submit"
                            disabled={!canSubmit || isSubmitting}
                            className={`w-full bg-gold text-navy py-4 rounded-lg font-heading font-bold uppercase tracking-wide flex items-center justify-center gap-2 transition-all shadow-lg ${(!canSubmit || isSubmitting) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gold-hover hover:scale-[1.02] hover:shadow-xl'}`}
                        >
                            {isSubmitting ? 'Unlocking...' : 'Get Free Access'}
                            {!isSubmitting && <Check size={18} />}
                        </button>
                        <p className="text-center font-body text-gray-400 text-xs">We respect your privacy. No spam, ever.</p>
                    </form>
                </div>
            </ScrollReveal>

        </div>
    </div>
);

// ─── Resource Content ─────────────────────────────────────────────────────────

const SectionHeader: React.FC<{ number: string; title: string; subtitle: string }> = ({ number, title, subtitle }) => (
    <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center flex-shrink-0">
                <span className="font-heading text-gold font-bold text-sm">{number}</span>
            </div>
            <div className="h-[1px] flex-1 bg-gray-200" />
        </div>
        <h2 className="font-heading text-navy text-3xl md:text-4xl font-bold mb-2">{title}</h2>
        <p className="font-body text-gray-500 text-lg">{subtitle}</p>
    </div>
);

const SOPDocument: React.FC<{ title: string; role: string; children: React.ReactNode }> = ({ title, role, children }) => (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden mb-6">
        <div className="bg-navy px-6 py-4 flex items-center justify-between">
            <div>
                <p className="font-body text-gold text-xs font-bold uppercase tracking-widest mb-0.5">{role}</p>
                <h3 className="font-heading text-white text-lg font-bold">{title}</h3>
            </div>
            <FileText size={20} className="text-white/30" />
        </div>
        <div className="p-6">{children}</div>
    </div>
);

const KPITable: React.FC<{ rows: { kpi: string; daily?: string; weekly?: string; target?: string }[]; showDaily?: boolean }> = ({ rows, showDaily = false }) => (
    <div className="overflow-x-auto my-4">
        <table className="w-full text-sm font-body border-collapse">
            <thead>
                <tr className="bg-navy/5">
                    <th className="text-left px-4 py-3 font-heading font-bold text-navy text-xs uppercase tracking-wider rounded-tl-lg">KPI</th>
                    {showDaily && <th className="text-left px-4 py-3 font-heading font-bold text-navy text-xs uppercase tracking-wider">Daily Target</th>}
                    <th className="text-left px-4 py-3 font-heading font-bold text-navy text-xs uppercase tracking-wider rounded-tr-lg">{showDaily ? 'Weekly Target' : 'Target'}</th>
                </tr>
            </thead>
            <tbody>
                {rows.map((row, i) => (
                    <tr key={i} className={`border-t border-gray-100 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}`}>
                        <td className="px-4 py-3 text-gray-700">{row.kpi}</td>
                        {showDaily && <td className="px-4 py-3 text-navy font-semibold">{row.daily}</td>}
                        <td className="px-4 py-3 text-navy font-semibold">{row.weekly || row.target}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
);

const Callout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-gold/8 border-l-4 border-gold rounded-r-xl p-4 my-4 font-body text-gray-700 text-sm leading-relaxed">
        {children}
    </div>
);

const PromptBlock: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="bg-gray-900 rounded-xl p-5 my-4 font-mono text-sm text-gray-200 leading-relaxed whitespace-pre-wrap overflow-x-auto">
        {children}
    </div>
);

const TaskSOPStep: React.FC<{ step: number; title: string; description: string }> = ({ step, title, description }) => (
    <div className="flex gap-4 mb-4">
        <div className="w-7 h-7 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0 mt-0.5">
            <span className="font-heading text-navy font-bold text-xs">{step}</span>
        </div>
        <div>
            <p className="font-heading text-navy font-bold text-sm mb-0.5">{title}</p>
            <p className="font-body text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
    </div>
);

const ResourceView: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="w-full bg-white pt-24 pb-24 px-4">

            {/* Unlock Banner */}
            <div className="max-w-4xl mx-auto mb-10">
                <div className="bg-navy rounded-2xl px-6 py-5 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center flex-shrink-0">
                        <Check size={20} className="text-navy" />
                    </div>
                    <div>
                        <p className="font-heading text-white font-bold text-lg">You're in! Your free guide is unlocked below.</p>
                        <p className="font-body text-white/60 text-sm">Bookmark this page so you can come back anytime.</p>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto">

                {/* Guide Title */}
                <ScrollReveal>
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20 text-gold font-body text-sm font-semibold mb-5">
                            The Complete Remote Hiring SOP System
                        </div>
                        <h1 className="font-heading text-navy text-4xl md:text-5xl font-bold leading-tight mb-4">
                            Document Any Role.<br className="hidden md:block" /> Hire With Confidence.
                        </h1>
                        <p className="font-body text-gray-500 text-lg max-w-2xl mx-auto">
                            This guide covers exactly how to build SOPs, structure a full role system, define KPIs, and manage remote workers from day one. Three complete role examples included — ready to copy and customize.
                        </p>
                    </div>
                </ScrollReveal>

                {/* ─── PART 1 ──────────────────────────────────────────────── */}
                <ScrollReveal>
                    <div className="mb-16">
                        <SectionHeader
                            number="01"
                            title="Build a Perfect SOP in 5 Minutes"
                            subtitle="You don't need to write anything from scratch. Here's the fastest way to document a task in your own words."
                        />

                        <p className="font-body text-gray-600 leading-relaxed mb-6">
                            Most business owners never build SOPs because they think it takes hours. It doesn't. The secret is you already know how to do the task — you just need a way to capture it. That's where Loom comes in.
                        </p>

                        <h3 className="font-heading text-navy font-bold text-xl mb-4">The 4-Step SOP Method</h3>

                        <TaskSOPStep
                            step={1}
                            title="Open Loom and hit record"
                            description="Go to loom.com and start a new recording. Share your screen and turn on your microphone. You don't need a script — just talk out loud while you do the task. Say things like 'now I'm clicking here because...' and 'this step is important because...'. The more you narrate, the better the SOP."
                        />
                        <TaskSOPStep
                            step={2}
                            title="Walk through the task from start to finish"
                            description="Do the task exactly as you would normally do it. Keep the recording under 10 minutes if possible. Don't worry about being perfect — just be complete. If you make a mistake and fix it, narrate that too. Real-world nuance makes for better SOPs."
                        />
                        <TaskSOPStep
                            step={3}
                            title="Get the Loom AI transcript"
                            description="When your recording is done, Loom AI automatically generates a full transcript and summary of everything you said. Open the AI Notes or Summary panel in your Loom dashboard and copy the full text output."
                        />
                        <TaskSOPStep
                            step={4}
                            title="Paste into ChatGPT with this exact prompt"
                            description="Paste the Loom transcript below along with this prompt. ChatGPT will format it into a clean, structured SOP in seconds — written in your exact words and workflow."
                        />

                        <PromptBlock>{`You are a business operations expert. Below is a Loom video transcript of someone walking through a business task.

Turn this transcript into a clean, structured Standard Operating Procedure (SOP) document using the following format:

**SOP Title:** [Task Name]
**Purpose:** [1-2 sentence explanation of why this task matters]
**Tools Required:** [List all tools/software mentioned]
**Step-by-Step Process:**
1. [Clear action step]
2. [Clear action step]
...

**Common Mistakes to Avoid:**
- [Any mistakes or edge cases mentioned]

**Notes:**
- [Any other important context or nuance]

Keep the language simple and direct. Write it so a new hire can follow this on their first day with zero prior knowledge.

Here is the transcript:
[PASTE YOUR LOOM TRANSCRIPT HERE]`}</PromptBlock>

                        <Callout>
                            <strong>Pro tip:</strong> After ChatGPT generates the SOP, paste it into a Google Doc or Notion page and add screenshots from your Loom video. Screenshots make SOPs dramatically easier to follow for visual learners — and most remote workers are.
                        </Callout>
                    </div>
                </ScrollReveal>

                {/* ─── PART 2 ──────────────────────────────────────────────── */}
                <ScrollReveal>
                    <div className="mb-16">
                        <SectionHeader
                            number="02"
                            title="How to Structure a Role's SOPs"
                            subtitle="One document per role isn't enough. Here's the two-layer system that keeps everything organized and scalable."
                        />

                        <p className="font-body text-gray-600 leading-relaxed mb-6">
                            Every role in your business needs two types of documents working together: an <strong className="text-navy">Identity SOP</strong> and a set of <strong className="text-navy">Task-Specific SOPs</strong>. Think of the Identity SOP as the table of contents and the task SOPs as the chapters.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="p-6 rounded-2xl bg-navy text-white">
                                <div className="w-9 h-9 rounded-lg bg-gold/20 flex items-center justify-center mb-4">
                                    <BookOpen size={18} className="text-gold" />
                                </div>
                                <h3 className="font-heading font-bold text-lg mb-2">The Identity SOP</h3>
                                <p className="font-body text-white/70 text-sm leading-relaxed mb-4">The master document for the entire role. Every new hire reads this first — before touching anything else.</p>
                                <ul className="space-y-2 text-sm font-body text-white/80">
                                    {['Role overview and purpose', 'Daily schedule and work hours', 'Core responsibilities', 'Performance KPIs', 'Links to all task-specific SOPs', 'Tools and access required', 'Communication expectations'].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <Check size={14} className="text-gold mt-0.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200">
                                <div className="w-9 h-9 rounded-lg bg-navy/10 flex items-center justify-center mb-4">
                                    <FileText size={18} className="text-navy" />
                                </div>
                                <h3 className="font-heading font-bold text-lg text-navy mb-2">Task-Specific SOPs</h3>
                                <p className="font-body text-gray-600 text-sm leading-relaxed mb-4">Individual step-by-step documents for each workflow this role performs. Created using the Loom method above.</p>
                                <ul className="space-y-2 text-sm font-body text-gray-700">
                                    {['One SOP per distinct task or workflow', 'Linked from the Identity SOP', 'Includes screenshots or video', 'Covers common mistakes', 'Has clear start and end points', 'Updated when the process changes'].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <Check size={14} className="text-navy mt-0.5 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <Callout>
                            <strong>How they connect:</strong> The Identity SOP should have a dedicated section called "Task SOPs" that lists every task this role is responsible for, with a direct link to the corresponding SOP document. When a new hire finishes reading the Identity SOP, they know exactly where to go to learn how to do their job.
                        </Callout>
                    </div>
                </ScrollReveal>

                {/* ─── PART 3 ──────────────────────────────────────────────── */}
                <ScrollReveal>
                    <div className="mb-16">
                        <SectionHeader
                            number="03"
                            title="KPIs and Performance Tracking"
                            subtitle="The most important thing you can do before hiring is define what success looks like in measurable terms."
                        />

                        <p className="font-body text-gray-600 leading-relaxed mb-6">
                            Without KPIs, performance conversations become subjective. With KPIs, everyone knows the score. Add them directly to the Identity SOP so expectations are visible from day one — not introduced six weeks later when something goes wrong.
                        </p>

                        <div className="mb-6">
                            <h3 className="font-heading text-navy font-bold text-xl mb-4">What to Measure</h3>
                            <div className="grid md:grid-cols-3 gap-4">
                                {[
                                    { title: 'Activity Metrics', desc: 'Volume of work completed — calls made, posts published, emails sent, tasks finished. These tell you if the person is showing up and doing the work.', icon: BarChart2 },
                                    { title: 'Quality Metrics', desc: 'Accuracy, error rate, rework frequency, client satisfaction. These tell you if the work is being done right, not just fast.', icon: Check },
                                    { title: 'Outcome Metrics', desc: 'The downstream results — meetings booked, engagement rates, revenue impact. These tell you if the work is actually moving the needle.', icon: Star },
                                ].map(({ title, desc, icon: Icon }, i) => (
                                    <div key={i} className="p-5 rounded-xl border border-gray-200 bg-white">
                                        <div className="w-8 h-8 rounded-lg bg-gold/10 flex items-center justify-center mb-3">
                                            <Icon size={15} className="text-gold" />
                                        </div>
                                        <p className="font-heading text-navy font-bold text-sm mb-2">{title}</p>
                                        <p className="font-body text-gray-600 text-sm leading-relaxed">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <h3 className="font-heading text-navy font-bold text-xl mb-3">How to Track Them</h3>
                        <p className="font-body text-gray-600 leading-relaxed mb-4">
                            Keep it simple. A shared Google Sheet works fine. The assistant fills it in at the end of every shift. You review it weekly. When something is consistently below target, you address it with data — not feelings.
                        </p>
                        <ul className="space-y-2 mb-6">
                            {[
                                'Build a simple tracker with one row per day and one column per KPI',
                                'Have the assistant self-report at end of shift',
                                'Review weekly — not daily. Daily reviews create micromanagement, not results',
                                'Flag anything below 80% of target for a quick check-in',
                                'Celebrate wins publicly. Address misses privately',
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 font-body text-gray-700 text-sm">
                                    <Check size={15} className="text-gold mt-0.5 flex-shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </ScrollReveal>

                {/* ─── PART 4: SOP EXAMPLES ────────────────────────────────── */}
                <ScrollReveal>
                    <div className="mb-16">
                        <SectionHeader
                            number="04"
                            title="3 Full SOP Examples"
                            subtitle="Copy these. Customize the brackets. Start using them today."
                        />

                        {/* ── SDR ───────────────────────────────────────── */}
                        <h3 className="font-heading text-navy text-2xl font-bold mb-4">Sales Development Representative (SDR)</h3>

                        <SOPDocument title="SDR Identity SOP" role="Identity SOP">
                            <div className="space-y-5 font-body text-sm text-gray-700">

                                <div>
                                    <p className="font-heading text-navy font-bold text-base mb-1">Role Overview</p>
                                    <p className="leading-relaxed">The SDR is the engine of your outbound sales machine. This role is responsible for identifying and contacting potential customers, qualifying their interest, and booking discovery calls for the sales team. The SDR does not close deals — they open conversations.</p>
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold text-base mb-2">Core Responsibilities</p>
                                    <ul className="space-y-1.5">
                                        {['Conduct outbound cold calls to prospective leads', 'Send personalized outreach emails and follow-ups', 'Research and qualify prospects before contact', 'Log all activity in the CRM (no exceptions)', 'Book discovery calls on the sales team\'s calendar', 'Maintain organized lead lists and update statuses daily', 'Submit daily activity report by end of shift'].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2"><span className="text-gold mt-1">•</span>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold text-base mb-2">Daily Schedule</p>
                                    <div className="space-y-1.5 text-gray-600">
                                        {[
                                            ['9:00 AM', 'Log in, check messages, review today\'s call list'],
                                            ['9:15 AM', 'Outbound calling block (minimum 3 hours)'],
                                            ['12:15 PM', 'Lunch'],
                                            ['1:00 PM', 'Email outreach block'],
                                            ['2:00 PM', 'CRM updates and lead research'],
                                            ['3:30 PM', 'Follow-ups from previous days'],
                                            ['4:30 PM', 'Submit EOD activity report'],
                                        ].map(([time, task], i) => (
                                            <div key={i} className="flex gap-4">
                                                <span className="font-semibold text-navy w-20 flex-shrink-0">{time}</span>
                                                <span>{task}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold text-base mb-2">Performance KPIs (Reviewed Weekly)</p>
                                    <KPITable showDaily
                                        rows={[
                                            { kpi: 'Outbound Calls Made', daily: '80+', weekly: '400+' },
                                            { kpi: 'Emails Sent', daily: '50+', weekly: '250+' },
                                            { kpi: 'Discovery Calls Booked', daily: '1–2', weekly: '5–7' },
                                            { kpi: 'Show Rate', daily: 'N/A', weekly: '80%+' },
                                            { kpi: 'CRM Update Compliance', daily: '100%', weekly: '100%' },
                                        ]}
                                    />
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold text-base mb-2">Task-Specific SOPs (Link Each Below)</p>
                                    <ul className="space-y-1.5 text-gold">
                                        {['Cold Calling SOP', 'Email Outreach & Follow-Up SOP', 'CRM Management SOP', 'Lead Research & Qualification SOP', 'Discovery Call Booking SOP'].map((sop, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <FileText size={13} className="flex-shrink-0" />
                                                <span className="underline underline-offset-2 cursor-pointer">{sop}</span>
                                                <span className="text-gray-400 no-underline">← [paste link here]</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </SOPDocument>

                        <SOPDocument title="Cold Calling SOP" role="SDR Task SOP">
                            <div className="space-y-5 font-body text-sm text-gray-700">
                                <p className="leading-relaxed"><strong className="text-navy">Purpose:</strong> Outline the exact process for conducting outbound cold calls to maximize contact rate and conversation quality.</p>
                                <p><strong className="text-navy">Tools Required:</strong> CRM (GHL, HubSpot, or Pipedrive), Dialer (JustCall, RingCentral), Call list</p>

                                <div>
                                    <p className="font-heading text-navy font-bold mb-3">Before You Call</p>
                                    <TaskSOPStep step={1} title="Pull today's call list from the CRM" description="Sort by priority tier: warm leads first, then cold. Review each lead's name, business, and any notes from previous calls before dialing." />
                                    <TaskSOPStep step={2} title="Have your script open" description="Never wing it. Keep the opening script visible before every call. Familiarity with the script builds confidence — confidence improves your connect rate." />
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold mb-2">Opening Script</p>
                                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-700 leading-relaxed italic">
                                        "Hi [Name], this is [Your Name] calling from [Company]. I know this is out of the blue — I'll be super quick. We help [type of business] [specific result, e.g., 'book 5–10 extra qualified appointments per month']. Is that something you'd be open to a quick conversation about?"
                                    </div>
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold mb-2">Voicemail Script</p>
                                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-700 leading-relaxed italic">
                                        "Hey [Name], this is [Your Name] from [Company]. Had a quick question for you — didn't want to leave it in an email. Give me a call back at [phone number] when you get 2 minutes. Thanks, talk soon."
                                    </div>
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold mb-3">After Every Call</p>
                                    <TaskSOPStep step={1} title="Log the outcome in CRM immediately" description="Mark one of: Answered / No Answer / Voicemail Left / Not Interested / Callback Requested / Meeting Booked. Never leave a call unlogged." />
                                    <TaskSOPStep step={2} title="Handle the next step based on outcome" description="If interested → book the call directly or send the calendar link. If callback requested → set a CRM reminder for the exact time they specified. If not interested → mark closed/lost with a note." />
                                </div>

                                <Callout><strong>Rule:</strong> Never call the same number more than 3 times in a single day. Persistence is a virtue — harassment is not.</Callout>
                            </div>
                        </SOPDocument>

                        <SOPDocument title="Email Outreach & Follow-Up SOP" role="SDR Task SOP">
                            <div className="space-y-5 font-body text-sm text-gray-700">
                                <p className="leading-relaxed"><strong className="text-navy">Purpose:</strong> Outline how to send outbound prospecting emails and manage follow-up sequences without letting leads slip through the cracks.</p>
                                <p><strong className="text-navy">Tools Required:</strong> CRM or email tool (GHL, Instantly, Woodpecker), Lead list, Email templates</p>

                                <div>
                                    <p className="font-heading text-navy font-bold mb-2">Initial Outreach Template</p>
                                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-gray-700 leading-relaxed">
                                        <p className="font-semibold mb-1">Subject: Quick question for [Company Name]</p>
                                        <p className="italic">Hey [First Name],</p>
                                        <p className="italic mt-2">Came across [Company Name] and noticed [specific observation — e.g., you're growing your sales team / you recently expanded to a new market].</p>
                                        <p className="italic mt-2">We help [business type] [specific result] — without [common pain point].</p>
                                        <p className="italic mt-2">Mind if I share how it works in a quick 15-minute call?</p>
                                        <p className="italic mt-2">[Your Name]<br />[Company]</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold mb-2">Follow-Up Sequence</p>
                                    <div className="space-y-2">
                                        {[
                                            { day: 'Day 1', action: 'Initial email (template above)' },
                                            { day: 'Day 3', action: 'Follow-up #1 — reference the first email, add one new piece of context or data' },
                                            { day: 'Day 7', action: 'Follow-up #2 — value add (share a result, case study, or useful insight)' },
                                            { day: 'Day 14', action: 'Break-up email — "Last one from me — still open to a quick chat?"' },
                                        ].map(({ day, action }, i) => (
                                            <div key={i} className="flex gap-4 items-start">
                                                <span className="font-heading font-bold text-gold w-14 flex-shrink-0 text-xs uppercase tracking-wider pt-0.5">{day}</span>
                                                <span className="text-gray-700">{action}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <Callout><strong>Non-negotiable:</strong> Personalize the first line of every email. A generic blast is easy to spot and easy to ignore. One sentence of genuine personalization changes everything.</Callout>
                            </div>
                        </SOPDocument>

                        {/* ── ADMIN VA ──────────────────────────────────── */}
                        <h3 className="font-heading text-navy text-2xl font-bold mb-4 mt-10">Admin Virtual Assistant</h3>

                        <SOPDocument title="Admin VA Identity SOP" role="Identity SOP">
                            <div className="space-y-5 font-body text-sm text-gray-700">

                                <div>
                                    <p className="font-heading text-navy font-bold text-base mb-1">Role Overview</p>
                                    <p className="leading-relaxed">The Admin VA is the operational backbone of the business. This role keeps everything running behind the scenes — managing the owner's calendar, inbox, tasks, and communications so they can focus on high-leverage work. A great Admin VA anticipates needs before they're asked. They're proactive, accurate, and treat access to sensitive information with confidentiality.</p>
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold text-base mb-2">Core Responsibilities</p>
                                    <ul className="space-y-1.5">
                                        {['Manage and organize the owner\'s email inbox daily', 'Maintain the calendar — scheduling, confirmations, reminders', 'Handle task coordination and project tracking', 'Respond to routine messages using approved templates', 'Complete research tasks and prepare briefs', 'File and organize documents in shared systems', 'Flag anything urgent immediately — never wait until EOD'].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2"><span className="text-gold mt-1">•</span>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold text-base mb-2">Daily Schedule</p>
                                    <div className="space-y-1.5 text-gray-600">
                                        {[
                                            ['8:00 AM', 'Log in, review overnight emails, flag urgents'],
                                            ['8:30 AM', 'Calendar check — confirm today\'s meetings, send reminders'],
                                            ['9:00 AM', 'Begin assigned task list for the day'],
                                            ['12:00 PM', 'Lunch'],
                                            ['1:00 PM', 'Inbox management — clear, file, respond'],
                                            ['2:00 PM', 'Project tracker update, flag any blockers'],
                                            ['3:30 PM', 'Prepare and send EOD summary to owner'],
                                        ].map(([time, task], i) => (
                                            <div key={i} className="flex gap-4">
                                                <span className="font-semibold text-navy w-20 flex-shrink-0">{time}</span>
                                                <span>{task}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold text-base mb-2">Performance KPIs (Reviewed Weekly)</p>
                                    <KPITable rows={[
                                        { kpi: 'Inbox Zero achieved', target: 'Daily' },
                                        { kpi: 'Meetings confirmed 24 hrs ahead', target: '100%' },
                                        { kpi: 'Task completion rate', target: '90%+' },
                                        { kpi: 'Response time to owner messages', target: '< 15 minutes' },
                                        { kpi: 'EOD report submitted', target: 'Daily' },
                                        { kpi: 'Errors requiring rework', target: '< 2 per week' },
                                    ]} />
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold text-base mb-2">Task-Specific SOPs (Link Each Below)</p>
                                    <ul className="space-y-1.5 text-gold">
                                        {['Email Inbox Management SOP', 'Calendar Management SOP', 'Daily Task & Project Tracking SOP', 'Document Filing & Organization SOP', 'Research Request SOP'].map((sop, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <FileText size={13} className="flex-shrink-0" />
                                                <span className="underline underline-offset-2">{sop}</span>
                                                <span className="text-gray-400">← [paste link here]</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </SOPDocument>

                        <SOPDocument title="Calendar Management SOP" role="Admin VA Task SOP">
                            <div className="space-y-5 font-body text-sm text-gray-700">
                                <p><strong className="text-navy">Purpose:</strong> Manage the owner's calendar — scheduling meetings, sending confirmations, and resolving conflicts without back-and-forth.</p>
                                <p><strong className="text-navy">Tools Required:</strong> Google Calendar (or applicable tool), Calendly (or scheduling tool), Communication channel (Slack / WhatsApp)</p>

                                <div>
                                    <p className="font-heading text-navy font-bold mb-3">Scheduling a New Meeting</p>
                                    <TaskSOPStep step={1} title="Check for conflicts before booking" description="Open the calendar and verify the requested time slot is clear. Check for focus blocks — do not schedule meetings during deep work time unless explicitly approved by the owner." />
                                    <TaskSOPStep step={2} title="Add the meeting with complete details" description="Include: attendee names, meeting purpose, video call link (Zoom or Google Meet), and any prep notes the owner needs to know. Incomplete calendar entries will be rejected." />
                                    <TaskSOPStep step={3} title="Send the calendar invite" description="Send to all attendees. If using Calendly, verify the booking appears correctly in the primary calendar." />
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold mb-3">Daily Calendar Review (Every Morning by 8:30 AM)</p>
                                    <TaskSOPStep step={1} title="Review tomorrow's schedule" description="Confirm all meetings are still on. Look for gaps, double-bookings, or anything that needs attention." />
                                    <TaskSOPStep step={2} title="Send reminders if applicable" description="If the owner has requested reminder messages to attendees, send them now for any meeting starting within 24 hours." />
                                    <TaskSOPStep step={3} title="Flag anything unusual immediately" description="If something looks off — wrong time, missing link, missing attendee — message the owner right away. Don't wait." />
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold mb-3">Handling a Cancellation</p>
                                    <TaskSOPStep step={1} title="Remove from calendar immediately" description="Notify the owner as soon as a cancellation comes in. Remove the event and update the slot as available." />
                                    <TaskSOPStep step={2} title="Draft a reschedule message" description="If the owner needs to reschedule, draft the outreach and propose 2–3 new time options. Wait for owner approval before sending." />
                                </div>

                                <Callout><strong>Never:</strong> Make the decision on which meeting to keep when there's a conflict. Always surface the conflict to the owner with both meetings listed and wait for their call.</Callout>
                            </div>
                        </SOPDocument>

                        {/* ── SOCIAL MEDIA MANAGER ────────────────────── */}
                        <h3 className="font-heading text-navy text-2xl font-bold mb-4 mt-10">Social Media Manager</h3>

                        <SOPDocument title="Social Media Manager Identity SOP" role="Identity SOP">
                            <div className="space-y-5 font-body text-sm text-gray-700">

                                <div>
                                    <p className="font-heading text-navy font-bold text-base mb-1">Role Overview</p>
                                    <p className="leading-relaxed">The Social Media Manager is responsible for building and maintaining the company's brand presence across all active platforms. This includes creating and scheduling content, engaging with the audience, and tracking what's working. This is not a set-it-and-forget-it role. Quality, consistency, and brand accuracy are non-negotiable on every post.</p>
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold text-base mb-2">Core Responsibilities</p>
                                    <ul className="space-y-1.5">
                                        {['Create and schedule [X] posts per week across [list platforms]', 'Write captions that match the brand voice (see Brand Voice Guide)', 'Design graphics or coordinate with the design team', 'Engage with comments and DMs daily during business hours', 'Track performance and compile weekly analytics report', 'Research trends and content ideas relevant to the brand', 'Never post without going through the approval workflow'].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2"><span className="text-gold mt-1">•</span>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold text-base mb-2">Performance KPIs (Reviewed Weekly)</p>
                                    <KPITable rows={[
                                        { kpi: 'Posts published on schedule', target: '100%' },
                                        { kpi: 'Comment / DM response time', target: '< 2 hours (business hours)' },
                                        { kpi: 'Follower growth', target: '2–5% monthly' },
                                        { kpi: 'Average engagement rate', target: '3%+ (varies by platform)' },
                                        { kpi: 'Weekly analytics report submitted', target: 'Every Monday' },
                                        { kpi: 'Unapproved posts published', target: '0' },
                                    ]} />
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold text-base mb-2">Task-Specific SOPs (Link Each Below)</p>
                                    <ul className="space-y-1.5 text-gold">
                                        {['Content Creation & Scheduling SOP', 'Community Engagement (Comments & DMs) SOP', 'Analytics Reporting SOP', 'Trend Research SOP', 'Approval Workflow SOP'].map((sop, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <FileText size={13} className="flex-shrink-0" />
                                                <span className="underline underline-offset-2">{sop}</span>
                                                <span className="text-gray-400">← [paste link here]</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </SOPDocument>

                        <SOPDocument title="Content Creation & Scheduling SOP" role="Social Media Manager Task SOP">
                            <div className="space-y-5 font-body text-sm text-gray-700">
                                <p><strong className="text-navy">Purpose:</strong> Create, get approved, and schedule social media content without delays, errors, or off-brand posts.</p>
                                <p><strong className="text-navy">Tools Required:</strong> Design tool (Canva), Scheduling tool (Later, Buffer, or native scheduler), Approval tool (Notion, Slack, or Trello), Brand Asset Folder</p>

                                <div>
                                    <p className="font-heading text-navy font-bold mb-3">Step 1 — Plan the Content</p>
                                    <TaskSOPStep step={1} title="Review the Content Calendar at the start of each week" description="Open the shared Content Calendar. Check what's due this week and what content pillars each post should hit." />
                                    <TaskSOPStep step={2} title="Check trending topics" description="Spend 10 minutes researching what's trending in the niche. Add any relevant hooks or ideas to this week's calendar before creating anything." />
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold mb-3">Step 2 — Create the Content</p>
                                    <TaskSOPStep step={1} title="Open the correct template in Canva" description="Instagram Feed: 1080×1080px. Instagram Story / TikTok: 1080×1920px. LinkedIn: 1200×627px. Use only brand colors and fonts from the Brand Asset Folder." />
                                    <TaskSOPStep step={2} title="Write the caption separately first" description="Write the caption in a Google Doc before adding it to the scheduler. Match the brand voice (reference: Brand Voice Guide). Include a clear CTA." />
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold mb-3">Step 3 — Submit for Approval</p>
                                    <TaskSOPStep step={1} title="Add to the Approval Folder" description="Save the graphic and caption to the Approval Folder in [tool]. Tag the owner or marketing lead in the approval task." />
                                    <TaskSOPStep step={2} title="Do not schedule until approved" description="If no response within 24 hours, send a follow-up message. Never assume silence is approval." />
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold mb-3">Step 4 — Schedule and Confirm</p>
                                    <TaskSOPStep step={1} title="Upload to the scheduling tool" description="Once approved: paste the caption, upload the graphic, add hashtags from the Hashtag Bank, and schedule for the approved date and time." />
                                    <TaskSOPStep step={2} title="Verify after publishing" description="Check the post within 30 minutes of going live. If there's an error — wrong image, typo, wrong account — flag to the owner immediately. Do not delete without approval." />
                                </div>

                                <Callout><strong>Zero unapproved posts.</strong> This is a non-negotiable. Every post represents the brand. One unapproved post that goes wrong can create a reputation problem that takes months to fix.</Callout>
                            </div>
                        </SOPDocument>

                    </div>
                </ScrollReveal>

                {/* ─── CTA ─────────────────────────────────────────────────── */}
                <ScrollReveal>
                    <div className="rounded-2xl bg-navy p-10 text-center mt-6">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/30 text-gold font-body text-sm font-semibold mb-5">
                            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                            Ready to Hire?
                        </div>
                        <h2 className="font-heading text-white text-3xl md:text-4xl font-bold mb-4">
                            Now get someone in the seat.
                        </h2>
                        <p className="font-body text-white/70 text-lg mb-7 max-w-xl mx-auto">
                            We match you with an experienced VA at $5–$15/hr. Free placement, no contracts, matched in days.
                        </p>
                        <a
                            href="/booking"
                            className="inline-flex items-center gap-2 bg-gold text-navy px-8 py-4 rounded-full font-heading font-bold uppercase tracking-wide shadow-xl hover:bg-gold-hover hover:scale-105 transition-all"
                        >
                            Book a Free Discovery Call
                        </a>
                        <p className="font-body text-white/40 text-sm mt-4">100% free. No obligation.</p>
                    </div>
                </ScrollReveal>

            </div>
        </div>
    );
};

// ─── Main Page ────────────────────────────────────────────────────────────────

const FreeStuffSOPGuide: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isUnlocked, setIsUnlocked] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const canSubmit = !!(formData.name && formData.email && formData.phone);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!canSubmit) return;
        setIsSubmitting(true);

        try {
            // TODO: Replace with your GHL resource download webhook URL (separate from main lead capture)
            await fetch('https://services.leadconnectorhq.com/hooks/REPLACE_WITH_RESOURCE_WEBHOOK_ID/webhook-trigger/REPLACE_WITH_TRIGGER_ID', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    source: 'Free Stuff — SOP Guide',
                    contactType: 'ResourceDownload',
                }),
            });
        } catch (err) {
            console.error('Resource webhook error:', err);
        }

        setIsSubmitting(false);
        setIsUnlocked(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <SEO
                title="Free SOP System for Remote Hiring | Five Star Assistants"
                description="Get the complete SOP system for hiring and managing remote workers. Includes 3 full role SOP examples — SDR, Admin VA, and Social Media Manager — with KPIs and task SOPs ready to use."
                keywords="remote hiring SOPs, virtual assistant SOPs, how to create SOPs, remote team management, SOP templates"
                canonical="https://www.fivestarassistants.com/free-stuff"
            />
            <Navbar alwaysWhite />

            {!isUnlocked ? (
                <OptInView
                    formData={formData}
                    onChange={handleChange}
                    onSubmit={handleSubmit}
                    canSubmit={canSubmit}
                    isSubmitting={isSubmitting}
                />
            ) : (
                <ResourceView />
            )}

            <Footer />
        </>
    );
};

export default FreeStuffSOPGuide;
