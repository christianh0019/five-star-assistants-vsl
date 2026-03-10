import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, ArrowRight, Play } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SurveyModal from '../components/SurveyModal';
import { youtubeVideos } from '../data/youtubeVideos';

const YouTubeVideoDetail: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const post = youtubeVideos.find((p) => p.slug === slug);

    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);

    const handleSurveyComplete = () => {
        closeSurvey();
        navigate('/booking');
    };

    useEffect(() => {
        if (!post) {
            navigate('/youtube-videos');
        }
        window.scrollTo(0, 0);
    }, [post, navigate]);

    if (!post) return null;

    // Extract Video ID for Embed
    const videoId = post.youtubeUrl.split('v=')[1]?.split('&')[0] || '';

    return (
        <div className="min-h-screen bg-white flex flex-col font-body text-navy pt-32 pb-20">
            <Navbar onOpenSurvey={openSurvey} />

            {/* Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1 z-50 mt-20 md:mt-24">
                <div className="h-full bg-gradient-to-r from-navy via-gold to-gold w-0 opacity-0" id="scroll-progress"></div>
            </div>

            <article className="container mx-auto px-4 md:px-8 max-w-4xl flex-grow">
                {/* Back Link */}
                <Link to="/youtube-videos" className="inline-flex items-center text-gray-500 hover:text-navy font-bold mb-12 transition-colors group">
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to YouTube Videos
                </Link>

                {/* Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-4 text-sm md:text-base text-gray-500 mb-6 font-medium uppercase tracking-wide">
                        <span className="text-navy font-bold bg-navy/5 px-3 py-1 rounded-full border border-navy/10">Video Insight</span>
                        <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            {post.date}
                        </div>
                        <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                        <div className="flex items-center gap-1">
                            <Clock size={16} />
                            {post.readTime}
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy mb-8 leading-[1.1]">
                        {post.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
                        {post.excerpt}
                    </p>
                </header>

                {/* YouTube Embed */}
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl mb-16 bg-gray-100 border border-gray-200">
                    {videoId ? (
                        <iframe
                            src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                            title={post.title}
                            className="absolute top-0 left-0 w-full h-full"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-navy text-white">
                            <Play size={48} className="text-gold mb-4" />
                            <p className="font-heading text-xl">Video unavailable</p>
                        </div>
                    )}
                </div>

                {/* Content Body */}
                <div
                    className="prose prose-lg md:prose-xl max-w-none text-gray-700 
                    prose-headings:font-heading prose-headings:font-bold prose-headings:text-navy 
                    prose-p:leading-relaxed prose-a:text-gold prose-a:no-underline hover:prose-a:underline 
                    prose-strong:text-navy focus:outline-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                >
                </div>

                {/* CTA Callout */}
                <div className="mt-16 bg-navy/5 border border-navy/10 rounded-2xl p-8 md:p-10 text-center">
                    <h3 className="font-heading text-2xl font-bold text-navy mb-4">Ready to implement this in your business?</h3>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">Book a discovery call to see how a remote employee from Five Star Assistants can handle these tasks for you.</p>
                    <button
                        onClick={openSurvey}
                        className="bg-navy hover:bg-navy-light text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
                    >
                        Book Your Free Call
                    </button>
                    <p className="font-heading italic text-gray-500 text-sm mt-4">100% Free. No Obligation.</p>
                </div>

                {/* Read Next Section */}
                <div className="mt-20 border-t border-gray-200 pt-16">
                    <p className="font-heading font-bold text-gray-500 mb-8 uppercase tracking-widest text-sm text-center md:text-left">Watch This Next</p>
                    {(() => {
                        const currentIndex = youtubeVideos.findIndex(p => p.id === post.id);
                        const nextPost = youtubeVideos[(currentIndex + 1) % youtubeVideos.length];

                        return (
                            <Link to={`/youtube-videos/${nextPost.slug}`} className="group block bg-white rounded-[2rem] p-4 md:p-8 hover:bg-gray-50 transition-colors border border-gray-100 shadow-sm hover:shadow-md items-center md:flex gap-8">
                                <div className="w-full md:w-1/3 aspect-video rounded-xl overflow-hidden shadow-lg mb-6 md:mb-0 relative">
                                    <img src={nextPost.thumbnail} alt={nextPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                    <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors"></div>
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40">
                                            <Play fill="white" className="text-white ml-1" size={24} />
                                        </div>
                                    </div>
                                </div>
                                <div className="md:w-2/3 text-center md:text-left">
                                    <h3 className="text-2xl md:text-3xl font-heading font-bold text-navy mb-4 group-hover:text-gold transition-colors">
                                        {nextPost.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 line-clamp-2">
                                        {nextPost.excerpt}
                                    </p>
                                    <span className="inline-flex items-center font-bold text-navy group-hover:text-gold group-hover:gap-1 transition-all">
                                        Watch Video <ArrowRight size={20} className="ml-1" />
                                    </span>
                                </div>
                            </Link>
                        );
                    })()}
                </div>

            </article>

            <Footer />

            <SurveyModal
                isOpen={isSurveyOpen}
                onClose={closeSurvey}
                onComplete={handleSurveyComplete}
                source="YouTube Video Detail"
            />
        </div>
    );
};

export default YouTubeVideoDetail;
