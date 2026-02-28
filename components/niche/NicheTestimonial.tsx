import React from 'react';
import { Quote } from 'lucide-react';

interface NicheTestimonialProps {
    quote: string;
}

const NicheTestimonial: React.FC<NicheTestimonialProps> = ({ quote }) => {
    return (
        <section className="py-20 md:py-32 bg-gray-50 px-4">
            <div className="max-w-4xl mx-auto text-center relative">
                <Quote className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10 w-24 h-24 text-gold/20 z-0" />

                <div className="relative z-10 bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-gray-100">
                    <p className="font-heading text-2xl md:text-4xl text-navy font-bold italic leading-tight mb-8">
                        "{quote}"
                    </p>
                    <div className="flex items-center justify-center gap-4">
                        <div className="flex text-gold">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NicheTestimonial;
