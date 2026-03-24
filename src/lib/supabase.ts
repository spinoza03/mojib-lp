import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

console.log("🔗 Supabase URL:", supabaseUrl ? "✓ Set" : "✗ Missing");
console.log("🔑 Supabase Key:", supabaseKey ? "✓ Set" : "✗ Missing");

if (!supabaseUrl || !supabaseKey) {
  console.warn(
    "⚠️  Supabase credentials missing! Leads will NOT be saved to database.\n" +
    "Make sure VITE_SUPABASE_URL and VITE_SUPABASE_PUBLISHABLE_KEY are set in .env"
  );
}

export const supabase = createClient(
  supabaseUrl || "https://placeholder.supabase.co",
  supabaseKey || "placeholder_key",
  {
    auth: {
      persistSession: false,
    },
  }
);
