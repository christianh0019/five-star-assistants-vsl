import React, { useState, useRef } from 'react';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import SurveyModal from '../components/SurveyModal';
import ScrollReveal from '../components/ScrollReveal';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import {
    Clock, DollarSign, ShieldCheck, Users,
    Map, Plane, Mail, FileText,
    Globe2, Database, Megaphone, Star,
    ChevronLeft, ChevronRight, Check,
    FileX, BadgeDollarSign, RefreshCw, Timer, CreditCard,
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
        icon: Map,
        title: 'Travel Itinerary Coordinator',
        desc: "Research destinations, build day-by-day itineraries, and format polished proposals — so your advisors can close clients instead of building from scratch.\n\n• Research destinations, hotels, tours, and transport options based on client briefs\n• Build detailed day-by-day itineraries in Travefy, TravelJoy, or your preferred tool\n• Format proposals with maps, photos, and pricing breakdowns ready for client review\n• Process amendments and rebuild itineraries when client preferences change\n• Source and compare vendor options to match client budget and travel style",
    },
    {
        icon: Plane,
        title: 'Travel Booking & Reservations Specialist',
        desc: "Handle every booking from search to confirmation — and manage every change without disruption.\n\n• Search and book flights, hotels, car rentals, and tours via GDS or OTA platforms\n• Send booking confirmations, e-tickets, and travel documents to clients\n• Process amendments, upgrades, and cancellations and notify all relevant parties\n• Monitor booking deadlines, deposit due dates, and final payment schedules\n• Reconcile bookings against supplier invoices and flag any discrepancies",
    },
    {
        icon: Mail,
        title: 'Client Communications & Inbox Manager',
        desc: "Answer every inquiry fast and make sure no lead or client request ever falls through the cracks.\n\n• Handle all inbound client emails and chat inquiries within a defined response time\n• Follow up on open quotes and inquiries that have not responded within 24–48 hours\n• Draft and send pre-trip reminders, document packets, and travel day briefings\n• Manage post-trip follow-up emails and review requests after every completed trip\n• Log all client interactions in your CRM and create follow-up tasks for your advisors",
    },
    {
        icon: FileText,
        title: 'Travel Document & Visa Processing VA',
        desc: "Handle the research, paperwork, and deadline tracking so clients arrive prepared.\n\n• Research visa requirements, entry restrictions, and health documentation for each destination\n• Prepare visa application packets and guide clients through the submission process\n• Track passport renewal deadlines and send alerts before expiration\n• Organize and send travel document folders — visas, vouchers, e-tickets, insurance\n• Monitor changes to entry requirements and update clients before their departure",
    },
    {
        icon: Globe2,
        title: 'Tour Operations & Supplier Coordinator',
        desc: "Manage the back-and-forth with hotels, guides, and operators so nothing gets missed.\n\n• Contact suppliers to confirm availability, rates, and space for upcoming tours\n• Send booking requests and follow up until written confirmations are received\n• Communicate itinerary changes to all affected suppliers and re-confirm updated details\n• Maintain supplier contact databases and update records after every communication\n• Coordinate ground operators, local guides, and transfer vendors across multi-destination trips",
    },
    {
        icon: Database,
        title: 'Travel CRM & Database Manager',
        desc: "Keep your client records clean, your pipeline moving, and your commissions tracked.\n\n• Update client profiles with preferences, travel history, passport details, and loyalty numbers\n• Log all sales activity, quotes sent, and bookings made in your CRM or back-office system\n• Track commission due dates and follow up with suppliers on outstanding payments\n• Segment your client list and prepare targeted outreach lists for seasonal campaigns\n• Works in Travefy, TravelJoy, ClientBase, Zoho CRM, HubSpot, and similar platforms",
    },
    {
        icon: Megaphone,
        title: 'Travel Social Media & Content VA',
        desc: "Keep your agency top of mind with consistent, on-brand content across every platform.\n\n• Create and schedule destination posts, travel tips, and client testimonials on Instagram and Facebook\n• Design graphics and edit photos using Canva to match your agency brand\n• Write and schedule email newsletters to your client list via Mailchimp or similar\n• Respond to comments and DMs on social media and flag leads to your sales team\n• Research trending destinations and viral travel content to keep your feed relevant",
    },
    {
        icon: Star,
        title: 'Vacation Rental Guest Experience Coordinator',
        desc: "Handle every guest message, every cleaning handoff, and every review — across all your listings.\n\n• Respond to all pre-booking inquiries, check-in questions, and mid-stay requests\n• Send automated check-in instructions, house manual links, and checkout reminders\n• Coordinate cleaners and maintenance between back-to-back stays\n• Keep listing calendars, availability, and pricing synced across Airbnb, VRBO, and Booking.com\n• Request reviews from guests after checkout and respond to all reviews promptly",
    },
];

const sampleJobs = [
    {
        icon: Map,
        photo: 'https://pbalmjdytwiqxpftipwn.supabase.co/storage/v1/object/public/applicant-files/headshots/1773576593773-98l0rgmvq6v.jpg',
        title: 'Travel Itinerary Coordinator VA',
        rate: '$4–7/hr',
        responsibilities: [
            'Research and build day-by-day itineraries in Travefy or TravelJoy from client briefs',
            'Format proposals with pricing, maps, and vendor details ready for advisor review',
            'Process itinerary amendments and rebuild affected sections when clients request changes',
            'Source and compare hotel, tour, and transport options based on budget and preferences',
            'Coordinate with suppliers to confirm availability before adding to a proposal',
        ],
        requirements: '1+ yr travel agency or tour operator experience · Travefy, TravelJoy, or similar · Strong destination research skills · Attention to detail',
    },
    {
        icon: Plane,
        photo: 'https://pbalmjdytwiqxpftipwn.supabase.co/storage/v1/object/public/applicant-files/headshots/1773576426813-uyqoqxhcv0j.png',
        title: 'Travel Booking & Reservations VA',
        rate: '$5–8/hr',
        responsibilities: [
            'Book flights, hotels, car rentals, and tours via GDS platforms (Sabre, Amadeus, Travelport)',
            'Send confirmation emails and full travel document packets to clients after every booking',
            'Process amendments, cancellations, and upgrades and notify all affected suppliers',
            'Monitor deposit and final payment deadlines and send reminders to clients',
            'Reconcile booking records against supplier invoices and flag any billing discrepancies',
        ],
        requirements: '2+ yrs GDS experience (Sabre, Amadeus, or Travelport) · Travel booking and amendments · Strong attention to booking detail · Written English proficiency',
    },
    {
        icon: Star,
        photo: 'https://pbalmjdytwiqxpftipwn.supabase.co/storage/v1/object/public/applicant-files/headshots/1773964439674-vxdguuo8qmd.png',
        title: 'Vacation Rental Guest Experience VA',
        rate: '$4–6/hr',
        responsibilities: [
            'Respond to all guest inquiries, check-in questions, and mid-stay requests across all OTA channels',
            'Send check-in instructions, house manuals, and checkout reminders before each stay',
            'Coordinate cleaning crews and maintenance between back-to-back reservations',
            'Keep availability calendars and pricing synced across Airbnb, VRBO, and Booking.com',
            'Request reviews from guests post-checkout and respond to all reviews within 24 hours',
        ],
        requirements: '1+ yr vacation rental or hospitality experience · Guesty, Hostaway, or similar PMS · Multi-channel guest communication · Strong written English',
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
        desc: 'We staff across time zones — great for international travel businesses and after-hours guest support.',
    },
    {
        icon: Timer,
        title: 'Flexible Hours',
        desc: 'Start with 20 hours a week and scale up during peak travel seasons.',
    },
];

const Travel: React.FC = () => {
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
                title="Travel Agency Virtual Assistants | Booking & Client Support | Five Star Assistants"
                description="Hire virtual assistants for travel agencies and tour operators. Booking coordination, itinerary management, client support & more. Starting at $4/hr."
                keywords="travel agency virtual assistant, travel VA, booking coordinator VA, tour operator VA, itinerary management, travel client support, hospitality virtual assistant"
                canonical="https://www.fivestarassistants.com/industries/travel"
            />

            <Navbar onOpenSurvey={openSurvey} />

            <main className="flex-grow">

                {/* Hero */}
                <ScrollReveal>
                    <Hero
                        onOpenSurvey={openSurvey}
                        callout="Travel Agencies, Tour Operators & Vacation Rental Managers"
                        headline={
                            <>
                                Get a Travel Virtual Assistant.{' '}
                                <span className="text-gold italic">Starting at $4/hr.</span>
                            </>
                        }
                        subheadline={
                            <>
                                Stop doing admin. Let a trained VA handle your bookings, emails, itineraries, and client follow-ups — so you can focus on selling travel.{' '}
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
                                    Travel Roles We Fill For Your Business
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    From itinerary building to GDS bookings to guest communications — trained assistants who know how travel businesses operate.
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
                                        alt="Travel virtual assistant"
                                        className="w-full rounded-[2rem] shadow-xl object-cover"
                                    />
                                </div>

                            </div>

                            <div className="mt-14 text-center">
                                <Button onClick={openSurvey} variant="primary">
                                    Find My Travel Virtual Assistant
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
                                    Travel Roles We've Successfully Placed
                                </h2>
                                <p className="font-body text-xl text-gray-500 max-w-2xl mx-auto">
                                    Real roles, real hires. Here's a look at what we've placed for travel agencies, tour operators, and vacation rental managers.
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
                                        WHY FSA FOR TRAVEL
                                    </h3>
                                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-navy mb-8 leading-tight">
                                        Built For Travel Agencies, Tour Operators &amp; Rental Managers
                                    </h2>
                                    <div className="space-y-5 font-body text-gray-600 text-lg leading-relaxed mb-10">
                                        <p>Your best advisors should be selling travel — not spending hours building itineraries from scratch or chasing supplier confirmations. But without support staff, all of that falls on the people you need in front of clients.</p>
                                        <p>We place trained assistants who already know how travel businesses work. They know the GDS platforms. They know the booking tools. They know the workflows. You tell us what you need, and we find the right person. Fast.</p>
                                    </div>
                                    <Button onClick={openSurvey} variant="primary">
                                        Book A Discovery Call
                                    </Button>
                                    <p className="font-heading italic text-gray-400 text-sm mt-3">100% Free. No Obligation.</p>
                                </div>

                                <div className="mt-8 lg:mt-0">
                                    <img
                                        src="/images/va-2.png"
                                        alt="Travel virtual assistant at work"
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
                                    Everything Your Travel Business Needs, Under One Roof
                                </h2>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {[
                                    {
                                        icon: Plane,
                                        title: 'Bookings, Reservations & Itineraries',
                                        desc: 'Handle every booking and build every proposal without pulling your advisors away from clients.',
                                        items: ['GDS flight, hotel, and tour bookings via Sabre, Amadeus, or Travelport', 'Day-by-day itinerary building and proposal formatting', 'Booking amendments, cancellations, and re-confirmations', 'Deposit and final payment deadline monitoring'],
                                    },
                                    {
                                        icon: Mail,
                                        title: 'Client Communications & CRM',
                                        desc: "Stay responsive to every client and keep your pipeline organized.",
                                        items: ['Inbound inquiry handling and lead follow-up', 'Pre-trip document packets and travel day briefings', 'Post-trip follow-up emails and review requests', 'CRM data entry, client profile updates, and commission tracking'],
                                    },
                                    {
                                        icon: Globe2,
                                        title: 'Supplier Coordination & Documents',
                                        desc: 'Confirm every vendor and make sure every traveler is fully prepared.',
                                        items: ['Supplier availability checks and booking confirmations', 'Visa requirement research and application packet prep', 'Travel document organization — visas, e-tickets, vouchers', 'Itinerary change notifications to all affected suppliers'],
                                    },
                                    {
                                        icon: Star,
                                        title: 'Vacation Rental & Social Media',
                                        desc: 'Keep your guests happy and your brand visible without adding to your workload.',
                                        items: ['Guest messaging across Airbnb, VRBO, and Booking.com', 'Cleaner and maintenance coordination between stays', 'Review requests and responses across all OTA platforms', 'Destination content, social posts, and email newsletters'],
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
                                    Why Travel Businesses Choose Five Star Assistants
                                </h2>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-14">

                                <div className="flex flex-col gap-6">
                                    {[
                                        {
                                            icon: DollarSign,
                                            title: "Your Agency Is Growing. You Can't Hire Fast Enough.",
                                            desc: "Only 7% of travel agencies say finding qualified advisors is easy — and 69% plan to hire this year. A trained VA gives you the capacity you need in 7 days, not 6 months. And at $4/hr, you can staff up without blowing your margin.",
                                        },
                                        {
                                            icon: Award,
                                            title: 'They Know Your Tools Before Day One',
                                            desc: "Our assistants are trained on Sabre, Amadeus, Travelport, Travefy, TravelJoy, ClientBase, Guesty, Hostaway, and Zoho CRM. You don't have to teach them how travel works. They already know.",
                                        },
                                        {
                                            icon: Target,
                                            title: 'Every Inquiry Answered. Every Itinerary Built. Every Guest Cared For.',
                                            desc: "When a lead sits unanswered for 24 hours, it goes to a competitor. When a guest's check-in question goes ignored, it becomes a bad review. A dedicated VA handles all of it — so you only deal with the things that truly need you.",
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
                                    Why Travel Businesses Are Turning to Virtual Assistants
                                </h2>
                                <p className="font-body text-lg text-gray-500 max-w-2xl mx-auto">
                                    Travel is booming. The agencies that grow are the ones that stop doing $4/hr work themselves.
                                </p>
                            </div>

                            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch mb-12">

                                <div className="flex flex-col justify-between gap-4 h-full">
                                    {[
                                        { value: '7%', label: "Only 7% of travel agencies say it's easy to find qualified advisors. 69% plan to hire this year — but can't find the staff they need fast enough. (AMG Agency Survey 2024)" },
                                        { value: '$10.9T', label: "Travel and tourism contributed $10.9 trillion to global GDP in 2024 — 10% of the entire world economy. International visitor spending grew 11.6% in a single year. (WTTC 2024)" },
                                        { value: '$2.75T', label: "The global business travel market is projected to reach $2.75 trillion by 2030, growing at 8.2% per year. More travel means more bookings, more clients, and more admin. (Grand View Research 2025)" },
                                    ].map(({ value, label }) => (
                                        <div key={label} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex items-center gap-6">
                                            <p className="font-heading font-bold text-3xl text-gold flex-shrink-0 w-24 leading-tight">{value}</p>
                                            <p className="font-body text-sm text-gray-500 leading-relaxed">{label}</p>
                                        </div>
                                    ))}
                                </div>

                                <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 h-full">
                                    <p className="font-heading text-xs font-bold text-gold tracking-widest uppercase mb-8">WHERE TRAVEL AGENT TIME GOES EACH WEEK</p>
                                    <div className="space-y-6">
                                        {[
                                            { label: 'Client emails & inquiries', hrs: '6 hrs', pct: 100 },
                                            { label: 'Itinerary building',         hrs: '5 hrs', pct: 83 },
                                            { label: 'Bookings & supplier calls',  hrs: '4 hrs', pct: 67 },
                                            { label: 'Admin & document prep',      hrs: '3 hrs', pct: 50 },
                                            { label: 'With a Five Star VA',         hrs: '0 hrs', pct: 0, highlight: true },
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
                                    <p className="font-body text-xs text-gray-400 mt-6">* Based on travel industry operational benchmarks and Lemax tour operator research</p>
                                </div>

                            </div>

                            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                                <div className="w-16 h-16 rounded-2xl bg-navy/[0.06] flex items-center justify-center flex-shrink-0">
                                    <TrendingUp size={28} className="text-navy/70" />
                                </div>
                                <div>
                                    <p className="font-heading font-bold text-navy text-xl md:text-2xl mb-3 leading-snug">
                                        Travel agencies with dedicated admin support close 30–40% more bookings per advisor
                                    </p>
                                    <p className="font-body text-gray-500 leading-relaxed">
                                        When your advisors stop building itineraries and chasing suppliers, they have time to close leads. When every inquiry gets a fast response, more quotes convert. A single VA at $4/hr gives your advisors the support they need to do what they do best — sell travel.
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
                                {['No setup fees', 'No lock-in contracts', 'Free placement', 'Travel-trained VAs'].map((item) => (
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
                source="Travel"
            />
        </div>
    );
};

export default Travel;
