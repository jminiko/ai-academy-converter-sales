
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Users, Target, TrendingUp, ArrowRight, Brain, Search, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const Consulting = () => {
  const services = [
    {
      icon: Search,
      title: "Audit IA & Stratégie",
      description: "Analyse complète de votre maturité IA et définition de votre roadmap",
      duration: "2-4 semaines",
      price: "À partir de 8 500€",
      deliverables: [
        "Audit complet de l'existant",
        "Analyse de la maturité IA",
        "Roadmap stratégique 18 mois",
        "Business case détaillé",
        "Plan de formation équipes"
      ]
    },
    {
      icon: Brain,
      title: "Conseil en Transformation IA",
      description: "Accompagnement stratégique pour votre transformation digitale",
      duration: "3-6 mois",
      price: "À partir de 15 000€",
      deliverables: [
        "Stratégie de transformation",
        "Sélection des use cases prioritaires",
        "Architecture technique",
        "Plan de conduite du changement",
        "Formation des équipes dirigeantes"
      ]
    },
    {
      icon: Target,
      title: "Optimisation Processus",
      description: "Identification et optimisation des processus automatisables",
      duration: "4-8 semaines",
      price: "À partir de 12 000€",
      deliverables: [
        "Cartographie des processus",
        "Analyse ROI par processus",
        "Priorisation des automatisations",
        "Spécifications techniques",
        "Plan d'implémentation"
      ]
    }
  ];

  const methodology = [
    {
      step: "1",
      title: "Diagnostic",
      description: "Analyse approfondie de votre organisation, processus et enjeux métier"
    },
    {
      step: "2", 
      title: "Stratégie",
      description: "Définition de la vision IA et élaboration de la roadmap personnalisée"
    },
    {
      step: "3",
      title: "Pilotage",
      description: "Accompagnement dans l'implémentation et suivi des résultats"
    },
    {
      step: "4",
      title: "Optimisation",
      description: "Amélioration continue et montée en échelle des solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-indigo-100 text-indigo-800">
            🎯 Consulting IA Stratégique
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Consulting IA : Accélérez Votre Transformation
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Bénéficiez de l'expertise de nos consultants seniors pour définir et déployer 
            votre stratégie IA. Plus de 200 entreprises nous font confiance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700" asChild>
              <Link to="/contact">Consultation gratuite</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/contact">Télécharger notre méthodologie</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Users className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-indigo-600">200+</div>
              <p className="text-gray-600">Entreprises accompagnées</p>
            </div>
            <div className="text-center">
              <TrendingUp className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-indigo-600">400%</div>
              <p className="text-gray-600">ROI moyen en 12 mois</p>
            </div>
            <div className="text-center">
              <Target className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-indigo-600">95%</div>
              <p className="text-gray-600">Projets réussis</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services de Consulting</h2>
            <p className="text-xl text-gray-600">Expertise sur-mesure pour votre transformation IA</p>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center mb-4">
                        <service.icon className="h-8 w-8 text-indigo-600 mr-3" />
                        <h3 className="text-2xl font-bold">{service.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-6">{service.description}</p>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                        <div>
                          <h4 className="font-semibold mb-2">Durée :</h4>
                          <p className="text-gray-600">{service.duration}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Prix :</h4>
                          <p className="text-indigo-600 font-semibold">{service.price}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-4">Livrables inclus :</h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start text-sm">
                            <CheckCircle className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      
                      <Button className="w-full mt-6" asChild>
                        <Link to="/contact">En savoir plus</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Méthodologie */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Notre Méthodologie</h2>
            <p className="text-xl text-gray-600">Approche éprouvée pour garantir le succès de vos projets IA</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {methodology.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                {index < methodology.length - 1 && (
                  <ArrowRight className="h-6 w-6 text-gray-400 mx-auto mt-6 hidden md:block" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Études de cas */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Études de Cas</h2>
            <p className="text-xl text-gray-600">Découvrez comment nous avons transformé nos clients</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit">Industrie</Badge>
                <CardTitle>Automatisation Qualité - Manufacturier</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Déploiement d'IA pour le contrôle qualité automatisé dans une usine de 500 employés.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold">Gains :</p>
                    <p className="text-gray-600">-40% défauts</p>
                  </div>
                  <div>
                    <p className="font-semibold">ROI :</p>
                    <p className="text-indigo-600">280% en 8 mois</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Badge className="w-fit">Services</Badge>
                <CardTitle>Chatbot IA - Banque</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Implémentation d'un assistant virtuel intelligent pour 2M de clients.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-semibold">Gains :</p>
                    <p className="text-gray-600">-60% tickets support</p>
                  </div>
                  <div>
                    <p className="font-semibold">ROI :</p>
                    <p className="text-indigo-600">320% en 6 mois</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Transformez Votre Entreprise Avec L'IA
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Consultation gratuite de 30 minutes avec nos experts seniors
          </p>
          
          <Button size="lg" className="bg-white text-indigo-600 hover:bg-gray-100" asChild>
            <Link to="/contact">
              Réserver ma consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Consulting;
