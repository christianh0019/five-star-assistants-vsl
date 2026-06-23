import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Check, X, Star, ChevronDown } from 'lucide-react';
import Logo from '../components/Logo';
import ScrollReveal from '../components/ScrollReveal';

const avatars = [
    '/images/va-1.png',
    '/images/va-2.png',
    '/images/va-3.png',
    '/images/va-4.png',
    '/images/for-employees-1.png',
];

const faqs = [
    {
        question: 'What does "free to start" actually mean?',
        answer: 'There are zero upfront fees to get matched with a candidate. You only pay their hourly wage once you decide to hire them. No placement fees, no contracts, no risk.',
    },
    {
        question: 'How experienced are your virtual assistants?',
        answer: 'Our VAs have real-world experience supporting busy business owners — inbox management, scheduling, customer follow-up, research, data entry, social media, and more. Many have worked with US-based clients for years.',
    },
    {
        question: 'How quickly can I get someone started?',
        answer: 'Most clients are matched with a qualified candidate within a few business days. Once you approve someone, they can typically start within the week.',
    },
    {
        question: 'What if I hire someone and it\'s not a good fit?',
        answer: 'No problem. There\'s no long-term commitment. If it\'s not working out, just let us know and we\'ll help you find a better match at no additional cost.',
    },
    {
        question: 'What tasks can a virtual assistant handle?',
        answer: 'Inbox and calendar management, customer support, data entry, research, scheduling, CRM updates, social media posting, travel booking, order tracking, and more — we match you with someone trained for your specific workflows.',
    },
    {
        question: 'Do I have to deal with international payroll?',
        answer: 'Not at all. We handle all payroll on our end. You simply pay us for the hours worked and we take care of everything else — no international wire transfers, no compliance headaches.',
    },
    {
        question: 'How do I know my assistant is actually being productive?',
        answer: 'Every assistant uses full-screen tracking software that monitors activity throughout their shift. All activity data is reviewed and managed by our in-house HR team, so you always have visibility and accountability without having to micromanage.',
    },
];

type QuestionType = 'single' | 'contact';

interface Question {
    id: number;
    text: string;
    subtext?: string;
    type: QuestionType;
    options?: string[];
}

const VALanding: React.FC = () => {
    const navigate = useNavigate();

    const questions = useMemo<Question[]>(() => [
        {
            id: 6,
            text: 'When are you looking to hire?',
            type: 'single',
            options: ['ASAP', '1-2 weeks', '3-4 weeks', 'Next couple months', 'Just exploring'],
        },
        {
            id: 5,
            text: "What's your current monthly business revenue?",
            type: 'single',
            options: ['Under $5k', '$5k–$15k', '$15k–$50k', '$50k+'],
        },
        {
            id: 8,
            text: 'How Can We Contact You?',
            subtext: "We promise we won't spam you.",
            type: 'contact',
        },
    ], []);

    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<number, any>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isDisqualified, setIsDisqualified] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const currentQuestion = questions[currentStep];
    const isFirstStep = currentStep === 0;
    const isLastStep = currentStep === questions.length - 1;
    const progress = ((currentStep + 1) / questions.length) * 100;

    const handleOptionSelect = (option: string) => {
        setAnswers({ ...answers, [currentQuestion.id]: option });

        if (currentQuestion.id === 5 && option === 'Under $5k') {
            setTimeout(() => setIsDisqualified(true), 250);
            return;
        }

        if (!isLastStep) {
            setTimeout(() => setCurrentStep(currentStep + 1), 250);
        }
    };

    const handleContactChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const contactData = answers[currentQuestion.id] || {};
        setAnswers({ ...answers, [currentQuestion.id]: { ...contactData, [e.target.name]: e.target.value } });
    };

    const handleNext = () => {
        if (currentQuestion.id === 5 && answers[5] === 'Under $5k') {
            setIsDisqualified(true);
            return;
        }
        if (currentStep < questions.length - 1) setCurrentStep(currentStep + 1);
    };

    const handleBack = () => {
        if (currentStep > 0) setCurrentStep(currentStep - 1);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await fetch('/api/submit-lead', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    monthlyRevenue: answers[5] || '',
                    hiringTimeline: answers[6] || '',
                    businessName: answers[8]?.businessName || '',
                    name: answers[8]?.name || '',
                    email: answers[8]?.email || '',
                    phone: answers[8]?.phone || '',
                    website: answers[8]?.website || '',
                    contactType: 'VA',
                }),
            });
        } catch (error) {
            console.error('Error submitting survey:', error);
        }

        setIsSubmitting(false);
        navigate('/booking');
    };

    const canProceed = () => {
        const answer = answers[currentQuestion.id];
        if (currentQuestion.type === 'contact') {
            return answer && answer.businessName && answer.name && answer.email && answer.phone && answer.website;
        }
        return !!answer;
    };

    return (
        <div className="w-full min-h-screen bg-white flex flex-col items-center px-4 pb-24">

            {/* Logo */}
            <header className="w-full flex justify-center pt-8 pb-4">
                <Logo />
            </header>

            {/* Hero Text */}
            <ScrollReveal>
                <section className="max-w-[800px] w-full text-center mt-10 mb-10">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 text-navy font-body text-sm font-semibold mb-6 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                        Get Started Now 👇
                    </div>
                    <h1 className="font-heading text-navy text-4xl md:text-6xl font-bold leading-tight mb-6 drop-shadow-sm">
                        Hire An Experienced Virtual Assistant Starting at <span className="text-gold italic">$5/hr</span>
                    </h1>
                    <p className="font-subheading text-navy/80 text-lg md:text-xl font-medium tracking-wider max-w-2xl mx-auto">
                        Zero hiring fees. Completely free to start — just pay their hourly wage if you like them.
                    </p>
                </section>
            </ScrollReveal>

            {/* Inline Survey */}
            <div className="w-full max-w-lg">
                {isDisqualified ? (
                    <div className="bg-white rounded-lg shadow-2xl border border-gray-100 p-8 md:p-12 text-center">
                        <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-6">
                            <X className="text-gray-400" size={32} />
                        </div>
                        <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-4">
                            Thank You For Applying
                        </h2>
                        <p className="font-body text-gray-600 leading-relaxed">
                            At this time, our services are optimized for businesses generating over $5k/mo in revenue. We appreciate you taking the time to apply, and we wish you the best as you grow your business!
                        </p>
                    </div>
                ) : (
                    <div className="bg-white rounded-lg shadow-2xl border border-gray-100 overflow-hidden">

                        {/* Progress */}
                        <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex items-center">
                            <span className="text-sm font-bold text-gold uppercase tracking-widest">
                                Step {currentStep + 1} of {questions.length}
                            </span>
                        </div>
                        <div className="w-full bg-gray-100 h-1">
                            <div className="bg-gold h-1 transition-all duration-500 ease-out" style={{ width: `${progress}%` }} />
                        </div>

                        {/* Content */}
                        <div className="p-6 md:p-8">
                            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-2">
                                {currentQuestion.text}
                            </h2>
                            {currentQuestion.subtext && (
                                <p className="text-gray-500 mb-6 italic">{currentQuestion.subtext}</p>
                            )}

                            <div className="space-y-3 mt-6">
                                {currentQuestion.type === 'single' && (
                                    <div className="grid gap-3">
                                        {currentQuestion.options?.map((option, idx) => {
                                            const isSelected = answers[currentQuestion.id] === option;
                                            return (
                                                <div
                                                    key={idx}
                                                    onClick={() => handleOptionSelect(option)}
                                                    className={`p-4 rounded border-2 cursor-pointer transition-all duration-200 flex items-center ${isSelected ? 'border-navy bg-navy text-white font-medium shadow-md' : 'border-navy/20 bg-navy text-white/80 hover:text-white hover:border-navy'}`}
                                                >
                                                    <div className={`w-5 h-5 rounded-full border mr-3 flex items-center justify-center flex-shrink-0 ${isSelected ? 'border-white bg-white' : 'border-white/40'}`}>
                                                        {isSelected && <Check size={12} className="text-navy" />}
                                                    </div>
                                                    {option}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}

                                {currentQuestion.type === 'contact' && (
                                    <div className="space-y-4">
                                        {[
                                            { label: 'Business Name', name: 'businessName', type: 'text', placeholder: 'Acme Corp' },
                                            { label: 'Full Name', name: 'name', type: 'text', placeholder: 'John Doe' },
                                            { label: 'Email Address', name: 'email', type: 'email', placeholder: 'john@company.com' },
                                            { label: 'Phone Number', name: 'phone', type: 'tel', placeholder: '(555) 123-4567' },
                                            { label: 'Website URL', name: 'website', type: 'url', placeholder: 'https://www.yourdomain.com' },
                                        ].map((field) => (
                                            <div key={field.name}>
                                                <label className="block text-sm font-bold text-navy mb-1">{field.label}</label>
                                                <input
                                                    type={field.type}
                                                    name={field.name}
                                                    className="w-full p-3 border border-gray-300 rounded focus:border-gold outline-none"
                                                    placeholder={field.placeholder}
                                                    onChange={handleContactChange}
                                                    value={answers[currentQuestion.id]?.[field.name] || ''}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Navigation */}
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
                                    className={`bg-navy text-white px-8 py-3 rounded shadow-lg font-heading font-bold uppercase tracking-wide flex items-center transition-all ${!canProceed() ? 'opacity-50 cursor-not-allowed' : 'hover:bg-navy/90 hover:scale-105'}`}
                                >
                                    Next
                                    <ChevronRight size={20} className="ml-2" />
                                </button>
                            ) : (
                                <button
                                    onClick={handleSubmit}
                                    disabled={!canProceed() || isSubmitting}
                                    className={`bg-gold text-navy px-8 py-4 rounded shadow-xl font-heading font-bold uppercase tracking-wide flex items-center transition-all ${(!canProceed() || isSubmitting) ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gold-hover hover:scale-105'}`}
                                >
                                    {isSubmitting ? 'Submitting...' : 'Submit'}
                                    {!isSubmitting && <Check size={20} className="ml-2" />}
                                </button>
                            )}
                        </div>

                    </div>
                )}
            </div>

            {/* Social Proof */}
            <ScrollReveal>
                <section className="w-full max-w-lg mt-12 flex flex-col items-center">
                    <div className="flex items-center mb-4">
                        {avatars.map((src, i) => (
                            <img
                                key={i}
                                src={src}
                                alt="client"
                                className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                                style={{ marginLeft: i === 0 ? 0 : '-10px' }}
                            />
                        ))}
                    </div>
                    <div className="flex gap-1 mb-2">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} size={20} className="text-gold fill-gold" />
                        ))}
                    </div>
                    <p className="font-heading font-bold text-navy text-base">Trusted by 1,000+ businesses</p>
                </section>
            </ScrollReveal>

            {/* FAQ */}
            <ScrollReveal>
                <section className="w-full max-w-3xl mt-16 px-0">
                    <div className="text-center mb-12">
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <span className="w-12 h-[1px] bg-gold"></span>
                            <span className="font-body text-gold font-bold tracking-[0.2em] uppercase text-xs">FAQ</span>
                            <span className="w-12 h-[1px] bg-gold"></span>
                        </div>
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy">
                            Common Questions
                        </h2>
                    </div>

                    <div className="flex flex-col gap-3">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-navy/[0.02] transition-colors duration-200"
                                >
                                    <span className="font-heading font-bold text-lg text-navy leading-snug">
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        size={20}
                                        className={`text-gold flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                <div
                                    className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}
                                >
                                    <div className="px-6 pb-5 pt-1 border-t border-gray-100">
                                        <p className="font-body text-gray-500 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </ScrollReveal>

        </div>
    );
};

export default VALanding;
