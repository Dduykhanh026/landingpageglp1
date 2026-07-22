import { Squircle } from '@squircle-js/react';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-app-darkBg text-gray-300 py-12 md:py-16 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-8 mb-12">
          
          {/* Brand & Social Column */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <a href="#" aria-label="Dr. GLP-1 Home" className="font-bold text-3xl md:text-title2 text-white tracking-tight mb-4 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg pr-2">
              Dr. GLP-1<span className="text-primary">.</span>
            </a>
            <p className="text-gray-400 mb-6 max-w-sm sm:max-w-xs text-base md:text-subhead leading-relaxed">
              The ultimate companion app for anyone on a GLP-1 weight loss journey. Track shots, nutrition, and side effects.
            </p>
            <div className="flex space-x-4">
              {/* Social Placeholders */}
              <Squircle as="a" href="#" aria-label="X (formerly Twitter)" className="w-11 h-11 bg-app-darkCard flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary" cornerRadius={100} cornerSmoothing={1}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </Squircle>
              <Squircle as="a" href="#" aria-label="Instagram" className="w-11 h-11 bg-app-darkCard flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary" cornerRadius={100} cornerSmoothing={1}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </Squircle>
              <Squircle as="a" href="#" aria-label="LinkedIn" className="w-11 h-11 bg-app-darkCard flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary" cornerRadius={100} cornerSmoothing={1}>
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </Squircle>
            </div>
          </div>
          
          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-8 sm:col-span-2 lg:col-span-3 lg:grid-cols-3">
            <div>
              <h4 className="text-white font-bold mb-3 md:mb-4 uppercase text-[13px] md:text-subhead tracking-wider">Product</h4>
              <ul className="space-y-1 md:space-y-3">
                <li><a href="#features" className="block py-2 text-[15px] md:text-base hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Features</a></li>
                <li><a href="#how-it-works" className="block py-2 text-[15px] md:text-base hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">How it works</a></li>
                <li><a href="#reviews" className="block py-2 text-[15px] md:text-base hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Reviews</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-3 md:mb-4 uppercase text-[13px] md:text-subhead tracking-wider">Company</h4>
              <ul className="space-y-1 md:space-y-3">
                <li><a href="#" className="block py-2 text-[15px] md:text-base hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">About Us</a></li>
                <li><a href="#" className="block py-2 text-[15px] md:text-base hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Blog</a></li>
                <li><a href="#" className="block py-2 text-[15px] md:text-base hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Careers</a></li>
                <li><a href="#" className="block py-2 text-[15px] md:text-base hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Contact</a></li>
              </ul>
            </div>
            
            {/* Third column takes full width on mobile if it's odd out of a 2-col grid, but we put it in col-span-2 */}
            <div className="col-span-2 sm:col-span-1">
              <h4 className="text-white font-bold mb-3 md:mb-4 uppercase text-[13px] md:text-subhead tracking-wider mt-4 sm:mt-0">Legal</h4>
              <ul className="space-y-1 md:space-y-3 flex flex-col sm:block">
                <li><a href="#" className="block py-2 text-[15px] md:text-base hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Privacy Policy</a></li>
                <li><a href="#" className="block py-2 text-[15px] md:text-base hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Terms of Service</a></li>
                <li><a href="/User_Agreement_GLP1.pdf" target="_blank" rel="noopener noreferrer" className="block py-2 text-[15px] md:text-base hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">User Agreement</a></li>
                <li><a href="#" className="block py-2 text-[15px] md:text-base hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded">Medical Disclaimer</a></li>
              </ul>
            </div>
          </div>
          
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 pb-4 flex flex-col lg:flex-row justify-between items-center lg:items-start text-[14px] md:text-subhead text-gray-500 gap-6">
          <p className="text-center lg:text-left w-full lg:w-auto shrink-0">© {new Date().getFullYear()} Dr. GLP-1 Inc. All rights reserved.</p>
          <p className="max-w-3xl text-center lg:text-right text-[12px] md:text-caption1 leading-relaxed">
            Dr. GLP-1 is not a healthcare provider and does not provide medical advice. Ozempic®, Wegovy®, Mounjaro®, and Zepbound® are trademarks of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;