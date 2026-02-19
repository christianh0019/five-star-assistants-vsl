import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

interface OnboardingHeaderProps {
    currentStep?: number;
    totalSteps?: number;
    stepLabel?: string;
}

const OnboardingHeader: React.FC<OnboardingHeaderProps> = ({
    currentStep,
    totalSteps = 3,
    stepLabel,
}) => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 h-20 flex items-center">
            <div className="max-w-5xl mx-auto px-6 w-full flex items-center justify-between">

                {/* Logo - Fixed width container for stability */}
                <Link to="/" className="flex-shrink-0 w-48 flex items-center">
                    <img
                        src="https://assets.cdn.filesafe.space/HllUVzV8V6VFH4nUuq4W/media/6997726b8d5b5a7d548bdb90.png"
                        alt="Five Star Assistants"
                        className="h-16 w-auto object-contain p-1"
                    />
                </Link>

                {/* Center: Progress Steps (if active) */}
                {currentStep && (
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-3">
                        <div className="flex items-center gap-2">
                            {Array.from({ length: totalSteps }).map((_, i) => (
                                <div
                                    key={i}
                                    className={`rounded-full transition-all duration-300 ${i + 1 < currentStep
                                        ? 'w-2 h-2 bg-gold'
                                        : i + 1 === currentStep
                                            ? 'w-2.5 h-2.5 bg-navy shadow-sm'
                                            : 'w-2 h-2 bg-gray-200'
                                        }`}
                                />
                            ))}
                        </div>
                        <span className="font-subheading text-[10px] font-bold text-navy uppercase tracking-[0.2em] pt-0.5">
                            Step {currentStep}: {stepLabel}
                        </span>
                    </div>
                )}

                {/* Right: Support Link */}
                <div className="w-48 flex justify-end">
                    <a
                        href="mailto:support@fivestarassistants.com"
                        className="text-[10px] font-bold font-subheading text-gray-400 hover:text-navy uppercase tracking-[0.2em] transition-colors"
                    >
                        Need Help?
                    </a>
                </div>

            </div>
        </header>
    );
};

export default OnboardingHeader;
