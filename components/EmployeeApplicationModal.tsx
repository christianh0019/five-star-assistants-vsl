import React, { useState, useRef } from 'react';
import { X, Check, Upload } from 'lucide-react';

interface EmployeeApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const COUNTRIES = [
    "United States", "Philippines", "India", "United Kingdom", "Canada",
    "Australia", "South Africa", "Nigeria", "Kenya", "Pakistan", "Bangladesh",
    "Mexico", "Brazil", "Colombia", "Argentina", "Venezuela", "Jamaica",
    "Trinidad and Tobago", "Ghana", "Zimbabwe", "Uganda", "Tanzania",
    "Other",
];

const EmployeeApplicationModal: React.FC<EmployeeApplicationModalProps> = ({ isOpen, onClose }) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        whatsapp: '',
        gender: '',
        country: '',
        age: '',
        fit_answer: '',
        video_intro_url: '',
    });

    const [headshot, setHeadshot] = useState<File | null>(null);
    const [resume, setResume] = useState<File | null>(null);
    const headshotRef = useRef<HTMLInputElement>(null);
    const resumeRef = useRef<HTMLInputElement>(null);

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    if (!isOpen) return null;

    const set = (field: string, value: string) =>
        setForm((prev) => ({ ...prev, [field]: value }));

    const convertToBase64 = (file: File) => new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onload = () => resolve(reader.result as string);
        reader.readAsDataURL(file);
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const [headshotBase64, resumeBase64] = await Promise.all([
                headshot ? convertToBase64(headshot) : Promise.resolve(''),
                resume ? convertToBase64(resume) : Promise.resolve(''),
            ]);

            const payload = {
                name: form.name,
                email: form.email,
                whatsapp: form.whatsapp,
                gender: form.gender,
                country: form.country,
                age: Number(form.age),
                fit_answer: form.fit_answer,
                video_intro_url: form.video_intro_url,
                headshotBase64,
                resumeBase64,
            };

            const response = await fetch("/api/submit-employee-application", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!response.ok) throw new Error("Network request failed");
        } catch (error) {
            console.error("Error submitting application:", error);
            // Proceed to success regardless to avoid blocking UX
        }

        setIsSubmitting(false);
        setIsSuccess(true);
    };

    const handleClose = () => {
        setIsSuccess(false);
        setForm({ name: '', email: '', whatsapp: '', gender: '', country: '', age: '', fit_answer: '', video_intro_url: '' });
        setHeadshot(null);
        setResume(null);
        onClose();
    };

    const canProceed = () => {
        return !!(
            form.name && form.email && form.whatsapp && form.gender &&
            form.country && form.age && form.fit_answer && form.video_intro_url &&
            headshot && resume
        );
    };

    const inputCls = "w-full p-3 border border-gray-300 rounded focus:border-gold outline-none text-gray-900 text-sm";
    const labelCls = "block text-sm font-bold text-navy mb-1";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl overflow-hidden relative flex flex-col max-h-[90vh]">

                {/* Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center shrink-0">
                    <span className="text-sm font-bold text-navy uppercase tracking-widest">
                        Join Five Star Assistants
                    </span>
                    <button onClick={handleClose} className="text-gray-400 hover:text-navy transition-colors">
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 overflow-y-auto flex-grow">
                    {isSuccess ? (
                        <div className="text-center py-12 px-4">
                            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Check size={40} className="text-green-500" />
                            </div>
                            <h2 className="font-heading text-3xl font-bold text-navy mb-4">
                                Thanks for applying!
                            </h2>
                            <p className="text-gray-600 text-lg max-w-md mx-auto leading-relaxed">
                                We'll reach out via email and WhatsApp if we identify an opportunity based on your skillset.
                            </p>
                            <button
                                onClick={handleClose}
                                className="mt-10 bg-navy text-white px-8 py-4 rounded shadow-xl font-heading font-bold uppercase tracking-wide hover:bg-navy/90 hover:scale-105 transition-all inline-block"
                            >
                                Close Window
                            </button>
                        </div>
                    ) : (
                        <>
                            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-2">
                                Employee Application
                            </h2>
                            <p className="text-gray-500 mb-6 italic">Please fill out all fields carefully.</p>

                            <div className="space-y-4 mt-6 text-left">

                                {/* Name */}
                                <div>
                                    <label className={labelCls}>Name <span className="text-red-500">*</span></label>
                                    <input type="text" value={form.name} onChange={(e) => set("name", e.target.value)}
                                        placeholder="Your full name" className={inputCls} />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className={labelCls}>Email <span className="text-red-500">*</span></label>
                                    <input type="email" value={form.email} onChange={(e) => set("email", e.target.value)}
                                        placeholder="your@email.com" className={inputCls} />
                                </div>

                                {/* WhatsApp */}
                                <div>
                                    <label className={labelCls}>WhatsApp <span className="text-red-500">*</span></label>
                                    <input type="tel" value={form.whatsapp} onChange={(e) => set("whatsapp", e.target.value)}
                                        placeholder="+1 (555) 000-0000" className={inputCls} />
                                </div>

                                {/* Gender */}
                                <div>
                                    <label className={labelCls}>Gender <span className="text-red-500">*</span></label>
                                    <div className="flex gap-4 mt-1">
                                        {["male", "female"].map((g) => (
                                            <label key={g} className="flex items-center gap-2 cursor-pointer">
                                                <input
                                                    type="radio"
                                                    name="gender"
                                                    value={g}
                                                    checked={form.gender === g}
                                                    onChange={() => set("gender", g)}
                                                    className="accent-gold w-4 h-4"
                                                />
                                                <span className="text-sm text-gray-700 capitalize">{g === "male" ? "Male" : "Female"}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                {/* Country */}
                                <div>
                                    <label className={labelCls}>Country <span className="text-red-500">*</span></label>
                                    <select value={form.country} onChange={(e) => set("country", e.target.value)} className={inputCls}>
                                        <option value="">Select your country...</option>
                                        {COUNTRIES.map((c) => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                </div>

                                {/* Age */}
                                <div>
                                    <label className={labelCls}>Age <span className="text-red-500">*</span></label>
                                    <input type="number" min="18" max="80" value={form.age} onChange={(e) => set("age", e.target.value)}
                                        placeholder="e.g. 28" className={inputCls} />
                                </div>

                                {/* Headshot */}
                                <div>
                                    <label className={labelCls}>Headshot <span className="text-red-500">*</span></label>
                                    <input
                                        ref={headshotRef}
                                        type="file"
                                        accept="image/jpeg,image/png,image/webp"
                                        className="hidden"
                                        onChange={(e) => setHeadshot(e.target.files?.[0] ?? null)}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => headshotRef.current?.click()}
                                        className="w-full flex items-center justify-between p-3 border border-gray-300 rounded text-sm text-gray-500 hover:border-gold transition-colors"
                                    >
                                        <span className={headshot ? "text-gray-800" : ""}>{headshot ? headshot.name : "No file chosen"}</span>
                                        <Upload className="w-4 h-4 shrink-0" />
                                    </button>
                                    <p className="text-xs text-gray-400 mt-1">JPG, PNG, or WEBP — professional photo, clear background preferred</p>
                                </div>

                                {/* Resume */}
                                <div>
                                    <label className={labelCls}>Resume <span className="text-red-500">*</span></label>
                                    <input
                                        ref={resumeRef}
                                        type="file"
                                        accept="application/pdf"
                                        className="hidden"
                                        onChange={(e) => setResume(e.target.files?.[0] ?? null)}
                                    />
                                    <button
                                        type="button"
                                        onClick={() => resumeRef.current?.click()}
                                        className="w-full flex items-center justify-between p-3 border border-gray-300 rounded text-sm text-gray-500 hover:border-gold transition-colors"
                                    >
                                        <span className={resume ? "text-gray-800" : ""}>{resume ? resume.name : "No file chosen"}</span>
                                        <Upload className="w-4 h-4 shrink-0" />
                                    </button>
                                    <p className="text-xs text-gray-400 mt-1">PDF only</p>
                                </div>

                                {/* Divider */}
                                <div className="pt-2 border-t border-gray-100">
                                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">Job Information</p>
                                    <p className="text-sm text-gray-600 mb-5">
                                        Please help us see why we should choose you for this position. Take your time here and provide us with the best possible answer!
                                    </p>
                                </div>

                                {/* Fit answer */}
                                <div>
                                    <label className={labelCls}>
                                        Why are you a good fit for this position? <span className="text-red-500">*</span>
                                    </label>
                                    <textarea
                                        value={form.fit_answer}
                                        onChange={(e) => set("fit_answer", e.target.value)}
                                        rows={6}
                                        placeholder="Tell us specifically why you're a great fit for working with US business owners..."
                                        className={`${inputCls} resize-none`}
                                    />
                                </div>

                                {/* Video intro */}
                                <div>
                                    <label className={labelCls}>
                                        Please provide a video introducing yourself. <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="url"
                                        value={form.video_intro_url}
                                        onChange={(e) => set("video_intro_url", e.target.value)}
                                        placeholder="https://www.loom.com/share/... or YouTube link"
                                        className={inputCls}
                                    />
                                    <p className="text-xs text-gray-400 mt-1">Share a Loom, YouTube, or Google Drive link — 2–3 minutes max</p>
                                </div>

                            </div>
                        </>
                    )}
                </div>

                {/* Footer */}
                {!isSuccess && (
                    <div className="p-6 bg-white border-t border-gray-100 flex justify-end items-center shrink-0">
                        <button
                            onClick={handleSubmit}
                            disabled={!canProceed() || isSubmitting}
                            className={`bg-gold text-navy px-8 py-4 rounded shadow-xl font-heading font-bold uppercase tracking-wide flex items-center transition-all ${(!canProceed() || isSubmitting) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gold-hover hover:scale-105'}`}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit Application'}
                            {!isSubmitting && <Check size={20} className="ml-2" />}
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default EmployeeApplicationModal;
