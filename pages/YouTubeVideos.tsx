import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SurveyModal from '../components/SurveyModal';
import { useNavigate, Link } from 'react-router-dom';
import { Play, Calendar, Clock } from 'lucide-react';
import { youtubeVideos } from '../data/youtubeVideos';

const YouTubeVideos: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);

    const handleSurveyComplete = () => {
        closeSurvey();
        navigate('/booking');
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-body">
            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow pt-36 md:pt-48 pb-20 px-4 md:px-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-gray-50 to-gray-50 text-navy">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 text-navy font-body text-sm font-semibold mb-6 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                            Free Resources
                        </div>
                        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 drop-shadow-sm text-navy">
                            Five Star Assistants <span className="text-gold">YouTube Channel</span>
                        </h1>
                        <p className="font-subheading text-navy/80 text-xl font-medium tracking-wider leading-relaxed max-w-2xl mx-auto">
                            Watch our latest insights on building remote teams, delegation strategies, and scaling your business efficiently.
                        </p>
                    </div>

                    {/* Video Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {youtubeVideos.map((video) => (
                            <Link
                                key={video.id}
                                to={`/youtube-videos/${video.slug}`}
                                className="group flex flex-col items-start bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                            >
                                {/* Thumbnail Container */}
                                <div className="w-full aspect-video rounded-xl overflow-hidden mb-6 relative shadow-md group-hover:shadow-lg transition-all duration-300">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-navy/20 group-hover:bg-navy/10 transition-colors"></div>

                                    {/* Play Button Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/40 shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                                            <Play fill="white" className="text-white ml-1" size={32} />
                                        </div>
                                    </div>

                                    <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs font-bold px-2 py-1 rounded backdrop-blur-sm">
                                        {video.duration}
                                    </div>
                                </div>

                                {/* Meta */}
                                <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 font-medium uppercase tracking-wide w-full">
                                    <div className="flex items-center gap-1">
                                        <Calendar size={14} />
                                        {video.date}
                                    </div>
                                    <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                                    <div className="flex items-center gap-1">
                                        <Clock size={14} />
                                        {video.readTime}
                                    </div>
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-heading font-bold text-navy mb-3 leading-tight group-hover:text-gold transition-colors">
                                    {video.title}
                                </h3>

                                <p className="text-gray-600 mb-6 line-clamp-2 leading-relaxed text-sm">
                                    {video.excerpt}
                                </p>

                                <span className="mt-auto inline-flex items-center font-bold text-navy group-hover:text-gold group-hover:gap-1 transition-all">
                                    Watch & Read <Play size={16} fill="currentColor" className="ml-1" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>

            <Footer />

            <SurveyModal
                isOpen={isSurveyOpen}
                onClose={closeSurvey}
                onComplete={handleSurveyComplete}
                source="YouTube Videos"
            />
        </div>
    );
};

export default YouTubeVideos;
