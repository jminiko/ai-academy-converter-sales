
import { RouteConfig } from "../siteRoutes";

export const expertiseRoutes: RouteConfig[] = [
  { path: "/expertise-data-science", name: "Expertise Data Science", description: "Solutions Data Science avancées", category: "Expertises" },
  { path: "/expertise-mlops", name: "Expertise MLOps", description: "Déploiement ML en production", category: "Expertises" },
  { path: "/expertise-vision-ordinateur", name: "Expertise Vision par Ordinateur", description: "Solutions de computer vision", category: "Expertises" },
  { path: "/expertise-nlp", name: "Expertise NLP", description: "Traitement du langage naturel", category: "Expertises" },
];

export const certificationProRoutes: RouteConfig[] = [
  { path: "/certification-data-scientist-pro", name: "Certification Data Scientist Pro", description: "Certification professionnelle Data Science", category: "Certifications Pro" },
  { path: "/certification-ml-engineer-pro", name: "Certification ML Engineer Pro", description: "Certification ingénieur Machine Learning", category: "Certifications Pro" },
  { path: "/certification-ai-product-manager", name: "Certification AI Product Manager", description: "Certification chef de produit IA", category: "Certifications Pro" },
];

export const actualiteRoutes: RouteConfig[] = [
  { path: "/tendances-ia-2025", name: "Tendances IA 2025", description: "Principales tendances IA pour 2025", category: "Actualités" },
  { path: "/innovations-ia-2025", name: "Innovations IA 2025", description: "Dernières innovations technologiques IA", category: "Actualités" },
  { path: "/revolution-ia-2025", name: "Révolution IA 2025", description: "Comment l'IA transforme la société", category: "Actualités" },
];

export const partenaireRoutes: RouteConfig[] = [
  { path: "/partenaire-azure", name: "Partenaire Microsoft Azure", description: "Solutions IA sur Azure", category: "Partenaires" },
  { path: "/partenaire-openai", name: "Partenaire OpenAI", description: "Solutions avec GPT et IA générative", category: "Partenaires" },
  { path: "/partenaire-google-cloud", name: "Partenaire Google Cloud", description: "Solutions IA avec Google Cloud", category: "Partenaires" },
];

export const evenementRoutes: RouteConfig[] = [
  { path: "/conference-mondiale-ia-2025", name: "Conférence Mondiale IA 2025", description: "Plus grand événement IA de l'année", category: "Événements" },
  { path: "/sommet-ia-2025", name: "Sommet IA 2025", description: "Rendez-vous des dirigeants IA", category: "Événements" },
  { path: "/hackathon-ia-2025", name: "Hackathon IA 2025", description: "48h d'innovation IA intensive", category: "Événements" },
];
