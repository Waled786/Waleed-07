import { motion } from 'framer-motion';
import { Section } from '../layouts/Section';
import { Counter } from '../components/Counter';
import { ACHIEVEMENTS } from '../constants/data';
import { container, fadeUp, viewportOnce } from '../animations/variants';

export function Achievements() {
  return (
    <Section id="achievements" decor={false}>
      <div className="relative overflow-hidden rounded-card border border-border bg-gradient-to-br from-secondary to-[#15264a] px-6 py-14 text-white shadow-lift md:px-14 md:py-20">
        {/* decorative glows */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

        <div className="relative">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="max-w-prose"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              By the numbers
            </span>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Quiet, compounding results
            </h2>
          </motion.div>

          <motion.div
            variants={container(0.12, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-12 grid grid-cols-2 gap-8 lg:grid-cols-4"
          >
            {ACHIEVEMENTS.map((a) => (
              <motion.div
                key={a.label}
                variants={fadeUp}
                className="text-center sm:text-left"
              >
                <p className="text-4xl font-extrabold tracking-tight sm:text-5xl">
                  <Counter value={a.value} suffix={a.suffix} />
                </p>
                <p className="mt-2 text-sm text-slate-300">{a.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
