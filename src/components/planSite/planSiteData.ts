
import { BookOpen, Users, Cog, MessageSquare, Award } from "lucide-react";

export const planSiteData = [
  {
    titre: "Accueil & Présentation",
    icon: BookOpen,
    pages: [
      { nom: "Accueil", url: "/", description: "Page d'accueil principale" },
      { nom: "À propos", url: "/about", description: "Présentation de Twenty One Talents" },
      { nom: "Notre équipe", url: "/equipe", description: "Présentation des experts" },
      { nom: "Notre méthodologie", url: "/methodologie", description: "Approche pédagogique" }
    ]
  },
  {
    titre: "Formations IA",
    icon: BookOpen,
    pages: [
      { nom: "Catalogue formations", url: "/formations", description: "Toutes nos formations" },
      { nom: "IA Générative", url: "/formations/ia-generative", description: "Formation complète IA générative" },
      { nom: "ChatGPT Pro", url: "/formations/chatgpt-pro", description: "Maîtrise avancée de ChatGPT" },
      { nom: "Automatisation IA", url: "/formations/automatisation-ia", description: "Automatiser avec l'IA" },
      { nom: "Prompt Engineering", url: "/formations/prompt-engineering", description: "Art du prompt" },
      { nom: "OpenAI API", url: "/formations/openai-api", description: "Intégration API OpenAI" },
      { nom: "Microsoft Copilot", url: "/formations/microsoft-copilot", description: "Formation Copilot" },
      { nom: "Google Bard", url: "/formations/google-bard", description: "Formation Google Bard" },
      { nom: "Claude AI", url: "/formations/claude-ai", description: "Formation Claude d'Anthropic" }
    ]
  },
  {
    titre: "Services",
    icon: Cog,
    pages: [
      { nom: "Nos services", url: "/services", description: "Aperçu de tous nos services" },
      { nom: "Consulting IA", url: "/services/consulting", description: "Conseil stratégique IA" },
      { nom: "Implémentation", url: "/services/implementation", description: "Mise en œuvre solutions IA" },
      { nom: "Support & Maintenance", url: "/services/support", description: "Accompagnement continu" },
      { nom: "Automatisation", url: "/automatisation", description: "Services d'automatisation" }
    ]
  },
  {
    titre: "Ressources & Contenu",
    icon: BookOpen,
    pages: [
      { nom: "Blog", url: "/blog", description: "Articles et actualités IA" },
      { nom: "Tendances IA 2024", url: "/blog/tendances-ia-2024", description: "Article tendances" },
      { nom: "Guide Prompt Engineering", url: "/blog/guide-prompt-engineering", description: "Guide pratique" },
      { nom: "Ressources gratuites", url: "/ressources-gratuites", description: "Guides et outils gratuits" },
      { nom: "Webinaires", url: "/webinaires", description: "Sessions de formation live" },
      { nom: "Actualités", url: "/actualites", description: "Actualités du secteur IA" },
      { nom: "Livre blanc", url: "/livre-blanc", description: "Publications expertes" },
      { nom: "Newsletter", url: "/newsletter", description: "Inscription newsletter IA" }
    ]
  },
  {
    titre: "Secteurs & Outils",
    icon: Users,
    pages: [
      { nom: "Secteurs business", url: "/secteurs-business", description: "IA par secteur d'activité" },
      { nom: "Outils IA", url: "/outils-ia", description: "Sélection d'outils recommandés" },
      { nom: "Cas d'étude banque", url: "/case-studies/banque-transformation", description: "Étude de cas détaillée" },
      { nom: "Projets réalisés", url: "/projets", description: "Portfolio de nos réalisations" }
    ]
  },
  {
    titre: "Entreprise & Partenaires",
    icon: Award,
    pages: [
      { nom: "Certifications", url: "/certifications", description: "Nos certifications officielles" },
      { nom: "Partenaires", url: "/partenaires", description: "Écosystème de partenaires" },
      { nom: "Événements", url: "/evenements", description: "Calendrier des événements" },
      { nom: "Carrières", url: "/carrieres", description: "Rejoindre notre équipe" },
      { nom: "Témoignages", url: "/testimonials", description: "Avis et retours clients" }
    ]
  },
  {
    titre: "Contact & Informations",
    icon: MessageSquare,
    pages: [
      { nom: "Contact", url: "/contact", description: "Nous contacter" },
      { nom: "FAQ", url: "/faq", description: "Questions fréquentes" },
      { nom: "Tarifs", url: "/tarifs", description: "Grille tarifaire transparente" },
      { nom: "CGV", url: "/cgv", description: "Conditions générales de vente" },
      { nom: "Confidentialité", url: "/confidentialite", description: "Politique de confidentialité" },
      { nom: "Mentions légales", url: "/mentions-legales", description: "Informations légales" },
      { nom: "Accessibilité", url: "/accessibilite-numerique", description: "Déclaration d'accessibilité" },
      { nom: "Plan du site", url: "/plan-site", description: "Cette page" }
    ]
  }
];
