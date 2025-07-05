
export interface OptimizedSection {
  category: string;
  count: number;
  priority: 'Critical' | 'High' | 'Medium' | 'Low';
  pages: string[];
  reduction: number;
}

export const optimizedSiteStructure: OptimizedSection[] = [
  {
    category: "Pages Principales",
    count: 10,
    priority: "Critical",
    pages: [
      "Accueil", "À propos", "Services", "Contact", "Blog", 
      "FAQ", "Tarifs", "Partenaires", "Équipe", "Mentions légales"
    ],
    reduction: 0
  },
  {
    category: "Formations IA", 
    count: 75,
    priority: "High",
    pages: [
      "Formations de base (20)", "Formations avancées (30)", 
      "Formations sectorielles (25)"
    ],
    reduction: -10
  },
  {
    category: "Industries & Secteurs",
    count: 55,
    priority: "High", 
    pages: [
      "Secteurs principaux (25)", "Secteurs émergents (15)",
      "Applications spécialisées (15)"
    ],
    reduction: -10
  },
  {
    category: "Solutions & Services",
    count: 50,
    priority: "High",
    pages: [
      "Solutions métier (20)", "Solutions sectorielles (18)",
      "Services d'accompagnement (12)"
    ],
    reduction: -10
  },
  {
    category: "Outils & Technologies",
    count: 45,
    priority: "Medium",
    pages: [
      "Outils IA (20)", "Frameworks (12)", "Plateformes (13)"
    ],
    reduction: -10
  },
  {
    category: "Guides & Ressources",
    count: 40,
    priority: "Medium",
    pages: [
      "Guides débutants (15)", "Guides avancés (15)", "Ressources (10)"
    ],
    reduction: -10
  },
  {
    category: "Certifications",
    count: 35,
    priority: "Medium",
    pages: [
      "Certifications professionnelles (18)", "Certifications techniques (17)"
    ],
    reduction: -5
  },
  {
    category: "Conseils & Méthodes",
    count: 30,
    priority: "Medium",
    pages: [
      "Conseils stratégiques (12)", "Méthodes (18)"
    ],
    reduction: -5
  },
  {
    category: "Actualités & Événements",
    count: 25,
    priority: "Low",
    pages: [
      "Actualités (12)", "Événements (13)"
    ],
    reduction: -5
  },
  {
    category: "Métiers & Carrières",
    count: 20,
    priority: "Medium",
    pages: [
      "Métiers IA (12)", "Carrières (8)"
    ],
    reduction: -5
  },
  {
    category: "Réglementation & Éthique",
    count: 12,
    priority: "Medium",
    pages: [
      "RGPD & IA", "Éthique IA", "Conformité", "Audit", "IA responsable"
    ],
    reduction: -3
  },
  {
    category: "Pages Utilitaires", 
    count: 18,
    priority: "Low",
    pages: [
      "Plan du site", "Confidentialité", "CGV", "Accessibilité", "Support"
    ],
    reduction: -2
  }
];

export const getTotalOptimizedPages = () => {
  return optimizedSiteStructure.reduce((total, section) => total + section.count, 0);
};

export const getTotalReduction = () => {
  return optimizedSiteStructure.reduce((total, section) => total + Math.abs(section.reduction), 0);
};

export const getOriginalTotal = () => {
  return getTotalOptimizedPages() + getTotalReduction();
};

export const getSectionsByPriority = (priority: string) => {
  return optimizedSiteStructure.filter(section => section.priority === priority);
};
