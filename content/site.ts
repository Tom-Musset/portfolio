import type { SiteContent } from "./types";

export const site: SiteContent = {
  name: "Tom MUSSET",
  role: "Développeur full-stack",
  tagline:
    "En recherche d’alternance, je souhaite développer mes compétences dans une formation orientée IA/Data",
  availability:
    "Disponible dès maintenant, idéalement au Nord de la région Nantaise. Le rythme de l’alternance reste à définir.",
  email: "tommusset@hotmail.fr",
  cvLabel: "Mon CV",
  cvHref: "#cv-placeholder",
  nav: [
    { href: "/#accueil", label: "Accueil" },
    { href: "/#projets", label: "Projets" },
    { href: "/#competences", label: "Compétences" },
    { href: "/#parcours", label: "Parcours" },
    { href: "/#contact", label: "Contact" },
  ],
  socials: [
    { label: "GitHub", href: "https://github.com/Tom-Musset" },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/tom-musset-5aa5832ba",
    },
  ],
};
