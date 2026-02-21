import React from 'react';

const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Free Discovery Call",
      desc: "We map out exactly what to offload first."
    },
    {
      step: "02",
      title: "Talent Matching",
      desc: "We recruit and train an assistant based on your workflows."
    },
    {
      step: "03",
      title: "Launch",
      desc: "Your assistant is placed and working within days."
    },
    {
      step: "04",
      title: "Ongoing Management",
      desc: "We handle support, performance, and replacements."
    }
  ];

  return (
    <section className="bg-white py-24 md:py-32 px-4 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20">
          <span className="font-subheading text-gold font-bold tracking-[0.2em] uppercase text-xs mb-3 block">The Process</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-navy">
            How It Works
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((item, idx) => (
            <div key={idx} className="bg-white p-8 border border-gray-100 shadow-card hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-sm relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-gold transition-colors duration-500"></div>

              <div className="font-heading text-6xl text-gray-100 mb-6 group-hover:text-gold/20 transition-colors font-bold">
                {item.step}
              </div>

              <h3 className="font-heading font-bold text-xl text-navy mb-4">{item.title}</h3>
              <p className="font-body text-gray-500 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;