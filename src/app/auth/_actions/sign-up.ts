import { createSupabaseServerClient } from "@/supabase/server";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const signUp = async (formData: FormData) => {
  "use server";

  const origin = headers().get("origin");
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const supabase = createSupabaseServerClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/confirm`
    }
  });

  if (error) {
    return redirect("/auth/signup?message=Could not authenticate user");
  }

  return redirect("/login?message=Check email to continue sign in process");
};
