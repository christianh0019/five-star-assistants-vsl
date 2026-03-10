import React, { useState } from 'react';
import { X, Check } from 'lucide-react';

interface EmployeeApplicationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onComplete?: () => void;
}

const EmployeeApplicationModal: React.FC<EmployeeApplicationModalProps> = ({ isOpen, onClose, onComplete }) => {
    const [answers, setAnswers] = useState({
        name: '',
        email: '',
        whatsapp: '',
        country: '',
        resume: null as File | null,
        videoUrl: '',
        whyConsidered: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    if (!isOpen) return null;

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setAnswers({ ...answers, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setAnswers({ ...answers, resume: e.target.files[0] });
        }
    };

    const convertBlobToBase64 = (blob: Blob) => new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onerror = reject;
        reader.onload = () => resolve(reader.result as string);
        reader.readAsDataURL(blob);
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            let resumeBase64 = '';
            let resumeName = '';
            let resumeType = '';

            if (answers.resume) {
                resumeBase64 = await convertBlobToBase64(answers.resume);
                resumeName = answers.resume.name;
                resumeType = answers.resume.type;
            }

            const payload = {
                name: answers.name,
                email: answers.email,
                whatsapp: answers.whatsapp,
                country: answers.country,
                videoUrl: answers.videoUrl,
                whyConsidered: answers.whyConsidered,
                resumeBase64,
                resumeName,
                resumeType
            };

            await fetch("/api/submit-employee-application", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
        } catch (error) {
            console.error("Error submitting application:", error);
            alert("There was an error submitting your application. Please try again.");
            setIsSubmitting(false);
            return;
        }

        setIsSubmitting(false);
        setIsSuccess(true);

        if (onComplete) {
            // Optional: call onComplete after a delay or let user click close
        }
    };

    const handleClose = () => {
        setIsSuccess(false);
        setAnswers({
            name: '',
            email: '',
            whatsapp: '',
            country: '',
            resume: null,
            videoUrl: '',
            whyConsidered: ''
        });
        onClose();
        if (isSuccess && onComplete) onComplete();
    };

    const canProceed = () => {
        return !!(answers.name && answers.email && answers.whatsapp && answers.country && answers.resume && answers.videoUrl && answers.whyConsidered);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl overflow-hidden relative flex flex-col max-h-[90vh]">

                {/* Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center shrink-0">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-navy uppercase tracking-widest">
                            Join Five Star Assistants
                        </span>
                    </div>
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
                                We'll reach out via email and Whatsapp if we identify an opportunity based on your skillset.
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

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-navy mb-1">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            className="w-full p-3 border border-gray-300 rounded focus:border-gold outline-none text-gray-900"
                                            placeholder="John Doe"
                                            onChange={handleTextChange}
                                            value={answers.name}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-navy mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            className="w-full p-3 border border-gray-300 rounded focus:border-gold outline-none text-gray-900"
                                            placeholder="john@example.com"
                                            onChange={handleTextChange}
                                            value={answers.email}
                                        />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-bold text-navy mb-1">WhatsApp Number</label>
                                        <input
                                            type="tel"
                                            name="whatsapp"
                                            className="w-full p-3 border border-gray-300 rounded focus:border-gold outline-none text-gray-900"
                                            placeholder="+1 234 567 8900"
                                            onChange={handleTextChange}
                                            value={answers.whatsapp}
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-bold text-navy mb-1">Country</label>
                                        <input
                                            type="text"
                                            name="country"
                                            className="w-full p-3 border border-gray-300 rounded focus:border-gold outline-none text-gray-900"
                                            placeholder="e.g. Philippines"
                                            onChange={handleTextChange}
                                            value={answers.country}
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-navy mb-1">Resume (PDF)</label>
                                    <input
                                        type="file"
                                        name="resume"
                                        accept=".pdf"
                                        className="w-full p-3 border border-gray-300 rounded focus:border-gold outline-none bg-white text-gray-900"
                                        onChange={handleFileChange}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-navy mb-1">Video Application (URL)</label>
                                    <input
                                        type="url"
                                        name="videoUrl"
                                        className="w-full p-3 border border-gray-300 rounded focus:border-gold outline-none text-gray-900"
                                        placeholder="https://youtube.com/... or Loom link"
                                        onChange={handleTextChange}
                                        value={answers.videoUrl}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-bold text-navy mb-1">Why should you be considered?</label>
                                    <textarea
                                        name="whyConsidered"
                                        className="w-full p-3 border border-gray-300 rounded focus:border-gold outline-none min-h-[120px] text-gray-900"
                                        placeholder="Tell us about your experience and why you'd be a great fit for our US clients..."
                                        onChange={handleTextChange}
                                        value={answers.whyConsidered}
                                    ></textarea>
                                </div>
                            </div>
                        </>
                    )}

                </div>

                {/* Footer / Navigation */}
                {!isSuccess && (
                    <div className="p-6 bg-white border-t border-gray-100 flex justify-end items-center shrink-0">

                        <button
                            onClick={handleSubmit}
                            disabled={!canProceed() || isSubmitting}
                            className={`
                            bg-gold text-navy px-8 py-4 rounded shadow-xl font-heading font-bold uppercase tracking-wide flex items-center transition-all
                            ${(!canProceed() || isSubmitting) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gold-hover hover:scale-105'}
                        `}
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
