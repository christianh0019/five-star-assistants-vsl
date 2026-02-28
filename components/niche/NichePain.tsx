import React from 'react';
import { XCircle } from 'lucide-react';

interface NichePainProps {
    niche: string;
    painPoints: string[];
    cycleText: React.ReactNode;
}

const NichePain: React.FC<NichePainProps> = ({ niche, painPoints, cycleText }) => {
    return (
        <section className="py-20 md:py-32 bg-white px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                        Why {niche} Businesses Get Stuck
                    </h2>
                    <p className="font-body text-xl text-gray-600">
                        Most {niche.toLowerCase()} hit the same wall:
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-16">
                    {painPoints.map((pain, idx) => (
                        <div key={idx} className="bg-red-50/50 border border-red-100 p-6 rounded-2xl flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-1">
                                <XCircle className="text-red-500 w-5 h-5" />
                            </div>
                            <p className="font-body text-gray-800 text-lg leading-relaxed">{pain}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-navy p-8 md:p-12 rounded-3xl text-center shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                    <p className="font-heading text-xl md:text-3xl text-white font-medium italic relative z-10 leading-relaxed drop-shadow-sm">
                        "{cycleText}"
                    </p>
                </div>
            </div>
        </section>
    );
};

export default NichePain;
