import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SurveyModal from '../components/SurveyModal';
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

            <main className="flex-grow pt-24">

                {/* HERO SECTION: The Traditional Hiring Process Is Broken */}
                <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 bg-navy px-4 overflow-hidden border-b-4 border-gold">
                    {/* Background visual effects */}
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/10 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3 z-0 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[150px] translate-y-1/2 -translate-x-1/3 z-0 pointer-events-none"></div>

                    <div className="max-w-6xl mx-auto relative z-10">
                        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
                            <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-6 drop-shadow-sm">
                                THE PROBLEM
                            </h3>
                            <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-md">
                                The Traditional Hiring Process <br className="hidden md:block" /><span className="text-gold italic">Is Broken</span>
                            </h1>
                            <p className="font-body text-xl md:text-2xl text-blue-100 font-medium max-w-2xl mx-auto px-4">
                                Hiring Employees the Normal Way Is Slow, Expensive, and Risky.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                            {/* Left Side: The List */}
                            <div className="lg:col-span-7 bg-white/5 backdrop-blur-md rounded-[2rem] p-8 md:p-12 border border-white/10 shadow-2xl">
                                <h3 className="font-body text-xl md:text-2xl text-white mb-8 border-b border-white/10 pb-6 font-medium leading-relaxed">
                                    When most companies try to hire an employee, the process usually looks like this:
                                </h3>
                                <ul className="space-y-5">
                                    {[
                                        "Write and post job listings",
                                        "Sort through 100+ resumes",
                                        "Conduct 30–50 interviews",
                                        "Negotiate salary",
                                        "Set up payroll",
                                        "Pay employer taxes",
                                        "Provide benefits",
                                        "Train the employee",
                                        "Hope the hire actually works out"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-gray-200 font-medium text-lg md:text-xl">
                                            <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0">
                                                <X className="text-red-400 w-5 h-5" strokeWidth={3} />
                                            </div>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Right Side: The Consequence */}
                            <div className="lg:col-span-5 bg-gold rounded-[2rem] p-8 md:p-12 shadow-[0_20px_50px_-12px_rgba(255,215,0,0.3)] transform lg:translate-y-12 relative overflow-hidden">
                                <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/20 rounded-full blur-2xl pointer-events-none"></div>
                                <h3 className="font-heading text-3xl font-bold text-navy mb-8 leading-tight relative z-10">
                                    And if the employee isn't a good fit?
                                </h3>
                                <div className="bg-white rounded-2xl p-6 mb-8 shadow-inner relative z-10 transform -rotate-1 hover:rotate-0 transition-transform duration-300">
                                    <p className="font-heading font-black text-red-600 text-2xl text-center uppercase tracking-wide">
                                        You start the entire process again.
                                    </p>
                                </div>
                                <p className="font-body text-navy/90 text-xl font-bold leading-relaxed relative z-10">
                                    Most businesses underestimate how much time, risk, and money this process actually costs.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SECTION 2: The Smart Way to Build a Team */}
                <section className="py-20 md:py-32 bg-white px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                            <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                THE SOLUTION
                            </h3>
                            <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                The Smart Way to Build a Team
                            </h2>
                            <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto font-bold">
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
                        <div className="text-center mb-16">
                            <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                WHAT WE DO
                            </h3>
                            <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                What We Actually Handle For You
                            </h2>
                            <p className="font-body text-2xl text-navy font-bold max-w-2xl mx-auto">
                                This Isn't Just Recruiting
                            </p>
                            <p className="font-body text-xl text-gray-600 max-w-2xl mx-auto mt-6">
                                Most recruiting firms just send resumes and disappear. We handle the entire infrastructure behind your remote employee.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Recruiting and Vetting",
                                    desc: "We source, screen, and interview candidates before introducing them to you.\n\nYou only meet the best finalists."
                                },
                                {
                                    title: "Payroll and Payments",
                                    desc: "We handle the payroll infrastructure so you don't have to manage international payments or compliance."
                                },
                                {
                                    title: "Productivity Monitoring",
                                    desc: "Every assistant works through monitoring software that tracks:\n\n• screen activity\n• active work time\n• tasks completed"
                                },
                                {
                                    title: "Daily Productivity Reports",
                                    desc: "You receive reports showing:\n\n• hours worked\n• productivity metrics\n• work activity\n\nThis ensures you are only paying for real work."
                                },
                                {
                                    title: "Management Oversight",
                                    desc: "Our team helps ensure your assistant stays accountable and productive.\n\nYou get the benefits of a remote employee without the management headaches."
                                }
                            ].map((feature, idx) => (
                                <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all group flex flex-col h-full">
                                    <div className="w-16 h-16 rounded-full bg-navy/5 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                                        <Check className="text-navy group-hover:text-gold transition-colors" size={28} />
                                    </div>
                                    <h3 className="font-heading font-bold text-2xl text-navy mb-4">{feature.title}</h3>
                                    <p className="font-body text-gray-600 leading-relaxed text-lg whitespace-pre-line flex-grow">
                                        {feature.desc}
                                    </p>
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

                {/* SECTION 5: Example Cost Comparison */}
                <section className="py-20 md:py-32 bg-gray-50 px-4">
                    <div className="max-w-5xl mx-auto">
                        <div className="text-center mb-16">
                            <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                THE ROI
                            </h3>
                            <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                Example Cost Comparison
                            </h2>
                            <p className="font-heading font-bold text-2xl text-gray-800">
                                Hiring a Marketing Specialist
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                            {/* Traditional Column */}
                            <div className="bg-white border-2 border-gray-100 rounded-[2rem] p-8 md:p-10 shadow-sm relative flex flex-col justify-between">
                                <div>
                                    <h3 className="font-heading text-xl font-bold text-gray-500 mb-8 pb-4 border-b border-gray-100 text-center uppercase tracking-wider">
                                        Traditional U.S. Hire
                                    </h3>
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center text-gray-600 text-lg">
                                            <span>Salary</span>
                                            <span className="font-bold">$65,000</span>
                                        </div>
                                        <div className="flex justify-between items-center text-gray-600 text-lg">
                                            <span>Taxes + benefits</span>
                                            <span className="font-bold">$15,000+</span>
                                        </div>
                                        <div className="flex justify-between items-center text-gray-600 text-lg">
                                            <span>Recruiting costs</span>
                                            <span className="font-bold">$5,000+</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
                                    <span className="font-bold text-gray-800 text-xl">Total Annual Cost</span>
                                    <span className="font-heading font-bold text-red-500 text-3xl">$85,000+</span>
                                </div>
                            </div>

                            {/* FSA Column */}
                            <div className="bg-white border-4 border-navy rounded-[2rem] p-8 md:p-10 shadow-xl relative transform md:-translate-y-4 flex flex-col justify-between overflow-hidden">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0"></div>
                                <div className="relative z-10">
                                    <div className="absolute -top-12 -right-4 bg-gold text-navy font-bold uppercase tracking-widest text-xs py-2 px-6 rounded-full shadow-lg">
                                        Best Value
                                    </div>
                                    <h3 className="font-heading text-xl font-bold text-navy mb-8 pb-4 border-b border-gray-100 text-center uppercase tracking-wider">
                                        Through Five Star Assistants
                                    </h3>
                                    <div className="space-y-6">
                                        <div className="flex justify-between items-center text-navy font-medium text-lg">
                                            <span>Remote specialist</span>
                                            <span className="font-bold bg-navy/5 px-4 py-2 rounded-lg">$12/hour</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center relative z-10">
                                    <span className="font-bold text-navy text-xl">Annual cost</span>
                                    <span className="font-heading font-bold text-gold text-4xl">~$25,000</span>
                                </div>
                            </div>
                        </div>

                        <div className="mt-20 text-center">
                            <div className="inline-block bg-navy/5 border border-navy/10 text-navy text-2xl md:text-3xl font-heading font-bold px-10 py-6 rounded-2xl mb-12 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)]">
                                Savings: <span className="text-gold font-black drop-shadow-sm ml-2">$60,000+ per year</span>
                            </div>
                            <p className="font-heading text-2xl md:text-4xl font-bold text-navy max-w-3xl mx-auto leading-tight">
                                Many companies hire multiple remote specialists for the cost of one local employee.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SECTION 6: Zero Risk Guarantee */}
                <section className="py-24 bg-navy px-4 border-y-8 border-gold overflow-hidden relative">
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 z-0 hidden md:block"></div>
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-10 text-gold shadow-[0_0_30px_rgba(255,215,0,0.2)]">
                            <ShieldCheck size={48} />
                        </div>
                        <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-6">
                            OUR GUARANTEE
                        </h3>
                        <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-10 drop-shadow-md pb-8 border-b border-white/10">
                            Zero Risk Guarantee
                        </h2>

                        <div className="max-w-2xl mx-auto">
                            <h3 className="font-heading text-3xl font-bold text-white mb-8">
                                Hiring Shouldn't Be a Gamble
                            </h3>
                            <p className="font-body text-xl text-blue-100 mb-4 font-medium leading-relaxed">
                                Most recruiting firms charge thousands just to introduce candidates.
                            </p>
                            <p className="font-body text-xl text-blue-100 mb-8 font-medium">
                                Even if the hire fails.
                            </p>
                            <p className="font-heading text-3xl text-gold font-bold mb-12 drop-shadow-sm">
                                We don't believe in that.
                            </p>

                            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[2rem] p-10 md:p-14 mb-10 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-32 h-32 bg-gold/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
                                <p className="font-body text-2xl text-white font-medium mb-8 text-center relative z-10">
                                    If the candidate we place isn't the right fit:
                                </p>
                                <div className="space-y-6 text-left inline-block relative z-10 w-full max-w-sm mx-auto">
                                    <div className="flex items-center gap-6 justify-center">
                                        <span className="text-gold font-bold text-2xl">•</span>
                                        <span className="font-heading font-bold text-3xl md:text-4xl text-white">We replace them for free</span>
                                    </div>
                                    <div className="font-body italic text-gray-400 text-center my-6 text-xl">or</div>
                                    <div className="flex items-center gap-6 justify-center">
                                        <span className="text-gold font-bold text-2xl">•</span>
                                        <span className="font-heading font-bold text-3xl md:text-4xl text-white">You don't pay</span>
                                    </div>
                                </div>
                            </div>
                            <p className="font-heading text-2xl md:text-3xl text-white font-bold tracking-wider pt-4">
                                That is our guarantee.
                            </p>
                        </div>
                    </div>
                </section>

                {/* SECTION 7: Final CTA */}
                <section className="bg-white py-32 px-4 border-t border-gray-100">
                    <div className="max-w-5xl mx-auto text-center">
                        <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-6">
                            READY TO START?
                        </h3>
                        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-12 leading-tight">
                            Build Your Team Without the<br />
                            <span className="text-gold">Hiring Headache</span>
                        </h2>

                        <div className="max-w-3xl mx-auto mb-16">
                            <p className="font-body text-2xl text-gray-800 mb-12 leading-relaxed">Tell us the role you want to fill and we'll introduce you to qualified candidates.</p>

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
