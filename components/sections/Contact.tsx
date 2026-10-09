import { site } from "@/content/site";
import { ContactForm } from "@/components/contact/ContactForm";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { Section } from "@/components/ui/Section";

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Échange"
      title="Contact"
      intro="Mes coordonnées et mes réseaux sont ci-dessous. Le formulaire n’est pas encore connecté."
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
        <div>
          <p className="text-sm leading-7 text-muted">
            Le plus simple reste de m’écrire par email. Le formulaire est
            accessible, mais son envoi n’est pas encore branché.
          </p>
          <dl className="mt-8 space-y-5">
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-accent">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${site.email}`}
                  className="text-sm text-ink hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                >
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-medium uppercase tracking-wider text-accent">
                Réseaux
              </dt>
              <dd className="mt-1 flex flex-col gap-1">
                {site.socials.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-sm text-ink hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    {item.label}
                  </a>
                ))}
              </dd>
            </div>
          </dl>
          <div className="mt-8">
            <ButtonLink href={site.cvHref} variant="secondary">
              {site.cvLabel}
            </ButtonLink>
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
