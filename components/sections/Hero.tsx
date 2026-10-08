import { site } from "@/content/site";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section
      id="accueil"
      aria-labelledby="accueil-titre"
      className="scroll-mt-24 border-b border-line"
    >
      <Container className="py-24 sm:py-32">
        <p className="text-sm font-medium tracking-wide text-accent">
          {site.role}
        </p>
        <h1
          id="accueil-titre"
          className="mt-4 max-w-3xl font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl sm:leading-[1.15]"
        >
          {site.name}
        </h1>
        <p className="mt-6 max-w-xl text-lg leading-8 text-muted">
          {site.tagline}
        </p>
        <p className="mt-4 max-w-xl border-l-2 border-accent pl-4 text-base leading-7 text-ink">
          {site.availability}
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/#projets">Voir mes projets</ButtonLink>
          <ButtonLink href="/#contact" variant="secondary">
            Me contacter
          </ButtonLink>
        </div>
      </Container>
    </section>
  );
}
