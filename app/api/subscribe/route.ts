import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

// Use service role key server-side so we can insert regardless of RLS policies
function getSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!url || !key) {
    throw new Error(
      `Supabase env vars missing: NEXT_PUBLIC_SUPABASE_URL=${url ? 'set' : 'MISSING'}, ` +
      `SUPABASE_SERVICE_ROLE_KEY=${process.env.SUPABASE_SERVICE_ROLE_KEY ? 'set' : 'MISSING'}, ` +
      `NEXT_PUBLIC_SUPABASE_ANON_KEY=${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'set' : 'MISSING'}`
    )
  }

  return createClient(url, key)
}

function siteOrigin(): string {
  // NEXT_PUBLIC_SITE_URL is the canonical origin (e.g. https://fixit-first.co.uk)
  // Fall back to localhost for local dev if not set
  return process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ?? 'http://localhost:3000'
}

export async function POST(req: NextRequest) {
  let email: string
  let source: string

  try {
    const body = await req.json()
    email = body?.email
    source = body?.source ?? 'unknown'
  } catch (err) {
    console.error('subscribe: failed to parse request body:', err)
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 })
  }

  if (!email || typeof email !== 'string') {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 })
  }

  let supabase
  try {
    supabase = getSupabase()
  } catch (err) {
    console.error('subscribe: Supabase client init failed:', err)
    return NextResponse.json({ error: 'Server configuration error' }, { status: 500 })
  }

  const { error } = await supabase
    .from('email_signups')
    .insert({ email: email.toLowerCase().trim(), source })

  if (error) {
    // Unique violation — email already exists
    if (error.code === '23505') {
      return NextResponse.json({ duplicate: true }, { status: 200 })
    }
    console.error('subscribe: Supabase insert error:', JSON.stringify({
      message: error.message,
      code: error.code,
      details: error.details,
      hint: error.hint,
    }))
    return NextResponse.json({ error: 'Failed to save email' }, { status: 500 })
  }

  // Fire welcome email in background — don't block the response on it
  fetch(`${siteOrigin()}/api/send-welcome`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  }).catch((err) => console.error('subscribe: welcome email failed:', err))

  return NextResponse.json({ ok: true }, { status: 201 })
}
