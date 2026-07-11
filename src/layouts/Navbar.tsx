import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS, PROFILE } from '../constants/data';
import { useActiveSection, useScrollLock, useScrolled } from '../hooks';
import { EASE_SMOOTH } from '../animations/variants';

export function Navbar() {
  const scrolled = useScrolled(40);
  const active = useActiveSection(NAV_LINKS.map((l) => l.id));
  const [open, setOpen] = useState(false);
  useScrollLock(open);

  const go = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE_SMOOTH }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`mx-auto flex items-center justify-between transition-all duration-500 ease-smooth ${scrolled
              ? 'mt-3 max-w-shell rounded-full border border-border/80 bg-card/85 px-4 py-2.5 shadow-soft backdrop-blur-xl md:px-6'
              : 'mt-0 max-w-none border-b border-transparent bg-transparent px-edge-sm py-5 md:px-edge'
            }`}
        >
          {/* Logo */}
          <button
            onClick={() => go('home')}
            className="group flex items-center gap-2.5"
            aria-label="Go to top"
          >
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-secondary text-sm font-extrabold text-white shadow-soft transition-transform duration-300 group-hover:scale-105">
              WJ
            </span>
            <span className="hidden text-sm font-bold tracking-tight text-secondary sm:block">
              {PROFILE.name}
            </span>
          </button>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => {
              const isActive = active === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => go(link.id)}
                  className={`relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 ${isActive ? 'text-primary' : 'text-muted hover:text-secondary'
                    }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute inset-x-2 -bottom-px h-0.5 rounded-full bg-primary"
                      transition={{ duration: 0.35, ease: EASE_SMOOTH }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => go('contact')}
              className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:shadow-glow hover:brightness-105 sm:inline-flex"
            >
              Let&rsquo;s talk
            </button>
            <button
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card/80 text-secondary transition-colors hover:border-primary/40 hover:text-primary lg:hidden"
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <div
              className="absolute inset-0 bg-secondary/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: EASE_SMOOTH }}
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-bg p-6 shadow-lift"
              role="dialog"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-secondary text-sm font-extrabold text-white">
                  AM
                </span>
                <button
                  onClick={() => setOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-border text-secondary transition-colors hover:text-primary"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <nav className="mt-10 flex flex-col gap-1" aria-label="Mobile primary">
                {NAV_LINKS.map((link, i) => (
                  <motion.button
                    key={link.id}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * i + 0.1, duration: 0.4, ease: EASE_SMOOTH }}
                    onClick={() => go(link.id)}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-left text-base font-semibold transition-colors ${active === link.id
                        ? 'bg-hover text-primary'
                        : 'text-secondary hover:bg-hover/60'
                      }`}
                  >
                    {link.label}
                    <span className="text-xs font-normal text-muted">0{i + 1}</span>
                  </motion.button>
                ))}
              </nav>

              <div className="mt-auto">
                <button
                  onClick={() => go('contact')}
                  className="flex h-14 w-full items-center justify-center rounded-full bg-primary font-semibold text-white shadow-soft"
                >
                  Let&rsquo;s talk
                </button>
                <p className="mt-4 text-center text-sm text-muted">{PROFILE.email}</p>
              </div>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
