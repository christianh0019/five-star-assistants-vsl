import React from 'react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import { CheckCircle, Play } from 'lucide-react';

const PORTAL_URL = 'https://app.fivestarassistants.com/apply/register';

const videoTestimonials = [
    {
        initials: 'MS',
        name: 'Maria S.',
        role: 'Healthcare VA',
        quote: '"Working with US clients through Five Star Assistants changed everything for me. I have a stable income, great clients, and real career growth."',
    },
    {
        initials: 'JR',
        name: 'John R.',
        role: 'E-Commerce Operations VA',
        quote: '"I went from unstable freelance work to a full-time role I actually love. The platform made applying so simple — I had interviews within a week."',
    },
    {
        initials: 'AC',
        name: 'Ana C.',
        role: 'Real Estate Admin VA',
        quote: '"Five Star Assistants found me a client who treats me like part of the team. The pay is great, the work is consistent, and I finally feel secure."',
    },
];

const ForEmployeesLanding: React.FC = () => {
    const goToPortal = () => window.open(PORTAL_URL, '_blank', 'noopener,noreferrer');

    return (
        <div className="min-h-screen bg-white flex flex-col font-body text-gray-800">
            <SEO
                title="Find US Remote Work | Join Five Star Assistants Platform"
                description="Create a free account, browse real job postings from US businesses, and apply in minutes. No placement fees for candidates. Long-term remote roles starting at $4/hr."
                keywords="remote work for virtual assistants, US remote jobs, virtual assistant jobs, work from home jobs, remote job platform, five star assistants apply"
                canonical="https://www.fivestarassistants.com/for-employees"
            />
            <Navbar hideMenu alwaysWhite loginHref="https://app.fivestarassistants.com" />

            <main className="flex-grow pt-24">

                {/* HERO SECTION */}
                <section className="relative pt-36 md:pt-48 pb-24 px-4 md:px-8 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-white">
                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="max-w-[900px] mx-auto text-center flex flex-col items-center">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 text-navy font-heading text-sm font-bold tracking-widest uppercase mb-8 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                                Join Our Platform
                            </div>

                            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8 text-navy">
                                Find High-Paying <span className="text-gold italic">US Remote Work</span>
                            </h1>

                            <p className="font-body text-gray-500 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
                                Create a free account, browse real job postings from US businesses, and apply in minutes. No chasing clients. No middlemen taking your pay.
                            </p>

                            <Button
                                onClick={goToPortal}
                                variant="primary"
                                className="min-w-[280px] text-lg py-4 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                            >
                                Create Your Free Account
                            </Button>
                            <p className="font-heading italic text-gray-400 text-sm mt-6">
                                Free to join. Zero placement fees for candidates.
                            </p>
                        </div>
                    </div>
                </section>

                {/* HOW IT WORKS SECTION */}
                <section className="py-24 bg-gray-50 border-t border-gray-100 px-4 md:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                            <div>
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    The Process
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    How It Works
                                </h2>
                                <p className="text-xl text-gray-500">
                                    Go from sign-up to hired in a few simple steps.
                                </p>
                            </div>
                            <div className="rounded-[2rem] overflow-hidden shadow-xl">
                                <img
                                    src="/images/for-employees-2.png"
                                    alt="Virtual assistant ready to work"
                                    className="w-full h-72 object-cover object-top"
                                />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8 relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>

                            {[
                                {
                                    step: "01",
                                    title: "Create Your Account",
                                    desc: "Sign up for free in minutes. No fees, no paperwork — just your name and email to get started."
                                },
                                {
                                    step: "02",
                                    title: "Browse Job Postings",
                                    desc: "See open roles from verified US businesses. Filter by skill, schedule, and pay rate."
                                },
                                {
                                    step: "03",
                                    title: "Apply With Ease",
                                    desc: "Submit your profile directly to jobs that match your skills. No cold outreach required."
                                },
                                {
                                    step: "04",
                                    title: "Get Hired",
                                    desc: "Interview directly with the client. If it's a fit, you get placed in a stable, long-term role."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                                    <div className="w-[90px] h-[90px] rounded-full bg-white border-2 border-gold/40 flex items-center justify-center mb-6 shadow-md group-hover:scale-110 group-hover:border-gold group-hover:shadow-[0_0_30px_rgba(197,160,89,0.25)] transition-all duration-300">
                                        <span className="font-heading font-black text-3xl text-gold">{item.step}</span>
                                    </div>
                                    <h3 className="font-heading text-xl font-bold text-navy mb-3">{item.title}</h3>
                                    <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ASSISTANT TESTIMONIALS (VIDEO PLACEHOLDERS) */}
                <section className="py-24 bg-white border-t border-gray-100 px-4 md:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                Hear From Our Assistants
                            </h3>
                            <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                See What It's Like To Work With Us
                            </h2>
                            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
                                Real assistants, real stories. Hear directly from people who found long-term US roles through our platform.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {videoTestimonials.map((v, idx) => (
                                <div
                                    key={idx}
                                    className="bg-white rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group overflow-hidden flex flex-col"
                                >
                                    {/* Video thumbnail placeholder */}
                                    <div className="h-56 relative overflow-hidden bg-gray-100">
                                        <div className="absolute inset-0 bg-navy/10 group-hover:bg-navy/20 transition-colors duration-300 flex items-center justify-center">
                                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center border border-gray-200 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                                <Play className="text-navy w-7 h-7 ml-1" fill="currentColor" />
                                            </div>
                                        </div>
                                        <div className="absolute top-4 left-4 bg-navy text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full shadow-md">
                                            Video Coming Soon
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-7 flex flex-col flex-grow">
                                        <div className="flex items-center gap-3 mb-5">
                                            <div className="w-11 h-11 rounded-full bg-navy/[0.07] flex items-center justify-center flex-shrink-0">
                                                <span className="font-heading font-bold text-navy text-sm">{v.initials}</span>
                                            </div>
                                            <div>
                                                <p className="font-heading font-bold text-navy text-base leading-tight">{v.name}</p>
                                                <p className="font-body text-xs text-gold font-semibold tracking-wide">{v.role}</p>
                                            </div>
                                        </div>
                                        <p className="font-body text-gray-600 text-sm leading-relaxed italic flex-grow">
                                            {v.quote}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHY JOIN US SECTION */}
                <section className="py-24 bg-gray-50 border-t border-gray-100 px-4 md:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    Why Join Our Platform
                                </h3>
                                <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                    Better Jobs. <br />
                                    <span className="text-gray-400">Stable Income.</span>
                                </h2>
                                <p className="text-xl text-gray-500 mb-10 leading-relaxed">
                                    Stop fighting for gigs on crowded freelance platforms. Our job board is filled with real openings from growing US businesses that need long-term, dedicated team members.
                                </p>

                                <ul className="space-y-5">
                                    {[
                                        "Real job postings updated as new roles open up",
                                        "Apply directly through the platform — no cold outreach",
                                        "Long-term, full-time positions (not short gigs)",
                                        "Competitive pay rates in USD based on your experience",
                                        "Zero placement fees for candidates"
                                    ].map((benefit, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <CheckCircle className="text-gold w-6 h-6 shrink-0 mt-0.5" />
                                            <span className="text-lg text-gray-700">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="rounded-[2rem] overflow-hidden shadow-xl aspect-square">
                                <img
                                    src="/images/for-employees-1.png"
                                    alt="Virtual assistant working remotely"
                                    className="w-full h-full object-cover object-top"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA BOX */}
                <section className="py-24 px-4 md:px-8 bg-navy relative overflow-hidden border-t-8 border-gold">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Ready To Find Your Next Role?</h2>
                        <p className="text-xl text-blue-100/70 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Create your free account, explore open job postings, and apply to roles that match your skills — all in one place.
                        </p>
                        <Button
                            onClick={goToPortal}
                            variant="primary"
                            className="min-w-[280px] text-xl py-5 shadow-[0_0_30px_rgba(197,160,89,0.3)] hover:shadow-[0_0_50px_rgba(197,160,89,0.5)] hover:scale-105 transition-all"
                        >
                            Join The Platform Free
                        </Button>
                        <p className="font-heading italic text-white/30 text-sm mt-4">Free to join. Zero placement fees.</p>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default ForEmployeesLanding;
