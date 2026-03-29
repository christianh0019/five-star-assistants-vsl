import React, { useState, useRef } from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import SurveyModal from '../components/SurveyModal';
import ScrollReveal from '../components/ScrollReveal';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, ShieldCheck, Users,
    BookOpen, Monitor, Mail, Megaphone,
    Calendar, MessageCircle, ClipboardList, FileText,
    ChevronLeft, ChevronRight, Check,
    FileX, BadgeDollarSign, RefreshCw, Globe2, Timer, CreditCard,
    Award, Target, TrendingUp,
} from 'lucide-react';
import Button from '../components/Button';
import SEO from '../components/SEO';

const socialProofStats = [
    { icon: Clock,       value: '7 Days',  label: 'Average Time to First Candidate' },
    { icon: DollarSign,  value: '$4/hr',   label: 'Starting Rate' },
    { icon: ShieldCheck, value: '100%',    label: 'Free Placements' },
    { icon: Users,       value: 'Top 1%',  label: 'Of Applicants Placed' },
];

const roles = [
    {
        icon: BookOpen,
        title: 'Student Enrollment VA',
        desc: 'Handle every step of the enrollment process so new students get a great first impression.\n\n• Review applications and send acceptance or next-step emails\n• Set up student accounts and grant course or platform access\n• Send welcome emails, onboarding checklists, and getting-started guides\n• Collect payment, contracts, and intake forms from new students\n• Follow up on incomplete enrollments and students who have not logged in yet',
    },
    {
        icon: Monitor,
        title: 'LMS Admin VA',
        desc: 'Keep your course platform clean, current, and working — without doing it yourself.\n\n• Upload videos, PDFs, slide decks, and resources into Kajabi, Teachable, or Thinkific\n• Organize course modules, update lesson order, and fix broken links or access issues\n• Add and remove students, reset passwords, and troubleshoot platform problems\n• Build out new course modules using your outline and existing content\n• Run weekly quality checks to make sure everything is working before students notice',
    },
    {
        icon: Mail,
        title: 'Student Support VA',
        desc: 'Answer every student question fast — so you never have to touch your support inbox.\n\n• Handle inbound student emails about course access, downloads, and technical issues\n• Respond to refund requests, billing questions, and account changes\n• Create and maintain an FAQ doc to resolve common questions without escalation\n• Track all open support tickets and follow up until each one is resolved\n• Escalate complex issues to you with a full summary so you can respond in minutes',
    },
    {
        icon: Megaphone,
        title: 'Course Launch VA',
        desc: 'Coordinate all the moving parts of a launch so nothing slips through on launch day.\n\n• Set up and test email sequences in ActiveCampaign, ConvertKit, or Kajabi\n• Update landing pages, sales pages, and checkout links before the launch opens\n• Set up and track affiliate links and communicate with launch partners\n• Monitor registrations and send reminder emails leading up to the live date\n• Handle launch-day student access issues and flag problems to you immediately',
    },
    {
        icon: Calendar,
        title: 'Tutor Scheduling & Billing VA',
        desc: 'Book every session, send every invoice, and follow up on every unpaid balance.\n\n• Manage tutor and student calendars and book sessions based on availability\n• Handle reschedules, cancellations, and make-up session requests\n• Send invoices after each session and follow up on overdue payments\n• Track attendance, session notes, and progress milestones for each student\n• Send parent updates and progress reports on a regular schedule',
    },
    {
        icon: Users,
        title: 'Community Manager VA',
        desc: 'Keep your student community active and engaged — every single day.\n\n• Welcome new members in Circle, Mighty Networks, Facebook Groups, or Discord\n• Post daily or weekly discussion prompts and keep conversations going\n• Flag student questions, wins, and concerns for instructor review\n• Moderate content, enforce community rules, and remove inappropriate posts\n• Send weekly community digests and highlight top student interactions',
    },
    {
        icon: ClipboardList,
        title: 'Training Coordinator VA',
        desc: 'Manage the logistics of corporate or group training programs end to end.\n\n• Schedule instructors and learners and send calendar invites with Zoom links\n• Distribute course materials, pre-reads, and assessments before each session\n• Track completion rates and generate attendance and compliance reports\n• Send reminder emails before sessions and follow-up surveys after\n• Coordinate with corporate clients on headcount, rosters, and scheduling changes',
    },
    {
        icon: FileText,
        title: 'Content & Curriculum Support VA',
        desc: 'Handle the production work so the only thing left for you is the actual teaching.\n\n• Format slide decks, workbooks, study guides, and handouts to your brand standards\n• Transcribe video lessons and format them into readable study notes or PDFs\n• Build out assessments, quizzes, and reflection prompts from your content outlines\n• Organize and upload all course materials into your LMS and shared drive\n• Research and compile supplementary resources for lessons on request',
    },
];

const sampleJobs = [
    {
        icon: BookOpen,
        photo: 'https://pbalmjdytwiqxpftipwn.supabase.co/storage/v1/object/public/applicant-files/headshots/1773577156979-38suwprqedp.jpg',
        title: 'Student Enrollment Virtual Assistant',
        rate: '$4–6/hr',
        responsibilities: [
            'Process new student applications and send acceptance or next-step emails',
            'Set up student accounts and grant access to Kajabi, Teachable, or Thinkific',
            'Send welcome emails, onboarding packets, and getting-started checklists',
            'Collect and track intake forms, contracts, and payments from new students',
            'Follow up on incomplete enrollments until students are fully active',
        ],
        requirements: '1+ yr admin or customer onboarding experience · Kajabi, Teachable, or Thinkific · Email communication · High attention to detail',
    },
    {
        icon: Monitor,
        photo: 'https://pbalmjdytwiqxpftipwn.supabase.co/storage/v1/object/public/applicant-files/headshots/1773951913015-aam5gf636lv.png',
        title: 'LMS Admin & Student Support VA',
        rate: '$4–7/hr',
        responsibilities: [
            'Upload and organize course content — videos, PDFs, and resources — in the LMS',
            'Troubleshoot student access issues, reset passwords, and fix broken links',
            'Respond to student support emails about course content, access, and billing',
            'Handle refund requests and account change requests within set guidelines',
            'Run weekly checks to ensure all lessons, downloads, and links are working',
        ],
        requirements: '1+ yr LMS or e-learning admin experience · Kajabi, Teachable, Thinkific, or similar · Customer support · Strong written English',
    },
    {
        icon: Calendar,
        photo: 'https://pbalmjdytwiqxpftipwn.supabase.co/storage/v1/object/public/applicant-files/headshots/1773949496368-yt22mnxbtma.jpeg',
        title: 'Tutor Scheduling & Billing VA',
        rate: '$4–7/hr',
        responsibilities: [
            'Book, confirm, and reschedule tutoring sessions across multiple tutors and students',
            'Send session reminders and manage last-minute schedule changes',
            'Generate invoices after each session and follow up on overdue payments',
            'Track student attendance and log session notes for each learner',
            'Send regular progress updates and reports to parents or program managers',
        ],
        requirements: '1+ yr scheduling or tutoring admin experience · Calendly or Acuity · QuickBooks or similar · Strong follow-up habits · Clear communication',
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
        desc: 'We staff student support around the clock — great for global or async learners.',
    },
    {
        icon: Timer,
        title: 'Flexible Hours',
        desc: 'Start with 20 hours a week and scale up as your student base grows.',
    },
];

const Education: React.FC = () => {
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
            <SEO
                title="Education Virtual Assistants | Admin & Student Support | Five Star Assistants"
                description="Hire virtual assistants for education businesses and training companies. Enrollment admin, student support, course coordination & more. Starting at $4/hr."
                keywords="education virtual assistant, online course VA, student support VA, enrollment coordinator, eLearning virtual assistant, tutoring business VA, training company VA"
                canonical="https://www.fivestarassistants.com/industries/education"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* Hero */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Course Creators, Tutors, Coaches & Training Companies"
                        headline={
                            <>
                                Hire an Education Virtual Assistant.{' '}
                                <span className="text-gold italic">Starting at $4/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Stop doing the busywork. Get a trained VA to run your student emails, course admin, and scheduling — so you can spend your time teaching.{' '}
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
                                    Education Roles We Fill For Your Business
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    From student enrollment to course launches to community management — trained assistants who know how education businesses work.
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
                                        alt="Education virtual assistant"
                                        className="w-full rounded-[2rem] shadow-xl object-cover"
                                    />
                                </div>

                            </div>

                            <div className="mt-14 text-center">
                                <Button onClick={openSurvey} variant="primary">
                                    Find My Education Virtual Assistant
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
                                    Education Roles We've Successfully Placed
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    Real roles, real hires. Here's a look at what we've placed for course creators, tutors, coaches, and training companies.
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

                {/* Built Around Your Business */}
                <ScrollReveal>
                    <section className="py-20 md:py-32 bg-white px-4 border-t border-gray-100">
                        <div className="max-w-6xl mx-auto">
                            <div className="grid lg:grid-cols-2 gap-16 items-center">

                                <div>
                                    <h3 className="font-heading text-sm font-bold text-gold tracking-widest uppercase mb-4">
                                        WHY FSA FOR EDUCATION
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built For Course Creators, Tutors &amp; Coaches
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Your job is to teach — not to manage support tickets, update LMS modules, and answer the same student emails every day. But when your student base grows, that admin work grows with it. And it all ends up on your plate.</p>
                                        <p>We place trained assistants who already know how education businesses work. They know the platforms. They know the workflows. You tell us what you need, and we find the right person. Fast.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">
                                        Book A Discovery Call
                                    </Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>

                                <div className="mt-8 lg:mt-0">
                                    <img
                                        src="/images/va-2.png"
                                        alt="Education virtual assistant at work"
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
                                    Everything Your Education Business Needs, Under One Roof
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: BookOpen,
                                        title: 'Student Enrollment & Onboarding',
                                        desc: 'Get every new student set up and started without lifting a finger.',
                                        items: ['Application review and acceptance emails', 'LMS account setup and platform access', 'Welcome emails, intake forms, and contracts', 'First-week onboarding and check-in follow-up'],
                                    },
                                    {
                                        icon: Monitor,
                                        title: 'LMS Admin & Course Management',
                                        desc: 'Keep your course platform current and your content organized.',
                                        items: ['Content uploads — videos, PDFs, and slide decks', 'Module organization and broken link fixes', 'Password resets and access troubleshooting', 'New course build-out from your outline and content'],
                                    },
                                    {
                                        icon: Mail,
                                        title: 'Student Support & Community',
                                        desc: 'Give every student a fast response and a place to belong.',
                                        items: ['Student email and support ticket handling', 'Refund, billing, and account change requests', 'Community moderation on Circle, Mighty Networks, or Facebook', 'Daily engagement posts and member welcome messages'],
                                    },
                                    {
                                        icon: Megaphone,
                                        title: 'Launches, Scheduling & Content Support',
                                        desc: 'Run smooth launches and keep your content production moving.',
                                        items: ['Email sequences, landing pages, and affiliate setup for launches', 'Tutor and student session scheduling and billing', 'Slide deck, workbook, and study guide formatting', 'Corporate training logistics, compliance tracking, and reporting'],
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
                                    Why Education Businesses Choose Five Star Assistants
                                </h2>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-14">

                                <div className="flex flex-col gap-6">
                                    {[
                                        {
                                            icon: DollarSign,
                                            title: 'Tutors and Educators Lose 6–10 Hours Every Week to Admin Alone',
                                            desc: "That's a full workday — every week — spent on emails, scheduling, billing, and LMS updates instead of teaching. A VA takes that entire load off your plate starting at $4/hr, so you get your time back and your margins back.",
                                        },
                                        {
                                            icon: Award,
                                            title: 'They Know Your Platform Before Day One',
                                            desc: "Our assistants are trained on Kajabi, Teachable, Thinkific, Circle, Mighty Networks, ActiveCampaign, ConvertKit, and Google Classroom. You don't have to teach them how your business works. They already know.",
                                        },
                                        {
                                            icon: Target,
                                            title: 'Every Student Gets a Fast Response. Every Launch Runs Smoothly.',
                                            desc: "A slow response to a student or a missed step on launch day costs you real money. A dedicated VA handles support tickets and launch logistics so nothing falls through — and your students always feel taken care of.",
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
                                    How Much Time Education Businesses Lose to Admin
                                </h2>
                                <p className="font-body text-lg text-gray-500 max-w-2xl mx-auto">
                                    The fastest-growing education businesses have one thing in common. They stopped doing admin themselves.
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mb-12">

                                <div className="flex flex-col justify-between gap-4 h-full">
                                    {[
                                        { value: '6–10 hrs', label: 'Lost every single week by the average tutor or course operator to admin tasks like billing, emails, and scheduling. That\'s a full day — gone. (eLearning Industry 2024)' },
                                        { value: '74%', label: 'Of U.S. schools struggled to fill administrative positions for the 2024–25 school year. Education organizations at every level can\'t hire fast enough. (NCES / U.S. Dept. of Education 2024)' },
                                        { value: '$335B', label: 'The global e-learning market is projected to reach $334.96 billion by 2030 — growing at 21.7% per year. The businesses that scale will be the ones with support staff to match. (Grand View Research 2025)' },
                                    ].map(({ value, label }) => (
                                        <div key={label} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-center gap-6">
                                            <p className="font-heading font-bold text-3xl text-gold flex-shrink-0 w-24 leading-tight">{value}</p>
                                            <p className="font-body text-sm text-gray-500 leading-relaxed">{label}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 h-full">
                                    <p className="font-heading text-xs font-bold text-gold tracking-widest uppercase mb-8">WHERE COURSE CREATOR TIME GOES EACH WEEK</p>
                                    <div className="space-y-6">
                                        {[
                                            { label: 'Student emails & support', hrs: '5 hrs', pct: 100 },
                                            { label: 'LMS updates & admin',      hrs: '4 hrs', pct: 80 },
                                            { label: 'Scheduling & onboarding', hrs: '3 hrs', pct: 60 },
                                            { label: 'Launch prep & marketing', hrs: '3 hrs', pct: 60 },
                                            { label: 'With a Five Star VA',      hrs: '0 hrs', pct: 0, highlight: true },
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
                                    <p className="font-body text-xs text-gray-400 mt-6">* Based on eLearning Industry tutor and course creator time-use data</p>
                                </div>

                            </div>

                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                                <div className="w-16 h-16 rounded-2xl bg-navy/[0.06] flex items-center justify-center flex-shrink-0">
                                    <TrendingUp size={28} className="text-navy/70" />
                                </div>
                                <div>
                                    <p className="font-heading font-bold text-navy text-xl md:text-2xl mb-3 leading-snug">
                                        Education businesses that delegate admin report launching courses 2x faster and enrolling 30% more students
                                    </p>
                                    <p className="font-body text-gray-500 leading-relaxed">
                                        When your inbox is handled, your LMS is clean, and every new student gets a fast, professional onboarding experience — your reviews improve, your referrals grow, and your next launch runs smoother than the last. A single VA at $4/hr makes all of that possible.
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
                                Your Students Deserve A{' '}
                                <span className="text-gold italic">Five Star Experience</span>
                            </h2>

                            <p className="font-body text-xl text-blue-100/70 max-w-2xl mx-auto mb-12 leading-relaxed">
                                Tell us what you need and we'll find you the right VA — in 7 days or less. No recruiting, no risk, no long-term contracts.
                            </p>

                            <div className="flex flex-wrap justify-center gap-3 mb-12">
                                {['No setup fees', 'No lock-in contracts', 'Free placement', 'Education-trained VAs'].map((item) => (
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
                source="Education"
            />
        </div>
    );
};

export default Education;
