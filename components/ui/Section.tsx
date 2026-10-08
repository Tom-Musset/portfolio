import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type SectionProps = {
  id: string;
  title: string;
  eyebrow?: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  title,
  eyebrow,
  intro,
  children,
  className,
}: SectionProps) {
  const headingId = `${id}-titre`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className={cn("scroll-mt-24 py-20 sm:py-28", className)}
    >
      <Container>
        <header className="max-w-2xl">
          {eyebrow ? (
            <p className="mb-3 text-sm font-medium tracking-wide text-accent">
              {eyebrow}
            </p>
          ) : null}
          <h2
            id={headingId}
            className="font-serif text-3xl tracking-tight text-ink sm:text-4xl"
          >
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 text-base leading-7 text-muted">{intro}</p>
          ) : null}
        </header>
        <div className="mt-10 sm:mt-12">{children}</div>
      </Container>
    </section>
  );
}
