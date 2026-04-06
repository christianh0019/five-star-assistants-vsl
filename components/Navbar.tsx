import React, { useState, useEffect } from 'react';
import {
    Menu, X, ChevronDown,
    Heart, Home, Scale, ShoppingBag, ShieldCheck,
    Truck, BarChart2, Wrench, GraduationCap, Plane,
    Phone, Monitor, Zap,
    Briefcase, TrendingUp, Megaphone, DollarSign, HeadphonesIcon,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

interface NavbarProps {
    onOpenSurvey?: () => void;
    hideMenu?: boolean;
    alwaysWhite?: boolean;
    loginHref?: string;
}

const navLinkClass = 'text-sm font-body font-medium text-gray-600 hover:text-navy transition-colors';

const serviceCategories = [
    {
        label: 'Admin & Operations',
        icon: Briefcase,
        items: [
            { label: 'General Virtual Assistant',  href: '/hire/virtual-assistant' },
            { label: 'Executive Assistant',         href: '/hire/executive-assistant' },
            { label: 'Calendar & Email Management', href: '/hire/calendar-email-management' },
            { label: 'Data Entry & Research',       href: '/hire/data-entry' },
            { label: 'Project Coordinator',         href: '/hire/project-coordinator' },
            { label: 'Travel & Logistics',          href: '/hire/travel-logistics' },
            { label: 'Document & File Management',  href: '/hire/document-management' },
        ],
    },
    {
        label: 'Sales & Lead Generation',
        icon: TrendingUp,
        items: [
            { label: 'Sales Development Rep (SDR)', href: '/hire/sdr' },
            { label: 'Appointment Setter',          href: '/hire/appointment-setter' },
            { label: 'Lead List Building',          href: '/hire/lead-list-building' },
            { label: 'CRM Management',              href: '/hire/crm-management' },
            { label: 'Follow-Up & Pipeline',        href: '/hire/pipeline-management' },
        ],
    },
    {
        label: 'Marketing',
        icon: Megaphone,
        items: [
            { label: 'Social Media Manager',        href: '/hire/social-media-manager' },
            { label: 'Content Writer & Copywriter', href: '/hire/content-writer' },
            { label: 'Email Marketing Specialist',  href: '/hire/email-marketing' },
            { label: 'Graphic Designer',            href: '/hire/graphic-designer' },
            { label: 'Video Editor & Reels Creator',href: '/hire/video-editor' },
            { label: 'SEO Specialist',              href: '/hire/seo-specialist' },
            { label: 'Paid Ads Manager',            href: '/hire/paid-ads-manager' },
        ],
    },
    {
        label: 'Customer Support',
        icon: HeadphonesIcon,
        items: [
            { label: 'Customer Service Rep',        href: '/hire/customer-service' },
            { label: 'Live Chat Support',           href: '/hire/live-chat-support' },
            { label: 'Email & Ticket Support',      href: '/hire/email-support' },
            { label: 'Phone & Call Handling',       href: '/hire/call-handling' },
            { label: 'Client Onboarding Specialist',href: '/hire/client-onboarding' },
        ],
    },
    {
        label: 'Finance & Bookkeeping',
        icon: DollarSign,
        items: [
            { label: 'Bookkeeper',                      href: '/hire/bookkeeper' },
            { label: 'Accounts Payable & Receivable',   href: '/hire/accounts-payable-receivable' },
            { label: 'Invoicing & Billing',             href: '/hire/invoicing' },
            { label: 'Expense Tracking',                href: '/hire/expense-tracking' },
            { label: 'Payroll Support',                 href: '/hire/payroll-support' },
        ],
    },
];

const industries = [
    { label: 'Healthcare',           icon: Heart,         href: '/industries/healthcare' },
    { label: 'Real Estate',          icon: Home,          href: '/industries/real-estate' },
    { label: 'Legal',                icon: Scale,         href: '/industries/legal' },
    { label: 'E-Commerce',           icon: ShoppingBag,   href: '/industries/e-commerce' },
    { label: 'Insurance',            icon: ShieldCheck,   href: '/industries/insurance' },
    { label: 'Logistics',            icon: Truck,         href: '/industries/logistics' },
    { label: 'Financial Services',   icon: BarChart2,     href: '/industries/financial-services' },
    { label: 'Home Services',        icon: Wrench,        href: '/industries/home-services' },
    { label: 'Education & Training', icon: GraduationCap, href: '/industries/education' },
    { label: 'Travel',               icon: Plane,         href: '/industries/travel' },
    { label: 'Telecommunications',   icon: Phone,         href: '/industries/telecommunications' },
    { label: 'Digital Agencies',     icon: Monitor,       href: '/digital-agencies' },
    { label: 'Energy & Utilities',   icon: Zap,           href: '/industries/energy' },
];

const Navbar: React.FC<NavbarProps> = ({ onOpenSurvey, hideMenu, alwaysWhite, loginHref }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMobileMenuOpen]);

    const closeMobile = () => {
        setIsMobileMenuOpen(false);
        setIsMobileServicesOpen(false);
        setIsMobileIndustriesOpen(false);
    };

    const handleGetStartedClick = () => {
        closeMobile();
        if (onOpenSurvey) onOpenSurvey();
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                    isMobileMenuOpen
                        ? 'bg-white py-4'
                        : (scrolled || alwaysWhite)
                            ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 py-4'
                            : 'bg-transparent py-4 md:py-6'
                }`}
            >
                <div className={`max-w-7xl mx-auto px-4 md:px-8 flex items-center ${hideMenu && !loginHref ? 'justify-center md:justify-start' : 'justify-between'}`}>

                    {/* Brand */}
                    <Link to="/" className="flex-shrink-0 cursor-pointer relative z-[60]" onClick={closeMobile}>
                        <Logo variant="dark" />
                    </Link>

                    {hideMenu && loginHref && (
                        <a
                            href={loginHref}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-body font-semibold text-navy border border-navy/20 hover:border-navy/50 hover:bg-navy/5 px-5 py-2 rounded-full transition-all"
                        >
                            Log In
                        </a>
                    )}

                    {!hideMenu && (
                        <>
                            {/* ── Desktop Navigation ───────────────────────────── */}
                            <div className="hidden md:flex items-center gap-6 lg:gap-8">

                                <Link to="/pricing" className={navLinkClass}>Pricing</Link>
                                <Link to="/results" className={navLinkClass}>Results</Link>
                                <Link to="/how-it-works" className={navLinkClass}>How It Works</Link>

                                {/* Services Mega Menu */}
                                <div className="relative group">
                                    <button className={`${navLinkClass} flex items-center gap-1 py-4 cursor-default`}>
                                        Services
                                        <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
                                    </button>

                                    {/* Mega Menu Panel */}
                                    <div className="absolute top-full -left-48 w-[960px] bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
                                        {/* Header */}
                                        <div className="px-6 py-4 bg-navy/[0.03] border-b border-gray-100">
                                            <p className="text-xs font-heading font-bold text-gold tracking-widest uppercase">Services We Place</p>
                                            <p className="text-xs font-body text-gray-500 mt-0.5">Hire specialized talent for any business function — starting at $5/hr</p>
                                        </div>

                                        {/* 5-column category grid */}
                                        <div className="grid grid-cols-5 p-5 gap-2">
                                            {serviceCategories.map(({ label, icon: Icon, items }) => (
                                                <div key={label}>
                                                    {/* Category header */}
                                                    <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                                                        <div className="w-6 h-6 rounded bg-navy/[0.06] flex items-center justify-center flex-shrink-0">
                                                            <Icon size={13} className="text-navy/60" />
                                                        </div>
                                                        <span className="text-[10px] font-heading font-bold text-navy uppercase tracking-wider leading-tight">{label}</span>
                                                    </div>
                                                    {/* Service links */}
                                                    <div className="flex flex-col gap-0.5">
                                                        {items.map(({ label: itemLabel, href }) => (
                                                            <Link
                                                                key={itemLabel}
                                                                to={href}
                                                                className="text-[12px] font-body text-gray-500 hover:text-navy hover:bg-navy/[0.04] rounded px-1.5 py-1 transition-all duration-150 leading-snug"
                                                            >
                                                                {itemLabel}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Industries Mega Menu */}
                                <div className="relative group">
                                    <button className={`${navLinkClass} flex items-center gap-1 py-4 cursor-default`}>
                                        Industries
                                        <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
                                    </button>

                                    {/* Mega Menu Panel */}
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[780px] bg-white rounded-2xl shadow-2xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden">
                                        {/* Header */}
                                        <div className="px-6 py-4 bg-navy/[0.03] border-b border-gray-100 flex items-center justify-between">
                                            <div>
                                                <p className="text-xs font-heading font-bold text-gold tracking-widest uppercase">Industries We Serve</p>
                                                <p className="text-xs font-body text-gray-500 mt-0.5">Specialized virtual assistant solutions for your industry</p>
                                            </div>
                                        </div>

                                        {/* Grid */}
                                        <div className="grid grid-cols-4 gap-1 p-4">
                                            {industries.map(({ label, icon: Icon, href }) => (
                                                <Link
                                                    key={label}
                                                    to={href}
                                                    className="flex items-center gap-3 px-3 py-3 rounded-xl hover:bg-navy/5 transition-all duration-150 group/item"
                                                >
                                                    <div className="w-9 h-9 rounded-lg bg-navy/[0.06] flex items-center justify-center flex-shrink-0 group-hover/item:bg-gold/15 transition-colors duration-150">
                                                        <Icon size={17} className="text-navy/70 group-hover/item:text-gold transition-colors duration-150" />
                                                    </div>
                                                    <span className="text-[13px] font-body font-medium text-gray-700 group-hover/item:text-navy transition-colors duration-150 leading-tight">
                                                        {label}
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Resources Dropdown */}
                                <div className="relative group">
                                    <button className={`${navLinkClass} flex items-center gap-1 py-4 cursor-default`}>
                                        Resources
                                        <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
                                    </button>
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[200px] bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top translate-y-2 group-hover:translate-y-0">
                                        <div className="py-2">
                                            <Link to="/referral-program" className="block px-6 py-3 text-sm font-body font-medium text-gray-600 hover:text-navy hover:bg-gray-50 transition-colors">Referral Program</Link>
                                            <Link to="/youtube-videos" className="block px-6 py-3 text-sm font-body font-medium text-gray-600 hover:text-navy hover:bg-gray-50 transition-colors">YouTube Videos</Link>
                                        </div>
                                    </div>
                                </div>

                                <Link to="/for-employees" className={navLinkClass}>Apply for Work</Link>

                                <a
                                    href="https://app.fivestarassistants.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={navLinkClass}
                                >
                                    Login
                                </a>

                                {onOpenSurvey && (
                                    <button
                                        onClick={onOpenSurvey}
                                        className="bg-navy hover:bg-navy-light text-white px-5 py-2.5 rounded-full text-sm font-body font-medium transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
                                    >
                                        Get Started
                                    </button>
                                )}
                            </div>

                            {/* Mobile Menu Toggle */}
                            <div className="md:hidden relative z-[60]">
                                <button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="p-2 text-navy hover:bg-navy/5 rounded-full transition-colors flex items-center justify-center focus:outline-none"
                                >
                                    {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </nav>

            {/* ── Mobile Full-Screen Menu ───────────────────────────────── */}
            {!hideMenu && (
                <div
                    className={`fixed inset-0 bg-white z-[45] transition-transform duration-300 ease-in-out flex flex-col pt-24 pb-8 px-6 md:hidden overflow-y-auto ${
                        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
                >
                    <div className="flex flex-col">
                        {[
                            { to: '/pricing',      label: 'Pricing' },
                            { to: '/results',      label: 'Results' },
                            { to: '/how-it-works', label: 'How It Works' },
                        ].map(({ to, label }) => (
                            <Link
                                key={to}
                                to={to}
                                onClick={closeMobile}
                                className="text-xl font-heading font-semibold text-navy hover:text-gold py-4 border-b border-gray-100 transition-colors"
                            >
                                {label}
                            </Link>
                        ))}

                        {/* Services — collapsible */}
                        <div className="border-b border-gray-100">
                            <button
                                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                className="w-full flex items-center justify-between py-4 text-xl font-heading font-semibold text-navy hover:text-gold transition-colors"
                            >
                                Services
                                <ChevronDown
                                    size={20}
                                    className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180 text-gold' : ''}`}
                                />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${isMobileServicesOpen ? 'max-h-[900px] pb-4' : 'max-h-0'}`}>
                                <div className="flex flex-col gap-5">
                                    {serviceCategories.map(({ label, icon: Icon, items }) => (
                                        <div key={label}>
                                            <div className="flex items-center gap-2 mb-2">
                                                <Icon size={13} className="text-navy/40" />
                                                <span className="text-[10px] font-heading font-bold text-navy/40 uppercase tracking-widest">{label}</span>
                                            </div>
                                            <div className="grid grid-cols-2 gap-x-3 gap-y-1 pl-1">
                                                {items.map(({ label: itemLabel, href }) => (
                                                    <Link
                                                        key={itemLabel}
                                                        to={href}
                                                        onClick={closeMobile}
                                                        className="text-sm font-body text-gray-600 hover:text-navy transition-colors py-0.5 leading-snug"
                                                    >
                                                        {itemLabel}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Industries — collapsible */}
                        <div className="border-b border-gray-100">
                            <button
                                onClick={() => setIsMobileIndustriesOpen(!isMobileIndustriesOpen)}
                                className="w-full flex items-center justify-between py-4 text-xl font-heading font-semibold text-navy hover:text-gold transition-colors"
                            >
                                Industries
                                <ChevronDown
                                    size={20}
                                    className={`transition-transform duration-300 ${isMobileIndustriesOpen ? 'rotate-180 text-gold' : ''}`}
                                />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${isMobileIndustriesOpen ? 'max-h-[600px] pb-4' : 'max-h-0'}`}>
                                <div className="grid grid-cols-2 gap-1.5">
                                    {industries.map(({ label, icon: Icon, href }) => (
                                        <Link
                                            key={label}
                                            to={href}
                                            onClick={closeMobile}
                                            className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl hover:bg-navy/5 transition-colors"
                                        >
                                            <div className="w-8 h-8 rounded-lg bg-navy/[0.06] flex items-center justify-center flex-shrink-0">
                                                <Icon size={15} className="text-navy/70" />
                                            </div>
                                            <span className="text-sm font-body font-medium text-gray-700 leading-tight">{label}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Resources sub-group */}
                        <div className="py-4 border-b border-gray-100">
                            <p className="text-xs font-heading font-bold text-gray-400 tracking-widest uppercase mb-3">
                                Resources
                            </p>
                            <div className="flex flex-col gap-3">
                                <Link to="/referral-program" onClick={closeMobile} className="text-base font-body font-medium text-gray-600 hover:text-navy transition-colors">
                                    Referral Program
                                </Link>
                                <Link to="/youtube-videos" onClick={closeMobile} className="text-base font-body font-medium text-gray-600 hover:text-navy transition-colors">
                                    YouTube Videos
                                </Link>
                            </div>
                        </div>

                        {/* Secondary links */}
                        <div className="flex gap-8 py-4">
                            <Link to="/for-employees" onClick={closeMobile} className="text-base font-body font-medium text-gray-500 hover:text-navy transition-colors">
                                Apply for Work
                            </Link>
                            <a
                                href="https://app.fivestarassistants.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={closeMobile}
                                className="text-base font-body font-medium text-gray-500 hover:text-navy transition-colors"
                            >
                                Login
                            </a>
                        </div>
                    </div>

                    {/* CTA */}
                    {onOpenSurvey && (
                        <div className="mt-auto pt-6">
                            <button
                                onClick={handleGetStartedClick}
                                className="w-full bg-navy text-white px-6 py-4 rounded-full text-base font-body font-semibold shadow-lg hover:shadow-xl transition-all"
                            >
                                Book A Discovery Call
                            </button>
                            <p className="font-heading italic text-gray-400 text-sm mt-3 text-center">
                                100% Free. No Obligation.
                            </p>
                        </div>
                    )}
                </div>
            )}
        </>
    );
};

export default Navbar;
