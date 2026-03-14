import React, { useState } from 'react';
import { ChevronDown, Check } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';

// ─── Pricing Data — 13 categories, 87 roles ───────────────────────────────────
// Rates: [min, max] USD/hr

const pricingData = {
  'Administration & Virtual Assistants': {
    'Data Entry':                                  { entry: [6, 7],   mid: [7, 9],   senior: [9, 11]  },
    'Administration Assistant (Non-Voice)':        { entry: [6, 8],   mid: [8, 11],  senior: [11, 14] },
    'Administration Assistant / Receptionist':     { entry: [7, 9],   mid: [9, 12],  senior: [12, 15] },
    'Executive Secretary':                         { entry: [7, 9],   mid: [9, 12],  senior: [12, 15] },
    'Executive Assistant':                         { entry: [7, 9],   mid: [9, 12],  senior: [12, 15] },
    'Administration / Junior Marketing':           { entry: [7, 9],   mid: [9, 11],  senior: [11, 14] },
    'E-commerce Assistant':                        { entry: [6, 8],   mid: [8, 11],  senior: [11, 14] },
    'Personal Assistant':                          { entry: [6, 8],   mid: [8, 10],  senior: [10, 13] },
    'Virtual Assistant':                           { entry: [6, 8],   mid: [8, 11],  senior: [11, 14] },
    'Transcriptionist / Captioner':                { entry: [6, 7],   mid: [7, 9],   senior: [9, 12]  },
  },
  'Customer Support': {
    'Customer Support Agent (Non-Voice)':          { entry: [6, 8],   mid: [8, 10],  senior: [10, 12] },
    'Customer Support Agent (Voice)':              { entry: [6, 8],   mid: [8, 11],  senior: [11, 14] },
    'Team Leader':                                 { entry: [8, 10],  mid: [10, 13], senior: [13, 15] },
    'Team Manager':                                { entry: [9, 11],  mid: [11, 13], senior: [13, 15] },
    'QA Manager':                                  { entry: [8, 10],  mid: [10, 13], senior: [13, 15] },
    'Customer Success Manager':                    { entry: [8, 10],  mid: [10, 13], senior: [13, 15] },
  },
  'Sales & Lead Generation': {
    'Appointment Setter':                          { entry: [6, 8],   mid: [8, 10],  senior: [10, 13] },
    'Telemarketing Agent':                         { entry: [6, 8],   mid: [8, 10],  senior: [10, 12] },
    'B2B Sales Representative':                    { entry: [7, 9],   mid: [9, 12],  senior: [12, 15] },
    'Inbound Sales Agent':                         { entry: [7, 9],   mid: [9, 11],  senior: [11, 14] },
    'Sales Manager':                               { entry: [9, 11],  mid: [11, 13], senior: [13, 15] },
    'Lead Generator':                              { entry: [6, 8],   mid: [8, 11],  senior: [11, 14] },
  },
  'Accounting & Finance': {
    'Accounting Assistant':                        { entry: [7, 9],   mid: [9, 11],  senior: [11, 14] },
    'Bookkeeper':                                  { entry: [7, 9],   mid: [9, 12],  senior: [12, 15] },
    'Accountant':                                  { entry: [8, 10],  mid: [10, 13], senior: [13, 15] },
    'Tax Accountant':                              { entry: [8, 10],  mid: [10, 13], senior: [13, 15] },
    'Loan Processor':                              { entry: [7, 9],   mid: [9, 12],  senior: [12, 15] },
    'Payroll Specialist':                          { entry: [7, 9],   mid: [9, 12],  senior: [12, 15] },
    'Accounts Payable Specialist':                 { entry: [7, 9],   mid: [9, 11],  senior: [11, 14] },
    'Financial Analyst / FP&A':                    { entry: [9, 11],  mid: [11, 13], senior: [13, 15] },
    'Paralegal / Legal Assistant':                 { entry: [8, 10],  mid: [10, 13], senior: [13, 15] },
  },
  'IT & Technical Support': {
    'IT Support Level 1':                          { entry: [7, 9],   mid: [9, 12],  senior: [12, 15] },
    'IT Support Level 2':                          { entry: [8, 10],  mid: [10, 13], senior: [13, 15] },
    'Technical Support Engineer':                  { entry: [9, 11],  mid: [11, 13], senior: [13, 15] },
    'Cybersecurity Analyst':                       { entry: [10, 12], mid: [12, 14], senior: [14, 15] },
    'SOC Analyst':                                 { entry: [10, 12], mid: [12, 14], senior: [14, 15] },
  },
  'Marketing & Advertising': {
    'Social Media Community Engagement':           { entry: [6, 8],   mid: [8, 10],  senior: [10, 13] },
    'Social Media Assistant':                      { entry: [6, 8],   mid: [8, 10],  senior: [10, 12] },
    'Social Media Specialist':                     { entry: [7, 9],   mid: [9, 12],  senior: [12, 15] },
    'Marketing Assistant':                         { entry: [6, 8],   mid: [8, 11],  senior: [11, 14] },
    'Video Editor':                                { entry: [7, 9],   mid: [9, 12],  senior: [12, 15] },
    'WordPress Developer':                         { entry: [7, 9],   mid: [9, 12],  senior: [12, 15] },
    'Content Writer':                              { entry: [6, 8],   mid: [8, 11],  senior: [11, 14] },
    'Graphic Designer':                            { entry: [7, 9],   mid: [9, 12],  senior: [12, 15] },
    'Google Ads Specialist':                       { entry: [8, 10],  mid: [10, 13], senior: [13, 15] },
    'SEO Specialist':                              { entry: [7, 9],   mid: [9, 12],  senior: [12, 15] },
    'Amazon Marketplace Specialist':               { entry: [7, 9],   mid: [9, 12],  senior: [12, 15] },
    'YouTube Channel Manager':                     { entry: [7, 9],   mid: [9, 11],  senior: [11, 14] },
    'Email / CRM Specialist':                      { entry: [7, 9],   mid: [9, 12],  senior: [12, 15] },
    'Marketing Automation Specialist':             { entry: [8, 10],  mid: [10, 13], senior: [13, 15] },
    'Content Moderator':                           { entry: [6, 7],   mid: [7, 9],   senior: [9, 12]  },
  },
  'HR & Recruitment': {
    'Recruiter':                                   { entry: [7, 9],   mid: [9, 12],  senior: [12, 15] },
    'HR Manager':                                  { entry: [8, 10],  mid: [10, 13], senior: [13, 15] },
    'Data Analyst (HR)':                           { entry: [8, 10],  mid: [10, 12], senior: [12, 15] },
    'Talent Sourcer':                              { entry: [7, 9],   mid: [9, 11],  senior: [11, 14] },
  },
  'Creative & Design': {
    'Interior Designer':                           { entry: [7, 9],   mid: [9, 12],  senior: [12, 15] },
    'Procurement Specialist':                      { entry: [7, 9],   mid: [9, 12],  senior: [12, 15] },
    'Draftsperson':                                { entry: [7, 9],   mid: [9, 12],  senior: [12, 15] },
    'Automation Engineer':                         { entry: [9, 11],  mid: [11, 13], senior: [13, 15] },
    'Architect':                                   { entry: [8, 10],  mid: [10, 13], senior: [13, 15] },
    'Estimator':                                   { entry: [7, 9],   mid: [9, 12],  senior: [12, 15] },
    'UI/UX Designer':                              { entry: [8, 10],  mid: [10, 13], senior: [13, 15] },
    'Motion Graphics / Animator':                  { entry: [8, 10],  mid: [10, 13], senior: [13, 15] },
    'Podcast Editor':                              { entry: [7, 9],   mid: [9, 11],  senior: [11, 14] },
    'Video Content Strategist':                    { entry: [8, 10],  mid: [10, 12], senior: [12, 15] },
  },
  'Real Estate': {
    'Real Estate ISA':                             { entry: [6, 8],   mid: [8, 11],  senior: [11, 14] },
    'Property Management Assistant':               { entry: [7, 9],   mid: [9, 11],  senior: [11, 14] },
    'Property Management (Short-Term Rental)':     { entry: [7, 9],   mid: [9, 11],  senior: [11, 14] },
  },
  'Healthcare & Medical': {
    'Medical Receptionist':                        { entry: [7, 9],   mid: [9, 11],  senior: [11, 14] },
    'Medical Billing Specialist':                  { entry: [7, 9],   mid: [9, 12],  senior: [12, 15] },
    'Medical Scribe':                              { entry: [7, 9],   mid: [9, 11],  senior: [11, 14] },
    'Medical Coder':                               { entry: [8, 10],  mid: [10, 13], senior: [13, 15] },
  },
  'Software Development & Engineering': {
    'Full Stack Developer':                        { entry: [10, 12], mid: [12, 14], senior: [14, 15] },
    'Frontend Developer':                          { entry: [9, 11],  mid: [11, 13], senior: [13, 15] },
    'Backend Developer':                           { entry: [9, 11],  mid: [11, 13], senior: [13, 15] },
    'QA Tester':                                   { entry: [8, 10],  mid: [10, 12], senior: [12, 15] },
    'E-commerce Web Developer':                    { entry: [9, 11],  mid: [11, 13], senior: [13, 15] },
    'DevOps / Cloud Engineer':                     { entry: [10, 12], mid: [12, 14], senior: [14, 15] },
    'Mobile App Developer':                        { entry: [10, 12], mid: [12, 14], senior: [14, 15] },
    'Data Engineer':                               { entry: [10, 12], mid: [12, 14], senior: [14, 15] },
    'RPA Developer':                               { entry: [9, 11],  mid: [11, 13], senior: [13, 15] },
    'Scrum Master / Agile PM':                     { entry: [9, 11],  mid: [11, 13], senior: [13, 15] },
    'Technical Project Manager':                   { entry: [10, 12], mid: [12, 14], senior: [14, 15] },
  },
  'Operations & Business Support': {
    'Supply Chain Coordinator':                    { entry: [7, 9],   mid: [9, 12],  senior: [12, 15] },
    'Salesforce Administrator':                    { entry: [9, 11],  mid: [11, 13], senior: [13, 15] },
  },
  'Data & Analytics': {
    'Power BI / Tableau Developer':                { entry: [9, 11],  mid: [11, 13], senior: [13, 15] },
    'Data Scientist':                              { entry: [10, 12], mid: [12, 14], senior: [14, 15] },
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

  const [phase, setPhase]           = useState<Phase>(1);
  const [category, setCategory]     = useState<CategoryKey | ''>('');
  const [role, setRole]             = useState('');
  const [experience, setExperience] = useState<ExperienceLevel>('entry');
  const [schedule, setSchedule]     = useState<Schedule>('fulltime');

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
    return roleData ? (roleData[experience] as [number, number]) : null;
  };
  const rate = getRate();
  const canProceed = Boolean(category && role);

  const experienceLabel =
    experience === 'entry' ? 'Entry (1–2 years)' :
    experience === 'mid'   ? 'Mid (2–5 years)'   :
                             'Senior (5+ years)';

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
    } catch { /* don't block on webhook failure */ }
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

  const inputClass =
    'w-full bg-gray-50 border-2 border-gray-200 text-navy font-body text-base rounded-xl px-5 py-4 focus:outline-none focus:border-gold transition-colors placeholder:text-gray-400';

  return (
    <section className="py-20 md:py-28 bg-white px-4">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
              INSTANT ESTIMATE
            </h3>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-5">
              See Your Role's Starting Rate
            </h2>
            <p className="font-body text-lg text-gray-500 max-w-xl mx-auto">
              Select a category, role, and experience level for an instant hourly rate estimate.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="bg-white rounded-[2rem] shadow-[0_4px_40px_rgba(10,25,47,0.08)] border border-gray-100 overflow-hidden">

            {/* ── PHASE 1: Role Selection ─────────────────────────────── */}
            {phase === 1 && (
              <div className="p-8 md:p-10">

                {/* Category */}
                <div className="mb-6">
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
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                  </div>
                </div>

                {/* Role */}
                <div className="mb-6">
                  <label className="block font-heading font-bold text-navy text-xs tracking-widest uppercase mb-3">
                    Role
                  </label>
                  <div className="relative">
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      disabled={!category}
                      className={`${inputClass} appearance-none pr-12 ${
                        category ? 'cursor-pointer' : 'opacity-40 cursor-not-allowed'
                      }`}
                    >
                      <option value="">— Select a Role —</option>
                      {roles.map(r => (
                        <option key={r} value={r}>{r}</option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                  </div>
                </div>

                {/* Experience Level */}
                <div className="mb-6">
                  <label className="block font-heading font-bold text-navy text-xs tracking-widest uppercase mb-3">
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
                            ? 'border-gold bg-gold/5 shadow-sm'
                            : 'border-gray-200 bg-gray-50 hover:border-gold/40'
                        }`}
                      >
                        <div className={`font-heading font-bold text-base leading-none mb-1 ${
                          experience === value ? 'text-navy' : 'text-gray-700'
                        }`}>
                          {label}
                        </div>
                        <div className="font-body text-xs text-gray-500">{sub}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Schedule */}
                <div className="mb-8">
                  <label className="block font-heading font-bold text-navy text-xs tracking-widest uppercase mb-3">
                    Schedule
                  </label>
                  <div className="inline-flex bg-gray-100 rounded-xl p-1">
                    {scheduleOptions.map(({ value, label }) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setSchedule(value)}
                        className={`px-7 py-3 rounded-lg font-heading font-bold text-sm transition-all duration-200 ${
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

                <button
                  type="button"
                  onClick={() => canProceed && setPhase(2)}
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

            {/* ── PHASE 2: Contact Form ───────────────────────────────── */}
            {phase === 2 && (
              <div className="p-8 md:p-10">
                <div className="mb-7">
                  <h3 className="font-heading text-2xl font-bold text-navy mb-2">
                    Almost there — where should we send your estimate?
                  </h3>
                  <p className="font-body text-gray-500 text-sm">
                    Your rate estimate is ready for{' '}
                    <span className="text-navy font-semibold">{role}</span>. Enter your details to reveal it.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-heading font-bold text-navy text-xs tracking-widest uppercase mb-2">
                        Full Name
                      </label>
                      <input type="text" value={name} onChange={e => setName(e.target.value)}
                        placeholder="John Smith" className={inputClass} autoComplete="name" />
                    </div>
                    <div>
                      <label className="block font-heading font-bold text-navy text-xs tracking-widest uppercase mb-2">
                        Company Name
                      </label>
                      <input type="text" value={company} onChange={e => setCompany(e.target.value)}
                        placeholder="Acme Corp" className={inputClass} autoComplete="organization" />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-heading font-bold text-navy text-xs tracking-widest uppercase mb-2">
                        Email Address
                      </label>
                      <input type="email" value={email} onChange={e => setEmail(e.target.value)}
                        placeholder="john@company.com" className={inputClass} autoComplete="email" />
                    </div>
                    <div>
                      <label className="block font-heading font-bold text-navy text-xs tracking-widest uppercase mb-2">
                        Phone Number
                      </label>
                      <input type="tel" value={phone} onChange={e => setPhone(e.target.value)}
                        placeholder="+1 (555) 000-0000" className={inputClass} autoComplete="tel" />
                    </div>
                  </div>

                  {error && <p className="text-red-500 font-body text-sm font-medium">{error}</p>}

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full py-5 rounded-xl font-heading font-bold text-xl uppercase tracking-wide bg-gold hover:bg-gold-hover text-navy shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? 'Loading...' : 'See My Rate Estimate →'}
                    </button>
                  </div>

                  <p className="text-center font-body text-xs text-gray-400">
                    No spam. No sales pressure. Just your estimate.
                  </p>
                </form>

                <button type="button" onClick={() => setPhase(1)}
                  className="mt-5 text-sm font-body text-gray-400 hover:text-navy underline transition-colors">
                  ← Back
                </button>
              </div>
            )}

            {/* ── PHASE 3: Rate Reveal ────────────────────────────────── */}
            {phase === 3 && rate && (
              <div className="p-8 md:p-10">

                {/* Rate card */}
                <div className="bg-navy rounded-[1.5rem] p-8 md:p-12 relative overflow-hidden mb-7">
                  <div className="absolute top-0 right-0 w-72 h-72 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                  <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />
                  <div className="relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-body text-xs font-semibold mb-5">
                      <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                      Estimated Hourly Rate
                    </div>
                    <p className="font-heading text-base text-gray-300 mb-1">{role}</p>
                    <p className="font-body text-xs text-gray-500 mb-6">
                      {experienceLabel} · {schedule === 'fulltime' ? 'Full Time' : 'Part Time'}
                    </p>
                    <div className="mb-2">
                      <span className="font-heading font-bold text-white">
                        <span className="text-6xl md:text-7xl">${rate[0]}–${rate[1]}</span>
                        <span className="text-3xl text-gray-400"> /hr</span>
                      </span>
                    </div>
                    <p className="font-body text-gray-400 text-xs mt-3">
                      Starting rate · Subject to final candidate assessment
                    </p>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="grid md:grid-cols-3 gap-3 mb-7">
                  {[
                    'No placement fees to get started',
                    'Candidates ready within 4 days',
                    'Cancel anytime — no contracts',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100">
                      <Check className="text-gold flex-shrink-0" size={16} strokeWidth={3} />
                      <span className="font-body text-navy font-medium text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="text-center">
                  <p className="font-body text-gray-600 mb-5">
                    Ready to hire a <span className="font-bold text-navy">{role}</span>? Let's find your candidate.
                  </p>
                  <button
                    type="button"
                    onClick={() => navigate('/booking')}
                    className="w-full sm:w-auto min-w-[280px] py-5 px-10 rounded-xl font-heading font-bold text-xl uppercase tracking-wide bg-gold hover:bg-gold-hover text-navy shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Book a Free Discovery Call
                  </button>
                  <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                  <button type="button" onClick={reset}
                    className="mt-4 text-sm font-body text-gray-400 hover:text-navy underline block mx-auto transition-colors">
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
