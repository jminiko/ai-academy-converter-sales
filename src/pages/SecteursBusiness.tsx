
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Heart, GraduationCap, Car, ShoppingCart, Briefcase, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SecteursBusiness = () => {
  const secteurs = [
    {
      name: "Santé & Médical",
      icon: Heart,
      description: "Diagnostic assisté, télémédecine, analyse d'imagerie médicale",
      useCases: ["Diagnostic IA", "Chatbots médicaux", "Gestion des dossiers patients", "Analyse prédictive"],
      color: "bg-red-100 text-red-800"
    },
    {
      name: "Finance & Banque",
      icon: TrendingUp,
      description: "Détection de fraude, trading algorithmique, conseil financier",
      useCases: ["Scoring crédit", "Trading IA", "Conformité réglementaire", "Analyse des risques"],
      color: "bg-green-100 text-green-800"
    },
    {
      name: "E-commerce & Retail",
      icon: ShoppingCart,
      description: "Recommandations produits, optimisation des prix, gestion stock",
      useCases: ["Moteur de recommandation", "Chatbot vente", "Prévision demande", "Personnalisation"],
      color: "bg-purple-100 text-purple-800"
    },
    {
      name: "Éducation",
      icon: GraduationCap,
      description: "Apprentissage adaptatif, correction automatique, tutorat IA",
      useCases: ["Tutorat personnalisé", "Évaluation automatique", "Contenu adaptatif", "Suivi progrès"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      name: "Automobile",
      icon: Car,
      description: "Véhicules autonomes, maintenance prédictive, optimisation",
      useCases: ["Conduite autonome", "Maintenance prédictive", "Assurance usage", "Optimisation trajets"],
      color: "bg-orange-100 text-orange-800"
    },
    {
      name: "Services Professionnels",
      icon: Briefcase,
      description: "Automatisation RH, analyse juridique, conseil stratégique",
      useCases: ["Recrutement IA", "Analyse contrats", "Planification ressources", "Audit automatisé"],
      color: "bg-indigo-100 text-indigo-800"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Header />
      
      <section className="py-20 bg-gradient-to-r from-gray-800 to-gray-900">
        <div className="container mx-auto px-4 text-center">
          <Building className="h-16 w-16 text-white mx-auto mb-6" />
          <h1 className="text-5xl font-bold text-white mb-6">
            L'IA par Secteur d'Activité
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Découvrez comment l'intelligence artificielle transforme chaque secteur 
            et créez votre stratégie IA adaptée à votre métier
          </p>
          <Button size="lg" className="bg-white text-gray-800 hover:bg-gray-100">
            Analyser mon secteur
          </Button>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Secteurs d'Application</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {secteurs.map((secteur, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gray-100 rounded-lg">
                      <secteur.icon className="h-8 w-8 text-gray-700" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{secteur.name}</CardTitle>
                      <Badge className={secteur.color}>Secteur clé</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{secteur.description}</p>
                  
                  <h4 className="font-semibold mb-2">Cas d'usage principaux :</h4>
                  <ul className="space-y-1">
                    {secteur.useCases.map((useCase, caseIndex) => (
                      <li key={caseIndex} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                        {useCase}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full mt-4" variant="outline" asChild>
                    <Link to="/contact">En savoir plus</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Votre Secteur n'est pas Listé ?</h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Nous accompagnons tous les secteurs dans leur transformation IA. 
            Contactez-nous pour une analyse personnalisée.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">
                Consultation gratuite <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              Télécharger le guide sectoriel
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SecteursBusiness;
