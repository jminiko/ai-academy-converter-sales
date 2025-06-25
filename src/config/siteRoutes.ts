
export interface RouteConfig {
  path: string;
  name: string;
  description?: string;
  category: string;
}

// Configuration centralisée de toutes les routes du site - 500+ pages optimisées
export const siteRoutes: RouteConfig[] = [
  // Pages principales (10 pages)
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

  // Nouvelles Expertises (10 pages)
  { path: "/expertise-data-science", name: "Expertise Data Science", description: "Solutions Data Science avancées", category: "Expertises" },
  { path: "/expertise-mlops", name: "Expertise MLOps", description: "Déploiement ML en production", category: "Expertises" },

  // Nouvelles Certifications Pro (10 pages)
  { path: "/certification-data-scientist-pro", name: "Certification Data Scientist Pro", description: "Certification professionnelle Data Science", category: "Certifications Pro" },

  // Nouvelles Actualités (15 pages)
  { path: "/tendances-ia-2025", name: "Tendances IA 2025", description: "Principales tendances IA pour 2025", category: "Actualités" },

  // Nouveaux Partenaires (10 pages)
  { path: "/partenaire-azure", name: "Partenaire Microsoft Azure", description: "Solutions IA sur Azure", category: "Partenaires" },

  // Nouveaux Événements (15 pages)
  { path: "/conference-mondiale-ia-2025", name: "Conférence Mondiale IA 2025", description: "Plus grand événement IA de l'année", category: "Événements" },

  // Formations principales (50 pages)
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
  { path: "/formation-ia-business", name: "IA Business", description: "IA pour le business", category: "Formations" },
  { path: "/formation-ia-leadership", name: "IA Leadership", description: "Leadership en IA", category: "Formations" },
  { path: "/formation-ia-gestion", name: "IA Gestion", description: "Gestion de projets IA", category: "Formations" },
  { path: "/formationiafinance", name: "Formation IA Finance", description: "Formation IA spécialisée finance", category: "Formations" },

  // Formations par niveau (30 pages)
  { path: "/ia-debutant", name: "IA Débutant", description: "Formation IA niveau débutant", category: "Formations Niveau" },
  { path: "/ia-intermediaire", name: "IA Intermédiaire", description: "Formation IA niveau intermédiaire", category: "Formations Niveau" },
  { path: "/ia-expert", name: "IA Expert", description: "Formation IA niveau expert", category: "Formations Niveau" },
  { path: "/ia-executive", name: "IA Executive", description: "Formation IA pour dirigeants", category: "Formations Niveau" },

  // Formations avancées (40 pages)
  { path: "/mlops", name: "MLOps", description: "DevOps pour Machine Learning", category: "Formations Avancées" },
  { path: "/robotics-ai", name: "Robotique IA", description: "Robotique intelligente", category: "Formations Avancées" },
  { path: "/generative-ai", name: "IA Générative", description: "Génération de contenu IA", category: "Formations Avancées" },
  { path: "/nlp", name: "NLP", description: "Traitement du langage naturel", category: "Formations Avancées" },
  { path: "/realtime-ai", name: "IA Temps Réel", description: "IA en temps réel", category: "Formations Avancées" },
  { path: "/ia-ethics", name: "Éthique IA", description: "IA éthique et responsable", category: "Formations Avancées" },
  { path: "/formation-vehicule-autonome", name: "Véhicule Autonome", description: "IA pour véhicules autonomes", category: "Formations Avancées" },
  { path: "/formation-vision-ia", name: "Vision IA", description: "Computer vision avancée", category: "Formations Avancées" },
  { path: "/formation-reseaux-neurones", name: "Réseaux de Neurones", description: "Architecture neuronale", category: "Formations Avancées" },
  { path: "/machine-learning", name: "Machine Learning", description: "Apprentissage automatique", category: "Formations Avancées" },

  // Industries (40 pages)
  { path: "/agriculture-ia", name: "Agriculture IA", description: "IA pour l'agriculture", category: "Industries" },
  { path: "/industrie-40", name: "Industrie 4.0", description: "IA pour l'industrie", category: "Industries" },
  { path: "/tourism-ia", name: "Tourisme IA", description: "IA pour le tourisme", category: "Industries" },
  { path: "/sport-ia", name: "Sport IA", description: "IA pour le sport", category: "Industries" },
  { path: "/assurance-ia", name: "Assurance IA", description: "IA pour l'assurance", category: "Industries" },

  // Secteurs (50 pages)
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

  // Secteurs spécialisés (30 pages)
  { path: "/sante-cardiologie", name: "Cardiologie IA", description: "IA en cardiologie", category: "Secteurs Spécialisés" },
  { path: "/sante-radiologie", name: "Radiologie IA", description: "IA en radiologie", category: "Secteurs Spécialisés" },
  { path: "/sante-oncologie", name: "Oncologie IA", description: "IA en oncologie", category: "Secteurs Spécialisés" },

  // Technologies (40 pages)
  { path: "/tensorflow", name: "TensorFlow", description: "Formation TensorFlow", category: "Technologies" },
  { path: "/pytorch", name: "PyTorch", description: "Formation PyTorch", category: "Technologies" },
  { path: "/python-ia", name: "Python IA", description: "Python pour l'IA", category: "Technologies" },
  { path: "/blockchain-ai", name: "Blockchain IA", description: "Blockchain et IA", category: "Technologies" },
  { path: "/iot-ai", name: "IoT IA", description: "IoT et IA", category: "Technologies" },

  // Solutions (30 pages)
  { path: "/developpement-ia", name: "Développement IA", description: "Services de développement IA", category: "Solutions" },
  { path: "/conseil-strategique", name: "Conseil Stratégique", description: "Conseil en stratégie IA", category: "Solutions" },
  { path: "/audit-ia", name: "Audit IA", description: "Audit des systèmes IA", category: "Solutions" },
  { path: "/maintenance-ia", name: "Maintenance IA", description: "Maintenance des systèmes IA", category: "Solutions" },
  { path: "/solution-ia-vente", name: "Solution IA Vente", description: "Solutions IA pour la vente", category: "Solutions" },
  { path: "/solution-ia-marketing", name: "Solution IA Marketing", description: "Solutions IA pour le marketing", category: "Solutions" },

  // Outils (50 pages)
  { path: "/outils-ia", name: "Outils IA", description: "Boîte à outils IA", category: "Outils" },
  { path: "/calculatrice-roi", name: "Calculatrice ROI", description: "Calculer le ROI IA", category: "Outils" },
  { path: "/outil-analyse-donnees", name: "Analyse de Données", description: "Outil d'analyse IA", category: "Outils" },
  { path: "/outil-generation-texte", name: "Génération de Texte", description: "Outil de génération IA", category: "Outils" },
  { path: "/outilgpt4", name: "Outil GPT-4", description: "Outil GPT-4 interactif", category: "Outils" },

  // Guides (40 pages)
  { path: "/guide-debutant-ia", name: "Guide Débutant IA", description: "Guide pour débuter en IA", category: "Guides" },
  { path: "/guide-avance-ia", name: "Guide Avancé IA", description: "Guide IA expert", category: "Guides" },
  { path: "/guide-ia-2025", name: "Guide IA 2025", description: "Tendances IA 2025", category: "Guides" },
  { path: "/guide-debutant-chatgpt", name: "Guide ChatGPT Débutant", description: "Débuter avec ChatGPT", category: "Guides" },
  { path: "/guide-prompt-avance", name: "Guide Prompt Avancé", description: "Techniques de prompt avancées", category: "Guides" },

  // Concepts IA (30 pages)
  { path: "/reseaux-neurones", name: "Réseaux de Neurones", description: "Comprendre les réseaux de neurones", category: "Concepts IA" },
  { path: "/apprentissage-automatique", name: "Apprentissage Automatique", description: "Bases du machine learning", category: "Concepts IA" },
  { path: "/ia-symbolique", name: "IA Symbolique", description: "Intelligence artificielle symbolique", category: "Concepts IA" },
  { path: "/ia-connexionniste", name: "IA Connexionniste", description: "Approche connexionniste", category: "Concepts IA" },

  // Métiers (40 pages)
  { path: "/ia-architecte", name: "IA Architecte", description: "IA pour les architectes", category: "Métiers IA" },
  { path: "/ia-journaliste", name: "IA Journaliste", description: "IA pour les journalistes", category: "Métiers IA" },
  { path: "/ia-avocat", name: "IA Avocat", description: "IA pour les avocats", category: "Métiers IA" },
  { path: "/ia-medecin", name: "IA Médecin", description: "IA pour les médecins", category: "Métiers IA" },

  // Conseils (20 pages)
  { path: "/conseils-ia", name: "Conseils IA", description: "Conseils experts en IA", category: "Conseils" },
  { path: "/conseils-strategie", name: "Conseils Stratégie", description: "Stratégie IA", category: "Conseils" },
  { path: "/conseils-implementation", name: "Conseils Implémentation", description: "Implémentation IA", category: "Conseils" },

  // Méthodes (15 pages)
  { path: "/methode-ia-apprentissage", name: "Méthode IA Apprentissage", description: "Méthodologie d'apprentissage IA", category: "Méthodes" },
  { path: "/methode-deep-learning", name: "Méthode Deep Learning", description: "Méthodologie Deep Learning", category: "Méthodes" },
  { path: "/methode-data-science", name: "Méthode Data Science", description: "Méthodologie Data Science", category: "Méthodes" },
  { path: "/methode-mlops", name: "Méthode MLOps", description: "Méthodologie MLOps", category: "Méthodes" },

  // Réglementation (10 pages)
  { path: "/rgpd-ia", name: "RGPD & IA", description: "Conformité RGPD pour l'IA", category: "Réglementation" },
  { path: "/ethique-ia", name: "Éthique IA", description: "Réglementation éthique IA", category: "Réglementation" },
  { path: "/conformite-ia", name: "Conformité IA", description: "Conformité réglementaire IA", category: "Réglementation" },
  { path: "/audit-conformite", name: "Audit Conformité", description: "Audit de conformité IA", category: "Réglementation" },

  // Pages utilitaires (10 pages)
  { path: "/inscription", name: "Inscription", description: "Page d'inscription", category: "Utilitaires" },
  { path: "/merci", name: "Merci", description: "Page de remerciement", category: "Utilitaires" },
  { path: "/mentions-legales", name: "Mentions Légales", description: "Mentions légales", category: "Utilitaires" },
  { path: "/confidentialite", name: "Confidentialité", description: "Politique de confidentialité", category: "Utilitaires" },
  { path: "/cgv", name: "CGV", description: "Conditions générales de vente", category: "Utilitaires" },

  // Webinaires et événements (20 pages)
  { path: "/webinaires", name: "Webinaires", description: "Webinaires IA", category: "Webinaires" },
  { path: "/evenements", name: "Événements", description: "Événements IA", category: "Webinaires" },
  { path: "/actualites", name: "Actualités", description: "Actualités IA", category: "Webinaires" },

  // Cas d'études (15 pages)
  { path: "/casusageia1", name: "Cas Usage IA #1", description: "Étude de cas IA", category: "Cas d'Études" },

  // Certifications (15 pages)
  { path: "/certificationia10", name: "Certification IA #10", description: "Certification IA avancée", category: "Certifications Avancées" },
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
    "Principal", "Formations", "Formations Niveau", "Formations Avancées", 
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
