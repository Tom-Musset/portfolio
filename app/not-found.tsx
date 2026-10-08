import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <main>
      <Container className="py-24">
        <h1 className="font-serif text-4xl tracking-tight text-ink">
          Page introuvable
        </h1>
        <p className="mt-4 max-w-md text-muted">
          Cette adresse n’existe pas encore dans le portfolio.
        </p>
        <div className="mt-8">
          <ButtonLink href="/">Retour à l’accueil</ButtonLink>
        </div>
      </Container>
    </main>
  );
}
