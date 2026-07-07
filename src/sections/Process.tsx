import { motion } from 'framer-motion';
import { Section } from '../layouts/Section';
import { SectionHeading } from '../components/SectionHeading';
import { PROCESS } from '../constants/data';
import { container, fadeUp, viewportOnce } from '../animations/variants';

export function Process() {
  return (
    <Section id="process" decorVariant="subtle">
      <SectionHeading
        label="How I work"
        title={
          <>
            A repeatable process,<br className="hidden sm:block" />{' '}
            <span className="text-gradient">from problem to production</span>
          </>
        }
        intro="Engineering is mostly discipline. These six stages keep my work predictable, observable, and recoverable."
      />

      <motion.div
        variants={container(0.1)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3"
      >
        {PROCESS.map((p, i) => (
          <motion.div
            key={p.step}
            variants={fadeUp}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.35 }}
            className="gradient-border group relative rounded-2xl bg-card p-6"
          >
            {/* connector dot to next (desktop) */}
            {i !== PROCESS.length - 1 && (
              <span className="absolute right-0 top-1/2 hidden h-px w-5 bg-border lg:block" aria-hidden />
            )}
            <div className="flex items-center justify-between">
              <span className="text-5xl font-extrabold leading-none text-bg [background:linear-gradient(135deg,#2563EB,#38BDF8)] [-webkit-background-clip:text] [background-clip:text] [-webkit-text-fill-color:transparent]">
                {p.step}
              </span>
              <span className="h-2.5 w-2.5 rounded-full bg-primary/30 transition-colors duration-300 group-hover:bg-primary" />
            </div>
            <h3 className="mt-5 text-lg font-bold text-secondary">{p.title}</h3>
            <p className="mt-2 max-w-prose text-sm leading-relaxed text-muted">{p.text}</p>

            {/* animated underline */}
            <span className="mt-5 block h-0.5 w-10 origin-left rounded-full bg-gradient-to-r from-primary to-accent transition-all duration-500 ease-smooth group-hover:w-full" />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
