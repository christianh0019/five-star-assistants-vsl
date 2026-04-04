import React, { useEffect } from 'react';
import BookingWidget from '../components/BookingWidget';
import Logo from '../components/Logo';

const Booking: React.FC = () => {
    const CALENDAR_ID = 'pPex5OdxMW9i7kQBs89C';

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
                    Book Your <span className="text-gold italic">Free 15-Minute Call</span>
                </h1>

                <p className="font-subheading text-navy/70 text-lg md:text-xl font-medium tracking-wider max-w-xl mx-auto">
                    No pressure, no pitch. Just a quick conversation to see if we're a good fit for your team.
                </p>
            </section>

            {/* Booking Widget */}
            <div className="w-full max-w-4xl">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 min-h-[800px]">
                    <BookingWidget calendarId={CALENDAR_ID} />
                </div>
            </div>

        </div>
    );
};

export default Booking;
