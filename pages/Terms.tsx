import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Terms: React.FC = () => {
    return (
        <div className="font-sans min-h-screen bg-white">
            <Header />

            <main className="pt-32 pb-24 px-4 md:px-8">
                <div className="max-w-4xl mx-auto font-body text-gray-700">
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-8">Terms of Service</h1>

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">1. Acceptance of Terms</h2>
                            <p className="mb-4">
                                By accessing and using our services, you accept and agree to be bound by the terms and provision of this agreement.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">2. Provision of Services</h2>
                            <p className="mb-4">
                                We provide recruiting and placement services. We reserve the right to modify or discontinue, temporarily or permanently, the services with or without notice.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">3. User Responsibilities</h2>
                            <p className="mb-4">
                                You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for all activities that occur under your account.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">4. Contact Us</h2>
                            <p className="mb-4">
                                If you have any questions about these Terms, please contact us at support@fivestarassistants.com.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Terms;
