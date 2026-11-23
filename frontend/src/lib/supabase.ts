import { createClient } from "@supabase/supabase-js";

// The anon key is public by design. What it can do is controlled by Row Level Security in the database
// (see supabase/schema.sql). Never put the service_role key in this project.
const url = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const isSupabaseConfigured = Boolean(url && anonKey);

export const supabase = isSupabaseConfigured
  ? createClient(url as string, anonKey as string, {
      // The site has no user accounts, so there is nothing to persist.
      auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
    })
  : null;
