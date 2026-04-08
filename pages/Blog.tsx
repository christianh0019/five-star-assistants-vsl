import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SurveyModal from '../components/SurveyModal';
import { blogPosts } from '../data/blogPosts';

function formatDate(iso: string): string {
    const [year, month, day] = iso.split('-').map(Number);
    return new Date(year, month - 1, day).toLocaleDateString('en-US', {
        month: 'short', day: 'numeric', year: 'numeric'
    });
}

const Blog: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);
    const handleSurveyComplete = () => { closeSurvey(); navigate('/booking'); };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col font-body">
            <Helmet>
                <title>Blog — Virtual Assistant Tips & Small Business Insights | Five Star Assistants</title>
                <meta name="description" content="Practical guides on delegation, hiring, and scaling your business with virtual assistants. New posts every week." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://www.fivestarassistants.com/blog" />
                <meta property="og:title" content="Blog | Five Star Assistants" />
                <meta property="og:description" content="Practical guides on delegation, hiring, and scaling your business with virtual assistants." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.fivestarassistants.com/blog" />
            </Helmet>

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow pt-36 md:pt-48 pb-20 px-4 md:px-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-gray-50 to-gray-50 text-navy">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="max-w-4xl mx-auto text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 text-navy font-body text-sm font-semibold mb-6 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
                            Fresh Weekly
                        </div>
                        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 drop-shadow-sm text-navy">
                            The <span className="text-gold">Five Star</span> Blog
                        </h1>
                        <p className="font-subheading text-navy/80 text-xl font-medium tracking-wider leading-relaxed max-w-2xl mx-auto">
                            Practical guides on delegation, hiring, and growing your business — without burning out.
                        </p>
                    </div>

                    {/* Featured Post */}
                    {blogPosts.length > 0 && (
                        <Link
                            to={`/blog/${blogPosts[0].slug}`}
                            className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 mb-12"
                        >
                            <div className="md:flex">
                                <div className="md:w-1/2 aspect-video md:aspect-auto overflow-hidden">
                                    <img
                                        src={blogPosts[0].coverImage}
                                        alt={blogPosts[0].title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                </div>
                                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                                    <span className="inline-block text-xs font-bold uppercase tracking-widest text-gold mb-4">{blogPosts[0].category}</span>
                                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-4 leading-tight group-hover:text-gold transition-colors">
                                        {blogPosts[0].title}
                                    </h2>
                                    <p className="text-gray-600 leading-relaxed mb-6">{blogPosts[0].excerpt}</p>
                                    <div className="flex items-center gap-4 text-xs text-gray-400 font-medium uppercase tracking-wide mb-6">
                                        <div className="flex items-center gap-1"><Calendar size={13} />{formatDate(blogPosts[0].publishedAt)}</div>
                                        <div className="w-1 h-1 bg-gray-300 rounded-full" />
                                        <div className="flex items-center gap-1"><Clock size={13} />{blogPosts[0].readTime}</div>
                                    </div>
                                    <span className="inline-flex items-center font-bold text-navy group-hover:text-gold group-hover:gap-2 transition-all">
                                        Read Article <ArrowRight size={16} className="ml-1" />
                                    </span>
                                </div>
                            </div>
                        </Link>
                    )}

                    {/* Post Grid */}
                    {blogPosts.length > 1 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {blogPosts.slice(1).map((post) => (
                                <Link
                                    key={post.id}
                                    to={`/blog/${post.slug}`}
                                    className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                >
                                    <div className="aspect-video overflow-hidden">
                                        <img
                                            src={post.coverImage}
                                            alt={post.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex flex-col flex-grow p-6">
                                        <span className="text-xs font-bold uppercase tracking-widest text-gold mb-3">{post.category}</span>
                                        <h3 className="font-heading text-xl font-bold text-navy mb-3 leading-tight group-hover:text-gold transition-colors">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{post.excerpt}</p>
                                        <div className="mt-auto flex items-center gap-3 text-xs text-gray-400 font-medium uppercase tracking-wide">
                                            <div className="flex items-center gap-1"><Calendar size={12} />{formatDate(post.publishedAt)}</div>
                                            <div className="w-1 h-1 bg-gray-300 rounded-full" />
                                            <div className="flex items-center gap-1"><Clock size={12} />{post.readTime}</div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </main>

            <Footer />

            <SurveyModal
                isOpen={isSurveyOpen}
                onClose={closeSurvey}
                onComplete={handleSurveyComplete}
                source="Blog"
            />
        </div>
    );
};

export default Blog;
