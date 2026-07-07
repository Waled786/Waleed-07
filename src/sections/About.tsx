import { motion } from 'framer-motion';
import { Compass, Gauge, Layers } from 'lucide-react';
import { Section } from '../layouts/Section';
import { SectionHeading } from '../components/SectionHeading';
import { Reveal } from '../components/Reveal';
import { ABOUT_JOURNEY, ABOUT_VALUES, PROFILE } from '../constants/data';
import { container, fadeUp, slideLeft, slideRight, viewportOnce } from '../animations/variants';

const valueIcons = [Compass, Gauge, Layers];

export function About() {
  return (
    <Section id="about" decorVariant="subtle">
      <SectionHeading
        label="About"
        title={
          <>
            Engineering with intent,<br className="hidden sm:block" />{' '}
            <span className="text-gradient">one deliberate decision at a time</span>
          </>
        }
        intro={PROFILE.tagline}
      />

      <div className="mt-14 grid gap-12 lg:mt-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Image with animated border */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="relative lg:sticky lg:top-28 lg:self-start"
        >
          <div className="group relative overflow-hidden rounded-card">
            {/* Rotating gradient border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, ease: 'linear', repeat: Infinity }}
              className="absolute -inset-1 rounded-card bg-[conic-gradient(from_0deg,rgba(37,99,235,0.55),rgba(56,189,248,0.4),transparent_60%,rgba(37,99,235,0.55))] opacity-70"
            />
            <div className="relative overflow-hidden rounded-[26px] bg-card">
              <img
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Aarav Mehta working on engineering problems"
                className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary/35 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-card/85 px-4 py-3 backdrop-blur">
                <p className="text-sm font-bold text-secondary">{PROFILE.name}</p>
                <p className="text-xs text-muted">{PROFILE.title} · {PROFILE.location}</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right column: values + timeline */}
        <div>
          {/* Values */}
          <motion.div
            variants={container(0.14)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="grid gap-4 sm:grid-cols-3"
          >
            {ABOUT_VALUES.map((v, i) => {
              const Icon = valueIcons[i];
              return (
                <motion.div
                  key={v.title}
                  variants={fadeUp}
                  className="gradient-border rounded-2xl bg-card p-5"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-hover text-primary">
                    <Icon size={20} />
                  </span>
                  <h3 className="mt-4 text-sm font-bold text-secondary">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{v.text}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Timeline */}
          <div className="mt-12">
            <motion.h3
              variants={slideRight}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="text-lg font-bold text-secondary"
            >
              The journey so far
            </motion.h3>

            <motion.ol
              variants={container(0.12, 0.05)}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              className="mt-7 space-y-0"
            >
              {ABOUT_JOURNEY.map((item, i) => (
                <motion.li
                  key={item.year}
                  variants={fadeUp}
                  className="relative grid grid-cols-[5.5rem_1fr] gap-5 pb-8 last:pb-0 sm:grid-cols-[7rem_1fr]"
                >
                  {/* line */}
                  {i !== ABOUT_JOURNEY.length - 1 && (
                    <span className="absolute left-[2.05rem] top-9 bottom-0 w-px bg-border sm:left-[2.55rem]" />
                  )}
                  {/* node */}
                  <div className="flex flex-col items-center">
                    <motion.span
                      whileHover={{ scale: 1.15 }}
                      className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-[0.7rem] font-bold text-primary shadow-soft"
                    >
                      {item.year === 'Now' ? '∞' : item.year.slice(2)}
                    </motion.span>
                    <span className="mt-2 text-xs font-semibold text-muted">{item.year}</span>
                  </div>
                  <div className="pt-1">
                    <h4 className="text-base font-bold text-secondary">{item.title}</h4>
                    <Reveal>
                      <p className="mt-1.5 max-w-prose text-sm leading-relaxed text-muted">
                        {item.text}
                      </p>
                    </Reveal>
                  </div>
                </motion.li>
              ))}
            </motion.ol>
          </div>
        </div>
      </div>
    </Section>
  );
}
