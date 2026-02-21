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
    <section id="process" className="bg-offwhite py-24 md:py-32 px-4 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20 animate-fadeIn">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-gold"></span>
            <span className="font-body text-gold font-bold tracking-[0.2em] uppercase text-xs">The Process</span>
            <span className="w-12 h-[1px] bg-gold"></span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-navy">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, idx) => (
            <div key={idx} className="bg-white p-10 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500 rounded-3xl relative overflow-hidden group">
              {/* Decorative Top Accent */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-100 group-hover:bg-gold transition-colors duration-500"></div>

              {/* Faded Background Number */}
              <div className="absolute -right-4 -bottom-8 font-heading text-[120px] leading-none text-gray-50 group-hover:text-gold/5 transition-colors duration-500 font-bold z-0 pointer-events-none select-none">
                {item.step}
              </div>

              <div className="relative z-10">
                <div className="w-14 h-14 bg-navy/5 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-navy transition-colors duration-500">
                  <item.icon className="w-6 h-6 text-navy group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                </div>

                <h3 className="font-heading font-bold text-2xl text-navy mb-4 group-hover:text-gold transition-colors duration-300">{item.title}</h3>
                <p className="font-body text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;