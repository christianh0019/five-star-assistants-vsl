import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface NavbarProps {
    onOpenSurvey?: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenSurvey }) => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100 py-4'
                    : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
                {/* Brand */}
                <div className="flex-shrink-0 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
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

                {/* Mobile Menu Button - simple version */}
                {onOpenSurvey && (
                    <div className="md:hidden">
                        <button
                            onClick={onOpenSurvey}
                            className="bg-navy text-white px-4 py-2 rounded-full text-sm font-medium"
                        >
                            Get Started
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
