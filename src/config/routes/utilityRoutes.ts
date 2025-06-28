
import { RouteConfig } from "../siteRoutes";

export const utilitaireRoutes: RouteConfig[] = [
  { path: "/inscription", name: "Inscription", description: "Page d'inscription", category: "Utilitaires" },
  { path: "/merci", name: "Merci", description: "Page de remerciement", category: "Utilitaires" },
  { path: "/mentions-legales", name: "Mentions Légales", description: "Mentions légales", category: "Utilitaires" },
  { path: "/confidentialite", name: "Confidentialité", description: "Politique de confidentialité", category: "Utilitaires" },
  { path: "/cgv", name: "CGV", description: "Conditions générales de vente", category: "Utilitaires" },
];

export const webinaireRoutes: RouteConfig[] = [
  { path: "/webinaires", name: "Webinaires", description: "Webinaires IA", category: "Webinaires" },
  { path: "/evenements", name: "Événements", description: "Événements IA", category: "Webinaires" },
  { path: "/actualites", name: "Actualités", description: "Actualités IA", category: "Webinaires" },
];

export const casEtudeRoutes: RouteConfig[] = [
  { path: "/casusageia1", name: "Cas Usage IA #1", description: "Étude de cas IA", category: "Cas d'Études" },
];

export const certificationAvanceeRoutes: RouteConfig[] = [
  { path: "/certificationia10", name: "Certification IA #10", description: "Certification IA avancée", category: "Certifications Avancées" },
];
