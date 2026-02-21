import React from 'react';
import { Globe, Store, CheckCircle, ArrowRight } from 'lucide-react';

const WhoWeWorkWithSection: React.FC = () => {
    return (
        <section id="who-we-work-with" className="bg-white py-24 md:py-32 px-4 relative overflow-hidden border-b border-gray-100">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-offwhite/50 -z-10 rounded-l-[100px] hidden lg:block"></div>

            <div className="max-w-7xl mx-auto">
                <div className="text-center max-w-3xl mx-auto mb-20 animate-fadeIn">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <span className="w-12 h-[1px] bg-gold"></span>
                        <span className="font-body text-gold font-bold tracking-[0.2em] uppercase text-xs">Who We Work With</span>
                        <span className="w-12 h-[1px] bg-gold"></span>
                    </div>
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-8 leading-tight">
                        Built For <span className="italic font-light text-navy-light">Founders</span> Who Need Leverage
                    </h2>
                    <p className="font-body text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
                        Whether you scale clicks or pour concrete, if you have a repeatable process, we can staff it with elite talent.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 relative z-10">

                    {/* Online Businesses Card */}
                    <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 group relative overflow-hidden border-t-4 border-t-navy">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
                            <Globe size={120} />
                        </div>

                        <div className="w-16 h-16 bg-navy/5 text-navy rounded-xl flex items-center justify-center mb-8 group-hover:bg-navy group-hover:text-white transition-colors duration-300">
                            <Globe className="w-8 h-8" />
                        </div>

                        <h3 className="font-heading text-3xl font-bold text-navy mb-4">
                            Online Businesses & Agencies
                        </h3>
                        <p className="text-gray-500 mb-8 font-body leading-relaxed">
                            Stop getting bogged down in your inbox and CRM. Hand off the digital heavy lifting so you can focus on strategy and closing deals.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Inbox & Calendar Management",
                                "Lead Follow-up & CRM Updates",
                                "Social Media Posting & Community Management",
                                "Data Entry & Research Tasks"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-navy font-medium text-sm md:text-base">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Physical Businesses Card */}
                    <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 group relative overflow-hidden border-t-4 border-t-gold">
                        <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-110">
                            <Store size={120} />
                        </div>

                        <div className="w-16 h-16 bg-gold/10 text-gold rounded-xl flex items-center justify-center mb-8 group-hover:bg-gold group-hover:text-white transition-colors duration-300">
                            <Store className="w-8 h-8" />
                        </div>

                        <h3 className="font-heading text-3xl font-bold text-navy mb-4">
                            Local Physical Businesses
                        </h3>
                        <p className="text-gray-500 mb-8 font-body leading-relaxed">
                            Stop answering the phone while trying to run the job site. Let a dedicated assistant handle your back-office and customer scheduling.
                        </p>

                        <ul className="space-y-4 mb-10">
                            {[
                                "Inbound Call Routing & Answering",
                                "Appointment Booking & Scheduling",
                                "Estimating Prep & Dispatching Support",
                                "Vendor Follow-up & Basic Bookkeeping"
                            ].map((feature, i) => (
                                <li key={i} className="flex items-start">
                                    <CheckCircle className="w-5 h-5 text-gold mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-navy font-medium text-sm md:text-base">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhoWeWorkWithSection;
