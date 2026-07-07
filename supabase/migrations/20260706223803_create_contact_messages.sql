/*
# Create contact_messages table (single-tenant, no auth)

1. Purpose
   Stores submissions from the portfolio contact form. The site has no
   sign-in screen, so the frontend talks to Supabase with the anon key.

2. New Tables
   - `contact_messages`
     - `id`         uuid, primary key
     - `name`       text, not null (min length validated client-side)
     - `email`      text, not null
     - `message`    text, not null
     - `created_at` timestamptz, default now()

3. Security
   - RLS enabled on `contact_messages`.
   - INSERT policy for `anon, authenticated` so visitors can submit
     messages without signing in.
   - No SELECT/UPDATE/DELETE policies are granted to anon/authenticated,
     so submitted messages stay private (only readable via the service
     role / dashboard).
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages
  FOR INSERT TO anon, authenticated WITH CHECK (true);
