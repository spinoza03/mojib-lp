# 🔧 Supabase Setup - RLS Configuration

## Problem
The form shows error: `Erreur DB: TypeError: Failed to fetch`

This is because **Row Level Security (RLS)** is either:
1. Blocking anonymous inserts (most likely)
2. Not configured properly
3. Table doesn't exist

---

## ✅ Solution - Run This SQL

Go to your **Supabase Dashboard** → **SQL Editor** and run this:

```sql
-- 1. Create the table if it doesn't exist
CREATE TABLE IF NOT EXISTS public.leads (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  clinic_name text NOT NULL,
  city text NOT NULL,
  messages_per_day text,
  whatsapp text NOT NULL,
  status text DEFAULT 'new'::text,
  notes text DEFAULT ''::text,
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  name text,
  industry text,
  PRIMARY KEY (id),
  CONSTRAINT leads_status_check CHECK (
    status = ANY (ARRAY['new'::text, 'contacted'::text, 'qualified'::text, 'converted'::text, 'lost'::text])
  )
);

-- 2. Enable RLS
ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

-- 3. Create policies to allow anyone to insert/read/update/delete
CREATE POLICY "Enable insert for all users" ON public.leads
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Enable select for all users" ON public.leads
  FOR SELECT
  USING (true);

CREATE POLICY "Enable update for all users" ON public.leads
  FOR UPDATE
  USING (true);

CREATE POLICY "Enable delete for all users" ON public.leads
  FOR DELETE
  USING (true);

-- 4. Grant permissions to anon role
GRANT USAGE ON SCHEMA public TO anon;
GRANT ALL ON public.leads TO anon;
```

---

## 📋 Steps to Execute

1. Log in to **Supabase Dashboard**
2. Select your project
3. Go to **SQL Editor** (left sidebar)
4. Click **New Query**
5. Paste the entire SQL above
6. Click **Run** (play button)
7. You should see "Success" message

---

## 🧪 Test It

After running the SQL:

1. Go back to your landing page
2. Fill out the lead form
3. Submit it
4. Check the **Console** (F12) - you should see:
   - `✅ Lead sauvegardé avec succès`
5. Go to `/leads` (PIN: `300206`) and see your lead appear

---

## 🔒 Security Note

These policies allow **anyone** to insert/read leads. This is fine for a lead capture form.

If you want to restrict reads to authenticated users, replace the SELECT policy with:

```sql
CREATE POLICY "Enable select for authenticated users" ON public.leads
  FOR SELECT
  USING (auth.role() = 'authenticated');
```

But the INSERT policy must stay open for the public form to work.

---

## 🆘 Still Getting Errors?

After running the SQL, check:

1. **Console errors** (F12) - screenshot them
2. **Supabase Logs** → Database section
3. Verify the `leads` table exists in **Tables** section
4. Check that policies are created in **RLS** tab
