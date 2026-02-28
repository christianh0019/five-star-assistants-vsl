import React from 'react';
import { X, Check } from 'lucide-react';

interface NicheCostComparisonProps {
    localHireFeatures: string[];
    fsaFeatures: string[];
}

const NicheCostComparison: React.FC<NicheCostComparisonProps> = ({ localHireFeatures, fsaFeatures }) => {
    return (
        <section className="py-20 md:py-32 bg-white px-4">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                        Hiring Locally vs Hiring Through Five Star Assistants
                    </h2>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">

                    {/* Local Hire Column */}
                    <div className="bg-gray-50 border border-gray-200 rounded-[2rem] p-8 md:p-12 shadow-sm">
                        <h3 className="font-heading text-2xl font-bold text-gray-500 mb-8 pb-4 border-b border-gray-200 text-center">
                            The Local Hire
                        </h3>
                        <ul className="space-y-6">
                            {localHireFeatures.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <X className="text-red-400 w-6 h-6 flex-shrink-0 mt-0.5" />
                                    <span className="font-body text-lg text-gray-600 font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* FSA Column */}
                    <div className="bg-navy border border-navy rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden transform md:-translate-y-4">
                        {/* Subtle light flair */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0"></div>

                        <h3 className="relative z-10 font-heading text-2xl font-bold text-white mb-8 pb-4 border-b border-white/20 text-center flex items-center justify-center gap-3">
                            <span className="bg-gold text-navy text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full">Winner</span>
                            Five Star Assistants
                        </h3>

                        <ul className="space-y-6 relative z-10">
                            {fsaFeatures.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-4">
                                    <Check className="text-gold w-6 h-6 flex-shrink-0 mt-0.5 drop-shadow-sm" strokeWidth={3} />
                                    <span className="font-body text-lg text-white font-medium drop-shadow-sm">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default NicheCostComparison;
