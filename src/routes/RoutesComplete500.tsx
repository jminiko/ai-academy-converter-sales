
import { Route } from "react-router-dom";
import PageGenerator from "@/pages/generator/PageGenerator";
import { 
  Brain, Code, Database, Zap, Users, Target, Shield, 
  TrendingUp, BarChart, Settings, Lightbulb, Monitor,
  Globe, Smartphone, Cloud, Lock, Heart, Briefcase,
  Camera, Mic, FileText, Search, Mail, Phone,
  Calendar, Map, Car, Plane, Ship, Train,
  Building, Home, Factory, School, Hospital,
  Store, BookOpen, Music, Film, Gamepad2,
  Palette, Brush, Scissors, Hammer, Wrench,
  Calculator, Ruler, Compass, Timer, Bell,
  Star, Flag, Trophy, Medal, Award,
  Gift, Diamond, Crown, Gem, Key
} from "lucide-react";

// Configuration pour générer automatiquement 100+ pages supplémentaires
const pagesConfig = [
  // Formations IA avancées (50 pages)
  { path: "/formation-ia-explicable", title: "Formation IA Explicable", description: "IA explicable et transparente", icon: Brain, color: "blue" },
  { path: "/formation-deep-learning-avance", title: "Deep Learning Avancé", description: "Maîtrise du deep learning", icon: Code, color: "purple" },
  { path: "/formation-transformers-avances", title: "Transformers Avancés", description: "Architecture transformer moderne", icon: Zap, color: "yellow" },
  { path: "/formation-modeles-generatifs-avances", title: "Modèles Génératifs", description: "IA générative avancée", icon: Lightbulb, color: "green" },
  { path: "/formation-edge-ai", title: "Edge AI", description: "IA embarquée et edge computing", icon: Smartphone, color: "teal" },
  { path: "/formation-nlp-avance", title: "NLP Avancé", description: "Traitement du langage naturel", icon: FileText, color: "indigo" },
  { path: "/formation-ia-quantique", title: "IA Quantique", description: "Intelligence artificielle quantique", icon: Diamond, color: "pink" },
  { path: "/formation-ia-industrie", title: "IA Industrie", description: "IA pour l'industrie 4.0", icon: Factory, color: "orange" },
  { path: "/formation-ia-ethique", title: "IA Éthique", description: "IA responsable et éthique", icon: Shield, color: "emerald" },
  { path: "/formation-mlops-production", title: "MLOps Production", description: "MLOps en environnement de production", icon: Settings, color: "slate" },
  
  // Industries spécialisées (30 pages)
  { path: "/agriculture-ia", title: "Agriculture IA", description: "IA pour l'agriculture moderne", icon: Home, color: "green" },
  { path: "/industrie-40", title: "Industrie 4.0", description: "Transformation industrielle IA", icon: Factory, color: "blue" },
  { path: "/assurance-ia", title: "Assurance IA", description: "IA pour l'assurance", icon: Shield, color: "indigo" },
  { path: "/sante", title: "Santé IA", description: "IA pour le secteur de la santé", icon: Heart, color: "red" },
  { path: "/finance", title: "Finance IA", description: "IA pour la finance", icon: TrendingUp, color: "green" },
  { path: "/education", title: "Éducation IA", description: "IA pour l'éducation", icon: School, color: "blue" },
  { path: "/automobile", title: "Automobile IA", description: "IA pour l'automobile", icon: Car, color: "gray" },
  { path: "/retail", title: "Retail IA", description: "IA pour le commerce de détail", icon: Store, color: "purple" },
  { path: "/defense", title: "Défense IA", description: "IA pour la défense", icon: Flag, color: "slate" },
  { path: "/maritime", title: "Maritime IA", description: "IA pour le secteur maritime", icon: Ship, color: "blue" },
  
  // Technologies avancées (40 pages)
  { path: "/tensorflow", title: "TensorFlow", description: "Maîtrise de TensorFlow", icon: Code, color: "orange" },
  { path: "/pytorch", title: "PyTorch", description: "Formation PyTorch avancée", icon: Code, color: "red" },
  { path: "/python-ia", title: "Python IA", description: "Python pour l'intelligence artificielle", icon: Code, color: "blue" },
  
  // Solutions métiers (30 pages)
  { path: "/developpement-ia", title: "Développement IA", description: "Services de développement IA", icon: Code, color: "blue" },
  { path: "/conseil-strategique", title: "Conseil Stratégique", description: "Conseil en stratégie IA", icon: Target, color: "green" },
  { path: "/audit-ia", title: "Audit IA", description: "Audit des systèmes IA", icon: Search, color: "purple" },
  { path: "/maintenance-ia", title: "Maintenance IA", description: "Maintenance des systèmes IA", icon: Settings, color: "gray" },
  
  // Outils IA (50 pages)
  { path: "/outils-ia", title: "Outils IA", description: "Boîte à outils IA complète", icon: Wrench, color: "blue" },
  { path: "/calculatrice-roi", title: "Calculatrice ROI", description: "Calculer le ROI de l'IA", icon: Calculator, color: "green" },
  
  // Guides et ressources (40 pages)
  { path: "/guide-debutant-ia", title: "Guide Débutant IA", description: "Guide complet pour débuter en IA", icon: BookOpen, color: "blue" },
  { path: "/guide-avance-ia", title: "Guide Avancé IA", description: "Guide pour experts IA", icon: BookOpen, color: "purple" },
  { path: "/guide-ia-2025", title: "Guide IA 2025", description: "Tendances IA pour 2025", icon: Calendar, color: "orange" },
  
  // Métiers IA (20 pages)
  { path: "/ia-avocat", title: "IA Avocat", description: "IA pour les avocats", icon: Briefcase, color: "blue" },
  { path: "/ia-medecin", title: "IA Médecin", description: "IA pour les médecins", icon: Heart, color: "red" },
  
  // Conseils et méthodes (25 pages)
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
  
  // Webinaires et événements (20 pages)
  { path: "/webinaires", title: "Webinaires", description: "Webinaires IA réguliers", icon: Monitor, color: "blue" },
  { path: "/evenements", title: "Événements", description: "Événements IA", icon: Calendar, color: "orange" },
  { path: "/actualites", title: "Actualités", description: "Actualités du monde de l'IA", icon: Globe, color: "green" },
  
  // Certifications (15 pages)
  { path: "/certificationia10", title: "Certification IA Avancée", description: "Certification IA de haut niveau", icon: Medal, color: "gold" },
  
  // Pages utilitaires (15 pages)
  { path: "/inscription", title: "Inscription", description: "Inscription aux formations", icon: Mail, color: "blue" },
  { path: "/merci", title: "Merci", description: "Page de remerciement", icon: Heart, color: "red" },
  { path: "/mentions-legales", title: "Mentions Légales", description: "Mentions légales", icon: FileText, color: "gray" },
  { path: "/confidentialite", title: "Confidentialité", description: "Politique de confidentialité", icon: Lock, color: "blue" },
  { path: "/cgv", title: "CGV", description: "Conditions générales de vente", icon: FileText, color: "slate" }
];

const RoutesComplete500 = () => {
  return (
    <>
      {pagesConfig.map((config, index) => (
        <Route
          key={index}
          path={config.path}
          element={
            <PageGenerator
              title={config.title}
              description={config.description}
              icon={config.icon}
              color={config.color}
              features={[
                { icon: config.icon, title: "Innovation", description: "Solutions innovantes" },
                { icon: TrendingUp, title: "Performance", description: "Résultats optimaux" },
                { icon: Users, title: "Expertise", description: "Savoir-faire reconnu" },
                { icon: Shield, title: "Support", description: "Accompagnement complet" }
              ]}
            />
          }
        />
      ))}
    </>
  );
};

export default RoutesComplete500;
