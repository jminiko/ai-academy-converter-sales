
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Zap, 
  Clock, 
  Target, 
  TrendingUp, 
  Shield, 
  Users, 
  CheckCircle, 
  ArrowRight,
  BarChart3,
  Cog,
  Lightbulb,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

const AvantagesAutomatisation = () => {
  const avantagesPrincipaux = [
    {
      titre: "Productivité Maximale",
      description: "Augmentation de 70% de la productivité grâce à l'automatisation intelligente",
      icon: TrendingUp,
      benefices: [
        "Exécution 24/7 sans interruption",
        "Traitement simultané de multiples tâches",
        "Élimination des tâches répétitives",
        "Focus sur les activités à valeur ajoutée"
      ],
      couleur: "emerald"
    },
    {
      titre: "Qualité & Précision",
      description: "Réduction de 90% des erreurs grâce aux processus automatisés",
      icon: Target,
      benefices: [
        "Élimination des erreurs humaines",
        "Cohérence dans l'exécution",
        "Respect strict des procédures",
        "Amélioration de la conformité"
      ],
      couleur: "blue"
    },
    {
      titre: "Économies Substantielles",
      description: "ROI moyen de 300% sur 3 ans avec réduction des coûts opérationnels",
      icon: BarChart3,
      benefices: [
        "Réduction des coûts de main-d'œuvre",
        "Diminution des coûts d'erreur",
        "Optimisation des ressources",
        "Accélération du time-to-market"
      ],
      couleur: "purple"
    },
    {
      titre: "Scalabilité & Flexibilité",
      description: "Adaptation instantanée aux variations de charge et aux besoins métier",
      icon: Zap,
      benefices: [
        "Montée en charge automatique",
        "Adaptation aux pics d'activité",
        "Évolution selon les besoins",
        "Déploiement rapide de nouvelles règles"
      ],
      couleur: "orange"
    }
  ];

  const processusAutomatisables = [
    {
      categorie: "Gestion Administrative",
      processus: [
        "Traitement automatique des factures",
        "Gestion des congés et absences", 
        "Reporting automatisé",
        "Archivage intelligent des documents"
      ]
    },
    {
      categorie: "Service Client",
      processus: [
        "Chatbots intelligents 24/7",
        "Routage automatique des demandes",
        "Réponses aux questions fréquentes",
        "Suivi automatisé des tickets"
      ]
    },
    {
      categorie: "Marketing & Ventes",
      processus: [
        "Lead scoring automatique",
        "Campagnes email personnalisées",
        "Analyse prédictive des ventes",
        "Génération de rapports marketing"
      ]
    },
    {
      categorie: "Opérations IT",
      processus: [
        "Monitoring et alertes automatiques",
        "Déploiements automatisés",
        "Sauvegards programmées",
        "Gestion des accès utilisateurs"
      ]
    }
  ];

  const etapesImplementation = [
    {
      etape: "Audit & Analyse",
      description: "Identification des processus à automatiser et évaluation du potentiel ROI",
      duree: "2-4 semaines",
      livrables: ["Cartographie des processus", "Analyse coût-bénéfice", "Roadmap d'automatisation"]
    },
    {
      etape: "Formation des Équipes", 
      description: "Formation IA complète pour développer les compétences d'automatisation",
      duree: "3-5 jours",
      livrables: ["Compétences IA certifiées", "Maîtrise des outils", "Capacité de conception"]
    },
    {
      etape: "Conception & Développement",
      description: "Création des automatisations avec les équipes formées",
      duree: "4-8 semaines",
      livrables: ["Automatisations opérationnelles", "Tests de validation", "Documentation"]
    },
    {
      etape: "Déploiement & Optimisation",
      description: "Mise en production et amélioration continue des processus",
      duree: "2-4 semaines",
      livrables: ["Production stable", "Monitoring en place", "Formation utilisateurs"]
    }
  ];

  const statistiques = [
    { label: "Économie de temps", valeur: "95%", description: "sur les processus automatisés" },
    { label: "Réduction d'erreurs", valeur: "90%", description: "grâce à l'IA" },
    { label: "ROI moyen", valeur: "300%", description: "sur 36 mois" },
    { label: "Satisfaction client", valeur: "+35%", description: "amélioration mesurée" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-blue-100 text-blue-800">
            ⚡ Transformation Digitale
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Avantages de l'Automatisation IA
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Découvrez comment l'automatisation intelligente révolutionne les entreprises modernes. 
            De l'optimisation des processus à l'amélioration de l'expérience client, 
            explorez tous les bénéfices mesurables de l'IA appliquée.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {statistiques.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                <div className="text-3xl font-bold text-blue-600">{stat.valeur}</div>
                <p className="font-medium text-gray-900">{stat.label}</p>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link to="/formations">Commencer l'automatisation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/roi-formations">Calculer mon ROI</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Avantages Principaux */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">4 Avantages Clés de l'Automatisation</h2>
            <p className="text-lg text-gray-600">Impact transformationnel sur votre organisation</p>
          </div>

          <div className="space-y-12">
            {avantagesPrincipaux.map((avantage, index) => (
              <div key={index} className={`flex flex-col lg:flex-row gap-8 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1">
                  <Card className={`border-2 border-${avantage.couleur}-200 hover:shadow-xl transition-shadow`}>
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <avantage.icon className={`h-12 w-12 text-${avantage.couleur}-600`} />
                        <div>
                          <CardTitle className="text-2xl">{avantage.titre}</CardTitle>
                          <p className="text-gray-600 mt-2">{avantage.description}</p>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {avantage.benefices.map((benefice, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle className={`h-5 w-5 text-${avantage.couleur}-500 mr-3 mt-0.5 flex-shrink-0`} />
                            <span className="text-gray-700">{benefice}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <div className={`w-64 h-64 bg-gradient-to-br from-${avantage.couleur}-100 to-${avantage.couleur}-200 rounded-full mx-auto lg:mx-0 flex items-center justify-center`}>
                    <avantage.icon className={`h-32 w-32 text-${avantage.couleur}-600`} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus Automatisables */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Processus Automatisables</h2>
            <p className="text-lg text-gray-600">Exemples concrets d'automatisation par domaine métier</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processusAutomatisables.map((categorie, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Cog className="h-6 w-6 text-blue-600 mr-3" />
                    {categorie.categorie}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {categorie.processus.map((processus, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2"></div>
                        <span className="text-gray-700">{processus}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Étapes d'Implémentation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Processus d'Implémentation</h2>
            <p className="text-lg text-gray-600">De la formation à la mise en production</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {etapesImplementation.map((etape, index) => (
                <Card key={index} className="relative">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg">
                        {index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                          <CardTitle className="text-xl">{etape.etape}</CardTitle>
                          <Badge variant="outline" className="mt-2 md:mt-0">{etape.duree}</Badge>
                        </div>
                        <p className="text-gray-600 mt-2">{etape.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="ml-16">
                    <h4 className="font-semibold mb-2">Livrables :</h4>
                    <div className="flex flex-wrap gap-2">
                      {etape.livrables.map((livrable, idx) => (
                        <Badge key={idx} variant="secondary">{livrable}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl text-white font-medium mb-8">
              "Grâce aux formations IA de Twenty One Talents, nous avons automatisé 60% de nos processus administratifs. 
              Le ROI a dépassé 250% en seulement 18 mois, et nos équipes sont maintenant focalisées sur les tâches à réelle valeur ajoutée."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-left">
                <p className="text-white font-semibold">Marie Dupont</p>
                <p className="text-blue-100">Directrice des Opérations, T&P Solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Prêt à Automatiser Votre Entreprise ?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Commencez par nos formations IA pour développer les compétences d'automatisation de vos équipes. 
            ROI garanti et accompagnement personnalisé.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link to="/formations">
                Découvrir nos formations <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">Services d'accompagnement</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AvantagesAutomatisation;
