import React from 'react';
import { Sparkles } from 'lucide-react';
import Button from './Button';

interface FinalPushProps {
  onOpenSurvey: () => void;
}

const FinalPush: React.FC<FinalPushProps> = ({ onOpenSurvey }) => {
  return (
    <section className="bg-white py-24 md:py-32 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Final CTA Card */}
        <div className="bg-navy rounded-[40px] p-10 md:p-20 text-center relative overflow-hidden shadow-2xl border border-navy-light animate-fadeIn mx-4 md:mx-0">

          {/* Background Glows */}
          <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-bl from-gold/10 to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 flex flex-col items-center">
            <Sparkles className="w-12 h-12 text-gold mb-8 animate-pulse" />
            <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-md">
              Ready to cut costs & <br className="hidden md:block" />
              get your <span className="italic font-light text-gold">time back?</span>
            </h2>

            <p className="font-body text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
              Book a free staffing strategy call. We’ll show you how to slash your payroll by 60-70% while scaling faster than ever.
            </p>
            <Button
              onClick={onOpenSurvey}
              variant="primary"
              className="min-w-[280px] md:min-w-[320px] mb-4 shadow-xl hover:shadow-2xl"
            >
              Book A Discovery Call
            </Button>
            <p className="font-heading italic text-gray-400 text-sm">
              100% Free. No Obligation.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FinalPush;