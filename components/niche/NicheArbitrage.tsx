import React from 'react';
import { Check } from 'lucide-react';

interface NicheArbitrageProps {
    headline: string;
    conceptDescription: React.ReactNode;
    conceptKeyDifference: React.ReactNode;
    features: string[];
}

const NicheArbitrage: React.FC<NicheArbitrageProps> = ({
    headline,
    conceptDescription,
    conceptKeyDifference,
    features,
}) => {
    return (
        <section className="py-20 md:py-32 bg-gray-50 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="w-12 h-[1px] bg-gold"></span>
                            <span className="font-body text-gold font-bold tracking-[0.2em] uppercase text-xs">The Secret</span>
                        </div>

                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                            {headline}
                        </h2>

                        <div className="prose prose-lg text-gray-600 font-body mb-8">
                            <p className="text-xl leading-relaxed">{conceptDescription}</p>
                            <div className="my-8 p-6 bg-white border-l-4 border-gold rounded-r shadow-sm">
                                <p className="font-heading font-semibold text-navy text-lg m-0">{conceptKeyDifference}</p>
                            </div>
                            <p className="font-bold text-navy text-xl">We handle everything.</p>
                        </div>
                    </div>

                    <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100">
                        <h3 className="font-heading text-2xl font-bold text-navy mb-8 pb-6 border-b border-gray-100">
                            What Five Star Assistants Provides
                        </h3>
                        <ul className="space-y-6">
                            {features.map((feature, idx) => (
                                <li key={idx} className="flex items-center gap-4 group">
                                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                                        <Check className="text-gold group-hover:text-white transition-colors" size={24} />
                                    </div>
                                    <span className="font-body text-xl text-gray-700 font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default NicheArbitrage;
