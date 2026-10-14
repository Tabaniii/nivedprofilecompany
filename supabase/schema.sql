-- ==============================================================================
-- SCHEMA UNTUK SUPABASE CONTACT FORM
-- Jalankan query ini di: Supabase Dashboard -> SQL Editor -> New Query -> Run
-- ==============================================================================

-- 1. Buat tabel 'contacts'
CREATE TABLE IF NOT EXISTS public.contacts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    subject TEXT NOT NULL,
    message TEXT NOT NULL,
    status TEXT DEFAULT 'unread' CHECK (status IN ('unread', 'read', 'archived', 'replied'))
);

-- 2. Aktifkan Row Level Security (RLS)
ALTER TABLE public.contacts ENABLE ROW LEVEL SECURITY;

-- 3. Policy: Izinkan pengunjung (anon / public) mengirim pesan (INSERT saja)
DROP POLICY IF EXISTS "Allow public to insert contacts" ON public.contacts;
CREATE POLICY "Allow public to insert contacts"
    ON public.contacts
    FOR INSERT
    TO public
    WITH CHECK (true);

-- 4. Policy: Hanya role authenticated atau service_role yang bisa membaca (SELECT) pesan
DROP POLICY IF EXISTS "Allow service role or authenticated to read contacts" ON public.contacts;
CREATE POLICY "Allow service role or authenticated to read contacts"
    ON public.contacts
    FOR SELECT
    TO authenticated
    USING (true);

-- 5. Tambahkan index untuk performa pencarian dan filter
CREATE INDEX IF NOT EXISTS idx_contacts_created_at ON public.contacts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_contacts_email ON public.contacts(email);

-- ==============================================================================
-- OPSIONAL: TABEL 'projects' (Jika ingin data project diambil dinamis dari Supabase)
-- Jika tabel ini belum dibuat, website otomatis menggunakan data fallback lokal.
-- ==============================================================================

CREATE TABLE IF NOT EXISTS public.projects (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
    title TEXT NOT NULL,
    subtitle TEXT,
    description TEXT,
    image_url TEXT,
    tags TEXT[],
    metrics TEXT[],
    github_url TEXT,
    live_url TEXT,
    featured BOOLEAN DEFAULT false,
    year TEXT
);

ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public to read projects" ON public.projects;
CREATE POLICY "Allow public to read projects"
    ON public.projects
    FOR SELECT
    TO public
    USING (true);
