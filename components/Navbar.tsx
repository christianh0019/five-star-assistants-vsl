import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

interface NavbarProps {
    onOpenSurvey?: () => void;
    hideMenu?: boolean;
    alwaysWhite?: boolean;
}

const navLinkClass = 'text-sm font-body font-medium text-gray-600 hover:text-navy transition-colors';

const Navbar: React.FC<NavbarProps> = ({ onOpenSurvey, hideMenu, alwaysWhite }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
        return () => { document.body.style.overflow = 'unset'; };
    }, [isMobileMenuOpen]);

    const closeMobile = () => setIsMobileMenuOpen(false);

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
                <div className={`max-w-7xl mx-auto px-4 md:px-8 flex items-center ${hideMenu ? 'justify-center md:justify-start' : 'justify-between'}`}>

                    {/* Brand */}
                    <Link to="/" className="flex-shrink-0 cursor-pointer relative z-[60]" onClick={closeMobile}>
                        <Logo variant="dark" />
                    </Link>

                    {!hideMenu && (
                        <>
                            {/* ── Desktop Navigation ───────────────────────────── */}
                            <div className="hidden md:flex items-center gap-8">

                                <Link to="/pricing" className={navLinkClass}>Pricing</Link>
                                <Link to="/results" className={navLinkClass}>Results</Link>
                                <Link to="/how-it-works" className={navLinkClass}>How It Works</Link>

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
                    {/* Primary links */}
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
