import type { ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  newTab?: boolean;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
  newTab = false,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      target={newTab ? "_blank" : undefined}
      rel={newTab ? "noopener noreferrer" : undefined}
      className={cn(
        "inline-flex items-center justify-center rounded-md px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent",
        variant === "primary" && "bg-accent text-white hover:bg-accent-hover",
        variant === "secondary" &&
          "border border-line bg-transparent text-ink hover:bg-paper-muted",
        variant === "ghost" && "text-ink hover:text-accent",
        className,
      )}
    >
      {children}
    </Link>
  );
}
