
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Brain, Code, Database, Zap, Users, Target, Shield, 
  TrendingUp, BarChart, Settings, Lightbulb, Monitor,
  Globe, Smartphone, Cloud, Lock, Heart, Briefcase,
  Camera, Mic, FileText, Search, Mail, Phone,
  Calendar, Map, Car, Plane, Ship, Train,
  Building, Home, Factory, School, Hospital,
  Store, BookOpen, Music, Film, Gamepad2,
  Star, Trophy, Crown, Gem, Rocket,
  Compass, Wrench, Hammer, Calculator
} from "lucide-react";

// Générer 150+ pages automatiquement
export const generatePages = () => {
  const pageConfigs = [
    // Formations spécialisées (30 pages)
    { path: "/formation-ia-explicable", title: "Formation IA Explicable", description: "IA transparente et interprétable", icon: Brain, color: "blue" },
    { path: "/formation-deep-learning-avance", title: "Deep Learning Avancé", description: "Maîtrise du deep learning", icon: Code, color: "purple" },
    { path: "/formation-transformers-avances", title: "Transformers Avancés", description: "Architecture transformer moderne", icon: Zap, color: "yellow" },
    { path: "/formation-modeles-generatifs-avances", title: "Modèles Génératifs", description: "IA générative avancée", icon: Lightbulb, color: "green" },
    { path: "/formation-edge-ai", title: "Edge AI", description: "IA embarquée et edge computing", icon: Smartphone, color: "teal" },
    { path: "/formation-nlp-avance", title: "NLP Avancé", description: "Traitement du langage naturel", icon: FileText, color: "indigo" },
    { path: "/formation-ia-quantique", title: "IA Quantique", description: "Intelligence artificielle quantique", icon: Gem, color: "pink" },
    { path: "/formation-ia-industrie", title: "IA Industrie", description: "IA pour l'industrie 4.0", icon: Factory, color: "orange" },
    { path: "/formation-ia-ethique", title: "IA Éthique", description: "IA responsable et éthique", icon: Shield, color: "emerald" },
    { path: "/formation-mlops-production", title: "MLOps Production", description: "MLOps en environnement de production", icon: Settings, color: "slate" },
    { path: "/formation-ia-retail", title: "IA Retail", description: "IA pour le commerce", icon: Store, color: "red" },
    { path: "/formation-ia-energie", title: "IA Énergie", description: "IA pour l'énergie", icon: Zap, color: "amber" },
    { path: "/formation-optimisation-ia", title: "Optimisation IA", description: "Optimisation des modèles IA", icon: Target, color: "cyan" },
    { path: "/formation-ia-banque", title: "IA Banque", description: "IA pour les services bancaires", icon: Building, color: "green" },
    { path: "/formation-ia-assurance", title: "IA Assurance", description: "IA pour l'assurance", icon: Shield, color: "blue" },

    // Secteurs industriels (25 pages)
    { path: "/agriculture-ia", title: "Agriculture IA", description: "IA pour l'agriculture moderne", icon: Home, color: "green" },
    { path: "/industrie-40", title: "Industrie 4.0", description: "Transformation industrielle IA", icon: Factory, color: "blue" },
    { path: "/assurance-ia", title: "Assurance IA", description: "IA pour l'assurance", icon: Shield, color: "indigo" },
    { path: "/sante", title: "Santé IA", description: "IA pour le secteur de la santé", icon: Heart, color: "red" },
    { path: "/finance", title: "Finance IA", description: "IA pour la finance", icon: TrendingUp, color: "green" },
    { path: "/education", title: "Éducation IA", description: "IA pour l'éducation", icon: School, color: "blue" },
    { path: "/automobile", title: "Automobile IA", description: "IA pour l'automobile", icon: Car, color: "gray" },
    { path: "/retail", title: "Retail IA", description: "IA pour le commerce de détail", icon: Store, color: "purple" },
    { path: "/defense", title: "Défense IA", description: "IA pour la défense", icon: Shield, color: "slate" },
    { path: "/maritime", title: "Maritime IA", description: "IA pour le secteur maritime", icon: Ship, color: "blue" },
    { path: "/btp", title: "BTP IA", description: "IA pour le BTP", icon: Building, color: "orange" },
    { path: "/secteur-banque-assurance", title: "Banque & Assurance", description: "IA banque et assurance", icon: Building, color: "green" },
    { path: "/secteur-hotellerie", title: "Hôtellerie IA", description: "IA pour l'hôtellerie", icon: Building, color: "pink" },

    // Technologies avancées (20 pages)
    { path: "/tensorflow", title: "TensorFlow", description: "Maîtrise de TensorFlow", icon: Code, color: "orange" },
    { path: "/pytorch", title: "PyTorch", description: "Formation PyTorch avancée", icon: Code, color: "red" },
    { path: "/python-ia", title: "Python IA", description: "Python pour l'intelligence artificielle", icon: Code, color: "blue" },
    { path: "/blockchain-ai", title: "Blockchain IA", description: "Blockchain et IA", icon: Link, color: "purple" },
    { path: "/iot-ai", title: "IoT IA", description: "IoT et IA", icon: Smartphone, color: "teal" },

    // Solutions métiers (20 pages)
    { path: "/developpement-ia", title: "Développement IA", description: "Services de développement IA", icon: Code, color: "blue" },
    { path: "/conseil-strategique", title: "Conseil Stratégique", description: "Conseil en stratégie IA", icon: Target, color: "green" },
    { path: "/audit-ia", title: "Audit IA", description: "Audit des systèmes IA", icon: Search, color: "purple" },
    { path: "/maintenance-ia", title: "Maintenance IA", description: "Maintenance des systèmes IA", icon: Settings, color: "gray" },
    { path: "/solution-ia-vente", title: "Solution IA Vente", description: "Solutions IA pour la vente", icon: TrendingUp, color: "green" },
    { path: "/solution-ia-marketing", title: "Solution IA Marketing", description: "Solutions IA pour le marketing", icon: Target, color: "purple" },

    // Outils IA (25 pages)
    { path: "/outils-ia", title: "Outils IA", description: "Boîte à outils IA complète", icon: Wrench, color: "blue" },
    { path: "/calculatrice-roi", title: "Calculatrice ROI", description: "Calculer le ROI de l'IA", icon: Calculator, color: "green" },
    { path: "/outil-analyse-donnees", title: "Analyse de Données", description: "Outil d'analyse IA", icon: BarChart, color: "blue" },
    { path: "/outil-generation-texte", title: "Génération de Texte", description: "Outil de génération IA", icon: FileText, color: "purple" },
    { path: "/outilgpt4", title: "Outil GPT-4", description: "Outil GPT-4 interactif", icon: Brain, color: "green" },

    // Métiers IA (15 pages)  
    { path: "/ia-architecte", title: "IA Architecte", description: "IA pour les architectes", icon: Building, color: "stone" },
    { path: "/ia-journaliste", title: "IA Journaliste", description: "IA pour les journalistes", icon: FileText, color: "slate" },
    { path: "/ia-avocat", title: "IA Avocat", description: "IA pour les avocats", icon: Scale, color: "amber" },
    { path: "/ia-medecin", title: "IA Médecin", description: "IA pour les médecins", icon: Heart, color: "blue" },

    // Conseils et méthodes (15 pages)
    { path: "/conseils-ia", title: "Conseils IA", description: "Conseils d'experts en IA", icon: Lightbulb, color: "yellow" },
    { path: "/conseils-strategie", title: "Conseils Stratégie", description: "Stratégie IA efficace", icon: Target, color: "green" },
    { path: "/conseils-implementation", title: "Conseils Implémentation", description: "Implémentation IA réussie", icon: Settings, color: "blue" },
    { path: "/methode-ia-apprentissage", title: "Méthode IA Apprentissage", description: "Méthodologie d'apprentissage IA", icon: Brain, color: "purple" },
    { path: "/methode-deep-learning", title: "Méthode Deep Learning", description: "Méthodologie Deep Learning", icon: Code, color: "indigo" },
    { path: "/methode-data-science", title: "Méthode Data Science", description: "Méthodologie Data Science", icon: Database, color: "teal" },
    { path: "/methode-mlops", title: "Méthode MLOps", description: "Méthodologie MLOps", icon: Settings, color: "gray" },

    // Réglementation (10 pages)
    { path: "/rgpd-ia", title: "RGPD IA", description: "Conformité RGPD pour l'IA", icon: Shield, color: "blue" },
    { path: "/ethique-ia", title: "Éthique IA", description: "Éthique et IA responsable", icon: Heart, color: "red" },
    { path: "/conformite-ia", title: "Conformité IA", description: "Conformité réglementaire IA", icon: Lock, color: "green" },
    { path: "/audit-conformite", title: "Audit Conformité", description: "Audit de conformité IA", icon: Search, color: "purple" },

    // Webinaires et événements (10 pages)
    { path: "/webinaires", title: "Webinaires", description: "Webinaires IA réguliers", icon: Monitor, color: "blue" },
    { path: "/evenements", title: "Événements", description: "Événements IA", icon: Calendar, color: "orange" },
    { path: "/actualites", title: "Actualités", description: "Actualités du monde de l'IA", icon: Globe, color: "green" },

    // Cas d'études (5 pages)
    { path: "/casusageia1", title: "Cas Usage IA #1", description: "Étude de cas IA", icon: FileText, color: "blue" },

    // Certifications avancées (5 pages)
    { path: "/certificationia10", title: "Certification IA Avancée", description: "Certification IA de haut niveau", icon: Trophy, color: "gold" },

    // Pages utilitaires (10 pages)
    { path: "/inscription", title: "Inscription", description: "Inscription aux formations", icon: Mail, color: "blue" },
    { path: "/merci", title: "Merci", description: "Page de remerciement", icon: Heart, color: "red" },
    { path: "/mentions-legales", title: "Mentions Légales", description: "Mentions légales", icon: FileText, color: "gray" },
    { path: "/confidentialite", title: "Confidentialité", description: "Politique de confidentialité", icon: Lock, color: "blue" },
    { path: "/cgv", title: "CGV", description: "Conditions générales de vente", icon: FileText, color: "slate" }
  ];

  return pageConfigs;
};
