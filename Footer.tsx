
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-lace/40 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
             <div className="flex items-center space-x-2 mb-6">
                <div className="w-6 h-6 bg-cyan rounded flex items-center justify-center">
                  <span className="text-indigo font-black text-xs leading-none">A</span>
                </div>
                <span className="text-lace font-black text-lg tracking-tighter">AUTHORITY SYSTEMS</span>
              </div>
              <p className="max-w-xs text-sm leading-relaxed mb-6">
                Specialized AI systems designed specifically for the plumbing, HVAC, and electrical trades. We recover revenue others leave behind.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-cyan transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="#" className="hover:text-cyan transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.332 3.608 1.308.975.975 1.245 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.063 1.366-.333 2.633-1.308 3.608-.975.975-2.242 1.245-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.063-2.633-.333-3.608-1.308-.975-.975-1.245-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.063-1.366.333-2.633 1.308-3.608.975-.975 2.242-1.245 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.337 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.337-.2 6.78-2.618 6.98-6.98.058-1.281.072-1.689.072-4.948s-.014-3.667-.072-4.947c-.2-4.337-2.618-6.78-6.98-6.98-1.281-.058-1.689-.072-4.948-.072zM12 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                </a>
              </div>
          </div>
          
          <div>
            <h5 className="text-lace font-bold mb-4">Focus Areas</h5>
            <ul className="space-y-2 text-sm">
              <li>HVAC Lead Recovery</li>
              <li>Plumbing Authority</li>
              <li>Electrical Growth</li>
              <li>Local Service SEO</li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lace font-bold mb-4">Contact</h5>
            <ul className="space-y-2 text-sm">
              <li>audit@authoritysystems.ai</li>
              <li>Baton Rouge, LA</li>
              <li>(225) 555-0199</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-lace/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>&copy; 2025 Authority Systems. No false ranking guarantees. ROI results based on system implementation.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-lace transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-lace transition-colors">Terms of Authority</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
