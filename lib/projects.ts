import { projects } from "@/content/projects";
import type { Project } from "@/content/types";

export function getProjects(): Project[] {
  return projects;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
