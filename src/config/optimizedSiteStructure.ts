
export interface OptimizedSection {
  category: string;
  count: number;
  priority: 'Critical' | 'High' | 'Medium' | 'Low';
  pages: string[];
  expansion: number; // Changé de "reduction" à "expansion"
}

export const optimizedSiteStructure: OptimizedSection[] = [
  {
    category: "Pages Principales",
    count: 12,
    priority: "Critical",
    pages: [
      "Accueil", "À propos", "Services", "Contact", "Blog", 
      "FAQ", "Tarifs", "Partenaires", "Équipe", "Mentions légales",
      "Plan du site", "Politique de confidentialité"
    ],
    expansion: 2
  },
  {
    category: "Formations IA", 
    count: 95,
    priority: "High",
    pages: [
      "Formations de base (25)", "Formations avancées (35)", 
      "Formations sectorielles (35)"
    ],
    expansion: 20
  },
  {
    category: "Industries & Secteurs",
    count: 68,
    priority: "High", 
    pages: [
      "Secteurs principaux (30)", "Secteurs émergents (20)",
      "Applications spécialisées (18)"
    ],
    expansion: 13
  },
  {
    category: "Solutions & Services",
    count: 62,
    priority: "High",
    pages: [
      "Solutions métier (25)", "Solutions sectorielles (22)",
      "Services d'accompagnement (15)"
    ],
    expansion: 12
  },
  {
    category: "Outils & Technologies",
    count: 58,
    priority: "Medium",
    pages: [
      "Outils IA (25)", "Frameworks (18)", "Plateformes (15)"
    ],
    expansion: 13
  },
  {
    category: "Guides & Ressources",
    count: 52,
    priority: "Medium",
    pages: [
      "Guides débutants (20)", "Guides avancés (20)", "Ressources (12)"
    ],
    expansion: 12
  },
  {
    category: "Certifications",
    count: 48,
    priority: "Medium",
    pages: [
      "Certifications professionnelles (25)", "Certifications techniques (23)"
    ],
    expansion: 13
  },
  {
    category: "Conseils & Méthodes",
    count: 38,
    priority: "Medium",
    pages: [
      "Conseils stratégiques (18)", "Méthodes (20)"
    ],
    expansion: 8
  },
  {
    category: "Actualités & Événements",
    count: 32,
    priority: "Low",
    pages: [
      "Actualités (16)", "Événements (16)"
    ],
    expansion: 7
  },
  {
    category: "Métiers & Carrières",
    count: 28,
    priority: "Medium",
    pages: [
      "Métiers IA (16)", "Carrières (12)"
    ],
    expansion: 8
  },
  {
    category: "Réglementation & Éthique",
    count: 18,
    priority: "Medium",
    pages: [
      "RGPD & IA", "Éthique IA", "Conformité", "Audit", "IA responsable",
      "Législation IA", "Standards ISO"
    ],
    expansion: 6
  },
  {
    category: "Pages Utilitaires", 
    count: 24,
    priority: "Low",
    pages: [
      "Plan du site", "Confidentialité", "CGV", "Accessibilité", "Support",
      "Contact technique", "Aide", "Documentation"
    ],
    expansion: 6
  },
  {
    category: "Nouveaux Secteurs",
    count: 25,
    priority: "High",
    pages: [
      "IA Quantique (8)", "Biotechnologie IA (8)", "Web3 & IA (9)"
    ],
    expansion: 25
  },
  {
    category: "Formations Spécialisées",
    count: 30,
    priority: "High",
    pages: [
      "Gaming IA (10)", "Chirurgie IA (10)", "Cybersécurité IA (10)"
    ],
    expansion: 30
  }
];

export const getTotalOptimizedPages = () => {
  return optimizedSiteStructure.reduce((total, section) => total + section.count, 0);
};

export const getTotalExpansion = () => {
  return optimizedSiteStructure.reduce((total, section) => total + section.expansion, 0);
};

export const getOriginalTotal = () => {
  return getTotalOptimizedPages() - getTotalExpansion();
};

export const getSectionsByPriority = (priority: string) => {
  return optimizedSiteStructure.filter(section => section.priority === priority);
};
