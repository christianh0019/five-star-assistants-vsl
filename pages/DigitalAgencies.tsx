import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SurveyModal from '../components/SurveyModal';
import { useNavigate } from 'react-router-dom';

import NicheHero from '../components/niche/NicheHero';
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

    const scrollToRoles = () => {
        document.getElementById('roles-section')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-white flex flex-col font-body">
            <Navbar onOpenSurvey={openSurvey} hideMenu />

            <main className="flex-grow">
                <NicheHero
                    headline={<>Hire Dedicated Remote Employees for Your <span className="text-gold italic">Digital Agency</span> Starting at $6–$15/Hour</>}
                    subheadline="We recruit, vet, and place overseas professionals who handle the day-to-day work inside your business so you can grow without hiring expensive local staff."
                    bullets={[
                        "College-educated overseas professionals",
                        "Fully vetted and interview-ready",
                        "If you don't love them, you don't pay"
                    ]}
                    primaryCTA="Find Your Remote Employee"
                    secondaryCTA="See Available Roles"
                    onPrimaryClick={openSurvey}
                    onSecondaryClick={scrollToRoles}
                />

                <NichePain
                    niche="Digital Agency"
                    painPoints={[
                        "Too many repetitive, low-leverage tasks",
                        "Too expensive to hire experienced local staff",
                        "No time to focus on sales and growth",
                        "Constant operational bottlenecks slowing delivery"
                    ]}
                    cycleText="You try to do everything yourself &rarr; growth stalls &rarr; hiring locally feels too expensive &rarr; you stay stuck."
                />

                <NicheArbitrage
                    headline="How Smart Agencies Scale Without Expensive Local Hires"
                    conceptDescription={<>Instead of hiring a $50,000 employee locally, you hire a trained overseas professional for <span className="font-bold text-navy">$6–$15/hour.</span></>}
                    conceptKeyDifference="But the key difference: You don't have to recruit, train, or manage the hiring process."
                    features={[
                        "Sourcing & Recruiting",
                        "Deep Screening & Testing",
                        "Interview Scheduling",
                        "Payroll Management",
                        "Ongoing Performance Support"
                    ]}
                />

                <div id="roles-section">
                    <NicheRoles
                        niche="Agencies"
                        roles={[
                            "Media Buyers",
                            "Video Editors",
                            "Graphic Designers",
                            "Account Managers",
                            "Appointment Setters",
                            "Social Media Managers"
                        ]}
                    />
                </div>

                <NicheProcess
                    steps={[
                        {
                            title: "Tell Us What You Need",
                            description: "Describe the role and responsibilities you need filled inside your agency."
                        },
                        {
                            title: "We Recruit and Vet Candidates",
                            description: "We source, skill-test, and interview candidates specifically for your required tools and workflow."
                        },
                        {
                            title: "You Meet the Finalists",
                            description: "You interview the top 2-3 candidates and choose who you want to hire. No guesswork."
                        },
                        {
                            title: "They Start Working",
                            description: "Your new remote employee begins immediately, integrated right into your team."
                        }
                    ]}
                />

                <NicheGuarantee
                    headline="Our Zero-Risk Hiring Guarantee"
                    guarantees={[
                        "We replace them for free",
                        "You don't pay."
                    ]}
                    footerText="No long contracts. No risk."
                />

                <NicheCostComparison
                    localHireFeatures={[
                        "$50,000+ Base Salary",
                        "Payroll Taxes & Insurance",
                        "Health Benefits",
                        "Office Space Costs",
                        "Expensive Recruiting Headaches"
                    ]}
                    fsaFeatures={[
                        "$6–$15/hr Flat Rate",
                        "Pre-Vetted Professionals",
                        "No Recruiting Fees",
                        "No Long-Term Contracts",
                        "Flexible Scaling"
                    ]}
                />

                <NicheTestimonial
                    quote="An agency owner hired a media buyer through us and reduced workload by 40% while simultaneously scaling their overall ad spend."
                />

                <NicheFAQ
                    faqs={[
                        {
                            question: "Are overseas workers reliable?",
                            answer: "Absolutely. We only place college-educated professionals who have been rigorously tested for reliability, English fluency, and technical skills. They treat this as their career, not a gig."
                        },
                        {
                            question: "What about communication and timezones?",
                            answer: "Your remote employee works within your preferred time zone (e.g., EST or PST). They integrate directly into your Slack, Teams, or preferred communication channels."
                        },
                        {
                            question: "What if it doesn't work out?",
                            answer: "We stand by our Zero-Risk Guarantee. If the candidate isn't the right fit within the specified trial period, we will replace them entirely for free, or you don't pay."
                        },
                        {
                            question: "Do I manage them directly?",
                            answer: "Yes! They are your dedicated employee. They report to you, use your systems, and follow your SOPs. We handle the HR, payroll, and initial match, but you manage their day-to-day work."
                        }
                    ]}
                />

                <NicheFinalPush
                    headline="Hire Your Next Remote Employee Without the Hiring Headache"
                    subheadline="Tell us the role you need and we'll introduce you to qualified, ready-to-work candidates."
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
