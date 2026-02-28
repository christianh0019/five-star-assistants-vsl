import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SurveyModal from '../components/SurveyModal';
import { useNavigate } from 'react-router-dom';

const LocalServiceBusinesses: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);

    // This will be passed to SurveyModal to handle redirect
    const handleSurveyComplete = () => {
        closeSurvey();
        navigate('/booking');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-body">
            <Navbar onOpenSurvey={openSurvey} />
            <main className="flex-grow flex items-center justify-center pt-24">
                <div className="text-center">
                    <h1 className="text-4xl font-heading font-medium text-navy mb-4">Local Service Businesses</h1>
                    <p className="text-gray-600">Coming soon.</p>
                </div>
            </main>
            <Footer />
            <SurveyModal
                isOpen={isSurveyOpen}
                onClose={closeSurvey}
                onComplete={handleSurveyComplete}
                source="Local Service Businesses"
            />
        </div>
    );
};

export default LocalServiceBusinesses;
