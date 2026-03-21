import React from 'react';
import {
    Heart, Home, Scale, ShoppingBag, ShieldCheck,
    Truck, BarChart2, Wrench, GraduationCap, Plane,
    Phone, Monitor, Zap, Plus,
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface WhoWeWorkWithSectionProps {
    onOpenSurvey?: () => void;
}

const industries = [
    { label: 'Healthcare',           icon: Heart,         href: '/industries/healthcare' },
    { label: 'Real Estate',          icon: Home,          href: '/industries/real-estate' },
    { label: 'Legal',                icon: Scale,         href: '/industries/legal' },
    { label: 'E-Commerce',           icon: ShoppingBag,   href: '/industries/e-commerce' },
    { label: 'Insurance',            icon: ShieldCheck,   href: '/industries/insurance' },
    { label: 'Logistics',            icon: Truck,         href: '/industries/logistics' },
    { label: 'Financial Services',   icon: BarChart2,     href: '/industries/financial-services' },
    { label: 'Home Services',        icon: Wrench,        href: '/industries/home-services' },
    { label: 'Education & Training', icon: GraduationCap, href: '/industries/education' },
    { label: 'Travel',               icon: Plane,         href: '/industries/travel' },
    { label: 'Telecommunications',   icon: Phone,         href: '/industries/telecommunications' },
    { label: 'Digital Agencies',     icon: Monitor,       href: '/digital-agencies' },
    { label: 'Energy & Utilities',   icon: Zap,           href: '/industries/energy' },
];

const WhoWeWorkWithSection: React.FC<WhoWeWorkWithSectionProps> = ({ onOpenSurvey }) => {
    return (
        <section id="who-we-work-with" className="bg-white py-24 md:py-32 px-4 relative overflow-hidden border-b border-gray-100">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-offwhite/50 -z-10 rounded-l-[100px] hidden lg:block" />

            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fadeIn">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <span className="w-12 h-[1px] bg-gold" />
                        <span className="font-body text-gold font-bold tracking-[0.2em] uppercase text-xs">Who We Work With</span>
                        <span className="w-12 h-[1px] bg-gold" />
                    </div>
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-8 leading-tight">
                        Built For <span className="italic font-light text-navy-light">Founders</span> Who Need Leverage
                    </h2>
                    <p className="font-body text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
                        Whether you scale clicks or pour concrete, if you have a repeatable process, we can staff it with elite talent.
                    </p>
                </div>

                {/* Industry Tiles — 14 total (13 + "More") = 2×7 mobile, 5+5+4 desktop */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4">
                    {industries.map(({ label, icon: Icon, href }) => (
                        <Link
                            key={label}
                            to={href}
                            className="group flex flex-col items-center text-center gap-3 p-5 md:p-6 rounded-2xl border border-gray-100 bg-white hover:border-gold/40 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300"
                        >
                            <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-300">
                                <Icon size={22} className="text-navy/60 group-hover:text-gold transition-colors duration-300" />
                            </div>
                            <span className="font-body font-medium text-gray-700 group-hover:text-navy text-sm leading-tight transition-colors duration-300">
                                {label}
                            </span>
                        </Link>
                    ))}

                    {/* 14th tile */}
                    <button
                        onClick={onOpenSurvey}
                        className="group flex flex-col items-center text-center gap-3 p-5 md:p-6 rounded-2xl border border-dashed border-gray-200 bg-gray-50/40 hover:border-gold/40 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all duration-300 cursor-pointer"
                    >
                        <div className="w-12 h-12 rounded-xl bg-navy/5 flex items-center justify-center group-hover:bg-gold/10 transition-colors duration-300">
                            <Plus size={22} className="text-navy/40 group-hover:text-gold transition-colors duration-300" />
                        </div>
                        <span className="font-body font-medium text-gray-400 group-hover:text-navy text-sm leading-tight transition-colors duration-300">
                            50+ Verticals
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default WhoWeWorkWithSection;
