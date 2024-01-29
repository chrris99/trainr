import { cn } from "@/utils";
import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { HTMLAttributes } from "react";
import { buttonVariants } from "@/components/ui/button";

export type NavItem = {
  title: string;
  href: string;
  label?: string;
  icon: LucideIcon;
  variant: "default" | "ghost";
};

export interface NavItemProps extends HTMLAttributes<HTMLDivElement> {
  item: NavItem;
}

export const NavItem = ({ item }: NavItemProps) => {
  return (
    <Link
      href={item.href}
      className={cn(
        buttonVariants({ variant: item.variant, size: "sm" }),
        item.variant === "default" &&
          "dark:bg-muted dark:text-white dark:hover:bg-muted dark:hover:text-white",
        "justify-start"
      )}
    >
      <item.icon className="mr-2 h-4 w-4" />
      {item.title}
      {item.label && (
        <span
          className={cn(
            "ml-auto",
            item.variant === "default" && "text-background dark:text-white"
          )}
        >
          {item.label}
        </span>
      )}
    </Link>
  );
};
