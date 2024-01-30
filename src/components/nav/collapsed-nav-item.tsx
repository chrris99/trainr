import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { cn } from "@/utils";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { NavItemProps } from "./nav-item";

export const CollapsedNavItem = ({ item }: NavItemProps) => {
  return (
    <Tooltip delayDuration={0}>
      <TooltipTrigger asChild>
        <Link
          href={item.href}
          className={cn(
            buttonVariants({ variant: item.variant, size: "icon" }),
            "h-9 w-9",
            item.variant === "default" &&
              "dark:bg-muted dark:text-muted-foreground dark:hover:bg-muted dark:hover:text-white"
          )}
        >
          <item.icon className="h-4 w-4" />
          <span className="sr-only">{item.title}</span>
        </Link>
      </TooltipTrigger>
      <TooltipContent side="right" className="flex items-center gap-4">
        {item.title}
        {item.label && (
          <span className="ml-auto text-muted-foreground">{item.label}</span>
        )}
      </TooltipContent>
    </Tooltip>
  );
};
