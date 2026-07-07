import { motion } from 'framer-motion';
import { ArrowUpRight, Github } from 'lucide-react';
import { Section } from '../layouts/Section';
import { SectionHeading } from '../components/SectionHeading';
import { Magnetic } from '../components/Magnetic';
import { PROJECTS, type Project } from '../constants/data';
import { container, fadeUp, viewportOnce } from '../animations/variants';

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1;
  return (
    <motion.article
      variants={fadeUp}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      className="gradient-border group overflow-hidden rounded-card bg-card"
    >
      <div className={`grid lg:grid-cols-2 ${reversed ? 'lg:[&>*:first-child]:order-2' : ''}`}>
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
          <img
            src={project.image}
            alt={`${project.title} project preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-smooth group-hover:scale-105"
          />
          <div className={`absolute inset-0 bg-gradient-to-tr ${project.accent} opacity-60 mix-blend-multiply`} />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <span className="absolute left-5 top-5 rounded-full bg-card/90 px-3 py-1 text-xs font-bold text-secondary backdrop-blur">
            0{index + 1}
          </span>
        </div>

        {/* Body */}
        <div className="flex flex-col justify-between p-7 md:p-9">
          <div>
            <h3 className="text-2xl font-extrabold tracking-tight text-secondary">
              {project.title}
            </h3>
            <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted">
              {project.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-bg px-2.5 py-1 text-xs font-medium text-muted transition-colors group-hover:border-primary/30 group-hover:text-primary"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-7 flex items-center gap-3">
            <Magnetic strength={0.25}>
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:shadow-glow"
              >
                Live demo
                <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Magnetic>
            <Magnetic strength={0.25}>
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-semibold text-secondary transition-colors duration-300 hover:border-primary/40 hover:text-primary"
              >
                <Github size={16} />
                Code
              </a>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        label="Featured work"
        title={
          <>
            Products I&rsquo;ve built <span className="text-gradient">end to end</span>
          </>
        }
        intro="A selection of projects spanning developer tooling, data infrastructure, and edge-rendered commerce — each shipped to production and measured against real usage."
      />
      <motion.div
        variants={container(0.18)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 space-y-7 lg:mt-20"
      >
        {PROJECTS.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </motion.div>
    </Section>
  );
}
