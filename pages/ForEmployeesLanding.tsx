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
                description="Create a free account, browse real job postings from US businesses, and apply in minutes. Long-term remote roles with US clients, starting at $4/hr."
                keywords="remote work for virtual assistants, US remote jobs, virtual assistant jobs, work from home jobs, remote job platform, five star assistants apply"
                canonical="https://www.fivestarassistants.com/for-employees"
            />
            <Navbar hideMenu alwaysWhite loginHref="https://app.fivestarassistants.com" />

            <main className="flex-grow pt-24">

                {/* HERO SECTION */}
                <section className="relative pt-20 md:pt-28 pb-24 px-4 md:px-8 overflow-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-white">
                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="max-w-[900px] mx-auto text-center flex flex-col items-center">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 text-navy font-heading text-sm font-bold tracking-widest uppercase mb-5 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                                Join Our Platform
                            </div>

                            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 text-navy">
                                Find High-Paying <span className="text-gold italic">US Remote Work</span>
                            </h1>

                            <p className="font-body text-gray-500 text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed">
                                Browse real job postings from US businesses and apply in minutes. Long-term, full-time roles — no cold outreach, no bidding wars.
                            </p>

                            <Button
                                onClick={goToPortal}
                                variant="primary"
                                className="min-w-[280px] text-lg py-4 shadow-xl hover:shadow-2xl hover:scale-105 transition-all"
                            >
                                Create Your Free Account
                            </Button>
                            <p className="font-heading italic text-gray-400 text-sm mt-6">
                                Free to apply. No fees to create your account.
                            </p>
                        </div>

                        {/* Portal Preview Mockup */}
                        <div className="mt-14 w-full max-w-5xl mx-auto">
                            {/* Browser Chrome */}
                            <div className="bg-[#1c1c2e] rounded-t-2xl px-5 py-3.5 flex items-center gap-4 shadow-2xl">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
                                </div>
                                <div className="flex-1 bg-white/[0.07] rounded-lg px-4 py-1.5 flex items-center gap-2">
                                    <svg className="w-3 h-3 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                    <span className="text-white/40 text-xs font-mono">app.fivestarassistants.com/jobs</span>
                                </div>
                            </div>

                            {/* Portal Shell */}
                            <div className="relative rounded-b-2xl overflow-hidden shadow-[0_40px_80px_-20px_rgba(10,35,66,0.35)] border border-t-0 border-gray-200" style={{ height: 420 }}>
                                <div className="flex h-full">

                                    {/* Sidebar — hidden on mobile */}
                                    <div className="hidden md:flex w-56 bg-[#0A2342] flex-col py-6 px-4 flex-shrink-0">
                                        <div className="flex items-center gap-2.5 mb-8 px-2">
                                            <div className="w-7 h-7 bg-[#C5A059] rounded-lg flex items-center justify-center flex-shrink-0">
                                                <span className="text-[#0A2342] font-black text-xs">★</span>
                                            </div>
                                            <div className="leading-tight">
                                                <p className="text-white font-bold text-[11px]">Five Star</p>
                                                <p className="text-white/50 text-[10px]">Assistants</p>
                                            </div>
                                        </div>

                                        {[
                                            { label: 'Dashboard', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', active: false },
                                            { label: 'Browse Jobs', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', active: true },
                                            { label: 'My Applications', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2', active: false },
                                            { label: 'My Profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', active: false },
                                            { label: 'Messages', icon: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z', active: false },
                                        ].map((item, i) => (
                                            <div key={i} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl mb-1 cursor-default transition-colors ${item.active ? 'bg-[#C5A059]/20 border border-[#C5A059]/30' : 'hover:bg-white/5'}`}>
                                                <svg className={`w-4 h-4 flex-shrink-0 ${item.active ? 'text-[#C5A059]' : 'text-white/40'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d={item.icon} />
                                                </svg>
                                                <span className={`text-sm font-medium ${item.active ? 'text-[#C5A059]' : 'text-white/50'}`}>{item.label}</span>
                                                {item.label === 'My Applications' && <span className="ml-auto w-4 h-4 bg-[#C5A059]/20 rounded-full flex items-center justify-center text-[9px] font-bold text-[#C5A059]">2</span>}
                                            </div>
                                        ))}

                                        <div className="mt-auto flex items-center gap-3 px-2 py-3 border-t border-white/10">
                                            <div className="w-8 h-8 rounded-full bg-[#C5A059]/20 flex items-center justify-center flex-shrink-0">
                                                <span className="text-[#C5A059] font-bold text-xs">JD</span>
                                            </div>
                                            <div className="min-w-0">
                                                <p className="text-white text-xs font-bold truncate">Jane Dela Cruz</p>
                                                <p className="text-white/35 text-[10px]">Active Profile</p>
                                            </div>
                                            <div className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0 ml-auto"></div>
                                        </div>
                                    </div>

                                    {/* Main Area */}
                                    <div className="flex-1 bg-[#F7F8FC] overflow-hidden flex flex-col">
                                        {/* Top Bar */}
                                        <div className="bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between">
                                            <div>
                                                <h3 className="font-heading font-bold text-[#0A2342] text-base">Browse Jobs</h3>
                                                <p className="text-gray-400 text-xs mt-0.5">14 open positions · Updated today</p>
                                            </div>
                                            <div className="flex gap-2">
                                                <div className="bg-gray-100 rounded-lg px-3 py-1.5 text-xs text-gray-500 flex items-center gap-1.5 cursor-default">
                                                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L13 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 017 21v-7.586L3.293 6.707A1 1 0 013 6V4z" /></svg>
                                                    All Categories
                                                </div>
                                                <div className="bg-gray-100 rounded-lg px-3 py-1.5 text-xs text-gray-500 cursor-default">Full-Time ▾</div>
                                            </div>
                                        </div>

                                        {/* Stats Strip */}
                                        <div className="px-6 pt-4 pb-3 flex gap-3">
                                            {[
                                                { label: 'Open Roles', value: '14', bg: 'bg-blue-50', border: 'border-blue-100', text: 'text-blue-600' },
                                                { label: 'Applied', value: '2', bg: 'bg-amber-50', border: 'border-amber-100', text: 'text-amber-600' },
                                                { label: 'Interviews', value: '1', bg: 'bg-emerald-50', border: 'border-emerald-100', text: 'text-emerald-600' },
                                                { label: 'Saved', value: '5', bg: 'bg-purple-50', border: 'border-purple-100', text: 'text-purple-600' },
                                            ].map((s, i) => (
                                                <div key={i} className={`${s.bg} border ${s.border} rounded-xl px-4 py-2.5 flex items-center gap-3`}>
                                                    <span className={`font-heading font-black text-xl ${s.text}`}>{s.value}</span>
                                                    <span className={`text-xs font-medium ${s.text} opacity-70`}>{s.label}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Job Listings */}
                                        <div className="flex-1 px-6 overflow-hidden space-y-2.5">
                                            {[
                                                { title: 'Real Estate Admin VA', cat: 'Real Estate', type: 'Full-Time · 40 hrs/wk', pay: '$5–7 / hr USD', badge: 'New', badgeBg: 'bg-emerald-100', badgeText: 'text-emerald-700', dot: 'bg-emerald-400', posted: '2h ago' },
                                                { title: 'E-Commerce Operations VA', cat: 'E-Commerce', type: 'Full-Time · 40 hrs/wk', pay: '$6–8 / hr USD', badge: 'Applied', badgeBg: 'bg-amber-100', badgeText: 'text-amber-700', dot: 'bg-amber-400', posted: '1d ago' },
                                                { title: 'Healthcare Admin VA', cat: 'Healthcare', type: 'Full-Time · 40 hrs/wk', pay: '$4–6 / hr USD', badge: 'Interview Scheduled', badgeBg: 'bg-blue-100', badgeText: 'text-blue-700', dot: 'bg-blue-400', posted: '3d ago' },
                                                { title: 'Digital Marketing VA', cat: 'Digital Agency', type: 'Full-Time · 40 hrs/wk', pay: '$5–7 / hr USD', badge: 'New', badgeBg: 'bg-emerald-100', badgeText: 'text-emerald-700', dot: 'bg-emerald-400', posted: '5h ago' },
                                            ].map((job, i) => (
                                                <div key={i} className="bg-white rounded-xl border border-gray-100 px-4 py-3.5 flex items-center gap-4 hover:border-[#C5A059]/40 hover:shadow-sm transition-all cursor-default">
                                                    <div className="w-9 h-9 rounded-xl bg-[#0A2342]/[0.06] flex items-center justify-center flex-shrink-0">
                                                        <span className="text-[#0A2342] font-black text-sm">★</span>
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="font-heading font-bold text-[#0A2342] text-sm leading-tight">{job.title}</p>
                                                        <div className="flex items-center gap-2 mt-0.5">
                                                            <span className="text-[10px] font-semibold text-gray-400 uppercase tracking-wide">{job.cat}</span>
                                                            <span className="text-gray-200">·</span>
                                                            <span className="text-[10px] text-gray-400">{job.type}</span>
                                                            <span className="text-gray-200">·</span>
                                                            <span className="text-[10px] font-bold text-gray-600">{job.pay}</span>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-3 flex-shrink-0">
                                                        <span className="text-[10px] text-gray-300">{job.posted}</span>
                                                        <span className={`${job.badgeBg} ${job.badgeText} text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5`}>
                                                            <span className={`w-1.5 h-1.5 rounded-full ${job.dot}`}></span>
                                                            {job.badge}
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Fade */}
                                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/80 to-transparent pointer-events-none rounded-b-2xl"></div>
                            </div>
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
                                        "Free to apply — no fees to join the platform"
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
                        <p className="font-heading italic text-white/30 text-sm mt-4">Free to apply. No fees to create your account.</p>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
};

export default ForEmployeesLanding;
