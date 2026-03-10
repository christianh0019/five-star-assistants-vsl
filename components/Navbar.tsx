import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

interface NavbarProps {
    onOpenSurvey?: () => void;
    hideMenu?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenSurvey, hideMenu }) => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const scrollToSection = (id: string) => {
        setIsMobileMenuOpen(false); // Close menu when a link is clicked
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleGetStartedClick = () => {
        setIsMobileMenuOpen(false);
        if (onOpenSurvey) onOpenSurvey();
    };

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isMobileMenuOpen
                    ? 'bg-white py-4'
                    : scrolled
                        ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 py-4'
                        : 'bg-transparent py-4 md:py-6'
                    }`}
            >
                <div className={`max-w-7xl mx-auto px-4 md:px-8 flex items-center ${hideMenu ? 'justify-center md:justify-start' : 'justify-between'}`}>
                    {/* Brand */}
                    <Link
                        to="/"
                        className="flex-shrink-0 cursor-pointer relative z-[60]"
                        onClick={() => {
                            setIsMobileMenuOpen(false);
                        }}
                    >
                        <Logo variant="dark" />
                    </Link>

                    {!hideMenu && (
                        <>
                            {/* Desktop Navigation */}
                            <div className="hidden md:flex items-center gap-8">
                                {/* Who We Work With Dropdown */}
                                <div className="relative group">
                                    <button
                                        onClick={() => scrollToSection('who-we-work-with')}
                                        className="text-sm font-body font-medium text-gray-600 group-hover:text-navy transition-colors flex items-center gap-1 py-4"
                                    >
                                        Who We Work With
                                        <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
                                    </button>

                                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[220px] bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0">
                                        <div className="py-2">
                                            <Link to="/local-service-businesses" className="block px-6 py-3 text-sm font-body font-medium text-gray-600 hover:text-navy hover:bg-gray-50 transition-colors">Local Service Businesses</Link>
                                            <Link to="/digital-agencies" className="block px-6 py-3 text-sm font-body font-medium text-gray-600 hover:text-navy hover:bg-gray-50 transition-colors">Digital Agencies</Link>
                                            <Link to="/real-estate-agents" className="block px-6 py-3 text-sm font-body font-medium text-gray-600 hover:text-navy hover:bg-gray-50 transition-colors">Real Estate Agents</Link>
                                        </div>
                                    </div>
                                </div>

                                {/* Resources Dropdown */}
                                <div className="relative group">
                                    <button
                                        className="text-sm font-body font-medium text-gray-600 group-hover:text-navy transition-colors flex items-center gap-1 py-4 cursor-default"
                                    >
                                        Resources
                                        <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
                                    </button>

                                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[200px] bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top translate-y-2 group-hover:translate-y-0">
                                        <div className="py-2">
                                            <Link to="/referral-program" className="block px-6 py-3 text-sm font-body font-medium text-gray-600 hover:text-navy hover:bg-gray-50 transition-colors">Referral Program</Link>
                                            <Link to="/youtube-videos" className="block px-6 py-3 text-sm font-body font-medium text-gray-600 hover:text-navy hover:bg-gray-50 transition-colors">YouTube Videos</Link>
                                        </div>
                                    </div>
                                </div>

                                <Link
                                    to="/pricing"
                                    className="text-sm font-body font-medium text-gray-600 hover:text-navy transition-colors"
                                >
                                    Pricing
                                </Link>
                                <Link
                                    to="/results"
                                    className="text-sm font-body font-medium text-gray-600 hover:text-navy transition-colors"
                                >
                                    Results
                                </Link>
                                <Link
                                    to="/how-it-works"
                                    className="text-sm font-body font-medium text-gray-600 hover:text-navy transition-colors"
                                >
                                    How It Works
                                </Link>

                                {onOpenSurvey && (
                                    <button
                                        onClick={onOpenSurvey}
                                        className="bg-navy hover:bg-navy-light text-white px-5 py-2.5 rounded-full text-sm font-body font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                                    >
                                        Get Started
                                    </button>
                                )}
                            </div>

                            {/* Mobile Menu Toggle Button */}
                            <div className="md:hidden relative z-[60]">
                                <button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className="p-2 text-navy hover:bg-navy/5 rounded-full transition-colors flex items-center justify-center focus:outline-none"
                                >
                                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </nav>

            {/* Mobile Full-Screen Menu Overlay */}
            {!hideMenu && (
                <div
                    className={`fixed inset-0 bg-white z-[45] transition-transform duration-300 ease-in-out flex flex-col pt-24 px-6 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="flex flex-col gap-8 text-center mt-10">
                        <div className="flex flex-col items-center">
                            <button
                                onClick={() => scrollToSection('who-we-work-with')}
                                className="text-2xl font-heading font-medium text-navy hover:text-gold transition-colors flex items-center gap-2"
                            >
                                Who We Work With
                            </button>
                            <div className="flex flex-col gap-4 mt-6">
                                <Link onClick={() => setIsMobileMenuOpen(false)} to="/local-service-businesses" className="text-lg font-body font-medium text-gray-500 hover:text-navy transition-colors">Local Service Businesses</Link>
                                <Link onClick={() => setIsMobileMenuOpen(false)} to="/digital-agencies" className="text-lg font-body font-medium text-gray-500 hover:text-navy transition-colors">Digital Agencies</Link>
                                <Link onClick={() => setIsMobileMenuOpen(false)} to="/real-estate-agents" className="text-lg font-body font-medium text-gray-500 hover:text-navy transition-colors">Real Estate Agents</Link>
                            </div>
                        </div>
                        <div className="w-12 h-px bg-gray-200 mx-auto"></div>
                        <div className="flex flex-col items-center">
                            <span className="text-2xl font-heading font-medium text-navy flex items-center gap-2">
                                Resources
                            </span>
                            <div className="flex flex-col gap-4 mt-6">
                                <Link onClick={() => setIsMobileMenuOpen(false)} to="/referral-program" className="text-lg font-body font-medium text-gray-500 hover:text-navy transition-colors">Referral Program</Link>
                                <Link onClick={() => setIsMobileMenuOpen(false)} to="/youtube-videos" className="text-lg font-body font-medium text-gray-500 hover:text-navy transition-colors">YouTube Videos</Link>
                            </div>
                        </div>
                        <div className="w-12 h-px bg-gray-200 mx-auto"></div>
                        <Link
                            to="/pricing"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-2xl font-heading font-medium text-navy hover:text-gold transition-colors"
                        >
                            Pricing
                        </Link>
                        <div className="w-12 h-px bg-gray-200 mx-auto"></div>
                        <Link
                            to="/results"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-2xl font-heading font-medium text-navy hover:text-gold transition-colors"
                        >
                            Results
                        </Link>
                        <div className="w-12 h-px bg-gray-200 mx-auto"></div>
                        <Link
                            to="/how-it-works"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-2xl font-heading font-medium text-navy hover:text-gold transition-colors"
                        >
                            How It Works
                        </Link>

                        {onOpenSurvey && (
                            <div className="mt-12">
                                <button
                                    onClick={handleGetStartedClick}
                                    className="w-full bg-navy text-white px-6 py-4 rounded-full text-lg font-body font-medium shadow-lg hover:shadow-xl transition-all"
                                >
                                    Book A Discovery Call
                                </button>
                                <p className="font-heading italic text-gray-500 text-sm mt-4">
                                    100% Free. No Obligation.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

export default Navbar;
