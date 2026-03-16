import { createClient } from '@supabase/supabase-js'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  // Verify the caller is authenticated by checking their session token
  const authHeader = req.headers.get('Authorization')
  const accessToken = authHeader?.replace('Bearer ', '')

  if (!accessToken) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  // Use anon client to resolve the user from their access token
  const anonClient = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )

  const { data: { user }, error: userError } = await anonClient.auth.getUser(accessToken)

  if (userError || !user) {
    return NextResponse.json({ error: 'Invalid session' }, { status: 401 })
  }

  // Use admin client (service role) to delete the user
  const adminClient = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
  )

  const { error: deleteError } = await adminClient.auth.admin.deleteUser(user.id)

  if (deleteError) {
    console.error('[delete-account] Error deleting user:', deleteError.message)
    return NextResponse.json({ error: 'Failed to delete account' }, { status: 500 })
  }

  console.log('[delete-account] Deleted user:', user.id)
  return NextResponse.json({ ok: true })
}
