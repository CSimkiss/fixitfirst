import { createClient, type SupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// Singleton guard: prevents duplicate instances during Next.js dev hot-reloads
// and ensures a single auth listener / storage key across the whole browser session.
const g = globalThis as typeof globalThis & { _supabase?: SupabaseClient }

export const supabase: SupabaseClient =
  g._supabase ??
  (g._supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,       // keep session in storage (already the default, now explicit)
      autoRefreshToken: true,     // silently refresh tokens before they expire
      detectSessionInUrl: true,   // pick up tokens from OAuth/magic-link callback URLs
      storageKey: 'fixitfirst-auth', // fixed key so all pages share the same session
    },
  }))
