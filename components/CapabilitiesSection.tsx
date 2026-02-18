import React from 'react';
import { Check } from 'lucide-react';

const CapabilitiesSection: React.FC = () => {
  const capabilities = [
    "CRM updates and follow-ups",
    "Inbox and calendar management",
    "Appointment setting",
    "Customer support",
    "Data entry and cleanup",
    "Social media posting",
    "Basic bookkeeping tasks",
    "Project coordination"
  ];

  return (
    <section className="bg-offwhite py-24 px-4">
      <div className="max-w-5xl mx-auto">
        
        <div className="text-center mb-16">
          <h2 className="font-heading text-navy text-3xl md:text-4xl font-bold mb-6">
            What Your Assistant Can Handle
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto mb-6"></div>
          <p className="font-subheading text-sm text-gray-500 uppercase tracking-widest">
            Expertly Trained In The Fundamentals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {capabilities.map((item, idx) => (
            <div key={idx} className="bg-white p-5 px-8 flex items-center border-l-2 border-transparent hover:border-gold transition-colors shadow-sm">
              <Check className="w-5 h-5 text-gold mr-6 flex-shrink-0" />
              <span className="font-body text-navy text-lg font-medium">{item}</span>
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <p className="font-heading text-2xl md:text-3xl text-navy italic leading-normal">
            "If it’s repeatable, it can be offloaded. <br/>If it’s specific to your business, we train it."
          </p>
        </div>

      </div>
    </section>
  );
};

export default CapabilitiesSection;