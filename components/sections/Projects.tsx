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
      intro="Une sélection de projets réalisés durant ma formation et en autonomie."
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
