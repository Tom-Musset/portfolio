import type { ParcoursItem } from "./types";

export const parcours: ParcoursItem[] = [
  {
    id: "formation",
    kind: "formation",
    period: "AAAA — AAAA",
    title: "[Placeholder] Formation",
    place: "Établissement à préciser",
    description:
      "Intitulé, niveau et compétences visées seront indiqués ici. Aucune formation fictive.",
  },
  {
    id: "experience",
    kind: "experience",
    period: "AAAA — AAAA",
    title: "[Placeholder] Expérience",
    place: "Organisation à préciser",
    description:
      "Missions réelles, stack utilisée et résultats seront ajoutés ici. Cette entrée est une maquette.",
  },
  {
    id: "alternance",
    kind: "objectif",
    period: "À partir de AAAA",
    title: "[Placeholder] Alternance recherchée",
    place: "Développement full-stack",
    description:
      "Rythme, durée, zone géographique et type d’équipe seront précisés. Placeholder uniquement.",
  },
];
