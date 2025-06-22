
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, BookOpen, Target, Trophy, CheckCircle, Clock, ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

const FormationEquipe = () => {
  const programs = [
    {
      icon: BookOpen,
      title: "Formation IA Fondamentaux",
      duration: "3 jours",
      level: "Débutant",
      participants: "5-15 personnes",
      description: "Introduction complète à l'IA pour équipes non-techniques",
      modules: [
        "Concepts de base de l'IA",
        "Applications métier",
        "Outils no-code/low-code",
        "Cas d'usage pratiques"
      ]
    },
    {
      icon: Target,
      title: "Formation IA Technique",
      duration: "5 jours",
      level: "Intermédiaire",
      participants: "5-12 personnes", 
      description: "Formation avancée pour développeurs et data scientists",
      modules: [
        "Machine Learning avancé",
        "Deep Learning",
        "Déploiement de modèles",
        "MLOps et monitoring"
      ]
    },
    {
      icon: Trophy,
      title: "Formation Leadership IA",
      duration: "2 jours",
      level: "Executive",
      participants: "5-10 personnes",
      description: "Stratégie IA pour dirigeants et managers",
      modules: [
        "Stratégie de transformation IA",
        "ROI et mesure de performance",
        "Gestion du changement",
        "Éthique et gouvernance IA"
      ]
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Formation Sur-Mesure",
      description: "Adaptée aux besoins spécifiques de votre équipe"
    },
    {
      icon: Clock,
      title: "Flexibilité Horaire",
      description: "Planning adapté à vos contraintes professionnelles"
    },
    {
      icon: Trophy,
      title: "Certification Officielle",
      description: "Reconnaissance des compétences acquises"
    },
    {
      icon: Target,
      title: "Accompagnement Post-Formation",
      description: "Suivi personnalisé pendant 3 mois"
    }
  ];

  const stats = [
    { value: "500+", label: "Équipes formées", icon: Users },
    { value: "98%", label: "Taux de satisfaction", icon: Star },
    { value: "85%", label: "Amélioration des compétences", icon: Target },
    { value: "24h", label: "Support post-formation", icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Users className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Formation Équipe IA : Montée en Compétences
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Formez vos équipes aux technologies IA avec nos programmes sur-mesure. 
            De l'initiation à l'expertise, accompagnement personnalisé garanti.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <p className="text-purple-100 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
          
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100" asChild>
            <Link to="/contact">Demander un devis formation</Link>
          </Button>
        </div>
      </section>

      {/* Programmes de formation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Programmes de Formation</h2>
            <p className="text-xl text-gray-600">Solutions adaptées à tous les niveaux d'expertise</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <div className="p-3 bg-purple-100 rounded-lg mr-4">
                        <program.icon className="h-6 w-6 text-purple-600" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{program.title}</CardTitle>
                        <div className="flex gap-2 mt-2">
                          <Badge variant="outline">{program.level}</Badge>
                          <Badge variant="outline">{program.duration}</Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">{program.description}</p>
                  <p className="text-sm text-purple-600 font-medium">{program.participants}</p>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-3">Modules inclus :</h4>
                  <ul className="space-y-2">
                    {program.modules.map((module, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                        {module}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" variant="outline" asChild>
                    <Link to="/contact">Programmer cette formation</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Pourquoi Choisir Nos Formations ?</h2>
            <p className="text-xl text-gray-600">Avantages exclusifs pour votre équipe</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <benefit.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Processus de formation */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Processus</h2>
            <p className="text-xl text-gray-600">Approche structurée pour des résultats optimaux</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Évaluation</h3>
              <p className="text-sm text-gray-600">Analyse des besoins et du niveau actuel</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Personnalisation</h3>
              <p className="text-sm text-gray-600">Adaptation du programme à votre contexte</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Formation</h3>
              <p className="text-sm text-gray-600">Sessions interactives avec experts</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Pratique</h3>
              <p className="text-sm text-gray-600">Exercices pratiques sur vos données</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">5</div>
              <h3 className="font-semibold mb-2">Suivi</h3>
              <p className="text-sm text-gray-600">Accompagnement post-formation</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Transformez Votre Équipe avec l'IA
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Investissez dans les compétences de demain avec nos formations expertes
          </p>
          
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100" asChild>
            <Link to="/contact">
              Démarrer la formation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FormationEquipe;
