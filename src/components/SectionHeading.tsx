import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../animations/variants';

export function SectionHeading({
  label,
  title,
  intro,
  align = 'left',
}: {
  label: string;
  title: ReactNode;
  intro?: string;
  align?: 'left' | 'center';
}) {
  const isCenter = align === 'center';
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={`max-w-prose ${isCenter ? 'mx-auto text-center' : ''}`}
    >
      <span className="section-label">{label}</span>
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {intro && (
        <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{intro}</p>
      )}
    </motion.div>
  );
}
