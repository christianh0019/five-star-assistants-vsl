import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, Users, Award,
    Film, Video, Zap, Scissors,
    ChevronDown, Check,
    FileX, BadgeDollarSign, RefreshCw, CreditCard, Play, Timer,
    TrendingUp, Briefcase, ShoppingBag,
    BarChart2, Target,
} from 'lucide-react';
import Hero from '../../components/Hero';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SurveyModal from '../../components/SurveyModal';
import ScrollReveal from '../../components/ScrollReveal';
import Button from '../../components/Button';
import SEO from '../../components/SEO';

// ─── Data ──────────────────────────────────────────────────────────────────

const socialProofStats = [
    { icon: Clock,      value: '7 Days',  label: 'Average Time to First Candidate' },
    { icon: DollarSign, value: '$6/hr',   label: 'Starting Rate' },
    { icon: Users,      value: '1,000+',  label: 'Businesses Served' },
    { icon: Award,      value: 'Top 1%',  label: 'Of Applicants Placed' },
];

const taskCategories = [
    {
        icon: Film,
        title: 'Short-Form Video Editing',
        desc: 'Reels, TikToks, and YouTube Shorts that hook in the first two seconds and keep viewers watching until the end.',
        items: [
            'Edit raw footage into polished Reels, TikToks, and YouTube Shorts (15–90 seconds)',
            'Add trending sounds, music tracks, and audio mixing for platform performance',
            'Apply text overlays, captions, and animated subtitles optimized for silent viewing',
            'Create hook-driven openers and pattern interrupts to maximize watch time',
            'Adapt and resize videos for every platform format (9:16, 1:1, 16:9)',
            'Produce multiple cut variants for A/B testing across audiences and platforms',
        ],
    },
    {
        icon: Video,
        title: 'Long-Form Video Production',
        desc: 'YouTube videos, webinars, and course content — edited to hold attention from the first frame to the last.',
        items: [
            'Edit full-length YouTube videos (5–60+ minutes) with clean pacing and structure',
            'Add B-roll, graphics, and supporting visuals to reinforce key talking points',
            'Create branded intro and outro sequences with logo animations',
            'Edit webinar and livestream recordings into clean, publishable content',
            'Produce course module videos with clear chapter structure and visual cues',
            'Export final files optimized for YouTube, Vimeo, Kajabi, or your platform of choice',
        ],
    },
    {
        icon: Zap,
        title: 'Motion Graphics & Text Animation',
        desc: 'Animated titles, lower thirds, and kinetic text that make your videos look like they cost ten times more.',
        items: [
            'Design and animate lower thirds, name tags, and title cards',
            'Create kinetic text sequences that visualize key statistics, quotes, and callouts',
            'Build custom animated transitions and scene wipes in your brand style',
            'Add animated logos, end screens, and subscribe CTAs to every video',
            'Produce graphic overlays, charts, and animated data visualizations',
            'Apply motion graphics templates consistently across all video content',
        ],
    },
    {
        icon: Scissors,
        title: 'Content Repurposing & Clipping',
        desc: 'Turn long-form content into a month\'s worth of short-form clips — every podcast, webinar, or YouTube video, atomized.',
        items: [
            'Clip long-form videos into 5–15 short-form highlights for social distribution',
            'Identify high-engagement moments and pull the best soundbites automatically',
            'Add captions, branding, and platform-specific formatting to each clip',
            'Repurpose podcast episodes into video clips for YouTube, Reels, and TikTok',
            'Create clip packages from webinars, interviews, and live Q&As',
            'Deliver a content library of short-form assets from every long-form recording',
        ],
    },
];

const advantages = [
    {
        icon: FileX,
        title: 'No Lock-In Contracts',
        desc: 'Work with us month to month. No long-term commitments, ever.',
    },
    {
        icon: BadgeDollarSign,
        title: 'No Setup Fees',
        desc: 'Recruiting is completely free. You only pay once your editor starts.',
    },
    {
        icon: RefreshCw,
        title: 'Free Replacement',
        desc: "If someone isn't the right fit, we replace them at no extra cost.",
    },
    {
        icon: CreditCard,
        title: 'One Simple Hourly Rate',
        desc: 'Your rate covers everything — equipment, software, and all associated costs.',
    },
    {
        icon: Play,
        title: 'Dedicated — Not Shared',
        desc: 'Your editor works exclusively for your content — not processing a queue of videos for other clients.',
    },
    {
        icon: Timer,
        title: 'Full Activity Tracking',
        desc: 'Every assistant uses full-screen tracking software monitored by our in-house HR team.',
    },
];

const whoIsThisFor = [
    {
        icon: TrendingUp,
        title: 'Content Creators & YouTubers',
        desc: "You're producing raw footage but spending 6+ hours editing every video. Your editor takes the raw file and delivers a finished, optimized video — so you can focus on creating more, not editing longer.",
    },
    {
        icon: Briefcase,
        title: 'Coaches & Course Creators',
        desc: 'You have webinar recordings, course modules, and talking-head videos that need professional editing before they go live. Your editor maintains quality and pacing across every piece of content you produce.',
    },
    {
        icon: ShoppingBag,
        title: 'Brands & Marketing Teams',
        desc: "You need a consistent flow of short-form ad creative, product videos, and social content. Your editor keeps the pipeline moving so your video strategy doesn't stall waiting on a freelancer.",
    },
];

const pillars = [
    {
        icon: Film,
        title: 'Stop Losing Viewers in the First 3 Seconds',
        desc: "The first three seconds determine whether a viewer watches or scrolls. A skilled editor knows how to build a hook, pace a cut, and structure a video so it holds attention from start to finish — not just look good in a static thumbnail.",
    },
    {
        icon: DollarSign,
        title: 'Save $55k+ vs. a Full-Time Video Editor',
        desc: 'In-house video editors in the US cost $55,000–$80,000 per year — before software, storage, and overhead. Our dedicated video editors start at $6/hr. Same daily output, same file management, none of the full-time burden.',
    },
    {
        icon: BarChart2,
        title: 'Consistent Output Is What Builds an Audience',
        desc: 'Publishing one great video every three months does nothing. The channels and brands that grow are the ones that publish consistently — every week, across every platform. A dedicated editor is what makes that volume actually possible.',
    },
];

const faqs = [
    {
        question: 'What editing software do they use?',
        answer: 'Adobe Premiere Pro, Final Cut Pro, DaVinci Resolve, and CapCut. For motion graphics and animation, they use After Effects or Canva video. We match you with an editor proficient in your preferred tools — or the best fit for the type of content you produce.',
    },
    {
        question: 'What video formats and resolutions can they work with?',
        answer: 'Any format — MP4, MOV, MXF, AVI, ProRes. They can handle footage from iPhones, DSLRs, mirrorless cameras, GoPros, and screen recordings. Output is delivered in the format and resolution specified — 4K, 1080p, vertical, or platform-optimized.',
    },
    {
        question: 'How do I send them raw footage?',
        answer: "Through Google Drive, Dropbox, Frame.io, or WeTransfer. Most editors set up a shared folder during onboarding — you drop in raw files, they edit and deliver finished videos back to the same folder. No complicated handoff process.",
    },
    {
        question: 'Can they add captions and subtitles?',
        answer: "Yes — captions are standard. They use auto-caption tools (Descript, Premiere's Speech to Text, or CapCut) then manually clean up and style them to match your brand. Subtitles are a key driver of watch time on mobile, so this is built into every short-form edit.",
    },
    {
        question: 'What\'s the typical turnaround time?',
        answer: 'Short-form Reels and TikToks: same day or next day. Long-form YouTube videos (20–40 mins): 2–3 days. Course modules or heavily produced content: 3–5 days. Turnaround improves as your editor learns your style and builds a library of your brand assets.',
    },
    {
        question: 'Can they optimize videos for YouTube SEO?',
        answer: "Yes — YouTube optimization (titles, descriptions, tags, chapters, thumbnails, end screens, cards) is part of the role. They can also handle thumbnail design in Canva or Photoshop. If deep keyword research is needed, pair them with an SEO specialist.",
    },
    {
        question: 'Do I need to provide music, or can they source it?',
        answer: 'They source royalty-free music from licensed libraries (Artlist, Epidemic Sound, YouTube Audio Library, TikTok sounds) appropriate for the platform. If you have a preferred music library subscription, they\'ll work within that. No copyright risks.',
    },
    {
        question: 'How is this different from hiring a video editor on Upwork?',
        answer: "Freelancers quote per-project, take on other clients, and have no brand consistency over time. Your Five Star editor is dedicated to your content, learns your style once, and is held accountable by our in-house HR team — including full-screen activity tracking.",
    },
];

// ─── Component ─────────────────────────────────────────────────────────────

const VideoEditor: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const navigate = useNavigate();

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);
    const handleSurveyComplete = () => { closeSurvey(); navigate('/booking'); };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen">
            <SEO
                title="Hire a Video Editor | Reels, YouTube & Short-Form Content | Five Star Assistants"
                description="Hire a dedicated video editor for Reels, TikToks, YouTube videos, and content repurposing. Free placement. Starting at $6/hr. Matched in 7 days."
                keywords="hire video editor, video editor virtual assistant, outsource video editing, affordable video editor, remote video editor, YouTube video editor, Reels editor for hire, TikTok video editor"
                canonical="https://www.fivestarassistants.com/hire/video-editor"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* ── Hero ──────────────────────────────────────────────── */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Video Editors"
                        headline={
                            <>
                                Hire A Dedicated Video Editor.{' '}
                                <span className="text-gold italic">Starting at $6/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Reels, TikToks, YouTube videos, and content repurposing —
                                edited, captioned, and delivered on schedule every week.{' '}
                                <span className="font-bold text-navy">Free placement. Matched in 7 days.</span>
                            </>
                        }
                    />
                </ScrollReveal>

                {/* ── Social Proof Stats ────────────────────────────────── */}
                <ScrollReveal delay={0.1}>
                    <section className="border-y border-gray-100 bg-gray-50/60 py-8 px-4">
                        <div className="max-w-5xl mx-auto">
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:divide-x md:divide-gray-200">
                                {socialProofStats.map(({ icon: Icon, value, label }) => (
                                    <div key={label} className="flex flex-col items-center text-center px-6">
                                        <div className="w-10 h-10 rounded-full bg-navy/[0.06] flex items-center justify-center mb-3">
                                            <Icon size={18} className="text-navy/70" />
                                        </div>
                                        <p className="font-heading font-bold text-2xl text-navy mb-1">{value}</p>
                                        <p className="font-body text-xs text-gray-500 leading-snug">{label}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* ── What They Handle ──────────────────────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12 md:mb-16">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    WHAT THEY HANDLE
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    Everything a Video Editor Takes Off Your Plate
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    One dedicated editor who handles short-form, long-form, motion graphics, and content repurposing — every week, without being chased.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {taskCategories.map(({ icon: Icon, title, desc, items }, idx) => (
                                    <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                                        <div className="w-12 h-12 rounded-xl bg-navy/[0.06] flex items-center justify-center mb-5">
                                            <Icon size={22} className="text-navy/70" />
                                        </div>
                                        <h3 className="font-heading font-bold text-navy text-xl mb-2">{title}</h3>
                                        <p className="font-body text-gray-500 text-sm mb-5 leading-relaxed">{desc}</p>
                                        <ul className="space-y-2">
                                            {items.map((item) => (
                                                <li key={item} className="flex items-start gap-2.5">
                                                    <span className="text-gold font-bold mt-0.5 shrink-0">—</span>
                                                    <span className="font-body text-sm text-gray-700 font-medium">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-14 text-center">
                                <Button onClick={openSurvey} variant="primary">
                                    Find My Video Editor
                                </Button>
                                <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* ── Why FSA — Navy Advantages ─────────────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-navy px-4 border-t-8 border-gold">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12 md:mb-16">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    WHY FIVE STAR ASSISTANTS
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
                                    Everything Included. Zero Hassle.
                                </h2>
                                <p className="font-body text-lg text-blue-100/70 max-w-xl mx-auto">
                                    We've removed every friction point from hiring a remote video editor so your content pipeline keeps moving without the overhead.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
                                {advantages.map(({ icon: Icon, title, desc }, idx) => (
                                    <div key={idx} className="bg-white/[0.05] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.08] transition-colors duration-200">
                                        <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-5">
                                            <Icon size={22} className="text-gold" />
                                        </div>
                                        <h3 className="font-heading font-bold text-white text-lg mb-2 leading-snug">{title}</h3>
                                        <p className="font-body text-sm text-blue-100/60 leading-relaxed">{desc}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="text-center">
                                <Button onClick={openSurvey} variant="primary">Get Started — It's Free</Button>
                                <p className="font-heading italic text-white/30 text-sm mt-3">No setup fees. No lock-in contracts.</p>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* ── Who Is This For ───────────────────────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-white px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12 md:mb-16">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    WHO THIS IS FOR
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    Built For Creators And Brands That Need To Publish More
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    If editing is the bottleneck between your raw footage and your audience — a dedicated video editor removes that bottleneck permanently.
                                </p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                {whoIsThisFor.map(({ icon: Icon, title, desc }, idx) => (
                                    <div key={idx} className="bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                                        <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center mb-5">
                                            <Icon size={22} className="text-gold" />
                                        </div>
                                        <h3 className="font-heading font-bold text-navy text-xl mb-3 leading-snug">{title}</h3>
                                        <p className="font-body text-gray-600 text-sm leading-relaxed">{desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* ── Built Around Your Content ─────────────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">

                            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
                                <div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                        WHY FSA FOR VIDEO
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built Around Your Content
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Most creators and brands have more raw footage than they know what to do with. The editing bottleneck is the reason great content never sees the light of day — it piles up on a hard drive while the backlog grows.</p>
                                        <p>At Five Star Assistants, we match you with a dedicated video editor who learns your style once and handles the entire pipeline — from raw file to finished, captioned, platform-ready video — every week, without a follow-up.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">Book A Discovery Call</Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>
                                <div>
                                    <img src="/images/va-2.png" alt="Video editor at work" className="w-full rounded-[2rem] shadow-xl object-cover" />
                                </div>
                            </div>

                            <div className="text-center mb-12">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    THREE REASONS TO CHOOSE FSA
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy">
                                    Why Businesses Trust Five Star Assistants
                                </h2>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                                <div className="flex flex-col gap-6">
                                    {pillars.map(({ icon: Icon, title, desc }, idx) => (
                                        <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex gap-5 items-start">
                                            <div className="w-12 h-12 rounded-xl bg-navy flex items-center justify-center flex-shrink-0">
                                                <Icon size={22} className="text-gold" />
                                            </div>
                                            <div>
                                                <h3 className="font-heading font-bold text-navy text-lg mb-2 leading-snug">{title}</h3>
                                                <p className="font-body text-gray-600 text-sm leading-relaxed">{desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div>
                                    <img src="/images/va-3.png" alt="Five Star Assistant at work" className="w-full rounded-[2rem] shadow-xl object-cover" />
                                </div>
                            </div>

                            <div className="mt-14 text-center">
                                <Button onClick={openSurvey} variant="primary">Start Building Your Team</Button>
                                <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                            </div>

                        </div>
                    </section>
                </ScrollReveal>

                {/* ── FAQ ───────────────────────────────────────────────── */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-white px-4 border-t border-gray-100">
                        <div className="max-w-3xl mx-auto">
                            <div className="text-center mb-12 md:mb-16">
                                <div className="flex items-center justify-center gap-4 mb-6">
                                    <span className="w-12 h-[1px] bg-gold" />
                                    <span className="font-body text-gold font-bold tracking-[0.2em] uppercase text-xs">FAQ</span>
                                    <span className="w-12 h-[1px] bg-gold" />
                                </div>
                                <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy">Common Questions</h2>
                            </div>
                            <div className="flex flex-col gap-3">
                                {faqs.map((faq, idx) => (
                                    <div key={idx} className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                                        <button
                                            onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                                            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-navy/[0.02] transition-colors duration-200"
                                        >
                                            <span className="font-heading font-bold text-lg text-navy leading-snug">{faq.question}</span>
                                            <ChevronDown size={20} className={`text-gold flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                                        </button>
                                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === idx ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'}`}>
                                            <div className="px-6 pb-5 pt-1 border-t border-gray-100">
                                                <p className="font-body text-gray-500 leading-relaxed">{faq.answer}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* ── Final CTA ─────────────────────────────────────────── */}
                <ScrollReveal>
                    <section className="bg-navy py-24 md:py-36 px-4 relative overflow-hidden border-t-8 border-gold">
                        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
                        <div className="max-w-4xl mx-auto text-center relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-body text-sm font-semibold mb-8">
                                <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                                READY TO GET STARTED?
                            </div>
                            <h2 className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
                                Stop Sitting On Raw Footage.{' '}
                                <span className="text-gold italic">Start Publishing.</span>
                            </h2>
                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us what you're filming and how often — and we'll match you with a qualified video editor in as little as 7 days. No freelancer delays, no setup fees, no long-term contracts.
                            </p>
                            <div className="flex flex-wrap justify-center gap-3 mb-12">
                                {['No setup fees', 'No lock-in contracts', 'Dedicated — not shared', 'Free placement'].map((item) => (
                                    <div key={item} className="flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-5 py-2.5">
                                        <Check size={14} className="text-gold flex-shrink-0" strokeWidth={3} />
                                        <span className="font-body text-white font-medium text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                            <Button onClick={openSurvey} variant="primary" className="w-full sm:w-auto min-w-[320px] text-xl shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] py-5">
                                Book A Free Discovery Call
                            </Button>
                            <p className="font-heading italic text-white/30 text-sm mt-4">100% Free. No Obligation.</p>
                        </div>
                    </section>
                </ScrollReveal>

            </main>

            <Footer />
            <SurveyModal isOpen={isSurveyOpen} onClose={closeSurvey} onComplete={handleSurveyComplete} source="Video Editor" />
        </div>
    );
};

export default VideoEditor;
