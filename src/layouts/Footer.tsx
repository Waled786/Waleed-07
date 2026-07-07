import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { NAV_LINKS, PROFILE } from '../constants/data';
import { EASE_SMOOTH } from '../animations/variants';

export function Footer() {
  const [hovered, setHovered] = useState(false);

  const go = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-border bg-card/50 px-edge-sm py-16 md:px-edge md:py-20">
      <div className="mx-auto w-full max-w-shell">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-secondary text-sm font-extrabold text-white">
                AM
              </span>
              <span className="text-sm font-bold tracking-tight text-secondary">
                {PROFILE.name}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              {PROFILE.tagline}
            </p>
            <div className="mt-5 flex items-center gap-3">
              {[
                { Icon: Github, href: PROFILE.github, label: 'GitHub' },
                { Icon: Linkedin, href: PROFILE.linkedin, label: 'LinkedIn' },
                { Icon: Mail, href: `mailto:${PROFILE.email}`, label: 'Email' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card text-muted transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick nav */}
          <nav className="grid grid-cols-2 gap-x-12 gap-y-2.5 sm:grid-cols-3" aria-label="Footer">
            {NAV_LINKS.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="text-left text-sm text-muted transition-colors hover:text-primary"
              >
                {l.label}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {PROFILE.name}. Designed &amp; built with care.
          </p>
          <div className="flex items-center gap-4">
            <p className="text-xs text-muted">{PROFILE.location}</p>
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.3, ease: EASE_SMOOTH }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold text-secondary transition-colors hover:border-primary/40 hover:text-primary"
              aria-label="Back to top"
            >
              Back to top
              <motion.span animate={{ rotate: hovered ? -45 : 0 }} transition={{ duration: 0.3 }}>
                <ArrowUp size={14} />
              </motion.span>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}
