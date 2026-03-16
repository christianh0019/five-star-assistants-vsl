import React, { useRef, useState } from 'react';
import { Play } from 'lucide-react';
import Button from './Button';

interface HeroProps {
  onOpenSurvey: () => void;
  callout?: React.ReactNode;
  headline?: React.ReactNode;
  subheadline?: React.ReactNode;
}

const Hero: React.FC<HeroProps> = ({ onOpenSurvey, callout, headline, subheadline }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section className="relative pt-36 md:pt-48 pb-20 px-4 md:px-8 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-50 via-white to-white">
      <div className="max-w-[900px] mx-auto text-center flex flex-col items-center relative z-10">

        {/* Callout Pill */}
        {callout && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 text-navy font-body text-sm font-semibold mb-6 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse"></span>
            {callout}
          </div>
        )}

        {/* H1 Headline */}
        <h1 className="font-heading text-navy text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 drop-shadow-sm">
          {headline || (
            <>
              Hire Top 1% Remote Talent Starting at <span className="text-gold italic">$4/hr</span>
            </>
          )}
        </h1>

        {/* Sub-headline */}
        <p className="font-subheading text-navy/80 text-lg md:text-xl font-medium tracking-wider mb-12 max-w-2xl">
          {subheadline || "No placement fees. Candidates within 4 days. Cancel anytime."}
        </p>

        {/* Primary CTA */}
        <Button
          onClick={onOpenSurvey}
          variant="primary"
          className="min-w-[280px] md:min-w-[320px] mb-4 shadow-xl hover:shadow-2xl"
        >
          Book A Discovery Call
        </Button>

        <p className="font-heading italic text-gray-500 text-sm mb-8">
          100% Free. No Obligation.
        </p>

        {/* VSL Video Container */}
        <div className="w-full max-w-4xl mx-auto rounded-[1.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-video relative group">
          <video
            ref={videoRef}
            className="w-full h-full rounded-[1.5rem]"
            src="/FSAVideo.mp4"
            poster="/FSAVideoThumbnail.png"
            controls
            playsInline
            onPlay={() => setPlaying(true)}
            onPause={() => setPlaying(false)}
          />
          {!playing && (
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center z-10 group/btn"
              aria-label="Play video"
            >
              <div className="w-20 h-20 rounded-full bg-white/90 shadow-2xl flex items-center justify-center transition-transform duration-200 group-hover/btn:scale-110">
                <Play size={32} className="text-navy ml-1" fill="currentColor" />
              </div>
            </button>
          )}
        </div>

      </div>
    </section>
  );
};

export default Hero;
