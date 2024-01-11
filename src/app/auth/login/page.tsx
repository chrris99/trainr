import { UserAuthForm } from "../_components/auth-form";
import { signUp } from "../_actions/sign-up";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return <UserAuthForm action={signUp} />;
}
