import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

// Use service role key server-side so we can insert regardless of RLS policies
function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )
}

export async function POST(req: NextRequest) {
  const { email, source = 'unknown' } = await req.json()

  if (!email || typeof email !== 'string') {
    return NextResponse.json({ error: 'Email is required' }, { status: 400 })
  }

  const supabase = getSupabase()

  const { error } = await supabase
    .from('email_signups')
    .insert({ email: email.toLowerCase().trim(), source })

  if (error) {
    // Unique violation — email already exists
    if (error.code === '23505') {
      return NextResponse.json({ duplicate: true }, { status: 200 })
    }
    console.error('Supabase error:', error)
    return NextResponse.json({ error: 'Failed to save email' }, { status: 500 })
  }

  // Fire welcome email in background — don't block the response on it
  fetch(`${req.nextUrl.origin}/api/send-welcome`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  }).catch((err) => console.error('Welcome email failed:', err))

  return NextResponse.json({ ok: true }, { status: 201 })
}
