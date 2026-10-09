import Link from "next/link";
import type { Project } from "@/content/types";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col border border-line bg-paper p-6 transition-colors hover:border-ink/25">
      <div
        aria-hidden="true"
        className="mb-6 flex h-36 items-end border border-line bg-paper-muted px-4 py-3"
      >
        <span className="font-mono text-xs tracking-wide text-muted">
          {project.year}
        </span>
      </div>

      <p className="text-xs font-medium uppercase tracking-wider text-accent">
        {project.role}
      </p>
      <h3 className="mt-2 font-serif text-2xl tracking-tight text-ink">
        <Link
          href={`/projets/${project.slug}`}
          className="rounded-sm hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
        >
          {project.title}
        </Link>
      </h3>
      <p className="mt-3 flex-1 text-sm leading-6 text-muted">
        {project.summary}
      </p>
      <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies utilisées">
        {project.stack.map((item) => (
          <li
            key={item}
            className="border border-line px-2 py-1 text-xs text-muted"
          >
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
