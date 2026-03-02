import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SurveyModal from '../components/SurveyModal';
import Button from '../components/Button';
import { ArrowLeft, Play, TrendingUp, CheckCircle } from 'lucide-react';
import { caseStudies } from '../src/data/caseStudies';

const CaseStudyDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);

    // Scroll to top on load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    const study = caseStudies.find(c => c.slug === slug);

    if (!study) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 font-body">
                <h1 className="text-4xl font-heading text-navy mb-4 font-bold">Case Study Not Found</h1>
                <Link to="/results" className="text-gold font-bold flex items-center hover:text-navy transition-colors">
                    <ArrowLeft className="mr-2 h-5 w-5" /> Back to Results
                </Link>
            </div>
        );
    }

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);

    const handleSurveyComplete = () => {
        closeSurvey();
        navigate('/booking');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-body">
            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow pt-24 pb-32">

                {/* Back button & Header */}
                <div className="max-w-5xl mx-auto px-4 mb-12">
                    <Link to="/results" className="inline-flex items-center text-gray-500 hover:text-navy font-bold mb-8 transition-colors">
                        <ArrowLeft className="mr-2 h-5 w-5" /> Back to all results
                    </Link>

                    <div className="flex items-center gap-3 mb-6">
                        <span className="bg-navy text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">
                            {study.industry}
                        </span>
                        <span className="text-gray-500 font-bold">•</span>
                        <span className="text-gray-500 font-bold">{study.clientName}</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy leading-tight mb-8">
                        {study.title}
                    </h1>
                </div>

                {/* Video Player Section */}
                <div className="max-w-6xl mx-auto px-4 mb-20">
                    <div className="bg-navy rounded-[2rem] md:rounded-[3rem] p-4 md:p-8 shadow-2xl">
                        <div className="aspect-video w-full rounded-[1.5rem] md:rounded-[2rem] overflow-hidden bg-black relative shadow-inner">
                            {study.videoUrl.endsWith('.mp4') ? (
                                <video
                                    src={study.videoUrl}
                                    className="absolute inset-0 w-full h-full object-contain"
                                    controls
                                    playsInline
                                    preload="metadata"
                                >
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <>
                                    {/* Placeholder for actual video embed. For now, we simulate a poster frame */}
                                    <img
                                        src={study.thumbnailUrl}
                                        alt="Video thumbnail"
                                        className="absolute inset-0 w-full h-full object-cover opacity-60"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="w-24 h-24 bg-gold/90 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 shadow-[0_0_50px_rgba(255,215,0,0.5)]">
                                            <Play className="text-navy w-10 h-10 ml-2 animate-pulse" fill="currentColor" />
                                        </div>
                                    </div>

                                    {/* Uncomment actual iframe when you have real links */}
                                    {/* <iframe 
                                        src={study.videoUrl} 
                                        className="absolute inset-0 w-full h-full"
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                        allowFullScreen
                                    ></iframe> */}
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Metrics Bar */}
                <div className="max-w-5xl mx-auto px-4 mb-20">
                    <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                        {study.metrics.map((metric, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center pt-8 md:pt-0 first:pt-0">
                                <TrendingUp className="text-gold w-8 h-8 mb-4 opacity-80" />
                                <div className="font-heading text-4xl md:text-5xl font-bold text-navy mb-2">{metric.value}</div>
                                <div className="text-sm font-bold text-gray-400 uppercase tracking-widest">{metric.label}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Deep Dive Content */}
                <div className="max-w-4xl mx-auto px-4">
                    {study.slug === 'builderproject-fulfillment-team' ? (
                        <div className="text-left font-body max-w-3xl mx-auto space-y-12">
                            {/* Client Overview */}
                            <div className="space-y-4">
                                <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy border-b border-gray-200 pb-2">Client Overview</h3>
                                <div className="font-body text-lg text-gray-700 leading-relaxed space-y-4">
                                    <p>Christian is the founder of a marketing agency that helps custom home builders and remodeling companies generate more projects through structured marketing systems.</p>
                                    <p>His company builds marketing infrastructure for builders including advertising campaigns, backend systems, and content that helps construction companies consistently land new jobs and scale their businesses.</p>
                                    <p>After several years of operating the company, Christian reached a point where growth was being limited by one problem.</p>
                                    <p className="font-bold text-navy text-xl">He was doing too much himself.</p>
                                </div>
                            </div>

                            {/* The Challenge */}
                            <div className="space-y-4">
                                <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy border-b border-gray-200 pb-2">The Challenge</h3>
                                <div className="font-body text-lg text-gray-700 leading-relaxed space-y-4">
                                    <p>Like many growing businesses, Christian had reached the stage where he needed to hire help, but hiring locally created several major obstacles.</p>
                                    <p>Local talent was expensive, and the administrative burden of hiring employees added even more friction.</p>
                                    <blockquote className="border-l-4 border-gold bg-gold/5 p-6 rounded-r-xl italic font-heading text-xl text-navy my-6 shadow-sm">
                                        "The biggest issue for me was doing everything myself. Hiring locally was really expensive. I was looking at paying $30 an hour or more for anyone decent."
                                    </blockquote>
                                    <p>Beyond the cost, hiring locally meant dealing with payroll systems, W-2 employment, and potentially needing physical office space.</p>
                                    <p>Because of these challenges, Christian continued handling most of the work personally. This included tasks that should have been delegated, such as editing content and managing parts of the advertising process.</p>
                                    <blockquote className="border-l-4 border-gold bg-gold/5 p-6 rounded-r-xl italic font-heading text-xl text-navy my-6 shadow-sm">
                                        "I pretty much had to learn how to do everything myself."
                                    </blockquote>
                                    <p className="font-semibold text-navy">This limited how quickly the company could grow.</p>
                                </div>
                            </div>

                            {/* The Solution */}
                            <div className="space-y-4">
                                <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy border-b border-gray-200 pb-2">The Solution</h3>
                                <div className="font-body text-lg text-gray-700 leading-relaxed space-y-4">
                                    <p>Christian turned to Five Star Assistants to build a small overseas team that could take over key operational roles inside the business.</p>
                                    <p className="font-bold text-navy">Three positions were filled:</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-8">
                                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                            <h4 className="font-heading font-bold text-gold mb-2">Video Editor</h4>
                                            <p className="text-sm font-body text-gray-600">Responsible for editing company content and client advertising creatives.</p>
                                        </div>
                                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                            <h4 className="font-heading font-bold text-gold mb-2">Media Buyer</h4>
                                            <p className="text-sm font-body text-gray-600">Handles ad account setup, advertising campaigns, and backend marketing systems.</p>
                                        </div>
                                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                                            <h4 className="font-heading font-bold text-gold mb-2">Copywriter</h4>
                                            <p className="text-sm font-body text-gray-600">Writes advertising copy and marketing messaging for campaigns.</p>
                                        </div>
                                    </div>
                                    <p>With these roles filled, the company suddenly had the operational capacity it needed to support more clients.</p>
                                </div>
                            </div>

                            {/* Why Five Star Assistants */}
                            <div className="space-y-4">
                                <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy border-b border-gray-200 pb-2">Why Five Star Assistants</h3>
                                <div className="font-body text-lg text-gray-700 leading-relaxed space-y-4">
                                    <p>Christian was already aware that overseas talent existed. The challenge was finding the right people.</p>
                                    <blockquote className="border-l-4 border-gold bg-gold/5 p-6 rounded-r-xl italic font-heading text-xl text-navy my-6 shadow-sm">
                                        "I knew overseas hiring existed, but finding someone good takes forever. I didn't know where to find quality people or how to manage the process."
                                    </blockquote>
                                    <p>Rather than spending months recruiting and screening candidates himself, he chose to work with Five Star Assistants.</p>
                                    <blockquote className="border-l-4 border-gold bg-gold/5 p-6 rounded-r-xl italic font-heading text-xl text-navy my-6 shadow-sm">
                                        "You guys seemed like you had the process figured out, so I decided to give it a shot."
                                    </blockquote>
                                </div>
                            </div>

                            {/* The Results */}
                            <div className="space-y-4">
                                <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy border-b border-gray-200 pb-2">The Results</h3>
                                <div className="font-body text-lg text-gray-700 leading-relaxed space-y-4">
                                    <p>After building the team, the impact on the business was immediate.</p>
                                    <p>The new hires removed major operational bottlenecks and allowed Christian to shift into a leadership role.</p>
                                    <blockquote className="border-l-4 border-gold bg-gold/5 p-6 rounded-r-xl italic font-heading text-xl text-navy my-6 shadow-sm">
                                        "Now I can step more into a management role and focus on strategic decisions instead of doing everything myself."
                                    </blockquote>
                                    <p>Instead of spending time editing content or managing campaigns, he can now focus on activities that actually grow the business. These include:</p>

                                    <ul className="space-y-3 font-medium bg-white p-6 rounded-2xl border border-gray-100 shadow-sm my-6 inline-block pr-12">
                                        <li className="flex items-center gap-3"><span className="text-gold font-bold text-2xl">•</span> Sales and client acquisition</li>
                                        <li className="flex items-center gap-3"><span className="text-gold font-bold text-2xl">•</span> Strategic planning</li>
                                        <li className="flex items-center gap-3"><span className="text-gold font-bold text-2xl">•</span> Content creation for the company</li>
                                        <li className="flex items-center gap-3"><span className="text-gold font-bold text-2xl">•</span> Scaling operations</li>
                                    </ul>

                                    <p>With operational work delegated to his team, the company has been able to sign more clients and expand faster.</p>
                                    <blockquote className="border-l-4 border-gold bg-gold/5 p-6 rounded-r-xl italic font-heading text-xl text-navy my-6 shadow-sm">
                                        "We've been able to sign more clients because I know the work is being taken care of."
                                    </blockquote>
                                </div>
                            </div>

                            {/* Client Recommendation */}
                            <div className="space-y-4">
                                <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy border-b border-gray-200 pb-2">Client Recommendation</h3>
                                <div className="font-body text-lg text-gray-700 leading-relaxed space-y-4">
                                    <p>Christian credits one key factor for making the decision easy: the risk-free structure of the service.</p>
                                    <blockquote className="border-l-4 border-gold bg-gold/5 p-6 rounded-r-xl italic font-heading text-xl text-navy my-6 shadow-sm">
                                        "One of the coolest things is the replacement guarantee and the money-back guarantee. It takes away the risk."
                                    </blockquote>
                                    <p>For businesses that are unsure about hiring overseas talent, his advice is simple.</p>
                                    <blockquote className="border-l-4 border-gold bg-gold/5 p-6 rounded-r-xl italic font-heading text-xl text-navy my-6 shadow-sm">
                                        "I would just say go for it. There's really no reason not to at least give it a try."
                                    </blockquote>
                                </div>
                            </div>

                            {/* Key Takeaways */}
                            <div className="bg-navy p-8 md:p-12 rounded-3xl shadow-xl mt-12 relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0 pointer-events-none"></div>
                                <h3 className="relative z-10 font-heading text-2xl md:text-3xl font-bold text-white border-b border-white/20 pb-4 mb-8">Key Takeaways</h3>

                                <p className="font-body text-blue-100 text-lg mb-6 relative z-10">After hiring through Five Star Assistants, Christian was able to:</p>

                                <ul className="space-y-4 relative z-10 mb-8">
                                    <li className="flex items-start gap-4">
                                        <CheckCircle className="text-gold w-6 h-6 flex-shrink-0 mt-0.5" strokeWidth={3} />
                                        <span className="font-body text-lg text-white font-medium">Build a team without hiring expensive local employees</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <CheckCircle className="text-gold w-6 h-6 flex-shrink-0 mt-0.5" strokeWidth={3} />
                                        <span className="font-body text-lg text-white font-medium">Delegate operational work like editing, ads, and copywriting</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <CheckCircle className="text-gold w-6 h-6 flex-shrink-0 mt-0.5" strokeWidth={3} />
                                        <span className="font-body text-lg text-white font-medium">Focus on sales and business strategy</span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <CheckCircle className="text-gold w-6 h-6 flex-shrink-0 mt-0.5" strokeWidth={3} />
                                        <span className="font-body text-lg text-white font-medium">Increase the company's ability to serve more clients</span>
                                    </li>
                                </ul>

                                <div className="relative z-10 pt-6 border-t border-white/20">
                                    <p className="font-heading font-bold text-gold text-xl md:text-2xl italic tracking-wide">
                                        By leveraging overseas talent, he transformed from doing everything himself into leading a growing team.
                                    </p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="prose prose-lg prose-navy max-w-none">
                            <p className="text-2xl font-body font-medium text-gray-800 leading-relaxed mb-16 border-l-4 border-gold pl-6 py-2">
                                {study.fullDescription}
                            </p>

                            <div className="grid md:grid-cols-2 gap-12 mb-16">
                                <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
                                    <h3 className="font-heading text-2xl font-bold text-navy border-b border-gray-200 pb-4 mb-6 uppercase tracking-wider text-sm flex items-center">
                                        <span className="w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center mr-3 font-bold text-lg">!</span>
                                        The Challenge
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed font-medium">
                                        {study.challenge}
                                    </p>
                                </div>

                                <div className="bg-navy rounded-3xl p-8 border border-navy shadow-lg relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-48 h-48 bg-gold/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0"></div>
                                    <h3 className="font-heading text-2xl font-bold text-white border-b border-white/10 pb-4 mb-6 uppercase tracking-wider text-sm flex items-center relative z-10">
                                        <CheckCircle className="text-gold w-6 h-6 mr-3" />
                                        Our Solution
                                    </h3>
                                    <p className="text-blue-50 leading-relaxed relative z-10 font-medium tracking-wide">
                                        {study.solution}
                                    </p>
                                </div>
                            </div>

                            <div className="text-center bg-white rounded-3xl p-12 border border-gray-100 shadow-sm">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-6">
                                    The Result
                                </h3>
                                <p className="font-heading text-2xl md:text-3xl font-bold text-navy leading-tight max-w-2xl mx-auto">
                                    "{study.result}"
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Unified CTA */}
                <div className="max-w-4xl mx-auto px-4 mt-32 text-center">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                        Ready to achieve similar results?
                    </h2>
                    <Button
                        onClick={openSurvey}
                        variant="primary"
                        className="w-full sm:w-auto min-w-[360px] text-xl shadow-[0_0_40px_rgba(255,215,0,0.3)] hover:shadow-[0_0_60px_rgba(255,215,0,0.4)] animate-pulse hover:animate-none py-5"
                    >
                        Book A Discovery Call
                    </Button>
                </div>

            </main>

            <Footer />
            <SurveyModal
                isOpen={isSurveyOpen}
                onClose={closeSurvey}
                onComplete={handleSurveyComplete}
                source="CaseStudyDetail"
            />
        </div>
    );
};

export default CaseStudyDetail;
