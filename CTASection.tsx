
import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section id="audit" className="py-24 bg-indigo relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan/5 -skew-x-12 transform translate-x-1/4"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-6xl font-black text-white mb-8 leading-tight">
          Stop Donating Leads to <br />
          <span className="text-cyan underline decoration-cyan/30 underline-offset-8">Your Competitors.</span>
        </h2>
        
        <p className="text-xl text-lace/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          In just 15 minutes, we'll run our "Leaky Bucket" audit to show you exactly how many calls you missed last month and the revenue left on the table.
        </p>
        
        <div className="flex flex-col items-center justify-center gap-6">
          <a 
            href="mailto:audit@authoritysystems.ai?subject=Authority%20Audit%20Request" 
            className="group relative inline-flex items-center px-12 py-6 bg-cyan text-indigo font-black text-xl rounded-2xl shadow-2xl hover:shadow-cyan/30 transition-all hover:-translate-y-1 active:scale-95"
          >
            Book Your Authority Audit
            <svg className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          
          <div className="space-y-2">
            <p className="text-sm font-bold text-cyan/80 uppercase tracking-widest">
              Limited Availability
            </p>
            <p className="text-lace/50 text-xs md:text-sm">
              We exclusively work with <span className="text-white font-bold">ONE partner</span> per trade/area to maintain authority dominance.
            </p>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-lace/10 flex flex-wrap justify-center gap-8 md:gap-16 grayscale opacity-40">
           {/* Placeholder for "Trusted By" or Certifications */}
           <span className="text-lace font-black italic tracking-widest uppercase">ServiceTitan</span>
           <span className="text-lace font-black italic tracking-widest uppercase">HousecallPro</span>
           <span className="text-lace font-black italic tracking-widest uppercase">GoogleMapTrust</span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
