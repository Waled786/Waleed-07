import { motion } from 'framer-motion';
import { Briefcase, MapPin } from 'lucide-react';
import { Section } from '../layouts/Section';
import { SectionHeading } from '../components/SectionHeading';
import { EXPERIENCE } from '../constants/data';
import { container, fadeUp, viewportOnce } from '../animations/variants';

export function Experience() {
  return (
    <Section id="experience" decorVariant="subtle">
      <SectionHeading
        label="Experience"
        title={
          <>
            Roles where I owned the <span className="text-gradient">hard problems</span>
          </>
        }
        intro="A vertical walk through the teams I&rsquo;ve built with and the outcomes that mattered."
      />

      <motion.div
        variants={container(0.16)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 lg:mt-20"
      >
        {/* spine */}
        <div className="relative">
          <span className="absolute left-[1.15rem] top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-border to-transparent md:left-1/2 md:-translate-x-1/2" />

          <div className="space-y-10 md:space-y-16">
            {EXPERIENCE.map((job, i) => {
              const right = i % 2 === 1;
              return (
                <motion.div
                  key={job.company}
                  variants={fadeUp}
                  className={`relative grid grid-cols-[2.4rem_1fr] gap-4 md:grid-cols-2 md:gap-0 ${
                    right ? 'md:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  {/* Node */}
                  <div className="md:hidden">
                    <span className="grid h-9 w-9 place-items-center rounded-full border border-border bg-card text-primary shadow-soft">
                      <Briefcase size={16} />
                    </span>
                  </div>

                  {/* Card */}
                  <div
                    className={`md:col-span-1 ${
                      right ? 'md:pl-12 md:text-left' : 'md:pr-12 md:text-right md:[&>*:first-child]:ml-auto'
                    }`}
                  >
                    {/* Desktop node */}
                    <span
                      className={`absolute top-2 hidden h-9 w-9 place-items-center rounded-full border border-border bg-card text-primary shadow-soft md:grid ${
                        right ? 'left-1/2 -translate-x-1/2' : 'left-1/2 -translate-x-1/2'
                      }`}
                    >
                      <Briefcase size={16} />
                    </span>

                    <motion.article
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                      className="gradient-border inline-block w-full rounded-2xl bg-card p-6 text-left md:max-w-lg"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="rounded-full bg-hover px-3 py-1 text-xs font-semibold text-primary">
                          {job.duration}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-muted">
                          <MapPin size={12} /> {job.location}
                        </span>
                      </div>
                      <h3 className="mt-4 text-xl font-bold text-secondary">{job.role}</h3>
                      <p className="text-sm font-semibold text-primary">{job.company}</p>
                      <p className="mt-3 text-sm leading-relaxed text-muted">{job.summary}</p>
                      <ul className="mt-4 space-y-2">
                        {job.points.map((p) => (
                          <li key={p} className="flex gap-2 text-sm text-ink">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                            <span className="leading-relaxed">{p}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {job.tech.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-border bg-bg px-2.5 py-1 text-xs font-medium text-muted"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </motion.article>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
