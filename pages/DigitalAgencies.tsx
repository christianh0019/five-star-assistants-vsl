import React, { useState, useRef } from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import SurveyModal from '../components/SurveyModal';
import ScrollReveal from '../components/ScrollReveal';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, ShieldCheck, Users,
    FileText, ClipboardList, Search, Calendar,
    ChevronLeft, ChevronRight, Check,
    FileX, BadgeDollarSign, RefreshCw, CreditCard, Globe2, Timer,
    Award, Target, TrendingUp, Megaphone,
} from 'lucide-react';
import Button from '../components/Button';

const socialProofStats = [
    { icon: Clock,       value: '7 Days',  label: 'Average Time to First Candidate' },
    { icon: DollarSign,  value: '$4/hr',   label: 'Starting Rate' },
    { icon: ShieldCheck, value: '100%',    label: 'Free Placements' },
    { icon: Users,       value: 'Top 1%',  label: 'Of Applicants Placed' },
];

const roles = [
    {
        icon: Users,
        title: 'Account Manager VA',
        desc: "Own client communication so your team can focus on strategy and delivery.\n\n• Manage client inboxes and draft weekly status updates for review\n• Maintain CRM records in HubSpot or Pipedrive after every client touchpoint\n• Build and send weekly performance report packages to clients\n• Coordinate deliverable timelines between media buyers, SEO, and content teams\n• Track contract renewals, upsell flags, and client satisfaction follow-ups",
    },
    {
        icon: Target,
        title: 'Media Buyer VA',
        desc: "Support your paid ads team with campaign setup, tracking, and daily ops.\n\n• Set up new campaigns in Google Ads and Meta Ads Manager per the strategist brief\n• Pull daily spend, CPC, ROAS, and CTR data into a shared performance tracker\n• Flag campaigns that are over budget or underperforming vs. KPIs\n• Upload creative assets and copy variations into ad platforms for testing\n• Conduct audience research and competitor ad analysis for strategy decks",
    },
    {
        icon: Search,
        title: 'SEO Virtual Assistant',
        desc: "Handle the research, on-page work, and reporting that keeps your SEO pipeline full.\n\n• Conduct keyword research in SEMrush and Ahrefs for client content calendars\n• Perform on-page optimization — meta titles, headers, alt text, and internal links\n• Run monthly technical SEO audits and log issues in a prioritized fix list\n• Execute backlink outreach — prospect sites, send personalized emails, log responses\n• Track and report monthly rankings and organic traffic changes in Google Search Console",
    },
    {
        icon: FileText,
        title: 'Content VA',
        desc: "Keep your content calendar full and client deliverables on time.\n\n• Research and draft long-form blog posts and landing pages from SEO briefs\n• Write ad copy variations — headlines, descriptions, and CTAs for A/B testing\n• Repurpose content across formats — blog to LinkedIn post to email to carousel\n• Proofread and format content in your CMS before it goes live\n• Manage the editorial calendar and coordinate deadlines with writers and designers",
    },
    {
        icon: Megaphone,
        title: 'Social Media VA',
        desc: "Schedule, publish, and monitor social content for your clients every day.\n\n• Schedule and publish posts across Instagram, LinkedIn, Facebook, and TikTok\n• Monitor comments, DMs, and mentions and draft response copy for approval\n• Source and resize visual assets using Canva and brand templates\n• Track engagement metrics and compile weekly performance snapshots\n• Research trending audio, hashtags, and competitor content for strategy briefs",
    },
    {
        icon: TrendingUp,
        title: 'Reporting VA',
        desc: "Build client-ready dashboards and reports so your team never misses a deadline.\n\n• Pull campaign data weekly from Google Ads, Meta, GA4, and SEMrush\n• Build and update white-labeled dashboards in Looker Studio or AgencyAnalytics\n• Generate monthly performance decks using templated slide formats\n• QA all report numbers against raw platform data before sending to clients\n• Maintain a reporting schedule tracker so no client misses their cycle",
    },
    {
        icon: Calendar,
        title: 'Client Onboarding VA',
        desc: "Get new clients set up fast so your team can start delivering results on day one.\n\n• Send onboarding questionnaires, collect logins, and organize assets in a shared folder\n• Build the client folder structure in Google Drive or ClickUp per your agency SOP\n• Request and confirm access to Google Ads, Meta Business Manager, GA4, and domain accounts\n• Populate CRM with client data and set up Slack channels and meeting logistics\n• Send the client welcome email sequence and intro materials on schedule",
    },
    {
        icon: ClipboardList,
        title: 'Ad Ops VA',
        desc: "Keep your live campaigns clean, tracked, and compliant every single day.\n\n• QA live campaigns daily — check for disapprovals, billing errors, or policy flags\n• Implement tracking pixels via Google Tag Manager for Meta, Google, and LinkedIn\n• Create and maintain UTM parameter structures for all campaign links\n• Audit landing page URLs, conversion tracking, and goal setup in GA4\n• Manage creative rotation — pause underperformers and push new ad sets per testing protocol",
    },
];

const sampleJobs = [
    {
        icon: Target,
        photo: 'https://pbalmjdytwiqxpftipwn.supabase.co/storage/v1/object/public/applicant-files/headshots/1773317059332-og8nusu69.jpg',
        title: 'Paid Ads Virtual Assistant',
        rate: '$4–7/hr',
        responsibilities: [
            'Set up and QA campaigns in Google Ads and Meta Ads Manager per strategist briefs',
            'Pull daily spend, ROAS, and CTR data and flag campaigns that are off-target',
            'Upload creatives, copy, and audiences into ad platforms for testing',
            'Track ad performance in a shared spreadsheet and update it each morning',
            'Build comparison sheets for creative tests and assist with budget pacing reports',
        ],
        requirements: '1+ yr paid ads support · Google Ads & Meta Ads Manager · Google Sheets · Strong English · ClickUp or Notion',
    },
    {
        icon: Search,
        photo: 'https://pbalmjdytwiqxpftipwn.supabase.co/storage/v1/object/public/applicant-files/headshots/1773575160375-5qbyq0l8f46.png',
        title: 'SEO & Content Virtual Assistant',
        rate: '$4–6/hr',
        responsibilities: [
            'Run keyword research in SEMrush and Ahrefs and build client content calendars',
            'Write and format blog posts and landing pages optimized for target keywords',
            'Perform on-page optimization — meta tags, headers, alt text, and internal linking',
            'Run monthly site audits and compile technical issues into a prioritized fix list',
            'Track and report monthly rankings and organic traffic in Google Search Console',
        ],
        requirements: '1+ yr SEO or content experience · SEMrush or Ahrefs · WordPress · Google Search Console · Strong written English',
    },
    {
        icon: TrendingUp,
        photo: 'https://pbalmjdytwiqxpftipwn.supabase.co/storage/v1/object/public/applicant-files/headshots/1773576507305-haz96b31yad.jpg',
        title: 'Account Manager & Reporting VA',
        rate: '$5–8/hr',
        responsibilities: [
            'Manage client inboxes and draft weekly status updates for review and approval',
            'Build and send monthly performance reports in Looker Studio or AgencyAnalytics',
            'Update CRM records and log all client touchpoints in HubSpot or Pipedrive',
            'Coordinate deliverable timelines between the media, SEO, and content teams',
            'Track contract renewals and flag upsell opportunities for the sales team',
        ],
        requirements: '1+ yr agency or account management experience · HubSpot or Pipedrive · Looker Studio or AgencyAnalytics · ClickUp or Notion',
    },
];

const advantages = [
    {
        icon: FileX,
        title: 'No Lock-In Contracts',
        desc: 'Work with us month to month. No long-term commitments required.',
    },
    {
        icon: BadgeDollarSign,
        title: 'No Set Up Fees',
        desc: 'Finding your VA is completely free. You only pay once they start.',
    },
    {
        icon: RefreshCw,
        title: 'Free To Change Your Staff',
        desc: "If someone isn't the right fit, we find a replacement at no extra cost.",
    },
    {
        icon: CreditCard,
        title: 'One Simple Hourly Rate',
        desc: 'Your rate covers everything — computer, internet, and all associated fees.',
    },
    {
        icon: Globe2,
        title: '24/7 Coverage Available',
        desc: 'We staff agencies around the clock — great for high-volume client periods.',
    },
    {
        icon: Timer,
        title: 'Flexible Hours',
        desc: 'Start with 20 hours a week and scale up as your agency grows.',
    },
];

const DigitalAgencies: React.FC = () => {
    const [isSurveyOpen, setIsSurveyOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);
    const touchStartX = useRef(0);
    const navigate = useNavigate();

    const prevSlide = () => setCurrentSlide(i => (i - 1 + roles.length) % roles.length);
    const nextSlide = () => setCurrentSlide(i => (i + 1) % roles.length);

    const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
    const handleTouchEnd = (e: React.TouchEvent) => {
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) { if (diff > 0) nextSlide(); else prevSlide(); }
    };

    const openSurvey = () => setIsSurveyOpen(true);
    const closeSurvey = () => setIsSurveyOpen(false);

    const handleSurveyComplete = () => {
        closeSurvey();
        navigate('/booking');
    };

    return (
        <div className="w-full bg-white flex flex-col min-h-screen">

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* Hero */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Media Buyers, SEO Agencies & Digital Marketing Firms"
                        headline={
                            <>
                                Hire a Virtual Assistant for Your Digital Agency.{' '}
                                <span className="text-gold italic">Starting at $4/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Get a trained agency VA to handle reporting, ad ops, SEO tasks, and client management.{' '}
                                <span className="font-bold text-navy">
                                    Placement is free. Your VA starts in 7 days or less.
                                </span>
                            </>
                        }
                    />
                </ScrollReveal>

                {/* Social Proof Bar */}
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

                {/* Roles Carousel + Image */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-7xl mx-auto">

                            <div className="text-center mb-12 md:mb-16">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    ROLES WE PLACE
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    Agency Roles We Fill For Your Team
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    From paid ads support to client reporting to SEO — trained assistants who know how digital agencies work.
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                                {/* Carousel */}
                                <div className="relative min-w-0">
                                    <div
                                        className="overflow-hidden rounded-[2rem]"
                                        onTouchStart={handleTouchStart}
                                        onTouchEnd={handleTouchEnd}
                                    >
                                        <div
                                            className="flex transition-transform duration-500 ease-out"
                                            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                                        >
                                            {roles.map((role, idx) => (
                                                <div key={idx} className="min-w-full">
                                                    <div className="bg-white p-8 md:p-12 rounded-[2rem] border border-gray-100 shadow-sm relative overflow-hidden flex flex-col min-h-[340px]">
                                                        <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
                                                        <div className="w-14 h-14 rounded-2xl bg-navy/5 flex items-center justify-center mb-6 shrink-0 relative z-10">
                                                            <role.icon className="text-navy" size={24} />
                                                        </div>
                                                        <h3 className="font-heading font-bold text-2xl md:text-3xl text-navy mb-5 leading-tight relative z-10">
                                                            {role.title}
                                                        </h3>
                                                        <div className="font-body text-gray-600 text-base leading-relaxed space-y-3 relative z-10">
                                                            {role.desc.split('\n\n').map((paragraph, pIdx) => {
                                                                if (paragraph.startsWith('•')) {
                                                                    return (
                                                                        <ul key={pIdx} className="space-y-2">
                                                                            {paragraph.split('\n').map((item, iIdx) => (
                                                                                <li key={iIdx} className="flex items-start gap-3">
                                                                                    <span className="text-gold font-bold mt-0.5 shrink-0">•</span>
                                                                                    <span className="font-medium text-gray-700">{item.replace('• ', '')}</span>
                                                                                </li>
                                                                            ))}
                                                                        </ul>
                                                                    );
                                                                }
                                                                return <p key={pIdx}>{paragraph}</p>;
                                                            })}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Controls */}
                                    <div className="flex items-center justify-center gap-6 mt-8">
                                        <button
                                            onClick={prevSlide}
                                            className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-navy hover:bg-navy hover:text-white hover:border-navy transition-all duration-200"
                                            aria-label="Previous"
                                        >
                                            <ChevronLeft size={20} />
                                        </button>
                                        <div className="flex items-center gap-2">
                                            {roles.map((_, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setCurrentSlide(idx)}
                                                    className={`rounded-full transition-all duration-300 h-2 ${idx === currentSlide ? 'bg-navy w-6' : 'bg-gray-300 hover:bg-gray-400 w-2'}`}
                                                    aria-label={`Go to slide ${idx + 1}`}
                                                />
                                            ))}
                                        </div>
                                        <button
                                            onClick={nextSlide}
                                            className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-navy hover:bg-navy hover:text-white hover:border-navy transition-all duration-200"
                                            aria-label="Next"
                                        >
                                            <ChevronRight size={20} />
                                        </button>
                                    </div>
                                    <p className="text-center font-body text-sm text-gray-400 mt-3">
                                        {currentSlide + 1} of {roles.length}
                                    </p>
                                </div>

                                {/* Industry image */}
                                <div className="mt-8 lg:mt-0">
                                    <img
                                        src="/images/va-1.png"
                                        alt="Digital agency virtual assistant"
                                        className="w-full rounded-[2rem] shadow-xl object-cover"
                                    />
                                </div>

                            </div>

                            <div className="mt-14 text-center">
                                <Button onClick={openSurvey} variant="primary">
                                    Find My Agency Virtual Assistant
                                </Button>
                                <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                            </div>

                        </div>
                    </section>
                </ScrollReveal>

                {/* Sample Jobs Placed */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-white px-4 border-t border-gray-100">
                        <div className="max-w-7xl mx-auto">
                            <div className="text-center mb-12 md:mb-16">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    RECENTLY PLACED
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    Agency Roles We've Successfully Placed
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    Real roles, real hires. Here's a look at what we've placed for digital agencies like yours.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
                                {sampleJobs.map((job, idx) => (
                                    <div key={idx} className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col overflow-hidden">

                                        <div className="p-6 pb-4 border-b border-gray-50">
                                            <div className="flex items-center gap-3 mb-4">
                                                <img
                                                    src={job.photo}
                                                    alt="Placed assistant"
                                                    className="w-11 h-11 rounded-full object-cover flex-shrink-0 border border-gray-100"
                                                />
                                            </div>
                                            <h3 className="font-heading font-bold text-lg text-navy leading-snug mb-2">
                                                {job.title}
                                            </h3>
                                            <span className="inline-block bg-gold/10 text-navy font-heading font-bold text-sm px-3 py-1 rounded-full">
                                                {job.rate}
                                            </span>
                                        </div>

                                        <div className="p-6 flex-grow">
                                            <p className="font-heading text-xs font-bold text-gray-400 tracking-widest uppercase mb-3">
                                                Responsibilities
                                            </p>
                                            <ul className="space-y-2">
                                                {job.responsibilities.map((r, rIdx) => (
                                                    <li key={rIdx} className="flex items-start gap-2.5">
                                                        <Check size={14} className="text-gold mt-0.5 flex-shrink-0" strokeWidth={3} />
                                                        <span className="font-body text-sm text-gray-600 leading-snug">{r}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
                                            <p className="font-heading text-xs font-bold text-gray-400 tracking-widest uppercase mb-1.5">
                                                Requirements
                                            </p>
                                            <p className="font-body text-xs text-gray-500 leading-relaxed">{job.requirements}</p>
                                        </div>

                                    </div>
                                ))}
                            </div>

                            <div className="text-center">
                                <Button onClick={openSurvey} variant="primary">
                                    Hire A Role Like These
                                </Button>
                                <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                            </div>

                        </div>
                    </section>
                </ScrollReveal>

                {/* Advantages */}
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
                                    We handle the hiring. You get a great VA. It really is that simple.
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
                                <Button onClick={openSurvey} variant="primary">
                                    Get Started — It's Free
                                </Button>
                                <p className="font-heading italic text-white/30 text-sm mt-3">No setup fees. No long-term contracts.</p>
                            </div>

                        </div>
                    </section>
                </ScrollReveal>

                {/* Built Around Your Agency */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-white px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">

                                <div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                        WHY FSA FOR DIGITAL AGENCIES
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built For Digital Marketing Agencies
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Your strategists should be optimizing campaigns and closing clients — not building dashboards or chasing logins. But without someone to handle that work, it all falls on your team anyway.</p>
                                        <p>We place trained assistants who already know how agencies work. They know the tools. They know the platforms. They know the workflows. You tell us the role, and we find the right person. Fast.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">
                                        Book A Discovery Call
                                    </Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>

                                <div className="mt-8 lg:mt-0">
                                    <img
                                        src="/images/va-2.png"
                                        alt="Digital agency virtual assistant at work"
                                        className="w-full rounded-[2rem] shadow-xl object-cover"
                                    />
                                </div>

                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* What We Cover */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-gray-50 px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12 md:mb-16">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    WHAT WE COVER
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    Everything Your Agency Needs, Under One Roof
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: Target,
                                        title: 'Paid Ads & Ad Operations',
                                        desc: 'Campaign setup, daily QA, and creative management so your buyers can focus on strategy.',
                                        items: ['Google Ads & Meta campaign setup and QA', 'UTM tracking, pixel setup, and GTM tags', 'Creative uploads and audience management', 'Daily budget pacing and performance logs'],
                                    },
                                    {
                                        icon: Search,
                                        title: 'SEO & Content Production',
                                        desc: 'Keyword research, on-page work, and content production to keep your SEO pipeline full.',
                                        items: ['Keyword research and content calendar management', 'On-page optimization — meta, headers, alt text', 'Blog and landing page drafting from briefs', 'Monthly technical audits and ranking reports'],
                                    },
                                    {
                                        icon: TrendingUp,
                                        title: 'Client Reporting & Dashboards',
                                        desc: 'White-labeled reports and dashboards delivered on time, every month.',
                                        items: ['Weekly data pulls from Google Ads, Meta, and GA4', 'Looker Studio and AgencyAnalytics dashboard builds', 'Monthly performance decks from slide templates', 'Report QA and delivery tracking for all clients'],
                                    },
                                    {
                                        icon: Megaphone,
                                        title: 'Account Management & Social Media',
                                        desc: 'Client communication, CRM updates, and social content — handled so nothing falls through.',
                                        items: ['Client inbox management and weekly status updates', 'CRM updates in HubSpot or Pipedrive after every call', 'Social media scheduling across all platforms', 'Onboarding setup — folders, access, and CRM entry'],
                                    },
                                ].map(({ icon: Icon, title, desc, items }, idx) => (
                                    <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                                        <div className="w-12 h-12 rounded-xl bg-navy/[0.06] flex items-center justify-center mb-5">
                                            <Icon size={22} className="text-navy/70" />
                                        </div>
                                        <h3 className="font-heading font-bold text-navy text-xl mb-3">{title}</h3>
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
                        </div>
                    </section>
                </ScrollReveal>

                {/* Three Pillars */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-white px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12 md:mb-16">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    THREE REASONS TO CHOOSE FSA
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    Why Digital Agencies Choose Five Star Assistants
                                </h2>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-14">

                                <div className="flex flex-col gap-6">
                                    {[
                                        {
                                            icon: DollarSign,
                                            title: 'Your Strategists Should Be Strategizing, Not Reporting',
                                            desc: "25% of agency employee time goes to non-billable internal work — the equivalent of one full week lost per month, per person. That time costs you real billable revenue. One VA at $4/hr can take it all back.",
                                        },
                                        {
                                            icon: Award,
                                            title: 'They Know Your Tools Before Day One',
                                            desc: "Our assistants know Google Ads, Meta Ads Manager, SEMrush, ClickUp, HubSpot, and Looker Studio. You don't have to teach them how agencies work. They already know.",
                                        },
                                        {
                                            icon: Target,
                                            title: 'No Report or Campaign Check Ever Gets Missed',
                                            desc: "One missed reporting deadline or a live campaign with a billing error can cost you a client. A dedicated VA monitors, reports, and QAs every single day — so nothing slips through.",
                                        },
                                    ].map(({ icon: Icon, title, desc }, idx) => (
                                        <div key={idx} className="relative bg-gray-50 rounded-2xl p-8 border border-gray-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex gap-5 items-start">
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

                                <div className="mt-8 lg:mt-0">
                                    <img
                                        src="/images/va-3.png"
                                        alt="Five Star Assistant at work"
                                        className="w-full rounded-[2rem] shadow-xl object-cover"
                                    />
                                </div>

                            </div>

                            <div className="text-center">
                                <Button onClick={openSurvey} variant="primary">
                                    Start Building Your Team
                                </Button>
                                <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                            </div>

                        </div>
                    </section>
                </ScrollReveal>

                {/* Stats Section */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-white px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">
                            <div className="text-center mb-12 md:mb-16">
                                <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                    THE NUMBERS
                                </h3>
                                <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-6">
                                    How Much Time Digital Agencies Lose to Admin
                                </h2>
                                <p className="font-body text-lg text-gray-500 max-w-2xl mx-auto">
                                    The agencies growing fastest aren't the ones working harder. They're the ones who stopped doing work that a VA can do for $4/hr.
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mb-12">

                                <div className="flex flex-col justify-between gap-4 h-full">
                                    {[
                                        { value: '25%', label: 'Of agency employee time goes to non-billable internal work — the equivalent of one full week lost per month, per person (COR/ProjectCor, 2024)' },
                                        { value: '$2,143', label: 'Average cost per hire at agencies in 2024, while staffing firms could only fill every second job order (SenseHQ, 2024)' },
                                        { value: '$456.7B', label: 'Digital marketing market size in 2025 — projected to reach $1.2 trillion by 2034. Agencies need capacity to grow with it (IMARC Group, 2025)' },
                                    ].map(({ value, label }) => (
                                        <div key={label} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-center gap-6">
                                            <p className="font-heading font-bold text-3xl text-gold flex-shrink-0 w-24 leading-tight">{value}</p>
                                            <p className="font-body text-sm text-gray-500 leading-relaxed">{label}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 h-full">
                                    <p className="font-heading text-xs font-bold text-gold tracking-widest uppercase mb-8">WHERE AGENCY TIME GOES EACH DAY</p>
                                    <div className="space-y-6">
                                        {[
                                            { label: 'Client reporting',          hrs: '2.0 hrs', pct: 100 },
                                            { label: 'Campaign QA & uploads',     hrs: '1.8 hrs', pct: 90 },
                                            { label: 'CRM & data entry',          hrs: '1.5 hrs', pct: 75 },
                                            { label: 'Client comms & follow-up',  hrs: '1.0 hr',  pct: 50 },
                                            { label: 'With a Five Star VA',       hrs: '0 hrs',   pct: 0, highlight: true },
                                        ].map(({ label, hrs, pct, highlight }) => (
                                            <div key={label} className="flex items-center gap-4">
                                                <span className={`font-heading font-bold text-xs w-36 flex-shrink-0 leading-tight ${highlight ? 'text-gold' : 'text-gray-500'}`}>{label}</span>
                                                <div className="flex-1 h-7 bg-gray-200 rounded-full overflow-hidden">
                                                    <div
                                                        className={`h-full rounded-full ${highlight ? 'bg-gold/30' : 'bg-gold'}`}
                                                        style={{ width: `${pct}%` }}
                                                    />
                                                </div>
                                                <span className={`font-heading font-bold text-xs w-14 text-right flex-shrink-0 ${highlight ? 'text-gold' : 'text-navy'}`}>{hrs}</span>
                                            </div>
                                        ))}
                                    </div>
                                    <p className="font-body text-xs text-gray-400 mt-6">* Based on COR/ProjectCor agency workforce data</p>
                                </div>

                            </div>

                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                                <div className="w-16 h-16 rounded-2xl bg-navy/[0.06] flex items-center justify-center flex-shrink-0">
                                    <TrendingUp size={28} className="text-navy/70" />
                                </div>
                                <div>
                                    <p className="font-heading font-bold text-navy text-xl md:text-2xl mb-3 leading-snug">
                                        Agencies that delegate admin report handling 30–40% more clients with the same team
                                    </p>
                                    <p className="font-body text-gray-500 leading-relaxed">
                                        When account managers stop building reports, they have time to grow accounts. When your team stops doing campaign QA, they have time to optimize. One VA hire at $4/hr can unlock more capacity than hiring a second strategist — at a fraction of the cost.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </ScrollReveal>

                {/* Final CTA */}
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
                                Your Agency Deserves A{' '}
                                <span className="text-gold italic">Five Star Team</span>
                            </h2>

                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us what you need and we'll find you the right VA — in 7 days or less. No recruiting, no risk, no long-term contracts.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mb-12">
                                {['No setup fees', 'No lock-in contracts', 'Free placement', 'Agency-trained VAs'].map((item) => (
                                    <div key={item} className="flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-5 py-2.5">
                                        <Check size={14} className="text-gold flex-shrink-0" strokeWidth={3} />
                                        <span className="font-body text-white font-medium text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                onClick={openSurvey}
                                variant="primary"
                                className="w-full sm:w-auto min-w-[320px] text-xl shadow-[0_0_40px_rgba(212,175,55,0.4)] hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] py-5"
                            >
                                Book A Free Discovery Call
                            </Button>
                            <p className="font-heading italic text-white/30 text-sm mt-4">100% Free. No Obligation.</p>
                        </div>
                    </section>
                </ScrollReveal>

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
