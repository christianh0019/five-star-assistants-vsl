import React from 'react';
import { AlertCircle } from 'lucide-react';

interface NichePainProps {
    niche: string;
    painPoints: string[];
    cycleText: React.ReactNode;
}

const NichePain: React.FC<NichePainProps> = ({ niche, painPoints, cycleText }) => {
    return (
        <section className="py-20 md:py-32 bg-gray-50/50 px-4 border-t border-gray-100">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                    {/* Left Column: The Narrative */}
                    <div className="lg:col-span-7">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-red-600 text-sm font-bold uppercase tracking-widest mb-6">
                            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                            The Problem
                        </div>

                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                            Why {niche} Businesses Get Stuck
                        </h2>

                        <div className="border-l-4 border-gold pl-6 md:pl-8 py-2">
                            <div className="font-body text-gray-700 text-lg md:text-xl leading-relaxed">
                                {cycleText}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: The Pain Points Card */}
                    <div className="lg:col-span-5 w-full">
                        <div className="bg-white rounded-3xl p-8 shadow-xl shadow-navy/5 border border-gray-100 relative overflow-hidden">

                            {/* Decorative background element */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

                            <h3 className="font-heading font-bold text-navy text-2xl mb-6 relative z-10">
                                Most {niche.toLowerCase()} hit the same wall:
                            </h3>

                            <ul className="space-y-5 relative z-10">
                                {painPoints.map((pain, idx) => (
                                    <li key={idx} className="flex items-start gap-4">
                                        <div className="mt-1 flex-shrink-0">
                                            <AlertCircle className="text-red-500 w-5 h-5 flex-shrink-0" />
                                        </div>
                                        <span className="font-body text-gray-800 text-lg font-medium shadow-sm">
                                            {pain}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default NichePain;
