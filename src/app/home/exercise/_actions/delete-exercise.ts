"use server";

import { createSupabaseServerClient } from "@/supabase/server";

export const deleteExercise = async (id: string) => {
  const supabase = createSupabaseServerClient();
  const { error } = await supabase.from("exercise").delete().eq("id", id);

  if (error) console.error(error);
};
