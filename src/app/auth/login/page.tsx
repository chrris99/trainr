import { UserAuthForm } from "../_components/auth-form";
import { signUp } from "../_actions/sign-up";
import { signIn } from "../_actions/sign-in";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return <UserAuthForm action={signIn} />;
}
