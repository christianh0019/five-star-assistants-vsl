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
        imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=1000",
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
        imageUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000",
        imageAlt: "Video interview screening process"
    },
    {
        number: "3",
        title: "You Meet Pre-Vetted Candidates",
        description: "We present you with a small group of qualified candidates who match your requirements. You’ll review their profiles and meet them in a short interview to confirm they are the right fit for your team.\n\nOnce you choose a candidate, we handle the placement and get them started. Most roles are filled within 1–3 weeks.",
        imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=1000",
        imageAlt: "Client meeting hand-selected candidate"
    },
    {
        number: "4",
        title: "We Handle Payroll and Administration",
        description: "You do not need to manage international payroll, tax paperwork, or contractor payments.\n\nFive Star Assistants handles the payroll infrastructure so your assistant is paid on time and in compliance with international payment systems.\n\nYou receive a simple monthly invoice based on the agreed hourly rate.",
        imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1000",
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
        <section className="py-24 md:py-32 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 relative z-10">

                {/* Global timeline line (desktop only) */}
                <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-navy/5 -translate-x-1/2 hidden lg:block rounded-full"></div>

                <div className="space-y-24 lg:space-y-0">
                    {processSteps.map((step, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div key={step.number} className="relative w-full">

                                <div className="hidden lg:block h-32 w-full"></div>

                                <div className={`flex flex-col lg:flex-row items-center justify-between w-full ${!isEven ? 'lg:flex-row-reverse' : ''}`}>

                                    {/* Timeline Dot (desktop) */}
                                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16 bg-white border-[6px] border-navy rounded-full items-center justify-center z-10 text-navy font-bold font-heading text-2xl shadow-xl ring-8 ring-white">
                                        {step.number}
                                    </div>

                                    {/* Text Content */}
                                    <div className={`w-full lg:w-[45%] flex flex-col mb-12 lg:mb-0 ${!isEven ? 'lg:items-start lg:text-left' : 'lg:items-end lg:text-right'}`}>

                                        {/* Mobile Step Badge */}
                                        <div className="lg:hidden inline-flex items-center justify-center w-12 h-12 rounded-full bg-navy text-white font-bold font-heading text-xl mb-6 shadow-sm">
                                            {step.number}
                                        </div>

                                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 text-navy font-body text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
                                            Phase {step.number}
                                        </div>

                                        <h3 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-6 leading-tight">
                                            {step.title}
                                        </h3>

                                        <div className="font-body text-lg text-gray-600 leading-relaxed space-y-4">
                                            {step.description.split('\n\n').map((paragraph, pIdx) => (
                                                <p key={pIdx}>{paragraph}</p>
                                            ))}
                                        </div>

                                        {step.bullets && (
                                            <ul className={`mt-8 space-y-4 inline-block text-left ${!isEven ? '' : 'lg:text-right lg:flex lg:flex-col lg:items-end w-full'}`}>
                                                {step.bullets.map((bullet, bIdx) => (
                                                    <li key={bIdx} className={`flex items-start gap-3 w-full max-w-sm ${!isEven ? 'justify-start' : 'justify-end lg:flex-row-reverse'}`}>
                                                        <CheckCircle2 className={`w-6 h-6 text-gold shrink-0 mt-0.5 ${!isEven ? '' : 'lg:ml-3 lg:mr-0'}`} />
                                                        <span className="font-body text-gray-800 font-medium">{bullet}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>

                                    <div className="hidden lg:block w-[10%]"></div>

                                    {/* Image Content */}
                                    <div className={`w-full lg:w-[45%] relative group perspective`}>
                                        <div className={`absolute inset-4 rounded-[2rem] transform transition-transform duration-500 group-hover:rotate-6 bg-gold/20 ${!isEven ? '-rotate-3' : 'rotate-3'}`}></div>
                                        <div className="relative bg-white p-2 rounded-[2rem] shadow-xl border border-gray-100 overflow-hidden transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl">
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
