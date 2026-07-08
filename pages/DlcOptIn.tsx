import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DlcOptIn: React.FC = () => {
    const [phone, setPhone] = useState('');
    const [smsOptIn, setSmsOptIn] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const inputClass =
        'w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-navy bg-gray-50 focus:bg-white transition-colors font-body text-navy placeholder-gray-400';
    const labelClass = 'block text-sm font-bold text-navy mb-2 font-subheading uppercase tracking-wider';

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if (!phone.trim()) {
            setError('Please enter a phone number.');
            return;
        }
        if (!smsOptIn) {
            setError('Please check the box to consent to SMS messages before submitting.');
            return;
        }

        setError('');
        setSubmitted(true);
    };

    return (
        <div className="font-sans min-h-screen bg-white flex flex-col">
            <Helmet>
                <title>SMS Opt-In | Five Star Assistants</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <Navbar />

            <main className="flex-grow pt-32 pb-24 px-4 md:px-8">
                <div className="max-w-xl mx-auto font-body text-gray-700">
                    <h1 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4">SMS Opt-In</h1>
                    <p className="mb-8 text-gray-500">
                        Enter your phone number below to sign up for account and support SMS notifications from Five Star Assistants.
                    </p>

                    <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
                        {submitted ? (
                            <div className="text-center py-8">
                                <h2 className="font-heading text-2xl font-bold text-navy mb-2">You're opted in.</h2>
                                <p className="text-gray-500">
                                    We received consent for {phone} to receive SMS notifications from Five Star Assistants.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate>
                                <div className="mb-6">
                                    <label htmlFor="dlc-phone" className={labelClass}>Phone Number</label>
                                    <input
                                        id="dlc-phone"
                                        name="phone"
                                        type="tel"
                                        inputMode="tel"
                                        autoComplete="tel"
                                        placeholder="(555) 555-5555"
                                        className={inputClass}
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>

                                <div className="mb-6">
                                    <label className="flex items-start gap-3 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            checked={smsOptIn}
                                            onChange={(e) => setSmsOptIn(e.target.checked)}
                                            className="mt-1 h-5 w-5 flex-shrink-0 rounded border-gray-300 text-navy focus:ring-navy"
                                        />
                                        <span className="text-sm leading-relaxed text-gray-600">
                                            By providing my phone number and checking this box, I agree to receive account, support, and service SMS notifications from Five Star Assistants at the number provided. Message frequency varies. Message and data rates may apply. Reply STOP to opt out, HELP for help. Consent is not a condition of purchase or service. Mobile information will not be shared or sold to third parties. See our{' '}
                                            <Link to="/privacy" target="_blank" rel="noopener noreferrer" className="text-navy font-semibold underline hover:text-gold transition-colors">
                                                Privacy Policy
                                            </Link>
                                            {' '}and{' '}
                                            <Link to="/terms" target="_blank" rel="noopener noreferrer" className="text-navy font-semibold underline hover:text-gold transition-colors">
                                                SMS Terms and Conditions
                                            </Link>
                                            .
                                        </span>
                                    </label>
                                </div>

                                {error && (
                                    <p className="text-sm text-red-600 mb-4">{error}</p>
                                )}

                                <button
                                    type="submit"
                                    className="w-full bg-navy text-white font-heading font-bold py-3 rounded-xl hover:bg-navy/90 transition-colors"
                                >
                                    Submit
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default DlcOptIn;
