import Link from "next/link";
import { site } from "@/content/site";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-paper">
      <Container className="flex flex-col gap-10 py-12 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="font-medium text-ink">{site.name}</p>
          <p className="mt-1 max-w-xs text-sm text-muted">{site.role}</p>
        </div>

        <nav aria-label="Pied de page">
          <ul className="flex flex-col gap-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-muted hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="flex flex-col gap-2">
          {site.socials.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-sm text-muted hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </Container>

      <Container className="border-t border-line py-6">
        <p className="text-xs text-muted">
          © {year} {site.name}. Portfolio développeur full-stack.
        </p>
      </Container>
    </footer>
  );
}
