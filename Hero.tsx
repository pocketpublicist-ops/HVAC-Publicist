
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-12 pb-20 md:pt-24 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-block px-4 py-1.5 mb-6 bg-cyan/10 border border-cyan/20 rounded-full">
          <span className="text-xs md:text-sm font-bold text-indigo uppercase tracking-widest">
            Exclusive to Baton Rouge HVAC & Trades
          </span>
        </div>
        
        <h1 className="text-4xl md:text-7xl font-black text-indigo leading-[1.1] tracking-tight mb-8">
          Missed Service Calls = <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo via-indigo/80 to-cyan">
            Missed High-Ticket Installs.
          </span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
          While you're on a roof, your best leads are calling your competitors. We install an AI Lead Recovery system that texts back instantly, books jobs, and climbs your Google rank—automatically.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="#audit" 
            className="w-full sm:w-auto px-10 py-5 bg-indigo text-white font-black text-lg rounded-xl shadow-xl hover:shadow-indigo/30 transition-all hover:-translate-y-1 active:scale-95"
          >
            Claim Your Free Revenue Audit
          </a>
          <div className="flex items-center space-x-2 text-sm font-medium text-gray-500">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>One partner per service area.</span>
          </div>
        </div>
        
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-lace z-10"></div>
          <div className="p-4 md:p-8 bg-white border border-gray-100 rounded-2xl shadow-2xl max-w-4xl mx-auto overflow-hidden">
            <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-50">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <span className="text-xs font-mono text-gray-400">revenue-recovery-dashboard.v1</span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-24 bg-gray-50 rounded-lg animate-pulse"></div>
              <div className="h-24 bg-gray-50 rounded-lg animate-pulse"></div>
              <div className="h-24 bg-gray-50 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
