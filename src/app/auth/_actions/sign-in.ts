import { createSupabaseServerClient } from "@/supabase/server";
import { redirect } from "next/navigation";

export const signIn = async (formData: FormData) => {
  "use server";

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const supabase = createSupabaseServerClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password
  });

  if (error) {
    return redirect("/auth/signin?message=Could not authenticate user");
  }

  return redirect("/home");
};
