import React from 'react';
import { ShieldCheck, Check } from 'lucide-react';
import Button from './Button';

interface FinalPushProps {
  onOpenSurvey: () => void;
}

const FinalPush: React.FC<FinalPushProps> = ({ onOpenSurvey }) => {
  return (
    <section className="bg-white py-24 px-4 relative">
      {/* Decorative Gradient */}
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-offwhite to-white -z-10"></div>

      <div className="max-w-4xl mx-auto text-center">

        {/* Guarantee Section */}
        <div className="bg-navy p-10 md:p-14 rounded-2xl shadow-2xl border border-white/10 mb-24 relative mx-4 md:mx-0 overflow-hidden group">
          {/* Gold Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 blur-[80px] rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center border border-gold/30 shadow-[0_0_30px_rgba(212,175,55,0.15)]">
                <ShieldCheck className="w-12 h-12 text-gold" strokeWidth={1.5} />
              </div>
            </div>

            <h3 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6 tracking-wide">
              The Five Star Guarantee
            </h3>

            <p className="font-heading text-xl text-gray-300 mb-10 max-w-2xl mx-auto italic leading-relaxed">
              "If you’re not happy with your assistant in the first 30 days, we’ll replace them at no cost. And if they leave for any reason, we'll replace them at no cost."
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-12">
              <div className="flex items-center justify-center bg-white/5 px-6 py-3 rounded-full border border-white/10 hover:border-gold/30 transition-colors">
                <Check className="w-5 h-5 mr-3 text-gold" />
                <span className="text-sm font-bold text-white uppercase tracking-wider">No awkward conversations</span>
              </div>
              <div className="flex items-center justify-center bg-white/5 px-6 py-3 rounded-full border border-white/10 hover:border-gold/30 transition-colors">
                <Check className="w-5 h-5 mr-3 text-gold" />
                <span className="text-sm font-bold text-white uppercase tracking-wider">No hiring stress</span>
              </div>
              <div className="flex items-center justify-center bg-white/5 px-6 py-3 rounded-full border border-white/10 hover:border-gold/30 transition-colors">
                <Check className="w-5 h-5 mr-3 text-gold" />
                <span className="text-sm font-bold text-white uppercase tracking-wider">We make it right</span>
              </div>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-navy text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Ready to get your time back?
          </h2>

          <p className="font-body text-lg text-gray-500 mb-10 max-w-xl mx-auto">
            Book a free staffing strategy call. We’ll show you what to delegate first and how fast you can scale.
          </p>

          {/* Final CTA Button */}
          <Button
            onClick={onOpenSurvey}
            variant="primary"
            className="w-full md:w-auto min-w-[320px] shadow-xl hover:shadow-2xl"
          >
            Book A Discovery Call
          </Button>
        </div>

      </div>
    </section>
  );
};

export default FinalPush;