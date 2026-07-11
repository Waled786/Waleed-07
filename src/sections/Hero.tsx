import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDown, ArrowUpRight, Download, MapPin } from 'lucide-react';
import { PROFILE } from '../constants/data';
import { Button } from '../components/Button';
import { EASE_SMOOTH } from '../animations/variants';

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 });
  const sy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 });

  // Subtle depth layers
  const blobX = useTransform(sx, [-0.5, 0.5], [-24, 24]);
  const blobY = useTransform(sy, [-0.5, 0.5], [-18, 18]);
  const imgX = useTransform(sx, [-0.5, 0.5], [12, -12]);
  const imgY = useTransform(sy, [-0.5, 0.5], [10, -10]);

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const scrollToAbout = () => {
    const el = document.getElementById('about');
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={ref}
      onMouseMove={handleMove}
      className="relative flex min-h-screen items-center overflow-hidden px-edge-sm pb-24 pt-32 md:px-edge md:pt-36"
    >
      {/* Background decorative gradients (mouse-reactive) */}
      <motion.div
        aria-hidden
        style={{ x: blobX, y: blobY }}
        className="pointer-events-none absolute -left-32 -top-10 -z-10 h-[32rem] w-[32rem] rounded-full bg-primary/12 blur-3xl"
      />
      <motion.div
        aria-hidden
        style={{ x: useTransform(blobX, (v) => -v), y: useTransform(blobY, (v) => -v) }}
        className="pointer-events-none absolute right-[-12%] top-1/3 -z-10 h-[26rem] w-[26rem] rounded-full bg-accent/14 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(219,234,254,0.5),transparent_55%)]"
      />

      <div className="mx-auto grid w-full max-w-shell items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        {/* Copy */}
        <div className="max-w-prose">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_SMOOTH }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3.5 py-1.5 text-xs font-medium text-muted backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for senior engineering roles
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE_SMOOTH, delay: 0.08 }}
            className="section-label mt-7"
          >
            Hello, I&rsquo;m
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_SMOOTH, delay: 0.16 }}
            className="mt-3 text-4xl font-extrabold leading-[1.05] tracking-tight text-secondary sm:text-6xl lg:text-7xl"
          >
            {PROFILE.name}
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_SMOOTH, delay: 0.26 }}
            className="mt-3 text-2xl font-bold tracking-tight text-ink sm:text-3xl"
          >
            {PROFILE.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_SMOOTH, delay: 0.36 }}
            className="mt-6 max-w-[36rem] text-base leading-relaxed text-muted sm:text-lg"
          >
            {PROFILE.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE_SMOOTH, delay: 0.46 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <Button
              size="lg"
              icon={<ArrowUpRight size={18} />}
              onClick={scrollToAbout}
            >
              View my work
            </Button>
            <Button
              size="lg"
              variant="ghost"
              icon={<Download size={18} />}
              href={PROFILE.resumeUrl}
            >
              Download r&eacute;sum&eacute;
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="mt-8 flex items-center gap-2 text-sm text-muted"
          >
            <MapPin size={16} className="text-primary" />
            {PROFILE.location}
          </motion.div>
        </div>

        {/* Profile image with floating + parallax */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: EASE_SMOOTH, delay: 0.3 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <motion.div style={{ x: imgX, y: imgY }} className="relative">
            {/* Glow halo */}
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/25 via-accent/20 to-transparent blur-2xl" />

            {/* Animated gradient ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
              className="absolute -inset-1.5 -z-10 rounded-[2rem] bg-[conic-gradient(from_0deg,rgba(37,99,235,0.5),rgba(56,189,248,0.35),transparent,rgba(37,99,235,0.5))] opacity-70 blur-md"
            />

            {/* Floating frame */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity }}
              className="glow-ring overflow-hidden rounded-[1.75rem] border border-white/60 bg-card"
            >
              <img
                src="/profile.jpeg"
                alt="Portrait of Waleed Javed,software engineer"
                className="aspect-[4/5] w-full object-cover"
                loading="eager"
              />
            </motion.div>

            {/* Floating stat chip */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, ease: 'easeInOut', repeat: Infinity, delay: 1 }}
              className="glass absolute -left-4 bottom-10 hidden rounded-2xl px-4 py-3 shadow-soft sm:block"
            >
              <p className="text-2xl font-extrabold text-secondary">4+</p>
              <p className="text-xs text-muted">years shipping</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5.5, ease: 'easeInOut', repeat: Infinity, delay: 0.5 }}
              className="glass absolute -right-3 top-12 hidden rounded-2xl px-4 py-3 shadow-soft sm:block"
            >
              <p className="text-sm font-bold text-secondary"></p>
              <p className="text-xs text-muted"></p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-primary md:flex"
        aria-label="Scroll to about section"
      >
        <span className="text-[0.7rem] font-medium uppercase tracking-[0.2em]">Scroll</span>
        <span className="flex h-9 w-5 justify-center rounded-full border border-border pt-1.5">
          <span className="h-1.5 w-1 animate-scrollDot rounded-full bg-primary" />
        </span>
        <ArrowDown size={14} />
      </motion.button>
    </section>
  );
}
