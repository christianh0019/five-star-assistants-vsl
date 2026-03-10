import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import EmployeeApplicationModal from '../components/EmployeeApplicationModal';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { Briefcase, Globe, ShieldCheck, TrendingUp, CheckCircle } from 'lucide-react';

const ForEmployeesLanding: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);

    // This will be passed to EmployeeApplicationModal to handle redirect
    const handleSurveyComplete = () => {
        closeSurvey();
        navigate('/thank-you'); // Consider sending them to a different thank you page later
    };

    return (
        <div className="min-h-screen bg-navy flex flex-col font-body text-white selection:bg-gold/30 selection:text-white">
            <Navbar onOpenSurvey={openSurvey} hideMenu />

            <main className="flex-grow">
                {/* HERO SECTION */}
                <section className="relative pt-36 md:pt-48 pb-24 px-4 md:px-8 overflow-hidden">
                    {/* Background Accents */}
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none"></div>

                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="max-w-[900px] mx-auto text-center flex flex-col items-center">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white font-heading text-sm font-bold tracking-widest uppercase mb-8 shadow-sm backdrop-blur-sm">
                                <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                                Global Talent Network
                            </div>

                            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-8">
                                Find High-Paying <span className="text-gold italic">US Remote Work</span>
                            </h1>

                            <p className="font-body text-gray-300 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed">
                                We match top-tier global professionals with growing United States businesses looking for reliable, long-term remote team members.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                                <Button
                                    onClick={openSurvey}
                                    variant="primary"
                                    className="min-w-[280px] text-lg py-4 shadow-[0_0_30px_rgba(255,215,0,0.2)] hover:shadow-[0_0_50px_rgba(255,215,0,0.4)] hover:scale-105 transition-all text-navy"
                                >
                                    Apply To Join Our Network
                                </Button>
                            </div>
                            <p className="font-heading italic text-gray-400 text-sm mt-6">
                                Free to apply. Zero placement fees for candidates.
                            </p>
                        </div>
                    </div>
                </section>

                {/* HOW IT WORKS SECTION */}
                <section className="py-24 bg-navy-light relative border-t border-white/5 px-4 md:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
                                How The Placement Process Works
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                We handle the hard part of finding high-quality US clients so you can focus on doing great work.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-4 gap-8 relative">
                            {/* Connecting Line (Desktop) */}
                            <div className="hidden md:block absolute top-[45px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent"></div>

                            {[
                                {
                                    step: "01",
                                    title: "Apply Online",
                                    desc: "Submit your resume and details. We look for strong communication skills and proven experience."
                                },
                                {
                                    step: "02",
                                    title: "Internal Vetting",
                                    desc: "Pass our initial screening, skill assessments, and video interview process to join our active network."
                                },
                                {
                                    step: "03",
                                    title: "Client Matching",
                                    desc: "When a US business needs your exact skillset, we introduce you directly to the business owner."
                                },
                                {
                                    step: "04",
                                    title: "Get Hired",
                                    desc: "Interview directly with the client. If it's a fit, you get placed in a long-term, stable role."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="relative z-10 flex flex-col items-center text-center group">
                                    <div className="w-[90px] h-[90px] rounded-full bg-navy border-2 border-gold/30 flex items-center justify-center mb-6 shadow-xl group-hover:scale-110 group-hover:border-gold group-hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] transition-all duration-300">
                                        <span className="font-heading font-black text-3xl text-gold">{item.step}</span>
                                    </div>
                                    <h3 className="font-heading text-2xl font-bold text-white mb-4">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* WHY JOIN US SECTION */}
                <section className="py-24 bg-navy relative border-t border-white/5 px-4 md:px-8">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    Why Work With Us
                                </h3>
                                <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                                    Better Clients. <br />
                                    <span className="text-gray-400">Stable Income.</span>
                                </h2>
                                <p className="text-xl text-gray-300 mb-10 leading-relaxed">
                                    Stop fighting for low-paying gigs on crowded freelance platforms. We build direct relationships with growing US businesses that need long-term, dedicated team members.
                                </p>

                                <ul className="space-y-6">
                                    {[
                                        "Long-term, full-time positions (not short gigs)",
                                        "Direct placement with verified US business owners",
                                        "Competitive pay rates based on your experience",
                                        "No agency fees taken directly from your agreed hourly rate",
                                        "Consistent pay schedules"
                                    ].map((benefit, idx) => (
                                        <li key={idx} className="flex items-start gap-4">
                                            <CheckCircle className="text-gold w-6 h-6 shrink-0 mt-0.5" />
                                            <span className="text-lg text-gray-200">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors">
                                    <Globe className="text-gold w-10 h-10 mb-6" />
                                    <h4 className="font-heading text-xl font-bold text-white mb-2">100% Remote</h4>
                                    <p className="text-gray-400">Work from anywhere. Our clients value output over physical location.</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors sm:mt-8">
                                    <Briefcase className="text-gold w-10 h-10 mb-6" />
                                    <h4 className="font-heading text-xl font-bold text-white mb-2">Career Growth</h4>
                                    <p className="text-gray-400">Become a core part of a US business and grow alongside them.</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors">
                                    <ShieldCheck className="text-gold w-10 h-10 mb-6" />
                                    <h4 className="font-heading text-xl font-bold text-white mb-2">Vetted Clients</h4>
                                    <p className="text-gray-400">We verify every business we work with to ensure a safe working standard.</p>
                                </div>
                                <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors sm:mt-8">
                                    <TrendingUp className="text-gold w-10 h-10 mb-6" />
                                    <h4 className="font-heading text-xl font-bold text-white mb-2">Competitive Pay</h4>
                                    <p className="text-gray-400">Earn strong wages in USD working for established Western businesses.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA BOX */}
                <section className="py-24 px-4 md:px-8 bg-navy-light relative overflow-hidden">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-gold/10 rounded-full blur-[100px] pointer-events-none"></div>

                    <div className="max-w-4xl mx-auto bg-navy border border-white/10 rounded-[3rem] p-12 md:p-20 text-center relative z-10 shadow-2xl">
                        <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">Ready To Elevate Your Career?</h2>
                        <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                            If you are driven, fluent in English, and ready to work with top-tier US clients, we want to hear from you.
                        </p>
                        <Button
                            onClick={openSurvey}
                            variant="primary"
                            className="min-w-[280px] text-xl py-5 shadow-[0_0_30px_rgba(255,215,0,0.2)] hover:shadow-[0_0_50px_rgba(255,215,0,0.4)] hover:scale-105 transition-all text-navy"
                        >
                            Apply To Five Star Assistants
                        </Button>
                    </div>
                </section>

            </main>

            {/* Note: In a real system, you might want a modified dark Footer as well, but standard is fine for now */}
            <Footer />

            <EmployeeApplicationModal
                isOpen={isSurveyOpen}
                onClose={closeSurvey}
                onComplete={handleSurveyComplete}
            />
        </div>
    );
};

export default ForEmployeesLanding;
