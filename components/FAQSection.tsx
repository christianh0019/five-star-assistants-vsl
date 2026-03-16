import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "How much does it cost?",
    answer: "Our remote assistants start at just $4/hr — a fraction of what a local hire costs. No placement fees, no hidden charges. You only pay for the hours your assistant works."
  },
  {
    question: "How quickly can I get an assistant?",
    answer: "Most clients have a matched, trained assistant ready to work within 4 business days of their discovery call. We move fast so you don't lose momentum."
  },
  {
    question: "What if the assistant doesn't work out?",
    answer: "We handle all performance management. If your assistant isn't meeting expectations, we replace them — at no extra cost to you. No awkward conversations, no rehiring process."
  },
  {
    question: "What can a remote assistant actually do?",
    answer: "Our assistants handle a wide range of tasks: inbox & calendar management, customer support, data entry, social media, research, scheduling, CRM updates, bookkeeping support, and more. We match you with someone trained on your specific workflows."
  },
  {
    question: "Are assistants dedicated to me or shared?",
    answer: "Your assistant is 100% dedicated to your business. They're not splitting time between multiple clients — they show up for you every day, learning your systems and becoming a true extension of your team."
  },
  {
    question: "Is there a contract or long-term commitment?",
    answer: "No long-term contracts. You can cancel anytime. We believe in earning your business every month — not locking you in."
  },
  {
    question: "What are the working hours?",
    answer: "Assistants work in your timezone during your preferred hours. Whether you need someone 9–5 or covering evenings and weekends, we'll find a match that fits your schedule."
  },
  {
    question: "How do you ensure quality?",
    answer: "Every assistant goes through a rigorous vetting process — skill assessments, background checks, and workflow training before they're ever placed with a client. We also provide ongoing management and check-ins to ensure performance stays high."
  }
];

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-white py-24 md:py-32 px-4 border-b border-gray-100">
      <div className="max-w-3xl mx-auto">

        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-[1px] bg-gold"></span>
            <span className="font-body text-gold font-bold tracking-[0.2em] uppercase text-xs">FAQ</span>
            <span className="w-12 h-[1px] bg-gold"></span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-navy">
            Common Questions
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <button
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-navy/[0.02] transition-colors duration-200"
              >
                <span className="font-heading font-bold text-lg text-navy leading-snug">
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  className={`text-gold flex-shrink-0 transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-5 pt-1 border-t border-gray-100">
                  <p className="font-body text-gray-500 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;
