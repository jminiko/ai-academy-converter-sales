
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Database, Cloud, Shield, CheckCircle, Users, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const MigrationIA = () => {
  const services = [
    {
      icon: Database,
      title: "Audit des Systèmes Existants",
      description: "Analyse complète de votre infrastructure actuelle",
      features: ["Évaluation technique", "Cartographie des données", "Identification des risques", "Plan de migration"]
    },
    {
      icon: Cloud,
      title: "Migration Cloud",
      description: "Transition vers des solutions IA cloud natives",
      features: ["AWS/Azure/GCP", "Conteneurisation", "Automatisation", "Monitoring"]
    },
    {
      icon: Shield,
      title: "Sécurisation des Données",
      description: "Protection et conformité durant le processus",
      features: ["Chiffrement", "RGPD compliance", "Audit trails", "Backup sécurisé"]
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Analyse Préliminaire",
      description: "Audit complet de l'existant et définition des objectifs"
    },
    {
      step: "2", 
      title: "Plan de Migration",
      description: "Stratégie détaillée avec timeline et ressources"
    },
    {
      step: "3",
      title: "Tests et Validation",
      description: "Environnement de test pour valider la migration"
    },
    {
      step: "4",
      title: "Migration Progressive",
      description: "Déploiement par étapes avec validation continue"
    },
    {
      step: "5",
      title: "Optimisation",
      description: "Ajustements et optimisations post-migration"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <Database className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            Migration IA : Transition Sécurisée
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Migrez vos solutions IA vers des infrastructures modernes sans interruption 
            de service. Expertise technique et accompagnement personnalisé.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link to="/contact">Demander un audit</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
              <Link to="/contact">Planifier la migration</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services de Migration</h2>
            <p className="text-xl text-gray-600">Accompagnement complet pour votre transition</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-blue-100 rounded-lg mr-4">
                      <service.icon className="h-6 w-6 text-blue-600" />
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

      {/* Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Processus de Migration</h2>
            <p className="text-xl text-gray-600">Méthodologie éprouvée pour une transition réussie</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-6">
                  {step.step}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-2">72h</div>
              <p className="text-gray-600">Temps moyen de migration</p>
            </div>
            <div>
              <Shield className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-600">Sécurité garantie</p>
            </div>
            <div>
              <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-2">150+</div>
              <p className="text-gray-600">Migrations réussies</p>
            </div>
            <div>
              <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <div className="text-3xl font-bold text-blue-600 mb-2">99.9%</div>
              <p className="text-gray-600">Taux de succès</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Prêt à Migrer Vos Solutions IA ?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Bénéficiez de notre expertise pour une migration sans stress
          </p>
          
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
            <Link to="/contact">
              Démarrer la migration <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MigrationIA;
