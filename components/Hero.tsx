import React from 'react';
import { Play } from 'lucide-react';
import Button from './Button';
import Logo from './Logo';

interface HeroProps {
  onOpenSurvey: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenSurvey }) => {
  return (
    <section className="relative pt-4 md:pt-12 pb-20 px-4 md:px-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-white">
      <div className="max-w-[900px] mx-auto text-center flex flex-col items-center relative z-10">

        {/* Brand Logo */}
        <div className="mb-6 md:mb-10 scale-90 md:scale-100 opacity-90">
          <Logo variant="dark" />
        </div>

        {/* H1 Headline */}
        <h1 className="font-heading text-navy text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-8 drop-shadow-sm">
          We'll Recruit And Train Your Perfect Remote Employee Starting at <span className="text-gold italic">Just $6/HR</span>
        </h1>

        {/* Sub-headline */}
        <p className="font-subheading text-navy/80 text-lg md:text-xl font-medium tracking-wide mb-12 max-w-2xl">
          And if you don't love them, you don't pay or we'll replace them at no cost.
        </p>

        {/* Primary CTA */}
        <Button
          onClick={onOpenSurvey}
          variant="primary"
          className="w-full md:w-auto min-w-[320px] mb-4 shadow-xl hover:shadow-2xl"
        >
          Book A Discovery Call
        </Button>

        <p className="font-heading italic text-gray-500 text-sm mb-8">
          100% Free. No Obligation.
        </p>

        {/* VSL Video Container */}
        <div className="w-full max-w-4xl mx-auto rounded-lg overflow-hidden shadow-2xl border-4 border-white aspect-video relative group">
          {/* Show play button overlay if needed, or autoplay muted */}
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none z-10"></div>
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=0&controls=1&rel=0"
            title="Five Star Assistants VSL"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  );
};

export default Hero;