import React from 'react';
import { TrendingUp, Clock, DollarSign, Zap } from 'lucide-react';

const ResultsSection: React.FC = () => {
  const results = [
    {
      icon: Clock,
      stat: "20-30 Hours",
      label: "Reclaimed Per Week",
      desc: "Stop doing low-leverage tasks. Focus on strategy and growth."
    },
    {
      icon: Zap,
      stat: "2x Faster",
      label: "Lead Response Time",
      desc: "Never let a warm lead go cold. Your VA handles initial outreach instantly."
    },
    {
      icon: TrendingUp,
      stat: "More Deals",
      label: "Closed Per Month",
      desc: "Consistent follow-up means more appointments and more revenue."
    },
    {
      icon: DollarSign,
      stat: "30-50%",
      label: "Lower Payroll Costs",
      desc: "Get elite talent for a fraction of the cost of a domestic hire."
    },
  ];

  return (
    <section id="results" className="bg-white py-24 px-4 border-b border-gray-100 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-20">
          <span className="font-subheading text-gold font-bold tracking-[0.2em] uppercase text-xs mb-3 block">The Impact</span>
          <h2 className="font-heading text-navy text-3xl md:text-5xl font-bold">
            Real Business Results
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {results.map((item, idx) => (
            <div key={idx} className="bg-white p-8 rounded-lg border border-gray-100 shadow-card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group text-center relative z-10">
              <div className="w-14 h-14 bg-navy/5 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:bg-gold/10 transition-colors">
                <item.icon className="w-6 h-6 text-navy group-hover:text-gold transition-colors duration-300" strokeWidth={2} />
              </div>

              <div className="font-heading text-3xl font-bold text-navy mb-2 group-hover:text-gold transition-colors">{item.stat}</div>
              <h3 className="font-subheading text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">{item.label}</h3>
              <p className="font-body text-gray-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="text-center">
          <div className="bg-offwhite p-10 md:px-20 rounded-lg inline-block border border-gray-100 relative shadow-sm">
            <p className="font-heading text-xl md:text-2xl text-navy italic relative z-10">
              "This is how owners get out of daily chaos and back into growth."
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ResultsSection;