import type { ParcoursItem } from "./types";

export const parcours: ParcoursItem[] = [
  {
    id: "mcdonalds",
    kind: "experience",
    period: "2025 — 2026",
    title: "Assistant de direction",
    place: "McDonald’s",
    description:
      "Gestion et organisation opérationnelle, recrutement, élaboration des plannings, suivi des équipes et accompagnement des collaborateurs.",
  },
  {
    id: "bts-sio-slam",
    kind: "formation",
    period: "2021 — 2023",
    title: "BTS Services Informatiques aux Organisations — option SLAM",
    place: "Lycée Carcouët",
    description:
      "Formation orientée développement logiciel et applications, avec pratique de PHP, JavaScript, SQL, Java, C# et développement d’API.",
  },
  {
    id: "informaid",
    kind: "experience",
    period: "2022",
    title: "Stagiaire développeur",
    place: "Informaid Rondeau",
    description:
      "Participation à la refactorisation d’une partie d’une application Symfony. Travail autonome à distance et échanges réguliers avec l’équipe.",
  },
  {
    id: "mairie-carquefou",
    kind: "experience",
    period: "2021",
    title: "Stagiaire informatique",
    place: "Mairie de Carquefou",
    description:
      "Maintenance et déploiement de solutions informatiques, ainsi que participation à des travaux liés aux solutions de billetterie du Théâtre de la Fleuriaye.",
  },
];
