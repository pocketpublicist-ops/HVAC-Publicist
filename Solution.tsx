
import React from 'react';

const Solution: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-lace">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-indigo mb-6">The Authority Recovery System</h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            We don't just "run ads." We install a proprietary AI infrastructure that captures every cent of value from the leads you already have.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              title: "Instant AI Text-Back",
              desc: "Our system detects a missed call and sends a personalized text in <30 seconds. We start the conversation while the lead is still looking at your screen.",
              icon: "💬"
            },
            {
              title: "24/7 Automated Booking",
              desc: "The AI qualifies the lead (Install vs Repair) and schedules them directly onto your ServiceTitan or Housecall Pro calendar—even at 2 AM.",
              icon: "📅"
            },
            {
              title: "Authority Positioning",
              desc: "By maintaining a 100% response rate, your Google trust score skyrockets. You move up the rankings naturally without increasing ad spend.",
              icon: "🏆"
            },
            {
              title: "Reactive Lead Nurture",
              desc: "Leads that haven't booked are automatically followed up with via text and email based on their specific inquiry type.",
              icon: "🔄"
            },
            {
              title: "Live ROI Dashboard",
              desc: "Track exactly how many calls were missed and how many were successfully recovered into booked revenue in real-time.",
              icon: "📊"
            },
            {
              title: "Reputation Engine",
              desc: "Automatically solicit 5-star reviews from every happy customer, building an unshakeable wall of local social proof.",
              icon: "⭐"
            }
          ].map((feature, idx) => (
            <div key={idx} className="relative flex flex-col p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl hover:shadow-cyan/5 transition-all">
              <div className="w-12 h-12 flex items-center justify-center text-3xl mb-6 bg-lace rounded-xl">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-indigo mb-3">{feature.title}</h3>
              <p className="text-gray-500 leading-relaxed text-sm flex-grow">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;
