import { getProjects } from "@/lib/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Section } from "@/components/ui/Section";

export function Projects() {
  const projects = getProjects();

  return (
    <Section
      id="projets"
      eyebrow="Sélection"
      title="Projets"
      intro="Trois cartes de démonstration. Elles seront remplacées par des projets réels, sans invention de réalisations."
    >
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.slug}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </Section>
  );
}
