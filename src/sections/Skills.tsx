import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { Section } from '../layouts/Section';
import { SectionHeading } from '../components/SectionHeading';
import { SKILLS, type SkillCategory } from '../constants/data';
import { container, fadeUp, viewportOnce, EASE_SMOOTH } from '../animations/variants';

/** Radial progress ring (animated arc) instead of a percentage bar. */
function RadialSkill({ name, level }: { name: string; level: number }) {
  const radius = 18;
  const circ = 2 * Math.PI * radius;
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-12 w-12 shrink-0">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 44 44">
          <circle cx="22" cy="22" r={radius} fill="none" stroke="#E2E8F0" strokeWidth="3" />
          <motion.circle
            cx="22"
            cy="22"
            r={radius}
            fill="none"
            stroke="url(#skillGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={circ}
            initial={{ strokeDashoffset: circ }}
            whileInView={{ strokeDashoffset: circ - (level / 100) * circ }}
            viewport={viewportOnce}
            transition={{ duration: 1.1, ease: EASE_SMOOTH }}
          />
          <defs>
            <linearGradient id="skillGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#38BDF8" />
            </linearGradient>
          </defs>
        </svg>
        <span className="absolute inset-0 grid place-items-center text-[0.62rem] font-bold text-secondary">
          {level}
        </span>
      </div>
      <span className="text-sm font-medium text-ink">{name}</span>
    </div>
  );
}

function SkillCard({ cat }: { cat: SkillCategory }) {
  const [open, setOpen] = useState(false);
  const Icon = cat.icon;
  return (
    <motion.div
      variants={fadeUp}
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
      onClick={() => setOpen((o) => !o)}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: EASE_SMOOTH }}
      className="gradient-border flex cursor-pointer flex-col rounded-card bg-card p-6"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setOpen((o) => !o);
        }
      }}
      aria-expanded={open}
    >
      <div className="flex items-center justify-between">
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-hover text-primary transition-colors">
          <Icon size={22} />
        </span>
        <motion.span animate={{ rotate: open ? 45 : 0 }} transition={{ duration: 0.3 }}>
          <Plus size={18} className="text-muted" />
        </motion.span>
      </div>

      <h3 className="mt-5 text-lg font-bold text-secondary">{cat.name}</h3>
      <p className="mt-1.5 text-sm leading-relaxed text-muted">{cat.blurb}</p>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE_SMOOTH }}
            className="overflow-hidden"
          >
            <div className="mt-5 grid gap-4 border-t border-border pt-5 sm:grid-cols-2">
              {cat.skills.map((s) => (
                <RadialSkill key={s.name} name={s.name} level={s.level} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Always-on compact preview (collapsed state) */}
      {!open && (
        <div className="mt-5 flex flex-wrap gap-2 border-t border-border pt-4">
          {cat.skills.map((s) => (
            <span
              key={s.name}
              className="rounded-full bg-bg px-2.5 py-1 text-xs font-medium text-muted"
            >
              {s.name}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        label="Capabilities"
        title={
          <>
            A toolkit shaped by <span className="text-gradient">real production load</span>
          </>
        }
        intro="Seven disciplines I work across daily. Hover any card to unfold the depth — each skill is rated against what production actually demands, not enthusiasm."
      />
      <motion.div
        variants={container(0.08)}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3"
      >
        {SKILLS.map((cat) => (
          <SkillCard key={cat.name} cat={cat} />
        ))}
      </motion.div>
    </Section>
  );
}
