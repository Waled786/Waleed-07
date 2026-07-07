import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

if (!url || !anon) {
  // Soft-fail: the contact form will surface a friendly error if env is missing.
  // eslint-disable-next-line no-console
  console.warn('Supabase env vars missing — contact form will not persist submissions.');
}

export const supabase = createClient(url ?? '', anon ?? '', {
  auth: { persistSession: false },
});
