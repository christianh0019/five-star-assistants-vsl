import React from 'react';
import { Target, Search, Users, Sparkles } from 'lucide-react';

const CapabilitiesSection: React.FC = () => {

  return (
    <section id="capabilities" className="bg-offwhite py-24 md:py-32 px-4 border-b border-gray-100 relative overflow-hidden">
      {/* Soft decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gold/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-navy/5 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left side: Headline & Description */}
          <div className="animate-fadeIn">
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-[1px] bg-gold"></span>
              <span className="font-body text-gold font-bold tracking-[0.2em] uppercase text-xs">Custom Recruitment</span>
            </div>

            <h2 className="font-heading text-navy text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.15]">
              If It's An Online Job, <br />
              <span className="italic font-light text-navy-light">We Will Find Them.</span>
            </h2>

            <p className="font-body text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Stop settling for generic "Virtual Assistants" who need endless micromanagement. We don't pull from a bench of generalists.
            </p>

            <p className="font-body text-lg md:text-xl text-gray-800 font-medium mb-12 max-w-xl">
              We reverse-engineer your exact needs and hunt down candidates with the precise skills, software experience, and industry knowledge required for the role.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center shrink-0 mt-1">
                  <Target className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-bold text-navy mb-1">Any Skill Level</h4>
                  <p className="text-gray-500 text-sm font-body leading-relaxed">From entry-level data entry to highly technical project managers.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-navy/5 flex items-center justify-center shrink-0 mt-1">
                  <Search className="w-5 h-5 text-navy" />
                </div>
                <div>
                  <h4 className="font-heading text-xl font-bold text-navy mb-1">Bespoke Searching</h4>
                  <p className="text-gray-500 text-sm font-body leading-relaxed">We source specifically for your open position, never recycling candidates.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side: Visual Representation */}
          <div className="relative animate-slideUp">
            <div className="absolute inset-0 bg-gradient-to-br from-navy to-navy-dark rounded-3xl transform translate-x-4 translate-y-4 md:translate-x-8 md:translate-y-8 -z-10 opacity-10"></div>
            <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-2xl relative overflow-hidden">
              {/* Decorative accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-bl-full -mr-8 -mt-8"></div>

              <Sparkles className="w-10 h-10 text-gold mb-8 relative z-10" />

              <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-8 relative z-10">
                Roles We Recently Placed:
              </h3>

              <div className="space-y-4 relative z-10">
                {[
                  { role: "Senior GoHighLevel Automations Expert", type: "Technical" },
                  { role: "Executive Assistant to Agency CEO", type: "Administrative" },
                  { role: "Bilingual Inbound Sales Representative", type: "Sales" },
                  { role: "Real Estate Cold Calling Specialist", type: "Outreach" },
                  { role: "E-Commerce Customer Support Lead", type: "Operations" },
                  { role: "Hair Salon Receptionist", type: "Admin" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-gray-50 border border-gray-100 hover:border-gold/50 hover:shadow-md transition-all group">
                    <span className="font-body text-navy font-semibold text-sm md:text-base">{item.role}</span>
                    <span className="text-xs font-bold uppercase tracking-wider text-gold/80 bg-gold/10 px-3 py-1 rounded-full whitespace-nowrap ml-4">
                      {item.type}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;