
import React from 'react';

const Problem: React.FC = () => {
  return (
    <section id="problem" className="py-24 bg-indigo text-lace rounded-t-[3rem] md:rounded-t-[5rem]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            If you don't answer in 120 seconds, <span className="text-cyan">they've already called the next guy.</span>
          </h2>
          <p className="text-xl text-lace/70 leading-relaxed">
            Every time your phone rings while you're focused on a job, money is leaking out of your business. Voicemail is where high-ticket installs go to die.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "The Reality",
              desc: "62% of inbound calls to trade businesses go unanswered. Modern homeowners don't leave messages; they keep scrolling.",
              icon: "📵"
            },
            {
              title: "The Hidden Cost",
              desc: "A missed call isn't just a tune-up; it's a $15,000 system replacement handed directly to your local competitor.",
              icon: "💸"
            },
            {
              title: "The Google Penalty",
              desc: "Google tracks your 'Response Velocity.' Low response rates kill your trust score, pushing you further down the map.",
              icon: "📉"
            }
          ].map((item, idx) => (
            <div key={idx} className="group p-8 bg-charcoal/50 border border-lace/10 rounded-2xl hover:border-cyan/50 transition-all duration-300">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan transition-colors">{item.title}</h3>
              <p className="text-lace/60 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problem;
