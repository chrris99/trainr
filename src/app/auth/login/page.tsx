import { UserAuthForm } from "../_components/auth-form";
import { signIn } from "../_actions/sign-in";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return <UserAuthForm action={signIn} />;
}
