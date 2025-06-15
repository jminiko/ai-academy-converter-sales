
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cog, Brain, Rocket, Users, CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: "Audit IA & Stratégie",
      description: "Analyse complète de votre entreprise pour identifier les opportunités d'automatisation et d'IA",
      price: "À partir de 2 500€",
      duration: "2-3 semaines",
      features: [
        "Audit complet des processus",
        "Identification des cas d'usage IA",
        "Roadmap de transformation",
        "Analyse ROI détaillée",
        "Plan de formation personnalisé"
      ]
    },
    {
      icon: Cog,
      title: "Implémentation Sur-Mesure",
      description: "Développement et intégration de solutions IA personnalisées pour vos besoins spécifiques",
      price: "À partir de 8 000€",
      duration: "4-12 semaines",
      features: [
        "Développement de solutions custom",
        "Intégration avec vos systèmes",
        "Formation des équipes",
        "Tests et déploiement",
        "Support post-lancement"
      ]
    },
    {
      icon: Rocket,
      title: "Transformation Digitale IA",
      description: "Accompagnement complet pour révolutionner votre entreprise avec l'intelligence artificielle",
      price: "Sur devis",
      duration: "3-6 mois",
      features: [
        "Stratégie de transformation complète",
        "Automatisation de tous les processus",
        "Formation de toutes les équipes",
        "Conduite du changement",
        "Garantie de résultats"
      ]
    },
    {
      icon: Users,
      title: "Support & Maintenance",
      description: "Accompagnement continu pour optimiser et maintenir vos solutions IA",
      price: "À partir de 500€/mois",
      duration: "En continu",
      features: [
        "Support technique 24/7",
        "Mises à jour régulières",
        "Optimisation des performances",
        "Formation continue des équipes",
        "Veille technologique"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge className="mb-4 bg-blue-100 text-blue-800">
            🚀 Services Premium
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Services d'Implémentation IA
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            De la stratégie à la mise en œuvre, nous vous accompagnons dans votre transformation 
            digitale avec l'intelligence artificielle. Solutions sur-mesure et résultats garantis.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-2 hover:border-blue-200">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-4">
                  <service.icon className="h-10 w-10 text-blue-600" />
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </div>
                <p className="text-gray-600 text-lg">
                  {service.description}
                </p>
              </CardHeader>
              
              <CardContent>
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-2xl font-bold text-blue-600">{service.price}</p>
                      <p className="text-sm text-gray-500">Durée: {service.duration}</p>
                    </div>
                  </div>
                  
                  <h4 className="font-semibold mb-3">Inclus dans ce service :</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Button className="w-full mb-3" asChild>
                  <Link to="/contact">
                    Demander un devis <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                
                <Button variant="outline" className="w-full">
                  <Link to="/contact">Consultation gratuite</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Notre Méthodologie</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Analyse</h3>
              <p className="text-sm text-gray-600">Audit complet de vos processus et identification des opportunités</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Stratégie</h3>
              <p className="text-sm text-gray-600">Élaboration d'une roadmap personnalisée et planification du projet</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Mise en œuvre</h3>
              <p className="text-sm text-gray-600">Développement, intégration et formation de vos équipes</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Optimisation</h3>
              <p className="text-sm text-gray-600">Suivi des performances et amélioration continue</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-blue-600 text-white rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-4">Prêt à Transformer Votre Entreprise ?</h2>
          <p className="text-xl mb-6">
            Consultation gratuite pour analyser vos besoins et vous proposer la solution optimale
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
            <Link to="/contact">
              Planifier ma consultation <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
