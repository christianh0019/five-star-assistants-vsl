import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SurveyModal from '../components/SurveyModal';
import Hero from '../components/Hero';
import ScrollReveal from '../components/ScrollReveal';
import { useNavigate } from 'react-router-dom';

import NichePain from '../components/niche/NichePain';
import NicheArbitrage from '../components/niche/NicheArbitrage';
import NicheRoles from '../components/niche/NicheRoles';
import NicheProcess from '../components/niche/NicheProcess';
import NicheGuarantee from '../components/niche/NicheGuarantee';
import NicheCostComparison from '../components/niche/NicheCostComparison';
import NicheTestimonial from '../components/niche/NicheTestimonial';
import NicheFAQ from '../components/niche/NicheFAQ';
import NicheFinalPush from '../components/niche/NicheFinalPush';

const DigitalAgencies: React.FC = () => {
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
        <div className="min-h-screen bg-white flex flex-col font-body">
            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Attention Agency Owners"
                        headline={
                            <>
                                Hire A-Players Overseas <span className="text-gold italic">For Just $10-15/hr</span>
                            </>
                        }
                        subheadline={
                            <>
                                College-educated, English-fluent specialists placed into the exact roles your agency needs, from delivery to account management. <span className="font-bold text-navy">And if you don't love them, it's free, guaranteed!</span>
                            </>
                        }
                    />
                </ScrollReveal>

                <NichePain
                    niche="Agencies"
                    painPoints={[
                        "$60k+ salary",
                        "payroll taxes",
                        "benefits",
                        "recruiting time",
                        "training"
                    ]}
                    cycleText={
                        <>
                            At first the agency grows fast. You land a few clients, start getting results, and suddenly things take off. But then something happens. <b>You become the bottleneck.</b><br /><br />
                            You are managing fulfillment, handling client communication, reviewing ads, answering questions, and trying to grow the business at the same time.<br /><br />
                            Hiring locally sounds like the solution until you see the numbers.
                        </>
                    }
                />

                <NicheArbitrage
                    headline="The Agencies Scaling Fast Aren't Hiring Locally"
                    conceptDescription={<>They are building remote teams. Instead of paying $60k–$90k for one employee, they hire highly capable overseas specialists for <span className="font-bold text-navy">$10–15/hour.</span></>}
                    conceptKeyDifference={<>But finding good people overseas isn't easy. You've probably heard the horror stories. Bad communication, missed deadlines, poor quality work, people disappearing.<br /><br />That is exactly why Five Star Assistants exists. We remove the entire hiring risk.</>}
                    features={[
                        "Recruiting",
                        "Candidate screening",
                        "Interviews",
                        "Vetting",
                        "Payroll",
                        "Replacement if needed"
                    ]}
                />

                <div id="roles-section">
                    <NicheRoles
                        niche="Agencies"
                        roles={[
                            {
                                title: "Media Buyers",
                                description: "Manage ad accounts across Meta, Google, TikTok, and more."
                            },
                            {
                                title: "Video Editors",
                                description: "Short-form content, ad creatives, YouTube editing, and social media clips."
                            },
                            {
                                title: "Graphic Designers",
                                description: "Ad creatives, landing pages, and branding assets."
                            },
                            {
                                title: "Account Managers",
                                description: "Handle client communication, updates, and reporting."
                            },
                            {
                                title: "Appointment Setters",
                                description: "Follow up with leads and book sales calls for your team."
                            },
                            {
                                title: "Operations Assistants",
                                description: "Manage CRM updates, reporting, SOPs, and daily tasks."
                            }
                        ]}
                    />
                </div>

                <NicheProcess
                    steps={[
                        {
                            title: "Tell Us The Role",
                            description: "Describe the position and responsibilities your agency needs."
                        },
                        {
                            title: "We Recruit Candidates",
                            description: "Our team sources and screens qualified professionals."
                        },
                        {
                            title: "Meet Your Candidates",
                            description: "You interview the finalists and choose who you want."
                        },
                        {
                            title: "They Start Working",
                            description: "Your new remote employee begins contributing immediately."
                        }
                    ]}
                />

                <NicheGuarantee
                    headline="Hiring Overseas Shouldn't Feel Risky"
                    guarantees={[
                        "We replace them for free",
                        "You don't pay"
                    ]}
                    footerText="We only win when you are happy with the hire."
                />

                <NicheCostComparison
                    localHireFeatures={[
                        "$60k–$90k salary",
                        "Payroll taxes",
                        "Benefits",
                        "Office space",
                        "Recruiting time",
                        "Training time"
                    ]}
                    fsaFeatures={[
                        "$10–15/hour specialists",
                        "Pre-vetted candidates",
                        "No recruiting process",
                        "Flexible scaling",
                        "Replace anytime if needed"
                    ]}
                />

                <NicheTestimonial
                    quote="An agency owner hired a media buyer through us and reduced workload by 40% while simultaneously scaling their overall ad spend."
                />

                <NicheFAQ
                    faqs={[
                        {
                            question: "Are overseas employees reliable?",
                            answer: "Yes. We recruit college-educated professionals with strong English and previous remote work experience."
                        },
                        {
                            question: "What about time zones?",
                            answer: "Many overseas professionals work U.S. hours or overlapping schedules."
                        },
                        {
                            question: "Who manages the employee?",
                            answer: "They work directly inside your agency just like a normal team member."
                        },
                        {
                            question: "What if the hire doesn't work out?",
                            answer: "We replace them for free or you don't pay."
                        },
                        {
                            question: "How quickly can we hire someone?",
                            answer: "Most agencies meet qualified candidates within a few days."
                        }
                    ]}
                />

                <NicheFinalPush
                    headline="Your Agency Doesn't Need More Hustle. It Needs More Capacity."
                    subheadline="The fastest growing agencies aren't doing everything themselves. They are building teams. If you want to scale without blowing up your payroll, hiring overseas talent is the smartest move you can make. Tell us the role you need and we'll introduce you to qualified candidates."
                    ctaText="Find Your Remote Employee"
                    onCtaClick={openSurvey}
                />

            </main>

            <Footer />

            <SurveyModal
                isOpen={isSurveyOpen}
                onClose={closeSurvey}
                onComplete={handleSurveyComplete}
                source="Digital Agencies"
            />
        </div>
    );
};

export default DigitalAgencies;
