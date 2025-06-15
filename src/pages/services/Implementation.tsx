
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Code, Cog, Zap, ArrowRight, Rocket, Shield, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Implementation = () => {
  const solutions = [
    {
      icon: Code,
      title: "Développement IA Custom",
      description: "Solutions IA sur-mesure développées spécifiquement pour vos besoins",
      features: [
        "Analyse de besoins approfondie",
        "Architecture technique optimisée", 
        "Développement full-stack",
        "Tests et validation",
        "Déploiement sécurisé",
        "Formation utilisateurs"
      ],
      duration: "6-16 semaines",
      price: "À partir de 25 000€"
    },
    {
      icon: Cog,
      title: "Intégration Plateforme IA",
      description: "Intégration d'APIs IA existantes dans vos systèmes",
      features: [
        "Audit technique existant",
        "Sélection APIs optimales",
        "Développement connecteurs",
        "Middleware de sécurité",
        "Tests d'intégration",
        "Documentation technique"
      ],
      duration: "3-8 semaines", 
      price: "À partir de 15 000€"
    },
    {
      icon: Zap,
      title: "Automatisation Workflow",
      description: "Automatisation complète de vos processus métier avec IA",
      features: [
        "Mapping processus actuels",
        "Design workflows optimisés",
        "Intégration outils existants",
        "IA décisionnelle",
        "Monitoring temps réel",
        "Optimisation continue"
      ],
      duration: "4-12 semaines",
      price: "À partir de 20 000€"
    }
  ];

  const technologies = [
    { name: "OpenAI GPT-4", category: "IA Générative", icon: "🧠" },
    { name: "Azure AI", category: "Cloud IA", icon: "☁️" },
    { name: "TensorFlow", category: "Machine Learning", icon: "🔬" },
    { name: "Python/FastAPI", category: "Backend", icon: "🐍" },
    { name: "React/TypeScript", category: "Frontend", icon: "⚛️" },
    { name: "Docker/K8s", category: "DevOps", icon: "🐳" }
  ];

  const process = [
    {
      phase: "Analyse",
      duration: "1-2 semaines",
      activities: [
        "Audit technique existant",
        "Définition des requirements",
        "Architecture solution",
        "Planning projet détaillé"
      ]
    },
    {
      phase: "Développement", 
      duration: "4-12 semaines",
      activities: [
        "Setup environnements",
        "Développement itératif",
        "Tests unitaires et intégration",
        "Code review continu"
      ]
    },
    {
      phase: "Déploiement",
      duration: "1-2 semaines", 
      activities: [
        "Tests en environnement prod",
        "Migration données",
        "Formation utilisateurs",
        "Go-live assisté"
      ]
    },
    {
      phase: "Support",
      duration: "3-12 mois",
      activities: [
        "Monitoring performances",
        "Corrections bugs",
        "Évolutions mineures",
        "Optimisation continue"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-cyan-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-cyan-100 text-cyan-800">
            🚀 Implémentation IA
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Implémentation IA : De l'Idée à la Production
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Nos équipes d'experts développent et déploient vos solutions IA. 
            De l'intégration API à l'application custom, nous concrétisons vos projets.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-cyan-600 hover:bg-cyan-700" asChild>
              <Link to="/contact">Évaluation gratuite</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Voir notre portfolio</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Rocket className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-cyan-600">6 sem</div>
              <p className="text-gray-600">Délai moyen</p>
            </div>
            <div className="text-center">
              <Shield className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-cyan-600">99.9%</div>
              <p className="text-gray-600">Disponibilité</p>
            </div>
            <div className="text-center">
              <Clock className="h-8 w-8 text-cyan-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-cyan-600">24/7</div>
              <p className="text-gray-600">Support inclus</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Solutions d'Implémentation</h2>
            <p className="text-xl text-gray-600">Expertise technique pour tous vos projets IA</p>
          </div>

          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center mb-4">
                        <solution.icon className="h-8 w-8 text-cyan-600 mr-3" />
                        <h3 className="text-2xl font-bold">{solution.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-6">{solution.description}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-semibold mb-2">Durée :</h4>
                          <p className="text-gray-600">{solution.duration}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Prix :</h4>
                          <p className="text-cyan-600 font-semibold">{solution.price}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-4">Prestations incluses :</h4>
                      <ul className="space-y-2 mb-6">
                        {solution.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-cyan-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      
                      <Button className="w-full bg-cyan-600 hover:bg-cyan-700" asChild>
                        <Link to="/contact">Démarrer le projet</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Stack Technique</h2>
            <p className="text-xl text-gray-600">Technologies de pointe pour des solutions robustes</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {technologies.map((tech, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="font-semibold mb-2">{tech.name}</h3>
                <Badge variant="outline">{tech.category}</Badge>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Processus */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Processus</h2>
            <p className="text-xl text-gray-600">Méthodologie éprouvée pour garantir le succès</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((phase, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <CardTitle className="text-xl">{phase.phase}</CardTitle>
                  <Badge variant="outline">{phase.duration}</Badge>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-left">
                    {phase.activities.map((activity, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-cyan-600 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        {activity}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Garanties */}
      <section className="py-20 bg-cyan-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Nos Garanties</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6">
                <Shield className="h-8 w-8 text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Qualité Code</h3>
                <p className="text-sm text-gray-600">Code review systématique et tests automatisés</p>
              </Card>
              
              <Card className="p-6">
                <Clock className="h-8 w-8 text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Délais Respectés</h3>
                <p className="text-sm text-gray-600">Planning tenu ou indemnisation</p>
              </Card>
              
              <Card className="p-6">
                <Rocket className="h-8 w-8 text-cyan-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Performance</h3>
                <p className="text-sm text-gray-600">SLA 99.9% et optimisation continue</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-cyan-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à Concrétiser Votre Projet IA ?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Évaluation technique gratuite et devis sous 48h
          </p>
          
          <Button size="lg" className="bg-white text-cyan-600 hover:bg-gray-100" asChild>
            <Link to="/contact">
              Démarrer mon projet <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Implementation;
