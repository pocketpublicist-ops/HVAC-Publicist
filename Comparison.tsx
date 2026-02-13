
import React from 'react';

const Comparison: React.FC = () => {
  const CheckIcon = () => (
    <svg className="w-5 h-5 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
    </svg>
  );

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-black text-indigo text-center mb-16">Why Trades Choose Authority</h2>
        
        <div className="overflow-hidden rounded-3xl border border-gray-200 shadow-2xl bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-indigo text-white">
                <th className="py-6 px-8 text-lg font-bold">Feature</th>
                <th className="py-6 px-8 text-lg font-bold">The "Old Way"</th>
                <th className="py-6 px-8 text-lg font-bold bg-cyan/10 text-indigo border-x-2 border-cyan/30">Authority System</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm md:text-base">
              {[
                { label: "Response Time", old: "Hours to Days", new: "Sub-30 Seconds" },
                { label: "Lead Capture", old: "Manual Entry / Voice", new: "100% Automated" },
                { label: "After-Hours", old: "Dead End / Voicemail", new: "Engaged & Booked" },
                { label: "Ad Efficiency", old: "Leaky Bucket (High CPL)", new: "Maximum Value (Low CPL)" },
                { label: "Google Ranking", old: "Declining Trust", new: "Ascending Authority" }
              ].map((row, idx) => (
                <tr key={idx} className="hover:bg-gray-50/50 transition-colors">
                  <td className="py-6 px-8 font-bold text-charcoal">{row.label}</td>
                  <td className="py-6 px-8 text-gray-500">{row.old}</td>
                  <td className="py-6 px-8 font-black text-indigo bg-cyan/5 border-x-2 border-cyan/20">
                    <div className="flex items-center space-x-2">
                      <CheckIcon />
                      <span>{row.new}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
