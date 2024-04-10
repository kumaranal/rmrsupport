import { createClient } from '@supabase/supabase-js'


const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseRoleKey: string = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
const supabaseAdminClient = createClient(supabaseUrl, supabaseRoleKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true
  }
})

export default supabaseAdminClient;
