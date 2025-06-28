
import { RouteConfig } from "../siteRoutes";

export const guideRoutes: RouteConfig[] = [
  { path: "/guide-debutant-ia", name: "Guide Débutant IA", description: "Guide pour débuter en IA", category: "Guides" },
  { path: "/guide-avance-ia", name: "Guide Avancé IA", description: "Guide IA expert", category: "Guides" },
  { path: "/guide-ia-2025", name: "Guide IA 2025", description: "Tendances IA 2025", category: "Guides" },
  { path: "/guide-debutant-chatgpt", name: "Guide ChatGPT Débutant", description: "Débuter avec ChatGPT", category: "Guides" },
  { path: "/guide-prompt-avance", name: "Guide Prompt Avancé", description: "Techniques de prompt avancées", category: "Guides" },
];

export const conceptRoutes: RouteConfig[] = [
  { path: "/reseaux-neurones", name: "Réseaux de Neurones", description: "Comprendre les réseaux de neurones", category: "Concepts IA" },
  { path: "/apprentissage-automatique", name: "Apprentissage Automatique", description: "Bases du machine learning", category: "Concepts IA" },
  { path: "/ia-symbolique", name: "IA Symbolique", description: "Intelligence artificielle symbolique", category: "Concepts IA" },
  { path: "/ia-connexionniste", name: "IA Connexionniste", description: "Approche connexionniste", category: "Concepts IA" },
];

export const metierRoutes: RouteConfig[] = [
  { path: "/ia-architecte", name: "IA Architecte", description: "IA pour les architectes", category: "Métiers IA" },
  { path: "/ia-journaliste", name: "IA Journaliste", description: "IA pour les journalistes", category: "Métiers IA" },
  { path: "/ia-avocat", name: "IA Avocat", description: "IA pour les avocats", category: "Métiers IA" },
  { path: "/ia-medecin", name: "IA Médecin", description: "IA pour les médecins", category: "Métiers IA" },
];

export const conseilRoutes: RouteConfig[] = [
  { path: "/conseils-ia", name: "Conseils IA", description: "Conseils experts en IA", category: "Conseils" },
  { path: "/conseils-strategie", name: "Conseils Stratégie", description: "Stratégie IA", category: "Conseils" },
  { path: "/conseils-implementation", name: "Conseils Implémentation", description: "Implémentation IA", category: "Conseils" },
];

export const methodeRoutes: RouteConfig[] = [
  { path: "/methode-ia-apprentissage", name: "Méthode IA Apprentissage", description: "Méthodologie d'apprentissage IA", category: "Méthodes" },
  { path: "/methode-deep-learning", name: "Méthode Deep Learning", description: "Méthodologie Deep Learning", category: "Méthodes" },
  { path: "/methode-data-science", name: "Méthode Data Science", description: "Méthodologie Data Science", category: "Méthodes" },
  { path: "/methode-mlops", name: "Méthode MLOps", description: "Méthodologie MLOps", category: "Méthodes" },
];

export const reglementationRoutes: RouteConfig[] = [
  { path: "/rgpd-ia", name: "RGPD & IA", description: "Conformité RGPD pour l'IA", category: "Réglementation" },
  { path: "/ethique-ia", name: "Éthique IA", description: "Réglementation éthique IA", category: "Réglementation" },
  { path: "/conformite-ia", name: "Conformité IA", description: "Conformité réglementaire IA", category: "Réglementation" },
  { path: "/audit-conformite", name: "Audit Conformité", description: "Audit de conformité IA", category: "Réglementation" },
];
