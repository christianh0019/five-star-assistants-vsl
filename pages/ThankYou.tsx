import React, { useEffect } from 'react';
import { CheckCircle, Calendar, ArrowRight, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

const ThankYou: React.FC = () => {
    useEffect(() => {
        if (typeof (window as any).fbq === 'function') {
            (window as any).fbq('track', 'Schedule');
        }
    }, []);

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-12 pb-20">
            {/* Logo */}
            <div className="w-full max-w-6xl mx-auto px-4 mb-12 flex justify-center">
                <Link to="/">
                    <Logo variant="dark" className="scale-75 origin-top" />
                </Link>
            </div>

            <div className="w-full max-w-xl mx-auto px-4 text-center">
                {/* Status badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-8 border border-green-200">
                    <CheckCircle size={16} />
                    Discovery Call Confirmed
                </div>

                <h1 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4 leading-tight">
                    You're booked.
                </h1>
                <p className="font-body text-gray-500 text-base md:text-lg mb-12 max-w-md mx-auto">
                    Accept the calendar invite in your email to hold your spot.
                </p>

                {/* Calendar card */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6 flex items-start gap-4 text-left">
                    <div className="w-11 h-11 bg-gold/15 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Calendar size={20} className="text-gold" />
                    </div>
                    <div>
                        <p className="font-heading font-bold text-navy text-base mb-1">Accept your calendar invite</p>
                        <p className="font-body text-gray-500 text-sm">Check your inbox for a calendar invitation with the call link. Accepting it locks in your time.</p>
                    </div>
                </div>

                {/* What to expect card */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-12 flex items-start gap-4 text-left">
                    <div className="w-11 h-11 bg-navy/[0.07] rounded-xl flex items-center justify-center flex-shrink-0">
                        <Users size={20} className="text-navy" />
                    </div>
                    <div>
                        <p className="font-heading font-bold text-navy text-base mb-1">What happens on the call</p>
                        <p className="font-body text-gray-500 text-sm">You'll meet with one of our recruiters. We'll learn about the role you need to fill, make sure it's a good fit, and give you an exact quote — no commitment required.</p>
                    </div>
                </div>

                <Link to="/" className="font-body text-navy font-bold hover:text-gold transition-colors inline-flex items-center gap-2">
                    Return to Home <ArrowRight size={16} />
                </Link>
            </div>
        </div>
    );
};

export default ThankYou;
