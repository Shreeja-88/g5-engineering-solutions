import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projectsData } from '../data/projectsData';
import { ArrowLeft, ArrowUpRight, MapPin, Calendar, Weight, CheckCircle2, Shield, Layers, FileText } from 'lucide-react';

export const ProjectDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const project = projectsData.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="min-h-screen pt-36 pb-20 bg-[#F5F3EE] flex flex-col items-center justify-center px-6">
        <h1 className="font-serif text-3xl text-[#222522] mb-4">Project Not Found</h1>
        <p className="text-sm text-[#77766F] mb-6">The requested case study could not be located in the G5 project archive.</p>
        <Link
          to="/projects"
          className="px-6 py-3 bg-[#222522] text-white text-xs font-mono uppercase tracking-wider rounded-xs"
        >
          Return to Projects
        </Link>
      </div>
    );
  }

  // Related projects in same or complementary category
  const relatedProjects = projectsData
    .filter((p) => p.id !== project.id)
    .slice(0, 3);

  return (
    <article className="min-h-screen pt-24 pb-28 bg-[#F5F3EE] selection:bg-[#345B4B] selection:text-white">
      
      {/* Top Breadcrumb & Back Navigation */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-6">
        <div className="flex items-center justify-between text-xs font-mono text-[#77766F] border-b border-[#77766F]/15 pb-4">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 hover:text-[#222522] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>BACK TO PROJECT ARCHIVE</span>
          </Link>
          <div className="hidden sm:flex items-center gap-2 text-[11px]">
            <span>G5 CASE STUDY</span>
            <span>/</span>
            <span className="text-[#222522] font-semibold uppercase">{project.category}</span>
          </div>
        </div>
      </div>

      {/* Editorial Project Header & Title */}
      <header className="max-w-7xl mx-auto px-6 md:px-10 pt-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#345B4B] uppercase tracking-wider font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#345B4B]" />
              <span>{project.structureType}</span>
            </div>
            
            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#222522] leading-[1.1]">
              {project.title}
            </h1>

            {project.subtitle && (
              <p className="font-serif italic text-lg sm:text-xl text-[#77766F]">
                {project.subtitle}
              </p>
            )}
          </div>

          <div className="lg:col-span-4 lg:text-right space-y-2">
            <div className="text-xs font-mono text-[#77766F]">PROJECT LOCATION</div>
            <div className="font-display font-semibold text-base text-[#222522] flex items-center lg:justify-end gap-1.5">
              <MapPin className="w-4 h-4 text-[#345B4B]" />
              <span>{project.location}</span>
            </div>
            <div className="text-xs font-mono text-[#345B4B] font-medium">
              GOVERNING CODE: {project.codeStandard}
            </div>
          </div>

        </div>
      </header>

      {/* Full-Width Architectural Project Hero Image */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-16">
        <div className="relative rounded-xs overflow-hidden border border-[#77766F]/20 bg-white shadow-sm">
          <div className="min-h-[380px] max-h-[620px] w-full bg-[#1F2220] flex items-center justify-center p-4 sm:p-8">
            <img
              src={project.images.hero}
              alt={project.title}
              className="max-h-[540px] w-auto max-w-full object-contain"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="p-4 bg-white/95 border-t border-[#77766F]/15 flex flex-wrap items-center justify-between text-xs font-mono text-[#77766F]">
            <span>PRIMARY 3D STRUCTURAL MODEL DELIVERABLE</span>
            <span className="text-[#222522] font-semibold">{project.title}</span>
          </div>
        </div>
      </div>

      {/* Key Metrics Dashboard Strip */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-white border border-[#77766F]/20 rounded-xs shadow-xs">
          <div>
            <div className="text-xs font-mono text-[#77766F] uppercase">Steel Tonnage</div>
            <div className="font-display font-bold text-xl sm:text-2xl text-[#222522] mt-1">
              {project.tonnage || 'Custom Framing'}
            </div>
          </div>
          <div>
            <div className="text-xs font-mono text-[#77766F] uppercase">Detailing Schedule</div>
            <div className="font-display font-bold text-xl sm:text-2xl text-[#222522] mt-1">
              {project.schedule}
            </div>
          </div>
          <div>
            <div className="text-xs font-mono text-[#77766F] uppercase">Code Standard</div>
            <div className="font-display font-bold text-xl sm:text-2xl text-[#222522] mt-1">
              {project.codeStandard}
            </div>
          </div>
          <div>
            <div className="text-xs font-mono text-[#77766F] uppercase">Status</div>
            <div className="font-display font-bold text-xl sm:text-2xl text-[#345B4B] mt-1 flex items-center gap-1.5">
              <CheckCircle2 className="w-5 h-5 text-[#345B4B]" />
              <span>Delivered</span>
            </div>
          </div>
        </div>
      </div>

      {/* Project Overview & Detailing Analysis */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Scope & Narrative */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="font-serif text-2xl sm:text-3xl text-[#222522]">
                Project Overview
              </h2>
              <p className="font-sans text-base text-[#222522]/90 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Critical Technical Challenge */}
            <div className="p-6 bg-white border-l-4 border-[#345B4B] border-y border-r border-[#77766F]/20 rounded-xs space-y-2 shadow-xs">
              <span className="font-mono text-xs uppercase tracking-wider text-[#345B4B] font-bold block">
                The Detailing Challenge
              </span>
              <p className="font-sans text-sm sm:text-base text-[#222522] leading-relaxed">
                {project.criticalChallenge}
              </p>
            </div>

            {/* G5's Detailing Approach */}
            <div className="space-y-4">
              <h3 className="font-serif text-2xl text-[#222522]">
                G5's Detailing Approach
              </h3>
              <ol className="space-y-3">
                {project.detailingApproach.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-[#222522]/85 leading-relaxed bg-white p-4 rounded-xs border border-[#77766F]/15">
                    <span className="font-mono text-xs text-[#345B4B] font-bold shrink-0 mt-0.5">
                      0{idx + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Scope of Work */}
            <div className="space-y-3">
              <h3 className="font-serif text-xl text-[#222522]">
                Detailed Scope of Work
              </h3>
              <p className="text-sm text-[#77766F] leading-relaxed">
                {project.scope}
              </p>
            </div>

          </div>

          {/* Right Column: Key Deliverables & Model Details */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Deliverables Card */}
            {project.keyDeliverables && (
              <div className="p-8 bg-white border border-[#77766F]/20 rounded-xs shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#222522] font-semibold pb-3 border-b border-[#77766F]/15">
                  <FileText className="w-4 h-4 text-[#345B4B]" />
                  <span>Key Deliverables</span>
                </div>
                <ul className="space-y-2.5">
                  {project.keyDeliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs text-[#222522]">
                      <CheckCircle2 className="w-4 h-4 text-[#345B4B] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Additional Project Metrics */}
            {project.metrics && (
              <div className="p-8 bg-[#222522] text-[#F5F3EE] rounded-xs shadow-xs space-y-4">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#8DC63F] font-semibold pb-3 border-b border-white/10">
                  <Layers className="w-4 h-4" />
                  <span>Verified Project Statistics</span>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="p-3 bg-white/5 rounded-xs border border-white/5">
                      <div className="font-display font-bold text-xl text-white">
                        {m.value}
                      </div>
                      <div className="text-[11px] font-mono text-[#E5E1D8]/70 mt-1">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA Box */}
            <div className="p-8 bg-[#E5E1D8]/60 border border-[#77766F]/20 rounded-xs space-y-4">
              <h4 className="font-serif text-xl text-[#222522]">
                Need similar detailing for your project?
              </h4>
              <p className="text-xs text-[#77766F] leading-relaxed">
                Our team can review your engineering drawings and produce a competitive timeline and MTO report.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#345B4B] hover:bg-[#274539] text-white text-xs font-mono uppercase tracking-wider rounded-xs transition-colors"
              >
                <span>Request Project Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>
      </div>

      {/* 3D Model Multi-View & Detailing Sheets Gallery */}
      {(project.images.cadModel || (project.images.details && project.images.details.length > 0)) && (
        <section className="max-w-7xl mx-auto px-6 md:px-10 mb-20">
          <div className="mb-6">
            <span className="font-mono text-xs text-[#345B4B] uppercase tracking-wider font-semibold block mb-1">
              TEKLA 3D CAD & DETAILING VIEWS
            </span>
            <h3 className="font-serif text-2xl text-[#222522]">
              Coordinated Structural Views & Connections
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.images.cadModel && (
              <div className="bg-white border border-[#77766F]/20 rounded-xs overflow-hidden shadow-xs flex flex-col justify-between">
                <div className="bg-[#222522] min-h-[260px] flex items-center justify-center p-4">
                  <img
                    src={project.images.cadModel}
                    alt={`${project.title} Structural CAD model`}
                    className="max-h-[240px] w-auto max-w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-3 bg-white border-t border-[#77766F]/15 text-xs font-mono text-[#77766F]">
                  PRIMARY STRUCTURAL FRAMING MODEL
                </div>
              </div>
            )}

            {project.images.details?.map((detailImg, i) => (
              <div key={i} className="bg-white border border-[#77766F]/20 rounded-xs overflow-hidden shadow-xs flex flex-col justify-between">
                <div className="bg-[#222522] min-h-[260px] flex items-center justify-center p-4">
                  <img
                    src={detailImg}
                    alt={`${project.title} detailing view ${i + 1}`}
                    className="max-h-[240px] w-auto max-w-full object-contain"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="p-3 bg-white border-t border-[#77766F]/15 text-xs font-mono text-[#77766F]">
                  CONNECTION & INTERFACE DETAIL 0{i + 1}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Related Projects Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-10 pt-16 border-t border-[#77766F]/20">
        <div className="flex items-center justify-between mb-8">
          <h3 className="font-serif text-2xl text-[#222522]">
            Related Structural Case Studies
          </h3>
          <Link
            to="/projects"
            className="text-xs font-mono uppercase tracking-wider text-[#345B4B] hover:text-[#222522]"
          >
            All Projects ↗
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedProjects.map((p) => (
            <Link
              key={p.id}
              to={`/projects/${p.slug}`}
              className="group bg-white border border-[#77766F]/20 rounded-xs overflow-hidden hover:border-[#345B4B] transition-all shadow-xs"
            >
              <div className="aspect-16/10 w-full overflow-hidden bg-[#222522]">
                <img
                  src={p.images.hero}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-4 space-y-1.5">
                <div className="text-[10px] font-mono uppercase text-[#77766F]">
                  {p.category} · {p.structureType}
                </div>
                <h4 className="font-serif text-lg text-[#222522] group-hover:text-[#345B4B] transition-colors">
                  {p.title}
                </h4>
                <div className="text-xs font-mono text-[#345B4B] pt-1">
                  {p.tonnage ? `${p.tonnage} · ` : ''}{p.schedule}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </article>
  );
};
