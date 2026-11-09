import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { servicesData } from '../data/companyData';

export const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F5F3EE]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#345B4B] font-semibold tracking-widest uppercase">
                02 / WHAT WE DO
              </span>
              <span className="h-px w-12 bg-[#77766F]/30" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#222522]">
              Precision in every connection.
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#77766F] leading-relaxed">
            Three core engineering disciplines delivered by one dedicated, accountable team of over 70 structural specialists.
          </p>
        </div>

        {/* Editorial Services Stack with Thin Separators */}
        <div className="space-y-16">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="group border-t border-[#77766F]/20 pt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start"
            >
              {/* Left Column: Number & Title */}
              <div className="lg:col-span-4 flex flex-col justify-between h-full">
                <div>
                  <div className="font-mono text-xs tracking-widest text-[#77766F] mb-3">
                    SERVICE {service.number}
                  </div>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#222522] group-hover:text-[#345B4B] transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-sans text-sm text-[#77766F] mt-3 leading-relaxed">
                    {service.summary}
                  </p>
                </div>

                {/* Codes & Standards badges */}
                <div className="mt-6 pt-4 border-t border-[#77766F]/15">
                  <div className="text-[11px] font-mono uppercase text-[#77766F] mb-2">
                    Code Alignment
                  </div>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-[#222522]">
                    {service.standards.map((std, i) => (
                      <span key={std}>
                        {std}
                        {i < service.standards.length - 1 && <span className="text-[#77766F]/40 ml-2">·</span>}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#222522] hover:text-[#345B4B] font-semibold transition-colors"
                  >
                    <span>Explore Service Specifications</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Middle Column: Core Deliverables List */}
              <div className="lg:col-span-4 space-y-3">
                <div className="text-xs font-mono tracking-wider uppercase text-[#77766F] mb-4">
                  Key Scope & Deliverables
                </div>
                <ul className="space-y-2.5">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#222522]/90 leading-snug">
                      <Check className="w-4 h-4 text-[#345B4B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column: High-Res Real Detailing Graphic */}
              <div className="lg:col-span-4">
                <div className="relative rounded-xs overflow-hidden border border-[#77766F]/20 bg-white shadow-xs group-hover:border-[#345B4B]/40 transition-colors">
                  <div className="aspect-4/3 w-full overflow-hidden bg-white flex items-center justify-center p-4">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="max-h-full max-w-full object-contain transition-transform duration-500 ease-out group-hover:scale-105"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  <div className="p-3 bg-white/95 border-t border-[#77766F]/15 flex items-center justify-between text-[11px] font-mono text-[#77766F]">
                    <span>G5 ENGINEERING DELIVERABLE</span>
                    <span className="text-[#345B4B] font-medium">TEKLA / SDS-2</span>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
