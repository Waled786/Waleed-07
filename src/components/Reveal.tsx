import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../animations/variants';

/** Wraps children so they reveal once on scroll. Use with a `container` variant parent. */
export function Reveal({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      className={className}
    >
      {children}
    </motion.div>
  );
}
