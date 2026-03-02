import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SurveyModal from '../components/SurveyModal';
import Hero from '../components/Hero';
import ScrollReveal from '../components/ScrollReveal';
import { useNavigate } from 'react-router-dom';
import { AlertCircle, Check, UserCheck, ShieldCheck, X, Quote, ChevronDown } from 'lucide-react';
import Button from '../components/Button';

const DigitalAgencies: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);

    const handleSurveyComplete = () => {
        closeSurvey();
        navigate('/booking');
    };

    const painPoints = [
        "$60k+ salary",
        "payroll taxes",
        "benefits",
        "recruiting time",
        "training"
    ];

    const roles = [
        {
            title: "Media Buyers",
            description: "Manage ad accounts across Meta, Google, TikTok, and more."
        },
        {
            title: "Video Editors",
            description: "Short-form content, ad creatives, YouTube editing, and social media clips."
        },
        {
            title: "Graphic Designers",
            description: "Ad creatives, landing pages, and branding assets."
        },
        {
            title: "Account Managers",
            description: "Handle client communication, updates, and reporting."
        },
        {
            title: "Appointment Setters",
            description: "Follow up with leads and book sales calls for your team."
        },
        {
            title: "Operations Assistants",
            description: "Manage CRM updates, reporting, SOPs, and daily tasks."
        }
    ];

    const processSteps = [
        {
            title: "Tell Us The Role",
            description: "Describe the position and responsibilities your agency needs."
        },
        {
            title: "We Recruit Candidates",
            description: "Our team sources and screens qualified professionals."
        },
        {
            title: "Meet Your Candidates",
            description: "You interview the finalists and choose who you want."
        },
        {
            title: "They Start Working",
            description: "Your new remote employee begins contributing immediately."
        }
    ];

    const faqs = [
        {
            question: "Are overseas employees reliable?",
            answer: "Yes. We recruit college-educated professionals with strong English and previous remote work experience."
        },
        {
            question: "What about time zones?",
            answer: "Many overseas professionals work U.S. hours or overlapping schedules."
        },
        {
            question: "Who manages the employee?",
            answer: "They work directly inside your agency just like a normal team member."
        },
        {
            question: "What if the hire doesn't work out?",
            answer: "We replace them for free or you don't pay."
        },
        {
            question: "How quickly can we hire someone?",
            answer: "Most agencies meet qualified candidates within a few days."
        }
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col font-body">
            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">
                {/* HERO SECTION */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Attention Agency Owners"
                        headline={
                            <>
                                Hire A-Players Overseas <span className="text-gold italic">For Just $10-15/hr</span>
                            </>
                        }
                        subheadline={
                            <>
                                College-educated, English-fluent specialists placed into the exact roles your agency needs, from delivery to account management. <span className="font-bold text-navy">And if you don't love them, it's free, guaranteed!</span>
                            </>
                        }
                    />
                </ScrollReveal>

                {/* PAIN SECTION */}
                <section className="py-20 md:py-32 bg-gray-50/50 px-4 border-t border-gray-100">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
                            <div className="lg:col-span-7">
                                <h2 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    WHY AGENCIES GET STUCK
                                </h2>
                                <h3 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                    Most Agencies Don't Have a Lead Problem.<br />
                                    <span className="text-gray-500">They Have a Capacity Problem.</span>
                                </h3>
                                <div className="border-l-4 border-gold pl-6 md:pl-8 py-2">
                                    <div className="font-body text-gray-700 text-lg md:text-xl leading-relaxed space-y-4">
                                        <p>At first the agency grows fast.</p>
                                        <p>You land a few clients, start getting results, and suddenly things take off.</p>
                                        <p>But then something happens.</p>
                                        <p className="font-bold text-navy text-2xl">You become the bottleneck.</p>
                                        <p>You are managing fulfillment, handling client communication, reviewing ads, answering questions, and trying to grow the business at the same time.</p>
                                        <p>Hiring locally sounds like the solution until you see the numbers.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="lg:col-span-5 w-full">
                                <div className="bg-white rounded-3xl p-8 shadow-xl shadow-navy/5 border border-gray-100 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                    <h3 className="font-heading font-bold text-navy text-2xl mb-6 relative z-10">
                                        A single U.S. employee can cost:
                                    </h3>
                                    <ul className="space-y-4 relative z-10">
                                        {painPoints.map((pain, idx) => (
                                            <li key={idx} className="flex items-start gap-4">
                                                <div className="mt-1 flex-shrink-0">
                                                    <span className="text-red-500 font-bold">•</span>
                                                </div>
                                                <span className="font-body text-gray-800 text-lg font-medium shadow-sm">
                                                    {pain}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="mt-8 relative z-10 pt-6 border-t border-gray-100">
                                        <p className="font-heading font-bold text-red-500 text-xl mb-3">Now your margins are gone.</p>
                                        <p className="text-gray-600 font-medium leading-relaxed">So most agency owners stay stuck doing work they should have delegated years ago.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ARBITRAGE SECTION */}
                <section className="py-20 md:py-32 bg-gray-50 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid lg:grid-cols-12 gap-16 items-center">
                            <div className="lg:col-span-7">
                                <h2 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    HOW SMART AGENCIES SCALE
                                </h2>
                                <h3 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                    The Agencies Scaling Fast Aren't Hiring Locally
                                </h3>
                                <div className="prose prose-lg text-gray-600 font-body mb-8">
                                    <p className="text-xl leading-relaxed mb-6 font-bold text-navy">
                                        They are building remote teams.
                                    </p>
                                    <p className="text-xl leading-relaxed mb-6">
                                        Instead of paying $60k–$90k for one employee, they hire highly capable overseas specialists for <span className="font-bold text-navy">$10–15/hour.</span>
                                    </p>
                                    <div className="my-8 p-8 bg-white border-l-4 border-gold rounded-r-2xl shadow-sm">
                                        <p className="font-heading font-bold text-navy text-xl mb-4">
                                            But finding good people overseas isn't easy.
                                        </p>
                                        <p className="text-gray-600 mb-4">You've probably heard the horror stories.</p>
                                        <ul className="mb-6 space-y-2 font-medium">
                                            <li className="flex items-center gap-2"><span className="text-red-500 font-bold">•</span> Bad communication</li>
                                            <li className="flex items-center gap-2"><span className="text-red-500 font-bold">•</span> Missed deadlines</li>
                                            <li className="flex items-center gap-2"><span className="text-red-500 font-bold">•</span> Poor quality work</li>
                                            <li className="flex items-center gap-2"><span className="text-red-500 font-bold">•</span> People disappearing</li>
                                        </ul>
                                        <p className="font-heading font-bold text-navy text-xl mb-2 mt-8">That is exactly why Five Star Assistants exists.</p>
                                        <p className="font-heading font-bold text-gold text-2xl">We remove the entire hiring risk.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100 lg:col-span-5 w-full">
                                <h3 className="font-heading text-2xl font-bold text-navy mb-8 pb-6 border-b border-gray-100">
                                    We handle:
                                </h3>
                                <ul className="space-y-6">
                                    {[
                                        "Recruiting",
                                        "Candidate screening",
                                        "Interviews",
                                        "Vetting",
                                        "Payroll",
                                        "Replacement if needed"
                                    ].map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-4 group">
                                            <div className="mt-1 flex-shrink-0">
                                                <span className="text-gold font-bold text-2xl">•</span>
                                            </div>
                                            <span className="font-body text-xl text-gray-700 font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 pt-6 border-t border-gray-100">
                                    <p className="font-heading font-bold text-navy text-lg leading-relaxed">You simply choose the candidate you want and they start working inside your agency.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ROLES SECTION */}
                <div id="roles-section">
                    <section className="py-20 md:py-32 bg-white px-4">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-16">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    ROLES WE PLACE FOR AGENCIES
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    The Exact Roles Agencies Need To Scale
                                </h2>
                                <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto">
                                    We place overseas specialists into the same positions agencies usually struggle to hire locally.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {roles.map((role, idx) => (
                                    <div key={idx} className="bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 p-8 rounded-2xl flex flex-col items-center text-center group cursor-default">
                                        <div className="w-16 h-16 bg-navy/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                                            <UserCheck className="text-navy group-hover:text-gold w-8 h-8 transition-colors" />
                                        </div>
                                        <h3 className="font-heading font-bold text-xl text-navy mb-3">{role.title}</h3>
                                        <p className="font-body text-gray-600 text-sm leading-relaxed">{role.description}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-16 text-center">
                                <p className="font-heading text-2xl md:text-3xl font-bold text-navy mb-4">These aren't basic virtual assistants.</p>
                                <p className="font-body text-xl text-gray-600">These are specialists trained in the roles agencies actually need.</p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* PROCESS SECTION */}
                <section className="py-20 md:py-32 bg-gray-50 px-4">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                HOW THE PROCESS WORKS
                            </h3>
                            <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                Hiring A Remote Specialist Is Simpler Than You Think
                            </h2>
                        </div>
                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-8 md:before:mx-auto before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
                            {processSteps.map((step, idx) => (
                                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                                    <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-white bg-navy text-white font-heading font-bold text-xl shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow md:mx-auto z-10 transition-all duration-300 group-hover:bg-gold group-hover:scale-110">
                                        {idx + 1}
                                    </div>
                                    <div className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] bg-white p-6 rounded-2xl border border-gray-100 shadow-sm group-hover:shadow-md transition-shadow">
                                        <h3 className="font-heading font-bold text-xl text-navy mb-2">Step {idx + 1} – {step.title}</h3>
                                        <p className="font-body text-gray-600 leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-16 text-center">
                            <p className="font-heading text-2xl md:text-3xl font-bold text-navy">No recruiting headaches. No endless interviews.</p>
                        </div>
                    </div>
                </section>

                {/* GUARANTEE SECTION */}
                <section className="py-20 bg-navy px-4 border-y-8 border-gold">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-pulse text-gold">
                            <ShieldCheck size={40} />
                        </div>
                        <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                            OUR ZERO-RISK GUARANTEE
                        </h3>
                        <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6 drop-shadow-md">
                            Hiring Overseas Shouldn't Feel Risky
                        </h2>
                        <p className="font-body text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            That is why we remove the risk completely.
                        </p>
                        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] p-8 md:p-12 mb-8 inline-block text-left relative min-w-full sm:min-w-[500px]">
                            <p className="font-body text-xl md:text-2xl text-blue-100 font-medium mb-8 text-center">
                                If the candidate we place isn't the right fit:
                            </p>
                            <ul className="space-y-4 mb-6">
                                <li className="font-heading font-bold text-2xl md:text-3xl text-gold flex items-center justify-center gap-3">
                                    <span className="text-white opacity-50">•</span> We replace them for free
                                </li>
                                <li className="font-body italic text-gray-400 text-center text-xl my-4">
                                    or
                                </li>
                                <li className="font-heading font-bold text-2xl md:text-3xl text-gold flex items-center justify-center gap-3">
                                    <span className="text-white opacity-50">•</span> You don't pay
                                </li>
                            </ul>
                            <p className="font-body text-xl text-white text-center italic mt-8 border-t border-white/10 pt-8 opacity-80">Simple as that.</p>
                        </div>
                        <p className="font-heading text-xl md:text-2xl text-white font-bold tracking-wider mt-4">
                            We only win when you are happy with the hire.
                        </p>
                    </div>
                </section>

                {/* COST COMPARISON SECTION */}
                <section className="py-20 md:py-32 bg-white px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                COST COMPARISON
                            </h3>
                            <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                Hiring Locally vs Hiring Through Five Star Assistants
                            </h2>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                            {/* Local Hire Column */}
                            <div className="bg-gray-50 border border-gray-200 rounded-[2rem] p-8 md:p-12 shadow-sm">
                                <h3 className="font-heading text-2xl font-bold text-gray-500 mb-8 pb-4 border-b border-gray-200 text-center">
                                    Local Hire
                                </h3>
                                <ul className="space-y-6">
                                    {[
                                        "$60k–$90k salary",
                                        "Payroll taxes",
                                        "Benefits",
                                        "Office space",
                                        "Recruiting time",
                                        "Training time"
                                    ].map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <X className="text-red-400 w-6 h-6 flex-shrink-0 mt-0.5" />
                                            <span className="font-body text-lg text-gray-600 font-medium">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            {/* FSA Column */}
                            <div className="bg-navy border border-navy rounded-[2rem] p-8 md:p-12 shadow-2xl relative overflow-hidden transform md:-translate-y-4">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0"></div>
                                <h3 className="relative z-10 font-heading text-2xl font-bold text-white mb-8 pb-4 border-b border-white/20 text-center flex items-center justify-center gap-3">
                                    <span className="bg-gold text-navy text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full">Winner</span>
                                    Five Star Assistants
                                </h3>
                                <ul className="space-y-6 relative z-10">
                                    {[
                                        "$10–15/hour specialists",
                                        "Pre-vetted candidates",
                                        "No recruiting process",
                                        "Flexible scaling",
                                        "Replace anytime if needed"
                                    ].map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <Check className="text-gold w-6 h-6 flex-shrink-0 mt-0.5 drop-shadow-sm" strokeWidth={3} />
                                            <span className="font-body text-lg text-white font-medium drop-shadow-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="mt-16 text-center">
                            <p className="font-heading text-2xl md:text-3xl font-bold text-navy max-w-3xl mx-auto">
                                Many agencies build entire teams for the cost of one local employee.
                            </p>
                        </div>
                    </div>
                </section>

                {/* CASE STUDY VIDEO SECTION */}
                <section className="py-20 bg-gray-50 px-4 border-t border-gray-100">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="mb-12">
                            <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                FEATURED CASE STUDY
                            </h3>
                            <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy">
                                BuilderProject Hires Entire Fulfillment Team
                            </h2>
                        </div>

                        <div className="relative w-full aspect-video rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-navy group">
                            {/* Decorative glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-gold/30 via-navy/10 to-gold/30 rounded-[2.5rem] blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>

                            <div className="relative w-full h-full rounded-2xl md:rounded-3xl overflow-hidden z-10 bg-black">
                                <video
                                    src="https://assets.cdn.filesafe.space/Vfs1lM3WjyR7NO8AgZeL/media/69a57652b617a7289a80c2f4.mp4"
                                    className="w-full h-full object-contain"
                                    controls
                                    playsInline
                                    preload="metadata"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        </div>

                        {/* CASE STUDY WRITTEN CONTENT */}
                        <div className="mt-16 text-left max-w-3xl mx-auto space-y-12">

                            {/* Client Overview */}
                            <div className="space-y-4">
                                <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy border-b border-gray-200 pb-2">Client Overview</h3>
                                <div className="font-body text-lg text-gray-700 leading-relaxed space-y-4">
                                    <p>
                                        Christian is the founder of a marketing agency that helps custom home builders and remodeling companies generate more projects through structured marketing systems.
                                    </p>
                                    <p>
                                        His company builds marketing infrastructure for builders including advertising campaigns, backend systems, and content that helps construction companies consistently land new jobs and scale their businesses.
                                    </p>
                                    <p>
                                        After several years of operating the company, Christian reached a point where growth was being limited by one problem.
                                    </p>
                                    <p className="font-bold text-navy text-xl">
                                        He was doing too much himself.
                                    </p>
                                </div>
                            </div>

                            {/* The Challenge */}
                            <div className="space-y-4">
                                <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy border-b border-gray-200 pb-2">The Challenge</h3>
                                <div className="font-body text-lg text-gray-700 leading-relaxed space-y-4">
                                    <p>
                                        Like many growing businesses, Christian had reached the stage where he needed to hire help, but hiring locally created several major obstacles.
                                    </p>
                                    <p>
                                        Local talent was expensive, and the administrative burden of hiring employees added even more friction.
                                    </p>
                                    <blockquote className="border-l-4 border-gold bg-gold/5 p-6 rounded-r-xl italic font-heading text-xl text-navy my-6 shadow-sm">
                                        "The biggest issue for me was doing everything myself. Hiring locally was really expensive. I was looking at paying $30 an hour or more for anyone decent."
                                    </blockquote>
                                    <p>
                                        Beyond the cost, hiring locally meant dealing with payroll systems, W-2 employment, and potentially needing physical office space.
                                    </p>
                                    <p>
                                        Because of these challenges, Christian continued handling most of the work personally. This included tasks that should have been delegated, such as editing content and managing parts of the advertising process.
                                    </p>
                                    <blockquote className="border-l-4 border-gold bg-gold/5 p-6 rounded-r-xl italic font-heading text-xl text-navy my-6 shadow-sm">
                                        "I pretty much had to learn how to do everything myself."
                                    </blockquote>
                                    <p className="font-semibold text-navy">
                                        This limited how quickly the company could grow.
                                    </p>
                                </div>
                            </div>

                            {/* The Solution */}
                            <div className="space-y-4">
                                <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy border-b border-gray-200 pb-2">The Solution</h3>
                                <div className="font-body text-lg text-gray-700 leading-relaxed space-y-4">
                                    <p>
                                        Christian turned to Five Star Assistants to build a small overseas team that could take over key operational roles inside the business.
                                    </p>
                                    <p className="font-bold text-navy">Three positions were filled:</p>

                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8">
                                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                            <h4 className="font-heading font-bold text-gold mb-2">Video Editor</h4>
                                            <p className="text-sm font-body text-gray-600">Responsible for editing company content and client advertising creatives.</p>
                                        </div>
                                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                            <h4 className="font-heading font-bold text-gold mb-2">Media Buyer</h4>
                                            <p className="text-sm font-body text-gray-600">Handles ad account setup, advertising campaigns, and backend marketing systems.</p>
                                        </div>
                                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                            <h4 className="font-heading font-bold text-gold mb-2">Copywriter</h4>
                                            <p className="text-sm font-body text-gray-600">Writes advertising copy and marketing messaging for campaigns.</p>
                                        </div>
                                    </div>

                                    <p>
                                        With these roles filled, the company suddenly had the operational capacity it needed to support more clients.
                                    </p>
                                </div>
                            </div>

                            {/* Why Five Star Assistants */}
                            <div className="space-y-4">
                                <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy border-b border-gray-200 pb-2">Why Five Star Assistants</h3>
                                <div className="font-body text-lg text-gray-700 leading-relaxed space-y-4">
                                    <p>
                                        Christian was already aware that overseas talent existed. The challenge was finding the right people.
                                    </p>
                                    <blockquote className="border-l-4 border-gold bg-gold/5 p-6 rounded-r-xl italic font-heading text-xl text-navy my-6 shadow-sm">
                                        "I knew overseas hiring existed, but finding someone good takes forever. I didn't know where to find quality people or how to manage the process."
                                    </blockquote>
                                    <p>
                                        Rather than spending months recruiting and screening candidates himself, he chose to work with Five Star Assistants.
                                    </p>
                                    <blockquote className="border-l-4 border-gold bg-gold/5 p-6 rounded-r-xl italic font-heading text-xl text-navy my-6 shadow-sm">
                                        "You guys seemed like you had the process figured out, so I decided to give it a shot."
                                    </blockquote>
                                </div>
                            </div>

                            {/* The Results */}
                            <div className="space-y-4">
                                <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy border-b border-gray-200 pb-2">The Results</h3>
                                <div className="font-body text-lg text-gray-700 leading-relaxed space-y-4">
                                    <p>
                                        After building the team, the impact on the business was immediate.
                                    </p>
                                    <p>
                                        The new hires removed major operational bottlenecks and allowed Christian to shift into a leadership role.
                                    </p>
                                    <blockquote className="border-l-4 border-gold bg-gold/5 p-6 rounded-r-xl italic font-heading text-xl text-navy my-6 shadow-sm">
                                        "Now I can step more into a management role and focus on strategic decisions instead of doing everything myself."
                                    </blockquote>
                                    <p>
                                        Instead of spending time editing content or managing campaigns, he can now focus on activities that actually grow the business. These include:
                                    </p>

                                    <ul className="space-y-3 font-medium bg-white p-6 rounded-2xl border border-gray-100 shadow-sm my-6 inline-block pr-12">
                                        <li className="flex items-center gap-3"><span className="text-gold font-bold text-2xl">•</span> Sales and client acquisition</li>
                                        <li className="flex items-center gap-3"><span className="text-gold font-bold text-2xl">•</span> Strategic planning</li>
                                        <li className="flex items-center gap-3"><span className="text-gold font-bold text-2xl">•</span> Content creation for the company</li>
                                        <li className="flex items-center gap-3"><span className="text-gold font-bold text-2xl">•</span> Scaling operations</li>
                                    </ul>

                                    <p>
                                        With operational work delegated to his team, the company has been able to sign more clients and expand faster.
                                    </p>
                                    <blockquote className="border-l-4 border-gold bg-gold/5 p-6 rounded-r-xl italic font-heading text-xl text-navy my-6 shadow-sm">
                                        "We've been able to sign more clients because I know the work is being taken care of."
                                    </blockquote>
                                </div>
                            </div>

                            {/* Client Recommendation */}
                            <div className="space-y-4">
                                <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy border-b border-gray-200 pb-2">Client Recommendation</h3>
                                <div className="font-body text-lg text-gray-700 leading-relaxed space-y-4">
                                    <p>
                                        Christian credits one key factor for making the decision easy: the risk-free structure of the service.
                                    </p>
                                    <blockquote className="border-l-4 border-gold bg-gold/5 p-6 rounded-r-xl italic font-heading text-xl text-navy my-6 shadow-sm">
                                        "One of the coolest things is the replacement guarantee and the money-back guarantee. It takes away the risk."
                                    </blockquote>
                                    <p>
                                        For businesses that are unsure about hiring overseas talent, his advice is simple.
                                    </p>
                                    <blockquote className="border-l-4 border-gold bg-gold/5 p-6 rounded-r-xl italic font-heading text-xl text-navy my-6 shadow-sm">
                                        "I would just say go for it. There's really no reason not to at least give it a try."
                                    </blockquote>
                                </div>
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-navy p-8 md:p-12 rounded-3xl shadow-xl mt-12 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0 pointer-events-none"></div>
                                <h3 className="relative z-10 font-heading text-2xl md:text-3xl font-bold text-white border-b border-white/20 pb-4 mb-8">Key Takeaways</h3>

                                <p className="font-body text-blue-100 text-lg mb-6 relative z-10">After hiring through Five Star Assistants, Christian was able to:</p>

                                <ul className="space-y-4 relative z-10 mb-8">
                                    <li className="flex items-start gap-4">
                                        <Check className="text-gold w-6 h-6 flex-shrink-0 mt-0.5" strokeWidth={3} />
                                        <span className="font-body text-lg text-white font-medium">Build a team without hiring expensive local employees</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <Check className="text-gold w-6 h-6 flex-shrink-0 mt-0.5" strokeWidth={3} />
                                        <span className="font-body text-lg text-white font-medium">Delegate operational work like editing, ads, and copywriting</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <Check className="text-gold w-6 h-6 flex-shrink-0 mt-0.5" strokeWidth={3} />
                                        <span className="font-body text-lg text-white font-medium">Focus on sales and business strategy</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <Check className="text-gold w-6 h-6 flex-shrink-0 mt-0.5" strokeWidth={3} />
                                        <span className="font-body text-lg text-white font-medium">Increase the company's ability to serve more clients</span>
                                    </li>
                                </ul>

                                <div className="relative z-10 pt-6 border-t border-white/20">
                                    <p className="font-heading font-bold text-gold text-xl md:text-2xl italic tracking-wide">
                                        By leveraging overseas talent, he transformed from doing everything himself into leading a growing team.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* TESTIMONIAL SECTION */}
                <section className="py-20 md:py-32 bg-gray-50 px-4">
                    <div className="max-w-4xl mx-auto text-center relative">
                        <Quote className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-10 w-24 h-24 text-gold/20 z-0" />
                        <div className="relative z-10 bg-white p-10 md:p-16 rounded-[3rem] shadow-xl border border-gray-100">
                            <p className="font-heading text-2xl md:text-4xl text-navy font-bold italic leading-tight mb-8">
                                "An agency owner hired a media buyer through us and reduced workload by 40% while simultaneously scaling their overall ad spend."
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

                {/* FAQ SECTION */}
                <section className="py-20 md:py-32 bg-white px-4 border-t border-gray-100">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                FREQUENTLY ASKED QUESTIONS
                            </h3>
                            <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                Frequently Asked Questions
                            </h2>
                        </div>
                        <div className="space-y-4">
                            {faqs.map((faq, idx) => (
                                <div
                                    key={idx}
                                    className={`border-b border-gray-200 overflow-hidden transition-all duration-300 ${openFaqIndex === idx ? 'bg-gray-50/50' : 'bg-transparent'}`}
                                >
                                    <button
                                        className="w-full flex items-center justify-between py-6 px-4 md:px-6 text-left focus:outline-none group"
                                        onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                                    >
                                        <span className={`font-heading font-bold text-xl md:text-2xl transition-colors ${openFaqIndex === idx ? 'text-gold' : 'text-navy group-hover:text-gold/80'}`}>
                                            {faq.question}
                                        </span>
                                        <ChevronDown
                                            className={`flex-shrink-0 text-navy transition-transform duration-300 ${openFaqIndex === idx ? 'rotate-180 text-gold' : ''}`}
                                            size={24}
                                        />
                                    </button>
                                    <div
                                        className={`transition-all duration-300 ease-in-out ${openFaqIndex === idx ? 'max-h-[500px] opacity-100 pb-8 px-4 md:px-6' : 'max-h-0 opacity-0 overflow-hidden px-4 md:px-6'}`}
                                    >
                                        <p className="font-body text-lg text-gray-600 leading-relaxed">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL PUSH SECTION */}
                <section className="bg-navy py-24 px-4 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 z-0 hidden md:block"></div>
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 z-0 hidden md:block"></div>

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-6">
                            FINAL CTA
                        </h3>
                        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 drop-shadow-md leading-tight">
                            Your Agency Doesn't Need More Hustle.<br />
                            <span className="text-gold">It Needs More Capacity.</span>
                        </h2>

                        <div className="font-subheading text-blue-100 text-xl md:text-2xl tracking-wide max-w-3xl mx-auto mb-16 opacity-90 space-y-6">
                            <p>The fastest growing agencies aren't doing everything themselves.</p>
                            <p>They are building teams.</p>
                            <p>If you want to scale without blowing up your payroll, hiring overseas talent is the smartest move you can make.</p>
                            <p className="font-bold text-white">Tell us the role you need and we'll introduce you to qualified candidates.</p>
                        </div>

                        <div className="flex flex-col items-center">
                            <Button
                                onClick={openSurvey}
                                variant="primary"
                                className="w-full sm:w-auto min-w-[320px] text-lg shadow-[0_0_40px_rgba(255,215,0,0.3)] hover:shadow-[0_0_60px_rgba(255,215,0,0.4)] animate-pulse hover:animate-none group relative overflow-hidden"
                            >
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                                <span className="relative z-10">Find Your Remote Employee</span>
                            </Button>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />

            <SurveyModal
                isOpen={isSurveyOpen}
                onClose={closeSurvey}
                onComplete={handleSurveyComplete}
                source="Digital Agencies"
            />
        </div>
    );
};

export default DigitalAgencies;
