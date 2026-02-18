import React from 'react';
import { Star } from 'lucide-react';

const TrustBadges: React.FC = () => {
  return (
    <section className="bg-offwhite py-8 border-y border-gray-100">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
        
        {/* Stars Container */}
        <div className="flex flex-col items-center md:items-start">
          <span className="text-sm font-semibold text-gray-600 mb-1 uppercase tracking-wider">Trusted by top-tier professionals</span>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-5 h-5 text-gold fill-gold" />
            ))}
          </div>
        </div>

        {/* Divider for Desktop */}
        <div className="hidden md:block w-px h-10 bg-gray-300"></div>

        {/* Placeholder Logos */}
        <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale">
          {['AlphaCorp', 'BetaSolutions', 'GammaTech', 'DeltaGroup'].map((company) => (
            <div key={company} className="font-heading font-bold text-xl text-gray-500">
              {company}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TrustBadges;