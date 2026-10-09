import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Container } from "@/components/ui/Container";
import { getProjectBySlug, getProjects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getProjects().map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Projet introuvable" };
  }

  return {
    title: project.title,
    description: project.summary,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="border-b border-line">
      <Container className="py-16 sm:py-24">
        <p className="text-sm text-muted">
          <Link
            href="/#projets"
            className="hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            ← Retour aux projets
          </Link>
        </p>
        <p className="mt-8 text-xs font-medium uppercase tracking-wider text-accent">
          Fiche projet · {project.year} · {project.role}
        </p>
        <h1 className="mt-3 font-serif text-4xl tracking-tight text-ink sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">
          {project.summary}
        </p>
        <ul className="mt-8 flex flex-wrap gap-2" aria-label="Technologies utilisées">
          {project.stack.map((item) => (
            <li
              key={item}
              className="border border-line px-2 py-1 text-xs text-muted"
            >
              {item}
            </li>
          ))}
        </ul>

        {project.repo ? (
          <div className="mt-8">
            <ButtonLink href={project.repo} variant="secondary" newTab>
              Voir le dépôt GitHub
            </ButtonLink>
          </div>
        ) : null}

        {project.detail ? (
          <div className="mt-14 max-w-2xl space-y-12">
            {project.detail.map((section, index) => (
              <section
                key={section.heading}
                aria-labelledby={`${project.slug}-section-${index}`}
              >
                <h2
                  id={`${project.slug}-section-${index}`}
                  className="font-serif text-2xl tracking-tight text-ink sm:text-3xl"
                >
                  {section.heading}
                </h2>
                {section.paragraphs?.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-4 text-base leading-7 text-muted"
                  >
                    {paragraph}
                  </p>
                ))}
                {section.items ? (
                  <ul className="mt-5 space-y-3">
                    {section.items.map((item) => (
                      <li
                        key={item.label}
                        className="text-sm leading-6 text-muted"
                      >
                        <span className="font-medium text-ink">
                          {item.label} :
                        </span>{" "}
                        {item.text}
                      </li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>
        ) : null}

        {project.detail ? null : (
          <p className="mt-10 max-w-2xl text-sm leading-6 text-muted">
            Contexte, choix techniques et liens (dépôt GitHub, démo) seront
            complétés prochainement.
          </p>
        )}

        <div className="mt-10">
          <ButtonLink href="/#contact" variant="secondary">
            Me contacter
          </ButtonLink>
        </div>
      </Container>
    </main>
  );
}
