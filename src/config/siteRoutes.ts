
export interface RouteConfig {
  path: string;
  name: string;
  description?: string;
  category: string;
}

// Configuration centralisée de toutes les routes du site
export const siteRoutes: RouteConfig[] = [
  // Pages principales
  { path: "/", name: "Accueil", description: "Page d'accueil Twenty One Talents", category: "Principal" },
  { path: "/formations", name: "Formations", description: "Catalogue des formations IA", category: "Principal" },
  { path: "/certifications", name: "Certifications", description: "Certifications professionnelles", category: "Principal" },
  { path: "/contact", name: "Contact", description: "Nous contacter", category: "Principal" },
  
  // Formations existantes
  { path: "/formation-ia-explicable", name: "IA Explicable", category: "Formations" },
  { path: "/formation-deep-learning-avance", name: "Deep Learning Avancé", category: "Formations" },
  { path: "/formation-transformers-avances", name: "Transformers Avancés", category: "Formations" },
  { path: "/formation-modeles-generatifs-avances", name: "Modèles Génératifs", category: "Formations" },
  { path: "/formation-edge-ai", name: "Edge AI", category: "Formations" },
  { path: "/formation-nlp-avance", name: "NLP Avancé", category: "Formations" },
  { path: "/formation-ia-quantique", name: "IA Quantique", category: "Formations" },
  { path: "/formation-ia-industrie", name: "IA Industrie", category: "Formations" },
  { path: "/formation-ia-sante", name: "IA Santé", category: "Formations" },
  { path: "/formation-ia-ethique", name: "IA Éthique", category: "Formations" },
  { path: "/formation-ia-retail", name: "IA Retail", category: "Formations" },
  { path: "/formation-ia-energie", name: "IA Énergie", category: "Formations" },
  { path: "/formation-mlops-production", name: "MLOps Production", category: "Formations" },
  { path: "/formation-optimisation-ia", name: "Optimisation IA", category: "Formations" },
  { path: "/formation-ia-banque", name: "IA Banque", category: "Formations" },
  { path: "/formation-ia-assurance", name: "IA Assurance", category: "Formations" },
  
  // Secteurs
  { path: "/sante", name: "Santé", category: "Secteurs" },
  { path: "/finance", name: "Finance", category: "Secteurs" },
  { path: "/education", name: "Éducation", category: "Secteurs" },
  { path: "/automobile", name: "Automobile", category: "Secteurs" },
  { path: "/retail", name: "Retail", category: "Secteurs" },
  { path: "/defense", name: "Défense", category: "Secteurs" },
  { path: "/maritime", name: "Maritime", category: "Secteurs" },
  { path: "/btp", name: "BTP", category: "Secteurs" },
  
  // Solutions
  { path: "/developpement-ia", name: "Développement IA", category: "Solutions" },
  { path: "/conseil-strategique", name: "Conseil Stratégique", category: "Solutions" },
  { path: "/audit-ia", name: "Audit IA", category: "Solutions" },
  { path: "/maintenance-ia", name: "Maintenance IA", category: "Solutions" },
  
  // Outils
  { path: "/outilgpt4", name: "Outil GPT-4", category: "Outils" },
  
  // Guides
  { path: "/guide-debutant-ia", name: "Guide Débutant IA", category: "Guides" },
  { path: "/guide-avance-ia", name: "Guide Avancé IA", category: "Guides" },
  { path: "/guide-mlops", name: "Guide MLOps", category: "Guides" },
  { path: "/guide-ia-2025", name: "Guide IA 2025", category: "Guides" },
  
  // Technologies
  { path: "/tensorflow", name: "TensorFlow", category: "Technologies" },
  { path: "/pytorch", name: "PyTorch", category: "Technologies" },
  { path: "/python-ia", name: "Python IA", category: "Technologies" },
];

// Fonction pour organiser les routes par catégorie
export const getRoutesByCategory = () => {
  const categories: { [key: string]: RouteConfig[] } = {};
  
  siteRoutes.forEach(route => {
    if (!categories[route.category]) {
      categories[route.category] = [];
    }
    categories[route.category].push(route);
  });
  
  return categories;
};

// Fonction pour obtenir le nombre total de pages
export const getTotalPages = () => siteRoutes.length;
