
import { RouteConfig } from "@/config/siteRoutes";

// Utilitaire pour valider qu'une route est bien formée
export const validateRoute = (route: RouteConfig): boolean => {
  return !!(route.path && route.name && route.category);
};

// Utilitaire pour générer automatiquement des routes à partir d'un pattern
export const generateRoutes = (
  basePath: string, 
  names: string[], 
  category: string
): RouteConfig[] => {
  return names.map(name => ({
    path: `${basePath}/${name.toLowerCase().replace(/\s+/g, '-')}`,
    name,
    category
  }));
};

// Utilitaire pour créer des liens de navigation
export const createNavLink = (route: RouteConfig) => ({
  to: route.path,
  label: route.name,
  description: route.description
});
