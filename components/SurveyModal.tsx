import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import Button from './Button';

interface SurveyModalProps {
    isOpen: boolean;
    onClose: () => void;
    onComplete?: () => void;
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

const questions: Question[] = [
    {
        id: 1,
        text: "What best describes your business?",
        subtext: "(choose one)",
        type: 'single',
        options: [
            "Online Service Provider",
            "Brick & Mortar Business",
            "Coach / Consultant",
            "E-commerce",
            "Other"
        ]
    },
    {
        id: 2,
        text: "Which tasks are taking up most of your time right now?",
        subtext: "(multi-select)",
        type: 'multi',
        options: [
            "Following up with leads",
            "Admin work / data entry",
            "Inbox and scheduling",
            "Customer support",
            "Social media posting",
            "Bookkeeping",
            "Project coordination",
            "Other"
        ]
    },
    {
        id: 3,
        text: "Roughly how many hours per week are you personally stuck doing these tasks?",
        type: 'single',
        options: [
            "Under 5 hours",
            "5–10 hours",
            "10–20 hours",
            "20+ hours"
        ]
    },
    {
        id: 4,
        text: "Have you ever hired a VA or remote team member before?",
        type: 'single',
        options: [
            "Yes and it worked great",
            "Yes but it didn’t go well",
            "No but I’m interested",
            "No and I’m unsure"
        ]
    },
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
        id: 6,
        text: "What’s your main goal right now?",
        subtext: "(short answer)",
        type: 'short',
        placeholder: "Grow faster, free up time, reduce stress, scale team, etc."
    },
    {
        id: 7,
        text: "Are you ready to delegate and invest in support if it makes sense?",
        type: 'single',
        options: [
            "Yes, I’m ready now",
            "Possibly, want to learn more",
            "Just researching"
        ]
    },
    {
        id: 8,
        text: "Where should we send your custom staffing plan?",
        type: 'contact'
    }
];

const SurveyModal: React.FC<SurveyModalProps> = ({ isOpen, onClose, onComplete }) => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<number, any>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

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
            await fetch("https://services.leadconnectorhq.com/hooks/Vfs1lM3WjyR7NO8AgZeL/webhook-trigger/bykaLCimOn5w3duaqxpK", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(answers),
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
            return answer && answer.name && answer.email && answer.phone;
        }
        return !!answer;
    };

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

                        {/* Contact Form Type */}
                        {currentQuestion.type === 'contact' && (
                            <div className="space-y-4">
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
                            {isSubmitting ? 'Submitting...' : 'Book Discovery Call'}
                            {!isSubmitting && <Check size={20} className="ml-2" />}
                        </button>
                    )}

                </div>

            </div>
        </div>
    );
};

export default SurveyModal;
