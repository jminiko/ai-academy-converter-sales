
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, TrendingUp, Heart, MessageSquare, CheckCircle, Clock, ArrowRight, Target } from "lucide-react";
import { Link } from "react-router-dom";

const AccompagnementChange = () => {
  const services = [
    {
      icon: Users,
      title: "Gestion du Changement",
      description: "Accompagnement personnalisé des équipes",
      features: [
        "Évaluation de la résistance au changement",
        "Plan de communication ciblé",
        "Formation des ambassadeurs",
        "Suivi de l'adoption"
      ]
    },
    {
      icon: MessageSquare,
      title: "Communication Interne",
      description: "Stratégie de communication pour l'adoption IA",
      features: [
        "Messages clés personnalisés",
        "Supports de communication",
        "Sessions d'information",
        "Feedback continu"
      ]
    },
    {
      icon: Heart,
      title: "Accompagnement Psychologique",
      description: "Soutien émotionnel et motivation des équipes",
      features: [
        "Gestion des craintes",
        "Renforcement de la confiance",
        "Coaching individuel",
        "Ateliers de motivation"
      ]
    }
  ];

  const changePhases = [
    {
      phase: "Préparation",
      description: "Évaluation de la culture d'entreprise et des résistances",
      duration: "2-4 semaines",
      activities: ["Audit organisationnel", "Cartographie des parties prenantes", "Analyse des risques"]
    },
    {
      phase: "Lancement",
      description: "Communication et mobilisation des équipes",
      duration: "1-2 semaines",
      activities: ["Kick-off général", "Formation des ambassadeurs", "Communication massive"]
    },
    {
      phase: "Déploiement",
      description: "Mise en œuvre progressive avec accompagnement",
      duration: "3-6 mois",
      activities: ["Formation par vagues", "Support individuel", "Ajustements continus"]
    },
    {
      phase: "Ancrage",
      description: "Consolidation des nouvelles pratiques",
      duration: "2-3 mois",
      activities: ["Évaluation des résultats", "Célébration des succès", "Plan de pérennisation"]
    }
  ];

  const metrics = [
    { value: "89%", label: "Taux d'adoption réussi", icon: Target },
    { value: "65%", label: "Réduction des résistances", icon: TrendingUp },
    { value: "92%", label: "Satisfaction des équipes", icon: Heart },
    { value: "< 6 mois", label: "Temps d'adaptation", icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <Users className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Accompagnement au Changement IA
          </h1>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Facilitez l'adoption de l'IA dans votre organisation. Gestion du changement, 
            communication et accompagnement humain pour une transformation réussie.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <metric.icon className="h-8 w-8 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{metric.value}</div>
                <p className="text-teal-100 text-sm">{metric.label}</p>
              </div>
            ))}
          </div>
          
          <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100" asChild>
            <Link to="/contact">Évaluation gratuite</Link>
          </Button>
        </div>
      </section>

      {/* Services d'accompagnement */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services d'Accompagnement</h2>
            <p className="text-xl text-gray-600">Solutions complètes pour faciliter la transition</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-teal-100 rounded-lg mr-4">
                      <service.icon className="h-6 w-6 text-teal-600" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                  <p className="text-gray-600">{service.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Phases du changement */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Phases du Changement</h2>
            <p className="text-xl text-gray-600">Approche structurée pour une transformation durable</p>
          </div>

          <div className="space-y-8">
            {changePhases.map((phase, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold mr-4">
                        {index + 1}
                      </div>
                      <div>
                        <CardTitle className="text-2xl">{phase.phase}</CardTitle>
                        <p className="text-gray-600 mt-1">{phase.description}</p>
                      </div>
                    </div>
                    <Badge className="bg-teal-100 text-teal-800">
                      {phase.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="ml-16">
                    <h4 className="font-semibold mb-3">Activités clés :</h4>
                    <div className="flex flex-wrap gap-2">
                      {phase.activities.map((activity, idx) => (
                        <Badge key={idx} variant="outline" className="mb-2">
                          {activity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Facteurs de succès */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Facteurs Clés de Succès</h2>
            <p className="text-xl text-gray-600">Les éléments essentiels pour une transformation réussie</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="font-semibold mb-2">Leadership Engagé</h3>
              <p className="text-sm text-gray-600">Support visible de la direction</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="font-semibold mb-2">Communication Claire</h3>
              <p className="text-sm text-gray-600">Messages cohérents et transparents</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="font-semibold mb-2">Formation Adaptée</h3>
              <p className="text-sm text-gray-600">Montée en compétences progressive</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="font-semibold mb-2">Accompagnement Humain</h3>
              <p className="text-sm text-gray-600">Soutien émotionnel et motivation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-teal-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Réussissez Votre Transformation IA
          </h2>
          <p className="text-xl text-teal-100 mb-8">
            Bénéficiez de notre expertise en conduite du changement pour une adoption réussie
          </p>
          
          <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100" asChild>
            <Link to="/contact">
              Démarrer l'accompagnement <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AccompagnementChange;
