import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ {
    question: string;
    answer: string | React.ReactNode;
}

interface NicheFAQProps {
    faqs: FAQ[];
}

const NicheFAQ: React.FC<NicheFAQProps> = ({ faqs }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-20 md:py-32 bg-white px-4 border-t border-gray-100">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div
                            key={idx}
                            className={`border-b border-gray-200 overflow-hidden transition-all duration-300 ${openIndex === idx ? 'bg-gray-50/50' : 'bg-transparent'}`}
                        >
                            <button
                                className="w-full flex items-center justify-between py-6 px-4 md:px-6 text-left focus:outline-none group"
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                            >
                                <span className={`font-heading font-bold text-xl md:text-2xl transition-colors ${openIndex === idx ? 'text-gold' : 'text-navy group-hover:text-gold/80'}`}>
                                    {faq.question}
                                </span>
                                <ChevronDown
                                    className={`flex-shrink-0 text-navy transition-transform duration-300 ${openIndex === idx ? 'rotate-180 text-gold' : ''}`}
                                    size={24}
                                />
                            </button>

                            <div
                                className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-[500px] opacity-100 pb-8 px-4 md:px-6' : 'max-h-0 opacity-0 overflow-hidden px-4 md:px-6'}`}
                            >
                                <p className="font-body text-lg text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NicheFAQ;
