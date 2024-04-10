// pages/api/auth/update-password.js

import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import supabase from '../config/supabaseClientdata';


export async function POST(req: NextRequest,res: NextResponse) {
    const { user_id, newPassword } =  await req.json();


    const { data, error } = await supabase.auth.updateUser( {
    password: newPassword,
  });
  console.log("data",data)

  if (error) {
    return NextResponse.json(error, { status: 500 })
  }
  return NextResponse.json( data , { status: 200 })

};

