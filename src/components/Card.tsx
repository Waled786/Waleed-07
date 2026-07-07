import { type ReactNode } from 'react';
import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../animations/variants';

/** Card with soft shadow, hover lift and a gradient border that animates in on hover. */
export function Card({
  children,
  className = '',
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      whileHover={hover ? { y: -6 } : undefined}
      transition={{ duration: 0.3 }}
      className={`gradient-border group relative overflow-hidden bg-card ${className}`}
    >
      {/* Animated gradient sheen on hover */}
      <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-hover/60 to-transparent opacity-0 transition-all duration-700 ease-smooth group-hover:translate-x-full group-hover:opacity-100" />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
