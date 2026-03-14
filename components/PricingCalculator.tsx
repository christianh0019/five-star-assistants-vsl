import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

// ─── Pricing Data ─────────────────────────────────────────────────────────────
// Rates are [min, max] hourly in USD

const pricingData = {
  'Administration & Virtual Assistants': {
    'General Virtual Assistant':       { entry: [6, 8],  mid: [8, 11],  senior: [11, 14] },
    'Executive Assistant':             { entry: [7, 9],  mid: [9, 12],  senior: [12, 15] },
    'Administrative Coordinator':      { entry: [6, 8],  mid: [8, 11],  senior: [11, 14] },
    'Data Entry Specialist':           { entry: [6, 7],  mid: [7, 9],   senior: [9, 12]  },
    'Calendar & Email Manager':        { entry: [6, 8],  mid: [8, 10],  senior: [10, 13] },
  },
  'Customer Support': {
    'Customer Service Representative': { entry: [6, 8],  mid: [8, 10],  senior: [10, 13] },
    'Live Chat Agent':                 { entry: [6, 8],  mid: [8, 10],  senior: [10, 12] },
    'Technical Support Agent':         { entry: [7, 9],  mid: [9, 12],  senior: [12, 15] },
    'Help Desk Specialist':            { entry: [7, 9],  mid: [9, 11],  senior: [11, 14] },
    'Customer Success Manager':        { entry: [8, 10], mid: [10, 13], senior: [13, 15] },
  },
  'Sales & Lead Generation': {
    'Sales Development Rep (SDR)':     { entry: [7, 9],  mid: [9, 12],  senior: [12, 15] },
    'Lead Generation Specialist':      { entry: [6, 8],  mid: [8, 11],  senior: [11, 14] },
    'Appointment Setter':              { entry: [6, 8],  mid: [8, 10],  senior: [10, 13] },
    'CRM Manager':                     { entry: [7, 9],  mid: [9, 12],  senior: [12, 15] },
    'Cold Outreach Specialist':        { entry: [6, 8],  mid: [8, 10],  senior: [10, 13] },
  },
  'Marketing & Content': {
    'Social Media Manager':            { entry: [7, 9],  mid: [9, 12],  senior: [12, 15] },
    'Content Writer':                  { entry: [6, 8],  mid: [8, 11],  senior: [11, 14] },
    'Graphic Designer':                { entry: [7, 9],  mid: [9, 12],  senior: [12, 15] },
    'Email Marketing Specialist':      { entry: [7, 9],  mid: [9, 12],  senior: [12, 15] },
    'SEO Specialist':                  { entry: [7, 9],  mid: [9, 12],  senior: [12, 15] },
  },
  'Finance & Accounting': {
    'Bookkeeper':                      { entry: [7, 9],  mid: [9, 12],  senior: [12, 15] },
    'Accounts Payable / Receivable':   { entry: [6, 8],  mid: [8, 11],  senior: [11, 14] },
    'Payroll Specialist':              { entry: [7, 9],  mid: [9, 12],  senior: [12, 15] },
    'Financial Analyst':               { entry: [8, 10], mid: [10, 13], senior: [13, 15] },
  },
  'Operations & Project Management': {
    'Project Coordinator':             { entry: [7, 9],  mid: [9, 12],  senior: [12, 15] },
    'Operations Manager':              { entry: [8, 10], mid: [10, 13], senior: [13, 15] },
    'Process Improvement Specialist':  { entry: [7, 9],  mid: [9, 12],  senior: [12, 15] },
    'Quality Assurance Analyst':       { entry: [7, 9],  mid: [9, 11],  senior: [11, 14] },
  },
};

type CategoryKey = keyof typeof pricingData;
type ExperienceLevel = 'entry' | 'mid' | 'senior';
type Schedule = 'fulltime' | 'parttime';
type Phase = 1 | 2 | 3;

const experienceOptions: { value: ExperienceLevel; label: string; sub: string }[] = [
  { value: 'entry',  label: 'Entry',  sub: '1–2 years' },
  { value: 'mid',    label: 'Mid',    sub: '2–5 years' },
  { value: 'senior', label: 'Senior', sub: '5+ years'  },
];

const scheduleOptions: { value: Schedule; label: string }[] = [
  { value: 'fulltime', label: 'Full Time' },
  { value: 'parttime', label: 'Part Time' },
];

// ─── Component ────────────────────────────────────────────────────────────────

const PricingCalculator: React.FC = () => {
  const navigate = useNavigate();

  // Phase 1 state
  const [phase, setPhase]           = useState<Phase>(1);
  const [category, setCategory]     = useState<CategoryKey | ''>('');
  const [role, setRole]             = useState('');
  const [experience, setExperience] = useState<ExperienceLevel>('entry');
  const [schedule, setSchedule]     = useState<Schedule>('fulltime');

  // Phase 2 state
  const [name, setName]       = useState('');
  const [email, setEmail]     = useState('');
  const [phone, setPhone]     = useState('');
  const [company, setCompany] = useState('');
  const [error, setError]     = useState('');
  const [submitting, setSubmitting] = useState(false);

  const categories = Object.keys(pricingData) as CategoryKey[];
  const roles = category ? Object.keys(pricingData[category]) : [];

  const getRate = (): [number, number] | null => {
    if (!category || !role) return null;
    const categoryData = pricingData[category];
    const roleData = categoryData[role as keyof typeof categoryData];
    return roleData ? roleData[experience] as [number, number] : null;
  };
  const rate = getRate();
  const canProceed = Boolean(category && role);

  const handleGetRate = () => {
    if (canProceed) setPhase(2);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim() || !company.trim()) {
      setError('Please fill in all fields.');
      return;
    }
    setError('');
    setSubmitting(true);

    try {
      const webhookUrl = (import.meta as { env: Record<string, string> }).env.VITE_CALCULATOR_WEBHOOK_URL;
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name, email, phone, company, role, category,
            experience, schedule,
            estimated_rate: rate ? `$${rate[0]}–$${rate[1]}/hr` : 'N/A',
            source: 'Pricing Calculator',
          }),
        });
      }
    } catch {
      // Don't block on webhook failure
    }

    setSubmitting(false);
    setPhase(3);
  };

  const reset = () => {
    setPhase(1);
    setCategory('');
    setRole('');
    setExperience('entry');
    setSchedule('fulltime');
    setName(''); setEmail(''); setPhone(''); setCompany('');
    setError('');
  };

  const experienceLabel =
    experience === 'entry' ? 'Entry (1–2 years)' :
    experience === 'mid'   ? 'Mid (2–5 years)'   :
                             'Senior (5+ years)';

  // ── Shared input class
  const inputClass =
    'w-full bg-gray-50 border-2 border-gray-200 text-navy font-body text-lg rounded-xl px-5 py-4 focus:outline-none focus:border-gold transition-colors placeholder:text-gray-400';

  return (
    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
      <div className="max-w-3xl mx-auto">

        <ScrollReveal>
          <div className="text-center mb-14">
            <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
              INSTANT ESTIMATE
            </h3>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-5">
              What Will Your Role Cost?
            </h2>
            <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto">
              Select a category, role, and experience level to get an instant starting rate.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 overflow-hidden">

            {/* ── PHASE 1: Role Selection ───────────────────────────────── */}
            {phase === 1 && (
              <div className="p-8 md:p-12">

                {/* Category */}
                <div className="mb-7">
                  <label className="block font-heading font-bold text-navy text-xs tracking-widest uppercase mb-3">
                    Category
                  </label>
                  <div className="relative">
                    <select
                      value={category}
                      onChange={(e) => { setCategory(e.target.value as CategoryKey); setRole(''); }}
                      className={`${inputClass} appearance-none cursor-pointer pr-12`}
                    >
                      <option value="">— Select a Category —</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                  </div>
                </div>

                {/* Role */}
                <div className="mb-7">
                  <label className="block font-heading font-bold text-navy text-xs tracking-widest uppercase mb-3">
                    Role
                  </label>
                  <div className="relative">
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      disabled={!category}
                      className={`${inputClass} appearance-none pr-12 ${
                        category ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'
                      }`}
                    >
                      <option value="">— Select a Role —</option>
                      {roles.map(r => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                  </div>
                </div>

                {/* Experience Level */}
                <div className="mb-7">
                  <label className="block font-heading font-bold text-navy text-xs tracking-widest uppercase mb-4">
                    Experience Level
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {experienceOptions.map(({ value, label, sub }) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setExperience(value)}
                        className={`p-4 rounded-xl border-2 text-center transition-all duration-200 ${
                          experience === value
                            ? 'border-gold bg-gold/5 shadow-md'
                            : 'border-gray-200 bg-gray-50 hover:border-gold/40'
                        }`}
                      >
                        <div className={`font-heading font-bold text-lg leading-none mb-1 ${
                          experience === value ? 'text-navy' : 'text-gray-700'
                        }`}>
                          {label}
                        </div>
                        <div className="font-body text-sm text-gray-500">{sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Schedule */}
                <div className="mb-10">
                  <label className="block font-heading font-bold text-navy text-xs tracking-widest uppercase mb-4">
                    Schedule
                  </label>
                  <div className="inline-flex bg-gray-100 rounded-xl p-1">
                    {scheduleOptions.map(({ value, label }) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setSchedule(value)}
                        className={`px-8 py-3 rounded-lg font-heading font-bold text-base transition-all duration-200 ${
                          schedule === value
                            ? 'bg-navy text-white shadow-md'
                            : 'text-gray-500 hover:text-navy'
                        }`}
                      >
                        {label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button
                  type="button"
                  onClick={handleGetRate}
                  disabled={!canProceed}
                  className={`w-full py-5 rounded-xl font-heading font-bold text-xl uppercase tracking-wide transition-all duration-300 ${
                    canProceed
                      ? 'bg-gold hover:bg-gold-hover text-navy shadow-xl hover:shadow-2xl hover:-translate-y-0.5'
                      : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Get My Rate Estimate
                </button>
              </div>
            )}

            {/* ── PHASE 2: Contact Form ─────────────────────────────────── */}
            {phase === 2 && (
              <div className="p-8 md:p-12">

                <div className="mb-8">
                  <h3 className="font-heading text-2xl font-bold text-navy mb-2">
                    Where Should We Send Your Estimate?
                  </h3>
                  <p className="font-body text-gray-500 text-base">
                    Your estimate is ready for a{' '}
                    <span className="text-navy font-semibold">{role}</span>. Enter your details to reveal it.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-heading font-bold text-navy text-xs tracking-widest uppercase mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="John Smith"
                        className={inputClass}
                        autoComplete="name"
                      />
                    </div>
                    <div>
                      <label className="block font-heading font-bold text-navy text-xs tracking-widest uppercase mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder="Acme Corp"
                        className={inputClass}
                        autoComplete="organization"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-heading font-bold text-navy text-xs tracking-widest uppercase mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@company.com"
                        className={inputClass}
                        autoComplete="email"
                      />
                    </div>
                    <div>
                      <label className="block font-heading font-bold text-navy text-xs tracking-widest uppercase mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className={inputClass}
                        autoComplete="tel"
                      />
                    </div>
                  </div>

                  {error && (
                    <p className="text-red-500 font-body text-sm font-medium">{error}</p>
                  )}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-5 rounded-xl font-heading font-bold text-xl uppercase tracking-wide bg-gold hover:bg-gold-hover text-navy shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? 'Loading...' : 'See My Rate Estimate →'}
                    </button>
                  </div>

                  <p className="text-center font-body text-sm text-gray-400">
                    No spam. No sales pressure. Just your estimate.
                  </p>
                </form>

                <button
                  type="button"
                  onClick={() => setPhase(1)}
                  className="mt-6 text-sm font-body text-gray-400 hover:text-navy underline transition-colors"
                >
                  ← Back
                </button>
              </div>
            )}

            {/* ── PHASE 3: Rate Reveal ──────────────────────────────────── */}
            {phase === 3 && rate && (
              <div className="p-8 md:p-12">

                {/* Rate card */}
                <div className="bg-navy rounded-[1.5rem] p-8 md:p-12 relative overflow-hidden mb-8">
                  <div className="absolute top-0 right-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />
                  <div className="relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-body text-sm font-semibold mb-5">
                      <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                      Estimated Hourly Rate
                    </div>
                    <p className="font-heading text-lg text-gray-300 mb-2">{role}</p>
                    <p className="font-body text-sm text-gray-500 mb-6">
                      {experienceLabel} · {schedule === 'fulltime' ? 'Full Time' : 'Part Time'}
                    </p>
                    <div className="mb-3">
                      <span className="font-heading font-bold text-white leading-none">
                        <span className="text-6xl md:text-7xl">${rate[0]}–${rate[1]}</span>
                        <span className="text-3xl text-gray-400"> /hr</span>
                      </span>
                    </div>
                    <p className="font-body text-gray-400 text-sm">
                      Starting rate · Subject to final candidate assessment
                    </p>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="grid md:grid-cols-3 gap-3 mb-8">
                  {[
                    'No placement fees to get started',
                    'Candidates ready within 4 days',
                    'Cancel anytime — no contracts',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <Check className="text-gold flex-shrink-0" size={18} strokeWidth={3} />
                      <span className="font-body text-navy font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                  <p className="font-body text-gray-600 mb-5 text-lg">
                    Ready to hire a <span className="font-bold text-navy">{role}</span>? Let's find your candidate.
                  </p>
                  <button
                    type="button"
                    onClick={() => navigate('/booking')}
                    className="w-full sm:w-auto min-w-[300px] py-5 px-10 rounded-xl font-heading font-bold text-xl uppercase tracking-wide bg-gold hover:bg-gold-hover text-navy shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Book a Free Discovery Call
                  </button>
                  <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>

                  <button
                    type="button"
                    onClick={reset}
                    className="mt-5 text-sm font-body text-gray-400 hover:text-navy underline block mx-auto transition-colors"
                  >
                    Calculate a different role
                  </button>
                </div>

              </div>
            )}

          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default PricingCalculator;
