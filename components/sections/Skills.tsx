import { skillGroups } from "@/content/skills";
import { Section } from "@/components/ui/Section";

export function Skills() {
  return (
    <Section
      id="competences"
      eyebrow="Stack"
      title="Compétences"
      intro="Groupes préparés pour le contenu réel. Les libellés ci-dessous sont des placeholders, pas un inventaire de compétences."
    >
      <ul className="grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <li key={group.id} className="border-t border-line pt-5">
            <h3 className="text-sm font-medium tracking-wide text-ink">
              {group.title}
            </h3>
            <ul className="mt-4 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="text-sm leading-6 text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
