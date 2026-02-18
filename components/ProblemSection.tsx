import React from 'react';
import { X } from 'lucide-react';

const ProblemSection: React.FC = () => {
  return (
    <section className="bg-white py-20 md:py-32 px-4 border-t border-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: Text */}
        <div className="order-2 md:order-1">
          <span className="font-subheading text-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">The Problem</span>
          <h2 className="font-heading text-navy text-3xl md:text-5xl font-bold mb-8 leading-[1.15]">
            If you’re trying to grow a business, you’re probably doing too much yourself.
          </h2>
          
          <p className="font-body text-lg text-gray-600 mb-8 leading-relaxed">
            You’re answering messages, following up with leads, handling admin work, keeping systems organized, and putting out fires all day.
          </p>

          <div className="mb-10 pl-6 border-l-2 border-gold">
             <p className="font-heading text-xl md:text-2xl text-navy italic">
               Not because you want to. <br/>Because you don’t have leverage.
             </p>
          </div>

          <div className="space-y-4">
             <div className="flex items-center group">
                <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center mr-4 group-hover:border-red-200 transition-colors">
                  <X className="w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors" />
                </div>
                <p className="text-gray-700 font-medium">Hiring locally is expensive and slow.</p>
             </div>
             <div className="flex items-center group">
                <div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center mr-4 group-hover:border-red-200 transition-colors">
                  <X className="w-4 h-4 text-gray-400 group-hover:text-red-500 transition-colors" />
                </div>
                <p className="text-gray-700 font-medium">Random freelancers are unreliable.</p>
             </div>
          </div>
          
          <p className="font-heading text-navy text-lg mt-8 font-semibold border-b border-gold inline-block pb-1">So you stay stuck in the weeds.</p>
        </div>

        {/* Right Column: Image */}
        <div className="relative order-1 md:order-2">
          <div className="absolute inset-0 border-2 border-navy/5 translate-x-6 translate-y-6 rounded-sm"></div>
          <img 
            src="https://images.unsplash.com/photo-1513530534585-c7b1394c6d51?q=80&w=2071&auto=format&fit=crop" 
            alt="Overwhelmed business owner" 
            className="relative rounded-sm shadow-2xl w-full object-cover h-[600px] grayscale hover:grayscale-0 transition-all duration-700"
          />
        </div>

      </div>
    </section>
  );
};

export default ProblemSection;