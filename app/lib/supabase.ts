import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabase: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase credentials not configured');
    return null;
  }

  if (!supabase) {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
  }

  return supabase;
}

export type ContactSubmission = {
  id?: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  created_at?: string;
};

export type WaitlistSubmission = {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  date_of_birth: string;
  health_issues: string;
  health_goals: string;
  message?: string;
  created_at?: string;
};

export async function submitToWaitlist(data: Omit<WaitlistSubmission, 'id' | 'created_at'>) {
  const supabase = getSupabase();

  if (!supabase) {
    throw new Error('Supabase is not configured');
  }

  const { data: result, error } = await supabase
    .from('waitlist')
    .insert([data])
    .select()
    .single();

  if (error) {
    throw error;
  }

  return result;
}
