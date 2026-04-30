import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MasterServicesAgreement: React.FC = () => {
    return (
        <div className="font-sans min-h-screen bg-white">
            <Navbar />

            <main className="pt-32 pb-24 px-4 md:px-8">
                <div className="max-w-4xl mx-auto font-body text-gray-700">
                    <h1 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-8">Master Services Agreement</h1>

                    <div className="space-y-8">
                        <section>
                            <p className="mb-4">
                                This Master Services Agreement ("Agreement") is entered into between Five Star Assistants ("Company") and the client ("Client"). The terms of this Agreement govern all services provided by the Company.
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default MasterServicesAgreement;
