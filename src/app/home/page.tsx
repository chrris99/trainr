import { createSupabaseServerClient } from "@/supabase/server";
import { SignOutButton } from "../auth/_components/sign-out-button";

export default async function Home() {
  const supabase = createSupabaseServerClient();

  const {
    data: { user }
  } = await supabase.auth.getUser();

  return (
    <>
      <div>Welcome</div>
      <div>{user?.email}</div>
      <SignOutButton>Sign Out</SignOutButton>
    </>
  );
}
