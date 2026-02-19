import React from 'react';
import { useNavigate } from 'react-router-dom';
import OnboardingHeader from '../../components/OnboardingHeader';

const OnboardingBooking: React.FC = () => {
    const navigate = useNavigate();

    // Replace with the onboarding call calendar ID when available
    const CALENDAR_ID = 'ONBOARDING_CALENDAR_ID';
    const calendarUrl = `https://api.leadconnectorhq.com/widget/booking/${CALENDAR_ID}`;

    return (
        <div className="min-h-screen bg-gray-50 font-body flex flex-col">
            <OnboardingHeader currentStep={2} totalSteps={3} stepLabel="Schedule Kickoff" />

            <div className="flex-grow flex flex-col items-center pt-24 pb-12 px-6">
                {/* Header */}
                <div className="mb-10 text-center max-w-2xl">
                    <h1 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">
                        Let's make it official.
                    </h1>
                    <p className="font-body text-gray-500 text-lg leading-relaxed">
                        Book your dedicated kickoff call below. We'll review your intake form, introduce your VA, and map out the first 30 days together.
                    </p>
                </div>

                {/* Calendar Embed */}
                <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100" style={{ height: '800px' }}>
                    <iframe
                        src={calendarUrl}
                        style={{ width: '100%', height: '100%', border: 'none' }}
                        title="Schedule Your Kickoff Call"
                    />
                </div>

                {/* Skip Link */}
                <div className="mt-8 text-center">
                    <button
                        onClick={() => navigate('/onboarding/complete')}
                        className="text-gray-400 hover:text-gray-600 text-sm font-subheading font-bold uppercase tracking-wider underline decoration-2 decoration-gray-200 hover:decoration-gray-400 transition-all"
                    >
                        Skip for now — I'll book later
                    </button>
                </div>
            </div>
        </div>
    );
};

export default OnboardingBooking;
