import React from 'react';

interface ProcessStep {
    title: string;
    description: string;
}

interface NicheProcessProps {
    steps: ProcessStep[];
}

const NicheProcess: React.FC<NicheProcessProps> = ({ steps }) => {
    return (
        <section className="py-20 md:py-32 bg-gray-50 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                        How Our Process Works
                    </h2>
                </div>

                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-8 md:before:mx-auto before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
                    {steps.map((step, idx) => (
                        <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                            <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-white bg-navy text-white font-heading font-bold text-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow md:mx-auto z-10 transition-all duration-300 group-hover:bg-gold group-hover:scale-110">
                                {idx + 1}
                            </div>

                            <div className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
                                <h3 className="font-heading font-bold text-xl text-navy mb-2">{step.title}</h3>
                                <p className="font-body text-gray-600 leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NicheProcess;
