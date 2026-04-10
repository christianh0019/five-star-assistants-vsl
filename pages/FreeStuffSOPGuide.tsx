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
    { icon: FileText, text: 'A method to document any task in under 5 minutes — no writing required' },
    { icon: BookOpen, text: 'The two-document system that makes any remote role fully accountable from day one' },
    { icon: BarChart2, text: 'How to define what "good" looks like before your hire ever logs in for the first time' },
    { icon: Users, text: '3 complete role packages — built out and ready to hand off today' },
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
        <div className="w-full bg-white pt-32 pb-24 px-4">

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

                        <p className="font-body text-gray-600 leading-relaxed mb-8">
                            Watch the walkthrough below, then open the Google Doc to follow along.
                        </p>

                        {/* Loom Video */}
                        <div className="relative rounded-2xl overflow-hidden mb-6 bg-black" style={{ paddingTop: '62.5%' }}>
                            <iframe
                                src="https://www.loom.com/embed/8ec281f4baf5417096ba23e58c1c36db"
                                className="absolute inset-0 w-full h-full"
                                allowFullScreen
                                title="How to create SOPs with Loom"
                            />
                        </div>

                        {/* Google Doc */}
                        <a
                            href="https://docs.google.com/document/d/1BU6ft57K4KhNJUBmSr7teHjoTgxlD7zxOyz6yHkdFS0/edit?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-5 rounded-xl border-2 border-navy/10 hover:border-gold/40 bg-white hover:bg-gold/5 transition-all group"
                        >
                            <div className="w-10 h-10 rounded-lg bg-navy/[0.07] flex items-center justify-center flex-shrink-0">
                                <FileText size={18} className="text-navy" />
                            </div>
                            <div className="flex-1">
                                <p className="font-heading text-navy font-bold text-sm">Open the SOP Template in Google Docs →</p>
                                <p className="font-body text-gray-500 text-xs mt-0.5">Copy it to your Drive and customize for your business</p>
                            </div>
                        </a>
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
                <div className="mb-16">
                        <SectionHeader
                            number="04"
                            title="3 Full SOP Examples"
                            subtitle="Copy these. Customize the brackets. Start using them today."
                        />

                        {/* ── SDR ───────────────────────────────────────── */}
                        <h3 className="font-heading text-navy text-2xl font-bold mb-4">Sales Development Representative (SDR)</h3>

                        <SOPDocument title="SDR Identity SOP" role="Identity SOP">
                            <div className="space-y-6 font-body text-sm text-gray-700">

                                <div>
                                    <p className="font-heading text-navy font-bold text-base mb-2">Role Overview</p>
                                    <p className="leading-relaxed mb-2">The SDR's job is to keep the sales pipeline full. This role handles all outbound prospecting — cold calls, email outreach, follow-ups, and appointment setting — so the sales team always has qualified conversations to close. The SDR does not close deals. They start the right ones.</p>
                                    <p className="leading-relaxed">Great SDRs run their day like a machine — high volume, organized records, and zero excuses for unlogged activity. If it wasn't logged, it didn't happen.</p>
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold text-base mb-2">Core Responsibilities</p>
                                    <ul className="space-y-1.5">
                                        {[
                                            'Run outbound cold calls daily from the assigned lead list',
                                            'Send and manage personalized email outreach sequences',
                                            'Research and qualify prospects before first contact',
                                            'Log every call, email, and outcome in the CRM the same day',
                                            'Book discovery calls directly on the sales team\'s calendar',
                                            'Maintain a clean, updated lead list at all times',
                                            'Submit an EOD activity report before logging off each day',
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2"><span className="text-gold mt-1">•</span>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold text-base mb-2">Daily Schedule <span className="text-gray-400 font-body font-normal">(9 AM – 5 PM)</span></p>
                                    <div className="space-y-1.5 text-gray-600">
                                        {[
                                            ['9:00 AM',  'Log in, check messages, pull today\'s call list from the CRM'],
                                            ['9:15 AM',  'Outbound calling block — minimum 3 hours, no interruptions'],
                                            ['12:15 PM', 'Lunch'],
                                            ['1:00 PM',  'Email outreach — personalized sends and active follow-ups'],
                                            ['2:00 PM',  'CRM cleanup — log all morning activity, update lead statuses'],
                                            ['3:00 PM',  'Lead research — qualify tomorrow\'s call list, build pipeline'],
                                            ['4:30 PM',  'Submit EOD report with daily activity numbers'],
                                            ['5:00 PM',  'Log off'],
                                        ].map(([time, task], i) => (
                                            <div key={i} className="flex gap-4">
                                                <span className="font-semibold text-navy w-20 flex-shrink-0">{time}</span>
                                                <span>{task}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold text-base mb-2">Performance KPIs</p>
                                    <KPITable showDaily
                                        rows={[
                                            { kpi: 'Outbound Calls Made', daily: '80+', weekly: '400+' },
                                            { kpi: 'Emails Sent', daily: '50+', weekly: '250+' },
                                            { kpi: 'Discovery Calls Booked', daily: '1–2', weekly: '5–7' },
                                            { kpi: 'Show Rate', daily: '—', weekly: '80%+' },
                                            { kpi: 'CRM Update Compliance', daily: '100%', weekly: '100%' },
                                        ]}
                                    />
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold text-base mb-2">Non-Negotiables</p>
                                    <ul className="space-y-2">
                                        {[
                                            'Every call and email gets logged in the CRM the day it happens. No exceptions, no catching up tomorrow.',
                                            'Personalize every email. No unmodified template sends. One genuine line changes everything.',
                                            'The EOD report goes out before logging off — every day, without being asked.',
                                            'Never book a meeting without confirming availability on the calendar first.',
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2.5">
                                                <span className="w-5 h-5 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-navy font-bold text-xs">{i + 1}</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold text-base mb-2">Task-Specific SOPs <span className="text-gray-400 font-body font-normal text-xs">(build these using the Loom method above)</span></p>
                                    <ul className="space-y-1.5 text-gold">
                                        {['Cold Calling SOP', 'Email Outreach & Follow-Up SOP', 'CRM Management SOP', 'Lead Research & Qualification SOP', 'Discovery Call Booking SOP'].map((sop, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <FileText size={13} className="flex-shrink-0" />
                                                <span className="text-gray-700">{sop}</span>
                                                <span className="text-gray-400 text-xs">← [paste link here]</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </SOPDocument>

                        {/* ── ADMIN VA ──────────────────────────────────── */}
                        <h3 className="font-heading text-navy text-2xl font-bold mb-4 mt-10">Admin Virtual Assistant</h3>

                        <SOPDocument title="Admin VA Identity SOP" role="Identity SOP">
                            <div className="space-y-6 font-body text-sm text-gray-700">

                                <div>
                                    <p className="font-heading text-navy font-bold text-base mb-2">Role Overview</p>
                                    <p className="leading-relaxed mb-2">The Admin VA is the operational nerve center of the business. This role manages the owner's calendar, inbox, task list, and communications — making sure nothing falls through the cracks so the owner can focus entirely on high-leverage work.</p>
                                    <p className="leading-relaxed">The standard in this role is simple: if the owner has to remind you of something, that's a miss. Proactivity, accuracy, and discretion are the three things this role is measured by above all else.</p>
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold text-base mb-2">Core Responsibilities</p>
                                    <ul className="space-y-1.5">
                                        {[
                                            'Manage the owner\'s email inbox to zero every business day',
                                            'Own the calendar — schedule, confirm, and protect time proactively',
                                            'Coordinate tasks and projects across tools and team members',
                                            'Respond to routine inquiries using approved message templates',
                                            'Complete research briefs and information requests as assigned',
                                            'Maintain organized document systems in shared drives',
                                            'Send a daily EOD summary to the owner before logging off',
                                            'Flag anything urgent the moment it\'s identified — never hold until EOD',
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2"><span className="text-gold mt-1">•</span>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold text-base mb-2">Daily Schedule <span className="text-gray-400 font-body font-normal">(8 AM – 4 PM)</span></p>
                                    <div className="space-y-1.5 text-gray-600">
                                        {[
                                            ['8:00 AM',  'Log in, scan overnight emails, flag anything urgent immediately'],
                                            ['8:30 AM',  'Calendar review — confirm today\'s meetings, send reminders'],
                                            ['9:00 AM',  'Work through daily task list, starting with highest-priority items'],
                                            ['12:00 PM', 'Lunch'],
                                            ['1:00 PM',  'Full inbox sweep — respond, file, or escalate everything'],
                                            ['2:00 PM',  'Update project tracker, flag blockers, coordinate handoffs'],
                                            ['3:30 PM',  'Prepare and send EOD summary to the owner'],
                                            ['4:00 PM',  'Log off'],
                                        ].map(([time, task], i) => (
                                            <div key={i} className="flex gap-4">
                                                <span className="font-semibold text-navy w-20 flex-shrink-0">{time}</span>
                                                <span>{task}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold text-base mb-2">Performance KPIs</p>
                                    <KPITable rows={[
                                        { kpi: 'Inbox Zero achieved', target: 'Every day' },
                                        { kpi: 'Meetings confirmed 24 hrs in advance', target: '100%' },
                                        { kpi: 'Task completion rate', target: '90%+' },
                                        { kpi: 'Response time to owner messages', target: '< 15 minutes' },
                                        { kpi: 'EOD summary submitted', target: 'Every day' },
                                        { kpi: 'Rework requests from owner', target: '< 2 per week' },
                                    ]} />
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold text-base mb-2">Non-Negotiables</p>
                                    <ul className="space-y-2">
                                        {[
                                            'Never make a decision on the owner\'s behalf without explicit approval — always ask first.',
                                            'Urgent items get flagged immediately. Not at the end of the day.',
                                            'Inbox Zero every single day. If you can\'t get there, flag it before logging off.',
                                            'Everything stays confidential. Access to information in this role is a privilege, not a right.',
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2.5">
                                                <span className="w-5 h-5 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-navy font-bold text-xs">{i + 1}</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold text-base mb-2">Task-Specific SOPs <span className="text-gray-400 font-body font-normal text-xs">(build these using the Loom method above)</span></p>
                                    <ul className="space-y-1.5 text-gold">
                                        {['Email Inbox Management SOP', 'Calendar Management SOP', 'Daily Task & Project Tracking SOP', 'Document Filing & Organization SOP', 'Research Request SOP'].map((sop, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <FileText size={13} className="flex-shrink-0" />
                                                <span className="text-gray-700">{sop}</span>
                                                <span className="text-gray-400 text-xs">← [paste link here]</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </SOPDocument>

                        {/* ── SOCIAL MEDIA MANAGER ────────────────────── */}
                        <h3 className="font-heading text-navy text-2xl font-bold mb-4 mt-10">Social Media Manager</h3>

                        <SOPDocument title="Social Media Manager Identity SOP" role="Identity SOP">
                            <div className="space-y-6 font-body text-sm text-gray-700">

                                <div>
                                    <p className="font-heading text-navy font-bold text-base mb-2">Role Overview</p>
                                    <p className="leading-relaxed mb-2">The Social Media Manager owns the brand's online presence. This role is responsible for creating and publishing content, engaging with the audience, and tracking what's working — consistently, every week, without reminders. This isn't a role you can coast in. Every post is public and every gap in the schedule has a cost.</p>
                                    <p className="leading-relaxed">A great Social Media Manager is equal parts creative and organized. They bring ideas to the table, execute reliably, and back up every decision with data from the weekly analytics report.</p>
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold text-base mb-2">Core Responsibilities</p>
                                    <ul className="space-y-1.5">
                                        {[
                                            'Create, get approved, and publish [X] posts per week across [platforms]',
                                            'Write all captions in the brand\'s voice (reference: Brand Voice Guide)',
                                            'Respond to every comment and DM within 2 business hours',
                                            'Build and maintain the weekly content calendar',
                                            'Submit a weekly analytics report every Monday morning',
                                            'Research content trends relevant to the brand each week',
                                            'Run every piece of content through the approval workflow before scheduling',
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2"><span className="text-gold mt-1">•</span>{item}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold text-base mb-2">Daily Schedule <span className="text-gray-400 font-body font-normal">(9 AM – 5 PM)</span></p>
                                    <div className="space-y-1.5 text-gray-600">
                                        {[
                                            ['9:00 AM',  'Log in, check DMs and comments from overnight, respond to anything outstanding'],
                                            ['9:30 AM',  'Content creation block — create graphics, draft captions for upcoming posts'],
                                            ['12:00 PM', 'Lunch'],
                                            ['1:00 PM',  'Schedule and confirm all upcoming approved posts in scheduling tool'],
                                            ['2:00 PM',  'Trend research — identify content ideas, update content calendar'],
                                            ['3:30 PM',  'Submit content for approval; follow up on any pending approvals'],
                                            ['4:30 PM',  'Final DM/comment sweep; submit EOD summary'],
                                            ['5:00 PM',  'Log off'],
                                        ].map(([time, task], i) => (
                                            <div key={i} className="flex gap-4">
                                                <span className="font-semibold text-navy w-20 flex-shrink-0">{time}</span>
                                                <span>{task}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold text-base mb-2">Performance KPIs</p>
                                    <KPITable rows={[
                                        { kpi: 'Posts published on schedule', target: '100%' },
                                        { kpi: 'Comment / DM response time', target: '< 2 hours (business hours)' },
                                        { kpi: 'Follower growth (monthly)', target: '2–5%' },
                                        { kpi: 'Average engagement rate', target: '3%+' },
                                        { kpi: 'Weekly analytics report submitted', target: 'Every Monday' },
                                        { kpi: 'Unapproved posts published', target: '0' },
                                    ]} />
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold text-base mb-2">Non-Negotiables</p>
                                    <ul className="space-y-2">
                                        {[
                                            'Zero unapproved posts — ever. Every piece of content goes through the approval workflow before it gets scheduled.',
                                            'All DMs and comments get a response within 2 business hours. Silence is not engagement.',
                                            'The Monday analytics report is non-negotiable. It goes out every week, on time.',
                                            'Use only approved brand assets. No free stock photos or off-brand graphics.',
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-start gap-2.5">
                                                <span className="w-5 h-5 rounded-full bg-navy/10 flex items-center justify-center flex-shrink-0 mt-0.5 text-navy font-bold text-xs">{i + 1}</span>
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <p className="font-heading text-navy font-bold text-base mb-2">Task-Specific SOPs <span className="text-gray-400 font-body font-normal text-xs">(build these using the Loom method above)</span></p>
                                    <ul className="space-y-1.5 text-gold">
                                        {['Content Creation & Scheduling SOP', 'Community Engagement (Comments & DMs) SOP', 'Analytics Reporting SOP', 'Trend Research SOP', 'Content Approval Workflow SOP'].map((sop, i) => (
                                            <li key={i} className="flex items-center gap-2">
                                                <FileText size={13} className="flex-shrink-0" />
                                                <span className="text-gray-700">{sop}</span>
                                                <span className="text-gray-400 text-xs">← [paste link here]</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </SOPDocument>

                </div>

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
                canonical="https://www.fivestarassistants.com/free-stuff/sop-guide"
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
