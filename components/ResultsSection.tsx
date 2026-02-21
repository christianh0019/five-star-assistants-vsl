import React from 'react';
import { Clock, DollarSign, Play } from 'lucide-react';

const ResultsSection: React.FC = () => {
  return (
    <section id="results" className="bg-white py-24 md:py-32 px-4 border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20 animate-fadeIn">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-gold"></span>
            <span className="font-body text-gold font-bold tracking-[0.2em] uppercase text-xs">The Impact</span>
            <span className="w-12 h-[1px] bg-gold"></span>
          </div>
          <h2 className="font-heading text-navy text-4xl md:text-5xl lg:text-6xl font-bold">
            Real Business Results
          </h2>
        </div>

        {/* Core Two Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 mb-32 relative z-10">

          {/* Stat 1: Payroll */}
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 bg-navy/5 rounded-2xl mb-8 flex items-center justify-center group-hover:bg-navy transition-colors duration-500 transform group-hover:scale-110">
              <DollarSign className="w-10 h-10 text-navy group-hover:text-gold transition-colors duration-500" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-6xl md:text-7xl font-bold text-navy mb-4 group-hover:text-gold transition-colors duration-300">
              30-50%
            </h3>
            <h4 className="font-heading text-2xl font-bold text-navy mb-4">
              Lower Payroll Costs
            </h4>
            <p className="font-body text-gray-500 text-lg leading-relaxed max-w-md">
              Get elite talent for a fraction of the cost of a domestic hire.
            </p>
          </div>

          {/* Stat 2: Time */}
          <div className="flex flex-col items-center text-center group mt-12 md:mt-0">
            <div className="w-20 h-20 bg-gold/10 rounded-2xl mb-8 flex items-center justify-center group-hover:bg-gold transition-colors duration-500 transform group-hover:scale-110">
              <Clock className="w-10 h-10 text-gold group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
            </div>
            <h3 className="font-heading text-6xl md:text-7xl font-bold text-navy mb-4 group-hover:text-gold transition-colors duration-300">
              20-30
            </h3>
            <h4 className="font-heading text-2xl font-bold text-navy mb-4">
              Hours Reclaimed Per Week
            </h4>
            <p className="font-body text-gray-500 text-lg leading-relaxed max-w-md">
              Stop doing low-leverage tasks. Focus on strategy and growth.
            </p>
          </div>

        </div>

        {/* Testimonials / Case Studies Grid */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-16 border border-gray-100">
          <h3 className="font-heading text-3xl md:text-4xl font-bold text-navy text-center mb-12">
            Hear From Our <span className="italic font-light">Partners</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Video Testimonial 1 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-video bg-navy rounded-2xl overflow-hidden shadow-lg mb-6 group-hover:shadow-2xl transition-all duration-300">
                {/* Placeholder for actual video thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Client Testimonial" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />

                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-gold/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg mb-4">
                    <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                  </div>
                  <p className="text-white font-heading font-medium tracking-wide">Watch Case Study</p>
                </div>
              </div>
              <blockquote className="font-heading text-xl text-navy italic leading-relaxed mb-4">
                "My assistant handles all my inbound leads and CRM management. I went from working 60 hours a week in the weeds to focusing purely on closing deals."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" alt="Client" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-body font-bold text-navy">Michael T.</p>
                  <p className="font-body text-sm text-gray-500">Real Estate Agency Owner</p>
                </div>
              </div>
            </div>

            {/* Video Testimonial 2 */}
            <div className="group cursor-pointer">
              <div className="relative aspect-video bg-navy rounded-2xl overflow-hidden shadow-lg mb-6 group-hover:shadow-2xl transition-all duration-300">
                {/* Placeholder for actual video thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" alt="Client Testimonial" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" />

                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
                  <div className="w-16 h-16 bg-gold/90 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg mb-4">
                    <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
                  </div>
                  <p className="text-white font-heading font-medium tracking-wide">Watch Case Study</p>
                </div>
              </div>
              <blockquote className="font-heading text-xl text-navy italic leading-relaxed mb-4">
                "We needed someone highly technical to manage our GoHighLevel automations. Five Star found someone incredible in 10 days for a third of the cost."
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80" alt="Client" className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-body font-bold text-navy">Sarah L.</p>
                  <p className="font-body text-sm text-gray-500">Digital Marketing Agency</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ResultsSection;