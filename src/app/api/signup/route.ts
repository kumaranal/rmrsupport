import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
  const { email, password } = req.body;

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );

  const { data, error } = await supabase.auth.signUp({
    email,
    password
  });

  if (error) {
    return NextResponse.json({ success: true }, { status: 500 });
  }
  return NextResponse.json(
    { message: 'Password updated successfully.', data },
    { status: 200 },
  );
}
