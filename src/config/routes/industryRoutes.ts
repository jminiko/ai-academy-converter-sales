
import { RouteConfig } from "../siteRoutes";

export const industrieRoutes: RouteConfig[] = [
  { path: "/agriculture-ia", name: "Agriculture IA", description: "IA pour l'agriculture", category: "Industries" },
  { path: "/industrie-40", name: "Industrie 4.0", description: "IA pour l'industrie", category: "Industries" },
  { path: "/tourism-ia", name: "Tourisme IA", description: "IA pour le tourisme", category: "Industries" },
  { path: "/sport-ia", name: "Sport IA", description: "IA pour le sport", category: "Industries" },
  { path: "/assurance-ia", name: "Assurance IA", description: "IA pour l'assurance", category: "Industries" },
];

export const secteurRoutes: RouteConfig[] = [
  { path: "/sante", name: "Santé", description: "IA pour le secteur santé", category: "Secteurs" },
  { path: "/finance", name: "Finance", description: "IA pour la finance", category: "Secteurs" },
  { path: "/education", name: "Éducation", description: "IA pour l'éducation", category: "Secteurs" },
  { path: "/automobile", name: "Automobile", description: "IA pour l'automobile", category: "Secteurs" },
  { path: "/retail", name: "Retail", description: "IA pour le retail", category: "Secteurs" },
  { path: "/defense", name: "Défense", description: "IA pour la défense", category: "Secteurs" },
  { path: "/maritime", name: "Maritime", description: "IA pour le secteur maritime", category: "Secteurs" },
  { path: "/btp", name: "BTP", description: "IA pour le BTP", category: "Secteurs" },
  { path: "/secteur-banque-assurance", name: "Banque & Assurance", description: "IA banque et assurance", category: "Secteurs" },
  { path: "/secteur-hotellerie", name: "Hôtellerie", description: "IA pour l'hôtellerie", category: "Secteurs" },
];

export const secteurSpecialiseRoutes: RouteConfig[] = [
  { path: "/sante-cardiologie", name: "Cardiologie IA", description: "IA en cardiologie", category: "Secteurs Spécialisés" },
  { path: "/sante-radiologie", name: "Radiologie IA", description: "IA en radiologie", category: "Secteurs Spécialisés" },
  { path: "/sante-oncologie", name: "Oncologie IA", description: "IA en oncologie", category: "Secteurs Spécialisés" },
];
