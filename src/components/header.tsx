import { ReactNode } from "react";

type HeaderProps = {
  title: string;
  subtitle?: string;
  children?: ReactNode;
};
export const Header = ({ title, subtitle, children }: HeaderProps) => {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="grid gap-1">
        <h1 className="font-semibold tracking-tight text-3xl md:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-muted-foreground">{subtitle}</p>
        )}
      </div>
      {children}
    </div>
  );
};
