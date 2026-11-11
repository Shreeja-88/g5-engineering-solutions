import React, { useLayoutEffect, useRef } from 'react';
import { ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import gsap from 'gsap';
import contactImage from '../assets/images/g5_steel_detail_cta_1794194536756.webp';
import { companyProfile } from '../data/companyData';
import { registerScrollTrigger } from '../animations/registerGSAP';

interface ContactSectionProps {
  isPage?: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ isPage = false }) => {
  const sectionRef = useRef<HTMLElement>(null);
  const Heading = isPage ? 'h1' : 'h2';

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    registerScrollTrigger();

    const context = gsap.context(() => {
      gsap.fromTo(
        '.contact-title-line',
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: section, start: 'top 72%', once: true }
        }
      );

      gsap.fromTo(
        '.contact-reveal',
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: section, start: 'top 68%', once: true }
        }
      );
    }, section);

    return () => context.revert();
  }, []);

  const emailSubject = encodeURIComponent('Project enquiry | G5 Engineering Solutions Pvt. Ltd.');
  const emailBody = encodeURIComponent(
    'Hello G5 Engineering Solutions Pvt. Ltd. team,\n\nI would like to discuss a project with your team.\n\nProject overview:\n\nRegards,\n'
  );
  const emailHref = `mailto:varun@g5engineering.com?subject=${emailSubject}&body=${emailBody}`;
  const address = `${companyProfile.address.street}, ${companyProfile.address.area}, ${companyProfile.address.city} ${companyProfile.address.pincode}, ${companyProfile.address.state}, ${companyProfile.address.country}`;

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`relative isolate overflow-hidden bg-[#202320] text-[#F5F3EE] ${
        isPage ? 'min-h-[calc(100vh-5rem)] pt-32 pb-20 sm:pt-36 sm:pb-24' : 'py-24 sm:py-32'
      }`}
    >
      <img
        src={contactImage}
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-[0.12] mix-blend-luminosity"
      />
      <div className="editorial-grid-dark absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#202320]/95 via-[#202320]/90 to-[#202320]/80" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 flex flex-wrap items-center justify-between gap-4 border-b border-white/15 pb-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#A9D84A]" />
            <span className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-[#A9D84A]">
              G5 Engineering Solutions Pvt. Ltd. · Mysore, India
            </span>
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/60">
            Structural steel · Detailing · BIM
          </span>
        </div>

        <div className="grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-8">
          <div className="lg:col-span-8">
            <Heading
              aria-label="Have a Project in Mind?"
              className="font-display text-[clamp(2.5rem,10vw,7.5rem)] font-medium leading-[0.92] tracking-[-0.065em] text-white"
            >
              <span className="block overflow-hidden pb-2">
                <span aria-hidden="true" className="contact-title-line block">Have a Project</span>
              </span>
              <span className="block overflow-hidden pb-3">
                <span aria-hidden="true" className="contact-title-line block text-[#A9D84A]">in Mind?</span>
              </span>
            </Heading>
          </div>
          <div className="contact-reveal relative hidden min-h-44 border-l border-white/20 pl-6 lg:col-span-4 lg:block">
            <span className="absolute -left-[3px] top-0 h-1.5 w-1.5 bg-[#A9D84A]" aria-hidden="true" />
            <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-white/60">
              ENGINEERING OFFICE
            </span>
            <p className="mt-8 font-display text-4xl font-light tracking-tight text-white/90">Mysore</p>
            <p className="mt-1 font-display text-2xl font-light tracking-tight text-white/55">Karnataka · India</p>
            <span className="absolute bottom-0 right-0 font-mono text-[10px] uppercase tracking-widest text-white/50">
              G5 ENGINEERING SOLUTIONS PVT. LTD.
            </span>
          </div>
        </div>

        <div className="mt-8 grid gap-8 border-b border-white/15 pb-12 md:grid-cols-12 md:items-end">
            <p className="contact-reveal max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg md:col-span-8">
              From structural steel detailing and connection design to material take-offs and BIM coordination, our team works as an extension of yours—bringing clarity to complex builds.
            </p>
            <div className="contact-reveal md:col-span-4 md:flex md:justify-end">
              <a
                href={emailHref}
                className="group inline-flex min-h-14 w-full items-center justify-between gap-5 bg-[#A9D84A] px-5 py-4 font-mono text-[11px] font-bold uppercase tracking-[0.13em] text-[#202320] transition-colors duration-300 hover:bg-[#C2EC69] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A9D84A] sm:w-auto"
              >
                <span>Start a Conversation</span>
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </div>
          </div>

          <div className="grid gap-8 pt-8 sm:grid-cols-2 lg:grid-cols-12 lg:gap-10">
            <div className="contact-reveal lg:col-span-4">
              <div className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/60">
                <Mail className="h-3.5 w-3.5 text-[#A9D84A]" aria-hidden="true" />
                Email
              </div>
              <a
                href={`mailto:${companyProfile.contact.email}`}
                className="break-all text-sm text-white transition-colors hover:text-[#A9D84A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A9D84A] sm:text-base"
              >
                {companyProfile.contact.email}
              </a>
            </div>

            <div className="contact-reveal lg:col-span-4">
              <div className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/60">
                <Phone className="h-3.5 w-3.5 text-[#A9D84A]" aria-hidden="true" />
                Telephone
              </div>
              <div className="flex flex-col items-start gap-2">
                <a
                  href={`tel:${companyProfile.contact.globalPhone.replace(/[^\d+]/g, '')}`}
                  className="text-sm text-white transition-colors hover:text-[#A9D84A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A9D84A] sm:text-base"
                >
                  {companyProfile.contact.globalPhone}
                  <span className="ml-2 font-mono text-[10px] uppercase tracking-wider text-white/60">Global</span>
                </a>
                <a
                  href={`tel:${companyProfile.contact.indiaPhone.replace(/[^\d+]/g, '')}`}
                  className="text-sm text-white/75 transition-colors hover:text-[#A9D84A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A9D84A] sm:text-base"
                >
                  {companyProfile.contact.indiaPhone}
                  <span className="ml-2 font-mono text-[10px] uppercase tracking-wider text-white/60">India</span>
                </a>
              </div>
            </div>

            <div className="contact-reveal lg:col-span-4">
              <div className="mb-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-white/60">
                <MapPin className="h-3.5 w-3.5 text-[#A9D84A]" aria-hidden="true" />
                Registered Office
              </div>
              <address className="max-w-sm text-sm not-italic leading-relaxed text-white/75">
                {address}
              </address>
            </div>
          </div>
        </div>
      </section>
  );
};
