import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface StepData {
    number: string;
    title: string;
    description: string;
    bullets?: string[];
    imageUrl: string;
    imageAlt: string;
}

const processSteps: StepData[] = [
    {
        number: "1",
        title: "Tell Us What Role You Need",
        description: "Start by telling us about your business and the role you want to fill. Common roles we place include:",
        bullets: [
            "Media buyers",
            "Video editors",
            "Accountants and bookkeepers",
            "Appointment setters",
            "Customer support",
            "Operations and administrative support"
        ],
        imageUrl: "/images/phase-1.jpg",
        imageAlt: "Team collaboration and planning"
    },
    {
        number: "2",
        title: "We Recruit and Screen Candidates",
        description: "Our team sources candidates through our international recruiting network and runs them through a structured vetting process. Candidates are evaluated for:",
        bullets: [
            "Communication ability",
            "Relevant experience",
            "Reliability and professionalism",
            "Technical skills for the role"
        ],
        imageUrl: "/images/phase-2.jpg",
        imageAlt: "Video interview screening process"
    },
    {
        number: "3",
        title: "You Meet Pre-Vetted Candidates",
        description: "We present you with a small group of qualified candidates who match your requirements. You’ll review their profiles and meet them in a short interview to confirm they are the right fit for your team.\n\nOnce you choose a candidate, we handle the placement and get them started. Most roles are filled within 1–3 weeks.",
        imageUrl: "/images/phase-3.jpg",
        imageAlt: "Client meeting hand-selected candidate"
    },
    {
        number: "4",
        title: "We Handle Payroll and Administration",
        description: "You do not need to manage international payroll, tax paperwork, or contractor payments.\n\nFive Star Assistants handles the payroll infrastructure so your assistant is paid on time and in compliance with international payment systems.\n\nYou receive a simple monthly invoice based on the agreed hourly rate.",
        imageUrl: "/images/phase-4.jpg",
        imageAlt: "Payroll and administrative paperwork"
    },
    {
        number: "5",
        title: "Productivity and Work Monitoring",
        description: "To ensure reliability and transparency, assistants work within a productivity monitoring system. This allows you to:",
        bullets: [
            "Track hours worked",
            "View activity and productivity reports",
            "Maintain visibility into your assistant’s work"
        ],
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
        imageAlt: "Productivity dashboard and tracking"
    },
    {
        number: "6",
        title: "Ongoing Support and Replacement Guarantee",
        description: "If issues arise, our team is available to help resolve them.\n\nIf an assistant is not the right fit, we will replace them at no cost or refund the placement fee.\n\nOur goal is to ensure every placement becomes a long-term asset to your business.",
        imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1000",
        imageAlt: "Ongoing support and handshake guarantee"
    }
];

const HowItWorksProcess: React.FC = () => {
    return (
        <section className="py-24 md:py-32 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10">

                {/* Global timeline line (desktop only) */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-navy/5 -translate-x-1/2 hidden lg:block rounded-full">
                    {/* Top Marker */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-[3px] border-gold rounded-full shadow-sm z-10"></div>
                    {/* Bottom Marker */}
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-[3px] border-gold rounded-full shadow-sm z-10">
                        <div className="absolute inset-0 rounded-full bg-gold/50 animate-ping"></div>
                    </div>
                </div>

                <div className="space-y-16 lg:space-y-0 relative">
                    {/* Mobile vertical timeline line */}
                    <div className="absolute left-[38px] top-12 bottom-0 w-1 bg-navy/5 block lg:hidden rounded-full z-0"></div>

                    {processSteps.map((step, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div key={step.number} className="relative w-full">

                                <div className="hidden lg:block h-32 w-full"></div>

                                <div className={`flex flex-col lg:flex-row items-center justify-between w-full ${!isEven ? 'lg:flex-row-reverse' : ''}`}>

                                    {/* Text Content */}
                                    <div className={`w-full lg:w-[42%] flex flex-col mb-12 lg:mb-0 ${!isEven ? 'lg:items-start lg:text-left' : 'lg:items-end lg:text-right'} relative z-10`}>

                                        {/* Mobile Header Block (Row with Badge + Phase pill) */}
                                        <div className={`flex items-center gap-4 mb-6 ${!isEven ? 'justify-start' : 'justify-start lg:justify-end'} w-full pl-6 lg:pl-0`}>
                                            <div className="lg:hidden shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-navy border-4 border-white text-white font-bold font-heading text-xl shadow-md z-10">
                                                {step.number}
                                            </div>
                                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 text-navy font-body text-xs font-bold tracking-widest uppercase shadow-sm">
                                                Phase {step.number}
                                            </div>
                                        </div>

                                        <h3 className={`font-heading text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight pl-[4.5rem] lg:pl-0 pr-4 lg:pr-0 ${!isEven ? 'text-left' : 'text-left lg:text-right'} w-full`}>
                                            {step.title}
                                        </h3>

                                        <div className={`font-body text-lg text-gray-600 leading-relaxed space-y-4 pl-[4.5rem] lg:pl-0 pr-4 lg:pr-0 ${!isEven ? 'text-left' : 'text-left lg:text-right'} w-full`}>
                                            {step.description.split('\n\n').map((paragraph, pIdx) => (
                                                <p key={pIdx}>{paragraph}</p>
                                            ))}
                                        </div>

                                        {step.bullets && (
                                            <div className={`mt-8 pl-[4.5rem] lg:pl-0 pr-4 lg:pr-0 w-full flex flex-col ${!isEven ? 'items-start' : 'items-start lg:items-end'}`}>
                                                <ul className={`space-y-4 inline-block`}>
                                                    {step.bullets.map((bullet, bIdx) => (
                                                        <li key={bIdx} className={`flex items-start gap-3 w-full max-w-sm text-left ${!isEven ? 'justify-start' : 'justify-start lg:flex-row-reverse lg:text-right'}`}>
                                                            <CheckCircle2 className={`w-6 h-6 text-gold shrink-0 mt-0.5 ${!isEven ? '' : 'lg:ml-3 lg:mr-0'}`} />
                                                            <span className="font-body text-gray-800 font-medium leading-snug">{bullet}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>

                                    {/* Center Timeline Dot Container (desktop) */}
                                    <div className="hidden lg:flex w-[16%] justify-center items-center relative z-20">
                                        <div className="w-16 h-16 bg-navy text-white rounded-full flex items-center justify-center font-bold font-heading text-2xl shadow-xl border-4 border-white z-20">
                                            {step.number}
                                        </div>
                                    </div>

                                    {/* Image Content */}
                                    <div className={`w-full lg:w-[42%] relative group perspective pl-[4.5rem] lg:pl-0 pr-4 lg:pr-0 mb-12 lg:mb-0`}>
                                        <div className={`absolute inset-4 rounded-[2rem] transform transition-transform duration-500 group-hover:rotate-6 bg-gold/20 ${!isEven ? '-rotate-3' : 'rotate-3'}`}></div>
                                        <div className="relative bg-white p-2 rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl z-10">
                                            <div className="aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-gray-100">
                                                <img
                                                    src={step.imageUrl}
                                                    alt={step.imageAlt}
                                                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default HowItWorksProcess;
