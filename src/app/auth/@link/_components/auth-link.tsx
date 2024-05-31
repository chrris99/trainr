import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/utils";
import Link from "next/link";

type AuthLinkProps = {
  href: string;
  children: React.ReactNode;
};

export default function AuthLink({ href, children }: AuthLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "absolute right-4 top-4 md:right-8 md:top-8"
      )}
    >
      {children}
    </Link>
  );
}
