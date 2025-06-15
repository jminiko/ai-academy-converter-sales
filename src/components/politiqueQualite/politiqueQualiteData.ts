
import { Target, Users, Award, CheckCircle, TrendingUp, Shield } from "lucide-react";

export const politiqueQualiteData = [
  {
    id: "engagement",
    title: "Notre Engagement Qualité",
    icon: Target,
    content: [
      "Twenty One Talents s'engage à fournir des formations et services d'excellence dans le domaine de l'intelligence artificielle. Notre politique qualité repose sur l'amélioration continue et la satisfaction client.",
      "Nous mettons tout en œuvre pour dépasser les attentes de nos clients en proposant des contenus pédagogiques innovants, des formateurs experts et un accompagnement personnalisé.",
      "Notre certification ISO 9001 témoigne de notre engagement à maintenir les plus hauts standards de qualité dans tous nos processus."
    ]
  },
  {
    id: "objectifs",
    title: "Objectifs Qualité",
    icon: CheckCircle,
    content: [
      "Maintenir un taux de satisfaction client supérieur à 95% sur l'ensemble de nos formations.",
      "Assurer une mise à jour continue de nos contenus pédagogiques en phase avec les dernières évolutions technologiques.",
      "Garantir des formations pratiques avec des cas d'usage concrets et des projets applicables en entreprise.",
      "Développer l'expertise de nos formateurs par une formation continue et une veille technologique permanente."
    ]
  },
  {
    id: "processus",
    title: "Processus Qualité",
    icon: TrendingUp,
    content: [
      "Évaluation systématique de la satisfaction des participants à l'issue de chaque formation.",
      "Audit interne trimestriel de nos processus pédagogiques et administratifs.",
      "Révision annuelle de nos programmes de formation par un comité d'experts.",
      "Mise en place d'actions correctives et préventives basées sur les retours d'expérience."
    ]
  },
  {
    id: "equipe",
    title: "Équipe Qualité",
    icon: Users,
    content: [
      "Notre équipe qualité est composée d'experts pédagogiques et techniques qui veillent au respect de nos standards.",
      "Chaque formateur bénéficie d'un accompagnement personnalisé pour maintenir et développer ses compétences.",
      "Des formations internes régulières permettent à notre équipe de rester à la pointe des technologies IA.",
      "Un responsable qualité supervise l'ensemble des processus et assure la conformité aux normes ISO."
    ]
  },
  {
    id: "certifications",
    title: "Certifications & Standards",
    icon: Award,
    content: [
      "Twenty One Talents est certifié ISO 9001:2015 pour ses activités de formation professionnelle.",
      "Nos formations sont éligibles aux dispositifs de financement CPF, OPCO et Plan de Développement des Compétences.",
      "Nous respectons les critères Qualiopi garantissant la qualité de nos actions de formation.",
      "Nos certifications sont délivrées par des organismes accrédités et reconnus internationalement."
    ]
  },
  {
    id: "amelioration",
    title: "Amélioration Continue",
    icon: Shield,
    content: [
      "Nous nous engageons dans une démarche d'amélioration continue de nos services et formations.",
      "Un système de management de la qualité nous permet d'identifier et de traiter les non-conformités.",
      "Des indicateurs de performance sont suivis mensuellement pour mesurer l'efficacité de nos actions.",
      "L'innovation pédagogique est au cœur de notre stratégie d'amélioration continue."
    ]
  }
];

export const navigationItems = politiqueQualiteData.map(section => ({
  id: section.id,
  title: section.title,
  icon: section.icon
}));
