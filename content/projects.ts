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
    repo: "https://github.com/Tom-Musset/ProjetAussonne",
    detail: [
      {
        heading: "Contexte",
        paragraphs: [
          "Projet de fin de BTS Services Informatiques aux Organisations, option SLAM, réalisé en binôme en 2022. L’objectif était de développer une application web pour gérer les informations d’une structure sportive et culturelle.",
        ],
      },
      {
        heading: "Fonctionnalités",
        paragraphs: [
          "L’application distinguait quatre profils : visiteur, adhérent, entraîneur et administrateur. Selon le profil, les utilisateurs pouvaient consulter les informations publiques, accéder à leur profil ou gérer les données de l’application.",
          "Le projet comprenait notamment la gestion des adhérents, des équipes, des entraîneurs et des spécialités sportives, ainsi qu’un système d’actualités filtrées dynamiquement.",
        ],
      },
      {
        heading: "Environnement technique",
        items: [
          {
            label: "Backend",
            text: "PHP orienté objet, avec une architecture MVC.",
          },
          {
            label: "Base de données",
            text: "MySQL, accès aux données avec PDO et requêtes préparées.",
          },
          {
            label: "Frontend",
            text: "HTML, CSS, Bootstrap et JavaScript.",
          },
          {
            label: "Interactions dynamiques",
            text: "AJAX avec réponses JSON.",
          },
          {
            label: "Travail collaboratif",
            text: "Git, branches et pull requests.",
          },
        ],
      },
      {
        heading: "Retour d’expérience",
        paragraphs: [
          "Avec le recul, ce projet constitue une première expérience de développement d’une application web structurée, associant logique métier, base de données relationnelle et gestion de plusieurs profils utilisateurs.",
        ],
      },
    ],
  },
  {
    slug: "todo-list",
    title: "Todo List",
    summary:
    "Application de gestion de tâches développée en JavaScript vanilla. Elle permet d’ajouter et de supprimer des tâches, de marquer les tâches comme terminées et de filtrer leur affichage. Ce projet personnel m’a permis de reprendre JavaScript et de travailler la manipulation du DOM, les événements, les tableaux et la sauvegarde des données dans le navigateur avec localStorage.",
    role: "Projet personnel",
    stack: ["JavaScript", "HTML", "CSS", "localStorage"],
    year: "2026",
    repo: "https://github.com/Tom-Musset/todo-list-javascript",
  },
];
