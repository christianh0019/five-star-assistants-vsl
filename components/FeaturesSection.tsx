import React from 'react';
import { Calendar, MessageSquare, Database } from 'lucide-react';
import Button from './Button';

interface FeaturesSectionProps {
  onOpenSurvey: () => void;
}

const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onOpenSurvey }) => {
  return (
    <section className="bg-navy py-20 px-4 text-white">
      <div className="max-w-6xl mx-auto">

        <h2 className="font-heading text-center text-3xl md:text-5xl font-bold mb-16">
          Meet Five Star Assistants.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

          {/* Card 1 */}
          <div className="border border-white/20 p-8 rounded-lg bg-navy hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6">
              <Calendar className="text-gold w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-4">Admin & Scheduling</h3>
            <p className="text-gray-300 leading-relaxed">
              We handle your calendar, travel arrangements, and daily administrative friction so you can focus on growth.
            </p>
          </div>

          {/* Card 2 */}
          <div className="border border-white/20 p-8 rounded-lg bg-navy hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6">
              <MessageSquare className="text-gold w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-4">Client Communication</h3>
            <p className="text-gray-300 leading-relaxed">
              Professional inbox management and client follow-ups. Never let a warm lead go cold again.
            </p>
          </div>

          {/* Card 3 */}
          <div className="border border-white/20 p-8 rounded-lg bg-navy hover:bg-white/5 transition-colors">
            <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6">
              <Database className="text-gold w-6 h-6" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-4">Tech & CRM Management</h3>
            <p className="text-gray-300 leading-relaxed">
              We keep your CRM updated, manage your digital files, and ensure your tech stack runs smoothly.
            </p>
          </div>

        </div>

        <div className="text-center">
          <Button
            onClick={onOpenSurvey}
            variant="secondary"
          >
            See How We Can Help
          </Button>
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;