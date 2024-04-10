import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Define a type/interface for your Supabase client
interface ISupabase extends SupabaseClient {}

// Extract environment variables
const supabaseUrl: string = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey: string = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create the Supabase client
const supabase: ISupabase = createClient(supabaseUrl, supabaseKey);



export default supabase;
