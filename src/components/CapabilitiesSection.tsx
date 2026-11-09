import React from 'react';
import { operationalCapacity } from '../data/companyData';
import { Server, Users, Clock, ShieldCheck, Cpu, HardDrive } from 'lucide-react';

export const CapabilitiesSection: React.FC = () => {
  return (
    <section id="capabilities" className="py-24 sm:py-32 bg-[#F5F3EE] border-t border-[#77766F]/15">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#345B4B] font-semibold tracking-widest uppercase">
                CAPACITY & INFRASTRUCTURE
              </span>
              <span className="h-px w-12 bg-[#77766F]/30" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#222522]">
              Built to handle complexity. <br />
              <span className="italic text-[#345B4B]">Equipped to deliver.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-[#77766F] leading-relaxed">
            Enterprise-grade engineering infrastructure designed to seamlessly absorb volume fluctuations and fast-track fabrication schedules.
          </p>
        </div>

        {/* Dashboard 6-Metric Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {operationalCapacity.map((metric) => (
            <div
              key={metric.label}
              className="p-6 bg-white border border-[#77766F]/20 rounded-xs shadow-xs hover:border-[#345B4B] transition-colors"
            >
              <div className="font-display font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#222522] tabular-nums tracking-tight">
                {metric.value}
              </div>
              <div className="mt-2 text-xs font-mono uppercase tracking-wider text-[#222522] font-semibold">
                {metric.label}
              </div>
              <p className="mt-1 text-[11px] text-[#77766F] leading-snug">
                {metric.sublabel}
              </p>
            </div>
          ))}
        </div>

        {/* Two-Column Infrastructure & What You Achieve Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Infrastructure & Support */}
          <div className="lg:col-span-6 p-8 bg-white border border-[#77766F]/20 rounded-xs flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-wider text-[#345B4B] font-semibold">
                <Server className="w-4 h-4" />
                <span>Infrastructure & Facility Setup</span>
              </div>
              <h3 className="font-serif text-2xl text-[#222522] mb-6">
                Purpose-built engineering studio in Mysore, India.
              </h3>
              <ul className="space-y-4 text-sm text-[#77766F]">
                <li className="flex items-start gap-3">
                  <Cpu className="w-4 h-4 text-[#345B4B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#222522] font-medium block">100 High-Performance Workstations:</strong>
                    Configured specifically for complex 3D modeling and rendering of 50,000+ member assemblies.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <HardDrive className="w-4 h-4 text-[#345B4B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#222522] font-medium block">Enterprise Connectivity & LAN:</strong>
                    Redundant fiber-optic gigabit uplinks, secure local file servers, and cloud backup.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#345B4B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#222522] font-medium block">Three Rotational Shifts (24×7):</strong>
                    Continuous day-and-night production cycles aligned with US, Canadian, UK, and Australian business hours.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Users className="w-4 h-4 text-[#345B4B] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#222522] font-medium block">Dedicated Account Teams:</strong>
                    Fixed project leads and modelers assigned to each fabricator to maintain style and connection continuity.
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-[#77766F]/15 flex items-center justify-between text-xs font-mono text-[#77766F]">
              <span>TEKLA MODEL SHARING ENABLED</span>
              <span className="text-[#345B4B] font-semibold">LIVE MULTI-USER CLOUD</span>
            </div>
          </div>

          {/* Right: What You Achieve with G5 */}
          <div className="lg:col-span-6 p-8 bg-[#222522] text-[#F5F3EE] rounded-xs flex flex-col justify-between shadow-xs">
            <div>
              <div className="flex items-center gap-2 mb-4 text-xs font-mono uppercase tracking-wider text-[#8DC63F] font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>Value Delivered to Fabricators & EPCs</span>
              </div>
              <h3 className="font-serif text-2xl text-white mb-6">
                Strengthening your detailing capacity without overhead.
              </h3>
              <ul className="space-y-4 text-sm text-[#E5E1D8]/80">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8DC63F] mt-2 shrink-0" />
                  <div>
                    <strong className="text-white block">Sharper Bids & Estimations:</strong>
                    Rapid, precise Material Take-Off (MTO) models allow you to quote jobs aggressively and win profitable contracts.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8DC63F] mt-2 shrink-0" />
                  <div>
                    <strong className="text-white block">Zero Shop-Floor Fit-Up Rework:</strong>
                    Exhaustive multi-tier QC and 3D clash resolution mean parts fit the first time in fabrication and erection.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8DC63F] mt-2 shrink-0" />
                  <div>
                    <strong className="text-white block">Rapid Schedule Compression:</strong>
                    Overnight turnaround on RFIs and submittals leverages the time-zone advantage to keep field erectors on schedule.
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#8DC63F] mt-2 shrink-0" />
                  <div>
                    <strong className="text-white block">Seamless Model Synchronization:</strong>
                    Direct collaboration inside your Tekla Model Sharing environment, acting as an integrated remote branch.
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-[#E5E1D8]/60">
              <span>90% VERIFIED ON-TIME DELIVERY</span>
              <span className="text-[#8DC63F]">40+ GLOBAL CLIENTS</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
