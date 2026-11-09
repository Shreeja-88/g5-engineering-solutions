import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { operationalCapacity, trackRecordStats, softwareTools } from '../data/companyData';
import { SteelModelCanvas } from '../components/SteelModelCanvas';
import { ArrowUpRight, Cpu, Server, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';

export const CapabilitiesPage: React.FC = () => {
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
              INFRASTRUCTURE & CAPACITY
            </span>
            <span className="h-px w-12 bg-[#77766F]/30" />
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-[#222522] leading-[1.1]">
            Built to scale <br />
            <span className="italic text-[#345B4B]">with your pipeline.</span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-[#77766F] leading-relaxed">
            A high-capacity structural detailing studio in Mysore engineered with enterprise hardware, certified software licensing, and a multi-shift operating model.
          </p>
        </div>

        {/* 6 Monthly Capacity Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {operationalCapacity.map((item) => (
            <div
              key={item.label}
              className="p-6 bg-white border border-[#77766F]/20 rounded-xs shadow-xs"
            >
              <div className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#222522] tabular-nums">
                {item.value}
              </div>
              <div className="mt-2 text-xs font-mono uppercase tracking-wider text-[#222522] font-semibold">
                {item.label}
              </div>
              <p className="mt-1 text-[11px] text-[#77766F]">
                {item.sublabel}
              </p>
            </div>
          ))}
        </div>

        {/* 3D Model & Infrastructure Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-20">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="p-8 bg-white border border-[#77766F]/20 rounded-xs shadow-xs space-y-6">
              <span className="font-mono text-xs text-[#345B4B] uppercase tracking-wider font-semibold block">
                FACILITY CAPABILITIES & SUPPORT
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl text-[#222522]">
                Mysore Engineering Hub Infrastructure
              </h2>
              
              <ul className="space-y-4 text-sm text-[#77766F]">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#345B4B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#222522] block font-medium">100 Enterprise Workstations:</strong>
                    Configured with high-end workstation GPUs, multi-monitor displays, and high-speed NVMe storage arrays.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#345B4B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#222522] block font-medium">18 Licensed Tekla Structures & 12 Model Sharing:</strong>
                    Legitimate commercial licenses allowing direct cloud synchronization with fabricator teams in real time.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#345B4B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#222522] block font-medium">24×7 Customer Support & Global Rotational Shifts:</strong>
                    Continuous communication, responsive RFI turnarounds, and rapid submittal revisions.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#345B4B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#222522] block font-medium">3 Dedicated Business Development & Technical Leads:</strong>
                    Streamlined onboarding, estimating support, and proactive account management.
                  </div>
                </li>
              </ul>
            </div>

            {/* Quality Control Protocol */}
            <div className="p-8 bg-white border border-[#77766F]/20 rounded-xs shadow-xs space-y-4">
              <span className="font-mono text-xs text-[#345B4B] uppercase tracking-wider font-semibold block">
                QUALITY ASSURANCE ARCHITECTURE
              </span>
              <h3 className="font-serif text-2xl text-[#222522]">
                Our 4-Tier Internal QC Verification
              </h3>
              <p className="text-sm text-[#77766F]">
                Every drawing undergoes systematic multi-layered verification before delivery to ensure complete constructability:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 text-xs font-mono">
                <div className="p-3 bg-[#F5F3EE] rounded-xs border border-[#77766F]/15">
                  <div className="text-[#345B4B] font-bold">LEVEL 01 · MODEL CHECK</div>
                  <div className="text-[#77766F] mt-1 font-sans">Geometry, clearances, clash detection and connection loads.</div>
                </div>
                <div className="p-3 bg-[#F5F3EE] rounded-xs border border-[#77766F]/15">
                  <div className="text-[#345B4B] font-bold">LEVEL 02 · DRAWING CHECK</div>
                  <div className="text-[#77766F] mt-1 font-sans">Dimensions, welding symbols, bevel angles and bill of materials.</div>
                </div>
                <div className="p-3 bg-[#F5F3EE] rounded-xs border border-[#77766F]/15">
                  <div className="text-[#345B4B] font-bold">LEVEL 03 · LEAD CHECK</div>
                  <div className="text-[#77766F] mt-1 font-sans">Constructability, field erection sequences and crane access.</div>
                </div>
                <div className="p-3 bg-[#F5F3EE] rounded-xs border border-[#77766F]/15">
                  <div className="text-[#345B4B] font-bold">LEVEL 04 · FINAL AUDIT</div>
                  <div className="text-[#77766F] mt-1 font-sans">NC/DXF machine data validation and transmittal packaging.</div>
                </div>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="border border-[#77766F]/20 rounded-xs overflow-hidden bg-white shadow-xs">
              <div className="p-3 bg-[#E5E1D8]/40 border-b border-[#77766F]/15 text-[11px] font-mono text-[#77766F] flex items-center justify-between">
                <span>INTERACTIVE 3D TEKLA STRUCTURAL SYSTEM</span>
                <span className="text-[#345B4B]">ROTATE / INSPECT</span>
              </div>
              <SteelModelCanvas height="h-96" interactive={true} />
            </div>

            {/* Verified Track Record */}
            <div className="p-8 bg-[#222522] text-[#F5F3EE] rounded-xs shadow-md space-y-4">
              <span className="font-mono text-xs text-[#8DC63F] uppercase tracking-wider font-semibold block">
                WHAT WE'VE DELIVERED (TRACK RECORD)
              </span>
              <div className="grid grid-cols-2 gap-4 pt-2">
                {trackRecordStats.map((stat) => (
                  <div key={stat.label} className="p-3 bg-white/5 rounded-xs border border-white/5">
                    <div className="font-display font-bold text-2xl text-white">
                      {stat.value}
                    </div>
                    <div className="text-[11px] font-mono text-[#E5E1D8]/70 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* CTA */}
        <div className="p-8 bg-[#E5E1D8]/60 border border-[#77766F]/20 rounded-xs text-center max-w-3xl mx-auto">
          <h3 className="font-serif text-2xl text-[#222522] mb-2">
            Ready to integrate our team into your detailing pipeline?
          </h3>
          <p className="text-xs sm:text-sm text-[#77766F] mb-6">
            We can set up a pilot project or review your upcoming project tender drawings today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#345B4B] hover:bg-[#274539] text-white font-mono text-xs uppercase tracking-wider rounded-xs transition-colors shadow-xs"
          >
            <span>Request Detailing Capacity Allocation</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
