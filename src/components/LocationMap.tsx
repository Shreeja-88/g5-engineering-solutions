import React, { useState, useEffect } from 'react';
import { MapPin, Navigation, Globe, Compass, ExternalLink, Clock, Phone, Building, ArrowUpRight, Copy, Check } from 'lucide-react';
import { companyProfile } from '../data/companyData';

export const LocationMap: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'mysore' | 'global' | 'embed'>('mysore');
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState<string>('');
  const [activeShift, setActiveShift] = useState<{ name: string; target: string }>({
    name: 'Shift 01 · Morning Detailing',
    target: 'North America Live Detailing & Submittals'
  });

  // Calculate current IST time (UTC+5:30) and determine active shift
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // IST time formatter
      const istString = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      });
      setCurrentTime(istString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const copyAddress = () => {
    const fullAddr = `${companyProfile.address.street}, ${companyProfile.address.area}, ${companyProfile.address.city} – ${companyProfile.address.pincode}, ${companyProfile.address.state}, India`;
    navigator.clipboard.writeText(fullAddr);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    '7680, 80ft Road, 2nd Phase, 4th Stage, Vijay Nagar, Mysore 570017'
  )}`;

  // Global clients connectivity nodes
  const globalNodes = [
    { name: 'El Paso, Texas', project: 'Civic Union Towers & Sports Canopy', tz: 'UTC-6 (MDT)', dist: '14,400 km' },
    { name: 'Boston, Massachusetts', project: 'Commonwealth Pier Phase 2', tz: 'UTC-4 (EDT)', dist: '13,200 km' },
    { name: 'Manassas, Virginia', project: 'School Facility Multi-Wing', tz: 'UTC-4 (EDT)', dist: '13,450 km' },
    { name: 'Delia, Alberta, Canada', project: 'Delia K-12 Replacement School', tz: 'UTC-6 (MDT)', dist: '13,100 km' },
    { name: 'Alexandria, Louisiana', project: 'Riverfront Amphitheater', tz: 'UTC-5 (CDT)', dist: '14,100 km' },
    { name: 'Middle East', project: 'Petrochemical Access Towers', tz: 'UTC+3 (AST)', dist: '3,200 km' }
  ];

  return (
    <section id="location-map" className="py-24 sm:py-32 bg-[#F5F3EE] border-t border-[#77766F]/15">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="font-mono text-xs text-[#345B4B] font-semibold tracking-widest uppercase">
                GEOGRAPHIC FOOTPRINT · MYSORE STUDIO
              </span>
              <span className="h-px w-12 bg-[#77766F]/30" />
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#222522]">
              Rooted in Mysore. <br />
              <span className="italic text-[#345B4B]">Connected worldwide.</span>
            </h2>
          </div>

          {/* Live Studio Clock & Active Shift Pill */}
          <div className="p-4 bg-white border border-[#77766F]/20 rounded-xs shadow-xs space-y-1.5 shrink-0">
            <div className="flex items-center justify-between gap-4 text-xs font-mono">
              <span className="text-[#77766F] flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-[#345B4B]" />
                MYSORE LOCAL TIME (IST)
              </span>
              <span className="text-[#222522] font-bold tabular-nums">
                {currentTime || '08:45:00 AM'}
              </span>
            </div>
            <div className="flex items-center gap-2 pt-1 border-t border-[#77766F]/15 text-[11px] font-mono text-[#345B4B] font-medium">
              <span className="w-2 h-2 rounded-full bg-[#8DC63F] animate-pulse" />
              <span>{activeShift.name}</span>
            </div>
          </div>
        </div>

        {/* Interactive Mode Tabs */}
        <div className="flex items-center gap-2 mb-6 border-b border-[#77766F]/15 pb-4">
          <button
            onClick={() => setActiveTab('mysore')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-wider transition-all rounded-xs ${
              activeTab === 'mysore'
                ? 'bg-[#222522] text-white shadow-xs'
                : 'bg-white text-[#77766F] hover:text-[#222522] border border-[#77766F]/20'
            }`}
          >
            <MapPin className="w-3.5 h-3.5" />
            <span>Mysore Studio & Map</span>
          </button>

          <button
            onClick={() => setActiveTab('global')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-wider transition-all rounded-xs ${
              activeTab === 'global'
                ? 'bg-[#345B4B] text-white shadow-xs'
                : 'bg-white text-[#77766F] hover:text-[#222522] border border-[#77766F]/20'
            }`}
          >
            <Globe className="w-3.5 h-3.5" />
            <span>Global Delivery Network</span>
          </button>

          <button
            onClick={() => setActiveTab('embed')}
            className={`flex items-center gap-2 px-4 py-2 text-xs font-mono tracking-wider transition-all rounded-xs ${
              activeTab === 'embed'
                ? 'bg-[#222522] text-white shadow-xs'
                : 'bg-white text-[#77766F] hover:text-[#222522] border border-[#77766F]/20'
            }`}
          >
            <Navigation className="w-3.5 h-3.5" />
            <span>Satellite / Google Maps</span>
          </button>
        </div>

        {/* Map Display Viewport */}
        <div className="relative rounded-xs overflow-hidden border border-[#77766F]/25 bg-white shadow-md">
          
          {/* TAB 1: Mysore Studio Architectural Plan */}
          {activeTab === 'mysore' && (
            <div className="relative w-full min-h-[460px] lg:min-h-[520px] bg-[#FAF9F6] p-8 flex flex-col justify-between overflow-hidden editorial-grid">
              
              {/* Radial Coordinate Circles */}
              <div className="absolute right-12 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-[#77766F]/10 pointer-events-none flex items-center justify-center">
                <div className="w-[360px] h-[360px] rounded-full border border-[#77766F]/15 flex items-center justify-center">
                  <div className="w-[180px] h-[180px] rounded-full border border-[#345B4B]/20 animate-ping opacity-20" />
                </div>
              </div>

              {/* Top HUD: Coordinates & Landmarks */}
              <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#77766F] bg-white/90 backdrop-blur-xs p-3.5 rounded-xs border border-[#77766F]/20">
                <div className="flex items-center gap-4">
                  <span className="text-[#345B4B] font-bold flex items-center gap-1.5">
                    <Compass className="w-4 h-4 text-[#345B4B]" />
                    COORD: 12°20'15"N · 76°35'41"E
                  </span>
                  <span className="hidden sm:inline">ELEVATION: 763m MSL</span>
                  <span className="hidden md:inline">REGION: KARNATAKA, SOUTH INDIA</span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={copyAddress}
                    className="flex items-center gap-1 hover:text-[#222522] transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied' : 'Copy Address'}</span>
                  </button>
                  <span>·</span>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#345B4B] font-semibold hover:underline"
                  >
                    <span>Google Maps</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Studio Details & Directly Displayed Small Map Grid */}
              <div className="relative z-10 my-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                
                {/* Left Column: Office Address & Arterial Transit Badges */}
                <div className="lg:col-span-6 p-6 sm:p-8 bg-white border border-[#77766F]/20 rounded-xs shadow-xs flex flex-col justify-between space-y-6">
                  
                  {/* Pin Header */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#8DC63F] border border-[#345B4B] animate-pulse" />
                        <span className="font-mono text-xs uppercase tracking-wider text-[#345B4B] font-bold">
                          G5 Registered Detailing Studio
                        </span>
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl text-[#222522]">
                        #7680, 80ft Road, Vijay Nagar 4th Stage
                      </h3>
                      <p className="text-xs sm:text-sm text-[#77766F]">
                        2nd Phase, Mysore – 570017, Karnataka, India
                      </p>
                    </div>

                    <div className="p-2.5 bg-[#F5F3EE] rounded-xs border border-[#77766F]/20 text-[#345B4B] shrink-0">
                      <Building className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Arterial Transport Connectivity Badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#77766F]/15 text-xs font-mono">
                    <div className="p-2.5 bg-[#FAF9F6] border border-[#77766F]/15 rounded-xs space-y-0.5">
                      <div className="text-[#345B4B] font-bold text-[11px]">OUTER RING ROAD</div>
                      <div className="text-[#222522] font-semibold">1.2 km (3 mins)</div>
                      <div className="text-[10px] text-[#77766F]">Express transit access</div>
                    </div>

                    <div className="p-2.5 bg-[#FAF9F6] border border-[#77766F]/15 rounded-xs space-y-0.5">
                      <div className="text-[#345B4B] font-bold text-[11px]">MYSORE JUNCTION</div>
                      <div className="text-[#222522] font-semibold">8.4 km (18 mins)</div>
                      <div className="text-[10px] text-[#77766F]">Intercity rail link</div>
                    </div>

                    <div className="p-2.5 bg-[#FAF9F6] border border-[#77766F]/15 rounded-xs space-y-0.5">
                      <div className="text-[#345B4B] font-bold text-[11px]">MYSORE AIRPORT</div>
                      <div className="text-[#222522] font-semibold">18.5 km (30 mins)</div>
                      <div className="text-[10px] text-[#77766F]">Regional flights (MYQ)</div>
                    </div>
                  </div>

                  {/* Infrastructure Status */}
                  <div className="pt-2 border-t border-[#77766F]/15 flex flex-wrap items-center justify-between gap-3 text-[11px] font-mono text-[#77766F]">
                    <span>100 Workstations · 3 Shifts · Dual UPS</span>
                    <span className="text-[#345B4B] font-semibold">100% Operational Continuity</span>
                  </div>

                </div>

                {/* Right Column: Directly Displayed Small Map */}
                <div className="lg:col-span-6 relative rounded-xs overflow-hidden border border-[#77766F]/20 bg-white shadow-xs flex flex-col min-h-[340px]">
                  {/* Small Map Header Strip */}
                  <div className="p-3 bg-white border-b border-[#77766F]/15 flex items-center justify-between text-xs font-mono">
                    <span className="text-[#345B4B] font-bold flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#345B4B]" />
                      STUDIO LOCATION MAP
                    </span>
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#77766F] hover:text-[#345B4B] flex items-center gap-1 transition-colors"
                    >
                      <span>Expand</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Interactive Embedded Small Map */}
                  <div className="relative flex-1 w-full min-h-[290px] bg-[#FAF9F6]">
                    <iframe
                      title="G5 Engineering Solutions Pvt. Ltd. Mysore Studio Map"
                      src="https://maps.google.com/maps?q=12.3375,76.5947&z=15&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="w-full h-full min-h-[290px]"
                    />
                    
                    {/* Small Map Watermark Badge */}
                    <div className="absolute bottom-2 left-2 bg-white/95 backdrop-blur-xs px-2.5 py-1 rounded-xs border border-[#77766F]/20 text-[10px] font-mono text-[#222522] pointer-events-none shadow-xs">
                      12°20'15"N · 76°35'41"E · Mysore HQ
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Footer Status */}
              <div className="relative z-10 flex items-center justify-between text-[11px] font-mono text-[#77766F] pt-2">
                <span>FACILITY POWER BACKUP: DIESEL GENERATOR + DUAL ONLINE UPS</span>
                <span className="text-[#345B4B] font-semibold">24×7 CONTINUOUS GLOBAL ENGAGEMENT</span>
              </div>
            </div>
          )}

          {/* TAB 2: Global Delivery Network */}
          {activeTab === 'global' && (
            <div className="relative w-full min-h-[460px] lg:min-h-[520px] bg-[#222522] text-[#F5F3EE] p-8 flex flex-col justify-between overflow-hidden">
              <div className="relative z-10 max-w-2xl mb-6">
                <span className="font-mono text-xs text-[#8DC63F] uppercase tracking-wider font-semibold block mb-1">
                  INTERNATIONAL CLIENT PIPELINE
                </span>
                <h3 className="font-serif text-3xl text-white">
                  Worldwide Structural Detailing Delivery
                </h3>
                <p className="text-sm text-[#E5E1D8]/80 mt-2 leading-relaxed">
                  Headquartered in Mysore, our 70+ engineers deliver fabrication drawings directly to steel fabricators and engineering firms across the United States, Canada, the United Kingdom, and the Middle East.
                </p>
              </div>

              {/* Global Hubs Grid */}
              <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                {globalNodes.map((node) => (
                  <div
                    key={node.name}
                    className="p-4 bg-white/5 border border-white/10 rounded-xs hover:border-[#8DC63F] transition-colors"
                  >
                    <div className="flex items-baseline justify-between mb-1">
                      <div className="font-display font-bold text-white text-sm">
                        {node.name}
                      </div>
                      <span className="font-mono text-[11px] text-[#8DC63F]">
                        {node.tz}
                      </span>
                    </div>
                    <div className="text-xs text-[#E5E1D8]/80 font-sans line-clamp-1">
                      {node.project}
                    </div>
                    <div className="mt-2 pt-2 border-t border-white/10 text-[10px] font-mono text-[#77766F] flex justify-between">
                      <span>MYSORE LINK</span>
                      <span>{node.dist}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Network Status */}
              <div className="relative z-10 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#77766F]">
                <span>CLOUD TEKLA MODEL SHARING ENABLED</span>
                <span className="text-[#8DC63F]">24×7 CONTINUOUS GLOBAL TIMEZONE OVERLAP</span>
              </div>
            </div>
          )}

          {/* TAB 3: Interactive Google Maps Embed */}
          {activeTab === 'embed' && (
            <div className="relative w-full h-[520px] bg-[#FAF9F6]">
              <iframe
                title="G5 Engineering Solutions Pvt. Ltd. Mysore Location"
                src="https://maps.google.com/maps?q=12.3375,76.5947&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs p-4 rounded-xs border border-[#77766F]/20 shadow-md max-w-sm hidden sm:block">
                <div className="text-xs font-mono text-[#345B4B] uppercase font-bold mb-1">
                  G5 ENGINEERING SOLUTIONS PVT. LTD.
                </div>
                <div className="text-xs text-[#222522]">
                  {companyProfile.address.street}, {companyProfile.address.area}, Mysore – 570017
                </div>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-mono text-[#345B4B] hover:underline font-semibold"
                >
                  <span>Open Full Screen in Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
