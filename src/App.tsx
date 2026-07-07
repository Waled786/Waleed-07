import { Suspense, lazy } from 'react';
import { SmoothScroll } from './components/SmoothScroll';
import { Navbar } from './layouts/Navbar';
import { Footer } from './layouts/Footer';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Skills } from './sections/Skills';

// Code-split the heavier below-the-fold sections for a faster first paint.
const Experience = lazy(() => import('./sections/Experience').then((m) => ({ default: m.Experience })));
const Projects = lazy(() => import('./sections/Projects').then((m) => ({ default: m.Projects })));
const Process = lazy(() => import('./sections/Process').then((m) => ({ default: m.Process })));
const Achievements = lazy(() => import('./sections/Achievements').then((m) => ({ default: m.Achievements })));
const Testimonials = lazy(() => import('./sections/Testimonials').then((m) => ({ default: m.Testimonials })));
const Contact = lazy(() => import('./sections/Contact').then((m) => ({ default: m.Contact })));

export default function App() {
  return (
    <>
      <SmoothScroll />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Suspense fallback={<SectionSkeleton />}>
          <Experience />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Process />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Achievements />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

function SectionSkeleton() {
  return (
    <div className="px-edge-sm py-section-sm md:px-edge lg:py-section" aria-hidden>
      <div className="mx-auto h-[60vh] w-full max-w-shell animate-pulse rounded-card bg-border/40" />
    </div>
  );
}
