import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  CheckCircle2,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Send,
  Download,
} from 'lucide-react';
import { Section } from '../layouts/Section';
import { SectionHeading } from '../components/SectionHeading';
import { Magnetic } from '../components/Magnetic';
import { PROFILE } from '../constants/data';
import { container, fadeUp, slideLeft, slideRight, viewportOnce } from '../animations/variants';
import { supabase } from '../utils/supabase';

type Status = 'idle' | 'loading' | 'success' | 'error';
type Errors = { name?: string; email?: string; message?: string };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>('idle');

  const validate = (): boolean => {
    const e: Errors = {};
    if (form.name.trim().length < 2) e.name = 'Please tell me your name.';
    if (!EMAIL_RE.test(form.email)) e.email = 'A valid email helps me reply.';
    if (form.message.trim().length < 10) e.message = 'A few more words, please.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      });
      if (error) throw error;
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const update = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const channels = [
    { Icon: Mail, label: 'Email', value: PROFILE.email, href: `mailto:${PROFILE.email}` },
    { Icon: Linkedin, label: 'LinkedIn', value: 'in/aaravmehta', href: PROFILE.linkedin },
    { Icon: Github, label: 'GitHub', value: 'aaravmehta', href: PROFILE.github },
    { Icon: MapPin, label: 'Location', value: PROFILE.location, href: undefined },
  ];

  const inputBase =
    'w-full rounded-2xl border bg-card px-4 py-3.5 text-sm text-secondary placeholder:text-muted transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50';

  return (
    <Section id="contact">
      <SectionHeading
        label="Contact"
        title={
          <>
            Let&rsquo;s build something <span className="text-gradient">worth shipping</span>
          </>
        }
        intro="Whether it&rsquo;s a senior role, a complex build, or a thoughtful question — my inbox is open."
      />

      <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
        {/* Channels */}
        <motion.div
          variants={container(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.div variants={slideLeft} className="space-y-4">
            {channels.map(({ Icon, label, value, href }) => {
              const inner = (
                <div className="gradient-border flex items-center gap-4 rounded-2xl bg-card p-5 transition-transform duration-300 hover:-translate-y-0.5">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-hover text-primary">
                    <Icon size={20} />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                      {label}
                    </p>
                    <p className="text-sm font-semibold text-secondary">{value}</p>
                  </div>
                </div>
              );
              return href ? (
                <a key={label} href={href} target="_blank" rel="noreferrer">
                  {inner}
                </a>
              ) : (
                <div key={label}>{inner}</div>
              );
            })}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6">
            <Magnetic>
              <a
                href={PROFILE.resumeUrl}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold text-secondary transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Download size={16} />
                Download r&eacute;sum&eacute;
              </a>
            </Magnetic>
          </motion.div>
        </motion.div>

        {/* Form */}
        <motion.form
          variants={container(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          onSubmit={onSubmit}
          noValidate
          className="gradient-border rounded-card bg-card p-6 shadow-soft md:p-8"
        >
          <motion.div variants={slideRight} className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" error={errors.name}>
              <input
                type="text"
                value={form.name}
                onChange={update('name')}
                placeholder="Your name"
                className={inputBase}
                aria-invalid={!!errors.name}
              />
            </Field>
            <Field label="Email" error={errors.email}>
              <input
                type="email"
                value={form.email}
                onChange={update('email')}
                placeholder="you@company.com"
                className={inputBase}
                aria-invalid={!!errors.email}
              />
            </Field>
          </motion.div>

          <motion.div variants={slideRight} className="mt-4">
            <Field label="Message" error={errors.message}>
              <textarea
                value={form.message}
                onChange={update('message')}
                placeholder="What are you working on?"
                rows={5}
                className={`${inputBase} resize-none`}
                aria-invalid={!!errors.message}
              />
            </Field>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6 flex items-center gap-4">
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-primary px-7 font-semibold text-white shadow-soft transition-all duration-300 hover:shadow-glow disabled:opacity-70"
            >
              <AnimatePresence mode="wait" initial={false}>
                {status === 'loading' && (
                  <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="inline-flex items-center gap-2">
                    <Loader2 size={18} className="animate-spin" /> Sending…
                  </motion.span>
                )}
                {status === 'success' && (
                  <motion.span key="success" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="inline-flex items-center gap-2">
                    <CheckCircle2 size={18} /> Sent
                  </motion.span>
                )}
                {(status === 'idle' || status === 'error') && (
                  <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="inline-flex items-center gap-2">
                    Send message <Send size={16} />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>

            <AnimatePresence>
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-sm font-medium text-emerald-600"
                >
                  Thanks — I&rsquo;ll reply within a day.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-sm font-medium text-rose-600"
                >
                  Something went wrong. Try emailing me directly.
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-muted">
        {label}
      </span>
      {children}
      <AnimatePresence>
        {error && (
          <motion.span
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mt-1.5 block text-xs font-medium text-rose-600"
          >
            {error}
          </motion.span>
        )}
      </AnimatePresence>
    </label>
  );
}
