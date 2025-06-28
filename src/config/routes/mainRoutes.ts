
import { RouteConfig } from "../siteRoutes";

export const mainRoutes: RouteConfig[] = [
  { path: "/", name: "Accueil", description: "Page d'accueil Twenty One Talents", category: "Principal" },
  { path: "/formations", name: "Formations", description: "Catalogue des formations IA", category: "Principal" },
  { path: "/certifications", name: "Certifications", description: "Certifications professionnelles", category: "Principal" },
  { path: "/contact", name: "Contact", description: "Nous contacter", category: "Principal" },
  { path: "/sitemap", name: "Plan du Site", description: "Navigation complète du site", category: "Principal" },
  { path: "/about", name: "À Propos", description: "Notre entreprise", category: "Principal" },
  { path: "/services", name: "Services", description: "Nos services IA", category: "Principal" },
  { path: "/blog", name: "Blog", description: "Actualités IA", category: "Principal" },
  { path: "/faq", name: "FAQ", description: "Questions fréquentes", category: "Principal" },
  { path: "/tarifs", name: "Tarifs", description: "Nos prix", category: "Principal" },
];
