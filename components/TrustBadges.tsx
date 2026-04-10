import React from 'react';

const stats = [
  { value: '400+', label: 'Businesses Served' },
  { value: '4 Days', label: 'Avg. Time to Placement' },
  { value: '$0', label: 'Upfront Cost — Ever' },
  { value: '70%', label: 'Avg. Savings vs. Local Wages' },
];

const TrustBadges: React.FC = () => (
  <section className="bg-white border-y border-gray-100 py-8">
    <div className="max-w-5xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-gray-100">
        {stats.map(({ value, label }) => (
          <div key={label} className="flex flex-col items-center text-center px-4 py-2">
            <span className="font-heading text-2xl md:text-3xl font-bold text-navy">{value}</span>
            <span className="font-body text-xs text-gray-400 mt-1 uppercase tracking-wider">{label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustBadges;
