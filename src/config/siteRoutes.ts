
// Imports des routes modulaires
import { mainRoutes } from './routes/mainRoutes';
import { 
  expertiseRoutes, 
  certificationProRoutes, 
  actualiteRoutes, 
  partenaireRoutes, 
  evenementRoutes 
} from './routes/expertiseRoutes';
import { 
  formationPrincipaleRoutes, 
  formationNiveauRoutes, 
  formationAvanceeRoutes 
} from './routes/formationRoutes';
import { 
  industrieRoutes, 
  secteurRoutes, 
  secteurSpecialiseRoutes 
} from './routes/industryRoutes';
import { 
  technologieRoutes, 
  solutionRoutes, 
  outilRoutes 
} from './routes/technologyRoutes';
import { 
  guideRoutes, 
  conceptRoutes, 
  metierRoutes, 
  conseilRoutes, 
  methodeRoutes, 
  reglementationRoutes 
} from './routes/resourceRoutes';
import { 
  utilitaireRoutes, 
  webinaireRoutes, 
  casEtudeRoutes, 
  certificationAvanceeRoutes 
} from './routes/utilityRoutes';

export interface RouteConfig {
  path: string;
  name: string;
  description?: string;
  category: string;
}

// Configuration centralisée de toutes les routes du site - 500+ pages optimisées
export const siteRoutes: RouteConfig[] = [
  ...mainRoutes,
  ...expertiseRoutes,
  ...certificationProRoutes,
  ...actualiteRoutes,
  ...partenaireRoutes,
  ...evenementRoutes,
  ...formationPrincipaleRoutes,
  ...formationNiveauRoutes,
  ...formationAvanceeRoutes,
  ...industrieRoutes,
  ...secteurRoutes,
  ...secteurSpecialiseRoutes,
  ...technologieRoutes,
  ...solutionRoutes,
  ...outilRoutes,
  ...guideRoutes,
  ...conceptRoutes,
  ...metierRoutes,
  ...conseilRoutes,
  ...methodeRoutes,
  ...reglementationRoutes,
  ...utilitaireRoutes,
  ...webinaireRoutes,
  ...casEtudeRoutes,
  ...certificationAvanceeRoutes,
];

// Fonction pour organiser les routes par catégorie - Optimisée pour 500+ pages
export const getRoutesByCategory = () => {
  const categories: { [key: string]: RouteConfig[] } = {};
  
  siteRoutes.forEach(route => {
    if (!categories[route.category]) {
      categories[route.category] = [];
    }
    categories[route.category].push(route);
  });
  
  // Trier les catégories par ordre d'importance
  const categoryOrder = [
    "Principal", "Expertises", "Certifications Pro", "Actualités", "Partenaires", "Événements",
    "Formations", "Formations Niveau", "Formations Avancées", 
    "Industries", "Secteurs", "Secteurs Spécialisés", "Technologies", 
    "Solutions", "Outils", "Guides", "Concepts IA", "Métiers IA",
    "Conseils", "Méthodes", "Réglementation", "Webinaires", 
    "Cas d'Études", "Certifications Avancées", "Utilitaires"
  ];

  const sortedCategories: { [key: string]: RouteConfig[] } = {};
  categoryOrder.forEach(category => {
    if (categories[category]) {
      sortedCategories[category] = categories[category];
    }
  });

  // Ajouter les catégories restantes
  Object.keys(categories).forEach(category => {
    if (!sortedCategories[category]) {
      sortedCategories[category] = categories[category];
    }
  });

  return sortedCategories;
};

// Fonction pour obtenir le nombre total de pages
export const getTotalPages = () => siteRoutes.length;

// Fonction pour rechercher des routes
export const searchRoutes = (query: string): RouteConfig[] => {
  const lowercaseQuery = query.toLowerCase();
  return siteRoutes.filter(route => 
    route.name.toLowerCase().includes(lowercaseQuery) ||
    route.description?.toLowerCase().includes(lowercaseQuery) ||
    route.category.toLowerCase().includes(lowercaseQuery)
  );
};

// Fonction pour obtenir les routes par catégorie spécifique
export const getRoutesBySpecificCategory = (category: string): RouteConfig[] => {
  return siteRoutes.filter(route => route.category === category);
};
