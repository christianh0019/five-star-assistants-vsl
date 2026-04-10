import React, { useState } from 'react';
import { Check, ArrowRight, Clock, DollarSign, TrendingUp, Users, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

// ─── Constants & Data ────────────────────────────────────────────────────────

const fmt = (n: number) => '$' + Math.round(Math.abs(n)).toLocaleString('en-US');

const OFFSHORE_RATE = 8;

const REVENUE_TO_RATE: Record<string, number> = {
  '$1M-$2M': 150,
  '$2M-$5M': 250,
  '$5M-$10M': 350,
  '$10M+': 500,
};

const ROLE_MAP: Record<string, string> = {
  'Admin & Ops': 'General Virtual Assistant',
  'Customer-Facing': 'Customer Service Rep',
  'Sales & Outreach': 'SDR / Appointment Setter',
  'Marketing': 'Social Media Manager',
  'Finance': 'Bookkeeper',
  'Operations': 'Project Coordinator',
};

const DOMESTIC_RATES: Record<string, number> = {
  'Admin & Ops': 20,
  'Customer-Facing': 18,
  'Sales & Outreach': 22,
  'Marketing': 24,
  'Finance': 25,
  'Operations': 20,
};

type Category = 'Admin & Ops' | 'Customer-Facing' | 'Sales & Outreach' | 'Marketing' | 'Finance' | 'Operations';

interface Task {
  id: string;
  name: string;
  category: Category;
}

const ALL_TASKS: Task[] = [
  { id: 'email-mgmt', name: 'Managing email inbox', category: 'Admin & Ops' },
  { id: 'calendar', name: 'Calendar management & scheduling', category: 'Admin & Ops' },
  { id: 'data-entry', name: 'Data entry & spreadsheet work', category: 'Admin & Ops' },
  { id: 'research', name: 'Research & information gathering', category: 'Admin & Ops' },
  { id: 'file-mgmt', name: 'File & document management', category: 'Admin & Ops' },
  { id: 'doc-writing', name: 'Writing & formatting documents', category: 'Admin & Ops' },
  { id: 'cust-inquiries', name: 'Responding to customer inquiries', category: 'Customer-Facing' },
  { id: 'complaints', name: 'Handling complaints & escalations', category: 'Customer-Facing' },
  { id: 'onboarding', name: 'Customer onboarding calls', category: 'Customer-Facing' },
  { id: 'acct-checkins', name: 'Account check-ins & follow-up', category: 'Customer-Facing' },
  { id: 'live-chat', name: 'Live chat & ticket support', category: 'Customer-Facing' },
  { id: 'cold-outreach', name: 'Cold calls & outreach emails', category: 'Sales & Outreach' },
  { id: 'follow-up', name: 'Follow-up sequences', category: 'Sales & Outreach' },
  { id: 'crm-updates', name: 'CRM updates & data logging', category: 'Sales & Outreach' },
  { id: 'lead-research', name: 'Lead research & list building', category: 'Sales & Outreach' },
  { id: 'booking', name: 'Booking & confirming appointments', category: 'Sales & Outreach' },
  { id: 'social-media', name: 'Social media posting & scheduling', category: 'Marketing' },
  { id: 'content-writing', name: 'Content writing & editing', category: 'Marketing' },
  { id: 'graphics', name: 'Graphic creation & design work', category: 'Marketing' },
  { id: 'email-campaigns', name: 'Email campaign management', category: 'Marketing' },
  { id: 'analytics', name: 'Analytics reporting', category: 'Marketing' },
  { id: 'invoicing', name: 'Invoicing & billing', category: 'Finance' },
  { id: 'expenses', name: 'Expense tracking & reconciliation', category: 'Finance' },
  { id: 'bookkeeping', name: 'Bookkeeping', category: 'Finance' },
  { id: 'payroll', name: 'Payroll support', category: 'Finance' },
  { id: 'project-tracking', name: 'Project tracking & coordination', category: 'Operations' },
  { id: 'vendor-mgmt', name: 'Vendor & contractor management', category: 'Operations' },
  { id: 'process-docs', name: 'Process documentation', category: 'Operations' },
  { id: 'reporting', name: 'Reporting & dashboards', category: 'Operations' },
];

const CATEGORIES: Category[] = ['Admin & Ops', 'Customer-Facing', 'Sales & Outreach', 'Marketing', 'Finance', 'Operations'];

const ROLES = [
  'Owner / CEO',
  'COO / Operations',
  'Sales Manager',
  'Marketing Manager',
  'Office Manager',
  'Other',
];

const INDUSTRIES = [
  'Real Estate',
  'Home Services',
  'E-Commerce',
  'Digital Agency',
  'Healthcare',
  'Legal',
  'Insurance',
  'Financial Services',
  'Logistics',
  'Education',
  'Other',
];

const REVENUE_RANGES = ['$1M-$2M', '$2M-$5M', '$5M-$10M', '$10M+'] as const;

// ─── Types ────────────────────────────────────────────────────────────────────

interface TaskSelection {
  [taskId: string]: number; // hours
}

interface FormData {
  firstName: string;
  role: string;
  revenueRange: string;
  industry: string;
  email: string;
  company: string;
  phone: string;
}

// ─── Progress Bar ─────────────────────────────────────────────────────────────

const ProgressBar: React.FC<{ step: number }> = ({ step }) => {
  const pct = (step / 4) * 100;
  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="font-body text-xs text-gray-400 font-medium">Step {step} of 4</span>
        <span className="font-body text-xs text-gray-400 font-medium">{Math.round(pct)}% complete</span>
      </div>
      <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
        <div
          className="h-full bg-gold rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
};

// ─── Step 0: Landing ─────────────────────────────────────────────────────────

const Step0Landing: React.FC<{ onStart: () => void }> = ({ onStart }) => (
  <div className="w-full">
    {/* Hero */}
    <div className="w-full bg-navy py-20 px-4" style={{ marginLeft: 'calc(-50vw + 50%)', marginRight: 'calc(-50vw + 50%)', width: '100vw' }}>
      <div className="max-w-3xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/30 text-gold font-body text-sm font-semibold mb-6">
          <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
          Free Tool — No Fluff
        </div>
        <h1 className="font-heading text-white text-4xl md:text-5xl font-bold leading-tight mb-5">
          Cost of Delegation<br />Reality Check
        </h1>
        <p className="font-body text-white/75 text-lg max-w-xl mx-auto mb-10">
          Map every task you spent time on last week, price it at your hourly rate, and see exactly what staying in the weeds is costing you — with a prioritized plan to fix it.
        </p>
        <button
          onClick={onStart}
          className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-hover text-navy font-body font-bold text-base rounded-full shadow-lg transition-all duration-200"
        >
          Start the Audit
          <ArrowRight size={18} />
        </button>
        <p className="font-body text-white/40 text-sm mt-4">Takes about 5 minutes. Results are immediate.</p>
      </div>
    </div>

    {/* What You'll Get */}
    <div className="max-w-4xl mx-auto mt-16 px-4">
      <div className="text-center mb-10">
        <p className="font-body text-gold font-bold tracking-widest uppercase text-xs mb-1">What You'll Get</p>
        <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold">Your personal delegation report</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {[
          {
            icon: Clock,
            title: 'Hours Audit',
            desc: 'See exactly how many hours per week you spend on tasks someone else could handle.',
          },
          {
            icon: DollarSign,
            title: 'Opportunity Cost',
            desc: 'Know the dollar value of every hour you stay stuck in low-leverage work.',
          },
          {
            icon: TrendingUp,
            title: 'Savings Estimate',
            desc: 'Compare your current cost to what offshore delegation actually runs per month.',
          },
          {
            icon: Users,
            title: 'Role Roadmap',
            desc: 'Get a specific list of roles to hire, ranked by the biggest impact first.',
          },
        ].map(({ icon: Icon, title, desc }) => (
          <div key={title} className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-navy/[0.07] flex items-center justify-center mb-4">
              <Icon size={18} className="text-navy" />
            </div>
            <h3 className="font-heading text-navy text-base font-bold mb-2">{title}</h3>
            <p className="font-body text-gray-500 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
        <button
          onClick={onStart}
          className="inline-flex items-center gap-2 px-8 py-4 bg-navy hover:bg-navy/90 text-white font-body font-bold text-base rounded-full shadow-lg transition-all duration-200"
        >
          Start the Audit
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  </div>
);

// ─── Step 1: About You ────────────────────────────────────────────────────────

const Step1About: React.FC<{
  form: FormData;
  onChange: (field: keyof FormData, value: string) => void;
  onNext: () => void;
}> = ({ form, onChange, onNext }) => {
  const canProceed = form.firstName.trim() !== '' && form.role !== '' && form.revenueRange !== '' && form.industry !== '';

  return (
    <div className="w-full max-w-xl mx-auto">
      <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold mb-2">Tell us a bit about you</h2>
      <p className="font-body text-gray-500 text-base mb-8">This helps us personalize your results.</p>

      <div className="space-y-5">
        <div>
          <label className="font-body text-sm font-semibold text-gray-700 block mb-1.5">First name</label>
          <input
            type="text"
            value={form.firstName}
            onChange={(e) => onChange('firstName', e.target.value)}
            placeholder="Jane"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
          />
        </div>

        <div>
          <label className="font-body text-sm font-semibold text-gray-700 block mb-1.5">Your role</label>
          <select
            value={form.role}
            onChange={(e) => onChange('role', e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all bg-white"
          >
            <option value="">Select your role</option>
            {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>

        <div>
          <label className="font-body text-sm font-semibold text-gray-700 block mb-1.5">Annual revenue</label>
          <select
            value={form.revenueRange}
            onChange={(e) => onChange('revenueRange', e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all bg-white"
          >
            <option value="">Select revenue range</option>
            {REVENUE_RANGES.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
        </div>

        <div>
          <label className="font-body text-sm font-semibold text-gray-700 block mb-1.5">Industry</label>
          <select
            value={form.industry}
            onChange={(e) => onChange('industry', e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all bg-white"
          >
            <option value="">Select your industry</option>
            {INDUSTRIES.map((i) => <option key={i} value={i}>{i}</option>)}
          </select>
        </div>
      </div>

      <button
        onClick={onNext}
        disabled={!canProceed}
        className="mt-8 w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold hover:bg-gold-hover disabled:opacity-40 disabled:cursor-not-allowed text-navy font-body font-bold text-base rounded-full shadow-md transition-all duration-200"
      >
        Next: Task Audit
        <ArrowRight size={18} />
      </button>
    </div>
  );
};

// ─── Step 2: Task Audit ───────────────────────────────────────────────────────

const Step2Tasks: React.FC<{
  selected: TaskSelection;
  onToggle: (id: string) => void;
  onAdjust: (id: string, delta: number) => void;
  onNext: () => void;
}> = ({ selected, onToggle, onAdjust, onNext }) => {
  const totalHours = Object.values(selected).reduce((s, h) => s + h, 0);
  const hasAny = Object.keys(selected).length > 0;

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Sticky running total */}
      <div className="sticky top-0 z-20 bg-white border-b border-gray-100 py-3 mb-6 -mx-4 px-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <span className="font-body text-sm font-semibold text-gray-600">Tasks selected: {Object.keys(selected).length}</span>
          <div className="flex items-center gap-2 bg-navy/[0.07] px-4 py-1.5 rounded-full">
            <Clock size={14} className="text-navy" />
            <span className="font-body text-sm font-bold text-navy">{totalHours.toFixed(1)}h logged</span>
          </div>
        </div>
      </div>

      <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold mb-2">What did you work on last week?</h2>
      <p className="font-body text-gray-500 text-base mb-8">Tap any task you handled. Then set how many hours it took.</p>

      {CATEGORIES.map((cat) => {
        const tasks = ALL_TASKS.filter((t) => t.category === cat);
        return (
          <div key={cat} className="mb-7">
            <div className="flex items-center gap-2 mb-3">
              <span className="font-body text-xs font-bold text-gold uppercase tracking-wider">{cat}</span>
              <div className="flex-1 h-px bg-gray-100" />
            </div>
            <div className="space-y-2">
              {tasks.map((task) => {
                const isSelected = task.id in selected;
                const hours = selected[task.id] ?? 1;
                return (
                  <div
                    key={task.id}
                    className={`rounded-xl border transition-all duration-150 ${
                      isSelected
                        ? 'border-gold bg-gold/[0.05]'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                  >
                    <div
                      className="flex items-center justify-between px-4 py-3 cursor-pointer"
                      onClick={() => onToggle(task.id)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-all ${
                          isSelected ? 'bg-gold border-gold' : 'border-gray-300'
                        }`}>
                          {isSelected && <Check size={11} className="text-navy" strokeWidth={3} />}
                        </div>
                        <span className={`font-body text-sm font-medium ${isSelected ? 'text-navy' : 'text-gray-600'}`}>
                          {task.name}
                        </span>
                      </div>
                      {isSelected && (
                        <span className="font-body text-xs font-bold text-gold ml-2 flex-shrink-0">{hours}h</span>
                      )}
                    </div>

                    {isSelected && (
                      <div className="flex items-center gap-3 px-4 pb-3" onClick={(e) => e.stopPropagation()}>
                        <span className="font-body text-xs text-gray-400">Hours per week:</span>
                        <div className="flex items-center gap-2 ml-auto">
                          <button
                            onClick={() => onAdjust(task.id, -0.5)}
                            disabled={hours <= 0.5}
                            className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-30 flex items-center justify-center font-body font-bold text-gray-600 text-sm transition-all"
                          >
                            −
                          </button>
                          <span className="font-body text-sm font-bold text-navy w-10 text-center">{hours}h</span>
                          <button
                            onClick={() => onAdjust(task.id, 0.5)}
                            disabled={hours >= 40}
                            className="w-7 h-7 rounded-full bg-gray-100 hover:bg-gray-200 disabled:opacity-30 flex items-center justify-center font-body font-bold text-gray-600 text-sm transition-all"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}

      <button
        onClick={onNext}
        disabled={!hasAny}
        className="mt-4 w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold hover:bg-gold-hover disabled:opacity-40 disabled:cursor-not-allowed text-navy font-body font-bold text-base rounded-full shadow-md transition-all duration-200"
      >
        Next: Your Hourly Rate
        <ArrowRight size={18} />
      </button>
    </div>
  );
};

// ─── Step 3: Hourly Value ─────────────────────────────────────────────────────

const Step3HourlyRate: React.FC<{
  hourlyRate: number;
  onRateChange: (r: number) => void;
  onNext: () => void;
}> = ({ hourlyRate, onRateChange, onNext }) => {
  const annualAtRate = hourlyRate * 2000;

  return (
    <div className="w-full max-w-xl mx-auto">
      <h2 className="font-heading text-navy text-2xl md:text-3xl font-bold mb-2">What's your time worth?</h2>
      <p className="font-body text-gray-500 text-base mb-8">
        We pre-filled this from your revenue range. Adjust if it doesn't feel right — this drives all the math.
      </p>

      <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm mb-6">
        <label className="font-body text-sm font-semibold text-gray-700 block mb-1.5">Your effective hourly rate</label>
        <div className="flex items-center gap-2 mb-2">
          <span className="font-heading text-navy text-2xl font-bold">$</span>
          <input
            type="number"
            value={hourlyRate}
            min={25}
            max={5000}
            step={25}
            onChange={(e) => onRateChange(Number(e.target.value))}
            className="flex-1 px-4 py-3 border border-gray-200 rounded-xl font-heading text-2xl font-bold text-navy focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
          />
          <span className="font-body text-gray-400 text-sm">/hr</span>
        </div>
        <p className="font-body text-gray-400 text-sm">
          = {fmt(annualAtRate)}/year at 2,000 working hours
        </p>
      </div>

      <div className="bg-navy/[0.04] rounded-xl p-4 mb-8">
        <p className="font-body text-sm text-gray-500 leading-relaxed">
          <strong className="text-navy">Why this matters:</strong> When you spend an hour on low-value tasks, it doesn't cost you nothing. It costs you whatever else you could have been doing. This number makes that real.
        </p>
      </div>

      <button
        onClick={onNext}
        disabled={hourlyRate < 1}
        className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold hover:bg-gold-hover disabled:opacity-40 disabled:cursor-not-allowed text-navy font-body font-bold text-base rounded-full shadow-md transition-all duration-200"
      >
        Next: See Your Numbers
        <ArrowRight size={18} />
      </button>
    </div>
  );
};

// ─── Step 4: Email Gate ───────────────────────────────────────────────────────

const Step4EmailGate: React.FC<{
  form: FormData;
  onChange: (field: keyof FormData, value: string) => void;
  delegatableHours: number;
  weeklyOpCost: number;
  annualOpCost: number;
  onSubmit: () => void;
  submitting: boolean;
}> = ({ form, onChange, delegatableHours, weeklyOpCost, annualOpCost, onSubmit, submitting }) => {
  const canSubmit = form.email.trim() !== '' && form.company.trim() !== '';

  return (
    <div className="w-full max-w-xl mx-auto">
      {/* Teaser card */}
      <div className="bg-navy rounded-2xl p-6 mb-8 shadow-xl">
        <p className="font-body text-gold text-xs font-bold uppercase tracking-widest mb-3">Your audit preview</p>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <p className="font-heading text-white text-2xl font-bold">{delegatableHours.toFixed(1)}h</p>
            <p className="font-body text-white/60 text-xs mt-0.5">per week</p>
          </div>
          <div>
            <p className="font-heading text-gold text-2xl font-bold">{fmt(weeklyOpCost)}</p>
            <p className="font-body text-white/60 text-xs mt-0.5">weekly cost</p>
          </div>
          <div>
            <p className="font-heading text-gold text-2xl font-bold">{fmt(annualOpCost)}</p>
            <p className="font-body text-white/60 text-xs mt-0.5">annual cost</p>
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-white/[0.08]">
          <p className="font-body text-white/60 text-sm">
            Enter your email to unlock the full breakdown — including your offshore savings estimate and delegation roadmap.
          </p>
        </div>
      </div>

      <h2 className="font-heading text-navy text-2xl font-bold mb-1">Where should we send your results?</h2>
      <p className="font-body text-gray-500 text-sm mb-6">No spam. Just your audit — and occasionally useful delegation content.</p>

      <div className="space-y-4">
        <div>
          <label className="font-body text-sm font-semibold text-gray-700 block mb-1.5">Email address <span className="text-gold">*</span></label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => onChange('email', e.target.value)}
            placeholder="you@company.com"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
          />
        </div>
        <div>
          <label className="font-body text-sm font-semibold text-gray-700 block mb-1.5">Company name <span className="text-gold">*</span></label>
          <input
            type="text"
            value={form.company}
            onChange={(e) => onChange('company', e.target.value)}
            placeholder="Acme Inc."
            className="w-full px-4 py-3 border border-gray-200 rounded-xl font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
          />
        </div>
        <div>
          <label className="font-body text-sm font-semibold text-gray-700 block mb-1.5">Phone <span className="font-body text-gray-400 font-normal">(optional)</span></label>
          <input
            type="tel"
            value={form.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            placeholder="+1 (555) 000-0000"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-all"
          />
        </div>
      </div>

      <button
        onClick={onSubmit}
        disabled={!canSubmit || submitting}
        className="mt-6 w-full inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold hover:bg-gold-hover disabled:opacity-40 disabled:cursor-not-allowed text-navy font-body font-bold text-base rounded-full shadow-md transition-all duration-200"
      >
        {submitting ? 'Unlocking...' : 'Unlock My Full Results'}
        {!submitting && <ArrowRight size={18} />}
      </button>

      <p className="font-body text-gray-400 text-xs text-center mt-3">We never sell your data. Unsubscribe any time.</p>
    </div>
  );
};

// ─── Step 5: Results Dashboard ────────────────────────────────────────────────

interface ResultsProps {
  selected: TaskSelection;
  hourlyRate: number;
  form: FormData;
}

const Step5Results: React.FC<ResultsProps> = ({ selected, hourlyRate, form }) => {
  // Calculations
  const delegatableTasks = Object.entries(selected).map(([id, hours]) => {
    const task = ALL_TASKS.find((t) => t.id === id)!;
    return { ...task, hours, oppCost: hours * hourlyRate, offshoreCost: hours * OFFSHORE_RATE };
  });

  const delegatableHours = delegatableTasks.reduce((s, t) => s + t.hours, 0);
  const totalTasks = delegatableTasks.length;

  const categoryCounts: Record<string, number> = {};
  delegatableTasks.forEach((t) => {
    categoryCounts[t.category] = (categoryCounts[t.category] ?? 0) + t.hours;
  });
  const uniqueCategories = Object.keys(categoryCounts).length;

  const weeklyOpCost = delegatableHours * hourlyRate;
  const annualOpCost = weeklyOpCost * 52;
  const weeklyOffshoreCost = delegatableHours * OFFSHORE_RATE;
  const annualOffshoreCost = weeklyOffshoreCost * 52;
  const annualSavings = annualOpCost - annualOffshoreCost;

  // Sorted by opp cost desc
  const sortedByOppCost = [...delegatableTasks].sort((a, b) => b.oppCost - a.oppCost);

  // Top 3 categories by hours
  const topCategories = (Object.entries(categoryCounts) as [Category, number][])
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  const maxHours = Math.max(...Object.values(categoryCounts), 1);

  // Domestic comparison — total weekly domestic cost
  const weeklyDomesticCost = delegatableTasks.reduce((s, t) => {
    const rate = DOMESTIC_RATES[t.category] ?? 20;
    return s + t.hours * rate;
  }, 0);
  const annualDomesticCost = weeklyDomesticCost * 52;

  return (
    <div className="w-full max-w-3xl mx-auto space-y-10">
      {/* Header */}
      <div className="text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/20 border border-gold/30 text-gold font-body text-sm font-semibold mb-4">
          <Check size={14} />
          Audit Complete
        </div>
        <h2 className="font-heading text-navy text-3xl md:text-4xl font-bold mb-3">
          {form.firstName ? `${form.firstName}'s` : 'Your'} Delegation Report
        </h2>
        <p className="font-body text-gray-500 text-base">Here's where your time is going — and what it's costing you.</p>
      </div>

      {/* Section A: Summary Stats + Category Bar Chart */}
      <div>
        <p className="font-body text-gold text-xs font-bold uppercase tracking-widest mb-4">A — Time Breakdown</p>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm text-center">
            <p className="font-heading text-navy text-3xl font-bold">{delegatableHours.toFixed(1)}</p>
            <p className="font-body text-gray-400 text-xs mt-1">Total Hours / Week</p>
          </div>
          <div className="bg-navy rounded-xl p-4 shadow-sm text-center">
            <p className="font-heading text-gold text-3xl font-bold">{delegatableHours.toFixed(1)}</p>
            <p className="font-body text-white/60 text-xs mt-1">Delegatable Hours</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm text-center">
            <p className="font-heading text-navy text-3xl font-bold">{totalTasks}</p>
            <p className="font-body text-gray-400 text-xs mt-1">Tasks Logged</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm text-center">
            <p className="font-heading text-navy text-3xl font-bold">{uniqueCategories}</p>
            <p className="font-body text-gray-400 text-xs mt-1">Categories</p>
          </div>
        </div>

        {/* Horizontal bar chart by category */}
        <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm space-y-3">
          <p className="font-body text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Hours by category</p>
          {(Object.entries(categoryCounts) as [string, number][])
            .sort((a, b) => b[1] - a[1])
            .map(([cat, hrs]) => (
              <div key={cat} className="flex items-center gap-3">
                <span className="font-body text-xs text-gray-500 w-32 flex-shrink-0 truncate">{cat}</span>
                <div className="flex-1 h-4 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gold rounded-full transition-all duration-700"
                    style={{ width: `${(hrs / maxHours) * 100}%` }}
                  />
                </div>
                <span className="font-body text-xs font-bold text-navy w-10 text-right">{hrs}h</span>
              </div>
            ))}
        </div>
      </div>

      {/* Section B: Opportunity Cost Table */}
      <div>
        <p className="font-body text-gold text-xs font-bold uppercase tracking-widest mb-4">B — Opportunity Cost by Task</p>
        <div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-navy/[0.04]">
                  <th className="font-body text-xs font-bold text-gray-500 uppercase tracking-wider text-left px-4 py-3">Task</th>
                  <th className="font-body text-xs font-bold text-gray-500 uppercase tracking-wider text-right px-4 py-3">Hrs/wk</th>
                  <th className="font-body text-xs font-bold text-gray-500 uppercase tracking-wider text-right px-4 py-3">Opp Cost/wk</th>
                  <th className="font-body text-xs font-bold text-gray-500 uppercase tracking-wider text-right px-4 py-3">Opp Cost/yr</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {sortedByOppCost.map((task) => (
                  <tr key={task.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-4 py-3">
                      <p className="font-body text-navy text-sm font-medium">{task.name}</p>
                      <p className="font-body text-gray-400 text-xs">{task.category}</p>
                    </td>
                    <td className="px-4 py-3 font-body text-sm text-gray-600 text-right">{task.hours}h</td>
                    <td className="px-4 py-3 font-body text-sm font-semibold text-navy text-right">{fmt(task.oppCost)}</td>
                    <td className="px-4 py-3 font-body text-sm font-bold text-navy text-right">{fmt(task.oppCost * 52)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gold/[0.08] border-t-2 border-gold/30">
                  <td className="px-4 py-3 font-body text-sm font-bold text-navy">Total</td>
                  <td className="px-4 py-3 font-body text-sm font-bold text-navy text-right">{delegatableHours.toFixed(1)}h</td>
                  <td className="px-4 py-3 font-body text-sm font-bold text-gold text-right">{fmt(weeklyOpCost)}</td>
                  <td className="px-4 py-3 font-body text-base font-bold text-gold text-right">{fmt(annualOpCost)}</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </div>

      {/* Section C: Offshore Cost Comparison */}
      <div>
        <p className="font-body text-gold text-xs font-bold uppercase tracking-widest mb-4">C — What Delegation Actually Costs</p>
        <div className="grid md:grid-cols-3 gap-4 mb-5">
          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm text-center">
            <p className="font-heading text-navy text-2xl font-bold">{fmt(weeklyOffshoreCost)}</p>
            <p className="font-body text-gray-400 text-sm mt-1">Weekly offshore cost</p>
            <p className="font-body text-gray-300 text-xs mt-1">(at $8/hr)</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm text-center">
            <p className="font-heading text-navy text-2xl font-bold">{fmt(annualOffshoreCost)}</p>
            <p className="font-body text-gray-400 text-sm mt-1">Annual offshore cost</p>
          </div>
          <div className="bg-gold rounded-xl p-5 shadow-md text-center">
            <p className="font-heading text-navy text-2xl font-bold">{fmt(annualSavings)}</p>
            <p className="font-body text-navy/70 text-sm mt-1">Annual savings vs. doing it yourself</p>
          </div>
        </div>

        {/* Domestic comparison callout */}
        <div className="bg-navy/[0.04] border border-navy/[0.07] rounded-xl p-5">
          <p className="font-body text-xs font-bold text-navy uppercase tracking-wider mb-2">vs. Hiring Domestically</p>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-body text-sm text-gray-500">Domestic weekly cost (avg local rates)</p>
              <p className="font-body text-sm text-gray-500">Offshore weekly cost</p>
              <p className="font-body text-sm font-bold text-navy mt-2">Weekly difference</p>
            </div>
            <div className="text-right">
              <p className="font-body text-sm font-semibold text-navy">{fmt(weeklyDomesticCost)}</p>
              <p className="font-body text-sm font-semibold text-navy">{fmt(weeklyOffshoreCost)}</p>
              <p className="font-body text-sm font-bold text-gold mt-2">{fmt(weeklyDomesticCost - weeklyOffshoreCost)} saved</p>
            </div>
          </div>
          <p className="font-body text-xs text-gray-400 mt-3">
            That's {fmt((weeklyDomesticCost - weeklyOffshoreCost) * 52)} in annual labor savings vs. domestic hires.
          </p>
        </div>
      </div>

      {/* Section D: Delegation Priority List */}
      <div>
        <p className="font-body text-gold text-xs font-bold uppercase tracking-widest mb-4">D — Delegation Priority List</p>
        <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm space-y-3">
          {sortedByOppCost.map((task, i) => {
            const isNow = task.hours >= 3;
            return (
              <div key={task.id} className="flex items-center justify-between gap-3 py-2 border-b border-gray-50 last:border-0">
                <div className="flex items-center gap-3">
                  <span className="font-body text-xs text-gray-300 font-bold w-5 text-center">{i + 1}</span>
                  <div>
                    <p className="font-body text-sm font-medium text-navy">{task.name}</p>
                    <p className="font-body text-xs text-gray-400">{fmt(task.oppCost * 52)}/yr opportunity cost</p>
                  </div>
                </div>
                <span className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-body font-bold ${
                  isNow ? 'bg-gold text-navy' : 'bg-gray-100 text-gray-500'
                }`}>
                  {isNow ? 'Delegate Now' : 'Delegate Next'}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Section E: Role Map + CTA */}
      <div>
        <p className="font-body text-gold text-xs font-bold uppercase tracking-widest mb-4">E — Your Role Roadmap</p>
        <div className="space-y-3 mb-6">
          {topCategories.map(([cat, hrs]) => {
            const role = ROLE_MAP[cat] ?? 'Virtual Assistant';
            const monthlyOffshoreCost = hrs * OFFSHORE_RATE * 4.33;
            return (
              <div key={cat} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-navy/[0.07] flex items-center justify-center flex-shrink-0">
                    <Users size={15} className="text-navy" />
                  </div>
                  <div>
                    <p className="font-body text-sm font-bold text-navy">{role}</p>
                    <p className="font-body text-xs text-gray-400">{cat} · {hrs.toFixed(1)}h/wk</p>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="font-body text-sm font-bold text-navy">{fmt(monthlyOffshoreCost)}<span className="text-xs font-normal text-gray-400">/mo</span></p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Summary navy card */}
        <div className="bg-navy rounded-2xl p-6 shadow-xl mb-8">
          <p className="font-body text-gold text-xs font-bold uppercase tracking-widest mb-4">Total offshore investment</p>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <p className="font-heading text-white text-2xl font-bold">{fmt(weeklyOffshoreCost * 4.33)}</p>
              <p className="font-body text-white/60 text-xs mt-0.5">per month</p>
            </div>
            <div>
              <p className="font-heading text-white text-2xl font-bold">{fmt(annualOffshoreCost)}</p>
              <p className="font-body text-white/60 text-xs mt-0.5">per year</p>
            </div>
            <div>
              <p className="font-heading text-gold text-2xl font-bold">{fmt(annualSavings)}</p>
              <p className="font-body text-white/60 text-xs mt-0.5">net savings</p>
            </div>
          </div>
          <div className="pt-4 border-t border-white/[0.08]">
            <p className="font-body text-white/60 text-sm">
              Based on {delegatableHours.toFixed(1)} delegatable hours/week at $8/hr offshore, vs. {fmt(hourlyRate)}/hr of your time.
            </p>
          </div>
        </div>

        {/* CTA card */}
        <div className="bg-navy rounded-2xl p-8 shadow-xl text-center">
          <p className="font-body text-gold text-xs font-bold uppercase tracking-widest mb-3">Ready to act on this?</p>
          <h3 className="font-heading text-white text-2xl md:text-3xl font-bold mb-3">
            Your audit shows you could save {fmt(annualSavings)}/year
          </h3>
          <p className="font-body text-white/70 text-base mb-6 max-w-lg mx-auto">
            We'll show you exactly which role to hire first, what to pay, and how to get them up to speed in under 2 weeks. No commitment required.
          </p>
          <a
            href="/booking"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold hover:bg-gold-hover text-navy font-body font-bold text-base rounded-full shadow-lg transition-all duration-200"
          >
            Book a Free Strategy Call
            <ChevronRight size={18} />
          </a>
          <p className="font-body text-white/40 text-xs mt-4">Free call. No obligation. 30 minutes max.</p>
        </div>
      </div>
    </div>
  );
};

// ─── Main Component ───────────────────────────────────────────────────────────

const FreeStuffDelegationAudit: React.FC = () => {
  const [step, setStep] = useState<number>(0);
  const [form, setForm] = useState<FormData>({
    firstName: '',
    role: '',
    revenueRange: '',
    industry: '',
    email: '',
    company: '',
    phone: '',
  });
  const [selected, setSelected] = useState<TaskSelection>({});
  const [hourlyRate, setHourlyRate] = useState<number>(150);
  const [submitting, setSubmitting] = useState<boolean>(false);

  const handleFormChange = (field: keyof FormData, value: string) => {
    setForm((prev) => {
      const next = { ...prev, [field]: value };
      // Update hourly rate when revenue range changes
      if (field === 'revenueRange' && REVENUE_TO_RATE[value]) {
        setHourlyRate(REVENUE_TO_RATE[value]);
      }
      return next;
    });
  };

  const handleToggleTask = (id: string) => {
    setSelected((prev) => {
      if (id in prev) {
        const next = { ...prev };
        delete next[id];
        return next;
      }
      return { ...prev, [id]: 1 };
    });
  };

  const handleAdjustHours = (id: string, delta: number) => {
    setSelected((prev) => {
      const current = prev[id] ?? 1;
      const next = Math.round((current + delta) * 2) / 2;
      if (next < 0.5 || next > 40) return prev;
      return { ...prev, [id]: next };
    });
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const goNext = () => {
    setStep((s) => s + 1);
    scrollTop();
  };

  // Derived values for email gate and webhook
  const delegatableHours = Object.values(selected).reduce((s, h) => s + h, 0);
  const weeklyOpCost = delegatableHours * hourlyRate;
  const annualOpCost = weeklyOpCost * 52;
  const weeklyOffshoreCost = delegatableHours * OFFSHORE_RATE;
  const annualOffshoreCost = weeklyOffshoreCost * 52;
  const annualSavings = annualOpCost - annualOffshoreCost;

  const top3Tasks = Object.entries(selected)
    .map(([id, hours]) => {
      const task = ALL_TASKS.find((t) => t.id === id);
      return { name: task?.name ?? id, oppCost: hours * hourlyRate };
    })
    .sort((a, b) => b.oppCost - a.oppCost)
    .slice(0, 3)
    .map((t) => t.name);

  const categoryCounts: Record<string, number> = {};
  Object.entries(selected).forEach(([id, hours]) => {
    const task = ALL_TASKS.find((t) => t.id === id);
    if (task) categoryCounts[task.category] = (categoryCounts[task.category] ?? 0) + hours;
  });
  const suggestedRoles = (Object.entries(categoryCounts) as [Category, number][])
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3)
    .map(([cat]) => ROLE_MAP[cat] ?? 'Virtual Assistant');

  const handleEmailSubmit = async () => {
    setSubmitting(true);
    try {
      await fetch(
        'https://services.leadconnectorhq.com/hooks/REPLACE_WITH_AUDIT_WEBHOOK_ID/webhook-trigger/REPLACE_WITH_TRIGGER_ID',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            firstName: form.firstName,
            email: form.email,
            phone: form.phone,
            company: form.company,
            role: form.role,
            industry: form.industry,
            revenueRange: form.revenueRange,
            hourlyRate,
            totalDelegatableHours: delegatableHours,
            weeklyOpportunityCost: weeklyOpCost,
            annualOpportunityCost: annualOpCost,
            annualOffshoreSavings: annualSavings,
            top3Tasks,
            suggestedRoles,
            source: 'Delegation Audit',
            contactType: 'AuditLead',
          }),
        }
      );
    } catch {
      // Silent fail — unlock results regardless
    } finally {
      setSubmitting(false);
      setStep(5);
      scrollTop();
    }
  };

  const showProgress = step >= 1 && step <= 4;

  return (
    <>
      <SEO
        title="Cost of Delegation Reality Check | Five Star Assistants"
        description="Map every task you spent time on last week, price it at your hourly rate, and see exactly what staying in the weeds is costing you — with a prioritized roadmap to fix it."
        keywords="delegation audit, opportunity cost calculator, virtual assistant ROI, delegation cost analysis"
        canonical="https://www.fivestarassistants.com/free-stuff/delegation-audit"
      />
      <Navbar alwaysWhite />

      <div className="w-full bg-white min-h-screen">
        <div className={`${step === 0 ? '' : 'pt-28 pb-24 px-4'}`}>
          {step > 0 && (
            <div className="max-w-2xl mx-auto">
              {showProgress && <ProgressBar step={step} />}
            </div>
          )}

          <div className={step === 0 ? '' : 'max-w-4xl mx-auto'}>
            {step === 0 && (
              <Step0Landing onStart={goNext} />
            )}
            {step === 1 && (
              <Step1About form={form} onChange={handleFormChange} onNext={goNext} />
            )}
            {step === 2 && (
              <Step2Tasks
                selected={selected}
                onToggle={handleToggleTask}
                onAdjust={handleAdjustHours}
                onNext={goNext}
              />
            )}
            {step === 3 && (
              <Step3HourlyRate
                hourlyRate={hourlyRate}
                onRateChange={setHourlyRate}
                onNext={goNext}
              />
            )}
            {step === 4 && (
              <Step4EmailGate
                form={form}
                onChange={handleFormChange}
                delegatableHours={delegatableHours}
                weeklyOpCost={weeklyOpCost}
                annualOpCost={annualOpCost}
                onSubmit={handleEmailSubmit}
                submitting={submitting}
              />
            )}
            {step === 5 && (
              <Step5Results
                selected={selected}
                hourlyRate={hourlyRate}
                form={form}
              />
            )}
          </div>
        </div>
      </div>

      {step !== 0 && <Footer />}
    </>
  );
};

export default FreeStuffDelegationAudit;
