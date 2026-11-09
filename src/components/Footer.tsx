import React from 'react';
import { Link } from 'react-router-dom';
import { G5Logo } from './G5Logo';
import { companyProfile, servicesData } from '../data/companyData';
import { MapPin, Phone, Mail, Globe, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1C1A] text-[#E5E1D8] pt-20 pb-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Top Grid: Brand & Global Network */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-14 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Ethos */}
          <div className="lg:col-span-5 space-y-6">
            <G5Logo theme="dark" size="lg" showMotto={true} />
            <p className="text-xs sm:text-sm text-[#77766F] leading-relaxed max-w-sm">
              Employee-owned structural steel detailing and engineering solutions. Operating as an extended team for international fabricators, engineering consultants, and erection firms since 2019.
            </p>
            <div className="pt-2">
              <span className="font-mono text-xs text-[#8DC63F] uppercase tracking-widest block font-semibold">
                Brand Statement
              </span>
              <p className="font-serif italic text-base text-white/90 mt-1">
                Precision that builds possibilities.
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-mono text-xs text-white uppercase tracking-wider block font-semibold">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs text-[#77766F]">
              <li>
                <Link to="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">About G5</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors">Projects Archive</Link>
              </li>
              <li>
                <Link to="/capabilities" className="hover:text-white transition-colors">Capabilities</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">Contact & RFP</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-mono text-xs text-white uppercase tracking-wider block font-semibold">
              Disciplines
            </span>
            <ul className="space-y-2.5 text-xs text-[#77766F]">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <Link to="/services" className="hover:text-white transition-colors">
                    {s.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Tekla Model Sharing
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  PE Connection Stamping
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Mysore Headquarters & Contacts */}
          <div className="lg:col-span-3 space-y-4">
            <span className="font-mono text-xs text-white uppercase tracking-wider block font-semibold">
              Registered Office
            </span>
            <div className="space-y-3 text-xs text-[#77766F] leading-relaxed">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8DC63F] shrink-0 mt-0.5" />
                <span>
                  {companyProfile.name}<br />
                  {companyProfile.address.street}, {companyProfile.address.area}, {companyProfile.address.city} – {companyProfile.address.pincode}, {companyProfile.address.state}, {companyProfile.address.country}
                </span>
              </div>

              <div className="flex items-center gap-2.5 pt-2 border-t border-white/5">
                <Phone className="w-4 h-4 text-[#8DC63F] shrink-0" />
                <div className="space-y-0.5">
                  <a href={`tel:${companyProfile.contact.globalPhone.replace(/\s+/g, '')}`} className="block hover:text-white transition-colors font-mono">
                    {companyProfile.contact.globalPhone} <span className="text-[10px] text-neutral-400">(Global / US)</span>
                  </a>
                  <a href={`tel:${companyProfile.contact.indiaPhone.replace(/\s+/g, '')}`} className="block hover:text-white transition-colors font-mono">
                    {companyProfile.contact.indiaPhone} <span className="text-[10px] text-neutral-400">(India HQ)</span>
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-2.5 pt-2 border-t border-white/5">
                <Mail className="w-4 h-4 text-[#8DC63F] shrink-0" />
                <a href={`mailto:${companyProfile.contact.email}`} className="hover:text-white transition-colors font-mono">
                  {companyProfile.contact.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#8DC63F] shrink-0" />
                <a href={`https://${companyProfile.contact.website}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-mono">
                  {companyProfile.contact.website}
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Horizontal Large Bold Transparent Scrolling Banner */}
        <div className="relative w-full overflow-hidden py-12 my-6 border-y border-white/5 select-none">
          <span className="sr-only">G5 Engineering Solutions Pvt. Ltd.</span>
          <div aria-hidden="true" className="animate-marquee-slow flex items-center gap-10">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center gap-10 shrink-0">
                <span className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[110px] tracking-tight text-outline-transparent uppercase leading-none transition-colors duration-500">
                  G5 ENGINEERING SOLUTIONS PVT LTD
                </span>
                <span className="w-3.5 h-3.5 rounded-full border border-[#8DC63F]/40 bg-[#8DC63F]/10 shrink-0" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Quiet Copyright & Technical Compliance */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#77766F]">
          <div>
            © {currentYear} G5 Engineering Solutions Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>AISC · CISC · NISD · AWS · IS 800</span>
            <span className="text-white/20">|</span>
            <span>EMPLOYEE-OWNED ENTERPRISE</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
