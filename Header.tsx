
import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="sticky top-0 w-full z-40 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-indigo rounded-md flex items-center justify-center">
              <span className="text-cyan font-black text-xl leading-none">A</span>
            </div>
            <span className="text-indigo font-black text-xl tracking-tighter">AUTHORITY SYSTEMS</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#process" className="text-sm font-semibold text-charcoal/70 hover:text-indigo transition-colors">Our Process</a>
            <a href="#case-studies" className="text-sm font-semibold text-charcoal/70 hover:text-indigo transition-colors">Case Studies</a>
            <a href="#audit" className="bg-indigo text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-charcoal transition-all">
              Book Authority Audit
            </a>
          </div>
          
          <div className="md:hidden">
            <a href="#audit" className="text-xs font-bold uppercase tracking-widest text-indigo border-b-2 border-cyan">
              Get Audit
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
