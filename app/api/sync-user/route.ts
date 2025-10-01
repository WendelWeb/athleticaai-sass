import { auth, currentUser } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server'
import { ensureUserExistsInSupabase } from '@/lib/supabase-admin'

export async function POST() {
  try {
    // Get the current user from Clerk
    const { userId } = await auth()
    
    if (!userId) {
      return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
    }

    const user = await currentUser()
    
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 })
    }

    // Get primary email
    const primaryEmail = user.emailAddresses.find(email => 
      email.id === user.primaryEmailAddressId
    )?.emailAddress

    if (!primaryEmail) {
      return NextResponse.json({ error: 'No email found for user' }, { status: 400 })
    }

    // Ensure user exists in Supabase
    const supabaseUser = await ensureUserExistsInSupabase({
      clerk_id: user.id,
      email: primaryEmail,
      first_name: user.firstName,
      last_name: user.lastName,
      avatar_url: user.imageUrl,
    })

    return NextResponse.json({ 
      success: true, 
      message: 'User synchronized successfully',
      user: supabaseUser 
    })

  } catch (error) {
    console.error('Error syncing user:', error)
    return NextResponse.json(
      { error: 'Failed to sync user' }, 
      { status: 500 }
    )
  }
}
