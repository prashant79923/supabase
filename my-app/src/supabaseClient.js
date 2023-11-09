import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.supabaseUrl;
const supabaseAnonKey = process.env.supabaseAnonKey;

export const supabase = createClient(
    "https://oluxwnxidcvbxhxawajo.supabase.co","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9sdXh3bnhpZGN2YnhoeGF3YWpvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk1MjgzMDksImV4cCI6MjAxNTEwNDMwOX0.bO_GETCBi65lqm-4MFxMLquiwENiLEbAwrYmtEfTRao" 
    );