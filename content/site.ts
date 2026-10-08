import type { SiteContent } from "./types";

export const site: SiteContent = {
  name: "[Prénom Nom]",
  role: "Développeur full-stack — placeholder",
  tagline:
    "Présentation temporaire. Ce texte sera remplacé par une introduction réelle, courte et factuelle.",
  availability:
    "Recherche d’alternance en développement full-stack — période et rythme à préciser.",
  email: "email.placeholder@example.com",
  cvLabel: "CV (placeholder)",
  cvHref: "#cv-placeholder",
  nav: [
    { href: "/#accueil", label: "Accueil" },
    { href: "/#projets", label: "Projets" },
    { href: "/#parcours", label: "Parcours" },
    { href: "/#competences", label: "Compétences" },
    { href: "/#contact", label: "Contact" },
  ],
  socials: [
    { label: "GitHub (placeholder)", href: "#github-placeholder" },
    { label: "LinkedIn (placeholder)", href: "#linkedin-placeholder" },
  ],
};
