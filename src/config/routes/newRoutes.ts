
import { RouteConfig } from '../siteRoutes';

// Nouvelles routes pour atteindre l'objectif de 500 pages
export const nouvellesFormationsRoutes: RouteConfig[] = [
  { path: "/formation-gpt-4-advanced", name: "Formation GPT-4 Avancée", description: "Maîtrise complète de GPT-4", category: "Formations Avancées" },
  { path: "/formation-claude-ai", name: "Formation Claude AI", description: "Expertise Claude AI d'Anthropic", category: "Formations Avancées" },
  { path: "/formation-gemini-pro", name: "Formation Gemini Pro", description: "Google Gemini pour professionnels", category: "Formations Avancées" },
  { path: "/formation-midjourney-pro", name: "Formation Midjourney Pro", description: "Génération d'images IA avancée", category: "Formations Avancées" },
  { path: "/formation-stable-diffusion", name: "Formation Stable Diffusion", description: "IA générative pour images", category: "Formations Avancées" },
  { path: "/formation-prompt-engineering", name: "Formation Prompt Engineering", description: "Maîtrise des prompts IA", category: "Formations Avancées" },
  { path: "/formation-ai-safety", name: "Formation IA Safety", description: "Sécurité et alignement IA", category: "Formations Avancées" },
  { path: "/formation-multimodal-ai", name: "Formation IA Multimodale", description: "IA combinant texte, image, son", category: "Formations Avancées" },
  { path: "/formation-langchain", name: "Formation LangChain", description: "Framework pour applications LLM", category: "Formations Avancées" },
  { path: "/formation-vector-databases", name: "Formation Bases Vectorielles", description: "Bases de données vectorielles", category: "Formations Avancées" },
];

export const nouvellesIndustriesRoutes: RouteConfig[] = [
  { path: "/ia-architecture", name: "IA Architecture", description: "IA pour l'architecture et BIM", category: "Industries Spécialisées" },
  { path: "/ia-urbanisme", name: "IA Urbanisme", description: "Planification urbaine intelligente", category: "Industries Spécialisées" },
  { path: "/ia-environnement", name: "IA Environnement", description: "IA pour l'environnement", category: "Industries Spécialisées" },
  { path: "/ia-agriculture-precision", name: "Agriculture de Précision", description: "IA pour agriculture précise", category: "Industries Spécialisées" },
  { path: "/ia-aquaculture", name: "IA Aquaculture", description: "IA pour l'aquaculture", category: "Industries Spécialisées" },
  { path: "/ia-foresterie", name: "IA Foresterie", description: "Gestion forestière intelligente", category: "Industries Spécialisées" },
  { path: "/ia-mines", name: "IA Mines", description: "IA pour l'industrie minière", category: "Industries Spécialisées" },
  { path: "/ia-petrole-gaz", name: "IA Pétrole & Gaz", description: "IA pour l'énergie fossile", category: "Industries Spécialisées" },
  { path: "/ia-energies-renouvelables", name: "IA Énergies Renouvelables", description: "IA pour énergies vertes", category: "Industries Spécialisées" },
  { path: "/ia-gestion-dechets", name: "IA Gestion Déchets", description: "Gestion intelligente des déchets", category: "Industries Spécialisées" },
];

export const nouveauxOutilsRoutes: RouteConfig[] = [
  { path: "/outil-jupyter-lab", name: "JupyterLab Avancé", description: "Environnement de développement IA", category: "Outils Avancés" },
  { path: "/outil-anaconda", name: "Anaconda Distribution", description: "Distribution Python pour Data Science", category: "Outils Avancés" },
  { path: "/outil-google-colab", name: "Google Colab", description: "Notebooks collaboratifs en ligne", category: "Outils Avancés" },
  { path: "/outil-weights-biases", name: "Weights & Biases", description: "Tracking d'expériences ML", category: "Outils Avancés" },
  { path: "/outil-mlflow", name: "MLflow", description: "Plateforme MLOps open source", category: "Outils Avancés" },
  { path: "/outil-kubeflow", name: "Kubeflow", description: "ML sur Kubernetes", category: "Outils Avancés" },
  { path: "/outil-apache-airflow", name: "Apache Airflow", description: "Orchestration de workflows", category: "Outils Avancés" },
  { path: "/outil-dvc", name: "DVC (Data Version Control)", description: "Versioning pour données ML", category: "Outils Avancés" },
  { path: "/outil-great-expectations", name: "Great Expectations", description: "Tests et validation de données", category: "Outils Avancés" },
  { path: "/outil-evidently", name: "Evidently AI", description: "Monitoring de modèles ML", category: "Outils Avancés" },
];

export const nouveauxServicesRoutes: RouteConfig[] = [
  { path: "/service-audit-ia", name: "Audit IA Complet", description: "Audit technique et stratégique IA", category: "Services Premium" },
  { path: "/service-conseil-transformation", name: "Conseil Transformation IA", description: "Accompagnement transformation", category: "Services Premium" },
  { path: "/service-poc-ia", name: "POC IA sur Mesure", description: "Proof of concept personnalisé", category: "Services Premium" },
  { path: "/service-formation-executive", name: "Formation Executive IA", description: "Formation dirigeants et C-level", category: "Services Premium" },
  { path: "/service-accompagnement-equipe", name: "Accompagnement Équipe", description: "Support équipe technique", category: "Services Premium" },
  { path: "/service-architecture-ia", name: "Architecture IA", description: "Conception architecture technique", category: "Services Premium" },
  { path: "/service-gouvernance-ia", name: "Gouvernance IA", description: "Mise en place gouvernance IA", category: "Services Premium" },
  { path: "/service-ethique-ia", name: "Éthique IA", description: "Conseil en éthique et conformité", category: "Services Premium" },
  { path: "/service-roi-ia", name: "Calcul ROI IA", description: "Analyse retour sur investissement", category: "Services Premium" },
  { path: "/service-maintenance-ia", name: "Maintenance IA", description: "Support et maintenance continus", category: "Services Premium" },
];

export const nouveauxCasUsageRoutes: RouteConfig[] = [
  { path: "/cas-usage-chatbot-avance", name: "Chatbot IA Avancé", description: "Chatbot conversationnel intelligent", category: "Cas d'Usage" },
  { path: "/cas-usage-analyse-sentiment", name: "Analyse de Sentiment", description: "Analyse émotionnelle de texte", category: "Cas d'Usage" },
  { path: "/cas-usage-traduction-auto", name: "Traduction Automatique", description: "Traduction multilingue IA", category: "Cas d'Usage" },
  { path: "/cas-usage-resume-auto", name: "Résumé Automatique", description: "Synthèse intelligente de texte", category: "Cas d'Usage" },
  { path: "/cas-usage-classification-doc", name: "Classification Documents", description: "Tri automatique de documents", category: "Cas d'Usage" },
  { path: "/cas-usage-extraction-entites", name: "Extraction d'Entités", description: "Reconnaissance entités nommées", category: "Cas d'Usage" },
  { path: "/cas-usage-generation-contenu", name: "Génération de Contenu", description: "Création automatique de contenu", category: "Cas d'Usage" },
  { path: "/cas-usage-optimisation-prix", name: "Optimisation Prix", description: "Pricing dynamique intelligent", category: "Cas d'Usage" },
  { path: "/cas-usage-forecast-demande", name: "Prévision Demande", description: "Prédiction de la demande", category: "Cas d'Usage" },
  { path: "/cas-usage-qualite-donnees", name: "Qualité des Données", description: "Nettoyage et validation données", category: "Cas d'Usage" },
];

export const nouveauxMetiersRoutes: RouteConfig[] = [
  { path: "/metier-data-scientist", name: "Data Scientist", description: "Métier de Data Scientist", category: "Métiers IA" },
  { path: "/metier-ml-engineer", name: "ML Engineer", description: "Ingénieur Machine Learning", category: "Métiers IA" },
  { path: "/metier-ai-product-manager", name: "AI Product Manager", description: "Chef de produit IA", category: "Métiers IA" },
  { path: "/metier-prompt-engineer", name: "Prompt Engineer", description: "Ingénieur de prompts", category: "Métiers IA" },
  { path: "/metier-ai-ethics-officer", name: "AI Ethics Officer", description: "Responsable éthique IA", category: "Métiers IA" },
  { path: "/metier-computer-vision-engineer", name: "Computer Vision Engineer", description: "Ingénieur vision par ordinateur", category: "Métiers IA" },
  { path: "/metier-nlp-engineer", name: "NLP Engineer", description: "Ingénieur traitement langage naturel", category: "Métiers IA" },
  { path: "/metier-robotics-engineer", name: "Robotics Engineer", description: "Ingénieur robotique IA", category: "Métiers IA" },
  { path: "/metier-ai-researcher", name: "AI Researcher", description: "Chercheur en intelligence artificielle", category: "Métiers IA" },
  { path: "/metier-ai-consultant", name: "AI Consultant", description: "Consultant en intelligence artificielle", category: "Métiers IA" },
];

// Compilation de toutes les nouvelles routes
export const toutesNouvellesRoutes: RouteConfig[] = [
  ...nouvellesFormationsRoutes,
  ...nouvellesIndustriesRoutes,
  ...nouveauxOutilsRoutes,
  ...nouveauxServicesRoutes,
  ...nouveauxCasUsageRoutes,
  ...nouveauxMetiersRoutes,
];
