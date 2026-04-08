import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowLeft, Calendar, Clock, ArrowRight, User, Linkedin } from 'lucide-react';
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

const BlogPost: React.FC = () => {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const post = blogPosts.find((p) => p.slug === slug);

    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);
    const handleSurveyComplete = () => { closeSurvey(); navigate('/booking'); };

    useEffect(() => {
        if (!post) navigate('/blog');
        window.scrollTo(0, 0);
    }, [post, navigate]);

    if (!post) return null;

    const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
    const nextPost = blogPosts[(currentIndex + 1) % blogPosts.length];

    return (
        <div className="min-h-screen bg-white flex flex-col font-body text-navy pt-32">
            <Helmet>
                <title>{post.metaTitle}</title>
                <meta name="description" content={post.metaDescription} />
                <meta name="keywords" content={post.tags.join(', ')} />
                <meta name="author" content="Christian Hostetler" />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href={`https://www.fivestarassistants.com/blog/${post.slug}`} />
                <meta property="og:title" content={post.metaTitle} />
                <meta property="og:description" content={post.metaDescription} />
                <meta property="og:type" content="article" />
                <meta property="og:url" content={`https://www.fivestarassistants.com/blog/${post.slug}`} />
                <meta property="og:image" content={post.coverImage} />
                <meta property="article:published_time" content={post.publishedAt} />
                <meta property="article:author" content="Christian Hostetler" />
                <meta property="article:publisher" content="https://www.fivestarassistants.com" />
            </Helmet>

            <Navbar onOpenSurvey={openSurvey} />

            <article className="container mx-auto px-4 md:px-8 max-w-4xl flex-grow">
                {/* Back Link */}
                <Link to="/blog" className="inline-flex items-center text-gray-500 hover:text-navy font-bold mb-12 transition-colors group">
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
                    Back to Blog
                </Link>

                {/* Header */}
                <header className="mb-12">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 font-medium uppercase tracking-wide flex-wrap">
                        <span className="text-navy font-bold bg-navy/5 px-3 py-1 rounded-full border border-navy/10">{post.category}</span>
                        <div className="flex items-center gap-1"><User size={16} />Christian Hostetler</div>
                        <div className="w-1 h-1 bg-gray-300 rounded-full hidden md:block" />
                        <div className="flex items-center gap-1"><Calendar size={16} />{formatDate(post.publishedAt)}</div>
                        <div className="w-1 h-1 bg-gray-300 rounded-full hidden md:block" />
                        <div className="flex items-center gap-1"><Clock size={16} />{post.readTime}</div>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-navy mb-8 leading-[1.1]">
                        {post.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
                        {post.excerpt}
                    </p>
                </header>

                {/* Cover Image */}
                <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-xl mb-16">
                    <img src={post.coverImage} alt={post.title} title={post.title} className="w-full h-full object-cover" />
                </div>

                {/* Content */}
                <div
                    className="prose prose-lg md:prose-xl max-w-none text-gray-700
                    prose-headings:font-heading prose-headings:font-bold prose-headings:text-navy
                    prose-h2:text-3xl prose-h3:text-2xl
                    prose-p:leading-relaxed prose-a:text-gold prose-a:no-underline hover:prose-a:underline
                    prose-strong:text-navy prose-li:text-gray-700 prose-ul:my-4"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Author Bio */}
                <div className="mt-12 flex items-start gap-4 p-6 bg-gray-50 rounded-xl border border-gray-100">
                    <div className="flex-shrink-0 w-14 h-14 rounded-full overflow-hidden border-2 border-navy/10">
                        <img src="/images/christian-headshot.png" alt="Christian Hostetler" className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                        <div className="flex items-center gap-3">
                            <p className="font-heading font-bold text-navy">Christian Hostetler</p>
                            <a
                                href="https://www.linkedin.com/in/christian-hostetler-6b724b252"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-[#0077b5] transition-colors"
                                aria-label="Christian Hostetler on LinkedIn"
                            >
                                <Linkedin size={16} />
                            </a>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mt-1">Founder of Five Star Assistants. Helps U.S. business owners build offshore teams at 60-70% less than domestic hiring, without doing the recruiting, HR, or compliance themselves.</p>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 bg-navy/5 border border-navy/10 rounded-2xl p-8 md:p-10 text-center">
                    <h3 className="font-heading text-2xl font-bold text-navy mb-4">Ready to put this into practice?</h3>
                    <p className="text-gray-600 mb-8 max-w-xl mx-auto">Book a free call to see how a dedicated assistant from Five Star Assistants can handle the work — starting at $4/hr, no contracts.</p>
                    <button
                        onClick={openSurvey}
                        className="bg-navy hover:bg-gold text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
                    >
                        Book Your Free Call
                    </button>
                    <p className="font-heading italic text-gray-500 text-sm mt-4">100% Free. No Obligation.</p>
                </div>

                {/* Read Next */}
                <div className="mt-20 border-t border-gray-200 pt-16 pb-20">
                    <p className="font-heading font-bold text-gray-500 mb-8 uppercase tracking-widest text-sm text-center md:text-left">Read This Next</p>
                    <Link
                        to={`/blog/${nextPost.slug}`}
                        className="group block bg-white rounded-2xl p-4 md:p-8 hover:bg-gray-50 transition-colors border border-gray-100 shadow-sm hover:shadow-md md:flex gap-8 items-center"
                    >
                        <div className="w-full md:w-1/3 aspect-video rounded-xl overflow-hidden shadow-md mb-6 md:mb-0">
                            <img src={nextPost.coverImage} alt={nextPost.title} title={nextPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div className="md:w-2/3">
                            <span className="text-xs font-bold uppercase tracking-widest text-gold mb-2 block">{nextPost.category}</span>
                            <h3 className="text-2xl md:text-3xl font-heading font-bold text-navy mb-4 group-hover:text-gold transition-colors">
                                {nextPost.title}
                            </h3>
                            <p className="text-gray-600 mb-6 line-clamp-2">{nextPost.excerpt}</p>
                            <span className="inline-flex items-center font-bold text-navy group-hover:text-gold group-hover:gap-2 transition-all">
                                Read Article <ArrowRight size={20} className="ml-1" />
                            </span>
                        </div>
                    </Link>
                </div>
            </article>

            <Footer />

            <SurveyModal
                isOpen={isSurveyOpen}
                onClose={closeSurvey}
                onComplete={handleSurveyComplete}
                source="Blog Post"
            />
        </div>
    );
};

export default BlogPost;
