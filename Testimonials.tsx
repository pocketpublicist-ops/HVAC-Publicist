
import React from 'react';

const Testimonials: React.FC = () => {
  return (
    <section id="case-studies" className="py-24 bg-lace overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-indigo mb-4">Results Speak Louder.</h2>
            <p className="text-xl text-gray-600">Local owners reclaiming their time and their revenue.</p>
          </div>
          <div className="flex space-x-2">
             <div className="px-4 py-2 bg-white rounded-lg border border-gray-100 font-bold text-indigo shadow-sm">
               +38% Booked Jobs
             </div>
             <div className="px-4 py-2 bg-white rounded-lg border border-gray-100 font-bold text-indigo shadow-sm">
               -22% Ad Waste
             </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              quote: "We were spending $5k/mo on Google Ads but only answering 40% of the calls. Authority Systems fixed the leak in 48 hours. I booked three full system installs from missed calls in the first week.",
              author: "Jason D.",
              role: "Owner, Prime HVAC Services",
              avatar: "https://picsum.photos/seed/hvac1/100/100"
            },
            {
              quote: "The automated text-back is a game changer. Customers actually thank us for the quick response. It makes us look like a multi-million dollar operation while I'm still in the truck.",
              author: "Marcus T.",
              role: "CEO, Capital Trades Group",
              avatar: "https://picsum.photos/seed/hvac2/100/100"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl border border-gray-100 shadow-sm relative">
              <div className="text-cyan text-6xl font-serif absolute top-4 right-8 opacity-20">"</div>
              <p className="text-lg text-gray-700 italic mb-8 relative z-10">
                {item.quote}
              </p>
              <div className="flex items-center space-x-4">
                <img src={item.avatar} alt={item.author} className="w-12 h-12 rounded-full grayscale" />
                <div>
                  <h4 className="font-bold text-indigo">{item.author}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
