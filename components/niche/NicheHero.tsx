import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Button from '../Button';

interface NicheHeroProps {
    headline: React.ReactNode;
    subheadline: React.ReactNode;
    bullets: string[];
    primaryCTA: string;
    secondaryCTA: string;
    onPrimaryClick: () => void;
    onSecondaryClick: () => void;
}

const NicheHero: React.FC<NicheHeroProps> = ({
    headline,
    subheadline,
    bullets,
    primaryCTA,
    secondaryCTA,
    onPrimaryClick,
    onSecondaryClick
}) => {
    return (
        <section className="relative pt-36 md:pt-48 pb-20 px-4 md:px-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-white">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">

                <h1 className="font-heading text-navy text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 drop-shadow-sm">
                    {headline}
                </h1>

                <p className="font-subheading text-gray-600 text-lg md:text-xl md:leading-relaxed max-w-3xl mb-10">
                    {subheadline}
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-12">
                    {bullets.map((bullet, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-navy font-medium text-sm md:text-base">
                            <CheckCircle2 className="text-gold w-5 h-5 flex-shrink-0" />
                            <span>{bullet}</span>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                    <Button
                        onClick={onPrimaryClick}
                        variant="primary"
                        className="w-full sm:w-auto min-w-[280px] shadow-xl hover:shadow-2xl"
                    >
                        {primaryCTA}
                    </Button>

                    <button
                        onClick={onSecondaryClick}
                        className="w-full sm:w-auto min-w-[280px] px-8 py-3.5 rounded bg-white text-navy font-heading font-bold uppercase tracking-wide border-2 border-navy hover:bg-navy/5 transition-all text-sm md:text-base shadow-sm hover:shadow-md"
                    >
                        {secondaryCTA}
                    </button>
                </div>

            </div>
        </section>
    );
};

export default NicheHero;
