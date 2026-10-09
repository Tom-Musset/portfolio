import { parcours } from "@/content/parcours";
import { Section } from "@/components/ui/Section";

const kindLabel: Record<(typeof parcours)[number]["kind"], string> = {
  formation: "Formation",
  experience: "Expérience",
  objectif: "Objectif",
};

export function Parcours() {
  return (
    <Section
      id="parcours"
      eyebrow="Chemin"
      title="Parcours"
      intro="Formation et expériences professionnelles, du plus récent au plus ancien."
    >
      <ol className="relative space-y-0 border-l border-line pl-6 sm:pl-8">
        {parcours.map((item) => (
          <li key={item.id} className="relative pb-12 last:pb-0">
            <span
              aria-hidden="true"
              className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full border border-accent bg-paper sm:-left-[37px]"
            />
            <p className="text-xs font-medium uppercase tracking-wider text-accent">
              {kindLabel[item.kind]} · {item.period}
            </p>
            <h3 className="mt-2 font-serif text-2xl tracking-tight text-ink">
              {item.title}
            </h3>
            <p className="mt-1 text-sm text-ink/80">{item.place}</p>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
