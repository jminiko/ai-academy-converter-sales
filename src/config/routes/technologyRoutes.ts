
import { RouteConfig } from "../siteRoutes";

export const technologieRoutes: RouteConfig[] = [
  { path: "/tensorflow", name: "TensorFlow", description: "Formation TensorFlow", category: "Technologies" },
  { path: "/pytorch", name: "PyTorch", description: "Formation PyTorch", category: "Technologies" },
  { path: "/python-ia", name: "Python IA", description: "Python pour l'IA", category: "Technologies" },
  { path: "/blockchain-ai", name: "Blockchain IA", description: "Blockchain et IA", category: "Technologies" },
  { path: "/iot-ai", name: "IoT IA", description: "IoT et IA", category: "Technologies" },
];

export const solutionRoutes: RouteConfig[] = [
  { path: "/developpement-ia", name: "Développement IA", description: "Services de développement IA", category: "Solutions" },
  { path: "/conseil-strategique", name: "Conseil Stratégique", description: "Conseil en stratégie IA", category: "Solutions" },
  { path: "/audit-ia", name: "Audit IA", description: "Audit des systèmes IA", category: "Solutions" },
  { path: "/maintenance-ia", name: "Maintenance IA", description: "Maintenance des systèmes IA", category: "Solutions" },
  { path: "/solution-ia-vente", name: "Solution IA Vente", description: "Solutions IA pour la vente", category: "Solutions" },
  { path: "/solution-ia-marketing", name: "Solution IA Marketing", description: "Solutions IA pour le marketing", category: "Solutions" },
];

export const outilRoutes: RouteConfig[] = [
  { path: "/outils-ia", name: "Outils IA", description: "Boîte à outils IA", category: "Outils" },
  { path: "/calculatrice-roi", name: "Calculatrice ROI", description: "Calculer le ROI IA", category: "Outils" },
  { path: "/outil-analyse-donnees", name: "Analyse de Données", description: "Outil d'analyse IA", category: "Outils" },
  { path: "/outil-generation-texte", name: "Génération de Texte", description: "Outil de génération IA", category: "Outils" },
  { path: "/outilgpt4", name: "Outil GPT-4", description: "Outil GPT-4 interactif", category: "Outils" },
];
