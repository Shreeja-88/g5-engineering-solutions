import React, { useState, useEffect, useLayoutEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { G5Logo } from './G5Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { SplitText } from '../animations/SplitText';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navRootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useLayoutEffect(() => {
    const root = navRootRef.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        '[data-nav-char]',
        { autoAlpha: 0, yPercent: 70, filter: 'blur(3px)' },
        { autoAlpha: 1, yPercent: 0, filter: 'blur(0px)', duration: 0.35, stagger: 0.012, ease: 'power2.out' }
      );

      const activeIndicator = root.querySelector('[data-nav-indicator]');
      if (activeIndicator) {
        gsap.fromTo(
          activeIndicator,
          { scaleX: 0, transformOrigin: 'left center' },
          { scaleX: 1, duration: 0.35, delay: 0.2, ease: 'power3.out' }
        );
      }

      if (mobileMenuOpen) {
        gsap.fromTo(
          '.mobile-nav-link',
          { autoAlpha: 0, y: 16 },
          { autoAlpha: 1, y: 0, duration: 0.45, stagger: 0.055, ease: 'power3.out' }
        );
      }
    }, root);

    return () => context.revert();
  }, [location.pathname, mobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Projects', path: '/projects' },
    { label: 'Capabilities', path: '/capabilities' },
    { label: 'Contact', path: '/contact' },
  ];

  const isCurrent = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div ref={navRootRef} className="contents">
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled || location.pathname !== '/'
            ? 'bg-[#F5F3EE]/95 backdrop-blur-md border-b border-[#77766F]/15 py-3.5 shadow-xs'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between gap-8">
          {/* Zone 1: G5 Engineering Logo */}
          <Link
            to="/"
            className="group flex items-center gap-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#345B4B]"
          >
            <G5Logo size="sm" showMotto={false} />
          </Link>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = isCurrent(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  data-nav-item
                  className={`group relative text-sm tracking-wide transition-colors whitespace-nowrap font-medium py-1 ${
                    active
                      ? 'text-[#222522] font-semibold'
                      : 'text-[#222522]/75 hover:text-[#222522]'
                  }`}
                >
                  <span aria-label={link.label} data-nav-label className="inline-block transition-transform duration-200 group-hover:-translate-y-px">
                    <SplitText text={link.label} mode="characters" />
                  </span>
                  {active && (
                    <span data-nav-indicator className="absolute bottom-0 left-0 right-0 h-0.5 origin-left bg-[#345B4B]" />
                  )}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#345B4B] transition-all duration-200 group-hover:w-full" />
                </Link>
              );
            })}
          </nav>

          {/* Zone 3: Primary Action CTA */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono tracking-wider uppercase text-white bg-[#222522] hover:bg-[#345B4B] transition-all duration-200 rounded-xs shadow-xs focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#345B4B]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#222522] hover:text-[#345B4B] transition-colors focus-visible:outline-hidden"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Full-Screen Minimal Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#F5F3EE] flex flex-col justify-between p-8 pt-28 lg:hidden animate-in fade-in duration-200">
          <div className="space-y-6">
            <span className="tech-label text-xs">NAVIGATION</span>
            <nav id="mobile-navigation" className="flex flex-col space-y-4" aria-label="Mobile navigation">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="mobile-nav-link flex items-center justify-between text-2xl font-serif text-[#222522] hover:text-[#345B4B] transition-colors border-b border-[#77766F]/15 pb-3"
                >
                  <span className="flex items-center gap-3">
                    <span className="font-mono text-xs text-[#77766F]">0{idx + 1}</span>
                    <span>{link.label}</span>
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-[#77766F]" />
                </Link>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t border-[#77766F]/20 flex flex-col gap-4">
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-[#345B4B] text-white font-mono text-xs uppercase tracking-wider rounded-xs"
            >
              <span>Initiate Project Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <div className="text-xs font-mono text-[#77766F] text-center">
              Mysore, India · +91 89702 00082 · Global +1 213 402 0495
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
