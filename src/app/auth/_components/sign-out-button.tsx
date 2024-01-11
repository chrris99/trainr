"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { signOut } from "../_actions/sign-out";

interface SignOutButtonProps extends ButtonProps {}
export const SignOutButton = ({ children, ...props }: SignOutButtonProps) => {
  return (
    <Button {...props} onClick={signOut}>
      {children}
    </Button>
  );
};
