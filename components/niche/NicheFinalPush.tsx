import React from 'react';
import Button from '../Button';

interface NicheFinalPushProps {
    headline: string;
    subheadline: string;
    ctaText: string;
    onCtaClick: () => void;
}

const NicheFinalPush: React.FC<NicheFinalPushProps> = ({ headline, subheadline, ctaText, onCtaClick }) => {
    return (
        <section className="bg-navy py-24 px-4 relative overflow-hidden">
            {/* Visual flair - floating elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 z-0 hidden md:block"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 z-0 hidden md:block"></div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-md">
                    {headline}
                </h2>

                <p className="font-subheading text-blue-100 text-xl md:text-2xl tracking-wide max-w-2xl mx-auto mb-16 opacity-90">
                    {subheadline}
                </p>

                <div className="flex flex-col items-center">
                    <Button
                        onClick={onCtaClick}
                        variant="primary"
                        className="w-full sm:w-auto min-w-[320px] text-lg shadow-[0_0_40px_rgba(255,215,0,0.3)] hover:shadow-[0_0_60px_rgba(255,215,0,0.4)] animate-pulse hover:animate-none group relative overflow-hidden"
                    >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                        <span className="relative z-10">{ctaText}</span>
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default NicheFinalPush;
