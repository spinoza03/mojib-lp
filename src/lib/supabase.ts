import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://zlkbeklravpsafnmyyqs.supabase.co";
const SUPABASE_KEY = "sb_publishable_4vayUau5Hj2AJIps8MfiAw_oy83z52K";

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

export type Lead = {
  id: string;
  name: string;
  clinic_name: string;
  city: string;
  messages_per_day: string | null;
  whatsapp: string;
  status: "new" | "contacted" | "qualified" | "converted" | "lost";
  notes: string;
  created_at: string;
  updated_at: string;
};
