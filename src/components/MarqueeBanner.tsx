import React from 'react';

export const MarqueeBanner: React.FC = () => {
  const items = [
    'AISC 360 STRUCTURAL DETAILING',
    '18 LICENSED TEKLA WORKSTATIONS',
    'CISC CANADIAN STEEL STANDARDS',
    'AWS D1.1 STRUCTURAL WELDING CODE',
    '24×7 THREE ROTATIONAL SHIFTS',
    '30,000+ TONS EXECUTED',
    'TEKLA MODEL SHARING LIVE CLOUD',
    'DEFECT-FREE FABRICATION DRAWINGS',
    'IS 800 INDIAN STANDARDS',
    'BS 5950 & EUROCODES',
    '10,000+ DETAILING HOURS / MONTH',
    'OSHA COMPLIANT WALKWAYS & RAILS',
  ];

  return (
    <div className="relative w-full overflow-hidden bg-[#222522] text-[#F5F3EE] py-3.5 border-y border-white/10 select-none">
      <div className="flex w-max animate-marquee">
        {/* Track 1 */}
        <div className="flex items-center gap-8 shrink-0 pr-8">
          {items.map((item, idx) => (
            <span key={idx} className="flex items-center gap-4 text-xs font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8DC63F]" />
              <span className="text-white/90 font-medium">{item}</span>
            </span>
          ))}
        </div>

        {/* Track 2 (duplicate for seamless loop) */}
        <div className="flex items-center gap-8 shrink-0 pr-8" aria-hidden="true">
          {items.map((item, idx) => (
            <span key={`dup-${idx}`} className="flex items-center gap-4 text-xs font-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#8DC63F]" />
              <span className="text-white/90 font-medium">{item}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
