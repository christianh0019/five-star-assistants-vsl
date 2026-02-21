import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface NavbarProps {
    onOpenSurvey?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenSurvey }) => {
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
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 py-4'
                : 'bg-transparent py-4 md:py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
                {/* Brand */}
                <div
                    className="flex-shrink-0 cursor-pointer relative z-[60]"
                    onClick={() => {
                        setIsMobileMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                >
                    <Logo variant="dark" />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <button
                        onClick={() => scrollToSection('who-we-work-with')}
                        className="text-sm font-body font-medium text-gray-600 hover:text-navy transition-colors"
                    >
                        Who We Work With
                    </button>
                    <button
                        onClick={() => scrollToSection('capabilities')}
                        className="text-sm font-body font-medium text-gray-600 hover:text-navy transition-colors"
                    >
                        Assistant Capabilities
                    </button>
                    <button
                        onClick={() => scrollToSection('results')}
                        className="text-sm font-body font-medium text-gray-600 hover:text-navy transition-colors"
                    >
                        Results We've Gotten
                    </button>

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
            </div>

            {/* Mobile Full-Screen Menu Overlay */}
            <div
                className={`fixed inset-0 bg-white z-[55] transition-transform duration-300 ease-in-out flex flex-col pt-24 px-6 md:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex flex-col gap-8 text-center mt-10">
                    <button
                        onClick={() => scrollToSection('who-we-work-with')}
                        className="text-2xl font-heading font-medium text-navy hover:text-gold transition-colors"
                    >
                        Who We Work With
                    </button>
                    <div className="w-12 h-px bg-gray-200 mx-auto"></div>
                    <button
                        onClick={() => scrollToSection('capabilities')}
                        className="text-2xl font-heading font-medium text-navy hover:text-gold transition-colors"
                    >
                        Assistant Capabilities
                    </button>
                    <div className="w-12 h-px bg-gray-200 mx-auto"></div>
                    <button
                        onClick={() => scrollToSection('results')}
                        className="text-2xl font-heading font-medium text-navy hover:text-gold transition-colors"
                    >
                        Results We've Gotten
                    </button>

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
        </nav>
    );
};

export default Navbar;
