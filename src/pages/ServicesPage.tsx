import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicesData, standardsAndCodes } from '../data/companyData';
import { ArrowUpRight, Check, ShieldCheck, FileCheck, Layers, Cpu } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-28 pb-28 bg-[#F5F3EE]">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Page Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-xs text-[#345B4B] font-semibold tracking-widest uppercase">
              SERVICES & CAPABILITIES
            </span>
            <span className="h-px w-12 bg-[#77766F]/30" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#222522] leading-[1.1]">
            Three services. <br />
            <span className="italic text-[#345B4B]">One accountable team.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#77766F] leading-relaxed">
            From preliminary material take-offs and constructability engineering to complete fabrication-ready shop drawing packages and PE connection stamping.
          </p>
        </div>

        {/* Detailed Services Stack */}
        <div className="space-y-24 mb-24">
          {servicesData.map((service) => (
            <section
              key={service.id}
              id={service.id}
              className="p-8 sm:p-12 bg-white border border-[#77766F]/20 rounded-xs shadow-xs"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                
                {/* Left: Service Overview & Scope */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-[#345B4B] font-bold tracking-widest uppercase">
                      SERVICE {service.number}
                    </span>
                    <span className="h-px w-8 bg-[#77766F]/30" />
                  </div>

                  <h2 className="font-serif text-3xl sm:text-4xl text-[#222522]">
                    {service.title}
                  </h2>

                  <p className="font-serif italic text-lg text-[#345B4B]">
                    {service.headline}
                  </p>

                  <p className="text-sm sm:text-base text-[#77766F] leading-relaxed">
                    {service.summary}
                  </p>

                  <div className="pt-4 border-t border-[#77766F]/15">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#222522] font-semibold mb-4">
                      Complete Deliverables Scope:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.deliverables.map((item) => (
                        <div key={item} className="flex items-start gap-2.5 text-xs text-[#222522]">
                          <Check className="w-4 h-4 text-[#345B4B] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 flex flex-wrap items-center gap-4 text-xs font-mono">
                    <span className="text-[#77766F]">CODE COMPLIANCE:</span>
                    {service.standards.map((std) => (
                      <span key={std} className="px-2.5 py-1 bg-[#E5E1D8]/60 text-[#222522] rounded-xs font-semibold">
                        {std}
                      </span>
                    ))}
                  </div>

                  <div className="pt-2">
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-[#222522] hover:bg-[#345B4B] text-white text-xs font-mono uppercase tracking-wider rounded-xs transition-colors"
                    >
                      <span>Inquire About {service.title}</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right: Technical Deliverable Graphic */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="rounded-xs overflow-hidden border border-[#77766F]/20 bg-[#222522] shadow-sm">
                    <div className="aspect-4/3 w-full overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <div className="p-3 bg-white border-t border-[#77766F]/15 flex items-center justify-between text-[11px] font-mono text-[#77766F]">
                      <span>AUTHENTIC 3D CAD DELIVERABLE</span>
                      <span className="text-[#345B4B] font-semibold">G5 QUALITY AUDITED</span>
                    </div>
                  </div>

                  <div className="p-4 bg-[#F5F3EE] border border-[#77766F]/15 rounded-xs text-xs text-[#77766F] space-y-1">
                    <div className="font-mono text-[#222522] font-semibold uppercase text-[11px]">
                      File Formats Handled:
                    </div>
                    <div>
                      Tekla (.db1, .xml), SDS/2, NC1 (DSTV), DXF, DWG, PDF, KISS, FabSuite / EPM, IFC, FabTrol.
                    </div>
                  </div>
                </div>

              </div>
            </section>
          ))}
        </div>

        {/* Global Standards Matrix */}
        <section className="p-10 bg-[#222522] text-[#F5F3EE] rounded-xs shadow-md mb-20">
          <div className="max-w-2xl mb-8">
            <span className="font-mono text-xs text-[#8DC63F] uppercase tracking-wider font-semibold block mb-2">
              ENGINEERING COMPLIANCE
            </span>
            <h3 className="font-serif text-3xl text-white">
              International structural detailing standards.
            </h3>
            <p className="text-sm text-[#E5E1D8]/80 mt-2">
              Our drawings conform seamlessly to regional guidelines and fabrication traditions across global territories.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs font-mono">
            {standardsAndCodes.map((s) => (
              <div key={s.code} className="p-4 bg-white/5 border border-white/5 rounded-xs space-y-1">
                <div className="text-sm font-bold text-white">{s.code}</div>
                <div className="text-neutral-400 font-sans text-xs">{s.title}</div>
                <div className="text-[#8DC63F] text-[10px] uppercase pt-1">{s.region}</div>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};
