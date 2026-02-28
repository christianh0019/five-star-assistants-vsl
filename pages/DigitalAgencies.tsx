import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const DigitalAgencies: React.FC = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-body">
            <Navbar />
            <main className="flex-grow flex items-center justify-center pt-24">
                <div className="text-center">
                    <h1 className="text-4xl font-heading font-medium text-navy mb-4">Digital Agencies</h1>
                    <p className="text-gray-600">Coming soon.</p>
                </div>
            </main>
            <Footer />
        </div>
    );
};

export default DigitalAgencies;
