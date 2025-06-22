
export interface RouteConfig {
  path: string;
  name: string;
  description?: string;
  category: string;
}

// Configuration centralisée de toutes les routes du site - Optimisée pour 500+ pages
export const siteRoutes: RouteConfig[] = [
  // Pages principales
  { path: "/", name: "Accueil", description: "Page d'accueil Twenty One Talents", category: "Principal" },
  { path: "/formations", name: "Formations", description: "Catalogue des formations IA", category: "Principal" },
  { path: "/certifications", name: "Certifications", description: "Certifications professionnelles", category: "Principal" },
  { path: "/contact", name: "Contact", description: "Nous contacter", category: "Principal" },
  { path: "/sitemap", name: "Plan du Site", description: "Navigation complète du site", category: "Principal" },
  
  // Formations existantes (16 pages)
  { path: "/formation-ia-explicable", name: "IA Explicable", description: "Formation IA explicable et interprétable", category: "Formations" },
  { path: "/formation-deep-learning-avance", name: "Deep Learning Avancé", description: "Formation deep learning expert", category: "Formations" },
  { path: "/formation-transformers-avances", name: "Transformers Avancés", description: "Architecture transformer moderne", category: "Formations" },
  { path: "/formation-modeles-generatifs-avances", name: "Modèles Génératifs", description: "IA générative et création", category: "Formations" },
  { path: "/formation-edge-ai", name: "Edge AI", description: "IA embarquée et périphérique", category: "Formations" },
  { path: "/formation-nlp-avance", name: "NLP Avancé", description: "Traitement du langage naturel", category: "Formations" },
  { path: "/formation-ia-quantique", name: "IA Quantique", description: "Intelligence artificielle quantique", category: "Formations" },
  { path: "/formation-ia-industrie", name: "IA Industrie", description: "IA pour l'industrie 4.0", category: "Formations" },
  { path: "/formation-ia-sante", name: "IA Santé", description: "IA médicale et e-santé", category: "Formations" },
  { path: "/formation-ia-ethique", name: "IA Éthique", description: "IA responsable et éthique", category: "Formations" },
  { path: "/formation-ia-retail", name: "IA Retail", description: "IA pour le commerce", category: "Formations" },
  { path: "/formation-ia-energie", name: "IA Énergie", description: "IA pour l'énergie", category: "Formations" },
  { path: "/formation-mlops-production", name: "MLOps Production", description: "MLOps en production", category: "Formations" },
  { path: "/formation-optimisation-ia", name: "Optimisation IA", description: "Optimisation des modèles IA", category: "Formations" },
  { path: "/formation-ia-banque", name: "IA Banque", description: "IA pour les services bancaires", category: "Formations" },
  { path: "/formation-ia-assurance", name: "IA Assurance", description: "IA pour l'assurance", category: "Formations" },

  // Formations avancées (14 pages)
  { path: "/mlops", name: "MLOps", description: "DevOps pour Machine Learning", category: "Formations Avancées" },
  { path: "/robotics-ai", name: "Robotique IA", description: "Robotique intelligente", category: "Formations Avancées" },
  { path: "/generative-ai", name: "IA Générative", description: "Génération de contenu IA", category: "Formations Avancées" },
  { path: "/nlp", name: "NLP", description: "Traitement du langage naturel", category: "Formations Avancées" },
  { path: "/graphql", name: "GraphQL", description: "API GraphQL moderne", category: "Formations Avancées" },
  { path: "/realtime-ai", name: "IA Temps Réel", description: "IA en temps réel", category: "Formations Avancées" },
  { path: "/ia-ethics", name: "Éthique IA", description: "IA éthique et responsable", category: "Formations Avancées" },
  { path: "/react-ia", name: "React IA", description: "React avec intelligence artificielle", category: "Formations Avancées" },
  { path: "/ia-music", name: "IA Musicale", description: "IA pour la création musicale", category: "Formations Avancées" },
  { path: "/ia-creative", name: "IA Créative", description: "IA pour la créativité", category: "Formations Avancées" },
  { path: "/formation-vehicule-autonome", name: "Véhicule Autonome", description: "IA pour véhicules autonomes", category: "Formations Avancées" },
  { path: "/formation-vision-ia", name: "Vision IA", description: "Computer vision avancée", category: "Formations Avancées" },
  { path: "/formation-reseaux-neurones", name: "Réseaux de Neurones", description: "Architecture neuronale", category: "Formations Avancées" },
  { path: "/machine-learning", name: "Machine Learning", description: "Apprentissage automatique", category: "Formations Avancées" },

  // Secteurs (9 pages)
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

  // Solutions (4 pages)
  { path: "/developpement-ia", name: "Développement IA", description: "Services de développement IA", category: "Solutions" },
  { path: "/conseil-strategique", name: "Conseil Stratégique", description: "Conseil en stratégie IA", category: "Solutions" },
  { path: "/audit-ia", name: "Audit IA", description: "Audit des systèmes IA", category: "Solutions" },
  { path: "/maintenance-ia", name: "Maintenance IA", description: "Maintenance des systèmes IA", category: "Solutions" },

  // Solutions avancées (4 pages)
  { path: "/conseil-transition", name: "Conseil Transition", description: "Accompagnement transformation IA", category: "Solutions Avancées" },
  { path: "/consulting-strategique", name: "Consulting Stratégique", description: "Consulting stratégique IA", category: "Solutions Avancées" },
  { path: "/formation-personnalisee", name: "Formation Personnalisée", description: "Formations sur mesure", category: "Solutions Avancées" },
  { path: "/ia-ethique-responsable", name: "IA Éthique Responsable", description: "Solutions IA éthiques", category: "Solutions Avancées" },

  // Guides (7 pages)
  { path: "/guide-debutant-ia", name: "Guide Débutant IA", description: "Guide pour débuter en IA", category: "Guides" },
  { path: "/guide-avance-ia", name: "Guide Avancé IA", description: "Guide IA expert", category: "Guides" },
  { path: "/guide-mlops", name: "Guide MLOps", description: "Guide MLOps complet", category: "Guides" },
  { path: "/guide-ia-2025", name: "Guide IA 2025", description: "Tendances IA 2025", category: "Guides" },
  { path: "/guide-implementation-ia", name: "Guide Implémentation IA", description: "Implémentation IA entreprise", category: "Guides" },
  { path: "/guide-optimisation-modeles", name: "Guide Optimisation Modèles", description: "Optimisation modèles IA", category: "Guides" },
  { path: "/guide-automatisation-bureau", name: "Guide Automatisation Bureau", description: "Automatisation tâches bureau", category: "Guides" },

  // Guides avancés (2 pages)
  { path: "/guide-debutant-chatgpt", name: "Guide ChatGPT Débutant", description: "Débuter avec ChatGPT", category: "Guides Avancés" },
  { path: "/guide-prompt-avance", name: "Guide Prompt Avancé", description: "Techniques de prompt avancées", category: "Guides Avancés" },

  // Technologies (3 pages)
  { path: "/tensorflow", name: "TensorFlow", description: "Formation TensorFlow", category: "Technologies" },
  { path: "/pytorch", name: "PyTorch", description: "Formation PyTorch", category: "Technologies" },
  { path: "/python-ia", name: "Python IA", description: "Python pour l'IA", category: "Technologies" },

  // Outils (1 page)
  { path: "/outilgpt4", name: "Outil GPT-4", description: "Outil GPT-4 interactif", category: "Outils" },

  // Applications (1 page)
  { path: "/agriculture-ia", name: "Agriculture IA", description: "IA pour l'agriculture", category: "Applications" },

  // Webinaires (1 page)
  { path: "/webinaires", name: "Webinaires", description: "Webinaires IA", category: "Webinaires" },

  // Cas d'études (1 page)
  { path: "/casusageia1", name: "Cas Usage IA #1", description: "Étude de cas IA", category: "Cas d'Études" },

  // Certifications avancées (1 page)
  { path: "/certificationia10", name: "Certification IA #10", description: "Certification IA avancée", category: "Certifications Avancées" },

  // Pages en anglais (2 pages)
  { path: "/en/ai-training-finance", name: "AI Training Finance", description: "AI Training for Finance", category: "English Pages" },
  { path: "/en/contact", name: "Contact EN", description: "Contact page in English", category: "English Pages" },

  // Pages spéciales
  { path: "/formationiafinance", name: "Formation IA Finance", description: "Formation IA spécialisée finance", category: "Formations Spécialisées" },
  { path: "/inscription", name: "Inscription", description: "Page d'inscription", category: "Utilitaires" },
  { path: "/merci", name: "Merci", description: "Page de remerciement", category: "Utilitaires" },

  // Méthodes - Section prête pour expansion
  { path: "/methode-ia-apprentissage", name: "Méthode IA Apprentissage", description: "Méthodologie d'apprentissage IA", category: "Méthodes" },
  { path: "/methode-deep-learning", name: "Méthode Deep Learning", description: "Méthodologie Deep Learning", category: "Méthodes" },
  { path: "/methode-data-science", name: "Méthode Data Science", description: "Méthodologie Data Science", category: "Méthodes" },
  { path: "/methode-mlops", name: "Méthode MLOps", description: "Méthodologie MLOps", category: "Méthodes" },

  // Réglementation - Section prête pour expansion
  { path: "/rgpd-ia", name: "RGPD & IA", description: "Conformité RGPD pour l'IA", category: "Réglementation" },
  { path: "/ethique-ia", name: "Éthique IA", description: "Réglementation éthique IA", category: "Réglementation" },
  { path: "/conformite-ia", name: "Conformité IA", description: "Conformité réglementaire IA", category: "Réglementation" },
  { path: "/audit-conformite", name: "Audit Conformité", description: "Audit de conformité IA", category: "Réglementation" },
];

// Fonction pour organiser les routes par catégorie - Optimisée
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
    "Principal", "Formations", "Formations Avancées", "Secteurs", 
    "Solutions", "Solutions Avancées", "Guides", "Guides Avancés",
    "Technologies", "Méthodes", "Réglementation", "Outils", 
    "Applications", "Webinaires", "Cas d'Études", "Certifications Avancées",
    "English Pages", "Formations Spécialisées", "Utilitaires"
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
