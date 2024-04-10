import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import supabase from '../config/supabaseClientdata';

export async function POST(req: NextRequest, res: NextResponse) {
  const { email, password } =  await req.json();
    console.log("auth",email,password)


try{
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
  })

  if (error) {
    return NextResponse.json(data, { status: 400 });
  }
  return NextResponse.json(
    { message: 'Password updated successfully.', data },
    { status: 200 },
  );
}
catch (error) {
    return NextResponse.json(error, { status: 500 })
}
}
