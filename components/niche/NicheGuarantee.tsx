import React from 'react';
import { ShieldCheck } from 'lucide-react';

interface NicheGuaranteeProps {
    headline: string;
    guarantees: string[];
    footerText: string;
}

const NicheGuarantee: React.FC<NicheGuaranteeProps> = ({ headline, guarantees, footerText }) => {
    return (
        <section className="py-20 bg-navy px-4 border-y-8 border-gold">
            <div className="max-w-4xl mx-auto text-center">

                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse text-gold">
                    <ShieldCheck size={40} />
                </div>

                <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-8 drop-shadow-md">
                    {headline}
                </h2>

                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] p-8 md:p-12 mb-8">
                    <p className="font-body text-xl md:text-2xl text-blue-100 font-medium mb-8">
                        If your remote employee isn't the right fit:
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
                        <span className="font-heading font-bold text-2xl md:text-3xl text-gold">{guarantees[0]}</span>
                        <span className="font-body italic text-gray-400">or</span>
                        <span className="font-heading font-bold text-2xl md:text-3xl text-gold">{guarantees[1]}</span>
                    </div>
                </div>

                <p className="font-heading text-xl md:text-2xl text-white font-bold tracking-wider">
                    {footerText}
                </p>

            </div>
        </section>
    );
};

export default NicheGuarantee;
