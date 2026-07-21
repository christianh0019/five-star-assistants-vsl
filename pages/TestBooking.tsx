import React, { useEffect } from 'react';
import EmbeddedBookingWidget from '../components/EmbeddedBookingWidget';
import Logo from '../components/Logo';

/**
 * TEST route (/testbooking) that mirrors the live /booking page but embeds the
 * new FSA software booking widget instead of GoHighLevel. Used to verify real
 * bookings flow into the FSA platform before cutting /booking over.
 */
const TestBooking: React.FC = () => {
    useEffect(() => {
        if (typeof (window as any).fbq === 'function') {
            (window as any).fbq('track', 'Lead');
        }
    }, []);

    return (
        <div className="w-full min-h-screen bg-white flex flex-col items-center px-4 pb-24">

            {/* Logo */}
            <header className="w-full flex justify-center pt-8 pb-4">
                <Logo />
            </header>

            {/* Header Text */}
            <section className="max-w-[700px] w-full text-center mt-10 mb-10">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 text-navy font-body text-sm font-semibold mb-6 shadow-sm">
                    <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                    One Last Step
                </div>

                <h1 className="font-heading text-navy text-4xl md:text-5xl font-bold leading-tight mb-6 drop-shadow-sm">
                    Great! <span className="text-gold italic">Please Book A Time!</span>
                </h1>

                <p className="font-subheading text-navy/70 text-lg md:text-xl font-medium tracking-wider max-w-xl mx-auto">
                    You'll meet with one of our recruiters for 15-30 min to see if it's a fit. Remember, there's zero cost to get started. You just pay their hourly wage if you like them!
                </p>
            </section>

            {/* Booking Widget (FSA software embed) */}
            <div className="w-full max-w-4xl">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 min-h-[700px]">
                    <EmbeddedBookingWidget />
                </div>
            </div>

        </div>
    );
};

export default TestBooking;
