"use server";

import { createSupabaseServerClient } from "@/supabase/server";

export const signOut = async () => {
  const supabase = createSupabaseServerClient();

  await supabase.auth.signOut();
};
