import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabase: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  if (!supabaseUrl || !supabaseAnonKey) {
    console.warn('Supabase credentials not configured. Add to .env.local:');
    console.warn('NEXT_PUBLIC_SUPABASE_URL=your_url');
    console.warn('NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key');
    return null;
  }

  if (!supabase) {
    supabase = createClient(supabaseUrl, supabaseAnonKey);
  }

  return supabase;
}

// Debug helper
export function checkSupabaseConfig() {
  console.log('Supabase URL:', supabaseUrl ? '✓ Set' : '✗ Missing');
  console.log('Supabase Key:', supabaseAnonKey ? '✓ Set' : '✗ Missing');
  return { hasUrl: !!supabaseUrl, hasKey: !!supabaseAnonKey };
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
    // Development mode: log data and simulate success
    console.log('📋 Waitlist submission (Supabase not configured):', data);
    return { ...data, id: 'dev-' + Date.now(), created_at: new Date().toISOString() };
  }

  console.log('📤 Submitting to Supabase waitlist table:', data);

  const { data: result, error } = await supabase
    .from('waitlist')
    .insert([data])
    .select()
    .single();

  if (error) {
    console.error('❌ Supabase error:', error.message);
    console.error('Error code:', error.code);
    if (error.details) console.error('Error details:', error.details);
    if (error.hint) console.error('Error hint:', error.hint);

    // Provide helpful error messages
    if (error.code === 'PGRST205' || error.code === '42P01') {
      throw new Error('Table "waitlist" does not exist. Please create it in Supabase.');
    }
    if (error.code === '42501') {
      throw new Error('Permission denied. Check RLS policies in Supabase.');
    }
    if (error.code === '23505') {
      throw new Error('This email is already on the waitlist.');
    }

    throw new Error(error.message || 'Failed to submit. Please try again.');
  }

  console.log('✅ Successfully submitted:', result);
  return result;
}

export async function submitToContact(data: Omit<ContactSubmission, 'id' | 'created_at'>) {
  const supabase = getSupabase();

  if (!supabase) {
    // Development mode: log data and simulate success
    console.log('📋 Contact submission (Supabase not configured):', data);
    return { ...data, id: 'dev-' + Date.now(), created_at: new Date().toISOString() };
  }

  console.log('📤 Submitting to Supabase contact_submissions table:', data);

  const { data: result, error } = await supabase
    .from('contact_submissions')
    .insert([data])
    .select()
    .single();

  if (error) {
    console.error('❌ Supabase error:', error.message);
    console.error('Error code:', error.code);
    if (error.details) console.error('Error details:', error.details);
    if (error.hint) console.error('Error hint:', error.hint);

    // Provide helpful error messages
    if (error.code === 'PGRST205' || error.code === '42P01') {
      throw new Error('Table "contact_submissions" does not exist. Please create it in Supabase.');
    }
    if (error.code === '42501') {
      throw new Error('Permission denied. Check RLS policies in Supabase.');
    }

    throw new Error(error.message || 'Failed to submit. Please try again.');
  }

  console.log('✅ Successfully submitted:', result);
  return result;
}

/*
 * SQL to create the contact_submissions table in Supabase:
 *
 * CREATE TABLE contact_submissions (
 *   id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
 *   name TEXT NOT NULL,
 *   email TEXT NOT NULL,
 *   phone TEXT,
 *   message TEXT NOT NULL,
 *   created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
 * );
 *
 * -- Enable RLS
 * ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
 *
 * -- Allow anonymous inserts
 * CREATE POLICY "Allow anonymous inserts" ON contact_submissions
 *   FOR INSERT WITH CHECK (true);
 */

/*
 * SQL to create the waitlist table in Supabase:
 *
 * CREATE TABLE waitlist (
 *   id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
 *   first_name TEXT NOT NULL,
 *   last_name TEXT NOT NULL,
 *   email TEXT NOT NULL,
 *   phone TEXT NOT NULL,
 *   date_of_birth DATE NOT NULL,
 *   health_issues TEXT NOT NULL,
 *   health_goals TEXT NOT NULL,
 *   message TEXT,
 *   created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
 * );
 *
 * -- Enable RLS
 * ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;
 *
 * -- Allow anonymous inserts
 * CREATE POLICY "Allow anonymous inserts" ON waitlist
 *   FOR INSERT WITH CHECK (true);
 *
 * -- Allow reading own submissions (optional)
 * CREATE POLICY "Allow reading all" ON waitlist
 *   FOR SELECT USING (true);
 */
