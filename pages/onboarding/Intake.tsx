import React, { useState } from 'react';
import {
    ArrowLeft, Building2, Globe, Users, Clock, Loader2, CheckCircle2
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import OnboardingHeader from '../../components/OnboardingHeader';

const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/Vfs1lM3WjyR7NO8AgZeL/webhook-trigger/bykaLCimOn5w3duaqxpK';

const OnboardingIntake: React.FC = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        // Business Details
        businessName: '',
        website: '',
        businessType: '',
        state: '',
        industry: '',

        // Primary Contact
        fullName: '',
        email: '',
        phone: '',

        // VA Needs
        tasksToDelegate: '', // Changed to single string text block
        hoursPerWeek: '',
        startTimeline: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const payload = {
            source: 'onboarding_intake',
            company_name: formData.businessName,
            website: formData.website,
            business_type: formData.businessType,
            state: formData.state,
            industry: formData.industry,
            full_name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            tasks_to_delegate: formData.tasksToDelegate,
            hours_per_week: formData.hoursPerWeek,
            start_timeline: formData.startTimeline,
            // Removed: employee_count, current_crm, tools_used, revenue_goal, success_in_90_days
        };

        try {
            await fetch(WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
                body: JSON.stringify(payload),
            });
            navigate('/onboarding/booking');
        } catch (err) {
            console.error('Intake submit error:', err);
            alert('Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    const inputClass =
        'w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-navy bg-gray-50 focus:bg-white transition-colors font-body text-navy placeholder-gray-400';
    const selectClass =
        'w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-navy bg-gray-50 focus:bg-white transition-colors font-body text-navy';
    const labelClass = 'block text-sm font-bold text-navy mb-2 font-subheading uppercase tracking-wider';
    const sectionHeaderClass =
        'flex items-center gap-3 text-navy font-heading font-bold text-xl border-b border-gray-100 pb-4 mb-6';

    return (
        <div className="min-h-screen bg-gray-50 font-body pb-20">
            <OnboardingHeader currentStep={1} totalSteps={3} stepLabel="Intake Form" />

            <div className="max-w-3xl mx-auto px-4 pt-28">
                {/* Page Header */}
                <div className="mb-10 text-center">
                    <h1 className="font-heading text-3xl md:text-4xl font-bold text-navy">
                        Tell us about your business.
                    </h1>
                    <p className="font-body text-gray-500 mt-3 max-w-xl mx-auto">
                        This helps us match you with the right assistant and prepare for your kickoff call.
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                    <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-12">

                        {/* ── Section 1: Business Details ── */}
                        <div>
                            <div className={sectionHeaderClass}>
                                <div className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center">
                                    <Building2 size={18} className="text-navy" />
                                </div>
                                <h3>Business Details</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="col-span-2">
                                    <label className={labelClass}>Business Name</label>
                                    <input required name="businessName" value={formData.businessName} onChange={handleChange} type="text" className={inputClass} placeholder="e.g. Smith & Partners LLC" />
                                </div>
                                <div className="col-span-2">
                                    <label className={labelClass}>Website URL</label>
                                    <div className="relative">
                                        <Globe className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                        <input name="website" value={formData.website} onChange={handleChange} type="text" className={`${inputClass} pl-10`} placeholder="https://..." />
                                    </div>
                                </div>
                                <div>
                                    <label className={labelClass}>Business Type</label>
                                    <select name="businessType" value={formData.businessType} onChange={handleChange} className={selectClass}>
                                        <option value="">Select type...</option>
                                        <option value="Sole Proprietor">Sole Proprietor</option>
                                        <option value="LLC">LLC</option>
                                        <option value="S-Corp">S-Corp</option>
                                        <option value="C-Corp">C-Corp</option>
                                        <option value="Partnership">Partnership</option>
                                    </select>
                                </div>
                                <div>
                                    <label className={labelClass}>State</label>
                                    <input name="state" value={formData.state} onChange={handleChange} type="text" className={inputClass} placeholder="e.g. Florida" />
                                </div>
                                <div className="col-span-2">
                                    <label className={labelClass}>Industry</label>
                                    <select required name="industry" value={formData.industry} onChange={handleChange} className={selectClass}>
                                        <option value="">Select industry...</option>
                                        <option value="Online Business">Online Business</option>
                                        <option value="Local Physical Business">Local Physical Business</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        {/* ── Section 2: Primary Contact ── */}
                        <div>
                            <div className={sectionHeaderClass}>
                                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center">
                                    <Users size={18} className="text-gold" />
                                </div>
                                <h3>Primary Contact</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="col-span-2">
                                    <label className={labelClass}>Full Name</label>
                                    <input required name="fullName" value={formData.fullName} onChange={handleChange} type="text" className={inputClass} placeholder="Jane Smith" />
                                </div>
                                <div>
                                    <label className={labelClass}>Email Address</label>
                                    <input required name="email" value={formData.email} onChange={handleChange} type="email" className={inputClass} placeholder="jane@example.com" />
                                </div>
                                <div>
                                    <label className={labelClass}>Phone Number</label>
                                    <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" className={inputClass} placeholder="(555) 123-4567" />
                                </div>
                            </div>
                        </div>

                        {/* ── Section 3: VA Needs ── */}
                        <div>
                            <div className={sectionHeaderClass}>
                                <div className="w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center">
                                    <Clock size={18} className="text-gold" />
                                </div>
                                <h3>Your Needs</h3>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <label className={labelClass}>Detailed Description of Tasks to Delegate</label>
                                    <p className="text-xs text-gray-500 mb-2 font-body italic">
                                        Describe what you need help with or what you're looking for in an employee. Be as specific as possible.
                                    </p>
                                    <textarea
                                        required
                                        name="tasksToDelegate"
                                        value={formData.tasksToDelegate}
                                        onChange={handleChange}
                                        className={`${inputClass} h-40 resize-none`}
                                        placeholder="e.g. I need someone to manage my inbox, respond to leads within 1 hour, and help organize my Google Drive folders..."
                                    />
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className={labelClass}>Hours Needed per Week</label>
                                        <select name="hoursPerWeek" value={formData.hoursPerWeek} onChange={handleChange} className={selectClass}>
                                            <option value="">Select...</option>
                                            <option value="10-20 hrs">10–20 hours</option>
                                            <option value="20-30 hrs">20–30 hours</option>
                                            <option value="30-40 hrs">30–40 hours (full-time)</option>
                                            <option value="40+ hrs">40+ hours</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className={labelClass}>Ideal Start Timeline</label>
                                        <select name="startTimeline" value={formData.startTimeline} onChange={handleChange} className={selectClass}>
                                            <option value="">Select...</option>
                                            <option value="ASAP">As soon as possible</option>
                                            <option value="1-2 weeks">Within 1–2 weeks</option>
                                            <option value="This month">This month</option>
                                            <option value="Next month">Next month</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ── Form Actions ── */}
                        <div className="pt-6 border-t border-gray-100 flex items-center justify-between">
                            <button
                                type="button"
                                onClick={() => navigate('/onboarding/welcome')}
                                className="flex items-center gap-2 text-gray-500 hover:text-navy font-bold font-subheading uppercase tracking-wider text-sm transition-colors"
                            >
                                <ArrowLeft size={16} /> Back
                            </button>

                            <button
                                type="submit"
                                disabled={loading}
                                className="inline-flex items-center gap-2 bg-navy text-white font-bold font-subheading uppercase tracking-wider text-sm px-8 py-4 rounded-xl hover:bg-navy/90 transition-all duration-200 shadow-lg shadow-navy/20 hover:shadow-xl hover:shadow-navy/30 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <>
                                        <Loader2 className="animate-spin" size={18} />
                                        Submitting...
                                    </>
                                ) : (
                                    <>
                                        Next Step <CheckCircle2 size={18} />
                                    </>
                                )}
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default OnboardingIntake;
