import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Privacy: React.FC = () => {
    return (
        <div className="font-sans min-h-screen bg-white">
            <Navbar />

            <main className="pt-32 pb-24 px-4 md:px-8">
                <div className="max-w-4xl mx-auto font-body text-gray-700">
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-8">Privacy Policy</h1>

                    <div className="space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">1. Information We Collect</h2>
                            <p className="mb-4">
                                We collect information you provide directly to us when you request information, apply for a position, or communicate with us.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">2. How We Use Information</h2>
                            <p className="mb-4">
                                We use the information we collect to provide, maintain, and improve our services, communicate with you, and customize your experience.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">3. Information Sharing</h2>
                            <p className="mb-4">
                                We do not share your personal information with third parties except as described in this privacy policy or with your consent.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-navy mb-4">4. Contact Us</h2>
                            <p className="mb-4">
                                If you have any questions about this Privacy Policy, please contact us at support@fivestarassistants.com.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Privacy;
