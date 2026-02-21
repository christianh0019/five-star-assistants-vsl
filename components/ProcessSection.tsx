import React from 'react';
import { PhoneCall, Search, Rocket, HeartHandshake } from 'lucide-react';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: "01",
      icon: PhoneCall,
      title: "Free Discovery Call",
      desc: "We map out exactly what to offload first."
    },
    {
      step: "02",
      icon: Search,
      title: "Talent Matching",
      desc: "We recruit and train an assistant based on your workflows."
    },
    {
      step: "03",
      icon: Rocket,
      title: "Launch",
      desc: "Your assistant is placed and working within days."
    },
    {
      step: "04",
      icon: HeartHandshake,
      title: "Ongoing Management",
      desc: "We handle support, performance, and replacements."
    }
  ];

  return (
    <section id="process" className="bg-offwhite py-24 md:py-32 px-4 border-b border-gray-100 relative">
      <div className="max-w-7xl mx-auto relative z-10">

        <div className="text-center mb-24 animate-fadeIn">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-gold"></span>
            <span className="font-body text-gold font-bold tracking-[0.2em] uppercase text-xs">The Process</span>
            <span className="w-12 h-[1px] bg-gold"></span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-navy">
            How It Works
          </h2>
        </div>

        <div className="relative">
          {/* Horizontal Connecting Timeline (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pt-8">
            {steps.map((item, idx) => (
              <div key={idx} className="relative group">

                {/* Floating Step Badge */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 z-20 w-16 h-8 rounded-full bg-white border border-gray-100 shadow-md flex items-center justify-center group-hover:bg-navy group-hover:border-navy group-hover:scale-110 transition-all duration-500">
                  <span className="font-heading font-bold text-sm text-gray-400 group-hover:text-gold transition-colors duration-300">
                    Step {item.step}
                  </span>
                </div>

                {/* Main Card */}
                <div className="bg-white p-10 mt-2 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-4 transition-all duration-500 rounded-[2rem] relative overflow-hidden h-full flex flex-col items-center text-center">

                  {/* Sweeping Highlight on Hover */}
                  <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-100 overflow-hidden">
                    <div className="w-full h-full bg-gold -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out"></div>
                  </div>

                  <div className="w-16 h-16 bg-navy/5 rounded-2xl flex items-center justify-center mb-8 mt-4 group-hover:bg-gold/10 transition-colors duration-500 transform group-hover:rotate-6">
                    <item.icon className="w-8 h-8 text-navy group-hover:text-gold transition-colors duration-500" strokeWidth={1.5} />
                  </div>

                  <h3 className="font-heading font-bold text-2xl text-navy mb-4 group-hover:text-gold transition-colors duration-300">{item.title}</h3>
                  <p className="font-body text-gray-500 leading-relaxed">{item.desc}</p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;