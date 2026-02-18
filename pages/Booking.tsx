import React from 'react';
import BookingWidget from '../components/BookingWidget';
import { CheckCircle } from 'lucide-react';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';

const Booking: React.FC = () => {
    // Using the ID from the reference project for now
    const CALENDAR_ID = 'pPex5OdxMW9i7kQBs89C';

    return (
        <div className="min-h-screen pt-12 pb-20 bg-gray-50 relative overflow-hidden flex flex-col items-center">

            {/* Simple Header */}
            <div className="w-full max-w-6xl mx-auto px-4 mb-8 flex justify-center">
                <Link to="/">
                    <Logo variant="dark" className="scale-75 origin-top" />
                </Link>
            </div>

            <div className="container mx-auto px-4 relative z-10 w-full">
                <div className="max-w-4xl mx-auto">
                    {/* Header Section */}
                    <div className="text-center mb-10">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold mb-6 border border-green-200 animate-fadeIn">
                            <CheckCircle size={16} />
                            <span>Application Received</span>
                        </div>

                        <h1 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6 leading-tight">
                            Almost there! <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-gold">
                                Schedule your discovery call.
                            </span>
                        </h1>

                        <p className="font-body text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                            Please select a time below to finalize your application and lock in your slot for a dedicated strategy audit.
                        </p>
                    </div>

                    {/* Booking Widget Container */}
                    <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100 min-h-[800px]">
                        <div className="p-0 md:p-4">
                            <BookingWidget calendarId={CALENDAR_ID} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Booking;
