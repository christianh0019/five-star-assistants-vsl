import React from 'react';
import { CheckCircle, Calendar, ArrowRight, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const ThankYou: React.FC = () => {
    // Placeholder video ID
    const VIDEO_SRC = "https://www.youtube.com/embed/CNngG1p-HQQ?si=aOk84JEwMYWrQURq";

    return (
        <div className="min-h-screen pt-12 pb-20 bg-gray-50 relative overflow-hidden flex flex-col items-center">
            {/* Simple Header */}
            <div className="w-full max-w-6xl mx-auto px-4 mb-8 flex justify-center">
                <Link to="/">
                    <Logo variant="dark" className="scale-75 origin-top" />
                </Link>
            </div>

            {/* Hero Section containing Video for Mobile Visibility */}
            <div className="w-full">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">

                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-6 border border-green-200 animate-fadeIn">
                            <CheckCircle size={16} />
                            <span>Discovery Call Confirmed</span>
                        </div>

                        <h1 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6 leading-tight">
                            You're All Set!
                        </h1>
                        <p className="font-body text-gray-600 text-base md:text-xl mb-8 max-w-2xl mx-auto">
                            Check for a calendar invite. In the meantime, <span className="text-navy font-bold">watch this specific instruction video:</span>
                        </p>

                        {/* Critical Alert Bar */}
                        <div className="bg-amber-100 text-amber-900 px-4 py-3 rounded-t-lg font-bold text-sm md:text-base flex items-center justify-center gap-2 mx-auto max-w-3xl border-t border-x border-amber-200">
                            <AlertTriangle size={20} className="text-amber-600" />
                            IMPORTANT: Watch Before Our Call
                        </div>

                        {/* Video Container - Lifted into Hero */}
                        <div className="max-w-3xl mx-auto rounded-b-lg rounded-tr-none overflow-hidden shadow-2xl shadow-gray-200 border border-gray-200 border-t-0 bg-white aspect-video relative group">
                            <iframe
                                className="w-full h-full"
                                src={VIDEO_SRC}
                                title="Preparation Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>

                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="bg-white flex-grow py-12 px-6 border-t border-gray-100">
                <div className="container mx-auto">

                    {/* Calendar Reminder */}
                    <div className="max-w-xl mx-auto mb-16">
                        <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex items-center gap-4 shadow-sm">
                            <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center text-gold-dark shrink-0">
                                <Calendar size={24} className="text-gold" />
                            </div>
                            <div>
                                <h3 className="font-bold text-navy text-lg">Check Your Email</h3>
                                <p className="text-gray-600 text-sm">We've sent a calendar invitation with a secure Zoom link.</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <Link to="/" className="text-navy font-bold hover:text-gold transition-colors flex items-center justify-center gap-2">
                            Return to Home <ArrowRight size={16} />
                        </Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ThankYou;
