import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy pt-20 pb-10 px-4 md:px-8 border-t border-navy/10 mt-auto">
      <div className="max-w-7xl mx-auto">

        {/* Top Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* Column 1: Brand */}
          <div className="flex flex-col items-start">
            <div className="mb-6 opacity-80 hover:opacity-100 transition-opacity">
              <Logo variant="light" />
            </div>
            <p className="font-body text-gray-400 text-sm leading-relaxed max-w-xs mb-8">
              Helping businesses scale without borders. We recruit, vet, and place top overseas talent so you can grow without expensive local hires.
            </p>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="font-heading font-bold text-white uppercase tracking-widest text-sm mb-6">Company</h4>
            <ul className="space-y-4 font-body text-sm text-gray-400">
              <li><Link to="/" className="hover:text-gold transition-colors">Home</Link></li>
              <li><Link to="/pricing" className="hover:text-gold transition-colors">Pricing</Link></li>
              <li><Link to="/results" className="hover:text-gold transition-colors">Results</Link></li>
              <li><Link to="/how-it-works" className="hover:text-gold transition-colors">How It Works</Link></li>
            </ul>
          </div>

          {/* Column 3: Who We Serve */}
          <div>
            <h4 className="font-heading font-bold text-white uppercase tracking-widest text-sm mb-6">Who We Serve</h4>
            <ul className="space-y-4 font-body text-sm text-gray-400">
              <li><Link to="/local-service-businesses" className="hover:text-gold transition-colors">Local Service Businesses</Link></li>
              <li><Link to="/digital-agencies" className="hover:text-gold transition-colors">Digital Agencies</Link></li>
              <li><Link to="/real-estate-agents" className="hover:text-gold transition-colors">Real Estate Agents</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact / Legal */}
          <div>
            <h4 className="font-heading font-bold text-white uppercase tracking-widest text-sm mb-6">Connect</h4>
            <ul className="space-y-4 font-body text-sm text-gray-400">
              <li>
                <a href="mailto:support@fivestarassistants.com" className="hover:text-gold transition-colors">
                  support@fivestarassistants.com
                </a>
              </li>
              <li className="pt-4">
                <Link to="/privacy" className="hover:text-gold transition-colors block">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-gold transition-colors block">Terms of Service</Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col items-center justify-center text-center">
          <p className="font-body text-xs text-gray-500 uppercase tracking-widest">
            &copy; {new Date().getFullYear()} Five Star Assistants. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;