import type { Project } from "./types";

export const projects: Project[] = [
  {
    slug: "projet-aussonne",
    title: "Projet Aussonne — Application web de gestion",
    summary:
      "Développement d’une application web en PHP permettant la gestion des adhérents, équipes, entraîneurs et actualités d’une association.",
    role: "Projet BTS en binôme",
    stack: ["PHP", "SQL", "JavaScript / AJAX", "Bootstrap"],
    year: "2022",
  },
  {
    slug: "todo-list",
    title: "Todo List",
    summary:
      "Application de gestion de tâches développée en JavaScript vanilla, permettant d’ajouter, modifier, supprimer et marquer des tâches comme terminées. Projet réalisé pour travailler la manipulation du DOM, les événements et la gestion dynamique des données côté navigateur.",
    role: "Projet solo",
    stack: ["JavaScript", "HTML", "CSS"],
    year: "2026",
  },
];
