import React from 'react';
import { CheckCircle, Users, UserPlus, ClipboardCheck, GraduationCap, Rocket, BarChart2 } from 'lucide-react';

const SolutionSection: React.FC = () => {
  return (
    <section id="who-we-work-with" className="bg-white py-24 px-4 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-offwhite/50 -z-10"></div>

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="font-subheading text-gold font-bold tracking-[0.2em] uppercase text-xs mb-3 block">The Solution</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy mb-6">
            That’s why <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy to-gold">Five Star Assistants</span> exists.
          </h2>
          <p className="font-body text-xl text-gray-500 leading-relaxed font-light">
            We don’t just find a VA. We handle the full process so you get real support without the stress of hiring.
          </p>
        </div>

        {/* The Process Row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-24 relative">

          {[
            { icon: UserPlus, title: "Recruit", desc: "Top 1% Talent Scouted" },
            { icon: ClipboardCheck, title: "Test", desc: "Rigorous Skill Vetting" },
            { icon: GraduationCap, title: "Train", desc: "Custom Workflow Training" },
            { icon: Rocket, title: "Place", desc: "Seamless Onboarding" },
            { icon: BarChart2, title: "Manage", desc: "Performance Tracking" }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 w-full text-center border border-gray-100 shadow-card rounded-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
              <div className="w-14 h-14 bg-navy/5 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                <item.icon className="text-navy group-hover:text-gold w-7 h-7 transition-colors" />
              </div>
              <div className="text-navy font-heading font-bold text-xl mb-3">{item.title}</div>
              <div className="text-gray-500 text-sm font-medium leading-tight">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Why This Works Better */}
        <div className="bg-navy text-white rounded-sm p-1 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle accent pattern */}
          <div className="absolute top-0 right-0 p-12 opacity-5">
            <Users size={200} />
          </div>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center p-8">

            <div>
              <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-white">
                Why This Works Better
              </h3>
              <p className="text-lg text-gray-300 mb-8 font-light leading-relaxed">
                Most staffing companies hand you a person and disappear. <span className="text-gold font-medium">We stay involved.</span>
              </p>

              <div className="space-y-6">
                {[
                  "We monitor performance daily",
                  "We provide retraining when needed",
                  "We replace assistants if it’s not the right fit"
                ].map((item, i) => (
                  <div key={i} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-gold mr-4 flex-shrink-0" />
                    <span className="text-white/90 font-medium tracking-wide">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center md:justify-end">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 text-center max-w-xs rounded-sm">
                <p className="font-heading text-2xl italic text-gold mb-2">Total Support</p>
                <p className="text-sm text-gray-400 uppercase tracking-widest mb-4">You are never stuck</p>
                <p className="text-white font-light">
                  "You’re supported the entire time. That is the Five Star difference."
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default SolutionSection;