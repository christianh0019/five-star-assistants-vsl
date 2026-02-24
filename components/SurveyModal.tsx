import React, { useState, useMemo } from 'react';
import { X, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import Button from './Button';

interface SurveyModalProps {
    isOpen: boolean;
    onClose: () => void;
    onComplete?: () => void;
    source?: string;
}

type QuestionType = 'single' | 'multi' | 'short' | 'contact';

interface Question {
    id: number;
    text: string;
    subtext?: string;
    type: QuestionType;
    options?: string[];
    placeholder?: string;
}

const SurveyModal: React.FC<SurveyModalProps> = ({ isOpen, onClose, onComplete, source }) => {
    const questions = useMemo(() => {
        const baseQuestions: Question[] = [
            {
                id: 5,
                text: "What’s your current monthly business revenue?",
                type: 'single',
                options: [
                    "Under $5k",
                    "$5k–$15k",
                    "$15k–$50k",
                    "$50k+"
                ]
            },
            {
                id: 8,
                text: "How Can We Contact You?",
                subtext: "We promise we won't spam you.",
                type: 'contact'
            }
        ];

        if (source === 'General') {
            return [
                {
                    id: 1,
                    text: "What best describes your business?",
                    type: 'short',
                    placeholder: "e.g. Real Estate, Marketing Agency, Local Gym..."
                },
                ...baseQuestions
            ];
        }

        return baseQuestions;
    }, [source]);

    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<number, any>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isDisqualified, setIsDisqualified] = useState(false);

    if (!isOpen) return null;

    const currentQuestion = questions[currentStep];
    const isFirstStep = currentStep === 0;
    const isLastStep = currentStep === questions.length - 1;
    const totalSteps = questions.length;
    const progress = ((currentStep + 1) / totalSteps) * 100;

    const handleOptionSelect = (option: string) => {
        if (currentQuestion.type === 'multi') {
            const currentSelected = answers[currentQuestion.id] || [];
            if (currentSelected.includes(option)) {
                setAnswers({
                    ...answers,
                    [currentQuestion.id]: currentSelected.filter((item: string) => item !== option)
                });
            } else {
                setAnswers({
                    ...answers,
                    [currentQuestion.id]: [...currentSelected, option]
                });
            }
        } else {
            setAnswers({ ...answers, [currentQuestion.id]: option });

            // Disqualify immediately after short delay to show selection
            if (currentQuestion.id === 5 && option === "Under $5k") {
                setTimeout(() => setIsDisqualified(true), 250);
                return;
            }

            // Auto advance for single select if not last step
            if (currentQuestion.type === 'single' && !isLastStep) {
                setTimeout(() => handleNext(), 250);
            }
        }
    };

    const handleTextChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setAnswers({ ...answers, [currentQuestion.id]: e.target.value });
    };

    const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const contactData = answers[currentQuestion.id] || {};
        setAnswers({
            ...answers,
            [currentQuestion.id]: { ...contactData, [e.target.name]: e.target.value }
        });
    };

    const handleNext = () => {
        if (currentQuestion.id === 5 && answers[5] === "Under $5k") {
            setIsDisqualified(true);
            return;
        }

        if (currentStep < questions.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const payload = {
                monthlyRevenue: answers[5] || '',
                businessName: answers[8]?.businessName || '',
                name: answers[8]?.name || '',
                email: answers[8]?.email || '',
                phone: answers[8]?.phone || '',
                website: answers[8]?.website || '',
                contactType: source === 'General' ? (answers[1] || 'Unknown') : (source || 'Unknown')
            };

            await fetch("https://services.leadconnectorhq.com/hooks/Vfs1lM3WjyR7NO8AgZeL/webhook-trigger/bykaLCimOn5w3duaqxpK", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(payload),
            });
        } catch (error) {
            console.error("Error submitting survey:", error);
            // Optional: Handle error UI here, but for now we proceed or alert
            // alert("There was an error submitting your application. Please try again.");
            // return; // Uncomment to stop progress on error
        }

        setIsSubmitting(false);

        if (onComplete) {
            onComplete();
        } else {
            onClose();
            alert("Thanks! We'll be in touch shortly.");
        }
    };

    const canProceed = () => {
        const answer = answers[currentQuestion.id];
        if (currentQuestion.type === 'multi') return answer && answer.length > 0;
        if (currentQuestion.type === 'contact') {
            return answer && answer.businessName && answer.name && answer.email && answer.phone && answer.website;
        }
        return !!answer;
    };

    if (isDisqualified) {
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm animate-in fade-in duration-200">
                <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg overflow-hidden relative flex flex-col p-8 md:p-12 text-center">
                    <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-navy transition-colors">
                        <X size={24} />
                    </button>

                    <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                        <X className="text-gray-400" size={32} />
                    </div>

                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-4">
                        Thank You For Applying
                    </h2>

                    <p className="font-body text-gray-600 mb-8 leading-relaxed">
                        At this time, our services are optimized for businesses generating over $5k/mo in revenue. We appreciate you taking the time to apply, and we wish you the best as you grow your business!
                    </p>

                    <button
                        onClick={onClose}
                        className="bg-navy text-white px-8 py-3 rounded shadow-lg font-heading font-bold uppercase tracking-wide hover:bg-navy/90 transition-all mx-auto"
                    >
                        Close Window
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg overflow-hidden relative flex flex-col max-h-[90vh]">

                {/* Header / Progress */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-gold uppercase tracking-widest">
                            Step {currentStep + 1} of {totalSteps}
                        </span>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-navy transition-colors">
                        <X size={24} />
                    </button>
                </div>
                <div className="w-full bg-gray-100 h-1">
                    <div
                        className="bg-gold h-1 transition-all duration-500 ease-out"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 overflow-y-auto flex-grow">

                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-2">
                        {currentQuestion.text}
                    </h2>

                    {currentQuestion.subtext && (
                        <p className="text-gray-500 mb-6 italic">{currentQuestion.subtext}</p>
                    )}

                    <div className="space-y-3 mt-6">

                        {/* Options Types */}
                        {(currentQuestion.type === 'single' || currentQuestion.type === 'multi') && (
                            <div className="grid gap-3">
                                {currentQuestion.options?.map((option, idx) => {
                                    const isSelected = currentQuestion.type === 'multi'
                                        ? (answers[currentQuestion.id] || []).includes(option)
                                        : answers[currentQuestion.id] === option;

                                    return (
                                        <div
                                            key={idx}
                                            onClick={() => handleOptionSelect(option)}
                                            className={`
                        p-4 rounded border-2 cursor-pointer transition-all duration-200 flex items-center
                        ${isSelected
                                                    ? 'border-gold bg-gold/5 text-navy font-medium shadow-md'
                                                    : 'border-gray-100 hover:border-gold/50 text-gray-600 hover:bg-gray-50'}
                      `}
                                        >
                                            <div className={`
                        w-5 h-5 rounded-full border mr-3 flex items-center justify-center flex-shrink-0
                        ${isSelected ? 'border-gold bg-gold' : 'border-gray-300'}
                      `}>
                                                {isSelected && <Check size={12} className="text-white" />}
                                            </div>
                                            {option}
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {/* Short Answer Type */}
                        {currentQuestion.type === 'short' && (
                            <textarea
                                className="w-full p-4 border-2 border-gray-200 rounded focus:border-gold focus:ring-0 outline-none min-h-[120px] text-lg"
                                placeholder={currentQuestion.placeholder}
                                value={answers[currentQuestion.id] || ''}
                                onChange={handleTextChange}
                                autoFocus
                            ></textarea>
                        )}

                        {currentQuestion.type === 'contact' && (
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-navy mb-1">Business Name</label>
                                    <input
                                        type="text"
                                        name="businessName"
                                        className="w-full p-3 border border-gray-300 rounded focus:border-gold outline-none"
                                        placeholder="Acme Corp"
                                        onChange={handleContactChange}
                                        value={answers[currentQuestion.id]?.businessName || ''}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-navy mb-1">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        className="w-full p-3 border border-gray-300 rounded focus:border-gold outline-none"
                                        placeholder="John Doe"
                                        onChange={handleContactChange}
                                        value={answers[currentQuestion.id]?.name || ''}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-navy mb-1">Email Address</label>
                                    <input
                                        type="email"
                                        name="email"
                                        className="w-full p-3 border border-gray-300 rounded focus:border-gold outline-none"
                                        placeholder="john@company.com"
                                        onChange={handleContactChange}
                                        value={answers[currentQuestion.id]?.email || ''}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-navy mb-1">Phone Number</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        className="w-full p-3 border border-gray-300 rounded focus:border-gold outline-none"
                                        placeholder="(555) 123-4567"
                                        onChange={handleContactChange}
                                        value={answers[currentQuestion.id]?.phone || ''}
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-navy mb-1">Website URL</label>
                                    <input
                                        type="url"
                                        name="website"
                                        className="w-full p-3 border border-gray-300 rounded focus:border-gold outline-none"
                                        placeholder="https://www.yourdomain.com"
                                        onChange={handleContactChange}
                                        value={answers[currentQuestion.id]?.website || ''}
                                    />
                                </div>
                            </div>
                        )}

                    </div>

                </div>

                {/* Footer / Navigation */}
                <div className="p-6 bg-white border-t border-gray-100 flex justify-between items-center">

                    <button
                        onClick={handleBack}
                        disabled={isFirstStep}
                        className={`flex items-center text-gray-500 font-medium hover:text-navy transition-colors ${isFirstStep ? 'opacity-0 pointer-events-none' : ''}`}
                    >
                        <ChevronLeft size={20} className="mr-1" />
                        Back
                    </button>

                    {!isLastStep ? (
                        <button
                            onClick={handleNext}
                            disabled={!canProceed()}
                            className={`
                        bg-navy text-white px-8 py-3 rounded shadow-lg font-heading font-bold uppercase tracking-wide flex items-center transition-all
                        ${!canProceed() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-navy/90 hover:scale-105'}
                    `}
                        >
                            Next
                            <ChevronRight size={20} className="ml-2" />
                        </button>
                    ) : (
                        <button
                            onClick={handleSubmit}
                            disabled={!canProceed() || isSubmitting}
                            className={`
                        bg-gold text-navy px-8 py-4 rounded shadow-xl font-heading font-bold uppercase tracking-wide flex items-center transition-all
                        ${(!canProceed() || isSubmitting) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gold-hover hover:scale-105'}
                    `}
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                            {!isSubmitting && <Check size={20} className="ml-2" />}
                        </button>
                    )}

                </div>

            </div>
        </div>
    );
};

export default SurveyModal;
