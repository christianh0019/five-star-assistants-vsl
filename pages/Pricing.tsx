import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SurveyModal from '../components/SurveyModal';
import PricingCalculator from '../components/PricingCalculator';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck, Check, X } from 'lucide-react';
import Button from '../components/Button';
import ScrollReveal from '../components/ScrollReveal';

const Pricing: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);

    const handleSurveyComplete = () => {
        closeSurvey();
        navigate('/booking');
    };

    return (
        <div className="min-h-screen bg-white flex flex-col font-body">
            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* HERO SECTION: The Smart Way to Build a Team */}
                <section className="relative pt-36 md:pt-48 pb-20 px-4 md:px-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-white">
                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="max-w-[900px] mx-auto text-center flex flex-col items-center mb-0">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 text-navy font-body text-sm font-semibold mb-6 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                                Our Pricing
                            </div>
                            <h1 className="font-heading text-navy text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 drop-shadow-sm">
                                The Smart Way to Build a Team
                            </h1>
                            <p className="font-subheading text-navy/80 text-lg md:text-xl font-medium tracking-wider mb-16 max-w-2xl mx-auto">
                                Five Star Assistants vs Traditional Hiring
                            </p>
                        </div>

                        <div className="overflow-x-auto pb-8">
                            <table className="w-full min-w-[800px] border-collapse bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
                                <thead>
                                    <tr>
                                        <th className="py-6 px-8 bg-gray-50 text-left font-heading text-xl text-gray-500 border-b border-gray-200 w-1/2">
                                            Traditional Hiring
                                        </th>
                                        <th className="py-6 px-8 bg-navy text-left font-heading text-xl text-white border-b border-navy w-1/2 relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-48 h-48 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                                            <span className="relative z-10">Five Star Assistants</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ["Post job ads and search for candidates", "We recruit and source candidates for you"],
                                        ["Review hundreds of resumes", "We pre-vet top candidates"],
                                        ["Conduct 30–50 interviews", "Meet only the best finalists"],
                                        ["Hiring process takes months", "Candidates ready within days"],
                                        ["$60K–$90K annual salary", "$6–$15/hour"],
                                        ["Employer payroll taxes", "Payroll handled for you"],
                                        ["Benefits and HR overhead", "No benefits required"],
                                        ["No visibility into productivity", "Screen monitoring and productivity tracking"],
                                        ["Hard to measure work output", "Daily productivity reports"],
                                        ["Hiring risk if it fails", "Free replacement guarantee"],
                                        ["Office space required", "Fully remote workforce"]
                                    ].map((row, idx) => (
                                        <tr key={idx} className="group hover:bg-gray-50/50 transition-colors">
                                            <td className="py-5 px-8 border-b border-gray-100 flex items-center gap-4 text-gray-600 font-medium">
                                                <X className="text-gray-400 w-5 h-5 flex-shrink-0" />
                                                <span>{row[0]}</span>
                                            </td>
                                            <td className="py-5 px-8 border-b border-gray-100 bg-navy/5 group-hover:bg-navy/10 transition-colors">
                                                <div className="flex items-center gap-4 text-navy font-bold">
                                                    <Check className="text-gold w-5 h-5 flex-shrink-0" strokeWidth={3} />
                                                    <span>{row[1]}</span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-16 bg-navy text-white rounded-[2rem] p-10 md:p-14 text-center max-w-4xl mx-auto shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0"></div>
                            <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-6 relative z-10">
                                Bottom Line
                            </h3>
                            <p className="font-heading text-2xl md:text-3xl font-bold mb-6 relative z-10 text-gray-300">
                                Hiring a single employee locally can cost $70K–$120K per year.
                            </p>
                            <p className="font-heading text-3xl md:text-4xl font-bold text-white relative z-10 leading-tight">
                                With Five Star Assistants, many businesses build an entire remote team for the cost of one traditional hire.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SECTION 3: What We Actually Handle For You */}
                <section className="py-20 md:py-32 bg-gray-50 px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16 md:mb-24">
                            <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                WHAT WE DO
                            </h3>
                            <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                What We Actually Handle For You
                            </h2>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Recruiting & Talent Sourcing",
                                    desc: "We actively recruit overseas professionals instead of waiting for random applicants.\n\nOur team sources college-educated, English-fluent candidates with experience working remotely in roles like marketing, operations, customer support, and administration.\n\nYou skip the job boards, resume sorting, and endless applicant filtering.\n\nWe bring you only the strongest candidates."
                                },
                                {
                                    title: "Candidate Vetting & Interviews",
                                    desc: "Before you ever meet a candidate, they go through our internal screening process.\n\nWe evaluate:\n\n• communication skills\n• professional experience\n• remote work readiness\n• technical ability\n\nBy the time you interview them, you're meeting pre-qualified finalists, not random applicants."
                                },
                                {
                                    title: "Payroll & International Payments",
                                    desc: "Hiring overseas employees normally requires navigating complicated international payments and compliance.\n\nWe handle the payroll infrastructure so you don't have to deal with:\n\n• international payment logistics\n• currency issues\n• contractor management\n\nYou simply pay one predictable rate for your assistant's time."
                                },
                                {
                                    title: "Productivity Monitoring",
                                    desc: "Every assistant works through productivity tracking software that records:\n\n• active work time\n• screen activity\n• time spent on tasks\n\nThis ensures you have full visibility into how your assistant spends their work hours.\n\nNo guessing. No blind trust."
                                },
                                {
                                    title: "Daily Productivity Reports",
                                    desc: "You receive detailed reports showing:\n\n• hours worked\n• productivity metrics\n• activity summaries\n\nThese reports ensure you are only paying for real work being completed, not idle time.\n\nMost businesses never get this level of visibility with traditional employees."
                                },
                                {
                                    title: "Ongoing Support & Replacement Guarantee",
                                    desc: "If your assistant isn't the right fit, we replace them.\n\nNo extra cost. No restarting the hiring process.\n\nOur team continues supporting the relationship so your remote employee stays productive and aligned with your business needs.\n\nYou get the flexibility of remote talent without the risk of hiring mistakes."
                                }
                            ].map((feature, idx) => (
                                <div key={idx} className="bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
                                    {/* Subtle gradient hover effect */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="w-16 h-16 rounded-2xl bg-navy/5 flex items-center justify-center mb-8 group-hover:bg-gold/10 group-hover:scale-110 transition-all duration-300 transform-gpu shrink-0">
                                        <Check className="text-navy group-hover:text-gold transition-colors" size={28} />
                                    </div>
                                    <h3 className="font-heading font-bold text-2xl text-navy mb-6 leading-tight relative z-10">{feature.title}</h3>
                                    <div className="font-body text-gray-600 text-lg leading-relaxed flex-grow space-y-4 relative z-10">
                                        {feature.desc.split('\n\n').map((paragraph, pIdx) => {
                                            if (paragraph.startsWith('•')) {
                                                // Handle bulleted lists specifically
                                                return (
                                                    <ul key={pIdx} className="space-y-2 my-6">
                                                        {paragraph.split('\n').map((item, iIdx) => (
                                                            <li key={iIdx} className="flex items-start gap-3">
                                                                <span className="text-gold font-bold mt-0.5">•</span>
                                                                <span className="font-medium text-gray-700">{item.replace('• ', '')}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                );
                                            }
                                            return <p key={pIdx}>{paragraph}</p>;
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* SECTION 4: Simple Pricing */}
                <section className="py-20 md:py-32 bg-white px-4 border-t border-gray-100">
                    <div className="max-w-4xl mx-auto">
                        <div className="text-center mb-16">
                            <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                TRANSPARENT PRICING
                            </h3>
                            <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                Simple Pricing
                            </h2>
                            <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto mt-6">
                                Unlike traditional hiring where costs appear everywhere, our pricing is straightforward.
                            </p>
                        </div>

                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-8 md:before:mx-auto before:-translate-x-px md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">

                            {/* Step 1 */}
                            <div className="relative flex items-center justify-between md:justify-normal group">
                                <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-white bg-navy text-white font-heading font-bold text-xl shrink-0 md:order-1 md:-translate-x-1/2 shadow-lg md:mx-auto z-10 transition-all duration-300 group-hover:bg-gold group-hover:scale-110">
                                    1
                                </div>
                                <div className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] bg-white p-8 md:p-10 rounded-[2rem] border border-gray-100 shadow-sm group-hover:shadow-xl transition-all relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-full blur-3xl"></div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-2">Step 1</h3>
                                    <h4 className="font-heading text-3xl font-bold text-navy mb-6">Placement Fee</h4>
                                    <p className="text-gray-600 mb-6 font-medium text-lg leading-relaxed">We recruit, vet, and present qualified candidates. Once you hire your chosen candidate, there is a one-time placement fee.</p>
                                    <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-2">
                                        <p className="font-bold text-navy mb-4">This covers:</p>
                                        <ul className="space-y-3">
                                            {["recruiting", "interviews", "candidate vetting", "onboarding"].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                                    <span className="text-gold font-bold text-xl">•</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Step 2 */}
                            <div className="relative flex items-center justify-between md:justify-normal md:flex-row-reverse group">
                                <div className="flex items-center justify-center w-16 h-16 rounded-full border-4 border-navy bg-gold text-navy font-heading font-bold text-xl shrink-0 md:order-1 md:translate-x-1/2 shadow-lg md:mx-auto z-10 transition-all duration-300 group-hover:scale-110">
                                    2
                                </div>
                                <div className="w-[calc(100%-5rem)] md:w-[calc(50%-3rem)] bg-navy p-8 md:p-10 rounded-[2rem] shadow-xl group-hover:shadow-2xl transition-all relative overflow-hidden text-left">
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
                                    <div className="relative z-10">
                                        <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-2">Step 2</h3>
                                        <h4 className="font-heading text-3xl font-bold text-white mb-6">Remote Employee Pay</h4>
                                        <p className="text-gray-300 mb-6 text-lg leading-relaxed">You pay your remote employee based on their hourly rate.</p>
                                        <p className="text-white font-medium mb-3 text-lg">Most roles fall between:</p>
                                        <p className="font-heading text-4xl font-bold text-gold mb-4">$6–$15 per hour</p>
                                        <p className="text-gray-400 text-sm mb-8">Depending on the role and experience level.</p>
                                    </div>
                                    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 relative z-10">
                                        <ul className="space-y-4">
                                            {[
                                                "No payroll taxes.",
                                                "No benefits.",
                                                "No recruiting headaches."
                                            ].map((item, i) => (
                                                <li key={i} className="flex items-center gap-3 text-white font-bold text-lg">
                                                    <span className="text-gold flex-shrink-0">✖</span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>



                {/* SECTION 5: Pricing Calculator */}
                <PricingCalculator />

                {/* SECTION 6: Zero Risk Guarantee */}
                <section className="py-24 md:py-32 bg-navy px-4 border-y-[12px] border-gold relative overflow-hidden">
                    {/* Background glows */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/3 z-0 pointer-events-none"></div>

                    <div className="max-w-5xl mx-auto relative z-10">
                        <div className="flex flex-col items-center text-center">



                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 border border-white/20 text-white font-heading text-sm font-bold tracking-widest uppercase mb-6 shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                                OUR GUARANTEE
                            </div>

                            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                                Zero Risk Guarantee
                            </h2>

                            <p className="font-body text-xl text-blue-100 max-w-2xl mx-auto font-bold mb-16">
                                Hiring Shouldn't Be a Gamble.
                            </p>



                            <div className="w-full max-w-4xl bg-white/5 backdrop-blur-md border border-white/10 rounded-[3rem] p-10 md:p-16 shadow-2xl relative overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

                                <p className="font-heading text-2xl md:text-3xl text-gray-300 font-bold mb-10 text-center relative z-10">
                                    If the candidate we place isn't the right fit:
                                </p>

                                <div className="grid md:grid-cols-2 gap-8 md:gap-12 relative z-10">
                                    <div className="flex flex-col items-center justify-center text-center p-8 bg-black/20 rounded-3xl border border-white/5">
                                        <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-6">
                                            <span className="text-gold text-3xl">1</span>
                                        </div>
                                        <span className="font-heading font-bold text-3xl text-white">We replace them for free</span>
                                    </div>

                                    <div className="hidden md:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-navy rounded-full border border-white/10 items-center justify-center font-heading font-black text-gold italic z-20">
                                        OR
                                    </div>

                                    <div className="flex flex-col items-center justify-center text-center p-8 bg-black/20 rounded-3xl border border-white/5">
                                        <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mb-6">
                                            <span className="text-red-400 text-3xl">2</span>
                                        </div>
                                        <span className="font-heading font-bold text-3xl text-white">You don't pay</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 7: Final CTA */}
                <section className="bg-white py-32 px-4 border-t border-gray-100">
                    <div className="max-w-5xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-navy/5 border border-navy/10 text-navy font-heading text-sm font-bold tracking-widest uppercase mb-6 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                            READY TO START?
                        </div>
                        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
                            Build Your Team Without the<br />
                            <span className="text-gold">Hiring Headache</span>
                        </h2>

                        <div className="max-w-3xl mx-auto mb-16">
                            <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto mb-16 font-bold">Tell us the role you want to fill and we'll introduce you to qualified candidates.</p>

                            <ul className="grid md:grid-cols-3 gap-6 font-bold text-navy text-xl justify-center max-w-3xl mx-auto">
                                <li className="bg-gray-50 border border-gray-100 p-6 rounded-2xl flex items-center justify-center gap-3">
                                    <X className="text-red-500 w-6 h-6" /> <span className="opacity-80">No</span> recruiting process.
                                </li>
                                <li className="bg-gray-50 border border-gray-100 p-6 rounded-2xl flex items-center justify-center gap-3">
                                    <X className="text-red-500 w-6 h-6" /> <span className="opacity-80">No</span> payroll complexity.
                                </li>
                                <li className="bg-gray-50 border border-gray-100 p-6 rounded-2xl flex items-center justify-center gap-3">
                                    <X className="text-red-500 w-6 h-6" /> <span className="opacity-80">No</span> hiring risk.
                                </li>
                            </ul>

                            <p className="font-heading font-bold text-navy text-3xl mt-16 pb-8 border-b border-gray-100">
                                Just talented professionals ready to work.
                            </p>
                        </div>

                        <div className="flex flex-col items-center">
                            <Button
                                onClick={openSurvey}
                                variant="primary"
                                className="w-full sm:w-auto min-w-[360px] text-xl shadow-[0_0_40px_rgba(255,215,0,0.3)] hover:shadow-[0_0_60px_rgba(255,215,0,0.4)] animate-pulse hover:animate-none group relative overflow-hidden py-5"
                            >
                                <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer"></div>
                                <span className="relative z-10 font-bold tracking-wide">Find Your Remote Employee</span>
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
                source="Pricing"
            />
        </div>
    );
};

export default Pricing;
