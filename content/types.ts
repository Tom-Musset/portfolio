export type NavItem = {
  href: string;
  label: string;
};

export type SocialLink = {
  label: string;
  href: string;
};

export type SiteContent = {
  name: string;
  role: string;
  tagline: string;
  availability: string;
  email: string;
  cvLabel: string;
  cvHref: string;
  nav: NavItem[];
  socials: SocialLink[];
};

export type ProjectDetailItem = {
  label: string;
  text: string;
};

export type ProjectDetailSection = {
  heading: string;
  paragraphs?: string[];
  items?: ProjectDetailItem[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  stack: string[];
  year: string;
  repo?: string;
  detail?: ProjectDetailSection[];
};

export type SkillGroup = {
  id: string;
  title: string;
  items: string[];
};

export type ParcoursItem = {
  id: string;
  kind: "formation" | "experience" | "objectif";
  period: string;
  title: string;
  place: string;
  description: string;
};
