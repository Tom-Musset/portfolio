import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/cn";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  as?: "div" | "nav";
} & HTMLAttributes<HTMLElement>;

export function Container({
  children,
  className,
  as: Tag = "div",
  ...props
}: ContainerProps) {
  return (
    <Tag
      className={cn("mx-auto w-full max-w-5xl px-5 sm:px-8", className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
