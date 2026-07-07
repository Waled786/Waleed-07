import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Section } from '../layouts/Section';
import { SectionHeading } from '../components/SectionHeading';
import { TESTIMONIALS } from '../constants/data';
import { EASE_SMOOTH } from '../animations/variants';

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const count = TESTIMONIALS.length;

  const go = useCallback((dir: number) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + count) % count);
  }, [count]);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => go(1), 5000);
    return () => clearInterval(id);
  }, [paused, go]);

  const t = TESTIMONIALS[index];

  return (
    <Section id="testimonials" decorVariant="subtle">
      <SectionHeading
        label="Testimonials"
        title={
          <>
            What collaborators <span className="text-gradient">actually say</span>
          </>
        }
        intro="Words from leaders I&rsquo;ve shipped alongside. The carousel advances on its own — hover to pause, or use the controls."
      />

      <div
        className="mt-14 lg:mt-20"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative">
          {/* Floating glass cards behind the active one (depth) */}
          <div className="pointer-events-none absolute inset-x-6 -top-4 bottom-0 hidden rounded-card border border-border/70 bg-card/40 backdrop-blur-sm sm:block" />
          <div className="pointer-events-none absolute inset-x-12 -top-8 bottom-4 hidden rounded-card border border-border/50 bg-card/30 backdrop-blur-sm md:block" />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.blockquote
              key={index}
              custom={direction}
              initial={{ opacity: 0, x: direction * 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -40 }}
              transition={{ duration: 0.45, ease: EASE_SMOOTH }}
              className="glass relative z-10 rounded-card p-8 shadow-lift md:p-12"
            >
              <Quote className="h-9 w-9 text-primary/30" />
              <p className="mt-5 text-xl font-medium leading-relaxed text-secondary sm:text-2xl">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-primary to-accent text-sm font-bold text-white">
                  {t.initials}
                </span>
                <div>
                  <p className="font-bold text-secondary">{t.name}</p>
                  <p className="text-sm text-muted">{t.role}</p>
                </div>
              </div>
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? 'w-8 bg-primary' : 'w-2 bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-secondary transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card text-secondary transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
}
