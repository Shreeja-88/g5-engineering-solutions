import { lazy, Suspense, useEffect, useRef, type RefObject } from 'react';
import { BrowserRouter, Routes, Route, useLocation, Link } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { useSiteTextAnimations } from './animations/useSiteTextAnimations';

const HomePage = lazy(() => import('./pages/HomePage').then(({ HomePage }) => ({ default: HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(({ AboutPage }) => ({ default: AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(({ ServicesPage }) => ({ default: ServicesPage })));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage').then(({ ProjectsPage }) => ({ default: ProjectsPage })));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage').then(({ ProjectDetailPage }) => ({ default: ProjectDetailPage })));
const CapabilitiesPage = lazy(() => import('./pages/CapabilitiesPage').then(({ CapabilitiesPage }) => ({ default: CapabilitiesPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(({ ContactPage }) => ({ default: ContactPage })));

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SiteLayout />
    </BrowserRouter>
  );
}

function SiteLayout() {
  const siteRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={siteRef} className="min-h-screen flex flex-col bg-[#F5F3EE] text-[#222522] font-sans antialiased">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<div className="min-h-[60vh]" role="status" aria-live="polite">Loading page…</div>}>
          <SiteTextAnimationMount rootRef={siteRef} />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
            <Route path="/capabilities" element={<CapabilitiesPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route
              path="*"
              element={
                <section className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
                  <span className="tech-label">404 · PAGE NOT FOUND</span>
                  <h1 className="mt-4 font-serif text-4xl text-[#222522]">This page is off the drawing board.</h1>
                  <Link to="/" className="mt-6 font-mono text-xs uppercase tracking-wider text-[#345B4B] underline underline-offset-4">
                    Return to the homepage
                  </Link>
                </section>
              }
            />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

function SiteTextAnimationMount({ rootRef }: { rootRef: RefObject<HTMLDivElement | null> }) {
  const { pathname } = useLocation();
  useSiteTextAnimations(rootRef, pathname);
  return null;
}
