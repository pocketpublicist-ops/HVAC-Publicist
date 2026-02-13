
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Comparison from './components/Comparison';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Problem />
        <Solution />
        <Comparison />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
      
      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md border-t border-gray-100 z-50 md:hidden">
        <a 
          href="#audit" 
          className="block w-full text-center bg-cyan text-indigo font-bold py-4 rounded-lg shadow-lg hover:shadow-cyan/20 transition-all active:scale-95"
        >
          Book Authority Audit
        </a>
      </div>
    </div>
  );
};

export default App;
