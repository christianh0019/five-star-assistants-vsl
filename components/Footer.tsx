import React from 'react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy py-16 px-4 border-t border-navy/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 font-subheading">

        {/* Brand Area */}
        <div className="flex flex-col items-center md:items-start mb-10 md:mb-0">
          <div className="mb-6 opacity-80 hover:opacity-100 transition-opacity">
            <Logo variant="light" />
          </div>
          <div className="text-center md:text-left text-xs uppercase tracking-widest opacity-60">
            &copy; {new Date().getFullYear()} Five Star Assistants.<br />All rights reserved.
          </div>
        </div>

        <div className="flex space-x-8 text-xs font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;