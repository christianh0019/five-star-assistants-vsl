import React from 'react';
import { AlertCircle, ArrowRight } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section className="bg-[#FCFDFE] py-24 md:py-32 px-4 relative overflow-hidden">
      {/* Decorative gradient blur */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gold/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

        {/* Left Column: Text */}
        <div className="order-2 lg:order-1 animate-fadeIn">
          <div className="flex items-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-gold"></span>
            <span className="font-body text-gold font-bold tracking-[0.2em] uppercase text-xs">The Problem</span>
          </div>

          <h2 className="font-heading text-navy text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.15] tracking-tight">
            If you’re trying to grow a business, you’re probably doing <span className="italic font-light text-navy-light">too much yourself.</span>
          </h2>

          <p className="font-body text-lg md:text-xl text-gray-600 mb-10 leading-relaxed max-w-xl">
            You’re answering messages, following up with leads, handling admin work, keeping systems organized, and putting out fires all day.
          </p>

          <div className="mb-12 bg-white rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 border-l-4 border-l-gold relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 rounded-bl-full -mr-16 -mt-16 pointer-events-none"></div>
            <p className="font-heading text-xl md:text-2xl text-navy italic relative z-10 m-0">
              "Not because you want to. <br className="hidden md:block" />Because you don’t have leverage."
            </p>
          </div>

          <div className="space-y-4 mb-10">
            <div className="flex items-start group p-4 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-50 transition-all">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-red-100 transition-colors">
                <AlertCircle className="w-5 h-5 text-red-500" />
              </div>
              <div className="ml-4">
                <p className="text-navy font-semibold text-lg mb-1">Hiring locally is expensive and slow.</p>
                <p className="text-gray-500 text-sm leading-relaxed">The process drains your time and resources before you even see results.</p>
              </div>
            </div>
            <div className="flex items-start group p-4 rounded-xl hover:bg-white hover:shadow-sm border border-transparent hover:border-gray-50 transition-all">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-red-100 transition-colors">
                <AlertCircle className="w-5 h-5 text-red-500" />
              </div>
              <div className="ml-4">
                <p className="text-navy font-semibold text-lg mb-1">Random freelancers are unreliable.</p>
                <p className="text-gray-500 text-sm leading-relaxed">You end up managing them instead of focusing on high-level growth.</p>
              </div>
            </div>
          </div>

          <div className="inline-flex items-center gap-3 text-gold font-bold text-lg group cursor-default">
            <span className="group-hover:text-gold-dark transition-colors">So you stay stuck in the weeds.</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="relative order-1 lg:order-2 animate-slideUp">
          {/* Decorative elements behind image */}
          <div className="absolute -inset-4 md:-inset-8 border border-gray-200 rounded-3xl translate-x-4 md:translate-x-8 translate-y-4 md:translate-y-8 animate-[pulse_4s_ease-in-out_infinite]"></div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
            <img
              src="https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?q=80&w=2071&auto=format&fit=crop"
              alt="Overwhelmed business owner"
              className="w-full object-cover h-[500px] lg:h-[700px] scale-105 group-hover:scale-100 transition-transform duration-1000 grayscale group-hover:grayscale-0"
            />
            {/* Overlay Glass Card */}
            <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 bg-white/95 backdrop-blur-md p-6 rounded-2xl z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-xl border border-white/50">
              <div className="flex gap-4 items-center">
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-heading text-navy font-bold text-lg mb-0.5">Time is slipping away</p>
                  <p className="text-sm text-gray-500 font-body">Every hour in the weeds is an hour not growing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;