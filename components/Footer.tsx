import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import NewsletterSignup from './NewsletterSignup';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy pt-20 pb-10 px-4 md:px-8 border-t border-navy/10 mt-auto">
      <div className="max-w-7xl mx-auto">

        {/* Newsletter Section */}
        <div className="mb-16 pb-16 border-b border-white/10">
          <div className="max-w-2xl">
            <p className="text-xs font-heading font-bold text-gold uppercase tracking-widest mb-3">Free Weekly Newsletter</p>
            <h3 className="font-heading font-bold text-white text-2xl md:text-3xl mb-2">
              Delegated.
            </h3>
            <p className="font-body text-gray-400 text-sm mb-6">
              One delegation idea every Tuesday for founders who are done being the busiest person in their company.
            </p>
            <NewsletterSignup variant="footer" />
          </div>
        </div>

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
              <li><Link to="/referral-program" className="hover:text-gold transition-colors">Referral Program</Link></li>
              <li><Link to="/youtube-videos" className="hover:text-gold transition-colors">YouTube Videos</Link></li>
            </ul>
          </div>

          {/* Column 3: Industries */}
          <div>
            <h4 className="font-heading font-bold text-white uppercase tracking-widest text-sm mb-6">Industries</h4>
            <ul className="space-y-4 font-body text-sm text-gray-400">
              <li><Link to="/industries/healthcare" className="hover:text-gold transition-colors">Healthcare</Link></li>
              <li><Link to="/industries/real-estate" className="hover:text-gold transition-colors">Real Estate</Link></li>
              <li><Link to="/industries/legal" className="hover:text-gold transition-colors">Legal</Link></li>
              <li><Link to="/industries/e-commerce" className="hover:text-gold transition-colors">E-Commerce</Link></li>
              <li><Link to="/industries/insurance" className="hover:text-gold transition-colors">Insurance</Link></li>
              <li><Link to="/industries/logistics" className="hover:text-gold transition-colors">Logistics</Link></li>
              <li><Link to="/industries/financial-services" className="hover:text-gold transition-colors">Financial Services</Link></li>
              <li><Link to="/industries/home-services" className="hover:text-gold transition-colors">Home Services</Link></li>
              <li><Link to="/industries/education" className="hover:text-gold transition-colors">Education & Training</Link></li>
              <li><Link to="/industries/travel" className="hover:text-gold transition-colors">Travel</Link></li>
              <li><Link to="/industries/telecommunications" className="hover:text-gold transition-colors">Telecommunications</Link></li>
              <li><Link to="/digital-agencies" className="hover:text-gold transition-colors">Digital Agencies</Link></li>
              <li><Link to="/industries/energy" className="hover:text-gold transition-colors">Energy & Utilities</Link></li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div>
            <h4 className="font-heading font-bold text-white uppercase tracking-widest text-sm mb-6">Connect</h4>
            <ul className="space-y-4 font-body text-sm text-gray-400">
              <li>
                <a href="mailto:support@fivestarassistants.com" className="hover:text-gold transition-colors">
                  support@fivestarassistants.com
                </a>
              </li>
              <li>
                <Link to="/for-employees" className="hover:text-gold transition-colors">Apply for Work</Link>
              </li>
              <li>
                <a href="https://app.fivestarassistants.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                  Login
                </a>
              </li>
              <li className="pt-4">
                <Link to="/privacy" className="hover:text-gold transition-colors block">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-gold transition-colors block">SMS Terms</Link>
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