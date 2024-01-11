"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { signOut } from "../_actions/sign-out";

export const SignOutButton = ({ children, ...props }: ButtonProps) => {
  return (
    <form action="/auth/signout" method="post">
      <Button {...props} onClick={signOut} type="submit">
        {children}
      </Button>
    </form>
  );
};
