import { AuthForm } from "../_components/auth-form";
import { signIn } from "../_actions/sign-in";
import Link from "next/link";

export default function SignIn({
  searchParams
}: {
  searchParams: { message: string };
}) {
  return (
    <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Sign in</h1>
        <p className="text-sm text-muted-foreground">
          Enter your email below to sign in to your account
        </p>
      </div>
      <AuthForm action={signIn} />
    </div>
  );
}
