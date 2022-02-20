import { createClient } from '@supabase/supabase-js'


const supabaseUrl = '**OBFUSCATED'
const supabaseAnonKey = '**OBFUSCATED'
export const supabase = createClient(supabaseUrl, supabaseAnonKey)